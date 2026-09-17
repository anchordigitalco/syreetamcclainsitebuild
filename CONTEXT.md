# CONTEXT.md — Dr. Syreeta McClain

Project-specific. Read alongside `CLAUDE.md` and `anchor-digital-standards.md`.
Written after the design direction was chosen from mockups, per standard workflow.

**Last updated:** September 9, 2026 — **all ten sections are built; R12 (folio marginalia),
R13 (Index hover) and R14 (Contact + footer on Obsidian) have shipped.** R13 ships too quiet
to see and is superseded by R13.1. **R14 shipped September 9 2026 — the page closes dark.**
**R15 shipped its type half only: the Everyday Legends opener now leaves the shared lede
pitch. Its photograph half was STOPPED and not built — see the R15 entry.** **The wipe-reveal ban is rescinded**
— see the entry-animation pattern under Motion vocabulary, which now governs all
scroll-driven motion. Post-launch motion is grouped into **Round A (R16 masthead + R17
Feature Quote scrub)** and **Round B (R18 texture)**; Round B is not scheduled until Round A
is reviewed. **R17 shipped its SCALE half September 9 2026 — the pivot now has a peak.
Its TRACKING half was STOPPED: "letter-spacing opens" conflicts with the standing
transform/opacity-only rule and needs a ruling, not a build. See the R17 entry.**
**`js-motion` and `screenshot.mjs`'s stripping of it are now page-level machinery that R18
depends on.**
**R16 shipped September 9 2026 — the page has a masthead, and Round A is complete and ready
for review on localhost. It introduced one new device behaviour that is not in any prior
entry and needs Jackson's eye: the bar does not print on the Obsidian spreads. That is
forced by measurement, not chosen — see the R16 entry — and it is the same rule Route 3
recommends for the folio.**

**ROUND A IS REVIEWED AND ACCEPTED. ROUND B RAN. R18 built three of its four mechanisms
and is NOT accepted — R18.1 is the correction pass and its prompt is written.** The lede
reveals read as no scroll behaviour and too faint, the plate frame draw fires on one plate
of five, and the Index row stagger is ruled in and stays. **Ghost numerals were STOPPED
and remain unruled.** Page-wide smooth scrolling is ruled in and rides along with R18.1.
See the R18 entry for what that round established that outlives its output.

**Three items are waiting on a Jackson ruling and none of them blocks R18.1:** the folio
over Contact (Route 3 recommended and now recommended twice), R17's tracking half, and R18's
ghost numerals.

**Original R12 note:** all ten sections built and R12 shipped. R10 + R10.1 shipped (Contact + footer, form rhythm), closing the
ten-`<h2>` structure at 10 of 10. R9 settled through R9.6, R8 through R8.2. **R11
(`/privacy`) SHIPPED September 16 2026 as PASS B, corrected by PASS B.1; see the PASS B
entry.** The height-spread check ran at R10 and is **rescinded as
specified** — see the Rhythm entry. **The R13 motion concept is now written** (see Motion
vocabulary); R13–R15 are post-launch and two of them are blocked on Jackson's ruling. Copy
rewrite approved, wireframe approved (Variant A), photo placement approved.
**The page is being rebuilt from the wireframe in vertical slices.** Do not write another
composition pass against the old build.

**Copy now lives in `COPY.md`.** This file governs design, layout, and build. Copy
passes read `COPY.md`; layout passes do not need it. Do not duplicate copy here.

> **This file and `COPY.md` are now tracked in git.** Untracked as of September 1 2026;
> both committed to `main` and pushed to `github.com/jbleecker21/syreetamcclainsitebuild`
> on September 8 2026. Keep committing changes to this file going forward.

---

## ⚠️ Launch clock

**KNOW Women gala: October 6, 2026.** Roughly three and a half weeks out. The printed spread
lists her URL; print copies are already circulating.

**Repo state, September 11 2026.** `HEAD` sat at R14/R15 while **R16, R17, R18, R18.1, R18.2
and R19 all existed only in the working tree**, along with the rebuilt harness. Six rounds of
accepted work with no git history behind it, found while measuring for R18.3. **Committed
September 11 2026, not pushed.** The standing rule stands and is now underlined: **measure the
working tree, never `HEAD`** — and commit, because for three rounds running the file was behind
the tree and nobody could tell which.

**Active blockers — none of these are code tasks except G and H:**

1. **Domain control unresolved.** Nobody has confirmed who owns/controls the DNS.
2. **Privacy policy — BUILT September 16 2026 (PASS B + PASS B.1), not yet publishable.**
   `/privacy` returns 200 and the footer link reaches it. **The remaining gate is the TEST
   sitekey**: the page describes Turnstile protecting the form, so it MUST NOT go live while
   the test key ships. `PRIVACY.md` was also revised after the build and the page is short by
   three sections until **C-PRIV** runs.
3. **Meta / Open Graph / favicon not built (Phase H).** Deferred by Jackson, but print
   is driving traffic and people will share the URL. With no OG image, every share
   renders as a blank card. **Reconsider the deferral.**
4. **KNOW Women reuse rights — RESOLVED September 7 2026, and the answer is no.** The
   client confirmed that nothing from the magazine may be used until it publishes, the
   headshot they used included. **Nothing sourced from the magazine ships.** The Cover's
   credit line naming the honour is a statement of recognition rather than reuse of their
   content, and it stands. She has purchased additional frames from the same shoot for site
   use; chasing those files is deliberately not scheduled.
5. **OSU photo clearance** — unresolved. Interim rule in force (see Photography).
6. **Contact form inquiry options — RESOLVED September 7 2026.** The client reviewed the
   six `<select>` options Phase F shipped and changed none of them; they ship as written.
   She answered the routing question: **Everyday Legends Foundation inquiries go to
   `info@everydaylegend.com`, all five other options to `mcclain@premierleadersllc.com`.**
   Routing by field value is a Formspree account setting. It is not page copy and not a
   build slice. See item 7.
7. **Formspree free tier is 50 submissions/month.** Price a paid tier before the gala.
   Confirm at signup that CAPTCHA is on the free plan. **Also confirm conditional routing by
   `<select>` value**, which item 6 now requires. If it is gated behind a paid tier, that
   settles the tier question by itself.
7b. **The build ships Cloudflare's TEST sitekey and TEST secret.** The widget renders
   *"For testing only. If seen, report to site owner"* in red on the live page, and the
   form's endpoint is still `formspree.io/f/your_form_id`. **Swap both to live credentials
   and re-verify the four states against the real endpoint.** Not a build slice — a launch
   task, and the most visible one on this list. Never mix a test sitekey with a live secret.
8. **Pillars wording — RESOLVED September 7 2026.** The client ruled **"education, sports,
   and community,"** reversing the earlier decision for "education, athletics, and service."
   In shipping copy the triad appears in exactly one place, **Index entry 02**. Carried by
   C1. See `COPY.md`.
