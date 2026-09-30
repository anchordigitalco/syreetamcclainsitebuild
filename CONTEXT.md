# CONTEXT.md: Dr. Syreeta McClain

Decisions only. Rewritten September 29, 2026 from the 4,000+ line file, which grew too long
to be followed. Build history lives in git commit messages, never here.

## How this file works

- Loaded into every session through `@CONTEXT.md` in CLAUDE.md.
- MUST stay under 300 lines. MUST NOT hold round logs, build history, or measurements taken
  during a round. Those go in commit messages.
- Editing this file never triggers a stop.
- If this file and a round prompt disagree, the prompt wins for that round. Report the
  conflict at the end of the session. Do not stop for it.
- Stops are for real blockers only: a missing file, or a build that will not run.
- `COPY.md` is the only source of copy for the hub page. `PRIVACY.md` is the only source for
  `/privacy`. MUST NOT reword either.
- **COPY.md is behind the build in three places. These rulings win, and the lines MUST NOT
  return:**
  - Cover credit line ("KNOW Women...") and tagline ("Where Leadership Meets Legacy"): removed
    in PASS G on composition grounds. The tagline appears nowhere on the page.
  - Contact "Direct email" line and the `mailto:` fallback: removed in R21. No email ships.
  - Index entry 01 reads "Premier Leadership", never with the LLC suffix. The suffix appears
    only in the About paragraph, where she wrote it.

## Project

- Client: Dr. Syreeta McClain. Site: drsyreetamcclain.com. One hub page plus `/privacy`.
- Separate from the Everyday Legends Foundation site (everydaylegend.com). Different repo,
  different system. MUST NOT borrow tokens or components across the two.
- Repo: `~/Downloads/SyreetaMcClainSiteBuild`.
- Stack: Astro (SSG), Tailwind, Vercel. React islands (`@astrojs/react` + `framer-motion`)
  exist only for the lede reveals adapted from 21st.dev. Every section stays Astro. No CMS.
- Contact: Formspree with Cloudflare Turnstile (Managed mode, live sitekey). No email address
  appears anywhere on the site, visible or mailto. Inquiry routing by `<select>` value is a
  Formspree account setting, never build work.
- `PUBLIC_FORMSPREE_ENDPOINT` and `PUBLIC_TURNSTILE_SITEKEY` MUST be set in the Vercel
  project. `.env` does not deploy, and without them production silently falls back to the
  Turnstile test key.
- JS budget ceiling: 226,474 bytes built. Every round reports the total.
- Serve: dev on **4331**, preview on **4332** (`astro preview --port 4332`). 4321 and 4322
  are held by other client repos, and Astro silently walks to the next free port, so a
  session on 4321 is measuring the wrong site.

## Governing concept: The Spread

The site is a printed magazine feature, not a website inspired by one. Its vocabulary is
the magazine's: measures, hairline rules, folios, hung numerals, a live margin, chapter
breaks. A move that belongs in a print magazine is in scope. A web-app convention is not.

Which magazine: warm and art-directed, closer to Bazaar than the Wall Street Journal.
Softness comes from the Fraunces `SOFT` axis, Cashmere in the grounds, a warm photo
treatment, italic used as a system, and asymmetric columns. It never comes from new colors.

How it resolves on a scroll: a magazine has facing pages and a physical turn, and a scroll
has neither. Each section is treated as its own spread, and the turn is replaced by giving
each section its own entrance (see the composition table). Two adjacent sections MUST NOT
open the same way.

Ruled out: pink, blush or rose; polaroid mounts; pill buttons; ghost or outline buttons;
boxed form inputs; bento grids; glassmorphism; any script face; flat solid hero grounds.

## Palette (Ayanna J Designs, locked)

| Name | Hex | Role |
|---|---|---|
| Obsidian | `#1A1613` | primary type on light grounds; the dark grounds |
| Smoked Slate | `#474440` | secondary type, supporting elements |
| Antique Gold | `#AF8C5C` | accent only |
| Cashmere | `#D1C7BD` | warm neutral |
| Porcelain | `#E7E2DD` | dominant light ground |

- 60/30/10, gold is the 10. No color outside these five.
- Gold is never a fill and never a background wash.
- **Gold budget: 2 saturated uses at rest.** The About drop cap and "Legacy" in the Feature
  Quote. Every round reports the count before and after, and the two MUST match. The use
  freed when the Cover tagline was cut is not available to spend.

## Typography

- Display: Fraunces (variable). Body: Montserrat. Google Fonts only, no commercial licenses.
  Fraunces stands in for the client's specified MADE Saonara.
- MUST NOT use Newsreader (Anchor Digital's own face), any script face (her logo already
  carries a script "dr."), or Inter, Roboto, Open Sans, Lato, Arial, system-ui, Space
  Grotesk.
- Every Fraunces use sets all four axes explicitly: `opsz`, `SOFT`, `WONK`, `wght`. Left
  unset, Fraunces falls back to wght 900, WONK 1, SOFT 100.

