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

/*
 * R8 — THE COVER'S ENTRY IS REMOVED AND THE REMAINING NUMERALS SHIFT
 * UP. This list used to open with { id: 'sec-portrait', n: '01',
 * label: 'Portrait' }.
 *
 * A COVER IS NOT A SECTION. CONTEXT.md's Composition table says the
 * Cover takes no folio, no kicker and no section numeral — it is a
 * cover, not a section — while this list was telling the folio to
 * print "01 PORTRAIT" over it. With FolioMarginalia mounted (R12) that
 * is exactly the confusion the no-section-numerals rule exists to
 * prevent: a lone numeral on a page whose Index runs 01-05 in a
 * different order. The Composition table wins.
 *
 * THE COVER KEEPS ITS id="sec-portrait" AND ITS HIDDEN <h2>Portrait.
 * Those serve the accessibility tree — the heading structure is ten
 * sections, ten <h2>s — and are unrelated to folio tracking. Removing
 * them is NOT part of this change and MUST NOT be inferred from it.
 *
 * THE INDEX'S ENTRY IS HERE IN PAGE ORDER — after Athletic Management,
 * and after the pivot's position. Its `label` is the exact string of
 * the Index's <h2>, "Index", per the locked heading rule that a
 * section's <h2> and its folio label are one string. The entry already
 * existed and is unchanged apart from its numeral.
 *
 * THESE `n` VALUES AND THE INDEX'S OWN 01-05 ARE UNRELATED NUMBERING
 * SYSTEMS AND MUST NOT BE MADE TO AGREE. This list is page order; the
 * Index's numbering is the Index's own, and so are the decorative
 * marks in the abridged sections. Three devices, three numberings.
 */
export const sections: PageSection[] = [
  { id: 'sec-about',               n: '01', label: 'About' },
  { id: 'sec-education',           n: '02', label: 'Educational Leader' },
  { id: 'sec-pillar',              n: '03', label: 'Premier Leadership' },
  { id: 'sec-legends',             n: '04', label: 'Everyday Legends Foundation' },
  { id: 'sec-athletics',           n: '05', label: 'Athletic Management' },
  { id: 'sec-index',               n: '06', label: 'Index' },
  { id: 'charging-it-to-the-game', n: '07', label: 'Charging It to the Game' },
  { id: 'sec-contact',             n: '08', label: 'Contact' },
];