9. **Four pieces of Claude-written copy are shipping unsigned.** R19 added a fourth on
   September 11 2026: the masthead disclosure label **`Contents`**, which is not in `COPY.md`
   and has never been judged. The other three are the Athletic caption
   `THREE SONS, THREE PROGRAMS` (which also wants two characters out; it is the binding
   crossover constraint at 1.54px / 0.65%), the Index lede `Where the work continues.`, and
   **the Everyday Legends opening statement `Recognition rarely finds the people who earn it
   most.`** The third was written September 11 2026 to replace a line the client asked to
   lose, and Jackson approved it the same day. The first two are not in `COPY.md`; the third
   is, and is flagged there. **The first two still need Jackson's sign-off before launch.**
   *(R9's `OFF THE CLOCK` caption was a fourth; it no longer ships. See Photography.)*
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

Resolved and no longer blocking: contact recipient (**now `mcclain@premierleadersllc.com`**,
client decision September 7 2026, superseding `premierleadersllc@gmail.com`; the mailbox must
be confirmed to receive mail before it ships), Turnstile provider (Formspree), inquiry options
and their routing, pillars wording, KNOW Women reuse. Refund status with the prior designer must not be allowed
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

> ⚠️ **THE FOLIO IS NEARLY INVISIBLE OVER CONTACT SINCE R14. Introduced September 9 2026,
> measured, and deliberately NOT fixed in that round.** The folio is Smoked Slate at opacity
> 0.75 and Contact is now Obsidian. Measured composite against each ground it crosses:
>
> | Over | Label | Ratio |
> |---|---|---|
> | Porcelain (About) | `01 About` | **4.08:1** |
> | The pivot | *(none — correctly quiet)* | n/a |
> | **Contact** | `08 Contact` | **1.56:1** |
>
> A 2.6× loss. It is `aria-hidden` and decorative, so this is a composition defect and not an
> accessibility one, and it only exists in band 1 — the folio hides below 1280.
>
> **Why R14 did not fix it.** All three available routes were outside that round's explicit
> scope, which forbade motion, animation and JavaScript work: (1) have R12's existing listener
> set a ground flag — one line, no second listener, but it is a JS change; (2) CSS
> scroll-driven `animation-timeline` — the Motion vocabulary's preferred mechanism, but it is
> animation; (3) **remove Contact's entry from `sections.ts` so the folio goes quiet on both
> Obsidian grounds, exactly as it already does over the pivot.**
>
> **Route 3 is the recommendation and it needs a ruling, not a build.** It is pure data, costs
> no motion and no listener, and it is symmetric: the folio would label the Porcelain spreads
> and go quiet on the dark ones, which is a rule rather than an exception. It is also
> precedented — removing the Cover's entry from `sections.ts` was Jackson's ruling in R7, on
> the same reasoning that a folio should not print where the composition says be quiet. It
> costs the page its only "you are at the end" marker, which is the trade to weigh.

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
- **OVERRIDDEN FOR ABOUT ONLY, by Jackson's ruling of September 16 2026.** `.about-body`
  carries `max-width: 39.4118em` (670px). **No span solves band 1**: there is no breakpoint
  above 1280, so one span must hold 1280 through 1920, and six columns gives 98 characters at
  1920, five gives 82, and four drops 1280 to about 43 — under the 45-character floor. A span
  that fixed 1920 would need a new breakpoint. **The ancestor rule is untouched and is a
  different rule**: this is a leaf text block, and a `max-width` on it collapses no placement.
  The exception is About's alone and does not generalise; **the next section to hit this comes
  back for its own ruling.**
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
- **CORRECTED September 16 2026: "enforced" was aspirational above 1440, and nothing enforces
  it.** The 78 figure was derived at 1279 and the band is fluid with no ceiling, so the measure
  keeps growing with the viewport. Measured on the built tree: **About's body runs about 98
  characters at 1920**, 25% over the stated maximum, and the overrun is what collapses its
  paragraph 1 to two lines and breaks the drop cap (see the drop-cap rule). **Band 1 needs an
  actual cap, not a stated one.** Pass A builds it for About. **MEASURED September 16 2026 by Pass A, and they all overrun:** Educational Leader **84**,
  Premier Leadership **83**, Everyday Legends **80**, Athletic Management **85**, and
  **Charging It to the Game 102** characters at 1920. Index and Contact carry no body
  paragraph to measure. **The ceiling is a page-wide slice and it is not scheduled.** Pass A
  fixed About only, by ruling, and reported the rest without touching it.
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

> **The pivot is no longer the page's only Obsidian ground (R14, ruled September 8 2026).**
> Contact also takes Obsidian, giving the page a Porcelain / Obsidian / Porcelain / Obsidian
> spine that closes dark. The pivot remains the page's **single structural pivot** — that
> status rests on the pull quote, the full-bleed type scale and the folio going quiet, not
> on ground colour exclusivity. **Do not "restore consistency" by reverting Contact to
> Porcelain, and do not add a third Obsidian ground.**


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

### The motion budget — superseded September 9 2026

**This section previously read "three things, total," ending in "Nothing else." That was
written before the wipe-reveal ban was rescinded and before Round A was ruled in, and it is
now contradicted by this file's own R16, R17 and R18 entries.** Recorded rather than deleted
because the reasoning behind the original ceiling still governs what is allowed to join it.

**The scroll budget is one listener, and R12 owns it.** This has not changed and is the
constraint that matters most. Anything new either reuses the folio's listener or uses CSS
scroll-driven animation (`animation-timeline: view()` / `scroll()`). **A second scroll
listener MUST NOT be added.**

The budget as it now stands:

1. **The folio (R12).** The page's only JS scroll listener, and its entire scroll budget. It
   already carries the numeral and the section name, so section identity is solved the
   moment R12 mounts — it does not need inventing.
2. **Hover on the Index rows (R13, widened at R13.1).** Pointer-driven, not scroll-driven.
3. **Round A — R16 masthead and R17 Feature Quote scrub.** Both scroll-position-driven, both
   CSS. See the build-order table.
4. **Round B — R18 texture.** Four entry animations tuned against each other in one pass.
   **Not scheduled until Round A is reviewed on localhost, and possibly not needed at all.**
5. **Nothing else without a ruling recorded in this file.** The ceiling is gone; the
   requirement that each addition be derived and written down is not.

Every item in 3 and 4 is conditional on **the entry-animation pattern** below: the finished
state is the CSS default and JS applies the animated state on load. That pattern is the
condition on which scroll-driven motion is permitted at all.

The folio hides below 1280px. **Below 1280 the page has no motion at all, and that is
correct** — a phone is a single stacked column of a printed object, not a reduced version
of a moving one. Do not compensate with mobile-only effects. This applies to Round A and
Round B exactly as it applied to R12 and R13.

### Rejected in concept — do not re-propose

Four mechanisms were considered and fail rules already in this file. Recorded so the same
ideas do not arrive again wearing different names.

- ~~**Clip-path or wipe reveals on entering type.**~~ **RESCINDED September 8 2026.** This
  was rejected on the grounds that clipped content is invisible to screenshot capture and to
  any client PDF. That failure is real but it is avoidable, and the rejection was lazy:
  **the animated state is applied by JS on load, not authored as the CSS default.** Anything
  without JS — screenshot capture, PDF generation, a failed script — renders the finished
  page. This is now the **standard pattern for all entry animation on this page**, and it is
  the condition on which the fade-up ban itself rests. Fade-up as originally banned put
  `opacity: 0` in the stylesheet; that stays banned. The pattern below does not.
- **Paginated or coverflow Index.** The five destinations read at once by design. Paging
  them is strictly worse and breaks R8's numeral-to-lede-edge composition.
- **Cycling the Cover role line.** "Educator · Consultant · Momager · Founder" animated in
  place asserts the roles are sequential. About closes on "Different rooms. One
  through-line." The mechanism argues against the copy.
- **Hover-preview imagery on the Index rows.** No photography exists for Premier
  Leadership, Everyday Legends or the blog, and OSU clearance is still open for the
  brothers. It would ship as empty frames.
- **Magnifying icon dock (macOS-style), proposed September 8 2026.** Wrong register — a toy
  metaphor, and it would be the only playful object on an editorial spread for a school
  principal and consultant. It also has no assets: there is no icon system and no brand mark
  for Premier Leadership or the foundation, so it would require inventing five pieces of
  visual identity to fill it. **The masthead instinct behind it is correct and survives as
  R16.**

**21st.dev component library — evaluated September 9 2026, five taken, six rejected.** The
library was brought in specifically to source motion mechanisms rather than styling; in
every case what is adopted is the mechanism, and the visual treatment is re-derived from
this file. Recorded so the same components do not arrive again under different names.

*Adopted, all pending their own rounds:*

- **`text-reveal`, line mode only.** Cover entry and the section lede reveals (R18). **`per`
  MUST be `line`, never `word` or `char`** — character splitting drops kerning across span
  boundaries, the exact cost R13 measured and paid for. Line mode has none.
- **The clip-wipe from `parallax-scroll-feature-section`.** Photograph reveals (R18).
  **Rewritten, not copied** — the source calls React hooks inside a loop and will not run.
  The wipe MUST sit on a sibling overlay, never on the blended image or any ancestor
  containing it.

*Rejected:*

- **`story-scroll` (GSAP `FlowArt`).** Pins every section to `100vh`, which flattens the
  5:1 word-budget spread that the composition depends on being visible as section height.
  It also registers its own ScrollTrigger against R12's monopoly, and it rotates a wrapper
  containing the photographs — a transform on that ancestor promotes the layer and
  `mix-blend-mode: multiply` silently stops blending. Fails three rules at once.
- **`wave-text`.** Per-letter hover stagger, superficially R13.1. Rejected because the
  shipped native implementation already does more: center-out stagger, all four Fraunces
  axes enumerated at both ends, the numeral counterweight, and the hairline as an inset
  `box-shadow` contributing no layout. The source also applies `scale: 1.2` and `y: -4`,
  both of which would break the 0.00px row-height and left-edge results. **Adopting it
  would be a downgrade.**
- **`circle-menu`.** Icons radiating from a trigger button. Same rejection as the
  magnifying icon dock above, for the same two reasons: wrong register, and it needs five
  brand marks that do not exist.
- **`liquid-morph-floating-menu`.** A yellow pill fixed over the composition that expands
  into a dark panel. The pill and the morph are the whole idea; strip them and nothing
  remains. **The letter-roll mechanism inside it — each character flipping to a duplicate
  beneath it on a staggered per-letter delay, pure CSS, no framer-motion — was held as a
  candidate for the masthead name and is now RETIRED (September 9 2026).** R16 measured the
  case against it: the name is 26.66px in a 56px bar, which is motion at a size nobody
  reads it at. It is not a candidate for the Index rows either — R13.1's native
  implementation owns that interaction and does more. **Do not re-propose.**
- **`navigation-menu-05` and `navigation-menu-4`.** Horizontal nav bars, the second with
  dropdowns, a mobile popover and sign-in buttons. Both are chrome for a multi-page site.
  The hub is one scroll and the Index section already does the navigating.

**The pattern in all six rejections:** every nav component in the library assumes multiple
pages. R16 is a thin bar carrying one name and one jump link.

> **NARROWED September 10 2026.** The sentence that stood here read *"anything with a
> dropdown is wrong by construction."* That was too broad, and it would have rejected R19 on
> a word rather than on a reason. What is wrong by construction is a **nav menu**: a
> component that assumes routes, carries sign-in, and duplicates navigation this site does
> not have. A **section jump list** is a different object — it addresses anchors that already
> exist inside one document, and it is the Index's own function moved into the running head.
> **Ruled in as R19.** The six rejected components stay rejected as components; none of them
> is the source for R19, and the `dropdown-menu` component evaluated on September 10 is
> rejected with them — it animates `filter: blur()` and `backgroundColor`, imports
> `framer-motion`, and needs `lucide-react` for a chevron on a page carrying no icons.

### R13 — Index row hover — RULED IN, September 8 2026

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

**Jackson's ruling: route 1.** A scoped exception to the transform/opacity rule for
`font-variation-settings`, on Index entry names only, **conditional on a measured pass** —
entry-name right-edge travel, `+` affordance position, and row height, captured at rest and
at full weight, at all thirteen widths, with zero row-height change and no collision with
the `+`. The exception is written into Standing Rules.

**The condition is not a formality.** If the measurement fails at any width, the hover is
removed and the Index stays inert. It is not rescued with a tuned constant, and the
exception does not extend to any other element or property.

**If it ships:** every Fraunces axis must be enumerated at both ends of the transition, per
the permanent Fraunces gotcha. A transition that names only `wght` will silently ship
`SOFT` 100 and `WONK` on at the hovered end.

### R14 — Contact on Obsidian — RULED IN, September 8 2026

**Proposal.** Contact takes an Obsidian ground, giving the page a spine: Porcelain through
the four pillars, Obsidian at the pivot, Porcelain through Index and blog, Obsidian at the
close.

**The case for.** The Feature Quote is currently the only dark ground on the page, which
makes it read as an isolated slab rather than as a structural turn. A bookend at the close
makes the pivot the first of a pair and gives the scroll a shape the eye can hold.

**The case against, which is this file's own.** "Porcelain dominant, Obsidian type"; the
pivot is described as the page's **single** structural pivot; and a second full-bleed dark
ground is exactly the kind of thing that dilutes a device the page spent R7 establishing.

**Jackson's ruling: in.** The page closes dark. The pivot keeps its status on type scale,
the pull quote and the quiet folio, not on being the only dark ground — see the note under
Feature Quote.

**Four things are not optional:**

- The submit button is `.btn-solid` on Porcelain. On Obsidian it inverts, and the verified
  Phase F property must be re-verified, not assumed to carry.
- **The focus ring's 12.9:1 was measured against Porcelain.** It must be re-derived on
  Obsidian against the 3:1 floor. This is the exact defect R10 caught with the gold ring at
  2.4:1; do not reintroduce it by porting a number.
- Gold becomes legal on this ground (5.76:1). **It must still not be spent here.** The gold
  budget is pinned and the pivot's "Legacy" is the third and last saturated accent.
- **The footer joins the Obsidian ground.** Derived, not optional: Contact full-bleed dark
  with a Porcelain footer below it closes the page on a thin light sliver, which reads as an
  accident rather than a composition. Every footer element must be re-verified on Obsidian —
  copyright text, the privacy link, and **Anchor Digital's mark**, which is an SVG built for
  a light ground and will need its fill re-derived rather than left to inherit.

> **SHIPPED September 9 2026. All four are done and all four numbers are measured on the
> rasterised page, not modelled** — the page carries a fixed grain sheet at
> `mix-blend-mode: multiply` 0.42 over every ground, so nominal hex is not what a viewer
> sees. The harness was validated first by reproducing this file's own documented 12.9:1
> for Obsidian-on-Porcelain (it measured 12.95:1).
>
> **The ink system is a MIRROR OF THE HIERARCHY, not of the hue.** Smoked Slate on Obsidian
> is 1.60:1 — it is not a quiet colour there, it is an absence. On Porcelain the page runs
> primary at 13.97:1 and quiet at 7.53:1, a factor of 1.855; the dark ground reproduces that
> factor with Porcelain at reduced alpha. Four tiers, declared once in `.on-obsidian`:
>
> | Token | Value | Measured | Carries |
> |---|---|---|---|
> | `--ink` | Porcelain | **13.97:1** | lede, links, field text, status heads |
> | `--a-quiet` | Porcelain @ 0.71 | **7.52:1** | kickers, field labels, copyright |
> | `--a-faint` | Porcelain @ 0.53 | **4.73:1** | direct-address label, agency credit |
> | `--rule-ui` | Porcelain @ 0.42 | **3.44:1** | field underlines, link underlines, error bar |
> | `--rule-hair` | Porcelain @ 0.22 | **1.83:1** | head rule, footer rule (decorative) |
>
> **ONE ALPHA PER ELEMENT, NEVER TWO STACKED.** The light ground reached its knock-downs by
> putting an opacity on an already-reduced colour — R8.2's two-swept-values shape arriving
> through alpha. Each tier here is one opacity over full Porcelain, which also leaves
> `opacity` free to carry the hover states (this file allows transform and opacity only, so a
> `color` transition is not available).
>
> **`--rule-hair` landed on the existing `--hair-light` token independently.** Mirroring the
> light ground's hairline (Slate @ 0.38, rendered 1.86:1) asks for Porcelain @ 0.235; the
> token already in `:root` for dark grounds is Porcelain @ 0.22 at 1.83:1. 0.03 apart, inside
> the jitter, so no sixth value was invented.
>
> **THE FOCUS RING: 13.97:1 nominal, 13.43–13.58:1 measured, against the 3:1 floor of WCAG
> 2.1 SC 1.4.11.** Measured by focusing each control and scanning the outline band for the
> extremum, not by compositing a declared colour. The ring sits at `outline-offset` 4–6px, so
> what it is measured against is the **Obsidian ground showing through the offset gap**, not
> the control's fill. Three candidates were measured: Porcelain 13.97:1, gold 5.76:1, Smoked
> Slate **1.60:1** — and Slate is what a thoughtless port of "the page's secondary ink" would
> have shipped. The 12.9:1 figure was not carried across.
>
> **`.btn-solid` inverts, and the global primitive is untouched.** Porcelain fill, Obsidian
> type, in one rule scoped under `.on-obsidian`, so the Cover's, Premier's and Everyday
> Legends' buttons cannot see it. The verified Phase F property is "Obsidian, solid, never
> ghost, never outline, never gold" — three of the four are colour-free and carry unchanged;
> the fourth said Obsidian because Obsidian was the high-contrast pole *against the ground
> the button sat on*, and on this ground that pole is Porcelain. Type-against-fill is 13.97:1
> either way. Zero `box-shadow` on the page, still.
>
> **GOLD: 3 of 3 saturated accents, 0 of 8 hairline contexts. R14 spends zero from both**,
> re-measured on both bases as this file requires. Gold is legal here at 5.76:1 and is still
> not spent — and at 5.76:1 against Porcelain's 13.97:1 it was also the weaker of the two
> passing options for the ring, so the budget and the measurement agree.
>
> **The Anchor mark's fill is re-derived and the mechanism is still `currentColor`.** The
> `<svg>` root keeps `fill="currentColor"` and nothing overrides fill or colour on the mark,
> per the brand-asset rule; the VALUE it resolves to is chosen and measured in `.foot-credit`.
> Rendered fill sampled directly off the raster: **#86817D at 4.68:1**, box 27.59 × 14.00px,
> aspect **1.9710** against the viewBox's 1.9712.
>
> **Two PRE-EXISTING failures were found by the re-derivation and are fixed rather than
> ported.** Both had been live since Phase F and neither is caused by this round:
> - **The field underlines measured 1.89:1 on Porcelain** (`--hair-strong`). These controls
>   have no border box and no fill, so the underline is the only thing identifying the
>   control — a user-interface component under 1.4.11, under the same 3:1 floor as the ring.
>   Now `--rule-ui` at 3.44:1. Mirroring the light ground here would have carried the defect.
> - **The agency credit measured 3.21:1 on Porcelain** (Slate @ 0.65) against 4.5:1 for 10px
>   text, and the mark shared that value through `currentColor`. Now 4.73:1.
>
> **The `<select>` chevron was a hardcoded `%231A1613` inside a data URI**, where no token
> reaches it and no cascade would have caught it. On this ground it does not dim, it
> disappears, taking the only affordance that says the control is a dropdown. Re-derived to
> `%23E7E2DD`, 13.97:1.
>
> **Turnstile renders `theme: 'dark'`.** A render option matching its ground; none of the
> twelve verified Phase F behaviours changes. Left at `'light'` it is a 300 × 65 white slab
> and the single brightest object on the page's closing section.
>
> **The seam is 0.00px and the ground is continuous.** Contact's bottom and the footer's top
> are coincident to the hundredth; sampled at the boundary row, the only non-Obsidian pixel
> is the footer's own hairline rule, which is where it belongs. Obsidian runs to the page's
> last pixel — no light sliver.
>
> **ALL TWELVE PHASE F BEHAVIOURS RE-VERIFIED** on the new ground, by method not assertion:
> underline-only inputs (borders 0/0/0/1px, radius 0, transparent fill), four real visible
> `<label>`s, 16px minimum on all three controls, native `<select>` with the six unconfirmed
> options unreordered, honeypot off-screen with `tabindex="-1"` and `aria-hidden` — **filled
> `_gotcha` sent 0 requests** — **0 main-frame navigations**, status region `role="status"` /
> `aria-live="polite"` / hidden at rest / outside the form / unconditionally last, one privacy
> link on the page and zero in the contact column, and zero `box-shadow` anywhere.
>
> **Nine of ten sections and the footer measured 0.00px height delta at all thirteen widths.**
> Only Everyday Legends moves, which is R15's scope. All 143 section × width left-edge sets
> are byte-identical.

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

> **SHIPPED IN PART, September 9 2026. The type half is built. The photograph half was
> STOPPED and is not built.**
>
> **THE STOP, stated rather than arbitrated.** The R15 build prompt required "the photograph
> MUST break the column — full bleed, or past the established right edge." **Everyday Legends
> has no photograph, by design, and four rules in this file forbid giving it one:**
>
> 1. The Section Composition table's row reads **Image: none**, and the Image budget check
>    names Everyday Legends as one of the five sections that carry no photograph.
> 2. `bleed-left` is **"Exactly one — Athletic Management. This is the page's single spread
>    moment and the only place the page gutter is broken."** A full bleed here spends a tier
>    the Image tiers table allocates to exactly one section.
> 3. **"Photography does not sit in adjacent sections."** Everyday Legends sits between
>    Premier (which carries `portrait-seated.jpg`) and Athletic (which carries two). A
>    photograph here puts photography in three consecutive sections.
> 4. **"All client photography is vertical... Any request for a full-width horizontal band
>    must be refused at spec time, not solved by cropping a portrait."** The only unplaced
>    frame is `mcclain-field.jpg`, which is Held and was already rejected for precisely this
>    use — proposed as a full-width band and refused because it needs a horizontal crop of a
>    vertical image.
>
> Per this file's own Workflow rule — *"Where a constraint written in this file and a
> constraint invented in a prompt cannot both hold, the invented one yields"* — the
> photograph requirement yields. **Nothing was substituted for it and no image was placed.**
> Reopening it is a ruling for Jackson, and it needs a photograph that does not exist yet.
>
> **THE TYPE HALF, as built.** The diagnosis measured worse than the prompt stated: **eight**
> ledes at one pitch, not seven — about, edu, prem, legends, ath, idx, chg and contact all
> render **54.72px to the hundredth** at 1440.
>
> **The ratio is derived, not picked.** The page has exactly one measured display-tier step:
> R7's own **2.053×** pivot-to-lede at 1440. Between lede and pivot there was nothing — one
> 2.05× hole with no rung in it. The opener is that rung, at the **geometric mean** of the two
> tiers, so the ladder runs lede → opener → pivot in two equal steps of **√2.053 = 1.4329**.
> That single constant carries both terms: the ceiling multiplies the lede by it, the target
> divides the pivot by it. There is no second value to sweep.
>
> **The pivot cap is load-bearing, not a guard**, because R7's operative test is "exceed every
> lede." The pivot's clamp collapses far faster than the lede's (7.8vw vs 3.8vw, floors 44 vs
> 52), so below ~955 the target term falls under the lede's own floor and the clamp's minimum
> takes over — **the opener converges to exactly `--lede-size` and this section's type
> differentiation goes quiet**, as the folio, the 12-column grid and the live margin's
> three-column width all already do below the desktop bands. Without that minimum term,
> quote/1.4329 at 800 is 43.55px against a 52px lede: the section meant to break the sameness
> would set *smaller* than the seven it was breaking from.
>
> | vw | lede | opener | ×lede | pivot ÷ opener |
> |---|---|---|---|---|
> | 1920 | 64.00 | 89.33 | 1.396 | 1.433 |
> | 1440 | 54.72 | 78.39 | **1.433** | 1.433 |
> | 1280 | 52.00 | 69.68 | 1.340 | 1.433 |
> | 1024 | 52.00 | 55.74 | 1.072 | 1.433 |
> | ≤901 | 52.00 | 52.00 | 1.000 | floor engaged |
>
> **`--quote-size` is now a token and `FeatureQuote.astro` consumes it.** R4/R5's precedent
> for `--lede-size` left the inline declaration in place beside the token; that precedent
> predates R8.2, and R8.2 governs here — the opener must stay in proportion to the pivot, and
> two clamps floating on two schedules is exactly the shape that shipped the Index numeral
> holding its ratio at 1440 and losing it at 1024. **R7's value, face, axes, flat ground and
> absent quotation marks are all untouched; only the place the number is written moved.**
> Verified: pivot font-size and section height byte-identical at all thirteen widths.
>
> **The lede window moved 4–9 → 4–11, and it is not a new window.** At the larger size the
> opener set **five lines** at 1440, 1280 and 1279 — R9.5's documented failure exactly, "a
> paragraph set large, not an opening statement." Four candidate windows were measured at six
> widths. **4 / 12 is `.win-edu-lede`'s, byte-for-byte:** Educational Leader's lede already
> holds it in bands 1 and 2 with its own margin at 10–12, and R3 records that overrun as
> established — both sections seat their margin by document order, so it costs nothing in
> either. Line count is now 3–4, matching every other lede. **The left edge did not move**;
> only the right edge travels, which is the axis this file nominates for differentiation.
>
> **The mark tracks the opener, and the optical correction survives by construction.** The
> spec is "1.6 × the lede," and the lede this mark opens is no longer `--lede-size`. Left
> pointing at the shared token it would have sat at 87.5px of ink beside a 78.4px lede —
> 1.12× a lede capital, which is that rule's own stated fail condition. The mark stays
> **3.2720×** whatever it opens, and the correction is written in `em` of the mark, so the
> type size cancels out of the arithmetic entirely. **Re-measured: mark ink centre 195.49
> against lede cap centre 195.74 at 1440 — 0.25px.**
>
> **The three left edges hold.** All **143** section × width edge sets are byte-identical
> before and after — Legends included. It still runs mark at column 1, type at column 4,
> margin at column 10. Nine of ten sections and the footer moved **0.00px** at every width.
>
> **Reported, not steered:** lede-to-body in this section is now **4.61× at 1440 and 5.25× at
> 1920**, outside this file's stated 3–4× *target* though far above its 3× *minimum*. A
> section deliberately leaving the shared tier cannot also sit inside the band that describes
> it. Section height rose 749.69 → 882.36 at 1440; **no copy was added** and the section is
> still abridged. Height spread is unchanged at 1920 and 1440 (2.58:1 and 1.87:1 including the
> pivot) and moves 1.48 → 1.43 at 1280 only because Legends is no longer the shortest section
> there.

### The entry-animation pattern (required for all scroll-driven motion)

Ruled September 8 2026, on rescinding the wipe-reveal ban.

**The finished state is the CSS default. JavaScript applies the animated state on load.**
Never the reverse. A stylesheet that ships `opacity: 0` or a closed `clip-path` as the
resting value fails, because screenshot capture, client-generated PDFs, and any session
where the script does not run will render an empty page.

Concretely: the element is fully visible and correctly placed in CSS. A script adds a class
(e.g. `js-motion`) to `<html>` on load; the animation rules are scoped under that class.
No class, no animation, finished page.

This pattern is the condition on which scroll-driven motion is permitted at all. It does
not reopen fade-up-on-scroll as originally banned, and it does not permit a second scroll
listener — CSS scroll-driven animation (`animation-timeline: view()`) is preferred, and
where a listener is genuinely required it MUST reuse R12's.

**Parallax remains banned on photographs**, for the original reason: a `transform` promotes
the image to its own layer and the `mix-blend-mode: multiply` treatment silently stops
blending. **On type it is permitted** — that failure mode does not apply.

### R16 — the masthead — SHIPPED September 9 2026

**Round A, second half.** The page has a running head. What follows is the derivation, the
mechanism, and the one behaviour that is new to this file.

#### The route, and why it is not the listener

**CSS scroll-driven animation. No listener, and no second listener.** The motion budget
offers two mechanisms and names this one preferred, reserving R12's listener for "where a
listener is genuinely required." It is not required here, and the deciding reason is not
that CSS is tidier — it is that **a listener cannot express this without a constant.** A
listener needs two comparisons and, to stop the bar chattering at the boundary, a
hysteresis value. A view-timeline range is read in both directions, so **the arrival and
the withdrawal are the same boundary and cannot drift apart.** There is no withdraw
threshold in this build; there is a range, and the withdraw threshold is its mirror.

Verified: exactly **one** `addEventListener('scroll')` in `src/` and one in `dist/` —
R12's folio, byte-identical. Zero `IntersectionObserver`, zero `transition-all`, zero
`opacity: 0` resting states.

#### The two derived quantities

**The height is `2 x --baseline` = 56px, and the multiple is forced.** `--baseline` is the
page's own unit and this file's rule for it is that margin content sits on multiples of it;
a running head is margin content by definition. The bar must hold the name's ink, which at
its largest — 32.00px, from 1684 up where `--lede-size` ceilings — is
`(0.9775 + 0.2550) x 32 = 39.44px` on R9.6's closed face metrics. One baseline is 28px and
does not contain it. Two is the smallest that does. There is no third band and nothing to
sweep.

