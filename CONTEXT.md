# CONTEXT.md — Dr. Syreeta McClain

Project-specific. Read alongside `CLAUDE.md` and `anchor-digital-standards.md`.
Written after the design direction was chosen from mockups, per standard workflow.

**Last updated:** September 8, 2026 — **all ten sections are built. R10 + R10.1 shipped
(Contact + footer, form rhythm), closing the ten-`<h2>` structure at 10 of 10.** R9 settled
through R9.6, R8 through R8.2. **R11 (`/privacy`) and R12 (folio marginalia) are what
remain before launch.** The height-spread check ran at R10 and is **rescinded as
specified** — see the Rhythm entry. **The R13 motion concept is now written** (see Motion
vocabulary); R13–R15 are post-launch and two of them are blocked on Jackson's ruling. Copy rewrite approved, wireframe approved (Variant A), photo placement
approved.
**The page is being rebuilt from the wireframe in vertical slices.** Do not write another
composition pass against the old build.

**Copy now lives in `COPY.md`.** This file governs design, layout, and build. Copy
passes read `COPY.md`; layout passes do not need it. Do not duplicate copy here.

> **This file must be tracked in git.** It was untracked as of September 1 2026 —
> the document governing the entire build had no history and existed on one machine.
> If it is still untracked, commit it before doing anything else.

---

## ⚠️ Launch clock

**KNOW Women gala: October 6, 2026.** Roughly five weeks out. The printed spread
lists her URL; print copies are already circulating.

**Active blockers — none of these are code tasks except G and H:**

1. **Domain control unresolved.** Nobody has confirmed who owns/controls the DNS.
2. **Privacy policy not drafted (Phase G).** The contact form is now live in the build
   and links to `/privacy`, which **404s today.** CalOPPA requirement. This moved from
   future work to an active blocker the moment Phase F shipped.
3. **Meta / Open Graph / favicon not built (Phase H).** Deferred by Jackson, but print
   is driving traffic and people will share the URL. With no OG image, every share
   renders as a blank card. **Reconsider the deferral.**
4. **KNOW Women reuse rights** — written client confirmation for the adapted Q&A.
5. **OSU photo clearance** — unresolved. Interim rule in force (see Photography).
6. **Contact form inquiry options unconfirmed.** Phase F shipped six `<select>` options
   that Claude Code derived, because this file requires a native `<select>` but never
   enumerated the options. Needs client sign-off. Also confirm whether Everyday Legends
   inquiries should route to `premierleadersllc@gmail.com` or elsewhere — it is a
   separate legal entity.
7. **Formspree free tier is 50 submissions/month.** Price a paid tier before the gala.
   Confirm at signup that CAPTCHA is on the free plan.
7b. **The build ships Cloudflare's TEST sitekey and TEST secret.** The widget renders
   *"For testing only. If seen, report to site owner"* in red on the live page, and the
   form's endpoint is still `formspree.io/f/your_form_id`. **Swap both to live credentials
   and re-verify the four states against the real endpoint.** Not a build slice — a launch
   task, and the most visible one on this list. Never mix a test sitekey with a live secret.
8. **Pillars wording** — "education, athletics, and service" vs. "education, sports,
   and community." Site uses the former. Needs explicit client confirmation.
9. **Two pieces of Claude-written copy are shipping unsigned.** The Athletic caption
   `THREE SONS, THREE PROGRAMS` (which also wants two characters out — it is the binding
   crossover constraint at 1.54px / 0.65%) and the Index lede `Where the work continues.`
   Neither is in `COPY.md`. **Jackson's sign-off, both, before launch.** *(R9's
   `OFF THE CLOCK` caption was a third; it no longer ships — see Photography.)*
11. **Safari and Firefox are untested across the entire build.** Athletic's foot
    (`align-self: last baseline`) and the Index's row group both rest on grid baseline
    alignment inside a subgrid chain, verified in headless Chrome only; R9 no longer depends
    on it. **This is the highest-value item on the board that is not a slice**, it has been
    outstanding since R6.3, and it keeps not being scheduled because it is not a section.
    One session covers all of it. WebKit has historically lagged on `last baseline` in grid;
    if it falls back to `start`, two section feet come apart silently, on the device most of
    the gala audience will use.
10. **Athlete domain liveness is point-in-time.** Jaylen's and KJ's sites are live and
    linked; Cam's serves a launch page and ships as plain text. **Re-check all three close
    to the gala** — see Site Structure.

Resolved and no longer blocking: contact recipient (now `premierleadersllc@gmail.com`),
Turnstile provider (Formspree). Refund status with the prior designer must not be allowed
to block domain/asset handoff.

---

## Design Direction: THE SPREAD (locked)

Chosen from three mockups (Spread / Contact Sheet / Marquee). **The direction's name is
"The Spread."** Never "Direction A" or "Magazine A" — that mapping was unreliable and
caused one drift incident.

**The governing concept:** the site behaves like a magazine feature, not "magazine
inspired." It should read as though an editorial art director laid it out for print and
translated it to screen. This is not arbitrary — the client is currently published in a
magazine feature, and a reader will hold that printed spread, type her URL, and must land
in the same visual language. If something wouldn't appear in a magazine feature, it
doesn't belong on the page.

### The page turn — how spread logic becomes scroll logic

**This was the unresolved question in the concept, and it is the direct cause of the flat
page.** A magazine feature is made of *spreads* — facing pages with a fixed edge and a
physical turn. A scroll has no edge and no turn. With that unanswered, the build did the
only thing available to it: a vertical stack with print typography. Correct rules,
correct type, no composition.

**The resolution: one section is one spread.** Each section is composed as its own
opening — a designed entrance a reader can recognize before reading a word — rather than
as another entry in a list. The turn is the transition between sections, and it is
produced by *change*: a different entrance, a different column window, a different rhythm
value, a different image tier.

Two consequences that govern everything below:

- **Sameness across sections is the failure mode, not ugliness within one.** A section
  that is individually correct and identical in shape to the one above it has failed.
- **Systems do not produce composition. Specs do.** The grid, the tiers, and the rhythm
  values are a vocabulary. The Section Composition table below is the sentence.

**Signature move — folio marginalia:** fixed to the left viewport edge, vertically
centered, `writing-mode: vertical-rl` + `rotate(180deg)` — **never `rotate(-90deg)`**,
which makes the bounding box track text width and causes horizontal jitter between labels.
Smallest readable Montserrat, wide tracking, Smoked Slate. Updates on scroll. Hidden below
1280px (raised from 1024 in E.8 — see Layout System).

**Section list lives in `src/data/sections.ts`.** One typed list, imported into the folio
via `define:vars`. Edit it there and nowhere else. The chapter break is deliberately absent
from the list, so the folio goes quiet over the pivot.

**One scroll listener exists in the entire build.** If a future component needs scroll
tracking, reuse it — do not add a second.

**Ground and tone:** Porcelain dominant, Obsidian type. Drama comes from type scale and
negative space, never from color volume.

---

## Section Composition (the page-level spec)

**This table is the design.** Everything above it is vocabulary. It was derived from an
approved grayscale wireframe (Variant A) and an approved photo-placement pass, both
September 4 2026 — not invented in code. Where a build prompt and this table disagree,
this table wins.

Section order below is **page order**, which is not the Index's numbering. Confirm against
`src/data/sections.ts`.

| Section | Entrance | Column window | Image | Rhythm | Margin holds | Length |
|---|---|---|---|---|---|---|
| **Cover** | Cover — not a section entrance | text 1–7, portrait 8 → **bleeds off the right and bottom trims**, **name overruns onto the plate** | `column-tall` — `portrait-hero.jpg`, **no caption** | **~80svh, not full viewport** | — | credit line, name, tagline · **foot cluster: hairline rule + roles + button** |
| **About** | Drop cap is the entrance. No kicker, no rule. | lede 1–9, body 1–6, **closing held 10–12** | **none** | standard | **the closing line** — see note below | full |
| **Educational Leader** | **A — hairline head.** Kicker + subtitle outdented to 1–3. | section window 4–11 · lede 4–11 · body **5–9** · coda rule **4–6** · closing line **4–9** | **none** — deliberately photo-free, keep it that way | standard | district link | full; coda set apart |
| **Premier Leadership** | **C — image-first.** Opens on the photograph before any type. | plate **1–4** · head + lede **5–11** · body + button **5–9** · margin **10–12** · **stacking crossover at 1121** (measured) — below it, plate 9 of 12 above the type, type left-anchors at column 1, margin 10–12 | `column` — `portrait-seated.jpg`, **no caption** | tight | speaking topics list | **abridged** — lede + 1 paragraph + topics + button |
| **Everyday Legends** | **B — decorative mark opener.** Display mark hung 1–2, no kicker, no rule. | mark hung **1–2** · head **4–8** · lede **4–9** · body + button **4–8** · margin **10–12** | **none** | tight | Instagram handle | **abridged** — lede + 1 paragraph + button |
| **Athletic Management** | **D — the spread.** Photograph breaks the left trim before any type. | frame **1–7** off the left trim (built **1–6**, band 2 only) · detail **4–6** · lede **8–12** · body **8–12** · closing **8–11** · caption **1–3** | `bleed-left` — `mcclain-bleachers.jpg` **plus** `inset` — `athletics-detail.jpg`, lap is a remainder, not a constant (see Photography and the Overlap entry) | open | **caption only — see note** | full — 2 paragraphs + coda |
| **Feature Quote** | The pivot itself | 2–10 (2–7 of 8 in band 3) | **none — type on Obsidian** | **largest padding on the page** — this is the Rhythm column, not type scale | folio goes quiet | pull quote only |
| **Index 01–05** | Numerals at display scale, **with a lede above them** (R8.1) | section window 1–11 · numeral **1–3** · lede, names, descriptions and expansion **4–11** | none | standard | — | lede + index |
| **Charging It to the Game** | **Deliberately breaks the staircase** — this section and the Feature Quote are the two sanctioned exceptions | **beside:** kicker 1–2 · **lede 3–11** · turn/body/coda 3–8 · photo 9–12, **top trim registered to the turn's cap height** (R9.6). **stacked (≤1254):** kicker 1–2 · type 3–9 · coda to the right trim · frame beneath the coda. **band 3:** one left edge, column 1, kicker does not outdent | `column` — `lifestyle-street-inset.jpg`, **no caption** | open | — | manifesto only; coda's three lines hang on one edge |
| **Contact** | **A — hairline head** | text 1–5, form 7–11 | none | standard | — | lede rule applies — no exception |

> **About's live margin is no longer empty (R2, superseding this table's original
> entry).** The row above used to read *"deliberately empty — the page's first breath."*
> That was written from the grayscale wireframe, before the section had ever been
> rendered with real copy. Built, it produced a **hollow right half for the section's
> full height**, not a breath — and it left the closing line with no vertical edge in the
> composition to hang from. Set at columns 7–9 the closing line's left edge landed in
> open ground, aligned to nothing, and close enough to body paragraph 2 to read as a
> second column of body copy rather than as a closing statement.
>
> **The closing line now holds columns 10–12**, anchored to the lede's right edge, one
> gutter away. It is bottom-aligned to body paragraph 2's last baseline, so the section
> still closes on one level line. About's live margin holds exactly one thing, and this
> is it.

> **Column notation, and two rows that were wrong (R4.1).** The Premier Leadership and
> Everyday Legends rows above were originally transcribed from the grayscale wireframe using
> `grid-column` **line values** and read as though they were column numbers — `1/5` became
> "1–5" when it means columns 1 through 4. A build followed them literally, which put
> Premier's plate one column too wide and its type on a fourth left edge. **Every window in
> this table is stated as inclusive column numbers.** When writing CSS, convert: columns
> *a–b* are `grid-column: a / b+1`.

> **Athletic Management carries no numeral, and its margin is on the left (R6, spec).** The
> row above used to read *numeral + caption*. No shipped section carries a section numeral,
> and a lone numeral on a page whose Index runs 01–05 in a different order is exactly the
> confusion the Decorative marks rule exists to prevent. **Caption only.**
>
> Text at 8–12 leaves no room for a right-hand margin. Athletic is the one section that
> mirrors the page — photograph left, type right — so **its margin mirrors too: the caption
> hangs at columns 1–3 on the sheet's left trim, below the frame.** This deliberately breaks
> the right-margin continuity running About → Educational Leader → Premier → Everyday Legends
> at x=1066, and that break is what makes the inversion read as an inversion rather than as
> an accident. Do not "restore" the right margin here.

> **Athletic Management is settled (R6 → R6.3, shipped September 7 2026).** Horizontal
> windows, frame floor, closing-line anchor and section height are all locked. The frame's
> minimum aspect is **1.00 (square)**, expressed as a `padding-top` spacer. The section's
> foot closes on **one horizontal line** carrying three elements: the caption's baseline at
> columns 1–3, the detail's bottom trim at 4–6, and the closing line's last baseline at
> 8–11 — joined through grid's baseline-sharing group (`align-self: last baseline`), not
> through a modelled em offset. The type column is **bottom-aligned** so the frame's surplus
> height opens above the kicker rather than between the body and the coda.
>
> **The crossover stays 1145**, with a re-derived value of 1138 and 7px of deliberate
> headroom. The binding constraint changed hands in R6.3 — it is now the caption's fit in
> its 3-column window, not the frame's aspect (which now selects 1041). The eight-constraint
> enumeration is written into the primitive's comment in `global.css`. **Third confirmation
> of the crossover-staleness rule.**

