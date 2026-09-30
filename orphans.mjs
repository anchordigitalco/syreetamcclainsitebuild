// Usage: node orphans.mjs [--base URL] [--from N] [--to N] [--step N] [--widths a,b,c] [--workers N]
//                         [--scrollbar none|classic|both] [--json FILE]
// Defaults: http://localhost:4332 (astro preview), every width 360 to 1600 at 1px, / and /privacy, both
// scrollbar modes.
//
// CONTEXT.md, "No orphans": sweeps every width on preview with reduced motion and every reveal settled,
// and lists each hit by section, element, width range and last line. Zero hits is the pass condition.
// Ported from EverydayLegendsSiteBuild/orphans.mjs and rebuilt for this site's DOM.
//
// Rules, each reported under its own kind:
//   ORPHAN   a text block of two or more lines whose last line holds one word.
//   DISPLAY  display text (ledes, section names, the Feature Quote, Index names) with one word alone
//            on a first or middle line, unless that word fills at least 45% of the line.
//   SPLIT    a word broken across two lines. A hyphenated compound is one word and never splits.
//   NAME     a proper name (NAMES below) broken across lines.
//   MIDDOT   the roles line breaking anywhere but at a middot, or a McClain Brothers program line
//            breaking anywhere but at the | or the middot. The University of Tennessee line may also
//            break between the school and the sport ("University of Tennessee" / "Football | #40").
//   FOOTER   the copyright line breaking anywhere but after "McClain.".
//   KICKER   the Charging It to the Game kicker breaking anywhere but between its two halves.
//   COVER    the Cover name breaking anywhere but after "Dr.". That break is designed, so it is not a
//            NAME or DISPLAY hit.
//   TOPIC    a speaking topic on more than one line.
//   OVERFLOW text reaching past the right edge of its block's content box.
//
// A block is the nearest ancestor of the text whose display is not inline or contents, so an
// inline-block (a button, a link) is its own block. The lede island's per-line spans (.lede-ln,
// .lede-ln-i, block-level at 1280 and up) are part of their <p>, not blocks of their own: they
// hold one line each by construction and would otherwise hide every lede from the check.
// A rendered <br> ends one block segment and starts the next, so authored line breaks (the Charging
// It to the Game coda, About's closing line) are each checked as their own block. A word broken at an
// authored <wbr> (the Instagram handle, which is wider than its margin column) is an authored break
// too, and is not a SPLIT.
// Words are read across text nodes, so the Index names' per-character spans still read as words.
// Words split on any whitespace, non-breaking spaces included; only tokens holding a letter or digit
// count, so a lone middot is not a word.
//
// Settled state: prefers-reduced-motion: reduce, html.js-motion removed (as screenshot.mjs does),
// fonts loaded, lede islands hydrated. Every <details> is opened, so the McClain Brothers program
// lines are checked. Requests off localhost are blocked except Google Fonts (Turnstile and
// Formspree draw nothing this check can read).
// The masthead only lays out at 1280 and up with motion on, so it gets a second pass on those
// widths with motion allowed, checking the masthead alone.
//
// Scrollbar modes (CONTEXT.md, Scope). "none" is Puppeteer's default: it launches Chrome with
// --hide-scrollbars, so the page lays out across the whole window. "classic" drops that flag and
// styles a 15px ::-webkit-scrollbar, which takes layout space as a desktop scrollbar does: the page
// lays out 15px narrower while 100vw still counts the whole window. Every classic load is checked
// for clientWidth = innerWidth - 15; a load where it does not hold is NOT MEASURED, never passed.
// Exits 1 on any hit.
import puppeteer from 'puppeteer';
import { writeFile } from 'node:fs/promises';

const arg = (name, fallback) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : fallback;
};
const BASE = arg('base', 'http://localhost:4332');
const FROM = Number(arg('from', 360));
const TO = Number(arg('to', 1600));
const STEP = Number(arg('step', 1));
const WORKERS = Number(arg('workers', 4));
const JSON_OUT = arg('json', null);
const MODES = { none: ['none'], classic: ['classic'], both: ['none', 'classic'] }[arg('scrollbar', 'both')];
const SB = 15;
const PAGES = ['/', '/privacy'];
const WIDTHS = arg('widths', null)
  ? arg('widths').split(',').map(Number)
  : Array.from({ length: Math.floor((TO - FROM) / STEP) + 1 }, (_, i) => FROM + i * STEP);
const MAST_WIDTHS = WIDTHS.filter((w) => w >= 1280);