**The name is `--lede-size x --pivot-scrub-from`, which is R7's step taken downward.** The
page has exactly one measured display-tier step. R15 took its square root upward. R17 takes
the whole step upward. R16 takes the same whole step **down**, using R17's own token rather
than a second copy of the ratio, so the ladder is one relationship applied three times:

| Tier | Against the lede | At 1440 |
|---|---|---|
| Pivot (R7) | x 2.053 | 112.32px |
| Everyday Legends opener (R15) | x 1.4329 | 78.40px |
| **LEDE** | x 1 | 54.72px |
| **Masthead name (R16)** | **/ 2.053** | **26.66px** |

Rendered, with the ratio to `--lede-size` stated as required: **0.5000 at 1920, 0.4872 at
1440, 0.5208 at 1280.** The name is never more than 52.1% of a lede and never less than
48.7% of one — one whole tier down, on the page's own ladder, at every width the bar
exists. That is the answer to "must not compete with any lede."

> **The token is meaningful in band 1 only, and this is written down because it inverts.**
> `--quote-size` rides 7.8vw against `--lede-size`'s 3.8vw, so below 1280 the ratio climbs —
> 0.651 at 1024, 0.833 at 800, **1.182 at 390**, where the "small" name would set larger
> than a lede. It costs nothing because the masthead does not render below 1280 and nothing
> else consumes the token. **Do not reuse it outside band 1 without a clamp.**

The name centres itself: `line-height: var(--mast-h)` puts the half-leading either side of
the ink, and the cap-to-baseline block lands **0.30px** off the bar's centre at 1440,
0.36px at 1920 — solved from the face, with no offset to go stale.

#### Contrast, and the one behaviour that is new

Measured on the rasterised page with the grain sheet, not modelled. The harness reproduced
Obsidian display type on Porcelain at **13.70:1** against this file's documented 12.9:1 —
**it reads about 6% high**, because it estimates the ground from the median of a clear
region rather than the grain's darkest pass. Every figure below is from that harness, so
they are all consistent with each other and all slightly optimistic against R14's numbers.

| Element | Size | Measured | Threshold | Where the threshold comes from |
|---|---|---|---|---|
| Name, on Porcelain | 26.66–32px | **15.01:1** | 3:1 | WCAG 2.1 SC 1.4.3, large text (>=24px). It also clears 4.5:1. |
| Jump link, on Porcelain | 10.5px | **6.86:1** | 4.5:1 | 1.4.3 normal text — the same floor R14 measured the agency credit against at 10px |
| Focus ring | — | **15.11:1** | 3:1 | SC 1.4.11, the floor R14 re-derived the ring against on Obsidian |
| Trim hairline | 1px | 1.41:1 | none | decorative, the family `--rule-hair` (1.83:1) and `--hair-light` (1.86:1) already sit in |
| **Name, on Obsidian** | — | **1.01:1** | 3:1 | **counterfactual — the bar does not print there** |

**THE BAR DOES NOT PRINT ON THE OBSIDIAN SPREADS, AND THAT IS FORCED BY MEASUREMENT.** A
fixed bar must occlude what scrolls under it or display type prints through a 27px name, so
it carries a ground; and a bar that crosses both grounds needs one ink that survives both.
**No such ink exists in the locked palette.** The best any single colour could do is
**3.72:1** against both, at relative luminance 0.167 — and no locked colour is near it.
Scored on the weaker of its two grounds:

| Ink | Relative luminance | vs Porcelain | vs Obsidian | **Worse of the two** |
|---|---|---|---|---|
| *(theoretical optimum)* | 0.167 | 3.72:1 | 3.72:1 | *3.72:1* |
| Antique Gold | 0.286 | 2.41:1 | 5.76:1 | **2.41:1** — best of the five, still fails |
| Smoked Slate | 0.057 | 7.53:1 | 1.84:1 | **1.84:1** (1.60:1 rasterised, R14) |
| Cashmere | 0.581 | 1.28:1 | 12.1:1 | **1.28:1** |
| Obsidian | 0.008 | 13.8:1 | 1.00:1 | **1.00:1** |
| Porcelain | 0.758 | 1.00:1 | 13.8:1 | **1.00:1** |

Not one clears 3:1 on both, and the one that comes closest is the one the gold budget
forbids spending. Colour is also not animatable here.

So the bar does on the dark spreads what the folio already does over the pivot: it goes
quiet. **The rule is "print on the Porcelain spreads, quiet on the Obsidian ones"** — which
is the rule **Route 3 recommends for the folio** in the Design Direction entry, arriving
independently from a different constraint. It withdraws by the same gesture and the same
56px of travel as the arrival, at the pivot's top trim and at Contact's, and returns at the
pivot's foot.

> **THIS IS NEW BEHAVIOUR AND IT NEEDS JACKSON'S EYE, NOT A RULING TO PROCEED.** It was not
> in the brief. It was built rather than reported because the alternative was shipping a
> **text link at 1.6:1**, which is a live WCAG 1.4.3 failure — unlike the folio's own defect,
> which is `aria-hidden` and decorative and which this file could therefore leave standing.
> **If Route 3 is ruled in for the folio, the two devices then obey one rule.** If Jackson
> would rather the bar crossed the dark spreads, the only routes are an opaque Obsidian band
> across every light spread (colour volume the direction forbids) or a second ink tier
> cross-faded on opacity (legal, more machinery).

#### Two measured failures found inside the round, fixed rather than shipped

- **A transform silently degrades `background-attachment: fixed`.** The bar paints the page
  ground so the band is invisible over Porcelain, and `fixed` attachment should have made it
  paint the identical pixels. It does not: a transformed element is a containing block for
  fixed descendants, and Chrome degrades the attachment to `scroll` inside one, so the
  positioning area became the bar's own 1440 x 56 box and the white radial's 78% radius
  resolved against 56px instead of 900. Measured in the right gutter, where no ink exists at
  any scroll position: **up to 16/255 darker at the bar's foot.** Fixed by declaring the
  positioning area — `background-size: 100% 100vh`, `background-position: left top` — which
  depends on no attachment behaviour at all. **Re-measured: 0/255 on every channel, grain on
  and grain off.** This is R1.1's lesson arriving through paint instead of blending: a
  transform on the element itself silently breaks a mechanism declared somewhere else.
- **`scroll-margin-top` landed the jump inside the pivot's withdrawal zone.** The reflex
  declaration put the reader 56px short of the Index's top — 56px back inside the Feature
  Quote, an Obsidian spread — so clicking the masthead's link made the masthead disappear.
  Measured: scrollY 5774 at 1440, bar bottom at viewport 0.00. **Removed.** The target now
  lands flush and the bar is at rest, with 52.6–53.9px of the Index's own 110px top padding
  as clearance. **That dependency is real:** if the Index's top padding ever falls below
  `--mast-h`, this needs a scroll margin again and the landing scroll needs re-checking
  against the pivot's withdrawal range at the same time.

#### The entry-animation pattern, verified by rendered state

The masthead's CSS default is **`display: none`** — the page exactly as R15 and R17 shipped
it. That is not the hidden resting state the fade-up ban forbids, and the distinction is
content: **the bar carries nothing that is not already on the page.** Her name is the
Cover's `<h1>`; the Index is a section with its own `<h2>`. The inverse would break the
brief outright — a bar whose default is "present" renders over the Cover at scroll 0 with
JavaScript off, and "must not appear over the Cover" is not conditional on a script running.

| Condition | Masthead | R17's `.legacy-scrub` |
|---|---|---|
| As shipped, scroll 0 | `display: flex`, `translateY(-56px)` — **0 rendered px** | 133.84px, the 0.4872 start state |
| **JavaScript disabled** | **`display: none`** ✓ | **274.72px, finished** ✓ |
| **`js-motion` stripped (screenshot.mjs)** | **`display: none`** ✓ | **274.72px, finished** ✓ |
| **`@supports` unsatisfiable** | **`display: none`** ✓ | **274.72px, finished** ✓ |
| **`prefers-reduced-motion: reduce`** | **`display: none`** ✓ | **274.72px, finished** ✓ |

Nine of ten sections and the footer are identical under every one of those conditions; the
tenth is Contact, 7px shorter with JavaScript off because Turnstile does not mount — a
pre-existing Phase F behaviour, not R16's.

#### What did not move

- **Page height, all ten section tops and heights, the footer, and 130 section x width
  left-edge sets: 0.000px at all thirteen widths.** The three left edges hold across all ten
  sections. The bar is `position: fixed`, never sticky, and reserves no layout space in
  either state.
- **Zero rendered pixels over the Cover**, measured at scroll = the Cover's last pixel, at
  1920, 1440 and 1280. The Cover's bottom and About's top are the same coordinate (720.000
  at every band-1 width), and the arrival's range starts at About's `exit 0%` — so the
  travel cannot begin until the Cover is gone. It is not a near miss; it is 0.00px by
  construction.
- **Gold: 3 of 3 saturated type accents, 0 of 8 hairline rule contexts.** Re-measured on
  both bases off the rendered page: Cover tagline "Legacy", About drop cap, pivot "Legacy" —
  the exact three this file names. The only gold fills are the five `.plate-img::before`
  treatment layers, which sit on neither basis per R7. **R16 spends zero.** The trim
  hairline is `--hair`, and R16 is that token's first consumer in the rebuild.
- **No photograph is inside a transform, and none moved.** The only transform R16 creates is
  on the bar, a sibling of `<main>` containing no image. Cover plate sampled with R16's
  declarations live and inert: **max channel delta 1/255 over 1720 samples, mean R−B
  identical at 11.65** — the multiply is live and unchanged. The five `.plate-img` wrappers
  still carry only their pre-existing `isolation: isolate`.
- **R17 is untouched.** `--pivot` is consumed via `timeline-scope` rather than duplicated,
  because a second `view-timeline-name` on `.quote` would replace R17's rather than join it.
  The scrub's start scale is **0.487179 at 1440**, and the h2's height is 343.64px, before
  and after.
- **Zero `box-shadow` introduced.** The built CSS's six hits are Tailwind's preflight
  variables, a `none`, a transition list, and R13.1's Index hairline.

#### The one thing deliberately not built

**No hover treatment, by instruction** — not the 21st.dev letter-roll, not anything, on
either element. `focus-visible` is built regardless: it is not a hover treatment, and a link
without a focus indicator fails SC 2.4.7 outright. **This does conflict with `CLAUDE.md`'s
"every clickable element needs hover, focus-visible, and active states. No exceptions."**
The brief is the later and more specific instruction and it wins, but the conflict is
recorded rather than silently resolved. **Recommendation: the bar wants one line of hover,
`opacity: 0.7` on the link with a 260ms transition, matching `.edu-link` minus its
translate.** The letter-roll is a different question and stays not ruled in — on a name that
sets at 26.66px in a 56px bar it would be motion nobody asked for at a size nobody reads it
at.

### R17 — the Feature Quote scrub — SCALE SHIPPED, TRACKING STOPPED

**Round A, September 9 2026.** The pivot now has a peak. What follows is the derivation,
the measurements, and the one half of the brief that was **not** built.

#### The scale, and where the number comes from

"Legacy" enters at the page's shared lede pitch and grows to the pivot's own pitch as the
band arrives. The start scale is **not a chosen number and not a swept one**:

```
--pivot-scrub-from: calc(var(--lede-size) / var(--quote-size));
```

It is the ratio between two tokens that already existed, resolved live at every width. In
words — the word enters at exactly the size every other lede on the page is set at, and
travels the page's whole display ladder in one move. R7 measured that ladder and recorded
one number for it, *"it exceeds every lede by 2.05×"*; R15 took the **square root** of that
same 2.053 to seat the Everyday Legends opener at the geometric mean. **R17 takes the whole
step.** There is no third constant, and nothing to re-sweep when either clamp moves.

| vw | `--lede-size` | `--quote-size` | start scale | travel |
|---|---|---|---|---|
| 1920 | 64.00 | 128.00 | 0.5000 | 2.000× |
| 1440 | 54.72 | 112.32 | **0.4872** | **2.053×** ← R7's own step |
| 1280 | 52.00 | 99.84 | 0.5208 | 1.920× |

The travel varies across the band because the two clamps floor and ceiling on different
schedules. **That is not drift.** At every width it is the page's own lede-to-pivot step
*at that width*, which is the quantity the move is about; freezing 0.487 would ship the
1440 measurement to 1920 and to 1280, which is the R8.2 failure exactly.

**The end scale is 1 and is deliberately not a token.** The finished state is the CSS
default, so the last keyframe is `transform: none` and the page at rest carries no
transform on the pivot at all.

**The word grows from its baseline, not from its box.** `--quote-baseline` solves the
origin out of `--quote-lh` and R9.6's closed face metrics — `(half-leading + asc) / lh`,
0.87125em of a 1.02em line box, 85.4167%. Measured origin at 1440: **97.842px against
97.855px predicted, 0.013px out.** Verified across the whole scrub: **the rendered baseline
Y and the left edge X do not move at any scrub position, at any width.**

> **AMENDED September 10 2026 — the start moves one further step down the same ladder.**
> Jackson's review of the shipped scrub: it reads correctly and **the travel is too short.**
> The correction MUST NOT introduce a constant, and it does not have to. The page has exactly
> one measured display-tier step and this file already applies it three times — R7 up, R15 at
> its square root, R16 down. **The corrected start takes it down twice: `--pivot-scrub-from`
> squared.** That seats the entering word at the **masthead-name tier**, the bottom rung of
> the page's own ladder, and makes the travel the full ladder end to end. No third constant,
> nothing to re-sweep when either clamp moves, and the same token drives all four tiers.
>
> **The end scale stays 1 and stays untokenised.** The finished state remains
> `transform: none`.
>
> **The known cost, accepted in advance.** A transform affects no layout, so the line box stays
> at the finished width the whole way and the empty run between `lens:` and the word is wider
> at a smaller start than it was at 0.487. That gap is the mechanism, not a defect, and it
> already existed. **Whether it reads as anticipation or as a hole is a screenshot judgement,
> not a measurement** — R18.1 captures 0%, 50% and 100% and Jackson rules on the images before
> the table.
>
> R18.1 measures and reports the start scale and total travel at all thirteen widths, and
> re-confirms R17's own result that the rendered baseline Y and left edge X do not move at any
> scrub position at any width. **Stop and report** if the squared start puts the rendered word
> below any legibility or contrast floor already in this file, or if the h2's height moves at
> any width.

#### The tracking half — STOPPED, NOT PICKED

The brief is *"'Legacy' grows **and its letter-spacing opens**."* The scale half is built.
**The tracking half is not, because every route to it fails against a rule already in this
file, and the round's instruction is to stop and report rather than arbitrate.**

The derivation itself is not the problem — it falls out of the same single relationship.
Holding the *rendered* inter-letter gap constant in absolute px while the glyphs grow gives

```
T_start = --quote-ls × (--quote-size / --lede-size)
```

i.e. **−0.028em opening from −0.05748em at 1440** (−0.0560em at 1920, −0.0538em at 1280):
the em tracking opens by exactly the scale ratio, one derivation driving both axes, zero
new constants. That is the number. What has no legal implementation is the *motion*:

| Route | Why it fails |
|---|---|
| Animate `letter-spacing` | **"Animate `transform` and `opacity` only."** The one exception is `font-variation-settings` on **Index entry names**, recorded as not extensible "to any other element, section, or property without a new ruling." `letter-spacing` changes glyph advance widths — the same layout-affecting objection R13 was ruled on. |
| Per-character `translateX` (transform-only, legal) | Requires splitting the word into six atomic inlines. **Measured: shaping loss of 1.34–4.36px across the thirteen widths** — the kerning goes. Restoring it needs a 5-pair × 13-width lookup, which is the hardcoded swept shape this file has deleted **four** times (`--p1-lines`, the R4.1 crossover, R6.3's lap, R8.2's numeral). It also moves R7's locked finished state. |
| `scaleX` on the word | Distorts the glyphs. R7 locks the face and the four axes. |
| A width/tracking font axis | Fraunces has none, and the R13 exception is Index-only. |

**This needs Jackson's ruling, not a build.** The cheapest route in is widening the R13
exception to cover `letter-spacing` on this one element — but R13's exception was made
*conditional on a measured pass* and explicitly non-extensible, so widening it is a new
ruling by construction. **The scale half stands on its own and does not depend on it.**

#### The mechanism, and the three gates

CSS scroll-driven animation on a **named view-timeline declared on the section**, consumed
by the word. `view()` on the word itself would run the whole scrub across 114px of scroll —
the height of one line box — which is a flinch, not a scrub. `entry 0%` → `entry 100%` is
the *section's own extent*, 605–643px in band 1, so **there is no duration, no distance and
no constant to tune**: the reader's scroll is the timing.

**No listener, and no second listener.** Verified: exactly **one** `addEventListener('scroll')`
in `src/` and one in `dist/` — R12's folio, unchanged. Zero `IntersectionObserver`, zero
`transition-all`, zero `opacity: 0` resting states (every grep hit for all three is a
comment forbidding them).

> **`.legacy-scrub` wraps the closing full stop, and this is not cosmetic.** A transform
> does not apply to a non-replaced inline box, so the scaled element must be an atomic
> inline — and scaling the `<em>` alone leaves the sentence's period at full size and full
> position while the word shrinks away from it, **a 132px gap at 1440 with a period floating
> on the end of it.** The span takes `Legacy` *and* the period. `.legacy` keeps the gold and
> is otherwise untouched; the h2's text content is character-for-character COPY.md's.
>
> **An atomic inline drops its trailing letter-spacing**, and `--quote-ls` is negative, so
> the box measured 1.34–3.88px wide and pushed the period right by the same amount.
> `margin-inline-end: var(--quote-ls)` puts it back — **a compensation declared against the
> very token it compensates for**, not a swept pixel. With it in place, h2 height, the
> period's right edge and "Legacy"'s left edge are **0.000px** against the pre-R17 build at
> all thirteen widths.