> **The Index is settled (R8 → R8.2, shipped September 7 2026), and the row above is
> amended in two places.** The original row said the entrance was the numerals alone and gave
> the window as a flat 1–11.
>
> **It now carries a lede.** Built with numerals only, a reader landing off the pivot got
> "01 PREMIER LEADERSHIP" with nothing saying what the list was or why it was there — the
> composition read correctly and did no orienting work. The Index was also the only content
> section on the page violating the lede rule. One Fraunces line at columns 4–11, at the
> page's shared `--lede-size`, sits above the list with a hairline beneath it: **`Where the
> work continues.`** New copy, **pending Jackson's sign-off**, same footing as the Athletic
> caption. **No kicker** — the folio prints "INDEX" down the left viewport edge for the whole
> section once R12 mounts, so a Montserrat `INDEX` kicker at column 1 would duplicate the
> folio label verbatim two inches away, and would put a second device above the numerals.
>
> **The window is two windows.** Numerals hold **1–3**; the lede, names, descriptions and the
> brothers' expansion all hold **4–11** — the lede edge, which is why nothing in the section
> lands on a fourth edge. Band 3 is **1–7 of 8** (numeral 1–2, text 3–7), transcribed by
> property and not by ratio: what 1–11 of 12 carries is a left edge on column 1 and exactly
> one column of air at the right, and seven of eight is the only 8-track window that keeps
> both. Band 4 is full measure with the numeral on its own line above the text.
>
> **Five rules, all Smoked Slate:** the list's top edge (the `<ol>`'s `border-top`, which
> replaced the original "no rule above entry 01"), plus a bottom rule on entries 01–04. **No
> rule under entry 05 and none at the section's foot** — the section closes on air, which is
> what keeps it from reading as a boxed table.

> **Charging It to the Game — shipped and settled, R9 through R9.6.** The row above is as
> built. The original row read *kicker 1–2, body 3–8, photo 9–12*; that arrangement failed
> and is void. Nine passes on one section, five of which corrected chat's own rulings — see
> Workflow.
>
> **What is settled and MUST NOT be re-derived:** the **crossover at 1254**, bracketed
> [1212, 1295] and shipped at the midpoint; the **stacked type window at 3–9**; the coda
> deriving its size from its own longest line, capped at the shared closing-line register;
> the turn at the closing-line register; **band 3 running on one left edge** with the kicker
> not outdenting; the frame's 0.800 aspect, 112% / −12% crop and inherited 0.24 treatment;
> the kicker's paired `white-space: nowrap` spans; the coda's single authored `<br>` at ≤750.
>
> **Why the arrangement changed (R9.5).** Built with the lede inside the 3–8 type window,
> the lede ran four and then five lines at display scale — a paragraph set large, not an
> opening statement — and the frame, sized against the whole type column, left the body and
> coda running against several hundred pixels of dead right column. Three correction passes
> chased that imbalance from the foot to the head and back. **The beside window is too narrow
> to carry a display lede.** R9.5 gave the lede its own band at 3–11, dropped the frame
> beside the turn, body and coda only, and deleted every derived constant controlling the
> lede: it takes `--lede-size` flat, like every other lede on the page. The dead column went
> from 383.67px at 1255 to 24px — one grid gap. Lede-to-body now passes at every beside width
> (3.06–3.76×) where the derived version shipped **1.98× at 1255**, under this file's own 3×
> minimum at four of five widths.
>
> **The lede sets three lines. A two-line lede is geometrically impossible here and the
> condition is rescinded (R9.5).** Measured by binary search on the live element: the
> narrowest box that sets two lines at the floored `--lede-size` of 52px is **1139.86px**,
> and at 1255 the sheet's entire content box trim to trim is **1127px**. Two lines is
> unreachable at 1255 in any window — not 3–11, not 1–12, not by moving the left edge; it is
> 12.86px short of possible. The 3–11 band first sets two lines at viewport **2007**, 87px
> above the widest verification width. A 105-character string at `--lede-size` sets three
> lines in every lede window this page has. **Do not re-impose a line cap on this lede and do
> not narrow, break or resize it to chase one.**
>
> **`text-wrap: balance` stays, and its increasing rag is deliberate (R9.6, ruled).**
> Measured at every beside width, `balance` equalises lines 1 and 2 to within 2.4px and hands
> the remainder to line 3, which runs 161–199px longer than line 2. With `balance` off the
> rag runs conventionally decreasing — but at 1920 it sets 1111 / 1273 / 305: line 2 longer
> than line 1, and a 305px stub closing a display lede. **The balanced rag is the better of
> two measured options, and it matches `.prem-lede`, `.legends-lede` and `.edu-lede`** — off
> here, this would be the one lede on the page that wraps differently. Line 3 overhangs the
> plate's columns by 121.92px at 1920; with ~70px of vertical clearance that is a magazine
> layout, not a collision. **The overhang is not a defect and is not to be closed.**
>
> **The frame registers to the turn's cap height, not to its row or its box (R9.6).** R9.5
> placed the frame's top trim at row 2's top — the lede's bottom — and the lede's last line
> *overlapped* the plate by 0.64–1.48px at every beside width. Registering to the turn's box
> top would have reproduced the same defect 61.19px lower, because the turn carries a settled
> 2.0 × body-line top margin. Offset = turn air + half-leading + (ascent − cap), stated in
> the turn's own em: **k = 1.3/2 + (0.9775 − 0.255)/2 − 0.700 = 0.31125**, declared as
> `--chg-frame-register` against `--chg-turn-air` and `--chg-turn-lh` rather than agreeing
> with two literals by coincidence (R8.2). Residual is ≤0.75px at every beside width by two
> independent methods, inside the 3px tolerance and inside Chrome's own 0.65px jitter.
> Clearance is now ~70px, more than the section's largest internal gap. The frame is a grid
> item, so the added margin grows row 2 and the section with it — **foot-padding intrusion is
> 0.000px at every width** and the 40px bottom padding is intact.
>
> **A modelled em constant was the only route available.** CSS has no cap-height alignment,
> `align-self: baseline` aligns alphabetic baselines, and a photograph contributes no
> baseline to a group — so R6.3's baseline-sharing route does not exist for this problem.
> This is the case the 3px tolerance was written for. It was not tightened.
>
> **The crossover's bounds can invert, and that is a real failure mode.** R9 could not reach
> a crossover where the coda fit, because the stacked type window was fixed at 3–10 and the
> 78-character ceiling put the upper bound *below* the lower one — an empty legal window,
> which shipped as a 70px band of wrapped coda nobody had measured. Narrowing the stacked
> window to 3–9 opened it. **When a crossover's constraints bracket nothing, a window that
> was being treated as fixed is the free variable.**

**Vertical padding, per section.** Sections MUST NOT share a single padding token:
Cover 64 · About 96 · Educational Leader 110 · Premier 80 · Everyday Legends 70 ·
Athletic 110 · Feature Quote 150 · Index 110 · Blog 110/40 · Contact 96.

> **These are the fixed values, and the ranking applies to them only (R7).** About's top
> padding is `max(96px, 20svh + 12px)` above 1024 — 192px at a 900px-tall viewport, 228px at
> 1080 — so on a top-padding basis About exceeds the Feature Quote's 150 at any viewport
> taller than ~690px. That is not a rhythm value and MUST NOT be read as one: R2 derived it
> to keep About's lede below an 80svh Cover's fold, and it is scoped to ≥1024 for that
> reason. The Feature Quote carries **the largest fixed section padding on the page** and
> that claim stands. Do not chase an `svh` term into the pivot to "win" this comparison —
> doing so would contradict both the flat 150px spec and the R1.4 height-floor rule.
>
> **Feature Quote, as built (R7):** flat 150px in bands 1 and 2; `clamp(116px, 14.67vw,
> 150px)` at ≤1023. The ceiling resolves to 150.07px at 1023, so the 1024/1023 boundary
> carries no padding step; taper begins at 1022 and the floor engages at 791. The 116px
> floor is set by constraint, not preference — it cannot fall below Educational Leader's and
> Athletic's flat 110.

The height spread between the tallest and shortest sections MUST be visible on the built
page. If every section ends up the same height, the build is wrong regardless of how it is
styled.

> **The check as originally specified is RESCINDED (R10). Its premise fails.** It read
> *"tallest (Educational Leader, Athletic) vs. shortest (Contact)"* and derived that pairing
> from the word budget — ~20 words at Contact to ~110 at Educational Leader, a 5:1 spread the
> composition was said to depend on. **Word budget does not map to height when a section's
> content is a form.** Four labelled fields, a textarea, a widget slot and a button occupy
> ~700px of vertical regardless of copy length. Contact runs the highest px/word of any
> content section on the page. The specified 5:1 word ratio renders as **0.84 : 1** in
> height; Contact is 1.14× Educational Leader, not 0.18× it.
>
> **Measured at R10, all ten sections, three widths.** Athletic Management is tallest at
> 1920, 1440 and 1280 — that half of the claim holds. Contact is **not** the shortest: it is
> third-tallest at 1920 and 1280 and second-tallest at 1440. Educational Leader, named as a
> tall section, measures **exactly the median** (×1.00 at 1920 and 1440, ×1.03 at 1280).
> There is no stable short end — the shortest content section is About at 1920, Premier at
> 1440, Everyday Legends at 1280. **The Educational Leader half of the row is wrong and is
> struck.**
>
> **What the check was protecting still holds.** Spread at R10: 2.58 : 1 at 1920 and
> 1.87 : 1 at 1440 and 1280 including the pivot; 2.19 : 1 / 1.63 : 1 / 1.48 : 1 on content
> sections alone. The shrunk-page test passes on its own terms — all ten sections read as
> distinct shapes. **The replacement condition is that test, not a ratio between two named
> sections.**
>
> **MUST NOT: adjust section padding to manufacture a spread.** Contact's 96px is the
> per-section list's value and is untouched. R10.1 tightened the form's internal rhythm on a
> screenshot judgement and Contact fell to 880.31px as a consequence — reported, not steered.
> A future pass that moves a section's height to improve this ratio is doing the thing this
> entry exists to forbid.

**Image budget check:** one `bleed-left`, three `column`, one `inset`. **Five sections
carry no photograph** — About, Educational Leader, Everyday Legends, Feature Quote, Index,
Contact. No two adjacent sections both carry a photograph except Athletic's own pair,
which is deliberate and is the page's single spread moment.

**The Feature Quote is now type-only.** It previously carried `athletics-detail.jpg` as a
full bleed. The approved copy deck specifies it set large and alone on a dark ground, and
this file's own reasoning applies — a chapter break made of type is more editorial than a
photograph. The detail image moves to Athletic Management as its `inset`.

**Known text run, accepted.** About into Educational Leader is ~175 words across two
sections with no photograph between them — the longest text-only stretch on the page. A
full-width photographic band was considered as a break and **rejected**: all client
photography is vertical, and a wide crop would mean cropping a tall portrait into a shape
it does not have. The mitigation is typographic — the display-scale opening statements on
both sections carry that stretch. Do not add an image here.

---

## Brand Guidelines (client-supplied, exact — do not deviate)

### Colors
```
Obsidian     #1A1613   anchor, primary type on light grounds
Smoked Slate #474440   secondary type, supporting elements, all rules and hairlines
Antique Gold #AF8C5C   accent ONLY — never a fill, never a background wash
Cashmere     #D1C7BD   warm neutral
Porcelain    #E7E2DD   dominant light ground
```
60/30/10 — gold is the 10. No color outside these five. No pink, blush, or rose.

### Gold budget — pinned, with a counting basis

Earlier versions of this file said gold was "capped at a small, fixed number of uses per
page" and a planning session recorded the figure as **6**. When Phase E.6 actually
measured it, neither reasonable basis produced 6. The number was never defined, so it
could not be enforced.

**Pinned as of E.6 measurement, two separate buckets:**

- **3 saturated gold type accents at rest** — the "Legacy" tagline, the About drop cap,
  the pull quote.
- **8 hairline-gold rule contexts.**

**The budget is spent. Add none.** New rules, hairline heads, captions, and section
numerals use **Smoked Slate**. Any pass that touches gold re-measures on both bases and
reports both numbers. Any increase requires Jackson's explicit sign-off.

> **The two buckets are in different states — read them separately (R7).** Measured on the
> rebuilt page as of R7:
>
> - **Saturated type accents: 3 of 3. Genuinely spent.** The Cover tagline's "Legacy," the
>   About drop cap, and the Feature Quote's "Legacy" — the exact three this file names. Add
>   none.
> - **Hairline-gold rule contexts: 0 of 8.** The figure 8 came from an E.6 measurement of the
>   **old build**, which had `FunnelIndex`, `ContactSection` and `Footer` imported. None of
>   those exist on the rebuilt page yet. **8 is a ceiling, not a spend.** R8, R9 and R10 will
>   re-populate this bucket and MUST re-measure rather than assuming it is already consumed.
>
> Two further gold uses sit on neither basis and were not touched: `::selection` (an
> interaction state, not at rest) and `.plate-img::before` (the prescribed 0.24 photograph
> treatment layer).
>
> **R8 spent none of the hairline ceiling, deliberately. Still 0 of 8.** The Index carries
> five rules — the most of any section on the page — and drawing them in gold would have
> consumed most of the ceiling on the page's least emphatic content. The old build's
> `FunnelIndex.astro` did exactly that: every index rule gold, plus a fifth gold rule opening
> the list. **It did not travel.** R9 and R10 inherit the full ceiling and MUST re-measure.

### Brand character
"Quiet luxury with executive presence." Editorial, aspirational, polished, feminine,
legacy-driven. Explicitly NOT corporate stock-photo, NOT startup SaaS, NOT brutalist.

### Typography — HARD RULE: Google Fonts only, no commercial licenses, ever
- **Body:** Montserrat (client's specified brand font).
- **Display:** client's guidelines specify MADE Saonara, a commercial license Anchor does
  not hold and will not buy. **Fraunces** (Google Fonts, variable) is the settled
  substitute — confirmed across all three mockups.
- **Do not use Newsreader** — that is Anchor Digital's own brand font; client work must
  stay visually distinct from the agency site.
- **No script/handwritten font anywhere.** Her logo artwork already contains a script
  "dr."; a second script doubles it.
- **Every Fraunces axis must be explicitly set everywhere Fraunces appears.**

### The Fraunces optical system (Phase B, shipped)

`opsz` swaps structural detail, not just size — high `opsz` (toward 144) goes sharp and
high-contrast (Bazaar/Didot register); low `opsz` (toward 9) thickens strokes and opens
spacing for legibility. `SOFT` controls terminal roundness independently.

| Role | `opsz` | `SOFT` | `wght` | Notes |
|---|---|---|---|---|
| Hero / largest display | 144 | 10–25 | 300–400 | |
| Section headings | 96 | 30–40 | | |
| Pull quote (italic) | 96 | 40 | | `WONK` 1 — flagged ball terminals |
| Drop cap | 144 | 20 | | re-solve size math if changed |
| Body-adjacent / small | 9–24 | 60–80 | | |

**Gotcha, permanently relevant:** Fraunces defaults to `wght` 900, `WONK` **on**, and
`SOFT` 100 (maximum roundness) when unspecified. A Google Fonts URL requesting only
`ital,opsz,wght` silently ships full roundness and quirky letterforms, neither of them a
decision. **Enumerate every axis in the font request.** Applies to any variable font on
any project.

**Lede-to-body ratio: 3× minimum, 3–4× target.** Measured on the pre-E.8 page it was
~1.8×, near enough that the eye reads lede and body as the same tier. This is why generous
margins read as a hole rather than as luxury — there was no anchor for them to measure
against.

### Logo — client's mark
- Files in `brand_assets/`. **The `.jpeg` files have solid WHITE backgrounds baked in
  despite "transparent" in their filenames** — JPEG cannot store alpha. Do not edit them.
- Light/Porcelain grounds: `SM_submark___black_transparent.jpeg` with
  `mix-blend-mode: multiply`. Verify no white rectangle remains.
- Dark/Obsidian grounds: `SM_submark___gold_obsidian.png` — obsidian background baked in;
  set the container background to exactly `#1A1613`.