const NAMES = [
  'Dr. Syreeta McClain', 'Syreeta McClain', 'Dr. McClain',
  'Premier Leadership, LLC', 'Premier Leadership',
  'Everyday Legends Foundation', 'Everyday Legends',
  'The McClain Brothers', 'McClain Brothers',
  'Jaylen McClain', 'KJ McClain', 'Cam McClain',
  'Ohio State', 'University of Tennessee', 'Seton Hall Prep',
  'Charging It to the Game', 'Anchor Digital', 'Privacy Policy',
  'Do Not Track', 'Global Privacy Control', 'Cloudflare Turnstile',
];
const DISPLAY = [
  // ledes
  '.about-lede', '.edu-lede', '.prem-lede', '.legends-lede', '.ath-lede', '.idx-lede', '.chg-lede',
  '.contact-lede', '.privacy-lede',
  // section names and headings
  'h1', 'h2', '.mast-name', '.mast-row', '.cover-name-text',
  // the Feature Quote and the Index names
  '.quote-line', '.idx-name',
].join(',');
const ROLES = '.cover-roles';
const PROGRAM = '.idx-bro-prog';
const FOOTER = '.foot-copyright';
const KICKER = '.chg-kicker';
const COVER = '.cover-name';
const TOPIC = '.prem-margin li';