**`--quote-lh` and `--quote-ls` are now tokens**, promoted for the same reason and under the
same rule as `--quote-size` in R15: the transform-origin is solved *from* the line-height
and the compensation *is* the tracking value, so neither may be restated. **R7's values,
byte-for-byte.** `--fr-asc` / `--fr-desc` carry R9.6's measured face metrics.

**Longhands, never the `animation` shorthand.** The shorthand resets `animation-timeline`
to `auto` and `animation-range` to `normal`, so written above them it silently detaches the
animation from its timeline and written below them it silently discards both. It also sets
`animation-duration`, which must stay `auto` for a scroll-driven animation to fill its
range. **This is a new gotcha and it is written here because R18 will hit it four times.**

#### The entry-animation pattern, verified by rendered ink

Three independent gates — `html.js-motion`, `@supports (animation-timeline: view())`, and
`min-width: 1280px` — plus `prefers-reduced-motion: no-preference` written into the media
query rather than left to global.css's blanket `animation-duration: 0.001ms !important`,
**because duration is not what drives a scroll-driven animation and that override does not
reliably stop one.** If any gate is unmet the pivot renders exactly as R7 shipped it: full
size, no transform, not even an inline-block.

Verified by scanning gold ink inside the Obsidian band on a full-page capture at scroll 0 —
**measured, not read off the code.** Finished size is 270px:

| Condition | Rendered gold ink | |
|---|---|---|
| `js-motion` on, scrub live | 131px | the derived start state, 0.487 × 270 |
| **JavaScript disabled** | **270px** | finished ✓ |
| **`@supports` unsatisfiable** | **270px** | finished ✓ |
| `screenshot.mjs` (class stripped) | **270px** | finished ✓ |

> **`screenshot.mjs` now drops `js-motion` before capturing, and this was not optional.** A
> `fullPage` capture rasterises the whole document at scroll offset 0, and a scroll-driven
> animation resolves against that offset — so with the class left on, **every section below
> the fold captures at the start of its scrub.** The pivot would have printed at lede pitch
> in every screenshot and every client-generated PDF. This is the standing rule "screenshot
> loop is static only" made true rather than assumed, and **R18 depends on it.**

#### What did not move

- **Page height, all ten section heights and tops, and 507 section × width left-edge cells:
  0.000px at all thirteen widths.** The three left edges hold across all ten sections.
- **The Feature Quote's own height is unchanged at every width** — the fixed padding is the
  Rhythm column and a transform affects no layout, so growing the word cannot touch it.
- **Gold: 3 of 3 saturated type accents, 0 of 8 hairline rule contexts.** Re-measured on
  both bases off the rendered page: Cover tagline "Legacy", About drop cap, pivot "Legacy" —
  the exact three this file names. R17 spends zero. The five `.plate-img::before` treatment
  layers sit on neither basis, as recorded in R7.
- **No photograph is inside a transform.** The transform is scoped to one word and a full
  stop; the only ancestor R17 touches is `.quote`, which takes a `view-timeline-name` — a
  declaration with no layout, paint or compositing effect. The section carries no photograph
  at all, and the scope is written so a later slice adding one cannot break R1.1.

#### The known defect, reported not fixed

R7's rule *"the pivot exceeds every lede"* is **already false at 390 and 360** in the
shipped build: pivot 44px against a 52px lede, **0.846×**. Reproduced exactly, and **R17
leaves it alone** — the scrub does not run below 1280 and the finished state is unchanged,
so the ratio is 0.846 before and after. Not fixed in this round, by instruction. It holds at
the other eleven widths (1.125× at 750 rising to 1.433× from 1023 up).

### R18 — Round B texture — THREE OF FOUR SHIPPED, ONE STOPPED, CORRECTION PENDING

Built September 9 2026. **Reviewed on localhost and NOT accepted — R18.1 is the correction
pass and is written.** Recorded now rather than after the correction, because the build's
findings are durable even where its output is not.

**Item 1 — lede reveals — BUILT, REJECTED ON REVIEW.** Per-line mask wipe, built as a React
island. Jackson's verdict: *"has no scroll behavior, it's super faint."* **Cause not yet
determined.** Two failures produce that report and they need opposite fixes: the animation
is not firing on scroll at all, or it fires and the travel is imperceptible. **R18.1 must
diagnose before tuning.** This is R13's shape exactly — shipped, passed every criterion,
invisible — and R13's pass and invisibility had the same cause.

**Item 2 — plate frame draw — BUILT IN CSS, FIRES ON ONE PLATE OF FIVE.** The build reported
all five plates measuring 0.00 on every scanline. Jackson sees the draw on one. Something
gates the other four and R18.1 must find it before fixing it.

**Item 3 — ghost numerals — STOPPED, NOT BUILT, STILL UNRULED.** The stop was correct and
its reasoning is worth keeping whatever Jackson decides:

> New marginalia is **composition**, and R18's own charter says the round is texture and
> does not change composition. The ghosted-monogram mechanic is recorded as *available but
> unapproved* and requires explicit sign-off in the session that uses it. A numeral in the
> margin would be a **fourth numbering device** against three that MUST NOT be made to
> agree — a bug class this file has flagged four times. **R12 deleted `RunningHead.astro`
> for precisely this**: a folio marks the page and a running head marks the section, and
> they do not repeat each other. There is also no numeral in the margin band to animate —
> the band holds About's closing line, Edu's district link, Premier's topics and Legends'
> handle, and it is dead below the pivot.

Nothing was substituted, following R15's precedent when its photograph half was refused.

**Item 4 — Index row stagger — BUILT IN CSS, RULED IN, then RULED OUT.** The build flagged it
as the one it would cut if anything read busy. Jackson's verdict at R18 review was that it
works and it stays. **SUPERSEDED September 10 2026 — see R18.2.** The build's own instinct
was right and it took two rounds and a hash-jump proof to get there.

#### What R18 established that outlives its output

**Island vs CSS, decided per item rather than by policy.** Lede reveals earn React: measure
rendered line boxes, map to character offsets, wrap, recompute on resize and on
`document.fonts.ready`, write per-line stagger windows. That is a stateful lifecycle. The
plate draw is one div and one keyframe, and the Index rows already exist as `<li>`s —
React would add an `<astro-island>` and no behaviour. **Both shipped as CSS.**

> **An island MUST nest inside the existing element, never replace it.** Astro wraps a
> hydrated island in a real `<astro-island>` element. Mounted in a paragraph's place it
> becomes the grid item and the `.win-*` placement moves with it. Nested inside, the `<p>`
> keeps its classes, its box and its placement. **This is the same family as the
> `::details-content` and `.plate-panel` gotchas: a box you did not author still takes a
> track.**

**Line detection is derived from rendered line boxes, not from the string.** The 21st.dev
component splits on an authored newline; these ledes carry none and wrap by width. A Range
walks one character at a time and each character is assigned to the line box its own client
rect sits on, grouped by rect top. **Reassembly is checked against the source string and
the split is abandoned rather than shipped if it does not match.**

**Split delta: 0.000px** — ink width, ink left and right, line count and box height, across
all eight ledes at all thirteen widths. Against R13's measured 1.34–4.36px for
per-character splitting. **This is why the per-line rule exists and it is now measured, not
argued.**

**`framer-motion` is installed but not imported, and is absent from `dist` entirely.**
`useScroll` adds a scroll listener and is banned. React owns DOM structure, line splitting
and stagger orchestration; **it MUST NOT own scroll observation.** Listener count held at
one in `src/` and one in `dist/`, R12's folio. React's three scroll sites are
synthetic-event delegation, armed only by an `onScroll` prop no component passes.

**The bottom-trim failure, and why `cover` is the right range.** All three mechanisms first
fired at the bottom trim: a 123px Index row's entire animation fit inside the bottom 123px
of the viewport, so the reader met everything already settled. Switched to `cover`, which
**self-normalises for element height** — Legends' 370px opener and About's 194px lede land
in the same place with no per-section constant. They now complete with the element's top at
42–50% of viewport for ledes, 43% for the plate, 62% for rows.

**A mask clearance that followed from face metrics still measured as a false pass.** 0.04em
followed correctly from R9.6's metrics and measured 0.080px of ink clearance at 1280 —
inside the 0.65px jitter R8.2 records for that quantity. Now asymmetric, -0.5em top and
-0.12em bottom, giving 24–30px and 5.13–6.20px. **A derivation being correct does not make
its result outside the noise floor.**

**Sequencing is structural, not indexed.** Each mechanism runs on its own element's view
timeline, so whatever sits higher animates first. No index, no `nth-child` ladder, nothing
to re-sweep. **Exactly one offset is hand-set and is flagged as such:** the Charging It
plate starts at `cover 10%` against the lede's 0%, so type leads and the photograph
follows, which is that section's reading order.

**Seven ledes animate, not eight, and the number was measured rather than chosen.**
`.idx-lede` sets one line at every band-1 width, so the island leaves it intact and it
carries no mask. All eight are wired to one mechanism and the line count decides. The
spec's "seven type-openers" predates R15, which corrected the same count to eight.

**Index stagger and Index hover do not fight.** Different elements — clip on `.idx-item`,
weight on `.idx-ch` inside it. R13's shipped conditions re-run with the stagger present:
row-height change 0.000px at all thirteen widths, name-to-`+` gap 96.50px. **The clip
releases around any focused descendant via `:not(:has(:focus-visible))`**, so the focus ring
is never clipped.

**Photograph blending intact.** `chg-frame` mean R−B 8.90 → 8.90, mean luminance 81.41 →
81.41, all five plates 0.00 on every scanline. **The curtain is a sibling of the `<img>` at
`z-index: 3`**, so R1.1's failure never fires.

**Page weight changed and the number is recorded.** R0 logged the React chunk as
unreferenced. **It is referenced now: +226 KB of JS on band-1 desktop, 0 bytes on touch** —
`client:media` genuinely gates the download. Reported rather than flagged, because Jackson
ruled bundle size is not an objection.

**Verification held everywhere it was checked.** Page height, ten section tops and heights,
footer, and 3,799 left-edge cells all 0.000px at all thirteen widths, on the dev server and
on `astro build` + `astro preview`. Gold 3 of 3 and 0 of 8, zero spent. Entry pattern by
rendered state: no-JS, no-motion and reduce all give identical ink. R16 withdraws and
arrives at `translateY(-56px) → 0`, R17 starts at exactly 0.4872, R13.1 settles all 17
characters at wght 700 across all four axes.

> **The lesson this round repeats for the third time.** R13, R17's tracking half and now
> R18's ledes all passed every measurement and failed on sight. **Judge the screenshot
> before the numbers** is already a working agreement; this file now has three independent
> confirmations that the numbers cannot substitute for it.

### R18.1 — Round B correction — FOUR ITEMS CLOSED, TWO STOPPED AND REPORTED

Measured September 10 2026. **Diagnosis first, repair second**, per the round's own
instruction. Two of the seven items turned out to need no repair, one turned out to be
another's symptom, one is provably unsatisfiable as written, and one repair is correct
and measured but **does not do what it was asked to do** — that last is the finding that
outlives this round.

#### Item 1 — the lede reveals were ADVANCING. The report was right and the cause was not.

`"has no scroll behavior, it's super faint"` had two candidate causes needing opposite
fixes. **Measured off the live DOM, not off the source:** every `.lede-ln-i` carries
`animation-timeline: --lede` resolving to a real `ViewTimeline`, `playState: running`,
`animation-duration: auto`, and per-line ranges written by the island
(`cover 15% -> 43.44%`, `18.28% -> 46.72%`, `21.56% -> 50%` for a three-line lede).
Nine scroll samples across About's cover range:

    cover      0     .15    .25    .325   .40    .50   .65   .85   1.0
    line 0   71.13  71.13  46.21  27.46   8.70   0     0     0     0
    line 1   71.13  71.13  54.42  35.67  16.91   0     0     0     0
    line 2   71.13  71.13  62.62  43.87  25.12   0     0     0     0

**Not identical, therefore advancing.** 71.13px of travel per line at 1440, staggered.
All three gates satisfied at capture time: `html.js-motion` present, `@supports
(animation-timeline: view())` true, `min-width: 1280` matched. **No travel value was
increased**, and none needed to be.

> **THE FIX WAS ALREADY IN THE WORKING TREE AND UNCOMMITTED.** `--r18-from: 15%` /
> `--r18-to: 50%` and `animation-timing-function: linear` were sitting on disk against an
> `HEAD` that still had `cover 0% -> 42%` with `--ease`. Jackson reviewed the shipped
> build; the tree had moved. **`git show HEAD:` is not the file on disk in this repo** —
> whole phases live uncommitted here, and a diagnosis that reads HEAD diagnoses a build
> nobody is running.

#### Item 2 — the plate draw fires on FOUR, and the fifth is excluded by measurement

All four curtains advance, on real ViewTimelines, in the correct direction:

| Figure | Timeline | translateX across its subject's cover range |
|---|---|---|
| `win-prem-plate` | `--plate` | 0 -> -120.4 -> -210.4 -> -301.2 -> **-421.3** (exits left) |
| `win-ath-bleed` | `--ath-plate` | 0 -> 233.6 -> 409.2 -> 584.8 -> **819.3** (exits right) |
| `win-ath-detail` | `--ath-plate` | 0 -> 88.4 -> 154.8 -> 221.3 -> **310.0** (same timeline) |
| `win-chg-frame` | `--plate` | 0 -> 120.8 -> 211.1 -> 301.4 -> **421.3** (exits right) |

**There is no fifth curtain and there must not be.** The page has five plates; the Cover's
is deliberately without one. Re-measured rather than taken from R18: the Cover figure is
720px in a 900px viewport at document top, so its **lowest reachable cover progress is
55.6%** — already past a range that ends at 50%. A curtain there is dead code at every
scroll position a reader can occupy, and only 5.6 points from painting over the hero
portrait at first paint. **"Make all five behave identically" is refused on that
measurement**, and the refusal is the same one R18 made.

Nothing gated the other three: the `--plate` name is declared on each `.plate-draw` figure
and resolves per-figure; Athletic's two share `--ath-plate` through `timeline-scope` so the
spread draws as one gesture. The one hand-set offset R18 recorded on the Charging It plate
is **not in the tree** — all four run `cover var(--r18-from)` to `cover var(--r18-to)`.

#### Item 3 — HASH-JUMP ARRIVAL. STOPPED AND REPORTED. NO RANGE CAN SATISFY IT.

The requirement as written — *after an instant hash jump to any section id, every element
whose box intersects the viewport must measure at its finished state* — **is unsatisfiable
by any `animation-range`, and this is a proof rather than a measurement.**

For an element of height `h` in a viewport of height `V` at cover progress `q`, its top
sits at `y = V - q(V + h)`. The element **intersects the viewport if and only if
`0 < q < 1`**. "Finished" requires `q >= range_end`. Satisfying the requirement for every
intersecting element therefore requires `range_end <= cover 0%` — **which is zero travel.**
A straddling element is the case that kills it: an element crossing the bottom trim is
intersecting by definition and, under any range with travel left, unfinished by definition.

Measured, at 1440x900, instant jumps, counting elements intersecting the viewport but not
at progress 1:

| Range | Hash-jump failures | Index rows complete at | Ledes complete at |
|---|---|---|---|
| **`cover 15% -> 50%` (shipped)** | **9** | **45% of viewport** | **47%** |
| `cover 15% -> entry 100%` | 3 | **84-85%** | 77% |
| `entry 0% -> entry 100%` | 3 | **88%** | 77% |

**Both alternatives cut the failures to 3 and neither reaches 0** — the three survivors are
plate curtains taller than the viewport, which `entry 100%` cannot finish at all. And both
buy that reduction by moving the Index rows' completion from 45% of viewport to 84-88%,
which **is the bottom-trim failure R18 switched to `cover` to escape**: the reader meets the
rows already settled at the screen edge. Per width, at `cover 15% -> 50%`:

    1920   sec-about 1   sec-athletics 5   sec-index 6   charging-it 1   = 13
    1440                 sec-athletics 2   sec-index 6   charging-it 1   = 9
    1280                 sec-athletics 2   sec-index 6   charging-it 1   = 9

**THREE ROUTES, NOT ARBITRATED HERE.**

1. **Narrow the requirement to "fully inside the viewport."** That version *is* satisfiable
   (`range_end: entry 100%`), and it costs the 45% -> 85% regression above. It is a
   trade, stated honestly: hash arrivals get clean, ordinary scrolling gets worse.
2. **`:target`, pure CSS, no JS and no observer.** `#sec-index:target .idx-item > *
   { animation-name: none }` renders the jumped-to section finished, on arrival, with the
   ordinary `cover 15% -> 50%` intact everywhere else. Costs: the hash persists, so a
   jumped-to section never animates again in that page life; and it covers the target
   section only, not a short section's neighbours below it.
3. **Leave it, and let R19 not create the problem.** The requirement exists because R19
   turns one jump link into nine. The Index's own rows are the worst case *because the
   Index is the only current jump target*. R19 could land each target at a scroll position
   its section's ranges have already cleared, which is a landing-position question rather
   than an animation question — and R16 already owns landing positions.

**Route 2 is the only one that costs nothing elsewhere, and it is the one this file
recommends** — but the "animates once per page life" cost is a composition judgement and
the round's instruction is not to pick. **Nothing was changed for Item 3.**

> **RULED September 10 2026, and it is none of the three.** Jackson took a fourth route:
> **remove the mechanism from the affected sections rather than suppress it on arrival.** The
> Index row stagger and the Contact lede reveal both come out — see R18.2. The proof above
> stands and is why: an animation that cannot be finished for a reader who arrives by hash
> is an animation that section cannot carry.
>
> **This closes the symptom, not the requirement.** **CORRECTED September 11 2026: the
> sentence that stood here was wrong.** It read that removing the Index stagger made every
> arrival on the current page correct, on the reasoning that the Index was the only hash
> target. The Index is the only *trigger*. It jumps to every other section, so the residue
> R18.2 measured is live on the shipped page today: **7 frozen elements at 1920, 3 at 1440
> and 1280**, in Athletic, Charging It and About's `edu-lede`. Jackson reported it from the
> built site on September 11 2026, unprompted, from the Index. **R19 turns one target into
> nine**, and the seven sections that keep their ledes and plate draws land mid-animation
> exactly as the Index did, but the defect did not wait for R19. **CORRECTED AGAIN the same
> day, against the tree rather than the file: Route 2 was already built.** It sits in
> `global.css` under an R19 constraint 7 header and measures **0 frozen at 1920, 1440 and
> 1280** on all eight reachable targets. The September 11 plan to pull it forward into R18.3
> is withdrawn; it shipped inside R19. **Item 3 is closed in code, not only on paper.**
>
> **RULED September 10 2026: Route 2 is in, as part of R19.** `:target` suppression, pure CSS,
> no listener and no observer. Its price — a jumped-to section does not animate again in that
> page life — was weighed and accepted: a reader who used the nav has declared they want to be
> somewhere, not to watch it arrive. **Item 3 is now closed.** Its proof stands as the reason
> Route 1 was never viable.

