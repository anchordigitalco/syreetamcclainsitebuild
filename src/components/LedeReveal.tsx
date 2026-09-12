/* ============================================================
   R18.1 — THE LEDE LINE MASK. The round's spine.

   A React island, per Jackson's ruling that islands are the preferred
   route and that quality wins over minimalism. R0 installed
   @astrojs/react (^4.4.2), react, react-dom and framer-motion for
   exactly this.

   FRAMER-MOTION IS NOT IMPORTED HERE, AND THAT IS THE POINT.
   framer-motion's `useScroll` adds a scroll listener. The build has
   exactly one — R12's folio — and a second one MUST NOT be added, so
   `useScroll` is banned in this build and the whole of framer-motion's
   scroll surface with it. What was adapted from the 21st.dev
   `TextReveal` component is its CONTAINER/ITEM STAGGER ORCHESTRATION
   and its `per="line"` split. Both are reproduced here without the
   library: the stagger is arithmetic on an index, and the trigger is
   CSS scroll-driven animation (`animation-timeline: view()`).

   THE DIVISION OF LABOUR, WHICH IS THE CONSTRAINT:
     React  owns the DOM structure, the line splitting and the stagger
            orchestration (it computes each line's animation-range and
            writes it as a custom property).
     CSS    owns scroll observation. Always. React never sees a scroll
            event, and there is no listener in this file.

   ---- WHY THE ISLAND NESTS INSIDE THE EXISTING <p> ----------------
   Astro wraps every hydrated island in a real <astro-island> element.
   The lede paragraphs are GRID ITEMS carrying the page's `.win-*`
   placement primitives, so an island mounted IN PLACE OF a lede would
   make <astro-island> the grid item and the <p> an inline inside it —
   moving a left edge, which is the one thing this round may not do.
   Mounted INSIDE the <p>, the <p> keeps its classes, keeps its
   placement and keeps its box; only its text node is replaced. The
   ten sections stay .astro and none of them is converted.

   ---- WHY LINES ARE READ FROM LINE BOXES, NOT FROM THE STRING -----
   The source component's `per="line"` splits on a literal "\n". These
   ledes carry no authored newline — they wrap by width, and the wrap
   point moves with the viewport, with `text-wrap: balance`, and with
   the clamp()d type size. So the split is derived from RENDERED LINE
   BOXES: a Range is walked one character at a time and each character
   is assigned to the line box its own client rect sits on. That reads
   the layout the browser actually performed rather than predicting it.

   ---- WHY PER-LINE AND NOT PER-CHARACTER -------------------------
   R13 measured per-character splitting at a shaping loss of 1.34-4.36px
   across the thirteen widths, and R13.1 re-measured it at weight 700.
   Character spans break kerning across every span boundary. A LINE
   boundary is different in kind: it falls at a space, which is already
   a break opportunity, so no kern pair is split and nothing reshapes.
   That is why this mechanism is per-line and why per-character is
   banned for it.

   ---- THE ENTRY-ANIMATION PATTERN --------------------------------
   The finished state is what this component renders when it does
   nothing. Server-side it emits the intact string. Unhydrated (below
   1280, or coarse pointer, or no JS) it stays the intact string. The
   split itself changes no pixel — verified by measurement, not by
   reading this comment. Every motion rule lives in global.css behind
   html.js-motion + @supports + min-width 1280 + no-preference, so the
   mask exists only where all four hold.
   ============================================================ */
import { useLayoutEffect, useRef, useState } from 'react';

/* THE STAGGER RATIO IS THE PAGE'S OWN, NOT A NEW CONSTANT.
   R13.1's Index hover staggers characters 30ms apart over a 260ms
   transition. 30/260 = 0.1154 — one line's window is offset from the
   previous by 11.54% of that window. Reused here so the two staggered
   mechanisms on the page share one cadence rather than each carrying
   a number chosen inside its own pass. */
const STAGGER = 30 / 260;

/* WHERE THE REVEAL IS ALLOWED TO SPEND ITS TRAVEL.
   These are the two --r18-from / --r18-to anchors from global.css and
   they are read from the stylesheet at runtime rather than restated
   here, per R8.2: "a relationship that must hold is declared against
   its counterpart, never left to fall out of two swept values." Two
   copies of 15/50 — one in CSS for the plate and the Index rows, one
   in TypeScript for the ledes — is exactly that shape, and it would
   agree today and drift the first time either is touched.

   The fallbacks are only for the case where the custom properties
   cannot be read at all; they are never the working values. */
const RANGE_FALLBACK = { from: 0.15, to: 0.5 };

function readRange(): { from: number; to: number } {
  try {
    const cs = getComputedStyle(document.documentElement);
    const num = (v: string, d: number) => {
      const f = parseFloat(v);
      return Number.isFinite(f) ? f / 100 : d;
    };
    const from = num(cs.getPropertyValue('--r18-from'), RANGE_FALLBACK.from);
    const to = num(cs.getPropertyValue('--r18-to'), RANGE_FALLBACK.to);
    return to > from ? { from, to } : RANGE_FALLBACK;
  } catch {
    return RANGE_FALLBACK;
  }
}

export type LedeRevealProps = {
  /** The lede, verbatim from COPY.md. Set as one string; never reworded. */
  text: string;
};

type Line = { text: string; start: number; end: number };

