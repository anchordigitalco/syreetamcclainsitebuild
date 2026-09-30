# Privacy Policy — drsyreetamcclain.com

Draft, September 16 2026. Written for this site specifically. **This is not the Anchor
Digital policy and must not be replaced by it**: that one is scoped to anchordigitalco.com,
names Anchor as the party collecting the data, and describes a client portal, billing and
portfolio permissions that do not exist here.

**Responsible party: Dr. Syreeta McClain**, personally, ruled September 16 2026. Not Premier
Leadership, LLC. `COPY.md`'s rule keeping the LLC suffix to one place on the site is unaffected,
because this page does not use it.

**Voice: "we", not "I."** She is the responsible party, but the contact form routes to two
different organizations and the first person singular breaks the moment a Foundation inquiry is
involved.

**The date is set, not blank.** `[[DATE]]` is resolved to **September 16 2026** and written
into the copy below. "Last updated" means last changed, so it is the date the policy last
changed and **not** the launch date. It moves only when this file's page copy moves. **The
build sets copy verbatim, so the literal date MUST live here rather than as a token the build
substitutes.**

**One condition remains, not a blank.** The contact address is `mcclain@premierleadersllc.com`
per her September 7 decision. **If that mailbox fails its delivery check, this page reverts to
`premierleadersllc@gmail.com` along with the Contact section.** The two must never disagree.

Not legal advice. One pass by an actual lawyer would be cheap insurance.

---

## Page copy

**Title:** Privacy Policy
**Standfirst:** Dr. Syreeta McClain. Last updated September 16 2026.

**Opening statement:**
> This site collects almost nothing. Here is exactly what it does collect, where it goes, and
> what you can ask us to do about it.

### What this site is

> drsyreetamcclain.com is a set of static pages. There are no accounts to create, nothing to
> buy, no advertising, no analytics, and no tracking cookies. You can read every page on this
> site without giving us anything at all.

### Do Not Track

> Some browsers send a Do Not Track signal, and some send a Global Privacy Control signal,
> asking a site not to follow you from one website to the next. This site does not follow you
> anywhere, and no advertiser or analytics service watches you here, so there is nothing for
> those signals to switch off. We honor them.

### What you can give us

> The only place this site accepts information is the contact form. It asks for four things:
> your name, your email address, the type of inquiry you are making, and your message. That
> is the whole list. We do not ask for anything else and we do not collect anything else from
> you.

### Where an inquiry goes

> When you send the form, it is handled by Formspree, a form processing service, which
> delivers it to us by email. Inquiries about the Everyday Legends Foundation go through the
> [contact form](/#sec-contact) to the Foundation, because it is a separate organization. Every other
> inquiry goes through the [contact form](/#sec-contact) to Dr. McClain.
>
> We use what you send us to answer you. That is all. We do not sell it, we do not share it
> for advertising, and we will not add you to a mailing list.

### Spam protection

> The contact form uses Cloudflare Turnstile to tell a person from a bot. There is no puzzle
> to solve. Your browser sends Cloudflare technical signals about the request so it can make
> that judgment. Cloudflare's own privacy policy governs what it does with them.

### Hosting

> The site is hosted by Vercel. Like any web host, Vercel records standard technical
> information about requests, including IP address, browser type, the page requested, and the
> time. This keeps the site running and secure. We do not use it to build a profile of you.

### How long we keep inquiries

> We keep messages for as long as we need them to respond and to keep a reasonable record of
> the conversation. If you would like your message deleted, write to us and we will delete it.

### How your message is held

> This site keeps no database and has no accounts, so nothing you send is stored on the site
> itself. Your message lives in the same protected mailboxes as the rest of our
> correspondence, and only the people who need to answer you read it.

### Your choices

> You can ask us what information we hold about you, ask us to correct it, or ask us to delete
> it. Write to us through the [contact form](/#sec-contact) and we will take care of it. Some information may need to
> be kept where the law requires it.
>
> If you live somewhere with specific privacy laws, including the European Union and
> California, those laws may give you additional rights. We honor them where they apply.

### Children

> This site is not directed to children under 13 and does not knowingly collect information
> from them. **No student information is collected through this site**, and nothing here is
> connected to any school or district system. If you believe a child has sent us information,
> write to us and we will delete it.

### Links to other sites

> This site links out to premierleadersllc.com, everydaylegend.com, the district website, and
> the McClain brothers' sites. Those are separate sites with their own privacy practices. Read
> theirs before sharing anything with them.

### Changes

> If this policy changes, we post the new version on this page and change the date at the top.
> There is no mailing list here, so this page is the notice. Check the date to see whether
> anything has moved since you last read it.

### Contact

> Questions about this policy, or about information you have sent us? Write to us through the
> [contact form](/#sec-contact).

---

## Build notes

- **This copy lives in `PRIVACY.md` at the repo root**, beside `CONTEXT.md` and `COPY.md`, and
  inherits `COPY.md`'s rule: **set verbatim, rewording is not permitted.** It is deliberately
  not inside `COPY.md`, for the same reason `COPY.md` was split out of `CONTEXT.md`: hub copy
  passes do not need legal text and the privacy pass does not need hub copy.
- **`COPY.md`'s Page Footer section needs one pointer line** saying the privacy page's copy
  lives in `PRIVACY.md`, so its absence is not read as an oversight.
- The Children section is worth keeping even though it is boilerplate elsewhere. She is a high
  school principal, the site discusses students, and the sentence stating that no student
  information is collected is the one a district reader would look for.
- **Do Not Track is the one disclosure CalOPPA names by title.** The obligation attaches to
  sites that follow a visitor across third-party sites, which this one does not, so it very
  likely does not bite. It is one section and it is what a reader checking compliance looks
  for. **Do not delete it to save a heading.**
- **The Changes section is the notification process**, not a courtesy. CalOPPA asks an operator
  to describe how it tells people the policy changed; a bare date change is thinner than that,
  so the section says the page itself is the notice.
- **`How your message is held` is the smallest honest security statement.** Every claim in it
  is structural: no database, no accounts, mailbox sign-in. **MUST NOT be expanded into
  encryption or security-practice claims** — this is the over-promising the client-data note
  warns about, and it is the one section here that could be made false by writing more.
- **Three sections were added after the September 16 build.** `/privacy` was built from the
  earlier version, so its `<h2>` sequence is now short by three and the Changes body no longer
  matches. **The page needs one more copy pass**, string-set and byte-compared, no layout work.
- **Verify Vercel Analytics and Speed Insights are off** before this page ships. The copy
  states there are no analytics, and both are opt-in products on the hosting account rather
  than in the repo, so the repo cannot prove it.
- The Cloudflare and Formspree sections are only accurate once the real keys and the real form
  endpoint ship. **Do not publish this page while the TEST sitekey is still live**, because it
  would describe protection the site does not yet have.