async function check(page, { scope }) {
  return page.evaluate(async (NAMES, DISPLAY, SEL, SCOPE) => {
    const root = SCOPE ? document.querySelector(SCOPE) : document.body;
    if (!root) return [];
    const LEDE_LINE = '.lede-ln, .lede-ln-i';
    const blockOf = (el) => {
      while (el.parentElement && (el.matches(LEDE_LINE) || ['inline', 'contents'].includes(getComputedStyle(el).display))) el = el.parentElement;
      return el;
    };
    // Hidden: display none, visibility hidden, or inside a clipped 1px box (.vh, the honeypot).
    const hiddenCache = new Map();
    const hidden = (el) => {
      if (!el || el === document.body) return false;
      if (hiddenCache.has(el)) return hiddenCache.get(el);
      const cs = getComputedStyle(el);
      // display: contents has no box, and checkVisibility() calls it hidden. The lede island's
      // .lede-raw and <astro-island> are both contents: defer to the parent or every lede is skipped.
      if (cs.display === 'contents') {
        const v = hidden(el.parentElement);
        hiddenCache.set(el, v);
        return v;
      }
      const r = el.getBoundingClientRect();
      const tiny = (r.width <= 1 || r.height <= 1) && (cs.overflow !== 'visible' || cs.clipPath !== 'none');
      const v = tiny || el.matches('script, style, noscript, svg, template, select, option, [hidden]') ||
        !el.checkVisibility({ visibilityProperty: true }) || hidden(el.parentElement);
      hiddenCache.set(el, v);
      return v;
    };

    // Collect each block's characters in document order, with a break marker at every rendered <br>.
    const blocks = new Map();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    for (let n; (n = walker.nextNode()); ) {
      if (n.nodeType === 1) {
        if (n.tagName === 'BR' && n.getClientRects().length && !hidden(n.parentElement)) {
          const b = blockOf(n.parentElement);
          if (blocks.has(b)) blocks.get(b).push(null);
        }
        if (n.tagName === 'WBR' && !hidden(n.parentElement)) {
          const b = blockOf(n.parentElement);
          if (blocks.has(b)) blocks.get(b).push('wbr');
        }
        continue;
      }
      if (!n.parentElement || hidden(n.parentElement)) continue;
      const b = blockOf(n.parentElement);
      if (!n.data.trim() && !blocks.has(b)) continue;
      if (!blocks.has(b)) blocks.set(b, []);
      blocks.get(b).push(n);
    }

    const out = [];
    for (const [block, nodes] of blocks) {
      // Segments between rendered <br>s.
      const segments = [[]];
      for (const n of nodes) n === null ? segments.push([]) : segments[segments.length - 1].push(n);
      const section = block.closest('section[id], header, footer, nav, [id^="sec-"]');
      const sec = section?.id || section?.tagName.toLowerCase() || 'body';
      const el = block.tagName.toLowerCase() + (block.classList.length ? '.' + [...block.classList].join('.') : '');
      const isDisplay = block.matches(DISPLAY) || !!block.closest(DISPLAY);
      const is = (k) => !!block.closest(SEL[k]);
      const bcs = getComputedStyle(block);
      const br = block.getBoundingClientRect();
      const contentLeft = br.left + parseFloat(bcs.borderLeftWidth) + parseFloat(bcs.paddingLeft);
      const contentRight = br.right - parseFloat(bcs.borderRightWidth) - parseFloat(bcs.paddingRight);
      const lineBox = contentRight - contentLeft;

      segments.forEach((seg, segIndex) => {
        // One string over every text node in the segment, remembering where each character lives.
        const map = [];
        let str = '';
        // The island drops the space at each line boundary (each line is its own block span), so a
        // separator stands in for it; otherwise the last word of one line fuses with the next line's first.
        let prevLine = null;
        for (const n of seg) {
          if (n === 'wbr') { map.push(null); str += '\u200b'; continue; }
          const ln = n.parentElement.closest('.lede-ln');
          if (ln !== prevLine && str) { map.push(null); str += ' '; }
          prevLine = ln;
          for (let i = 0; i < n.data.length; i++) { map.push([n, i]); str += n.data[i]; }
        }
        const words = [];
        const re = /[^\s ]+/gu;
        for (let m; (m = re.exec(str)); ) {
          let a = m.index, z = m.index + m[0].length - 1;
          while (!map[a] && a < z) a++;
          while (!map[z] && z > a) z--;
          if (!map[a] || !map[z]) continue;
          const [sn, si] = map[a];
          const [en, ei] = map[z];
          const range = document.createRange();
          range.setStart(sn, si);
          range.setEnd(en, ei + 1);
          const rects = [...range.getClientRects()].filter((r) => r.width > 0 && r.height > 0);
          if (!rects.length) continue;
          words.push({ text: m[0].replace(/\u200b/g, ''), wbr: (m[0].match(/\u200b/g) || []).length, rects, isWord: /[\p{L}\p{N}]/u.test(m[0]), lines: [] });
        }
        if (!words.length) return;

        // A fragment starts a new line when its vertical centre drops more than half a fragment
        // below the last one's. Read from position, not from left edges: the Index names' glyph
        // spans kern into each other, and display leading under 1.2 makes adjacent lines' boxes
        // overlap, so neither "starts left of the last right edge" nor "top below last bottom" holds.
        const lines = [[]];
        let prev = null;
        const cy = (r) => (r.top + r.bottom) / 2;
        for (const w of words) {
          w.rects.forEach((r, i) => {
            if (prev && cy(r) - cy(prev) > 0.5 * Math.min(r.height, prev.height)) lines.push([]);
            prev = r;
            w.lines.push(lines.length - 1);
            // A word's later fragments are only a continuation when they land on a new line; the
            // Index names' glyph spans give one rect per letter on the same line.
            if (i === 0) lines[lines.length - 1].push(w);
            else if (w.lines[w.lines.length - 1] !== w.lines[w.lines.length - 2]) lines[lines.length - 1].push({ text: `(${w.text} cont.)`, isWord: false });
          });
        }
        const lineText = (l) => l.map((w) => w.text).join(' ');
        const all = words.map((w) => w.text).join(' ');
        const text = all.length > 60 ? all.slice(0, 57) + '...' : all;
        const hit = (kind, detail) => out.push({ kind, sec, el, seg: segIndex, text, detail, last: lineText(lines[lines.length - 1]) });

        const counts = lines.map((l) => l.filter((w) => w.isWord).length);
        const breaks = lines.slice(1).map((l, i) => [lines[i][lines[i].length - 1], l[0]]);
        // The Cover name's one designed break: "Dr." / "Syreeta McClain".
        const coverDesigned = is('cover') && lines.length === 2 && lineText(lines[0]) === 'Dr.';
        if (lines.length >= 2 && counts[counts.length - 1] === 1) hit('ORPHAN', `${lines.length} lines`);
        if (isDisplay && lines.length >= 2 && !coverDesigned) {
          counts.forEach((c, i) => {
            if (c !== 1 || i === counts.length - 1) return;
            // A long word that fills at least 45% of its line is allowed; a short one reads as a hole.
            const w = lines[i].find((x) => x.isWord);
            const width = w.rects.filter((_, k) => w.lines[k] === i).reduce((a, r) => a + r.width, 0);
            if (width < 0.45 * lineBox) hit('DISPLAY', `line ${i + 1} of ${lines.length} is "${lineText(lines[i])}" (${Math.round((100 * width) / lineBox)}% of the line)`);
          });
        }
        for (const w of words) {
          const right = Math.max(...w.rects.map((r) => r.right));
          if (right > contentRight + 1) hit('OVERFLOW', `"${w.text}" ends ${(right - contentRight).toFixed(1)}px past its block`);
        }
        if (is('topic') && lines.length >= 2) hit('TOPIC', `${lines.length} lines`);
        for (const w of words) if (new Set(w.lines).size > 1 + w.wbr) hit('SPLIT', `"${w.text}" broken across lines`);

        // Proper names: every token of the name on one line. Longest name first; a shorter name
        // inside one already matched ("Syreeta McClain" in "Dr. Syreeta McClain") is not reported twice.
        const claimed = new Set();
        for (const name of [...NAMES].sort((a, b) => b.length - a.length)) {
          const nt = name.split(' ');
          for (let i = 0; i + nt.length <= words.length; i++) {
            const ok = nt.every((t, j) => (j === nt.length - 1 ? words[i + j].text.startsWith(t) : words[i + j].text === t));
            if (!ok || nt.some((_, j) => claimed.has(i + j))) continue;
            nt.forEach((_, j) => claimed.add(i + j));
            const span = words.slice(i, i + nt.length);
            if (new Set(span.flatMap((w) => w.lines)).size <= 1) continue;
            // Designed breaks, each checked under its own kind instead.
            if (is('kicker') && name === 'Charging It to the Game') continue;
            if (coverDesigned && name === 'Dr. Syreeta McClain') continue;
            hit('NAME', `"${name}" broken across lines`);
          }
        }

        // Allowed break points only.
        const at = (a, b, marks) => marks.some((m) => a.text.endsWith(m) || b.text.startsWith(m));
        for (const [a, b] of breaks) {
          const where = `breaks between "${a.text}" and "${b.text}"`;
          if (is('roles') && !at(a, b, ['·'])) hit('MIDDOT', where);
          // The school / sport break, UT only: "University of Tennessee" / "Football | #40".
          const schoolSport = a.text === 'Tennessee' && b.text === 'Football';
          if (is('program') && !at(a, b, ['·', '|']) && !schoolSport) hit('MIDDOT', where);
          if (is('footer') && a.text !== 'McClain.') hit('FOOTER', where);
          if (is('kicker') && !(a.text === 'It' && b.text === 'to')) hit('KICKER', where);
          if (is('cover') && a.text !== 'Dr.') hit('COVER', where);
        }
      });
    }
    return out;
  }, NAMES, DISPLAY, { roles: ROLES, program: PROGRAM, footer: FOOTER, kicker: KICKER, cover: COVER, topic: TOPIC }, scope);
}