#### Item 4 — NOT A SEPARATE DEFECT. It is Item 3, seen.

Rows 03 and 04 rendering with their text bisected by a hairline is the **visible symptom of
the frozen stagger**, and the test that settles it is whether a finished row is correctly
seated. Measured with the Index fully traversed, so every row is at progress 1:

| | 1920 | 1440 | 1280 |
|---|---|---|---|
| item height, rows 01-04 | 130.906 | 122.891 | 118.359 |
| numeral bottom to rule | 47.31 | 48.06 | 46.08 |
| body bottom to rule | 23.16 | 22.44 | 22.23 |
| transform | `matrix(1,0,0,1,0,0)` | identical | identical |

**All five rows byte-identical at every width**, row 05 differing only by the 1px rule it
does not carry. The content and the rule do not move independently — the clip is on the
`<li>` that owns the border, and at rest the children carry no transform at all. Mid-stagger
the ink is translated up to `3 x --idx-name-size` and crosses that rule, which is exactly
the reported appearance. **Fix Item 3 and Item 4 is gone. There is nothing else to fix, and
fixing it separately would be fixing a symptom twice.**

#### Item 5 — the squared start is BUILT AND CORRECT, and it is measurably NOT the lever

`--pivot-scrub-start`, the ladder step taken twice. The identity is algebraic:

    --quote-size x (--lede-size / --quote-size)^2  =  --lede-size x --pivot-scrub-from  =  --mast-name-size

so the entering word seats at the masthead-name tier **by construction, at every width**.
Measured, `entering px - --mast-name-size` = **0.00 at 1920, 1440 and 1280**.

| width | lede | quote | mast name | start scale | travel | entering px |
|---|---|---|---|---|---|---|
| 1920 | 64.00 | 128.00 | 32.00 | 0.250000 | **4.000x** | 32.00 |
| 1440 | 54.72 | 112.32 | 26.66 | 0.237344 | **4.213x** | 26.66 |
| 1280 | 52.00 | 99.84 | 27.08 | 0.271267 | **3.686x** | 27.08 |
| 1279 and below | — | — | — | **1.000** | **1x** | scrub does not run |

Holds, at all thirteen widths: **left edge X drift 0.000px, rendered baseline Y drift
0.000px, h2 height delta 0.000px.** R17 measured its origin 0.013px out; this measures
0.000. h2 height at rest is 343.641px at 1440 — R16 and R17's number, unmoved. No
legibility or contrast floor is crossed: the entering word IS the masthead name's size,
which R16 measured at 15.01:1 and >= 24px at every band-1 width, and gold on Obsidian is
5.76:1. **Neither stop condition fired.**

> **AND IT CHANGES ALMOST NOTHING THE READER SEES. THIS IS THE ROUND'S REAL FINDING.**
>
> The scrub runs `animation-range: entry 0% entry 100%` on `.quote`, and the `<h2>` sits
> well down inside that section. Measured: **the word is below the fold until entry 57-64%,
> and not fully on screen until entry 73-77%.** By the time it can be read at all the scale
> is already 0.68-0.73; the screenshots at the requested 0% and 50% contain no word at all.
>
>     visible travel at 1440   old start 0.4872 -> 0.882 at first full visibility -> 1.0
>                              new start 0.2373 -> 0.8245 at first full visibility -> 1.0
>
> **The whole first half of the scrub plays where nobody is looking.** Squaring the start
> made the off-screen half bigger. Jackson's "the travel is too short" is correct, and the
> start scale is not what is short — **the range is.** The lever is moving the scrub's
> range so its travel is spent while the word is on screen (the ledes and plates already
> learned this in R18 and it is why they run `cover`, not `entry`). That is a composition
> change to R7's locked pivot and is **not made here.**
>
> This is the fourth time this file has recorded the same shape: **R13, R17's tracking half,
> R18's ledes, and now R18.1's scrub all passed every measurement and failed on sight.**
> Judge the screenshot before the numbers.

**`--pivot-scrub-from` was NOT redefined, and that is load-bearing.** R16 consumes it as
ONE rung — `--mast-name-size = --lede-size x --pivot-scrub-from`. Squaring the token in
place would have taken the masthead name from 26.66px to 12.99px at 1440: under WCAG
1.4.3's 24px large-text boundary and straight through R16's 15.01:1 derivation, silently.
**A value corrected for one consumer and silently applied to a second is the
box-you-did-not-author gotcha arriving through a token.** The step stays one rung; the
square is a second token derived from it; one token still drives all four tiers.

#### Item 6 — smooth scrolling verified, and it is NOT what makes anything pass

`scroll-behavior: smooth` inside `@media (prefers-reduced-motion: no-preference)`, page-wide.
Measured at 1920 / 1440 / 1280 / 1024 / 750 / 390, with and without `reduce`:

- **`smooth` under no-preference, `auto` under `reduce`**, at every width. The blanket
  `animation-duration` override does not reach `scroll-behavior`, so this needs its own
  query and has one.
- **Landing error 0px at every width.** R16's removal of `scroll-margin-top` is untouched —
  smooth changes the interpolation, never the destination.
- **R16's masthead fires cleanly at both boundaries.** 0.00 rendered px at scroll 0 and at
  the Cover's last pixel; withdrawn to **0.00px across 20-80% of the pivot** and re-arrived
  at 55.92px by the Index's top; never `display: none` mid-jump.
- **Item 3 was tested with instant jumps throughout**, exactly so smooth could not be what
  passes it — and it does not pass.

#### Item 7 — preserved, re-measured

- **Index row stagger: in, unchanged.** **SUPERSEDED the same day — R18.2 removes it.** The
  re-measurement below is retained because it is the pre-removal baseline R18.2 measures
  against.
- **R13.1 re-measures unchanged.** Row-height change **0.000px at all thirteen widths**,
  rest to hover, with the stagger present. Tightest `+` clearance on entry 04 at rest is
  **96.50px at 360** — the recorded figure, to the hundredth; under hover at `wght` 700 it
  is 85.61px, name growth 10.82-15.22px, no collision at any width. 18 character spans.
  The clip releases to `none` around any focused descendant at 1920/1440/1280 and does not
  exist below 1280.
- **Ghost numerals: still not built, nothing substituted.**

#### Verification

- **Page height, ten section tops and heights, the footer, and 533 left-edge cells per
  condition: 0.000px** between `shipped`, `js-motion` stripped, and `prefers-reduced-motion:
  reduce`, at all thirteen widths. **JavaScript disabled: 0.000px on every left edge and
  every section except Contact, which is 7px shorter because Turnstile does not mount** —
  the pre-existing Phase F behaviour R16 recorded, not this round's.
- **Run twice: on the dev server AND on `astro build` + `astro preview`.** Both give the
  same table. Compared directly against each other as well — page height, every section top
  and height, the footer and all 533 left-edge cells are **0.000px dev against built at all
  thirteen widths**, and `--pivot-scrub-start` resolves to the identical rendered scale in
  both (0.250000 / 0.237344 / 0.271267 in band 1, exactly 1 below 1280). The token survives
  minification; it is not a dev-server artefact.

  > **The preview run needed a retry to be trustworthy, and the reason is recorded so it is
  > not mistaken for a page fault.** `astro preview` serves the built page fast enough that
  > a measurement occasionally raced frame teardown and threw `Attempted to use detached
  > Frame`. That is a harness fault. A verification harness that reports a thrown navigation
  > as a geometry result is worse than no harness — it retries now, and it re-navigates
  > before retrying rather than measuring a half-torn-down document.
- **Listeners: exactly one in `src/` and one in `dist/`.** R12's folio. Zero
  `IntersectionObserver` (the single grep hit is a comment forbidding it). `framer-motion`
  installed, never imported, absent from `dist`. JS weight 226,474 bytes on band-1 desktop.
- **`transition-all`: zero elements use it.** `dist` carries one hit and it is a **Tailwind
  utility DEFINITION, not a usage** — Tailwind v4's scanner reads the five prose comments
  forbidding `transition-all` as class-name candidates and emits the rule. Harmless, and
  the same shape as the comment in `global.css` that deliberately does not spell out
  `addEventListener` so the standing audit does not read 2. **Recorded so a later session
  does not "fix" a usage that does not exist.**
- **`opacity: 0` resting states: ONE, and the standing claim of zero is wrong.**
  `.folio-inner` in `FolioMarginalia.astro` is `opacity: 0` with an `is-visible` class at
  0.75 — R12's shipped folio, `aria-hidden`, decorative, and predating this round. R17's
  entry claims "every grep hit is a comment forbidding them"; that was true before R12 was
  mounted and has not been true since. **R18.1 introduces none.**
- Gold **3 of 3 saturated type accents, 0 of 8 hairline rule contexts** — R18.1 spends zero;
  its only change is a scale on an already-gold word.