- `mix-blend-mode` fails silently if any ancestor carries `transform`, `opacity`,
  `filter`, or `isolation`. Verify no ancestor traps it.
- Never recolor, distort, or stretch the client's logo — her guidelines prohibit it.
- **Real fix, not yet done:** request true transparent PNGs or SVGs from Ayanna J Designs.

### Anchor Digital's mark (footer attribution)
- `brand_assets/anchor-digital-mark.svg`, `viewBox="364 171 615 312"` — **~1.97:1, not
  square.** Set height and let width follow (height × 1.971).
- Root carries `fill="currentColor"`. Inline the SVG directly — never `<img>`, or
  `currentColor` won't resolve. Never override fill/color.

---

## Layout System

> **Status honesty.** The composition described here has never rendered correctly on the
> live build — the page reads as one stacked column at full desktop width. As of
> September 4 2026 this section is the **specification for the rebuild**, derived from the
> approved wireframe. Verify against the build before assuming any of it is live.

- **Grid:** 12 columns, page gutters **64px** left and right, **24px** column gap.
- **Grid is declared at the section level.** Every `<section>` owns its own 12-column
  grid. **MUST NOT:** no ancestor of a section may carry a `max-width`, a centering
  `margin-inline: auto`, or a container wrapper. A single `max-width` above a section
  silently collapses every column placement below it and produces a centered stack. This
  is the failure mode that cost three passes. **Audit for it before writing a section.**
- **Body column:** generally within **columns 1–9**, with the exact window varying per
  section — see the Composition table. Deliberately off-center.
- **Live margin:** holds captions, display marks, marginalia, outbound links, the
  speaking-topics list. Per-band widths in the entry below. **Never empty for long
  stretches** — empty space reads as luxury only when something occupies the column often
  enough that a reader registers it as a column rather than a void. **R3 confirmed the
  converse:** the column is not established by its width but by content that is
  deliberately positioned in it. Educational Leader's district link is baseline-locked to
  the body's first line, and that lock is what made a right-hand field that had read as a
  void at 1023 read as a margin instead.
- **Measure is controlled by column span, never by `max-width` on the text element.** Body
  copy MUST NOT exceed ~66 characters; if a span runs wider, narrow the span.
- **Live margin: a real column at every width from 751 up. There is no margin breakpoint
  below 1280 any more.** *(Resolved R3, September 6 2026 — this entry is the amendment the
  previous version called for.)* It used to blink: column ≥1280, suppressed 1024–1279,
  column again 751–1023. Educational Leader's district link was the first live content in
  it, and with something actually in the column the suppression was unambiguous — the link
  left columns 10–12 at 1280 and reappeared at x=64, one row lower, in the empty outdent
  column beneath the kicker, travelling right-to-left across the whole page as the viewport
  got *smaller*. It did not read as a margin collapsing; it read as a fragment falling out
  of the layout. **The 1024–1279 suppression is deleted.**

  **Width by band: 10–12 (≥1280) · 11–12 (1024–1279) · 7–8 of 8 (751–1023) · inline in
  reading order (≤750).** Two columns rather than three in band 2 is forced, not chosen:
  the 12-column body windows run to column 10 there, so a margin asking for column 10 sits
  *behind* grid's sparse auto-placement cursor and drops to a row of its own — the row-drop
  half of the same bug. At 11–12 it seats beside the body and the link's only movement
  across the 1280 boundary is one column to the right. The remaining discontinuity is the
  margin's *width*, which steps 3 → 2 → 2-of-8; a width step at a band boundary is ordinary
  responsive behaviour rather than an element leaving and re-entering the composition.

  **The folio still hides below 1280.** It is fixed to the viewport edge and is not a grid
  item, so it is a separate element with a separate reason; that threshold did not move.

> **The margin goes dead below the pivot, and no remaining slice restores it (R9.5,
> page-level finding).** Through About → Educational Leader → Premier → Everyday Legends
> there is content at x≈1066 four times running, which is what establishes the column. Then
> Athletic deliberately inverts, the pivot goes quiet, **the Index has no margin content at
> all**, and Charging fills that ground with a photograph. The page's bottom third has no
> live margin. This is not any one section's doing — the Index's 1–11 window is settled R8,
> the frame's 9–12 is settled R9 — and **R10's Contact (text 1–5, form 7–11) does not restore
> it either, confirmed by measurement.** Recorded here because the "never empty for long
> stretches" rule above is currently violated across the page's last four sections and
> nothing on the board addresses it. **Not a launch blocker and not a reason to reopen a
> settled slice.** If it is to be fixed, it is a page-level pass with its own concept, after
> launch.
>
> **Measured at R10, 1440.** The live-margin band starts at x ≈ 1066. About (y 1295→1378),
> Educational Leader (1829→1890), Premier (2762→3018) and Everyday Legends (3556→3617) all
> put ink on that edge — four consecutive sections, which is what establishes the column per
> R3. The last margin ink on the page is at y = 6559 of 8728: **the bottom 24.8% of the page
> has nothing in the band**, and the unbroken live run is 2321.7px, 26.6% of the page.
> Identical picture at 1280.
>
> **Two mechanism corrections to the sentence above.** (1) The Index does put ink in the
> band's x-range — the brothers' domains, right-aligned to the `idx-body` window — but at
> **x = 1154, not 1066**, so it sits on a different edge and does not establish the column.
> "No margin content at all" is right in substance, wrong in mechanism. (2) Contact is the
> only one of the last four sections whose right half is not empty: the form window (7–11)
> spans x 1016 → 1549 and crosses the band. That is the form's body, not marginalia, and its
> left edge is 1016. Per R3 — *the column is not established by its width but by content
> deliberately positioned in it* — **Contact does not restore the margin.**

### Collapse bands (R-shell, shipped September 6 2026)

Four bands, not three. The old two-state collapse jumped 12 columns straight to one at
1024 and put About's body at **943px / 109 characters** across 1023–800. Solved by
inserting an 8-column band and moving the single-column threshold down to 750.

| Band | Range | Tracks | Page gutter | Gap |
|---|---|---|---|---|
| 1 | ≥1280 | 12 | 64px | 24px |
| 2 | 1024–1279 | 12 | 64px | 24px |
| 3 | **751–1023** | **8** | 40px | 20px |
| 4 | ≤750 | 1 | `clamp(24px, 6.4vw, 40px)` | — |

- **Body window in band 3 uses two sub-windows, crossover at 900:** columns 1–5 from
  901–1023, columns 1–6 at 900 and below. No single span holds the band — six columns at
  1023 runs ~83 characters, five at 751 falls to ~48. The window *widens* as the viewport
  narrows; that is correct, and it is the same move the body window already makes at 1280.
- **750 is measured, not estimated.** It is the widest viewport at which the collapsed
  single column still holds the longest rendered line to 78 characters; 751 renders 80. A
  per-character estimate put it at 743 and would have shipped 7px of viewport over the
  ceiling. **Any change to this threshold is re-measured, never recalculated.**
- **Working ceiling is 78 characters, not 66.** The ~66 figure above is the target. 78 is
  the enforced maximum, set by what the fluid 12-column grid already ships at 1279 (77)
  and accepted there. Band 3 lands 49–69 at every width.
- **Cost, accepted:** at 900 and below the lede and body share columns 1–6, so About's
  right-edge jog — its composition, since it has no kicker or rule — survives only from
  901 to 1023.

### Three left edges

Within a section, three distinct left edges, not one:

| Element | Edge |
|---|---|
| Kicker + role line | **Outdented** — hangs left of the body |
| Lede | The body edge |
| Body paragraphs | **Indented one column** in from the lede |

The kicker outdent creates the staircase. **Two sanctioned exceptions:** the Feature Quote
and the blog coda, both already exceptional. Applying it to all ten sections would become
its own sameness.

**Image-paired sections run one type edge, derived from the frame.** (R4.1.) Where type is
set beside a photographic frame, its left edge is a function of the frame's right trim plus
one gap rather than a free choice, and is permitted on that basis **only if there is no
empty column between the frame and the type.** An empty column makes it a free choice and a
fourth edge, and a fourth edge one column off an existing one reads as a mistake rather than
as a step-out. Premier's column 5 and Athletic's column 8 both qualify. Such a section runs
a single type left edge; its lede, body and closing line differentiate on the **right** edge
instead.

### Grid rules — read before writing any column CSS

**Never hand-set `grid-column`. Use the collapse-aware primitives (`.col-break` and
equivalents).** The column windows in the Composition table are the *specification*; they
are implemented through primitives, not by pasting spans into components.

The Phase F failure, exactly (**1024 was the single-column threshold at the time; it is
750 now — see Collapse bands**): a hand-set `grid-column: 2 / 11` on the lede. Below 1024px
`.spread` collapses to one explicit column, so `-1` resolves to line 2 — but the hand-set
span still demanded ten column lines, and grid supplied the missing nine as implicit
auto-width columns. Every sibling spanning `1 / -1` collapsed into a 62.75px first column.

If a placement has no primitive, **create one that is collapse-aware** and use it
everywhere that placement occurs. Never hand-set the span "just this once."

**Deleted components can leave live grid reservations behind.** Phase D made
`.plate-panel` a two-track grid; Phase E.5 deleted `RunningHead.astro` and the reservation
survived, shipping a 708px photo beside 732px of empty ground with a hard seam. **When
deleting a component, grep for grid tracks, gutters, and custom properties allocated
for it.**

### Image tiers

| Tier | Placement | Use |
|---|---|---|
| `bleed-left` | Runs off the left page trim, columns 1–7 | **Exactly one — Athletic Management.** This is the page's single spread moment and the only place the page gutter is broken. |
| `column-tall` | Column 8 to the right viewport edge, full-height portrait crop, **bleeding off the right and bottom trims** | Cover only. |
| `column` | Half the page or less, inside the body window | The default. Premier Leadership, Charging It to the Game. |
| `inset` | Smaller, overlapping an adjacent block | **One — the Athletic detail crop**, overlapping upward into the body by ~120px. |

**Aspect ratio is a separate lever from width.** Varying image *shape* does more work than
varying *size*. **No two photographs on the page share a crop.**

**All client photography is vertical.** No wide cinematic crops anywhere; tall portraits
stay tall. Any request for a full-width horizontal band must be refused at spec time, not
solved by cropping a portrait.

**No borders, no shadows, no rounded corners on any photograph.**

### Vertical rhythm

Three values — `tight` / `standard` / `open` — assigned per section in the Composition
table, with explicit padding values listed there. Not one uniform gap. The largest sits at
the Feature Quote. **Uniform section-to-section space is a primary cause of a flat
scroll**; vary it deliberately — tight after a short section, open before the pivot.

### Feature Quote (the pivot) — shipped R7, September 7 2026

**`FeatureQuote.astro`** — the "larger lens: Legacy" band — is the page's single structural
pivot. **Type on Obsidian, no photograph**, largest fixed vertical padding on the page, folio
suppressed. Everything above is her own work; everything below is the funnel index.

> **Component naming.** This file previously named `PullQuote.astro`. That is the **old-build
> file**; the rebuild follows its own convention (`PillarEducation` → `EducationalLeader`,
> `PillarPremier` → `PremierLeadership`, `PillarLegends` → `EverydayLegends`,
> `PillarAthletics` → `AthleticManagement`). `PullQuote.astro` **is deleted** — it was
> unimported and absent from `dist`, but it rendered a second live copy of the pull-quote
> string one `import` away from making the rule below false. Inert is not the same as safe.

**Exactly one pull quote exists on this page.** A second dilutes the pivot.

**Locked in R7, do not re-litigate:**