async function load(browser, url, width, motion, mode) {
  const page = await browser.newPage();
  if (mode === 'classic') {
    await page.evaluateOnNewDocument((sb) => document.addEventListener('DOMContentLoaded', () => {
      const s = document.createElement('style');
      s.textContent = `::-webkit-scrollbar{width:${sb}px;height:${sb}px}`;
      document.head.append(s);
    }), SB);
  }
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const u = new URL(req.url());
    const local = u.hostname === 'localhost' || u.hostname === '127.0.0.1';
    const fonts = u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
    local || fonts || u.protocol === 'data:' ? req.continue() : req.abort();
  });
  await page.setViewport({ width, height: width < 751 ? 844 : 900 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: motion }]);
  await page.goto(url, { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(async (settle) => {
    await document.fonts.ready;
    if (settle) document.documentElement.classList.remove('js-motion');
    document.querySelectorAll('details').forEach((d) => (d.open = true));
    // Lede islands hydrate on a fine pointer; wait for all of them, then for the post-fonts re-split.
    if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const t0 = performance.now();
      while (document.querySelector('astro-island[ssr]') && performance.now() - t0 < 5000) await new Promise((r) => setTimeout(r, 50));
    }
    // Timers, not requestAnimationFrame: with several tabs open, a background tab's frames stall.
    await new Promise((r) => setTimeout(r, 200));
  }, motion === 'reduce');
  if (mode === 'classic') {
    const [iw, cw] = await page.evaluate(() => [innerWidth, document.documentElement.clientWidth]);
    if (iw - cw !== SB) throw new Error(`classic scrollbar not in layout: innerWidth ${iw}, clientWidth ${cw}`);
  }
  return page;
}

// One browser per worker, relaunched if it dies: a single shared Chrome crashed mid-sweep once, and
// every later width then failed.
const launch = (mode) => puppeteer.launch({
  protocolTimeout: 60000,
  ...(mode === 'classic' ? { ignoreDefaultArgs: ['--hide-scrollbars'] } : {}),
  args: ['--disable-background-timer-throttling', '--disable-renderer-backgrounding', '--disable-backgrounding-occluded-windows'],
});
const jobs = [];
for (const mode of MODES) {
  for (const path of PAGES) for (const width of WIDTHS) jobs.push({ path, width, pass: 'main', mode });
  for (const width of MAST_WIDTHS) jobs.push({ path: '/', width, pass: 'masthead', mode });
}