| Role | opsz | SOFT | WONK | wght |
|---|---|---|---|---|
| Largest display | 144 | 10 to 25 | 0 | 300 to 400 |
| Section ledes | 96 | 30 to 40 | 0 | per tokens |
| Pull quote (italic) | 96 | 40 | 1 | per tokens |
| Drop cap | 144 | 20 | 0 | per tokens |
| Small / body-adjacent | 9 to 24 | 60 to 80 | 0 | per tokens |

  The tokens file holds the live values. If it disagrees with this table, report the drift.
- Lede to body size: 3x minimum from 440px up, 2.5x below 440px. The relief applies to the
  shared lede token, never to one lede on its own.
- Sizes are declared against their counterpart, never set independently. The Index numeral
  derives from `--lede-size`.
- Opacity hierarchy: primary 100%, secondary about 70%, tertiary lower.
- Curly quotes throughout. The client's own dashes stay exactly as written.
- `text-wrap: balance` stays on the Charging It to the Game lede. Measured both ways; off
  leaves a stub at 1920.

## Grid and measure

- 12 columns, fixed 64px gutter.
- **Page measure capped at 1600px, centered.** Above the cap, photographic plates and the
  Obsidian grounds still reach the viewport edge. Type and columns do not grow.
- No ancestor container may set its own max-width on a section. A `.spread { max-width }`
  wrapper broke three composition passes. When a column window looks wrong, check ancestors
  first.
- Body window columns 1 to 9, live margin 10 to 12. The margin is never empty for long
  stretches.
- Image tiers: `bleed` (two maximum on the page), `column`, `inset`. MUST NOT apply
  `transform` to any photograph.
- Overlap budget: three maximum, two spent (the Cover name over the portrait, the Athletic
  detail crop).
- Photo treatment: gradient overlay plus a warm `mix-blend-multiply` layer. The field and
  bleachers images are pulled harder toward the palette than the studio shots.

## Section composition

Page order. This table is the design; everything above it is vocabulary.

| Section | Entrance | Column window | Image | Padding | Length |
|---|---|---|---|---|---|
| Masthead | Client logo lockup at bar height, links to top | full | none | n/a | lockup only |
| Cover | The cover itself | text 1 to 7, portrait 8 to 12, 100svh, plate reaches the floor | portrait, bleeds | flush top | lockup mark in place of the set name (gated at 1024), roles line, button. No credit line, no tagline |
| About | Gold drop cap, two lines. No kicker, no rule | lede 1 to 9, body 1 to 6 capped at 670px, closing 7 to 9 | none | top padding lands the lede just under the fold | full |
| Educational Leader | Hairline head, kicker and subtitle outdented to 1 to 3 | body 4 to 11 | none, by design | 110 | full, coda set apart |
| Field band | Letterbox, no type | full width | field | about 40 above and below | image only |
| Premier Leadership | Image first | photo 1 to 5, body 6 to 11, four topics in margin | seated portrait | 80 | abridged: lede, one paragraph, button |
| Everyday Legends | Foundation mark hung in 1 to 2 | body 3 to 8, handle in margin | none | 70 | abridged: lede, one paragraph, button |
| Athletic Management | The spread: photo breaks the left trim | bleachers bleed 1 to 7, text 8 to 12, detail inset 4 to 7 overlapping upward | bleed + inset | 110 | full; coda anchored to the bleed frame's bottom, caption baseline on the coda's last baseline |
| Feature Quote | The pivot, on Obsidian | 2 to 10 | none | 150, largest | pull quote only |
| Index 01 to 05 | Numerals at display scale | 1 to 11 | none | 110 | lede, five entries, McClain Brothers expands (data only, no prose); no row stagger |
| Charging It to the Game | Breaks the staircase | lede band 3 to 11; photo beside turn, body, coda | lifestyle street | 110 / 40 | manifesto; coda's three lines hang on one edge |
| Contact | Hairline head | text 1 to 5, form 7 to 11 | none | 96 | no email, no lede reveal |
| Footer | On Obsidian | full | none | n/a | copyright left; "Built by Anchor Digital" with logo right, to anchordigitalco.com, new tab; Privacy Policy link |

The tallest and shortest sections MUST read as visibly different heights. The copy's word
budget runs about 5:1 (Contact to Educational Leader and Athletic); the heights MUST show it.
An abridged section that looks thin is a composition problem. MUST NOT add copy to fill it.

- The Feature Quote line appears once on the page. It MUST NOT be restored to Athletic.
- The McClain Brothers: school names as plain text. No logos, marks or team imagery until
  OSU clearance closes.

## Motion

- The masked lede reveals are the only React islands. Each plays once. Reduced motion shows
  the settled state.
- Removed, and MUST NOT return: the Index row stagger and the Contact lede reveal.
- Hash-jump arrival: pure CSS `:target` suppression, no listeners or observers. A reader who
  jumps to a section sees it settled.
