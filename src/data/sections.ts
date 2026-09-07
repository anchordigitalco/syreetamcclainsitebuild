/**
 * The page's section list — the single source of truth.
 *
 * This existed as a hand-copied literal inside BOTH FolioMarginalia.astro and
 * RunningHead.astro. Phase E had to edit the same eight entries twice, in two
 * files, and keep them byte-identical by hand. CONTEXT.md flagged that drift
 * risk before Phase E; this file removes it.
 *
 * `id` must match the id attribute on the corresponding <section>. `n` is the
 * folio numeral and `label` the folio's running label, so the order here is
 * the visual order of the page and the numbering follows from it.
 *
 * NOTE: the chapter break (#sec-quote) is deliberately absent. It is a pivot
 * between the work and the index, not a section of its own, and the folio
 * correctly goes quiet while it is on screen.
 */
export interface PageSection {
  /** id of the <section> element this entry tracks */
  id: string;
  /** folio numeral, zero-padded */
  n: string;
  /** folio label */
  label: string;
}

export const sections: PageSection[] = [
  { id: 'sec-portrait',            n: '01', label: 'Portrait' },
  { id: 'sec-about',               n: '02', label: 'About' },
  { id: 'sec-education',           n: '03', label: 'Educational Leader' },
  { id: 'sec-pillar',              n: '04', label: 'Premier Leadership' },
  { id: 'sec-legends',             n: '05', label: 'Everyday Legends Foundation' },
  { id: 'sec-athletics',           n: '06', label: 'Athletic Management' },
  { id: 'sec-index',               n: '07', label: 'Index' },
  { id: 'charging-it-to-the-game', n: '08', label: 'Charging It to the Game' },
  { id: 'sec-contact',             n: '09', label: 'Contact' },
];