const results = [];
const failed = [];
let done = 0;
async function worker() {
  const browsers = {};
  for (let job; (job = jobs.shift()); ) {
    const url = BASE + job.path;
    const motion = job.pass === 'main' ? 'reduce' : 'no-preference';
    const opts = { scope: job.pass === 'masthead' ? '.masthead' : null };
    // A stuck load is retried on a fresh page; a width that fails twice is reported, never skipped silently.
    let hits = null;
    for (let attempt = 1; attempt <= 2 && !hits; attempt++) {
      let page;
      try {
        if (!browsers[job.mode]?.connected) browsers[job.mode] = await launch(job.mode);
        page = await load(browsers[job.mode], url, job.width, motion, job.mode);
        hits = await check(page, opts);
      } catch (e) {
        if (attempt === 2) failed.push(`${job.mode} ${job.path} @ ${job.width} (${job.pass}): ${e.message.split('\n')[0]}`);
      } finally {
        await page?.close().catch(() => {});
      }
    }
    hits ??= [];
    // The masthead pass owns the masthead; the main pass never sees it (display: none under reduce).
    for (const h of hits) results.push({ ...h, path: job.path, width: job.width, pass: job.pass, mode: job.mode });
    if (++done % 100 === 0) process.stderr.write(`  ${done} loads\n`);
  }
  for (const b of Object.values(browsers)) await b.close().catch(() => {});
}
const total = jobs.length;
await Promise.all(Array.from({ length: WORKERS }, worker));

// Group into width ranges by mode, page, kind, element, segment, and last line.
const ranges = (ws) => {
  ws = [...new Set(ws)].sort((a, b) => a - b);
  const out = [];
  for (const w of ws) {
    const last = out[out.length - 1];
    if (last && w - last[1] <= STEP) last[1] = w;
    else out.push([w, w]);
  }
  return out.map(([a, b]) => (a === b ? `${a}` : `${a}-${b}`)).join(', ');
};
const LABEL = { none: 'no scrollbar (layout width = window width)', classic: `classic ${SB}px scrollbar (layout width = window width - ${SB})` };
console.log(`orphans.mjs  ${BASE}  pages ${PAGES.join(' ')}  widths ${WIDTHS[0]}-${WIDTHS[WIDTHS.length - 1]} step ${STEP}  (${total} loads)`);
for (const mode of MODES) {
  const mine = results.filter((r) => r.mode === mode);
  const groups = new Map();
  for (const r of mine) {
    const key = [r.path, r.kind, r.sec, r.el, r.seg, r.text, r.detail, r.last].join('|');
    if (!groups.has(key)) groups.set(key, { ...r, widths: [] });
    groups.get(key).widths.push(r.width);
  }
  const sorted = [...groups.values()].sort((a, b) =>
    a.path.localeCompare(b.path) || a.sec.localeCompare(b.sec) || a.el.localeCompare(b.el) || a.kind.localeCompare(b.kind) || a.widths[0] - b.widths[0]);
  console.log(`\n==== ${LABEL[mode]} ====`);
  let lastHead = '';
  for (const g of sorted) {
    const head = `\n${g.path}  ${g.sec}  ${g.el}${g.seg ? `  [line ${g.seg + 1}]` : ''}  "${g.text}"${g.pass === 'masthead' ? '  (masthead pass, motion on)' : ''}`;
    if (head !== lastHead) console.log(head);
    lastHead = head;
    console.log(`  ${g.kind.padEnd(8)} ${ranges(g.widths).padEnd(24)} ${g.detail}; last line "${g.last}"`);
  }
  const hitWidths = new Set(mine.map((r) => `${r.path}@${r.width}`)).size;
  console.log(`\n${LABEL[mode]}: ${mine.length ? `${mine.length} hit(s) in ${groups.size} group(s), on ${hitWidths} page-width(s)` : 'Zero hits'} across ${PAGES.length} pages x ${WIDTHS.length} widths${MAST_WIDTHS.length ? ` + ${MAST_WIDTHS.length} masthead widths` : ''}.`);
}
if (failed.length) console.log(`\nNOT MEASURED (failed twice):\n  ${failed.join('\n  ')}`);
if (JSON_OUT) await writeFile(JSON_OUT, JSON.stringify(results, null, 1));
process.exit(results.length || failed.length ? 1 : 0);