- Screenshots and measurements never include motion. Capture with reduced motion or after
  every reveal has settled.
- A lede missing on dev is the island render defect (`jsxDEV is not a function`), never a
  cache problem. Measure lede sections on preview (4332).

## Mobile and collapse

- Four bands: Band 1 is 1440 to 1280, Band 2 is 1279 to 1024, Band 3 is 1023 to 751, Band 4
  is 750 and below. Above 1440 the 1600 cap governs.
- **The nineteen widths.** Cite this list; do not re-derive it.

| Band | Widths |
|---|---|
| Wide | 2560, 2240, 1920, 1863, 1770, 1600, 1599 |
| Band 1 | 1440, 1280 |
| Band 2 | 1279, 1024 |
| Band 3 | 1023, 901, 900, 800, 751 |
| Band 4 | 750, 390, 360 |

- 359 is a contact-form-only width for the Turnstile `scale(0.86)` guard. It is outside the
  nineteen.

## No orphans (hard rule, every width)

Why this exists: at phone widths the ledes ended on "students.", "forward." and
"scoreboard.", the About lede left "seeing" alone on a line, the Index subtitle ended on
"PRINCIPAL", and the footer ended on "RESERVED."

- **Definition.** An orphan is a text block of two or more lines whose last line holds one
  word. A hyphenated compound counts as one word and never splits.
- **Scope.** Every visible text element on `/` and `/privacy`: masthead, ledes, kickers,
  subtitles, body, Index names and subtitles, captions, buttons, form labels and errors,
  footer. Every width from 320 to 1600. Above 1600 the measure is fixed and nothing
  rewraps, so 320 to 1600 covers every case.
- **Display text is stricter.** Ledes, section names, the Feature Quote and Index names MUST
  NOT hold a single word on any line, first, middle or last. At display size a lone word
  reads as a hole.
- **Names never break.** Dr. Syreeta McClain, Premier Leadership, Everyday Legends, The
  McClain Brothers, and any other proper name stay on one line. The footer may break only
  after "McClain.", giving "© 2026 Dr. Syreeta McClain." then "All rights reserved."
- **Middot lines break only at a middot.** The roles line (Educator · Consultant · Momager ·
  Founder) and the McClain Brothers program lines keep each item whole.
- **Authored line breaks are not orphans.** The Charging It to the Game coda is three hard
  lines by design. Each line is checked as its own block: it may wrap, and if it wraps it MUST
  NOT orphan. The three lines MUST NOT be run together, centered, or ruled apart. About's
  closing line and the turn ("But this is not simply a football story.") follow the same rule.
- **Allowed fixes, in this order:**
  1. `text-wrap: balance` on display text, `text-wrap: pretty` on body.
  2. Non-breaking spaces or nowrap spans binding specific word pairs in markup. Wording is
     unchanged.
  3. Below 440px only, the lede ratio relaxes from 3x to 2.5x on the shared token.
- **Never:** change wording, add a `<br>` tied to a width, change letter-spacing or
  word-spacing to force a fit, hide words, or resize one block out of its shared scale.
- **Known limit.** Chromium stops balancing past a small number of lines (six at time of
  writing), and falls back to plain wrapping without warning. A lede that runs longer than
  the limit is not protected by `balance`. Confirm the limit in the installed Chrome rather
  than trusting this line.
- **Precedence:** wording, then no orphans, then no one-word display lines, then the ratio.
  If a block still fails at 2.5x, report the block and its width range. That is not a stop.
- **Proof.** `orphans.mjs` in the repo root sweeps 320 to 1600 at 1px steps on preview, with
  reduced motion and every reveal settled, and lists each hit by section, element, width
  range and last line. Zero hits is the pass condition. It runs at the end of every round.

## Standing rules

Each traces to a real failure on this build.

- Jackson commits accepted work before the next round starts. Six accepted rounds once
  existed only in the working tree while HEAD sat rounds behind. Claude Code never commits
  or pushes; `main` stays at the last reviewed state.
- Prompts MUST NOT rule a number nobody measured. State the constraint and the pass/fail
  condition, and Claude Code measures. R9 took nine passes, five of them correcting the
  prompt's own numbers.
- A right number against a wrong constraint still fails. Check the constraint first.
- Screenshot first, numbers second. If they disagree, the picture is right.
- Before any height rule in vh or svh, do the arithmetic that the content fits. An early
  Cover height cap guaranteed a gap no arrangement could fill.
- Diagnose before fixing. When a layout silently fails, the diagnosis is reported before any
  fix is written. Layering CSS over a broken grid makes two competing systems.
- One authoritative instruction block per prompt. No stop condition that a later ruling
  contradicts.
- One round per commit, and the message names only that round. Every report states the URL
  and port it measured.
- The privacy policy stays true at all times. Any new outside service goes into `/privacy`
  before it ships in the site.

## Open

- R22: phone round on real WebKit. Safari and Firefox have never been verified. Runs after
  the orphan round, since that round changes the page being measured.