- **Ground:** flat `#1A1613`, full bleed, type inset at columns 2–10 (2–7 of 8 in band 3,
  full measure in band 4). **No texture** — no gradient, mesh, noise, vignette, wash, border
  or rule. The frontend-design skill's "never default to a solid background" does not apply
  here; this file's "drama comes from type scale and negative space, never from colour
  volume" and the R1.1 flat-colour rule both govern, and the old build's two radial washes
  were removed. **Do not restore them.**
- **Type:** Fraunces **italic**, `clamp(44px, 7.8vw, 128px)`, all four axes enumerated —
  `opsz` 96 · `wght` 340 · `SOFT` 40 · `WONK` 1. **`WONK` 1 is spent here and nowhere else**
  (the Cover's gold "Legacy" is deliberately `WONK` 0). The Google Fonts request must
  enumerate every axis on the **italic** segment specifically or the face renders as a
  synthesized oblique at `wght` 900.
- **Gold:** the word "Legacy" only, `#AF8C5C`; the rest of the line Porcelain. This is the
  third of the three pinned saturated accents and it rhymes with the Cover tagline. Measured
  5.76:1 on Obsidian — AA at any size. Gold is only legal on this ground: it is 2.4:1 on
  Porcelain and 1.9:1 on Cashmere.
- **No quotation marks.** Ruled September 7 2026. The section *is* the quote at full bleed
  and 112px; marks are redundant at the loudest point on the page. The load-bearing reason:
  this composition rests on **one hard left edge** inset a column from the trim, and an
  opening mark either sits inside that edge (making the block read as indented) or hangs
  outside it on a negative `text-indent` — which puts the section's only edge on a
  punctuation mark, held by a swept constant that goes stale every time the size moves, and
  the size moves at every width. `COPY.md`'s marks are the deck's notation, not copy; the
  string is untouched. **If marks are ever wanted, the only honest route is hanging
  punctuation measured per width, re-verified at all eighteen.**
- **The pivot is not the page's largest type, and is not required to be.** It exceeds every
  lede by 2.05× and body copy by 6.6×. The Cover `<h1>` is larger (140.98px vs 112.32px at
  1440) by the reasoned R1 overrun decision, and a thesis set larger than the subject's own
  name would be wrong. The operative test is: **exceed every lede, and dominate in the
  screenshot.**
- **No height floor, no motion, no observer, no second scroll listener.**

### Decorative marks vs. Index numbers

The abridged sections carry a display-scale decorative mark hung in columns 1–2. **It is
not a number and MUST NOT read as 01/02.** The Index has its own independent numbering
(01–05) in a different order from page order; the two are unrelated typographic devices
and MUST NOT be made to agree. This removes a class of bug that has been flagged four
times.

### Overlap

**Three overlaps maximum across the whole page. Two are spent:** the Cover name overrunning
onto the portrait, and the Athletic detail crop. **One remains — do not spend it without
Jackson's sign-off.**

The Cover overlap has a floor as well as a ceiling: **an overlap is unambiguous or it is
absent.** At 54px the name's last glyph merely clipped the seam and read as a text-overflow
bug rather than a composition. If the maximum depth a frame allows is too shallow to read as
deliberate, remove the overlap rather than ship the ambiguous version.
Use grid placement and negative margin — **never `position: absolute` with hard pixel
offsets.** Every overlap must survive a resize, and contrast is checked against the actual
pixels behind it, not the photo's average tone.

**Athletic's lap is a range, not a constant (R6.3): 248–499px across the spread widths,
deepest at 1920 where it covers just under a third of the frame.** Still one overlap. The
122.4px figure survives only as a verified floor, enforced structurally by the detail's
`min-height`, never as a shipped value.

### Baseline rhythm

Margin content — marks, links, captions, notes — snaps to body baselines, not to container
tops. Display type is exempt and sits optically.

### Mobile and collapse

One stacked column below the tablet breakpoint. The 12-column grid is a desktop-space
treatment and does not exist on phones.

**Collapse rules are stated up front in every new component, never retrofitted.** For
every new placement, write what it does in **all four bands** — ≥1280 / 1024–1279 /
751–1023 / ≤750 — before implementing. **1024 and 751 are two separate thresholds.** Any
rule in this file phrased as "below 1024" predates the R-shell fix and must be re-read
against both.

- Live-margin content collapses **inline in reading order** — not into a sidebar, never
  `display: none`.
- `inset` images become full-measure `column` images. `bleed-left` becomes full-width.
- All display-scale type uses `clamp()`.
- **Verify at 1920, 1440, 1280, 1279, 1024, 1023, 901, 900, 800, 751, 750, 390, 360.**
  **Thirteen widths, not twelve — 1920 was added in R8.2 and the reason is a pattern, not a
  preference.** Two defects have now appeared only above 1440 and only after something else
  moved: Athletic's shape-floor surplus blew the 8-line gap ceiling at 1920 twice (R6.2,
  R6.3), and R8.1's ink-clearance model was riding 0.05px inside its window at every width
  ≥1436 — passing only because a `clamp()` had frozen the numeral, and never measured above
  1440 at all. **A verification list that stops below the widths where slack is largest will
  keep certifying builds that are already failing there.**

---

## Motion vocabulary and post-launch composition (R13 concept)

Written September 8 2026, **before any line is built**, per the R13 requirement that the
concept enters this file first. Nothing in this section ships before launch.

### The governing idea

**The page is a printed object that knows where the reader is.** Not a website with
animations layered on top. Anything that reads as a web effect is out; anything that reads
as a printed object behaving intelligently is in. This sentence is the test for every
future proposal, and it is the reason the rejections below are rejections rather than
preferences.

The corollary from `principles`: effects layered onto a concept-free page produce a
concept-free page with effects. The concept comes first or the pass does not run.

### The motion budget: three things, total

1. **The folio (R12).** The page's only scroll-driven element, and its entire scroll
   budget. It already carries the numeral and the section name, so section identity is a
   solved problem the moment R12 mounts — it does not need inventing.
2. **Hover on the Index rows (R13).** Pointer-driven, not scroll-driven. See below.
3. **Nothing else.**

The folio hides below 1280px. **Below 1280 the page has no motion at all, and that is
correct** — a phone is a single stacked column of a printed object, not a reduced version
of a moving one. Do not compensate with mobile-only effects.

### Rejected in concept — do not re-propose

Four mechanisms were considered and fail rules already in this file. Recorded so the same
ideas do not arrive again wearing different names.

- **Clip-path or wipe reveals on entering type.** Fails for the same reason fade-up fails:
  content clipped at load is invisible in full-page screenshot capture and in any
  client-generated PDF. The trigger would also need either an `IntersectionObserver`
  (banned) or a second scroll listener (banned).
- **Paginated or coverflow Index.** The five destinations read at once by design. Paging
  them is strictly worse and breaks R8's numeral-to-lede-edge composition.
- **Cycling the Cover role line.** "Educator · Consultant · Momager · Founder" animated in
  place asserts the roles are sequential. About closes on "Different rooms. One
  through-line." The mechanism argues against the copy.
- **Hover-preview imagery on the Index rows.** No photography exists for Premier
  Leadership, Everyday Legends or the blog, and OSU clearance is still open for the
  brothers. It would ship as empty frames.

### R13 — Index row hover ⚠️ BLOCKED ON A RULING

**Proposal.** On hover, an Index entry name shifts Fraunces `wght` from its resting weight
to a heavier one, staggered per character from the centre of the word outward. No colour
inversion, no highlight bar, no image, no row background. Nothing else on the row moves.

**Why this one and not the others.** Weight shift under the cursor is how a printed
contents page emphasises the entry you are about to turn to. It is the printed gesture, not
a web hover state wearing an editorial costume. Fraunces is already variable and already
in the build, so it costs no new asset.

**The conflict, stated rather than arbitrated.** Two standing rules in this file are in
tension with it:

- **"Animate `transform` and `opacity` only."** A `font-variation-settings` transition
  animates neither. It changes glyph advance widths, which is a layout-affecting property.
- **Reflow.** As `wght` rises the entry name's advance width grows. The entries are set on
  the lede edge, so the **left** edge is stable and only the right edge travels. The only
  thing to the right of an entry name is the `+` affordance on entry 04, at the far right of
  the row. Reflow is therefore probably contained, but *probably* is not this file's
  standard.

**Two honest routes, Jackson picks one:**

1. **Rule an explicit, scoped exception** to the transform/opacity rule for
   `font-variation-settings` on Index entries only, conditional on a measured pass: entry
   name right-edge travel, `+` affordance position, and row height, captured at rest and at
   full weight, at all thirteen widths, with zero row-height change and no collision with
   the `+`.
2. **Reject it** and leave the Index inert.

**Do not let Claude Code arbitrate this.** It is a rule change, not an implementation
detail. If the measurement in route 1 fails at any width, the answer is route 2, not a
tuned constant.

**If it ships:** every Fraunces axis must be enumerated at both ends of the transition, per
the permanent Fraunces gotcha. A transition that names only `wght` will silently ship
`SOFT` 100 and `WONK` on at the hovered end.

### R14 — Contact on Obsidian ⚠️ BLOCKED ON A RULING

**Proposal.** Contact takes an Obsidian ground, giving the page a spine: Porcelain through
the four pillars, Obsidian at the pivot, Porcelain through Index and blog, Obsidian at the
close.

**The case for.** The Feature Quote is currently the only dark ground on the page, which
makes it read as an isolated slab rather than as a structural turn. A bookend at the close
makes the pivot the first of a pair and gives the scroll a shape the eye can hold.

**The case against, which is this file's own.** "Porcelain dominant, Obsidian type"; the
pivot is described as the page's **single** structural pivot; and a second full-bleed dark
ground is exactly the kind of thing that dilutes a device the page spent R7 establishing.

**If ruled in, three things are not optional:**

- The submit button is `.btn-solid` on Porcelain. On Obsidian it inverts, and the verified
  Phase F property must be re-verified, not assumed to carry.
- **The focus ring's 12.9:1 was measured against Porcelain.** It must be re-derived on
  Obsidian against the 3:1 floor. This is the exact defect R10 caught with the gold ring at
  2.4:1; do not reintroduce it by porting a number.
- Gold becomes legal on this ground (5.76:1). **It must still not be spent here.** The gold
  budget is pinned and the pivot's "Legacy" is the third and last saturated accent.

### R15 — One opener that breaks pattern

**The observation.** Educational Leader, Everyday Legends and Charging It to the Game all
open identically: kicker, display lede, body. Premier and Athletic feel different only
because they open on a photograph. Three consecutive type-openers at the same pitch is
precisely the sameness failure this file names as the primary failure mode.

**The pick: Everyday Legends.** It is abridged, it already carries the Fraunces asterisk
doing structural work, and it sits between two heavier sections, so the break is absorbed
rather than exposed. Let the mark carry the top of the section and the display lede sit
lower, opening on the margin rather than the lede edge.

**This is composition judgment, not arithmetic.** Opus. Screenshot before numbers. Expect
to reject the first attempt; that is the pass working, not the pass failing.

**Constraint:** the three established left edges are not in scope. The opener's *vertical*
order changes; the edges do not move.

### Cover bottom band — verify before it becomes a slice

Full-page capture shows a wide empty band below the Cover's `column-tall` portrait panel,
with the photograph terminating at the section edge in a way that reads accidental rather
than composed. It is the page's first impression and print is driving every visitor to it.

**Measure it at all thirteen widths before writing a slice.** It may be a capture artifact
at one viewport rather than a defect. If it is real, the fix is either the panel running to
the section floor or the band earning a reason to exist — decided from the screenshot, not
from a padding value.

---

## Standing Rules

Each derived from a specific failure. The most reusable content in this file.

**Flat-page diagnosis.** When a page reads flat or templated, check whether every element
shares one width before reaching for type or motion. Scale monotony is a *layout* problem.
Phase B's Fraunces optical system was at one point being asked to fix it. The type work is
good and it shipped, but it was never going to solve that alone.

**Systems are not compositions.** Corollary to the above, and the reason this file now has
a Section Composition table. A document that specifies a grid, tiers, and rhythm values but
never says what any individual section looks like will produce ten identical sections,
because nothing told it not to. Specify the page, not just the vocabulary.