export default function LedeReveal({ text }: LedeRevealProps) {
  // null  = not split (server render, and the state every re-measure
  //         returns to so the browser re-wraps the intact string).
  const [lines, setLines] = useState<Line[] | null>(null);
  const host = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    // Only ever measures the INTACT render. When `lines` is non-null the
    // DOM holds spans, and measuring those would measure this
    // component's own output rather than the browser's line breaking.
    if (lines !== null) return;

    /* BAND 1 ONLY, AND THE GATE IS ON THE SPLIT ITSELF, NOT ONLY ON THE
       CSS. Below 1280 the page has no motion at all, so a split there
       buys nothing and can only be a side effect — the same reasoning
       R13.1 gives for gating the Index's character split rather than
       just its stylesheet ("Gating only the CSS would still ship the
       split DOM to a phone, which is a side effect").

       IT IS A SEPARATE GATE FROM client:media, WHICH DOES NOT DO THIS.
       `(hover: hover) and (pointer: fine)` describes the INPUT DEVICE,
       not the viewport: a desktop browser at 800px wide matches it and
       hydrates. Standing Rules describe that directive as also
       enforcing band 1; measured, it does not, and this line is what
       actually does. Below 1280 the paragraph keeps the bare string
       and bands 2, 3 and 4 are byte-identical to the pre-R18 DOM. */
    if (!window.matchMedia('(min-width: 1280px)').matches) return;
    const el = host.current;
    if (!el) return;

    const node = el.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const raw = node.textContent ?? '';
    if (!raw) return;

    /* ONE CHARACTER, ONE RANGE, ONE RECT. Grouping by the rect's `top`
       is what makes this a reading of the line BOX rather than of the
       string: two characters share a line if and only if the browser
       put them on the same line box. Rounded to a tenth of a pixel
       because a rect's top is a float and identical line boxes can
       differ in the last bits. */
    const range = document.createRange();
    const tops: number[] = [];
    for (let i = 0; i < raw.length; i++) {
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      const r = range.getBoundingClientRect();
      // A collapsed rect is a soft-wrapped space at a line end; it
      // belongs to neither line and is dropped by the trim below.
      tops.push(r.width === 0 && r.height === 0 ? Number.NaN : Math.round(r.top * 10) / 10);
    }

    const out: Line[] = [];
    let current: number | null = null;
    let startIdx = 0;
    for (let i = 0; i <= raw.length; i++) {
      const t = i < raw.length ? tops[i] : Number.POSITIVE_INFINITY;
      if (Number.isNaN(t)) continue;
      if (current === null) { current = t; startIdx = i; continue; }
      if (t !== current) {
        out.push({ text: raw.slice(startIdx, i), start: startIdx, end: i });
        current = Number.isFinite(t) ? t : null;
        startIdx = i;
      }
    }

    /* Collapsible whitespace at a line boundary is dropped, not moved.
       The browser already collapsed it out of the rendered line; a
       block-level line span that kept it would carry a trailing advance
       the intact paragraph does not have. */
    const cleaned = out
      .map((l) => ({ ...l, text: l.text.replace(/^\s+|\s+$/g, '') }))
      .filter((l) => l.text.length > 0);

    // One line is not a stagger and gains nothing from a split. Leave
    // it intact so the simplest case ships the simplest DOM.
    if (cleaned.length < 2) return;

    // Reassembling the lines must reproduce the source string exactly,
    // ignoring the collapsed break whitespace. If it does not, the
    // measurement is wrong and shipping a split would silently alter
    // copy — so bail to the intact string instead.
    const rebuilt = cleaned.map((l) => l.text).join(' ');
    if (rebuilt.replace(/\s+/g, ' ') !== raw.replace(/\s+/g, ' ').trim()) return;

    setLines(cleaned);
  }, [lines, text]);

  /* RE-SPLIT ON RESIZE, because the wrap points move with the width and
     a split taken at load is a frozen copy of one viewport's layout.
     Returning to `lines: null` re-renders the intact string, which is
     what the effect above then measures. Not a scroll listener.

     document.fonts.ready is in here for the same reason R12's folio
     re-measures on it: the first layout is done in a fallback face and
     its line breaks are not Fraunces' line breaks. */
  useLayoutEffect(() => {
    const reset = () => setLines(null);
    const band1 = window.matchMedia('(min-width: 1280px)');
    band1.addEventListener('change', reset);
    window.addEventListener('resize', reset, { passive: true });
    if (document.fonts?.ready) document.fonts.ready.then(reset);
    return () => {
      window.removeEventListener('resize', reset);
      band1.removeEventListener('change', reset);
    };
  }, []);

  if (lines === null) {
    // The finished state, and the server render. `display: contents` in
    // global.css means this span generates no box, so the <p>'s line
    // breaking is identical to having the bare text node here.
    return <span className="lede-raw" ref={host}>{text}</span>;
  }

  /* THE ORCHESTRATION. The whole reveal occupies [from, to] of the
     lede's own cover-progress. Each line's window is
     span/(1 + STAGGER*(n-1)), and window i opens STAGGER of a window
     after window i-1 — so the FIRST line starts exactly on `from` and
     the LAST lands exactly on `to`, however many lines there are.
     Nothing is swept: change the line count and the arithmetic re-runs;
     move the anchors in global.css and both ends follow.

     Written as two custom properties per line rather than as a CSS
     calc() chain, because this is the part the source component's
     container/item variants were doing and it is the part React is
     here to own. */
  const n = lines.length;
  const range = readRange();
  const span = range.to - range.from;
  const win = span / (1 + STAGGER * (n - 1));

  return (
    <>
      {lines.map((l, i) => {
        const from = range.from + i * STAGGER * win;
        return (
          <span
            className="lede-ln"
            key={`${i}-${l.text}`}
            style={
              {
                '--ln-from': `${(from * 100).toFixed(4)}%`,
                '--ln-to': `${((from + win) * 100).toFixed(4)}%`,
              } as React.CSSProperties
            }
          >
            <span className="lede-ln-i">{l.text}</span>
          </span>
        );
      })}
    </>
  );
}