**Screenshots:** `screenshot-705..713` (Item 5 at the requested 0/50/100, three widths —
the word is absent at 0 and 50 and that is the finding), `714..721` (new start against old
start at entry 64/77/90/100, 1440), `722..725` (Item 1, About's lede mid-wipe), `726..734`
(Item 2, all four plates mid-draw).

### R18.2 — two mechanisms removed — SHIPPED AND ACCEPTED September 10 2026

**A removal pass. Nothing is added, nothing substituted, no number tuned.** Two scroll-driven
mechanisms come out on Jackson's review verdict.

| # | Mechanism | Was | Now |
|---|---|---|---|
| 1 | Index row stagger (R18 item 4) | ruled in at R18 review | **OUT** |
| 2 | Contact lede reveal (one of R18's seven) | shipped with the other six | **OUT** |

**Why the Index one goes.** R18.1's Item 3 proof: a view timeline resolves against the
viewport, so an element below the fold sits at range start by definition and no
`animation-range` finishes it for a reader who arrived by hash. The Index is the only hash
target on the page, its rows were 6 of the 9 measured failures at 1440, and Item 4's bisected
rows were that freeze made visible. Removing the mechanism removes the symptom completely at
zero machinery. **R18.1 measured all five rows byte-identical at rest at every width**, so the
clip contributes no layout and its removal MUST move nothing.

**Why the Contact one goes.** Jackson's verdict on review. Contact is the page's shortest
section at roughly 20 words, it is the only section carrying an interactive element, and it
closes the page on Obsidian. It is also the second target R19 would add. **This is a reading
judgement, not a measured defect** — recorded as such so a later session does not go looking
for the measurement that justified it.

**What comes out with them.** The `:not(:has(:focus-visible))` clip release exists only
because a clip could clip a focus ring; with no clip it is dead code and goes with the
mechanism. Any gate left guarding nothing goes too. **The shared `js-motion` / `@supports` /
band gates stay** — removing one consumer is not removing the pattern, and five ledes, four
plate curtains, R16 and R17 all still consume them.

**Nothing is substituted for either**, following R15's and R18's precedent when a half was
refused.

> **The lede count moves again and the number is measured, not chosen.** R18 recorded eight
> ledes wired to one mechanism with **seven animating**, because `.idx-lede` sets one line at
> every band-1 width and the island leaves a single-line lede intact. R18.2 takes Contact out,
> **so the expected count is six — and it MUST be confirmed against the DOM rather than
> assumed.** Contact's opening statement is short enough that it may already be single-line
> and therefore already unanimated at some band-1 widths, in which case part of this removal
> is a no-op and the report must say so.

#### What R18.2 measured — SHIPPED, accepted on review

**The census answered the open question and the stop condition did not fire.** Contact's lede
is **three lines and masked at 1920, 1440 and 1280 alike**, never single-line, so no part of
the removal was a no-op. **Seven masked before, six after** — and the earlier "eight wired,
seven animating" figure was corrected to seven wired in the same pass. Below 1280 no lede was
ever masked, the island's own `min-width: 1280` gate, so there was nothing to remove at the
other ten widths.

**All four removal targets existed on disk and were absent from `HEAD`.** R18.1's repo lesson
held for the second consecutive round: measure the working tree, never `git show HEAD:`.

**The Index carried ten animated targets, not five** — five `.idx-num` and five `.idx-body`,
all on `--idx-row` at `cover 15% -> 50%`, with the clip `inset(0px -32px)` on `.idx-item`.
Ownership was confirmed separate before anything was cut: clip on `.idx-item`, stagger on
`.idx-row > *`, hover on `.idx-ch` via `transition-property: font-variation-settings`.
Different elements, different properties.

**Nothing moved.** Page height, ten section tops and heights, footer and 533 left-edge cells
per condition: **0.000px**, four conditions x thirteen widths, dev and `astro build` +
`astro preview`. Index row heights 0.000px on every row at every width. R13.1 re-measured
whole, including the 96.50px `+` clearance at 360 to the hundredth and all four Fraunces axes
still transitioning. Listeners 1 and 1, JS weight delta 0. Gold 3 of 3, 0 of 8.

> **The one non-zero number, and it is the point.** Ink-to-rule at scroll 0 moved **84px at
> 1920 and 1440, 74.88px at 1280 — exactly `3 x --idx-name-size`** at the clamp ceiling and
> at 1.95vw. That is the removed `from` keyframe, and the after-values (47.31 / 48.06 / 46.08)
> land on R18.1's recorded rest positions exactly. **The removal is visible in precisely one
> measurement and it is the one that should have moved.**

**Item 5, the thing that was bought.** All five rows fully present and correctly seated on
arrival, 03 and 04 included. **Jumped against scrolled: 0.000px** on row height, ink-to-rule
and transform, at every width, on both targets.

> **The round improved its own test, and the improvement matters.** The brief's
> `prefers-reduced-motion: reduce` version passes for a reason wider than the removal — reduce
> switches off the whole no-preference block, so the surviving ledes and curtains are inert and
> the test cannot fail. **The sharper run leaves motion live and makes the jump instant by
> setting scroll directly**, six ledes and four curtains active, and it passes identically.
> **A test that cannot fail is not evidence.** Use the direct-scroll version from here on.

**What R19 inherits, measured rather than assumed:**

| hash-jump failures | before | after |
|---|---|---|
| 1920 | 13 | **7** |
| 1440 | 9 | **3** |
| 1280 | 9 | **3** |

**Index 6 -> 0 and Contact 3 -> 0 at every width.** The residue is Athletic's curtains and
ledes, Charging It's curtain, and About's `edu-lede` at 1920. **Item 3 is closed for the two
sections that had it and open for the rest.**

#### Two findings that outlive R18.2

- **Unmounting beats CSS suppression when the goal is "leave nothing behind."** Contact was
  removed at the mount. CSS suppression would have kept the island hydrating, the paragraph
  split into block spans, and an `<astro-island>` still wrapping it. `astro-island` count in
  `dist` went **8 -> 7**; Contact's paragraph now carries **0 lede spans and 0 islands**. Same
  family as R18's box-you-did-not-author rule, arriving from the other direction.
- **A null timeline renders untransformed, and the intuitive guess is wrong.** The round had
  asserted in a comment that CSS suppression would leave the paragraph permanently blank. It
  tested that rather than leaving it asserted: with `view-timeline-name: none` the timeline
  resolves to null and Chrome renders the element **untransformed**, `translateY` 0.00px on all
  three lines. **This is why the entry pattern is safe** — a browser that cannot resolve the
  timeline paints the finished state, which is the same guarantee `@supports` gives. Recorded
  because the guess was wrong in the direction that would have looked catastrophic.

### C1 — client copy pass — RULED IN September 11 2026, NOT BUILT

**Not a design round, recorded here for one consequence.** The client returned the copy deck
on September 7 2026 with **eleven comments and zero tracked changes**. `COPY.md` was rewritten
September 11 2026 to fold them in and is the only source for the strings. Five change: the
four Premier Leadership speaking topics, the Everyday Legends opening statement, Index entry
02's description, Index entry 01's name if it still carries the LLC suffix, and Contact's
direct email with its `mailto:` href.

**The composition consequence.** Her four speaking topics run two to four words against the
previous six to ten, so **the Premier Leadership margin at columns 10 to 12 loses roughly two
thirds of its length.** The pass is instructed not to compensate: no padding change, no size
change, no added item, no re-balancing. Screenshot, report, and Jackson rules on it.
Everything outside Premier Leadership, Everyday Legends, Index and Contact measures **0.000px
at all thirteen widths by pass condition**, and any non-zero is a fail rather than something
to correct.

**`COPY.md`'s word budget rule applies unchanged.** The September 7 edits only shorten. That
is not an invitation to add copy back.

**Model: Sonnet.** String replacement and measurement.

### R18.3 — the masthead name link — SHIPPED AND ACCEPTED September 11 2026

**Rescoped September 11 2026 to one change.** It was written as two. Change 1, `:target`
suppression, was found already built under R19's constraint 7 and measuring 0 frozen at all
three band-1 widths, so it is struck from this round. What remains is the name link.

**The masthead name becomes a link to the top of the document.** `href="#top"`, band 1 only.
**No new id, and `#sec-portrait` is refused.** `#top` is the spec's document-top fragment when
nothing carries that id, it lands at document top rather than at the Cover's box top, and **it
matches no `:target`, so the arrival rule never fires off it.** Both halves were verified on
September 11 2026: `id="top"` has 0 occurrences in `dist/index.html`, and navigating to `#top`
from scrollY 4000 at 1440 returns `:target` null and `main > section:target` false, where
`#sec-portrait` returns the section.

**RULED — the link treatment, because neither candidate in the bar works.** `summary.mast-jump`
is not a link and deliberately carries no hover under constraint 6, so matching it cannot
deliver the hover and active states `CLAUDE.md` requires. `.mast-row` is the bar's only true
link treatment but it is 10.5px sans panel rows against a 26.66px Fraunces name, and copying it
would visibly disagree. **Use the page's own link idiom instead: `opacity: 0.7` at 260ms on
hover, matching `.edu-link` minus its translate. Active `opacity: 0.55`, same duration.
`focus-visible` matches the bar's existing treatment.** Opacity is scale-free, which is
precisely why it survives the tier difference that rules `.mast-row` out. **No transform and no
movement**, because the name MUST measure 0.000px. This rules R16's `opacity: 0.7`
recommendation in **for the name link only**. It is not ruled in for `summary.mast-jump`, which
stays as R19 built it.

**RULED — `aria-hidden`. Do not remove it.** R16 set `aria-hidden="true"` on `.mast-name`
because her name is already the Cover's `<h1>`, and removing it changes what the bar announces,
which is R16 composition and outside this round. A focusable element inside an `aria-hidden`
subtree is a live ARIA violation, but the violation only exists when `aria-hidden` sits on an
**ancestor** of the focusable element. **Wrap outside it and give the link its own name:**

    <a href="#top" aria-label="Back to top">
      <span class="mast-name" aria-hidden="true">Dr. Syreeta McClain</span>
    </a>

This is the standard icon-button pattern, it is legal, it keeps R16's reasoning intact, and it
gives the link a functional name rather than repeating the `<h1>`.

**Expected and correct, not a defect:** clicking the name lands the reader at the top, where the
bar renders zero pixels over the Cover, so it withdraws. This is the inverse of the R16 case at
constraint 5, where clicking the bar's own link made it vanish mid-page.

**The name MUST NOT move.** `--mast-name-size` is 26.66px and R18.1's Legacy scrub is seated
against that tier by construction. Wrapping the name in an anchor is a **0.000px change at 1920,
1440 and 1280** or it is a fail.

**Model: Sonnet.**

#### What R18.3 measured — SHIPPED, accepted on review

`<a class="mast-home" href="#top" aria-label="Back to top">` wrapping the untouched span, plus
four rules. **Two hunks, one file, 78 insertions.** The span, its class, its text and its
`aria-hidden` are byte-identical.

**`display: flex` on the anchor is load-bearing and is the whole reason the name does not
move.** The span was a direct flex item of `.masthead` and was therefore blockified. An inline
anchor would generate a line box of its own whose height comes from the ANCHOR'S STRUT —
`.masthead`'s inherited font and line-height, not the name's — re-seating the 26.66px ink
against a strut it has nothing to do with. As a flex container the anchor establishes no line
box, so the span is blockified exactly as before. **Colour and underline are neutralised
explicitly**, because the UA sheet supplies both and either would be a visible change.

**Name ink: 0.000px on left, top, width and height at 1920, 1440 and 1280**, taken from a
**Range over the text node rather than the element box**, because a box can change shape while
the ink stays put. Independently corroborated: **the rest-state viewport captures are
byte-identical before and after at all three widths.** Not 0.000px by measurement, the same
pixels.

**Nothing else moved.** Page height, ten section tops and heights, the footer and **1,885
left-edge cells: 0.000px at all thirteen widths**, zero non-zero entries. Listeners 1 and 1,
`astro-island` count 7, `dist` JS **226,474 bytes before and after, zero growth**. Accessible
name computes to `Back to top` from the accessibility tree; the link is reached at **Tab #1**,
so DOM, visual and tab order agree and it precedes the Contents trigger.

**`#top` verified, not asserted.** From scrollY 4000 at 1440: lands at scrollY 0,
`document.querySelector(':target')` is null, `main > section:target` is false, no element
carries `id="top"`. `#sec-portrait` returns the section, for contrast. **R19's arrival rule
cannot fire off the name link.**

> **A third harness fault, and the pattern is now the finding.** The first capture pass
> returned all six images byte-identical: **Puppeteer's `clip` is page-relative, not
> viewport-relative**, so a clip at y 0 with the page scrolled to 3000 captures the top of the
> DOCUMENT — the Cover — rather than the bar. The harness now takes its clip origin from the
> live `scrollY` and **asserts the bar's rendered box falls inside the strip before it writes a
> file.** That is the same class of fault as R18.1's `astro preview` race and R18.3's own
> `framenavigated` false positive: **three rounds, three harnesses quietly returning something
> that looked like evidence.** The standing rule that comes out of it: **a harness MUST assert
> that the thing it claims to have measured was actually in frame.**

**One thing measured and deliberately not changed.** The focus ring runs y −5 to y 61 against a
bar at 0→56, so its top 5px sits above the viewport. **`summary.mast-jump` is byte-identical**
— same ringTop, same ringBottom, same 4px offset — so this is R16's existing behaviour for a bar
flush to the viewport top, matched exactly rather than introduced. Three of four sides are
visible, so SC 2.4.7 holds. **Recorded because a future round may want R16's bar to reserve ring
clearance, and that is a composition decision.**

### R19 — the masthead section list — BUILT September 11 2026, **NEVER REVIEWED**

**Scope.** The masthead's `INDEX` link becomes a trigger that opens a list of in-page
destinations. Everything else R16 shipped is untouched.

**Why this is not the nav menu this file rejected.** The rejection above was written against
components that assume routes. R19 addresses anchors inside one document and moves the
Index's own function into the running head. The rejection is narrowed rather than reversed,
and the narrowing is recorded at the rejection itself.

**Seven constraints, settled here so the build does not arbitrate them.** The seventh,
arrival behaviour, was briefly moved out to R18.3 on September 11 2026 and **moved straight
back the same day**: the tree showed it already built here. Documentation was behind the tree,
which is the standing lesson of this project arriving from a third direction.

1. **The list inherits R16's suppression exactly.** It prints on the Porcelain spreads and
   goes quiet on the Obsidian ones, because it lives inside a bar that does. **This means the
   pivot, Contact and the footer carry no navigation.** Accepted: the Index section sits
   above all three and already navigates. Recorded rather than discovered on review.
2. **Band 1 only.** The bar does not render below 1280 and R19 does not change that.
   `--pivot-scrub-from` inverts below band 1 and the bar's own token is documented as
   meaningful in band 1 only. Bringing the masthead down the bands is a separate slice and is
   not scheduled.
3. **No React island, and no 21st.dev component.** `<details>` / `<summary>`, CSS only.
   `framer-motion` stays installed and unimported. An island would nest an `<astro-island>`
   inside the bar for no behaviour, which is the box-you-did-not-author gotcha R18 recorded
   alongside `::details-content` and `.plate-panel` — and `::details-content` is the specific
   one this slice will meet.
4. **Contents: `sections.ts`, in page order, minus the Cover and minus the pivot.** Those two
   are exactly the sections that deliberately carry no folio entry, and the list is the folio's
   labels made clickable. Labels MUST match under the same
   `Buffer.compare(sections.ts label, rendered <h2>)` = 0 rule the heading structure already
   enforces. **It MUST NOT carry the Index's own 01–05 numbering.** That would be a **fourth
   numbering device** against three that MUST NOT be made to agree.
5. **Every jump target inherits R16's landing check.** R16 removed `scroll-margin-top` because
   the reflex declaration put the reader 56px back inside the pivot and clicking the masthead's
   own link made the masthead vanish. R19 multiplies one target into nine. **Each target's
   landing scroll MUST be measured against the pivot's and Contact's withdrawal ranges**, and
   against the Index's 110px top padding dependency R16 flagged.
6. **No hover treatment on the trigger beyond R16's recommendation.** `opacity: 0.7` at 260ms
   on the link, matching `.edu-link` minus its translate, if that recommendation is ruled in.
   Nothing else. `focus-visible` is required regardless under SC 2.4.7, and the panel needs
   Escape-to-close and focus return.
7. **Arrival behaviour: Route 2, `:target` suppression. RULED September 10 2026. BUILT, and
   measured passing September 11 2026.** `global.css`, under the header
   *R19 — CONSTRAINT 7. THE ARRIVAL RULE.* The shipped rule is **blanket, not a list**:
   `main > section:target, main > section:target * { animation-name: none !important }`. The
   `!important` is derived against `html.js-motion #sec-athletics .plate-curtain` at
   specificity (1,2,1) and the reasoning is preserved in the file header. Pure CSS. **No
   listener, no observer, no addition to the 226,474-byte budget**, and R12's single-listener
   monopoly survives untouched. Ordinary scrolling is unaffected. **The accepted cost: a
   section jumped to does not animate again in that page life**, because the hash persists.
   Weighed and taken. **Measured 0 frozen elements at 1920, 1440 and 1280** on all eight
   reachable targets, instant jumps, motion live. See the re-baseline note below: the 7 / 3 / 3
   figure this constraint used to quote is retired.

**Sequencing: R19 is BUILT and NOT REVIEWED.** R18.2 shipped and was accepted on review, Item
3 was ruled the same day, and R19 was then built without being recorded as built. It was found
on disk on September 11 2026 while measuring for R18.3, and Jackson had been using it for at
least a day without knowing which round he was clicking. **What is on disk:** a
`<details class="mast-index">` with `<summary class="mast-jump">Contents</summary>` and a
`<nav class="mast-panel">` carrying eight `.mast-row` links. The `INDEX` link R16 shipped is
**gone**, replaced by that summary. **R19 has never been reviewed and the composition decision
it was specced to carry has never been judged.** That review is now the open item, not the
build. R18.3 is rescoped to the masthead name link alone. The history matters for anyone reading backwards: R18.1 did **not**
fix hash-jump arrival, it proved the requirement unsatisfiable by range and stopped; R18.2
removed the two mechanisms that made it visible; Route 2 covers the eight targets R19 adds.
**R19 is the first round that both builds a mechanism and carries a rule for how every other
mechanism behaves under it.** That is deliberate — the alternative was discovering the same
freeze nine times.

**Model: Opus.** New structure and a composition-adjacent decision about what chrome this page
carries.

#### Measured September 11 2026, against the working tree, and three figures change

**The 7 / 3 / 3 residue baseline is RETIRED. The measured figure is 21 / 24 / 25** at 1920,
1440 and 1280 (20 / 24 / 25 counting in-viewport only), taken by building the working tree,
stripping the single arrival rule from the built CSS, and re-running the census. **Neither
counting basis reconciles with the old number and it is not a discrepancy to resolve: the
mechanism changed underneath it.** R18.2 counted *masked* ledes. The ledes now animate on
transform (`lede-line-in`, `from { translateY(calc(100% + 0.12em)) }`, linear,
`cover var(--ln-from)` to `cover var(--ln-to, 42%)`, island-computed stagger). **Any future
round quoting 7 / 3 / 3 as a pass condition is quoting a dead number.**

**The residue is in seven sections, not the three R18.2 recorded.** `sec-about`,
`sec-education`, `sec-pillar` and `sec-legends` on `span.lede-ln-i`; `sec-athletics` on
2 plate curtains plus 5 lede lines; `charging-it-to-the-game` on 3 lede lines plus 1 curtain;
and **`sec-quote` on R17's `legacy-scrub`**, which was never in R18.2's residue at all.

**The Index is not the only linker, and never was.** Three linkers and eight reachable targets:

| Target | Section | Linked from |
|---|---|---|
| `sec-about` | About | masthead panel |
| `sec-education` | Educational Leader | masthead panel |
| `sec-pillar` | Premier Leadership | masthead panel |
| `sec-legends` | Everyday Legends | masthead panel |
| `sec-athletics` | Athletic Management | masthead panel |
| `sec-index` | Index | masthead panel |
| `charging-it-to-the-game` | Charging It to the Game | masthead panel **and** the Index's blog row |
| `sec-contact` | Contact | masthead panel **and** the Cover's `.btn-solid` CTA |

`sec-portrait` and `sec-quote` carry ids that **nothing links to**, so no reader can arrive at
them by hash. They are deliberately absent from `sections.ts`. **Eight reachable targets is the
number any arrival pass measures against, not ten.** The Index's other five rows are external
URLs.

#### The harness, rebuilt September 11 2026 — carry this forward

R18.1 found that `astro preview` could race frame teardown and the harness would silently
convert a thrown navigation into a geometry result. The guard put in then was a raw
`framenavigated` counter, which **false-positives on the expected same-document fragment
change** every hash test makes. It has been replaced with a **document-identity sentinel**: a
random token planted on `window`, re-asserted after every measurement, plus a cross-document
check that strips the hash before comparing. A torn-down document loses the sentinel and
**aborts the run rather than returning geometry**. It fired on its first run, exit 2.

The harness also **refuses to run** unless `js-motion` is present and
`prefers-reduced-motion: reduce` is unmatched, so a test that cannot fail is rejected up front
rather than passing quietly. Jumps are made instant by setting scroll directly, twice across
rAF pairs, to defeat page-wide `scroll-behavior: smooth`.

### PASS A — About: the measure, the drop cap and the closing line — SHIPPED AND ACCEPTED September 16 2026

**One round, three changes, and they are one round because they interact.** Written first as
two changes and stopped before building: the stop was correct and the brief was wrong. The
drop-cap half could not be built as specified, and the stop was not scoped, so the closing line
did not get built either. Both corrections are in this entry.

**Change 1. Cap About's body measure in band 1.** The band is fluid and uncapped, so the body
runs about **98 characters at 1920** against the file's own 78-character maximum. That overrun
collapses paragraph 1 to two lines at every width from 1807 up, which is what breaks the cap.
**The number and the mechanism are derived in the build, not ruled here**, against two pass
conditions: **paragraph 1's longest line MUST NOT exceed 78 characters, and paragraph 1 MUST
render at least three lines, at all thirteen widths.** No new breakpoint, no hand-set
`grid-column`, no copy change. **The lede is untouched** — it is display type and this file
already exempts display type from the measure ceiling.

**Change 2. The cap goes from three lines to two.** It follows change 1 and MUST be measured
after it. "Intentional" is two alignments and they are the whole job: the cap's **cap-height top
on line 1's cap-height**, and the cap's **baseline on line 2's baseline**, both within 1.0px at
1920, 1440 and 1280.

> **The arithmetic is already solved and re-derived from the served font files, so the build
> re-measures rather than re-invents.** Fraunces' woff2 carries **2000 upem with a 1400 cap**
> and Montserrat's **1000 with 700**: both exactly **0.700**, which is now the THIRD independent
> confirmation of that figure after R2's pixel scan and R9.6's `measureText()` sweep. **Treat
> 0.700 as closed and stop re-deriving it.**
>
> For N=2: required ink = `1 x 30.6 + 0.700 x 17` = **42.5px**; font-size `42.5 / 0.700` =
> **60.714px**; line-height **0.72058 unchanged**, since `L = 2b1 - 1` is what puts the float's
> box bottom on its own ink baseline; margin-top **7.851px**. The same formula reproduces
> today's 104.443px for N=3, which is the check that it is the right formula.
>
> **Measured at those values, both alignments land at −1.01px and −0.75px — the top misses the
> 1.0px tolerance by 0.01px, at every width identically.** The residual is Chrome rounding the
> face's ascent and descent to whole pixels at 60.7px, where the formula is smooth. **It is a
> re-solve against the rounded metrics, not a tuned nudge, and the round MUST do it rather than
> ship the approximation.**

**Change 3. The closing line is too isolated.** Jackson's verdict: it sits too far right. At
1920 the body's ink ends at x 948 and the coda starts at x 1426 — a **478px gap, three empty
columns**, the largest gap in the section. **It MUST stay separated**: it is a coda, `COPY.md`
sets it apart deliberately, and gluing it to the body is a failure, not a fix.

> **This is why the three are one round.** Change 1 moves the body's right edge LEFT at 1920,
> which makes the gap BIGGER, not smaller. **The track MUST therefore be chosen against the
> capped body, after changes 1 and 2 land**, or it is chosen against geometry that no longer
> exists. Ordering is a pass condition, not a preference.
>
> **Column 7 is ruled out and the reason is on the record.** R2 built the coda there and it read
> as a second column of body copy rather than as a closing statement. The build picks from the
> tracks the section already establishes, states which and why before building it, and **Jackson
> rules on the screenshot.** R2's bottom-alignment to paragraph 2's last baseline is the
> composition and MUST survive.

**Report-only, not in scope:** the character count of every other section's body at 1920. If
the other bodies overrun too, the ceiling is a page-wide slice rather than an About one, and
this round is not it.

**Model: Opus.** Composition at every one of the three changes.

#### What Pass A measured — SHIPPED, accepted on review

**Two files, seven hunks, and most of the added lines are comment.** `About.astro` and
`global.css`. Nothing else in `src/` moved.

**The measure cap is 670px and it was SWEPT, not calculated.** 1px at a time from 560 to 900,
with the window held wider than every candidate: paragraph 1 holds ≤78 characters to 738px
under the three-line cap and to 708px under the two-line cap, but **paragraph 2 holds only to
670px — 671 renders 80.** So 670 is the widest measure at which BOTH paragraphs hold the
ceiling, and paragraph 1 alone would have shipped paragraph 2 at 82. **It is also the measure
the 750px single-column threshold already carries** (750 holds 78, 751 renders 80): the same
number reached from the other end of the page by an unrelated measurement. Written in `em`
(670 / 17 = 39.4118em) so it rides the body tier. **It binds only above roughly 1500**; 1440
and every narrower width render exactly as before. **The number is copy-dependent — re-sweep
when About's copy changes, do not recalculate.** C1 does not touch About, so C1 does not
invalidate it.

**Paragraph 1 now runs ≥3 lines and ≤74 characters at all thirteen widths**, counted two
independent ways — per-character rendered position, and the engine's own line boundaries
walked with the selection API — **agreeing at every width.** The round found and fixed a fault
in its own second method first: it stopped at the floated cap.

> **THE CHROME ROUNDING MODEL, AND IT IS THE FINDING THAT OUTLIVES THIS ROUND.** The smooth
> solve put the cap at −1.01px and −0.75px, identically at every width, and the cause is that
> **Chrome does not place a baseline from the face's metrics as fractions.** It rounds ascent
> and descent to whole pixels, each on its own, and then **floors the half-leading** before
> adding it:
>
>     B = round(asc x F) + floor((lh - round(asc x F) - round(desc x F)) / 2)
>
> **The body proves the model rather than the model being assumed**: Montserrat 968/−251 at
> 17px on 30.6px gives `16 + floor(5.3) = 21`, which is the 21.000px `--body-baseline` this
> file has measured since R2. Applied to the cap, Fraunces at 60.714px on 43.749px gives
> `59 + floor(-15.125) = 43` where the smooth formula assumed 43.749 — **and that 0.749px IS
> the measured −0.75px.** Margin-top is therefore solved against B: `(21 + 30.6) - 43 =
> 8.600px`.
>
> **The rounding is written in CSS with `round()`, not typed in as 8.6px**, so a change to
> `--bio-size` or `--bio-lh` re-solves it with the arithmetic Chrome actually uses. **This
> model applies to every baseline registration on this page** and R2's, R9.6's and R16's
> optical seatings were all solved smooth; any of them that ever measures a sub-pixel residual
> should be re-read against this before anything is tuned.
>
> **Browser cost, recorded:** `round()` needs Chrome 125 / Safari 15.4 / Firefox 118, and
> **Firefox does not round font metrics the same way**, so the cap may sit up to about 1px off
> there. It is still a two-line cap. Firefox has never been opened on this build.

**Measured at all thirteen widths, not the three required: baseline delta 0.000px and
cap-height-top delta −0.256px, identical everywhere.** The −0.256 is antialiasing on the
glyph's top edge, not position. Line 3 starts at the section's left edge at every width.

**The closing line took column 8 in band 1 and column 9 in band 2**, on a rule the build
derived and stated before building: **one empty column between the body's window and the
coda.** Column 7 was ruled out on the record. **Column 8 is the only track that brings the
1920 gap below where it started** — 8 gives 389px, 9 gives 541px, 10 gives 692px against an
original 478px. The band-2 value keeps the gap continuous across the boundary: **122px at 1280
and 122px at 1279**, where leaving it at 10 would have jumped 122 to 220. **R2's
bottom-alignment to paragraph 2's last baseline is identical to the hundredth at every width**,
including the pre-existing −1.27px at 1024.

> **Open, and Jackson has seen it: the 1920 gap is 389px, not one column.** The body's text now
> stops at its 670px cap inside a wider window, so the visible gap is wider than the track
> rule implies. Better than 478px and accepted; **not resolved.**

**Nothing else moved.** Every section other than About: **0.000px height delta and 0.000px
left-edge delta at all thirteen widths**, 1,807 left-edge cells, zero mismatches. Listeners 1
and 1, islands 7, `dist` JS **226,474 bytes before and after**. **Gold 1 saturated / 0 hairline
in About, before and after.** About's own height moves +61.19px at 1920 and −30.59px at 1280
and 390, where paragraph 1 changed line count; 0.000px at every other width.

> **A third capture fault, found and fixed inside the round.** The "lede settled" assertion
> tested for `transform: none`, but **a finished animation reports an identity matrix**, so the
> check failed on a page that was in fact settled. Fixed to accept both. The round also framed
> its captures below the masthead and **decoded every saved PNG to assert gold ink inside the
> cap's box and dark ink inside the coda's box** before accepting the file. That is the
> assert-what-you-captured rule from R18.3, applied.


### PASS B — the `/privacy` route — SHIPPED AND ACCEPTED September 16 2026 (with PASS B.1)

**This is R11**, the slice `index.astro` has carried as deferred since the rebuild began. The
footer has linked to a 404 the whole time. Copy is `PRIVACY.md` at the repo root, which
inherits `COPY.md`'s set-verbatim rule.

**Ruled here so the build does not arbitrate it:**

1. **No masthead, no folio. Footer only.** The masthead's panel is `sections.ts`, the hub's
   in-page anchors, and on `/privacy` every one is dead; making them work means rewriting
   R19's component, **which has never been reviewed.** The masthead's mechanism is also keyed
   to the Cover clearing and the pivot withdrawing, neither of which exists here. The folio is
   a scroll listener tracking sections that do not exist. **`sections.ts` gains no entry.**
2. **Her name is the way back.** Footer-only is a dead end: `PageFooter` carries no link home.
   `PRIVACY.md`'s standfirst already reads *Dr. Syreeta McClain*, so **that line links to
   `/`**, in the masthead name's register, reusing `.mast-home`'s four declarations without
   importing the masthead. No copy added, no navigation device invented.
3. **The measure is capped at About's `39.4118em`.** Band 1 still has no ceiling and this page
   is long body copy; uncapped it ships a 98-character privacy policy. Same body tier, same
   78-character ceiling, so a second swept number would be a second thing to keep in
   agreement. **Confirmed by measurement, and a stop rather than a second cap if it fails.**
4. **One `<h1>`, "Privacy Policy"**, then one `<h2>` per section of `PRIVACY.md`. The hub's
   locked ten-`<h2>` structure is the hub's; this is a different document.
5. **Zero JavaScript.** No island, no script, no listener, no new `dist` chunk.
6. **`[[DATE]]` is September 16 2026** — "last updated" means last changed.
7. **Porcelain throughout.** No Obsidian ground, no photograph, no spread.

**Reported and not fixed:** on this route the footer's own Privacy Policy link points at the
current page. `PageFooter` is shared and a self-link is not worth a hub regression.

**Building is not gated on the TEST sitekey; PUBLISHING is.** The page describes Turnstile
protecting the contact form, and the form still ships a test key.

**Model: Opus.** A new document layout.

**SHIPPED. All seven rulings above held as written.** The route returns 200, the footer link
reaches it, the copy set verbatim, no masthead and no folio, `sections.ts` untouched, zero
JavaScript, Porcelain throughout.

**PASS B.1 — two corrections, both to this file's brief rather than to the build.**

1. **The standfirst was leaving the display tier.** Ruling 2 put her name in "the masthead
   name's register" and gave **no ordering rule**, so the build set the standfirst at display
   scale and the page's loudest line became her name plus a date. **Administrative metadata
   MUST NOT hold a display slot.** The page's grammar is the hub's: a small section label, then
   one large sentence, and on this page **the large sentence is the opening statement.**
   Required ordering, at every width: **opening statement > standfirst > body.**
2. **`.mast-home` is hover-only and that does not travel.** In a 56px bar the name is
   self-evidently the way home. Set in running text it reads as a headline and the affordance
   is discoverable only by hovering. **The link now carries a resting affordance that is
   visible without hover and does not rely on colour alone**, taken from the footer's existing
   link treatment. Navigation was never broken; the affordance was.

> **The lesson, and it is a prompt lesson, not a build one.** Both defects were this file
> ruling a *register* ("the masthead name's") without ruling the *ordering* it had to satisfy.
> A register names a size. It does not say what the size must beat. **When a brief moves an
> element into an existing tier, state the ordering condition that MUST hold after the move.**

> **One round was spent on a stop that should never have fired.** B.1's precondition said "any
> file modified outside `privacy.astro` — STOP." `CONTEXT.md` is modified by hand every round,
> so it stopped on the one file that is always dirty. **`CONTEXT.md`, `COPY.md` and
> `PRIVACY.md` are hand-maintained and MUST be excluded from any modified-file stop; that stop
> covers `src/`, `public/` and config only.** The same run also disproved a reported hub
> regression: cleared `.astro` and the Vite cache, loaded cold, **all ten sections rendered,
> `sec-index` at 939px.** A missing section in a warm dev server is a cache report, not a
> measurement.

### C-PRIV — the `/privacy` copy pass — RULED IN September 16 2026, NOT BUILT

`PRIVACY.md` was revised after PASS B shipped, on a compliance read of the built copy. Three
sections were added and one body replaced, so the page's `<h2>` sequence is **short by three.**
String replacement and byte comparison only. **No layout work, no new CSS. Model: Sonnet.**

1. **`Do Not Track`**, after `What this site is`. **This is the one disclosure CalOPPA names by
   title.** The obligation attaches to sites that follow a visitor across third-party sites,
   which this one does not, so it very likely does not bite — and it is one section, and it is
   what a reader checking compliance looks for. **Do not delete it to save a heading.**
2. **`How your message is held`**, after `How long we keep inquiries`. The smallest honest
   security statement: no database, no accounts, mailbox sign-in. **MUST NOT be expanded into
   encryption or security-practice claims.** Over-promising on security is the failure mode
   here, and this is the one section that can be made false by writing more.
3. **`Changes` body replaced.** CalOPPA asks an operator to describe how it *notifies* people
   of a material change; a bare date change is thinner than that, so the section now states
   that the page itself is the notice.
4. **`[[DATE]]` is resolved in the source, not substituted by the build.** `PRIVACY.md` now
   carries the literal `September 16 2026`. Copy is set verbatim and byte-compared, so a token
   in the source and a date on the page cannot both be true. **No `[[` may appear in `src/` or
   `dist/`.**

**Two things that are not code and are not prompts.** **Verify Vercel Analytics and Speed
Insights are OFF** before publishing — the copy states there are no analytics, and both are
opt-in products on the hosting account, so the repo cannot prove it. And **CCPA/CPRA do not
apply** (thresholds are ~$26.6M revenue, 100,000 California consumers, or half of revenue from
selling data) and **GDPR does not apply** (no EU targeting), so the hedge in `Your Choices`
stays as written rather than becoming a claim.

### PASS D — About's wide-width composition — RULED IN September 16 2026, NOT BUILT

**Supersedes the September 16 ruling that made this round the closing line alone.** That brief
was written from an About capture on its own. **Compared side by side with Premier at the same
width, the diagnosis changed**, and the correction is recorded here rather than dropped because
the superseded version is the more obvious reading and a later session will arrive at it again.

**The comparison is the evidence.** At wide width **Premier composes and About does not**, on
the same page, the same grid and the same widths:

| | Premier | About |
|---|---|---|
| Lede | runs nearly the full page | stops around halfway |
| Right column | speaking topics, four entries | two short lines of coda |
| Bottom | CTA anchors it | nothing |

**So the hole is not the page's.** It is About's, and it has two causes: **the lede takes a
narrower span than Premier's, and the right column carries almost nothing.** The upper gap, the
one beside the lede, is the larger of the two.

> **This narrows what this file recorded a day earlier.** The superseded note read the 1920 gap
> and the page-wide 78-character overrun as one defect, and proposed a page-level width ceiling
> as the derived fix. **Premier disproves the composition half of that**: a section that uses
> the width does not leave a hole at any page width, so no page-level container is needed to
> close About's. **The measure-ceiling half still stands** — five sections still overrun 78
> characters at 1920 (84 / 83 / 80 / 85 / **102**) and that is still unscheduled. The two are
> separate problems and were merged on one section's evidence.

**Two changes, About only, in ONE round, because they interact.** Widening the lede is likely
to drop it from three lines to two at wide widths, which moves the section's vertical, which
moves what the closing line registers against. Shipping the coda first would solve it against a
geometry the next round changes. **This is PASS A's own precedent.** **Opus.**

1. **The lede's span is RE-DERIVED against Premier's, not assigned.** Measure what Premier's
   lede actually spans at each width and what About's spans, report both, and bring About's to
   the same rule. **MUST NOT type in a span, and MUST NOT invent a rule that only About
   carries** — PASS A already holds one About-only override and a second would make the section
   a special case twice over. **If the two ledes cannot share a rule, STOP AND REPORT** with
   both measurements.
2. **The closing line moves up one EXISTING tier.** MUST NOT invent a tier, a variable or a
   one-off `font-size`. If no tier exists between the lede and body, **STOP.** **It MUST NOT
   reach or exceed the lede**: the lede rule gives a section one display-scale sentence, and two
   display blocks in one section is exactly what PASS B.1 corrected on `/privacy`. Required at
   all thirteen widths: **lede > closing line > body.**

**Both changes carry their own registration work:**

- **R2's bottom alignment is RE-SOLVED against the NEW geometry, not preserved and not re-solved
  against today's.** Paragraph 2's last baseline may move when the lede's line count changes.
  Solve against **Chrome's rounded baseline** per the PASS A model and **write it with `round()`
  in CSS rather than typing a pixel value.** The pre-existing −1.27px at 1024 stays.
- **The column is RE-DERIVED, not assumed.** PASS A's column 8 / band 2 column 9 came from the
  one-empty-column rule against the old size. Same rule, report what it now gives, and report
  the 1920 gap and the 1280 / 1279 continuity.
- **Paragraph line counts are OUTPUT, not constraints.** PASS A asserted paragraph 1 at ≥3 lines
  and ≤74 characters; a wider lede does not touch the body's 670px cap, so those MUST still
  hold. **If they move, STOP** — that means the change reached further than the lede.

**3. Orphans — MEASURE FIRST, and change nothing unless one exists.** Reported at wide width
and not at narrow, which is expected: line count changes the remainder, so a paragraph that
breaks cleanly at 1280 can strand a word at 1920. **A short last line is not an orphan. A single
word alone on a last line is.** Count them across all thirteen widths in About and report the
count with the line. **Only if a true single-word last line exists**, apply `text-wrap: pretty`
to body paragraphs and re-verify PASS A's assertions. **MUST NOT insert a `<br>`** — this file
records a `<br>` proposal that would have forced breaks at five widths where the string fit.
**If `pretty` moves paragraph 1's line count or its 74-character maximum, STOP AND REPORT.**
This change is **scoped to itself**: a stop here MUST NOT stop 1 or 2.

**What this still does not fix:** the band below the section, which has never been measured and
may be About's padding or the next section's. **Do not write a slice for it from a screenshot.**

### Post-launch motion rounds — Round A and Round B

Six mechanisms were proposed together. They are grouped into two rounds rather than one
pass, because they are six mechanisms in six files and a combined pass would land the easy
four well and the hard two badly. Motion is also the one thing that cannot be measured into
correctness: if the page reads busy or cheap with six new moving elements, there is no way
to attribute it. R9 cost nine passes and it was one section.

**Round A — the peak (R16 + R17).** The masthead and the Feature Quote scrub. Different
regions of the page, so they cannot interfere, and together they answer the only question
that matters: does the page have a peak now. **If Round A succeeds, Round B may not be
needed at all.** Do not schedule Round B until Round A has been reviewed on localhost.

**Round B — the texture (R18).** Lede wipes across the seven type-openers, the R9.6 plate
frame drawing itself, ghost numerals drifting in the margin band, and the Index rows
staggering in. All four are entry animation on the same mechanism, so they genuinely belong
in one pass and must be tuned against each other. **Expect conflict:** lede wipe, numeral
drift and row stagger can all fire on the same section entry. That is the reason this round
exists as a unit rather than as four slices.

> **ROUND A REVIEWED AND ACCEPTED, September 9 2026. ROUND B IS SCHEDULED.** The gate above
> said Round B may prove unnecessary if Round A succeeded. Jackson reviewed R16 and R17 on
> localhost and ruled that the page should go further: **texture is wanted, and R18 runs.**
> Round B is no longer conditional.
>
> **What R18 is being asked to do, stated plainly so a later session does not over-read
> it.** R18 is *texture*, not *structure*. It makes the page feel crafted as it is scrolled
> through. **It does not change the composition**, and composition is what the diagnosis of
> September 8 named as the reason the page read quiet — everything at one size, gold
> rationed to three uses, nothing bleeding. R15 broke the one-size problem in a single
> section. The rest of that read is still on the table and still undismissed. **R18
> succeeding does not close it.**
>
> **The four-in-one-pass structure has a cost that has to be accepted before the round
> runs.** The working agreement is vertical slices, one thing end to end, and R18
> deliberately breaks it because lede wipe, numeral drift and row stagger fire on the same
> section entry and cannot be tuned apart. The consequence: **if the result reads busy or
> cheap, attribution is hard.** The correct response is to kill one of the four, not to
> tune all four. Decide which one is load-bearing before starting: the lede wipes are the
> round's spine; the other three are ornament on top of it.
>
> **The 21st.dev letter-roll is now retired, not merely unruled.** R16 measured the case
> against it: the masthead name is 26.66px in a 56px bar, and a per-character roll there is
> motion at a size nobody reads it at. Do not re-propose it for the masthead. It is not a
> candidate for the Index rows either — R13.1's native implementation already owns that
> interaction and does more.

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

> **One scoped exception, ruled by Jackson September 8 2026 (R13).**
> `font-variation-settings` may be transitioned on **Index entry names only**, and nowhere
> else on the page. It is a layout-affecting property, so the exception is **conditional on
> a measured pass**: at all thirteen widths, row height MUST NOT change between rest and
> hover, and the hovered name's right edge MUST NOT collide with the `+` affordance on
> entry 04. **If the measurement fails at any width, the exception is void and the hover is
> removed** — it is not rescued with a tuned constant. Do not extend this exception to any
> other element, section, or property without a new ruling.


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
> **CORRECTED September 16 2026. "N is 3 at every width on the page" IS FALSE, AND HAS BEEN
> SINCE 1920 JOINED THE VERIFICATION LIST.** Measured two independent ways on the built
> working tree: **About's paragraph 1 renders TWO lines at every width from 1807 up**, 1920
> included. The three-line cap therefore **hangs 21.00px below its own paragraph at 1920 and
> clears paragraph 2 by 4.50px** — precisely the failure case the drop-cap rule exists to
> prevent, shipped and unnoticed. The R3 census above runs from 1440 downward and **1920 was
> never in it**: R8.2 added the width to the verification list and no census that predates
> R8.2 was re-run against it.
>
> **The cause is the measure, not the cap.** Band 1 gives About's body columns 1–6, which is a
> FLUID window: 644px at 1440 and **884px at 1920, about 98 characters against this file's own
> enforced 78-character maximum.** Nothing caps it above 1440. Shrinking the cap does not fix
> it, because lines 1 and 2 sit beside the cap in every version and their wrap is unchanged —
> verified by applying the N=2 values in a test page at 1920, where both lines still sat beside
> the letter and nothing ran underneath. **Pass A caps the measure; the cap follows from it.**
>
> **THE STANDING LESSON, AND IT IS GENERAL.** A width added to the verification list does not
> retroactively verify anything. **Every census that predates the addition MUST be re-run
> against the new width, or it certifies a build that is already failing there** — which is
> the exact argument R8.2 made when it added 1920, applied to itself and found wanting. Two
> censuses predate it: the drop cap's N table and the 78-character ceiling. Both were wrong
> above 1440 for three months.
>
> **CLOSED September 16 2026 by Pass A. N IS 2, AND THE MEASURE IS CAPPED.** `--cap-size` is
> now written from the body tokens rather than typed (`(30.6 + 0.7 x 17) / 0.7` = 60.714px),
> `--cap-lh` is unchanged at 0.72058, and `--cap-top` is **solved against Chrome's rounded
> baseline rather than the smooth one** — see the Pass A entry, which carries the model and the
> proof. **One set of values at every width. No band, no lookup**, which is the shape this rule
> exists to enforce. **The N table above is history and its conclusion is void.**

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

**React is registered for islands only (R0, September 9 2026).** `@astrojs/react` is
installed alongside `react`, `react-dom` and `framer-motion` so that selected animated
components can be adapted from 21st.dev. **The ten sections stay `.astro` and are not
converted.** Three constraints, each derived in R0:

> **`@astrojs/react` MUST stay pinned at `^4.4.2`.** npm's default resolves v6, which
> targets Astro 6 and pulls top-level Vite 8 + rolldown while this build runs Astro 5.18.2
> on nested Vite 6.4.3. Its `vite-react-refresh-wrapper` rolldown builtin crashes inside
> the Vite 6 pipeline (`Missing field moduleType`), the JSX transform never runs, and SSR
> fails with `React is not defined`. **`npx astro add react` reintroduces v6** — do not run
> it in this project.
>
> **Islands hydrate on `client:media` with `(hover: hover) and (pointer: fine)`,** not
> `client:visible`. Both are defensible for a below-the-fold component, and the media gate
> is the one that agrees with "below 1280 the page has no motion at all." It also keeps
> islands off the folio's scroll monopoly.
>
> **A clean build emits an unreferenced React chunk in `dist/_astro/`** (~224 KB at time of
> writing). No HTML references it, so visitor page weight is unchanged, but it does deploy.
> Accepted. Without the integration, `dist` contains zero JS.

**`screenshot.mjs` is non-deterministic at `deviceScaleFactor: 2` (R0).** Three runs against
a completely unchanged build produced differing PNG hashes at the same width, alternating
between two stable states. Blocking Turnstile does not remove it; it disappears at
`deviceScaleFactor: 1`. **Byte-identical capture MUST NOT be used as a pass criterion until
this is fixed** — a matching hash is not evidence of safety and a differing one is not
evidence of disturbance. Use instead: page height per width, dev-server HTML byte count, and
`dist/index.html` byte count, all of which discriminated correctly in R0.

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
- Recipient **`mcclain@premierleadersllc.com`**, client decision September 7 2026,
  superseding `premierleadersllc@gmail.com`. **Everyday Legends Foundation inquiries route to
  `info@everydaylegend.com`**; routing by `<select>` value is a Formspree account setting, not
  a build task. C1 carries the displayed address and the `mailto:` fallback only.
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

**Privacy policy:** required standard deliverable (CalOPPA). **Drafted and built September 16
2026.** Copy lives in **`PRIVACY.md` at the repo root**, a third governing file beside this one
and `COPY.md`, and it inherits `COPY.md`'s **set-verbatim** rule. It names the contact form as
the only collection point and names Formspree, Cloudflare and Vercel as the processors.
**Responsible party is Dr. Syreeta McClain personally, not Premier Leadership, LLC**, and the
voice is "we" because inquiries route to two organisations. **MUST NOT be replaced by the
Anchor Digital policy**, which is scoped to a different domain and describes a portal, billing
and portfolio permissions that do not exist here. Client supplies and warrants her own
data-practice details. **Not published while the TEST sitekey ships.**

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
| R11 | `/privacy` | **SHIPPED AND ACCEPTED September 16 2026 as PASS B**, corrected by **PASS B.1**. One static route, one column, Porcelain throughout, **no masthead and no folio** (`sections.ts` gains no entry, the folio tracks sections that do not exist there), **zero JavaScript**, copy set verbatim from `PRIVACY.md`, measure capped at About's `39.4118em`. **The standfirst is the way home**: her name links to `/`, since `PageFooter` carries no link back. B.1 corrected two defects in the brief rather than the build — the standfirst was left in the display tier so metadata outweighed the opening statement, and `.mast-home`'s hover-only treatment gave the link no resting affordance outside a 56px bar. **Reported and not fixed:** on this route the footer's own privacy link points at the current page; `PageFooter` is shared and a self-link is not worth a hub regression. **C-PRIV pending** — `PRIVACY.md` gained three sections after the build. |
| R12 | Folio marginalia | **Shipped September 8 2026.** `FolioMarginalia.astro` mounted, single scroll listener wired. Horizontal stability, active-section accuracy, quiet-over-pivot, and label integrity against every `<h2>` all verified and reviewed by Jackson on localhost at 1440 and at the 1280 collapse edge. Zero layout regression on the nine prior sections. |
| R13 | Index row hover (weight shift) | **Shipped September 8 2026, and it is too quiet to see.** Built at `wght` 400 → 420 because 420 is `--fx-small`, the heaviest weight in the shipped optical system. All five criteria passed comfortably (0.00px row-height delta, 95.77px tightest `+` clearance, 0.00px left edge, 533-quantity zero-delta) precisely because a 20-unit move barely displaces anything. Correctly refused to exceed the system ceiling without a ruling. **Superseded by R13.1.** |
| R13.1 | Index hover, widened | **Ruled by Jackson, September 8 2026: the 420 ceiling does not bind this interaction.** `wght` 400 → 700 on Index entry names ONLY; the ceiling is not raised anywhere else. Adds two counterweights so the row reads whole: the numeral shifts on the same hover, and the hairline rule thickens without changing row height. **Re-measure everything** — travel at 700 will be an order of magnitude past the 0.67–1.29px measured at 420, and the span-splitting kerning cost (0.09–0.27px at rest) scales with weight. The exception's failure condition is unchanged: fail items 1, 3 or 4 at any width and the hover is removed, not tuned. |
| R14 | Contact on Obsidian | **Shipped September 9 2026.** The page closes dark. Four measured ink tiers in one `.on-obsidian` block, mirroring the light ground's hierarchy factor rather than its hue. Focus ring re-derived: **13.43–13.58:1 measured** against 1.4.11's 3:1 (Smoked Slate, the naive port, is 1.60:1). `.btn-solid` inverted in a scoped rule; the global primitive and the page's other three buttons are untouched. Anchor's mark re-derived to **4.68:1**, `currentColor` mechanism intact. Gold **3 of 3 / 0 of 8** — zero spent. Seam 0.00px. All twelve Phase F items re-verified; **nine of ten sections and the footer 0.00px at all thirteen widths.** Fixed two pre-existing failures found by the re-derivation (field underlines 1.89:1, agency credit 3.21:1). **Introduced one defect, reported not fixed — the folio.** |
| R15 | Everyday Legends opener | **Type half shipped September 9 2026; photograph half STOPPED and not built.** The opener leaves the shared lede pitch at the geometric mean of lede and pivot — one derived constant, √2.053 = 1.4329, from R7's own measured step — floored at `--lede-size` so it can never set smaller than its siblings and capped so it can never approach the pivot. `--quote-size` promoted to a token per R8.2; `FeatureQuote.astro` consumes it, rendering byte-identical at all thirteen widths. Lede window 4–9 → 4–11, which is `.win-edu-lede`'s existing window, not a new one. **All 143 section × width left-edge sets byte-identical.** The photograph requirement was refused against four rules in this file; see the R15 entry. |
| R16 | Masthead | **SHIPPED September 9 2026 (Round A).** A 56px bar arrives as the Cover clears and withdraws on scrolling back, carrying her name at `--lede-size` taken one full R7 step DOWNWARD (`--lede-size x --pivot-scrub-from`, 0.487-0.521 x a lede) plus a jump to the Index. **CSS scroll-driven animation; no listener and no second listener** — exactly one `addEventListener('scroll')` in `src/` and in `dist/`, R12's folio, unchanged. Height is `2 x --baseline`, the smallest whole multiple of the page's own unit that holds the name's ink (39.44px at its largest). **Zero rendered pixels over the Cover at every band-1 width**, measured at the last scroll position the Cover occupies. Entry-animation pattern verified by rendered state, not by reading code: JS disabled, `js-motion` stripped, `@supports` unsatisfiable and `prefers-reduced-motion: reduce` all render `display: none` and the page exactly as R15/R17 shipped it. **Page height, all ten section tops and heights, the footer and 130 left-edge sets: 0.000px at all thirteen widths.** Gold **3 of 3 / 0 of 8** — zero spent. Two measured failures found and fixed inside the round: a transform silently degraded `background-attachment: fixed`, and `scroll-margin-top` landed the jump inside the pivot's withdrawal zone. **The bar does not print on the Obsidian spreads** — new behaviour, reported. |
| R17 | Feature Quote scrub | **SCALE HALF SHIPPED September 9 2026 (Round A). TRACKING HALF STOPPED — it conflicts with a standing rule and needs a ruling; see the R17 entry.** "Legacy" enters at the page's shared lede pitch and grows to the pivot's, scrubbed on `animation-timeline: view()` with **no listener and no second listener** — the start scale is `--lede-size / --quote-size`, a live ratio of two existing tokens, 0.4872 at 1440, which is R7's own measured 2.053× step taken in one move. Band 1 only; **scale is 1.000 at 1279, 1024 and 390**. Entry-animation pattern verified by measuring rendered ink, not by reading code: **JS disabled 270px, `@supports` unsatisfiable 270px** — both the finished size. **Page height, all ten section heights and tops, and 507 left-edge cells: 0.000px at all thirteen widths.** Gold **3 of 3 / 0 of 8** — zero spent. The 390/360 pivot-under-lede defect is **unchanged at 0.846**. |
| R18 | Round B — texture | **THREE OF FOUR BUILT September 9 2026; REVIEWED AND NOT ACCEPTED. See the R18 entry.** Lede reveals (React island, per-line, **0.000px split delta** against R13's 1.34–4.36px for per-character) and the plate frame draw and Index row stagger (both CSS — React would add an `<astro-island>` and no behaviour). **Ghost numerals STOPPED and still unruled**: new marginalia is composition, the ghosted-monogram mechanic needs explicit sign-off, a margin numeral is a fourth numbering device against three that MUST NOT agree, and R12 deleted `RunningHead.astro` for exactly this. Listener count held at 1 in `src/` and 1 in `dist/`; `framer-motion` installed but never imported and absent from `dist`. Page height, ten section tops and heights, footer and 3,799 left-edge cells **0.000px at all thirteen widths**, dev and preview. Gold **3 of 3 / 0 of 8**. **+226 KB of JS on band-1 desktop, 0 bytes on touch.** |
| R18.1 | Round B correction | **Measured September 10 2026. Four items closed, two stopped and reported, one refused.** Items 1 and 2 needed no repair — the fix was already in the uncommitted working tree; the ledes measured 71.13px of travel advancing on a real ViewTimeline, and all four plate curtains draw (the fifth plate is the Cover, excluded on a re-measured **55.6% floor** on its reachable cover progress). **Item 3 is provably unsatisfiable by any range** — intersecting the viewport *is* `0 < q < 1`, so finishing every intersecting element requires zero travel; measured 9 failures at `cover 15%->50%` against 3 at `entry 100%`, bought by moving Index completion from 45% to 88% of viewport, which is the bottom-trim failure returning. Three routes proposed, none picked. **Item 4 is Item 3's symptom** — all five rows byte-identical at rest at every width. Item 5 built: `--pivot-scrub-start`, the step squared, seating the entering word at `--mast-name-size` to **0.00px** at all three band-1 widths, travel 3.686-4.213x, left edge / baseline / h2 height **0.000px** at all thirteen — **and measurably not the lever: the word is below the fold until entry 57-64%, so the whole first half of the scrub plays unseen.** `--pivot-scrub-from` deliberately NOT redefined; R16's masthead name consumes it as one rung and squaring in place would have shipped 12.99px under WCAG's 24px floor. Item 6 verified (`smooth`/`auto` on `reduce`, 0px landing error, masthead clean at both boundaries). Item 7 preserved — row height **0.000px**, `+` clearance **96.50px** at rest. Listeners 1 and 1; 533 left-edge cells 0.000px under stripped and reduce, **dev and `astro preview`, and 0.000px dev against built**. |
| R18.2 | Two mechanisms removed | **SHIPPED AND ACCEPTED September 10 2026.** Jackson's fourth route on Item 3: remove the mechanism from the affected sections rather than suppress it on arrival. The **Index row stagger** and the **Contact lede reveal** both came out. The census answered the open question and the stop condition did not fire: Contact's lede is **three lines and masked at 1920, 1440 and 1280 alike**, never single-line, so no part of the removal was a no-op. **Seven masked ledes before, six after**, and the earlier "eight wired, seven animating" figure was corrected to seven wired in the same pass. Below 1280 no lede was ever masked, the island's own `min-width: 1280` gate. **All four removal targets existed on disk and were absent from `HEAD`**, so R18.1's repo lesson held a second consecutive round. **The Index carried ten animated targets, not five**: five `.idx-num` and five `.idx-body` on `--idx-row` at `cover 15% -> 50%`, with the clip `inset(0px -32px)` on `.idx-item`; clip, stagger and hover were confirmed separately owned before anything was cut. **Nothing moved**: page height, ten section tops and heights, footer and 533 left-edge cells **0.000px**, four conditions x thirteen widths, dev and `astro build` + `astro preview`, Index row heights 0.000px on every row at every width. The one number that should have moved did: ink-to-rule at scroll 0 shifted **84px at 1920 and 1440, 74.88px at 1280, exactly `3 x --idx-name-size`**, the removed `from` keyframe. `astro-island` count in `dist` **8 -> 7**. Listeners 1 and 1, JS weight delta 0. Gold 3 of 3, 0 of 8. **Residue knowingly left. The 7 / 3 / 3 recorded here is a snapshot of the mechanism as it stood, counting masked ledes; it was retired September 11 2026 and re-measured at 21 / 24 / 25 after the ledes moved to transform. Covered by R19's constraint 7, built and measuring 0 frozen at all three widths.** |
| R18.3 | Masthead name link | **SHIPPED AND ACCEPTED September 11 2026.** `.mast-name` wrapped in `<a class="mast-home" href="#top" aria-label="Back to top">`; the span, its class, its text and its `aria-hidden` are byte-identical. **`display: flex` on the anchor is load-bearing**: the span was a direct flex item of `.masthead` and was blockified, and an inline anchor would generate a line box sized by the ANCHOR'S strut rather than the name's. Colour and underline neutralised explicitly against the UA sheet. Hover 0.7 / active 0.55 at 260ms, opacity only, chosen over `.mast-row`'s treatment because opacity is scale-free and survives the 10.5px-to-26.66px tier gap; `focus-visible` is R16's ring exactly. **Name ink 0.000px on all four metrics at 1920 / 1440 / 1280**, taken from a Range over the text node rather than the element box, and **the rest-state captures are byte-identical before and after** at all three. Page height, ten section tops and heights, footer and **1,885 left-edge cells 0.000px at all thirteen widths**, zero non-zero. Listeners 1 and 1, islands 7, `dist` JS **226,474 before and after**. `#top` verified to land at scrollY 0, match no `:target` and resolve to no element. Accessible name `Back to top`, reached at Tab #1. **Third harness fault found and fixed: Puppeteer's `clip` is page-relative, so the first capture pass photographed the Cover and returned six byte-identical images.** Focus ring overhangs the viewport top by 5px, byte-identical to `summary.mast-jump`'s, matched rather than introduced. |
| PASS A | About: measure, drop cap, closing line | **SHIPPED AND ACCEPTED September 16 2026.** Three changes in one round because they interact. **The measure is capped at `max-width: 39.4118em` (670px), overriding this file's span-only rule for About alone on Jackson's ruling** — no span solves band 1, which has no breakpoint above 1280. **670 was swept 1px at a time**: paragraph 1 holds 78 characters to 708px under the new cap but **paragraph 2 only to 670**, and 670 is also the measure the 750px threshold already carries, reached independently. **The cap is two lines**, size written from the body tokens at 60.714px, **margin-top solved against Chrome's ROUNDED baseline** `round(asc) + floor(half-leading)` rather than the smooth one — the model is proven on the body's own 21.000px and the 0.749px it predicts IS the measured miss. **Baseline 0.000px and cap-top −0.256px at all thirteen widths**, not the three required. **The closing line moved to column 8 / band 2 column 9** on a derived one-empty-column rule, cutting the 1920 gap 478 → 389 and holding 122px continuous across the 1280/1279 boundary; R2's bottom-alignment identical to the hundredth. Paragraph 1 now ≥3 lines and ≤74 characters everywhere, counted two agreeing ways. **Nothing else moved**: 0.000px on every other section, 1,807 left-edge cells, thirteen widths. Listeners 1/1, islands 7, JS 226,474 unchanged, gold 1/0 unchanged. **Reported and not fixed: every other section's body overruns the ceiling at 1920** (84 / 83 / 80 / 85 / 102). **Open: the 1920 gap is 389px, not one column** — reopened and re-diagnosed by PASS D, which found the cause is About's own composition (its lede stops halfway and its right column is near-empty) rather than the page's width. |
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
- **`CONTEXT.md`, `COPY.md` and `PRIVACY.md` are hand-maintained and are NEVER edited by Claude
  Code.** A prompt's modified-file stop therefore **MUST exclude all three** and cover `src/`,
  `public/` and config only. B.1 stopped a whole round on `CONTEXT.md` being dirty, which it
  always is.
- **A missing section in a warm dev server is a cache report, not a measurement.** Clear
  `.astro` and the Vite cache and load cold before treating any disappearance as a regression.
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