**The lede rule.** Every content section pulls one sentence out and sets it in Fraunces at
display scale, matching `PremierLeadership.astro` (the rebuild's name for `PillarPremier`).
No exceptions — contact included. Generous
margins only read as luxury when something large is in frame to contrast against them.

> **The Index is not an exception either (R8.1).** It shipped in R8 with numerals and no
> lede, on the reading that a navigational section has no thesis to pull. That was wrong on
> its own terms — the section still has to say what the list is — and it left the page with
> one section out of the rule for a reason the rule does not admit. **Every content section
> means every content section.** A section whose lede has to be written rather than detached
> is new copy and needs sign-off; it is not grounds for skipping the lede.

**Detachment, not rewriting.** A lede may be detached from its host sentence and set alone.
Client copy is never reworded without written sign-off.

**Photo integration.** A photograph reads as *placed* rather than *dropped* only when it
has both a ground color and a color treatment layer (warm gradient + `mix-blend-multiply`).

**Do not set a viewport-height minimum on a section unless the content can fill it.**
(R1.4.) The Cover was specced at `min-height: 100svh` with the button pinned to the bottom
trim and about 245px of content, which guarantees a ~400px hole at any type size. Three
consecutive passes redistributed that hole — splitting it, consolidating it, moving a rule
around inside it — before the constraint itself was identified as the cause. **A wireframe
cannot catch this:** grey boxes at uniform scale hide the fact that the real content does not
reach the mandated height. Check the arithmetic — content height against section height —
before writing any height floor into the Composition table. **The Cover is the only section
on this page with a height constraint; every other section is content-height.**

**A contained rectangle of studio seamless will always read as pasted on.** (R1.3.) The
client's studio frames have no environment and no depth, so the plate is a flat field of grey
bounded by a razor edge against a much lighter ground — and no crop, colour treatment or
caption fixes that, because the boundary itself is the problem. Two fixes exist: cut the
subject out and stand her on the page ground (best, but needs a masked asset), or **bleed the
frame off the page trim** so it reads as printed rather than placed. A studio frame that sits
fully contained inside the page margins is the failure case; on this page only the Cover
bleeds, and it must.

**(R4.1) A third fix exists, and it is the one that shipped: make the plate small enough.**
The failure is a function of plate *scale* and of the value step at the boundary, not of
containment as such. At 532px the Premier plate read as pasted on; at 421px, with no change
to the crop or the treatment, it read as a portrait plate. Check the size before reaching
for a bleed — the page has exactly one bleed and it is spent.

**(R4.1) A page-ground scrim cannot dissolve a top edge when the subject enters the frame
near it.** The usable band is bounded by where the subject's ink begins — measured at 11.4%
of plate height on `portrait-seated.jpg` — and a band that shallow cannot dissolve an edge.
What it produces is one soft edge against three hard ones, which reads as a light leak.
Measure where the subject enters the frame before specifying a scrim at all.

**Watch the value step at any hard photo edge.** (R1.3.) A treated backdrop at luminance ~150
against Porcelain at ~227 is a 77-unit step at a razor edge, and that step is most of what
reads as "pasted." Target roughly 35–50 units where a photograph meets the page ground.

**The 35–50 window and the warmth treatment can pull in opposite directions, and warmth
wins.** (R1.3, recurred on Athletic in R6.) On a bright-sky frame the untreated edge can
already sit inside the 35–50 window, and every unit of multiply needed to pull the frame's
palette into agreement with the page pushes the step further outside it. This happened
twice independently — once on the Cover, once on `mcclain-bleachers.jpg` — which makes it a
pattern rather than a one-off: **when the two targets conflict, ship the warmth and report
the step**, rather than under-treating a frame to protect a number that a viewer cannot see
as precisely as the sampler can.

**No `transform` on a photograph, ever.** (R1.1.) A `transform` on the `<img>` promotes it
to its own compositing layer, and the treatment layer silently stops blending against it —
measured: R−B fell from 8 to −1 and luminance returned to the raw source value, meaning the
multiply was simply gone. The existing note about `mix-blend-mode` failing when an
*ancestor* carries a transform is narrower than the real behaviour: **the transformed
element itself breaks it too.** Crop by oversizing the image box inside `overflow: hidden`,
never by scaling.

**A gradient's corner renders as its first stop, whatever the stop positions.** (R1.1.) A
`linear-gradient(196deg, …)` is anchored at the top-right corner, so that corner paints the
first colour even when the stop is pulled forward — it measured 10.5 luminance brighter and
12 R−B cooler than the rest of the frame, and read as a light strip in the photograph that
was blamed on the source file for two passes. **No stop position fixes a corner anchor.** If
a treatment must be uniform across a frame, use a flat colour, not a ramp.

**Measured warmth is not perceived warmth.** (R1.1.) Multiplying by Cashmere shifts R−B by
about 4 units, below the threshold at which anyone sees a hue change — the numbers were real
and the frame still read neutral. Gold is the only saturated warm in the locked palette and
is what a photo treatment must multiply by. Judge treatment from the screenshot; report the
measurement *and* what you actually see.

**Sample scanlines, not corners.** (R1.2.) Corner sampling reported a 0.2 luminance spread
across a frame that had a visible vertical tonal edge running through it. Corners cannot see
an artifact that runs between them.

**Register mismatch cannot be fixed with color.** The bleachers frame is the one candid in
a set of composed, camera-facing frames — glancing off-axis, seated loosely. The sky-blue
was already resolved by the treatment layer. Demoting it to a smaller slot did not fix it
either. **A photograph whose register fights the page does not earn a smaller placement.
It comes out.**

**EXIF verification.** The bleachers photo is stored 2976×1984 but carries EXIF orientation
6, so every renderer presents it as 1984×2976. `sips` reports the raw buffer and is
**wrong** on this file. **Verify with `sharp().metadata()` before any crop decision.**
**No horizontal photograph exists in the usable set. Never crop a vertical image wide.**

**Editorial density — sections earn their length.** A section with its own destination site
is abridged on the hub: lede, one paragraph, one link. A section with no other home runs
full. About is the exception and runs full regardless — it is the page's introduction, and
because it introduces every pillar below it, the pillars do not re-introduce themselves.
About summarizes; pillars point.

This exists because the page reached a state where it said everything three times: About
previewed all five pillars, each pillar restated its own preview, then the index named them
a third time. **Redundancy is the primary cause of length here, not verbosity.** Cut
duplicated claims before trimming sentences.

**Length variation is a design tool, not a side effect.** When every section runs the same
number of words in the same shape, the page reads templated no matter how good the
typography is. Same failure as uniform width, arriving through rhythm instead of measure.

**Photography does not sit in adjacent sections.** Most frames show the client in the same
outfit from the same shoot, so consecutive photos read as repetition rather than variety.
Educational Leader is deliberately photo-free and stays that way. Prefer detail crops with
no face over another portrait.

**Adding images does not fix an over-long page.** It produces a longer over-long page. Cut
first, then place imagery into the space that opens.

**Scoped selectors break on dynamic content.** Anything written with `innerHTML` never
receives Astro's `data-astro-cid-*`, so scoped selectors silently stop matching. This has
bitten twice — `<Image>` in E.5 (which emits its own `<img>` tag) and the Phase F status
line. **Any selector targeting dynamically written content must be `:global()`.**

**No `IntersectionObserver` scroll-reveals. No `opacity: 0` initial states.** Below-fold
content rendered invisible in full-page screenshot captures during mockup review, and would
do the same in any PDF the client generates. All content visible on load. A printed
magazine spread doesn't animate, so this costs nothing conceptually.

**Animate `transform` and `opacity` only.** Never `transition-all`.

**Drop cap math is solved against measured font metrics, not eyeballed.** Required ink
cap-height = `(4 × body line-height) + body cap-height` for a 5-line span, computed
separately at each breakpoint. Re-solved once already (Bodoni Moda → Fraunces).

> **R2 addendum — the drop cap's line-count bands are a hardcoded lookup, and they go
> stale silently.** Two corrections to the formula above, both measured in R2:
>
> - **5 is not the span.** About's body paragraph 1 renders 2–6 lines depending on the
>   width, so `N` is measured from the rendered DOM per breakpoint and capped at 3. A cap
>   taller than its own paragraph is the failure case the formula exists to prevent.
> - **Fraunces' cap ratio is 0.700, not 0.699 and not 0.722.** Derive it from rendered ink
>   with the probe sitting inside its own white padding — clipping to the glyph box's edge
>   lets Porcelain page ground into the scan and inflates it by 3%.
>   **Independently confirmed in R9.6 by a different method:** `measureText()` at ten sizes
>   from 200px to 2000px, where Chrome's whole-pixel rounding is negligible, gives ascent
>   **0.97750 em** · descent **0.25500 em** · cap **0.70000 em**, landing on 0.700 at every
>   one of the ten sizes and at all five shipped sizes. Two methods, one number. **Treat this
>   as closed.**
>
> **R-shell addendum — both hardcoded shapes are now gone, and neither is to be
> re-created.** `About.astro` used to ship three breakpoint bands for the cap (N=3 above
> 1024, N=2 from 1023 to 873, N=3 at 872 and below), where the 872 boundary was swept at
> 5px against a 943px measure. The R-shell fix deleted that 943px measure, so the two-line
> case is unreachable at any width: the widest measure below 1024 is now 581.88px and
> paragraph 1 renders 3, 4 or 6 lines everywhere, never 2. **N is 3 at every width on the
> page and both media-query overrides were deleted** rather than left agreeing with the
> default by coincidence. There is no swept pixel boundary left in the component; verified
> by clearance scan at 19 widths, cap inside its own paragraph by 9.6px at worst.
>
> **`--p1-lines` does not exist.** R2 deleted that five-band lookup outright by
> re-anchoring the closing line from its grid row's END. Any instruction or handoff note
> telling a build to "re-sweep `--p1-lines`" is referring to something that was removed;
> there is nothing to protect. The *rule* below still stands — the arithmetic to avoid is
> the shape, not the variable name.
>
> **Do not re-introduce this shape anywhere it can be avoided.** R2's closing-line snap
> first carried a *five*-band `--p1-lines` lookup of exactly this kind, for the same
> reason. Re-anchoring that alignment from the grid row's END rather than its start
> cancelled the paragraph's height out of the arithmetic entirely and the five bands were
> deleted. Before hardcoding a line count, check whether the measurement can be made to
> cancel instead.

**Order a grid row instead of counting lines.** (R3.) Educational Leader's district link
has to clear the lede, which overruns into the margin's columns. The obvious solve needs
the lede's rendered line count — the exact hardcoded shape R2 and R-shell both had to
remove. Instead the link is authored immediately after the body, so grid's sparse cursor
seats it in the body's row. A grid row is a horizontal band by definition, so "below the
lede" becomes structurally true at every width and every line count, with nothing swept
and nothing to go stale. **Before hardcoding a measurement, check whether document order
or an end-anchor can make it cancel.** This is the third instance of the same lesson.

**Sparse auto-placement constrains where a margin can start.** (R3.1.) A margin asking for
a column that sits *behind* the cursor after the body drops to a row of its own. This is
why the band-2 margin is 11–12 rather than 10–12: the 12-column body windows run to column
10 there. When placing any element beside another, check the cursor position, not just the
column arithmetic.

**Derive internal gaps from the type, not from pixels.** (R3.1.) Educational Leader's three
internal gaps are `0.75lh` on the lede and 2.5× / 0.75× the body's line-height via `calc()`.
They re-resolve from the type at every width with no breakpoint. Fixed pixel gaps set from
one width are a swept band by another name.

**A rule belongs to what it introduces, not to what precedes it.** (R3.1.) Educational
Leader's coda rule first sat at the body's left edge while the closing line sat at the
lede's — the rule read as a divider hanging in space rather than as the coda's lid. Both
now sit on the same edge, with the space above the rule ~3.3× the space below it. **A rule
whose left edge does not match the element it introduces reads as a mistake regardless of
how correct its span is.**

**Three left edges must stay legible, which means nothing may land on a fourth.** (R3.)
Kicker at column 1, lede and coda at column 4, body at column 5. Every element in a
section resolves to one of the three. An element on any other edge muddies the system even
when its own placement is defensible in isolation.

**Crop windows are percentages of the plate, so plate width cancels out.** (R4.1.)
`--crop-w` and `--crop-l` are percentages of the plate's own width, which is precisely what
makes the crop identical across all four bands. Narrowing a plate therefore **scales the
image and does not tighten the crop** — the same source pixels are drawn smaller. The R4.1
brief reasoned that a narrower plate would cut the subject at the side trims; the outcome
was already true and the mechanism was not. Any prompt that says "a narrower plate crops
tighter" is wrong.

**`sizes` describes the image box, not the plate.** (R4.1.) The `<img>` box is 161.6% of the
plate, because that is how the crop works. A `sizes` computed against the plate
over-declares and fetches a larger rendition than the layout needs — 60vw was declared
against a plate that wanted 48vw. Recompute `sizes` per band whenever a plate's window
changes.

**`naturalWidth` lies on a `srcset` image.** (R4.1.) Chrome normalises it to CSS pixels
rather than the resource's true width, so a resolution check built on it reports upscaling
that is not happening. Load `currentSrc` standalone for the real numbers, and verify against
`astro build` + `astro preview`, not the dev server.

**A pixel diff of a section moves when anything above it changes height.** (R4.1.) The
section rasterises at a different sub-pixel phase and every glyph edge antialiases
differently — 56,067 differing pixels at 1024 with zero layout change. Neutralise the phase
before concluding a regression, and confirm with a geometry-field comparison rather than
pixels alone.

**A crossover measures the arrangement, not one element in it.** (R4.1.) The R4.1 brief
specified a band-2 crossover keyed to the lede's line count; once the window widened, that
rule selected nothing across all 256 widths while the arrangement still visibly failed at
the narrow end. The shipped rule — *the empty ground under the plate exceeds the plate's own
height* — measures the relationship between the two columns, which is what was actually
breaking. Shipped value: **1121**, a clean 1px crossing.

**A crossover keyed to one element goes stale when something else moves it.** (R6.1,
recurrence of the R4.1 finding above.) Athletic's crossover at 1145 was justified by *the
frame's rendered aspect falling below the source's native aspect*. A later correction made
the frame shorter, and the same rule now selects 1041 — the value still held for independent
reasons (the caption/detail column collision forces stacking below 1024 regardless), but it
was, for a time, justified by nothing it was originally justified by. **A crossover's
justification is only as durable as the element it was measured against; when that element
changes, re-check the crossover before trusting it, and prefer a rule built from an
enumeration of every constraint in the arrangement over a rule keyed to one of them.**

**A grid track spanned by a tall element steals space from the tracks it spans, not just the
one it "belongs to."** (R4.2.) Premier's speaking-topics list spans the body's row and the
button's row. A grid row sizes to its tallest spanning item, so the topics list — not the
button — was setting the height of the last row at every width in both 12-column bands,
inflating the body→button gap by as much as 125px with nothing else visibly wrong. **Fix a
tall spanning item by giving it its own flexible track to spill into (`fr` in the track
list), not by adjusting the gap around it** — spanning items distribute into flexible tracks
only, so a correctly-sized flexible track absorbs the overflow without touching the tracks
it shares with shorter content.

**`display: inline-block` carries a strut; a plain block does not.** (R4.2, second instance
of the R4.1 finding.) `.prem-cta`'s paragraph rendered 57.8px around a 48.5px button — the
inline-block's line-box descent, invisible until the plate's bottom edge had to align to
something. Converting the wrapper to `display: flex` removed the strut without touching the
button's own box. **Any inline-block wrapping a fixed-height child is a candidate for this
bug whether or not the extra space is currently visible** — it only becomes visible once
something else is measured against that edge.

**An overlap's minimum depth is derived from the section's own type, not asserted.** (R6.)
Athletic's lap is `calc(4 × var(--bio-size) × var(--bio-lh))` — four body-line-heights — and
the rule behind the constant is *an overlap must be at least twice the section's own largest
internal vertical gap*, so it cannot be read as a spacing accident. Measure the largest
internal gap first; the lap constant follows from it. An overlap with no measured floor is a
guess that happens to look fine in one screenshot.

> **R6.3 amendment: the derived floor is a floor, not the value.** `--ath-lap` is deleted.
> The lap is now whatever the detail's height exceeds the closing line's, and 122.4px is
> enforced as a `min-height` on the detail so the floor cannot be crossed silently by a
> future crop. Shallowest achieved: 244.0px at 1146.

**`aspect-ratio` cannot express a minimum shape.** (R6.) Athletic's bleed frame needs a floor
— at least as tall as some ratio, taller still when the type column beside it is taller —
and `aspect-ratio` cannot do that: fixing height and letting width follow computes width from
a definite height and overflows its column; fixing width and letting height follow never
stretches to fill a taller row. **Use a `padding-top` percentage spacer instead** — it
resolves against the element's own width and only ever contributes a minimum, which is the
shape the constraint actually has.

**An em constant cannot track a rounded font metric.** (R6.3.) Chrome rounds a font's ascent
and descent to whole pixels at the rendered size, so a hand-modelled baseline offset —
`lh/2 + (asc − desc)/2 · em` — drifts unpredictably with font-size: measured 0.02px out at
31.68px and 1.27px out at 26px on the same face, the larger error landing at the width
nearest the crossover. The arithmetic was correct and still missed. **Where two or more
elements must share a baseline, use grid's baseline-sharing group (`align-self: last
baseline`) and let the layout engine answer.** Supersedes the offset arithmetic in About's
and R6.2's closing-line notes as the preferred method; those still work where nothing else
has to agree with them. **Verify in Safari** — this is one property carrying a whole
composition.

**A shape floor's surplus has three places to go and only one is legal.** (R6.3.) When an
image column carries a minimum aspect and the type column beside it does not, the difference
must land **above the type column** — bottom-align it. It must not land in a gap between two
type blocks, and it must not be absorbed into the type's derived gaps. Put between the body
and the coda it blew the 8-line gap ceiling at 1920 twice (R6.2 at 13.39 lines, and R6.3's
first arrangement). The failure only appears at the widest viewports, where the floor's
surplus is largest, so it will not show at 1440.

> **The rule has a precondition, and outside it the rule inverts (R9.5).** "Above the type
> column" is legal only where the type column **opens its section** — there, above it is
> section padding, which has no ceiling. That is Athletic's case, and it is the case the rule
> was written from. In Charging It the lede band sits above the type column in the same
> columns, so "above the type column" *is* a gap between two type blocks — which this rule's
> own next sentence forbids. Bottom-aligning there measured a 370.61px lede-to-turn gap at
> 1920, **12.11 body line-heights against the 8-line ceiling**, reproducing the documented
> failure exactly and, as documented, not showing at 1440. The type column stays
> `align-self: start` and the frame runs longer than it; **a photograph running past its text
> column is ordinary editorial** (already settled for R9's 1920 figure overrun). **Before
> applying this rule, check whether the type column opens its section. If it does not, the
> surplus has no legal destination above it and the rule does not apply.**

**Declare the visible quantity, not the invisible one.** (R6.3.) R6 declared the lap and left
the overhang — the thing a reader actually sees — as a remainder, which meant it had to be
re-verified every pass and could be broken by a copy length or a crop. Sizing the row from
the element that must land on the closing line makes the cap structural: it cannot be
violated by a width, a copy change or a crop. **Ask which quantity the reader sees, and make
that one the declared one.**

**A column window does not transcribe between track counts by arithmetic — transcribe its
properties.** (R7.) The pivot's 2–10 of 12 has no 8-track equivalent by ratio. What carries
over is what the window *does*: one track of inset at the left (the inset is why the band
reads as a turned page — every other section starts at column 1 or outdents left of it) and
air at the right (so the line never runs trim to trim). Columns 2–7 of 8 is the only window
that keeps both, and it is six columns, which is a measure the shell has already validated.
**Name the two or three properties a window is carrying before converting it, then find the
window that keeps them.** Same family as the R4.1 line-value-vs-column-number correction,
arriving from the other direction.

**A body-measure crossover does not govern display type.** (R7.) `.win-body` takes a sixth
column at 900 to keep body copy off the 45-character floor. The pivot runs at 4–6× body size
and its 17/16/20 characters per line are nowhere near that window, so inheriting the 900
crossover would move the pivot's left edge for a reason that is not its own. **Check whether
a shared breakpoint's justification actually applies to the element inheriting it.**

**A relationship that must hold is declared against its counterpart, never left to fall out
of two swept values.** (R8.2. **Fourth instance** — after `--p1-lines`, the R4.1 crossover
keyed to one element, and R6.3's lap-as-constant.) The Index's numeral was
`clamp(36px, 3.9vw, 56px)` and had to track the page's shared `--lede-size`, itself a
`clamp()`. Two independent clamps float on different schedules and floor at different widths
— `--lede-size` floors at 1368, the numeral rode `3.9vw` to 923 — so the ratio held at 1440
(1.023) and collapsed below it (0.768 at 1024, 0.692 at 901). Nothing was broken; the
relationship had simply never been declared, and agreed in one range by coincidence. The fix
is one line — `--idx-num-size: calc(var(--lede-size) * 1.02)` — and there is then nothing
left to sweep, no second constant, and no guard. **Ask what a value must stay in proportion
to, and express it that way. If the answer is "another swept value," the proportion is a
coincidence.**

**Equalize rules on rendered ink, not on box edges.** (R8.1.) Symmetric padding reads
asymmetric wherever a tall display glyph sits on one side of a rule: the numeral's leading
above its cap-height is unoccupied space, so the Index's rules sat visibly low with
identical padding above and below. Equalize the *ink* distances — descender to rule, rule to
the next cap-top. The shift is **half** the difference between the two leadings bracketing
the rule, because moving `d` from one side to the other closes the asymmetry by `2d`; a full
shift over-corrects into an inversion. Fraunces' cap ratio is **0.700** (R2, measured);
Montserrat's published `capHeight` is 700/1000 em and is an assumption, not a measurement.

> **The tolerance is 3px, and it may not be tightened.** (R8.2.) It was set at 2px by feel
> and was finer than the measurement is stable: the below-rule distance is computed from
> Chrome's whole-pixel-rounded ascent at the numeral's rendered size, and it swings up to
> 0.65px between adjacent viewport widths with no layout change at all. The residual is not
> monotone — 1440 measured 2.11px while 1460 measured 1.46px and 1600 measured 1.84px — so
> **any constant tuned to satisfy one width will break a width 20px away.** A tolerance
> cannot be tighter than the jitter of the quantity it measures. The only route inside 2px
> is reading rendered font metrics instead of modelling them, which CSS cannot express and
> which JavaScript is prohibited from supplying here.

**Chrome 129+ wraps a `<details>`'s non-summary children in `::details-content`.** (R8.) At
its `display: block` default that box is an ordinary grid item and auto-places into column
1, so an expansion specified to sit in the text-block window measured one column wide at the
left trim instead. Fix by declaring `::details-content` as a subgrid spanning `1 / -1` —
**in its own rule**, so an engine without the pseudo-element drops that rule alone and the
element remains a direct child whose existing placement still resolves. Same family as the
`.plate-panel` reservation: a box you did not author still takes a track.

**Inline-block gaps render larger than they are declared.** (R4.1.) `.edu-link` and
`.legends-link` are `display: inline-block`, so a declared 2px sits on top of the parent
strut's half-leading and renders 4px; a block-level `<ul>` has no strut and rendered 2px
from the same declaration. Two margins that read differently were declared identically.
**Match rendered gaps, not declared ones.**

**Screenshot loop is static only.** Animated, scroll-driven, and interactive elements are
excluded — they cause infinite correction cycles. Test motion manually.

**Governing files must be explicitly opened, not inferred.** A prior session listed the
project directory (which showed `Claude.md` existing) but never opened it — the rules that
landed correctly did so because they were restated in the prompt. Every build prompt
includes an explicit confirmation step.

**Attribution footer domain is `https://anchordigitalco.com`.** An earlier version of
`anchor-digital-standards.md` had `.co` marked as a placeholder and it leaked into a build
verbatim.

---

## Set aside from the Atelier direction

**Ruled out permanently:** pill buttons and polaroid frames (fight the hard-edged editorial
premise), script font (banned by brand guidelines), blush (outside the locked palette).

**Available but unapproved:** the ghosted-monogram mechanic and the circular stat-badge
treatment. Evaluable now that Phase B has shipped, but **not approved.** Do not introduce
either without Jackson's explicit sign-off in the session that uses it.

---

## Photography

All available client photography is **vertical — no horizontal images exist.** No wide
cinematic crops anywhere; tall portraits stay tall.

> **Treatment intensity, by register (R6).** Two values now shipped and reusable: **0.24**
> for composed studio frames on neutral seamless (`portrait-hero.jpg`, `portrait-seated.jpg`)
> and **0.44** for candid outdoor frames with saturated environmental colour
> (`mcclain-bleachers.jpg`). The higher value is what it takes to pull a blue-sky, green-turf
> frame into agreement with the palette without going muddy — 0.52 was tested and rejected
> (mean luminance drops to 114.8 with no visible gain in agreement). Start future outdoor
> frames at 0.44 rather than re-sweeping from 0.24.
>
> **A tracked-uppercase caption's fit can be genuinely thin — and in R6.3 it became the
> binding crossover constraint.** `THREE SONS, THREE PROGRAMS` clears its 3-column window by
> **1.54px (0.65%) at 1145**, down from 2.93px (1.2%). It is now the widest-failing
> constraint in the Athletic arrangement, ahead of the frame's aspect. Two characters should
> come out of this string before launch; it needs Jackson's sign-off regardless, as new copy
> not in `COPY.md`. If Montserrat ever fails to load, a fallback sans wraps it silently.

| Filename | Description | Placement |
|---|---|---|
| `portrait-hero.jpg` | Black blouse, white pants, grey seamless. Clean negative space both sides. | **Cover** — `column-tall`, cols 8–12 |
| `portrait-seated.jpg` | Leopard blazer, seated, warm tan ground. | **Premier Leadership** — `column`, cols **1–4** |
| `mcclain-bleachers.jpg` | Cream suit, seated on bleachers, football in hand, helmet on the bench at left. EXIF orientation 6. | **Athletic Management** — `bleed-left`, cols 1–7 (1–6 in band 2). **Un-retired September 4 2026** by Jackson. |
| `athletics-detail.jpg` | Heel resting on a football, goalpost behind. No face — strongest single image in the set. | **Athletic Management** — `inset`, cols **4–6**, overlapping upward by whatever its height exceeds the closing line's. 122.4px is a verified floor (enforced by `min-height`), not a value; shallowest achieved 244.0px at 1146. Crop window x [0.2275, 0.7725] · y [0.180, 0.700]. |
| `src/assets/lifestyle-street-inset.jpg` | Red blazer, jeans, downtown street. Environmental. 1500×2100, no EXIF orientation tag, native 5:7. **The filename is `lifestyle-street-inset.jpg`; earlier versions of this file named `lifestyle-street.jpg`, which does not exist on disk (corrected R9).** Distinct from `brand_assets/SHP SHoot 7.jpg` — different hash, dimensions and aspect. | **Charging It to the Game** — `column`, cols 9–12. Rendered aspect **0.800**, crop `--crop-h: 112%` / `--crop-t: -12%`, taken off the top to remove the sky — the one saturated blue in the frame. **Ships at the shared 0.24 treatment, no override.** |
| `mcclain-field.jpg` | Direct gaze, arms crossed, composed, stadium behind. | **Unplaced.** Held. Was proposed as a full-width band between About and Educational Leader; rejected because that would require a horizontal crop of a vertical image. |

> ### `mcclain-bleachers.jpg` — status
> **Logo/mark clearance confirmed by Jackson, September 4 2026.** The helmet in frame may
> ship as-is; no crop restriction applies to this image.
>
> This image was previously marked *Retired — register mismatch*. Jackson overrode that on
> September 4 2026 after reviewing the full set. The register note still stands as a
> treatment instruction: it is warmer and more candid than the studio frames and must be
> pulled harder toward the palette (see Treatment) — **shipped at 0.44, against the studio
> frames' 0.24 (R6).**
>
> **`sips` reports the wrong dimensions on this file (R6).** `sips` returns the raw buffer —
> 2976×1984 — and ignores EXIF orientation 6. Every renderer in the actual pipeline (Astro's
> image pipeline, `sharp().metadata()`, the browser) presents it correctly rotated at
> 1984×2976. **Verify orientation-sensitive files with `sharp().metadata()`, not `sips`.**

> **Filenames — resolved (R6).** Canonical names, verified against the filesystem: this file
> is `brand_assets/mcclain-bleachers.jpg`; the detail is `src/assets/athletics-detail.jpg`.
> The raw source files with camera-style names (`SHP shoot 3.jpg`, `SHP SHoot 7.jpg`) are
> **not duplicates of these** — `SHP shoot 3.jpg` matches the detail's pixel dimensions but a
> different SHA-256 (a re-encode), and `SHP SHoot 7.jpg` is a different image from
> `lifestyle-street-inset.jpg` entirely. Do not assume a raw-named file is interchangeable
> with its working-named counterpart without checking the hash.
>
> `brand_assets/IMG_8758.jpg` **was** byte-identical to `mcclain-bleachers.jpg` (confirmed by
> SHA-256) and has been deleted; `mcclain-bleachers.jpg` is canonical.

26 additional unreviewed photos exist in the client's original folder of 30 — not triaged.

**Treatment:** every photograph gets a gradient overlay plus a `mix-blend-multiply`
color-treatment layer, pushed warm/Cashmere rather than neutral gray. **The two
field/stadium frames (`mcclain-bleachers`, `mcclain-field`) carry saturated blue and green
that fight Antique Gold and Cashmere — pull them down harder than the studio frames**,
which can sit closer to natural. Colour treatment does not fix a register mismatch; it
only keeps the palette intact.

**Every photograph in a *section* gets a caption**, hung in the margin: Montserrat, small,
letterspaced, uppercase, Smoked Slate at reduced opacity. **No gold rule** — budget spent.
Factual and short, eight words maximum. A caption is editorial content — a credit or a fact
about the subject — never file metadata like "studio portrait, grey seamless."

**The Cover is an explicit exception and carries no caption.** (R1.2.) The name is the
caption. The Cover also takes no folio, no kicker and no section numeral, for the same
reason: it is a cover, not a section. Do not re-add one.

**Premier Leadership is the second exception.** (R4.1.) *Captions identify photographs
that need identifying; a portrait of the subject inside her own section does not.* R4's
live margin is spent on the speaking-topics list, and a caption hung anywhere else would
land on a fourth edge. Do not invent one.

**Charging It to the Game is the third exception.** (R9.2, Jackson's call mid-pass.) It
shipped with a caption — `OFF THE CLOCK`, hung beneath the frame — and the caption was
removed. The same reasoning as Premier Leadership applies: it is the subject inside her own
section, and the string was Claude-written copy awaiting sign-off for a photograph that did
not need identifying. Removing it also took 56px off the figure column. Do not re-add one.

**OSU clearance unresolved.** Do not use any OSU-owned imagery — helmets, campus, branded
gear — until written scoped confirmation from OSU's media contact *and* a separate written
warrant from the client to Anchor naming the LLC. **Interim rule, all three schools: school
names as plain text only. No logos, no marks, no team photography, no school-keyed color.**
Nominative text reference is fine; visual identity is not.

**Jaylen was announced 2026 OSU captain. No public client announcement has been made — do
not surface it.**

---

## Site Structure — Index / Funnel Destinations

```
01  PREMIER LEADERSHIP              → https://www.premierleadersllc.com
02  EVERYDAY LEGENDS FOUNDATION     → https://www.everydaylegend.com
03  EDUCATIONAL LEADERSHIP          → https://www.ucvts.org
04  THE McCLAIN BROTHERS            → expands in place; reveals Jaylen / KJ / Cam
05  CHARGING IT TO THE GAME         → #charging-it-to-the-game
```

**Entry 01 fix — closed (R8).** It reads "Premier Leadership." The LLC suffix appears
exactly once on this site, in the About paragraph, where the client wrote it herself. Do not
propagate it; do not normalize About's instance away.

**Entry 05 resolved:** points at the blog section anchor, not `href="#"`. A dead click
reads as a broken site rather than as coming-soon, and printed magazines are driving
traffic. Same logic for athlete sub-rows — **if an individual site is not live, render the
domain as plain text, not as a link that goes nowhere.** Visual treatment stays identical
either way; only the dead click is removed.

| Name | Program | Site | Instagram | X |
|---|---|---|---|---|
| Jaylen McClain | Ohio State Football, #8 | jaylenmcclain.com | @jaylen.8 | @JaylenMcclain08 |
| KJ McClain | University of Tennessee Football, #40 | kjmcclain.com | @_kj._1 | @KenyonMcclain |
| Cam McClain (Class of 2028) | Seton Hall Prep Football, #6 | cammcclain.com | @cam_mcclain | @mcclain3924 |

> **Liveness, measured September 7 2026 (R8.1). A 200 decides nothing here** — all three
> domains are registered on the same GoDaddy host and all three return 200. **The served HTML
> decides.** Jaylen's and KJ's are real sites and **ship as links**; `cammcclain.com` serves a
> "Launching Soon" page with an email-capture form and **ships as plain text.**
>
> **Cam's stays plain text even though the domain resolves, and this is not the dead-click
> rule doing the work.** Cam is class of 2028 — a minor — and pointing the hub at a
> third-party lead-capture form attached to him is the client's exposure, not a broken link.
> Revisit when the site carries real content. Two links and one plain string is a small
> asymmetry and nobody counts.
>
> The section carries the treatment on one rule (`.idx-bro-site`) and the states on another
> (`.idx-bro-link`), so **wrapping the one string is the entire change** when Cam's site
> ships. **Liveness is point-in-time; re-check all three close to the gala.**

All external links open in a new tab with **`rel="noopener"`** — not
`noopener noreferrer`. `anchor-digital-standards.md` is the authoritative cross-repo
standard. `noreferrer` strips the Referer header, costing Anchor referral attribution from
every client site it ships.

---

## Technical Decisions

**Stack:** Astro + Tailwind + Vercel. Informational — no accounts, no payments, no
real-time data — so the standard static stack per `CLAUDE.md`, not Next.js/Supabase.

**The site stays fully static.** `output: "static"`. No Vercel adapter, no
`output: 'server'`, no `export const prerender = false` on any route. The contact form uses
a third-party endpoint specifically so this holds.

**CMS:** not adopted. Copy and images hardcoded. Sanity only if the client wants to
self-manage blog posts or pillar copy — separate quote.

### Contact form *(Phase F — shipped)*

Provider **Formspree** with native Cloudflare Turnstile (docs updated April 2026). Stores
the secret in its own dashboard, documents the `cf-turnstile-response` token field, and is
the only provider documenting the `fetch()` path this build requires. Web3Forms puts
Turnstile behind a paid tier.

**Cloudflare test keys** (official): sitekey `1x00000000000000000000AA` always passes ·
`2x00000000000000000000AB` always fails · `3x00000000000000000000FF` forces the interactive
challenge · secret `1x0000000000000000000000000000000AA` always passes. Test sitekeys emit
a dummy token only test secrets validate — **never mix a test sitekey with a live secret.**

Spec, as built:
- Recipient `premierleadersllc@gmail.com`.
- Client-side `fetch` POST, response rendered inline. No native form navigation, no
  redirect to a third-party success page. **Zero main-frame navigations** — verified.
- Honeypot as a second layer, off-screen, `tabindex="-1"`, `aria-hidden="true"`. Verified:
  a filled `_gotcha` sends zero requests.
- **Underline inputs — bottom rule only.** No border box, no rounded corners, no fill. The
  page is built out of rules and measures; boxed inputs are SaaS convention.
- Real `<label>` elements, always visible, above the field. Never placeholder-as-label.
- Submit button **Obsidian**, solid fill. Never ghost or outline, and not gold — gold stays
  structural, not interactive.
- **Inputs and textarea minimum 16px** — below that iOS Safari zooms on focus.
- **Turnstile is a fixed ~300px and overflows narrow viewports.** Measured: 308px measure
  against a 300px widget at 360px; `scale(0.86)` with `transform-origin: left` below that,
  plus a compensating container height. Reset the widget after a failed submission.
- Native `<select>` for inquiry type — never a custom dropdown. **The six options are
  unconfirmed** (see Launch clock).
- Four states verified: idle, submitting, success, and errors distinguishing verification /
  network / server, each surfacing the `mailto:` fallback.
- Privacy link sits **outside** the `<form>` — as its last child it put error messages
  visually below the link rather than under the button that produced them.
- Env vars only, never hardcoded. `.env` gitignored, `.env.example` committed.

**Any pass that restructures the page must re-verify all of the above at every breakpoint.**
The form was built and verified before the composition pass, so composition changes land
underneath it. If a composition change forces a trade-off against the form, stop and report
rather than choosing.

> **Ported into the rebuilt grid at R10. Four things had to change, none of them on the
> verified list above.** (1) Every placement class the component used — `.spread`,
> `.col-rule`, `.col-body`, `.col-indent`, `.col-margin`, `.row-1..3`, `.section-head`,
> `.section-numeral`, `.margin-block`, `.margin-label` — was deleted with the old grid in R1;
> it would have rendered as an unstyled stack. (2) `--hair-gold` no longer exists, and an
> undefined `var()` in that shorthand is invalid at computed-value time, so three link
> underlines silently disappeared; routed to `.edu-link`'s Slate `rgba(71,68,64,0.42)`.
> (3) **The gold focus ring was a live accessibility defect** — gold measures 2.4:1 on
> Porcelain, under WCAG 1.4.11's 3:1 floor for a non-text indicator. Obsidian is 12.9:1 and
> is already what `.btn-solid` and `.edu-link` focus in. (4) The submit takes `.btn-solid`;
> Phase F's three-layer tinted shadow has no counterpart on a page with zero `box-shadow`,
> and `.btn-solid` satisfies the verified property (Obsidian, solid, not ghost/outline/gold)
> exactly — so no conflict and no STOP.
>
> **Also removed at R10:** the 09 section numeral (no shipped section carries one), and a
> Claude-written `Premier Leadership · Everyday Legends Foundation` note under the address —
> it is not in `COPY.md` and it asserted as settled the exact routing question the launch
> clock records as open item 6. **Unsigned copy that prejudges a client decision is worse
> than no copy.**
>
> **One privacy link ships, in the footer (R10.1).** R10 shipped two ~150px apart — one in
> the contact column (Phase F item 11) and one in the footer (the Footer spec). The
> contact-column link is deleted, along with its now-unused `privacyPath` const — *a dangling
> const is the next pass's invitation to re-add the link.* **Phase F item 11 is satisfied by
> the deletion, not broken by it:** that item required the link outside the `<form>` because
> as its last child it pushed error messages below itself rather than under the button. With
> no link in the column, the status region is unconditionally last — a stronger guarantee
> than the original fix.
>
> **The address is pushed to the foot of the stretched grid item by `margin-top: auto` in a
> flex column (R10, round 2).** Built without it, the section carried 411–465px of empty
> ground under the text column — R2's About "hollow half" recurring exactly, with the address
> hanging off the lede into open ground. The section now closes on one horizontal: address at
> column 1, submit button at column 7, delta **0.00px** at 1920, 1440, 1280 and 1024. No
> baseline group and no `last baseline`, so the Safari risk is not extended. Stacked, `auto`
> resolves to zero and the derived 0.75lh lede gap survives at 46.02px.

**Form rhythm — derived at R10.1, and the pairing was inverted before it.**

Every label sat **1.33× closer to the field above it than to its own**, identical at all
four beside widths because none of the terms were width-dependent. The form did not read as
loose so much as unattached.

- **Field → field: `calc(1.5 × --bio-size × --bio-lh)` = 45.9px.** Declared against the body
  line, not as a literal (R8.2). The model is `.edu-rule`, whose binding and separating gaps
  are both multiples of the body line at a 3.3:1 ratio and re-resolve from the type with no
  breakpoint.
- **Typed ink → its own rule: `var(--s1)` = 8px.**
- **Label → its field: declared `0`.** The label sits on `line-height: var(--baseline)` over
  a 10.5px face, so its line box already carries **10.24px** below its baseline. The old
  `var(--s1)` stacked on top of a gap that already exceeded the floor and rendered 18.24px.
  **This is R4.1 — match the rendered gap, not the declared one — arriving through leading
  instead of a strut.**

Result: pairing 40.03px against separation 56.30px, ratio **0.71** where it was 1.33 and
inverted. Form height 761.25 → 688.31px, pitch per field −17.8%. **The separating gap grew
by 5.89px while the form got tighter — the air was moved, not deleted.** `.form-status`
keeps `var(--s4)`: it is a state gap, not resting rhythm.

**Privacy policy:** required standard deliverable (CalOPPA). **Not drafted; `/privacy`
404s today.** Must name the contact form as a collection point. Client supplies and warrants
her own data-practice details.

**Footer:**
- Left: `© 2026 Dr. Syreeta McClain. All rights reserved.`
- Right: linked `Built by Anchor Digital` → `https://anchordigitalco.com`, new tab,
  `rel="noopener"`.
- Privacy policy link, conspicuous. **This is the page's only privacy link** (R10.1).

> **Column split is 8/4 and 5/3, set on measured need (R10, round 2).** The first split
> (5/6) put the copyright 3.58px inside its block at 1024 and wrapped it to two lines from
> 819 down through the bottom of band 3. Both registrations were invisible anyway — the
> copyright needs 355.75px and the credit 195.39px, so neither ever reaches its block's right
> edge. Outer edges unchanged; minimum clearance 56.13px at 751, no wrap from 751 up. It
> still wraps below 399, which is correct — nothing sits beside it there. The footer is a
> direct child of `<body>`, outside `<main>`, so it resolves to the `contentinfo` landmark.

**Media clearance** runs to the client via the MSA's asset warranty clause. Anchor's
protection is contractual, not operational. Third-party media requires two written
confirmations: rights holder → client, then client → Anchor.

**Hosting/domain:** Vercel per standard. **Domain control unresolved.**

---

## Build Phases

| Phase | Scope | Status |
|---|---|---|
| A | Astro + Tailwind scaffold; faithful port of the Spread mockup | Shipped |
| B | Editorial refinement — Fraunces optical system, scale and space, Cashmere grounds | Shipped |
| C | Structural layout pass — 12-col grid, image tiers, live margin, chapter break, rhythm. **Ran after B in response to a scale-monotony diagnosis.** Specified but **not verifiably rendering** | Shipped, unverified |
| D | Athletics section, photo hierarchy swap, lede rule application | Shipped |
| E | Full copy build — Educational Leader, Everyday Legends, Charging It to the Game | Shipped |
| E.5 | Heading structure, folio consolidation, `RunningHead` deleted, performance pass (−63% page weight) | Shipped |
| E.6 | Athletic Management copy completion; plate-panel grid reservation fixed | Shipped |
| F | Contact section + Turnstile (Formspree) | Shipped |
| ~~E.8~~ | ~~Composition pass against the existing build~~ — **superseded.** Retroactive composition in production code failed three times (C, E.8, E.9). Replaced by the rebuild below. | Cancelled |
| E.7 | Editorial density cuts — **resolved.** The copy was rewritten and approved September 4 2026; `COPY.md` now carries the shipping deck. | Closed |
| **R** | **Rebuild from the approved wireframe, in vertical slices** — see below | **Next** |
| G | Privacy policy page | **Blocker** |
| H | Meta description, Open Graph, favicon, canonical, robots.txt, sitemap.xml | **Reconsider deferral** |

### The rebuild — vertical slices (Phase R)

One complete section at a time, reviewed on localhost before the next begins. **Never a
horizontal pass across the whole page.** Each slice is a fresh session.

| # | Slice | Notes |
|---|---|---|
| R1 | Page shell + 12-col grid + Cover | Slice 1 also audits for the ancestor `max-width` before anything else. **Shipped** |
| R2 | About | **Shipped** |
| R-shell | Collapse-band fix | Four bands, 8-column tablet step, single-column threshold moved 1023 → 750. See Layout System. **Shipped September 6 2026** |
| R3 | Educational Leader | photo-free by design; outdented kicker. **Shipped September 6 2026** (R3 + R3.1 corrections) |
| R4 | Premier Leadership | image-first entrance; plate 1–4, type edge plate-derived. **Shipped September 6 2026** (R4 + R4.1 + R4.2) |
| R5 | Everyday Legends | decorative mark (Fraunces asterisk), not a number. **Shipped September 6 2026** |
| R6 | Athletic Management | both images; the bleed, the budgeted overlap, caption-only left margin. **Shipped September 7 2026** (R6 + R6.1 + R6.2 + R6.3). Foot closes on one baseline-shared horizontal; crossover 1145 with 7px headroom over a derived 1138. |
| R7 | Feature Quote | type on Obsidian, no photograph. **Shipped September 7 2026.** Flat ground, Fraunces italic, gold on "Legacy" only, no quotation marks. Also carried the Cover's `id` + `<h2>` fix. |
| R8 | Index + McClain Brothers expansion | **Shipped September 7 2026** (R8 + R8.1 + R8.2). Numerals 1–3, everything else on the lede edge; a lede was added in R8.1; numeral size declared against `--lede-size`; `sections.ts` Cover entry removed. Entry 01 reads "Premier Leadership". |
| R9 | Charging It to the Game | **Shipped September 8 2026 (R9 through R9.6).** Crossover 1254, stacked window 3–9, band 3 on one left edge, coda derived from its own longest line with one authored `<br>` at ≤750 after "simply", caption removed. Lede band and cap-height registration in R9.5/R9.6 below. **Nine passes; five corrected chat's own rulings — see Workflow.** |
| R9.5 | Charging It — lede band + frame reposition | **Shipped September 8 2026.** Lede to its own band at 3–11; frame to 9–12 beside the prose only; turn/body/coda at 3–8; all lede derivation deleted. New collapse-aware primitive `.win-chg-lede` (3/12 → 3/10 → 1/-1 → 1/-1). Dead column 383.67px → 24px. Two STOPs reported and both ruled — see the note above. |
| R9.6 | Charging It — frame registration | **Shipped September 8 2026. R9 is settled.** Frame top trim registered to the turn's cap height via `--chg-frame-register`, k = 0.31125. Residual ≤0.75px against a 3px tolerance, two methods. Clearance −1.48px → +70px. `text-wrap: balance` measured both ways and ruled to stay. Stacked arrangement byte-identical, 20 quantities × 10 widths, zero differences. |
| R10 | Contact + footer | **Shipped September 8 2026.** Form ported into the rebuilt grid, not rebuilt; text 1–5, form 7–11, column 6 left open as a measured empty channel (175.3px at 1920 → 100.7px at 1024). Stacking derived text-above-form. All twelve Phase F items re-verified with method. Height-spread check run and rescinded. **Carried fix: the Cover CTA pointed at `#contact` against an id of `sec-contact` — the page's primary call to action had been a dead click since R1.** Precedent: R7 carried the Cover's id, R8 carried the `sections.ts` change. |
| R10.1 | Contact — form rhythm + one privacy link | **Shipped September 8 2026.** One file, `Contact.astro`; `global.css` untouched, which is why the nine-section delta is structural rather than hopeful. Six declarations changed, three deleted with the link. Pairing ratio 1.33 (inverted) → 0.71; form height −72.94px; Contact 1011.94 → 880.31px, reported not steered. Predicted 40.04 / 56.31 / 0.71 before building, measured 40.03 / 56.30 / 0.71. |
| R11 | `/privacy` | Phase G, launch blocker |
| R12 | Folio marginalia | **`FolioMarginalia.astro` is not mounted.** Mount it, wire the single scroll listener, verify it goes quiet over the pivot and that every label matches its section's `<h2>`. Depends on R8's `sections.ts` change. **This is the page's entire scroll budget and the only element that carries section identity — the page cannot be judged inert until it is live.** |
| R13 | Index row hover (weight shift) | **After launch. ⚠️ Blocked on Jackson's ruling** — it needs a scoped exception to "animate `transform` and `opacity` only," conditional on a measured reflow pass. Concept, conflict and the two routes are written in **Motion vocabulary**. |
| R14 | Contact on Obsidian | **After launch. ⚠️ Blocked on Jackson's ruling** — a second dark ground either gives the page a spine or dilutes the pivot. If ruled in, the focus ring must be re-derived on Obsidian and gold must still not be spent. See **Motion vocabulary**. |
| R15 | Everyday Legends opener | **After launch.** Break the third consecutive type-opener. Composition judgment, Opus, screenshot before numbers. The three left edges do not move. See **Motion vocabulary**. |
**Preserved from the old build, do not rebuild:** the contact form (Phase F), the Fraunces
optical system (Phase B), the locked palette, and the standing rules in this file.

### Heading structure (locked)

**Ten sections, ten `<h2>`s, in visual order under one `<h1>`.** The rule: each section's
`<h2>` is the element whose text names that section — the same string the folio uses as its
label. Sections with no visible title (About, the index) carry a visually hidden `<h2>`
using `clip-path`, **never `display: none`**, so it stays in the accessibility tree. The
chapter break's `<h2>` carries the pull quote, so a screen-reader user jumping by heading
lands on the page's thesis at the structural pivot.

**If a pass outdents a kicker or switches a section to a numeral-only entrance, confirm its
`<h2>` and folio label still match.**

> **The Cover is one of the ten (R7).** Its `<h2>` is **"Portrait"**, visually hidden via the
> `.vh` primitive (`position: absolute` + `clip-path: inset(50%)`), authored **after** the
> `<h1>` so the heading walk is h1 → h2 → h2 rather than opening on a level 2. Its `id` is
> `sec-portrait`. A comment in `Cover.astro` claiming the Cover sat outside the ten-`<h2>`
> structure was wrong and has been corrected — the Composition table's ten rows open with the
> Cover.
>
> The Cover section also carries `aria-labelledby="cover-heading"` in place of its former
> `aria-label`. The region previously had two accessible names disagreeing with each other
> and with the folio, with the attribute silently overriding the heading; region name, heading
> text and folio label are now one string.
>
> **Built count as of R10: 10 of 10. CLOSED.** `Buffer.compare(sections.ts label, rendered
> <h2>)` = 0 in source, in the dev-server DOM and in the `astro build` output
> (`436f6e74616374` both sides); `aria-labelledby="contact-heading"` matches the `<h2>`'s id.
> One `<h1>`, ten `<h2>`s in visual order: Portrait (hidden), About (hidden), Educational
> Leader, Premier Leadership, Everyday Legends Foundation, Athletic Management, the pull
> quote, Index (hidden), Charging It to the Game, Contact.
>
> **Built count as of R9: 9 of 10.** Charging It to the Game's `<h2>` is visible and reads
> `Charging It to the Game`, matching `sections.ts` byte-for-byte; the Index's entry 05
> anchor resolves. Only Contact (R10) remains.
>
> **Built count as of R8: 8 of 10.** Portrait (hidden), About (hidden), Educational Leader,
> Premier Leadership, Everyday Legends Foundation, Athletic Management, the pull quote, and
> Index (hidden, `id="sec-index"`, `aria-labelledby`). Missing: Charging It to the Game (R9)
> and Contact (R10) — unbuilt scope, not missing headings.

> **The Cover's folio entry — resolved, pending implementation (R7).** `src/data/sections.ts`
> carries `{ id: 'sec-portrait', n: '01', label: 'Portrait' }`, while the Composition table
> says the Cover takes no folio, no kicker and no numeral. With `FolioMarginalia` mounted the
> folio would print "01 PORTRAIT" over the Cover, contradicting the rule that removed section
> numerals in the first place.
>
> **Ruling: the Composition table wins. Entry 01 comes out and the remaining numerals shift.**
> A cover is not a section. The Cover keeps its `id` and its hidden `<h2>` regardless — those
> serve the accessibility tree and are unrelated to folio tracking.
>
> **Done in R8.** `sections.ts` now runs 01 About → 08 Contact, with the pivot still
> deliberately absent so the folio goes quiet over it. The Index's entry already existed,
> already in page order and already labelled `Index`; only its `n` shifted. The Index's own
> 01–05 and `sections.ts`'s `n` values are unrelated numbering systems and **MUST NOT be made
> to agree** — nor may either be reconciled with the abridged sections' decorative marks.

> **`FolioMarginalia.astro` is not mounted on the rebuilt page (R7).** The signature move
> described at length in this file is not rendering today, and "one scroll listener exists in
> the entire build" is currently **zero**. Verified against a throwaway mount that the folio
> goes correctly quiet over the pivot (opacity 0.745 → 0, no error, no stale label). **This
> needs its own slice — see R12 in the rebuild table. Do not smuggle it into R8.** R8 did
> not; the `sections.ts` change it carries is data only and mounts nothing.

---

## Workflow

> **Two corrections to what this section used to say.** There is **no `main` branch in this
> repo** — work has been a chain of feature branches, so the "main stays at the last
> reviewed state" rule has not actually been operating and there is no clean state to fall
> back to. **Cut `main` from the reviewed Phase F tip.** And this file was **untracked in
> git**; commit it.

- **Git:** `main` sits at the last reviewed state. New work on a feature branch. Merge only
  after explicit approval. **Never push to GitHub without explicit instruction.** Every pass
  states which commit it based on.
- **Scope isolation:** one concern, one branch, one prompt.
- **Do not rule a number that can be derived in the prompt.** (R9, and it is the most
  expensive lesson in the rebuild.) R9 took **nine passes, five of which corrected chat's
  own rulings** rather than Claude Code's work: a foot close that applied R6.3's surplus rule
  to the inverse condition and manufactured a 347px void; a reserved line-break point that
  measurement had already ruled out; a `<br>` that would have forced breaks at five widths
  where the string fit; and a three-line lede cap set against a window nobody had measured,
  which then collided with this file's own 3× lede-to-body minimum; and (R9.5) a **≤2-line
  pass condition** that measurement then proved unreachable in *any* window at the narrowest
  beside width — 1139.86px required against 1127px of sheet, 12.86px short of possible.
  **Every one was chat asserting a value in a project whose first principle is that measured
  values are ground truth.** The R9.5 case is the clearest: the constant the pass deleted
  (`--chg-lede-k`, 42.3942) was **correct to four decimals** and was solving the wrong
  problem. A right number against a wrong constraint still fails. State the constraint and the pass/fail; make Claude Code measure it and report the
  number back.
- **When two requirements conflict, the prompt says stop and report — it does not let either
  be arbitrated silently.** (R9.4.) Claude Code's reports have been reliable: it found the
  1142–1211 wrapped-coda band, the R8.1 model riding 0.05px inside its window at every width
  above 1436, Chrome's `::details-content` auto-placement, and a `sizes` breakpoint still
  naming a crossover that had moved. **Trust the reports; check the rulings.**
- **A documented rule beats an improvised one.** (R9.4.) Where a constraint written in this
  file and a constraint invented in a prompt cannot both hold, the invented one yields —
  and the floor that let a sub-minimum value ship as a passing number gets deleted, not
  adjusted.
- **Serve:** the Astro dev server on **4321** (`npm run dev`), and `astro preview` on 4322
  for any `currentSrc` or build-time check. **`serve.mjs` cannot serve this project** — it is
  a static file server on port 3000 for a plain-HTML tree, and this line used to pair it with
  `localhost:4321`, which do not match each other (corrected R9). **Screenshot:**
  `node screenshot.mjs http://localhost:4321`. Never screenshot a `file:///` URL. Never start
  a second server instance.
- Minimum two screenshot rounds. Self-correction must be specific: *"lede is 64px, should be
  ~72px to match PillarPremier"*, not *"looks off."*
- **Static elements only in the screenshot loop.**
- **Then judge the full page shrunk down.** The question is not whether each section is
  correct in isolation but whether the scroll reads as a composition or as a stack. Two
  checks: can you tell the sections apart without reading them, and does the margin read as
  a column? If either fails, say so plainly rather than declaring the pass finished.
- Every build prompt reads the frontend-design skill at
  **`~/.claude/skills/frontend-design/SKILL.md`** — note: **not** under a `public/`
  subdirectory. Older prompt templates in this project give the wrong path. Every prompt
  confirms explicitly that `CLAUDE.md` and this file were opened.
