// Builds the favicon set in public/ from brand_assets/mcclain-submark.svg. Run: node scripts/generate-icons.cjs
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const REPO = path.resolve(__dirname, '..');
const PUB = path.join(REPO, 'public');
const OBSIDIAN = '#1A1613', GOLD = '#AF8C5C';

const src = fs.readFileSync(path.join(REPO, 'brand_assets/mcclain-submark.svg'), 'utf8')
  .replace(/<metadata>[\s\S]*?<\/metadata>/, '');
// Keep the mark's own paths, data unchanged; drop the three near-invisible
// white/grey overlay fragments (fill set, opacity 3-7%) left by the trace.
const paths = [...src.matchAll(/<path\b([^>]*)\/>/g)]
  .filter(m => !/\bfill=/.test(m[1]))
  .map(m => `<path${m[1]}/>`);

// Paths 5, 6, 8, 11 are the M's diagonal and the script "dr.": the hairlines
// that vanish when the mark is small. Only these thicken, and only at 48 and
// below. Thickening the thin left stem too swamps the S, so it stays as drawn.
const DIAG = new Set([5, 6, 8, 11]);

// Hairline stroke per size, in the submark's own units. Chosen by eye from
// trial sheets at actual size. Above 48 the mark is true to the source.
const HAIR = { 16: 110, 32: 55, 48: 30 };

// Source viewBox: 1259.63 625.33 1597.74 1618.49. The mark's height fills 80%
// of an edge-to-edge Obsidian square: no rounding, no transparency.
const VB = { x: 1259.63, y: 625.33, w: 1597.74, h: 1618.49 };

function svg({ size = 512, hair = 0, style = '' } = {}) {
  const s = size * 0.8 / VB.h;
  const tx = size / 2 - s * (VB.x + VB.w / 2);
  const ty = size / 2 - s * (VB.y + VB.h / 2);
  const f = n => +n.toFixed(4);
  const body = paths.map((p, i) => DIAG.has(i) ? p.replace('<path', '<path class="d"') : p).join('');
  const hairStyle = hair ? `<style>.d{stroke:${GOLD};stroke-width:${hair}px;stroke-linejoin:round}</style>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">${hairStyle}${style}<rect width="${size}" height="${size}" fill="${OBSIDIAN}"/><g fill="${GOLD}" transform="matrix(${f(s)} 0 0 ${f(s)} ${f(tx)} ${f(ty)})">${body}</g></svg>`;
}

// Render at 8x and downsample: smoother than librsvg's direct small render.
async function png(n) {
  const big = await sharp(Buffer.from(svg({ hair: HAIR[n] || 0 })), { density: 72 * 8 * n / 512 }).png().toBuffer();
  return sharp(big).resize(n, n, { kernel: 'lanczos3' }).removeAlpha().png().toBuffer();
}

// ICO with PNG-encoded frames (32-bit RGBA).
function ico(frames) {
  const head = Buffer.alloc(6);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(frames.length, 4);
  let off = 6 + 16 * frames.length;
  const dir = [], data = [];
  for (const { n, buf } of frames) {
    const e = Buffer.alloc(16);
    e.writeUInt8(n, 0); e.writeUInt8(n, 1); e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(off, 12);
    off += buf.length; dir.push(e); data.push(buf);
  }
  return Buffer.concat([head, ...dir, ...data]);
}

(async () => {
  // favicon.svg: drawn small (a tab, a search result), the SVG's own viewport
  // width matches these queries and the hairlines thicken as in the PNGs.
  const q = (min, max, w) => `@media ${min ? `(min-width:${min}px) and ` : ''}(max-width:${max}px){.d{stroke:${GOLD};stroke-width:${w}px;stroke-linejoin:round}}`;
  const small = `<style>${q(0, 24, HAIR[16])}${q(24.01, 40, HAIR[32])}${q(40.01, 48, HAIR[48])}</style>`;
  fs.writeFileSync(path.join(PUB, 'favicon.svg'), svg({ style: small }));

  const rgba = b => sharp(b).ensureAlpha().png().toBuffer();
  const frames = [];
  for (const n of [16, 32, 48]) frames.push({ n, buf: await rgba(await png(n)) });
  fs.writeFileSync(path.join(PUB, 'favicon.ico'), ico(frames));

  for (const [name, n] of [['icon-48.png', 48], ['icon-96.png', 96], ['icon-192.png', 192], ['icon-512.png', 512], ['apple-touch-icon.png', 180]])
    fs.writeFileSync(path.join(PUB, name), await png(n));
  console.log('Icons written to public/');
})();
