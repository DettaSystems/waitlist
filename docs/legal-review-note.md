# Legal review request — Detta waitlist pages (Privacy, Terms, Trust & Safety)

**To:** Reviewing counsel
**Re:** Three public-facing pages drafted for the detta.us pre-launch waitlist
**Status:** DRAFT — not published. None of these pages is linked from the live site; nothing goes live until you approve and we remove the draft banners.

---

## 1. What these are

Three pages for the **detta.us** pre-launch *waitlist* (not the product):

| Page | What it is | URL when published |
|---|---|---|
| Privacy Policy | How the waitlist handles information; full consumer-rights framework | `/privacy/` |
| Terms of Use | Terms governing use of the waitlist site | `/terms/` |
| Trust & Safety | Plain-English FAQ answering "is Detta legit / a scam / does it hold my money" | `/trust/` |

They are **scoped to the waitlist only** — which collects just an email (plus optional first name, a general debt category, and a non-binding estimated amount). No accounts, no payments, no SSNs, no bank credentials, no credit pulls. When the product launches it will need its own separate, fuller terms.

## 2. How they were drafted

Drafted from comparable debt self-help products (**Upsolve**, **SoloSuit**) and the 2026 U.S. state-privacy landscape (20+ comprehensive state laws now in effect), then scoped down to the waitlist's minimal data and the **self-help-software positioning** (not a debt-settlement/relief/credit-counseling entity; no escrow; "not an offer of securities"). They are **non-attorney drafts for your finalization** — a strong starting point, not legal advice.

## 3. Decisions we need from you

These appear in the pages as highlighted `[FIRM TO CONFIRM: …]` placeholders. Consolidated:

### Facts to fill in (both Privacy + Terms)
- [ ] **Legal entity name** (e.g., "Detta Systems, Inc.") — appears on all three pages
- [ ] **Business mailing address** (Privacy contact + Terms notice + CAN-SPAM)
- [ ] **Effective / "last updated" date** for each page

### Terms — legal elections
- [ ] **Dispute resolution (Section 13).** Left intentionally open. Do we want **binding individual arbitration with a class-action waiver** (as Upsolve and SoloSuit use), or court litigation? If arbitration: administrator/rules, seat/venue, opt-out window, and confirmation it's enforceable in our governing-law state.
- [ ] **Governing-law state and venue** (Section 14)
- [ ] **Limitation-of-liability cap** (Section 11) — e.g., greater of amounts paid or $100, or another figure

### Privacy — confirmations
- [ ] **Data retention period/schedule** (Section 7)
- [ ] **Definitive list of applicable state privacy laws** + any state-specific response-timing / appeal language (Section 9.2)
- [ ] **Material-change notification method** (Section 14) — e.g., email to waitlist members
- [ ] **Email-delivery provider** name, once a nurture sequence is added (Section 5)

## 4. Substantive points worth your eye (judgment, not placeholders)

1. **Classification risk — the core issue.** Every page is written to keep Detta as *self-help software* and **out of** the debt-settlement / debt-relief / credit-counseling / CRO categories (and the state-licensing regimes that attach to them). Please confirm the public-facing language holds and flag anything that reads as a regulated service. The Trust page also now notes that **availability may vary by state**, to support feature-gating.
2. **"Not an offer of securities"** appears in the Terms disclaimer and footers, consistent with the platform's positioning — confirm placement is sufficient.
3. **Email consent / CAN-SPAM.** Terms §4 captures consent to waitlist emails; every send includes one-click unsubscribe. No phone number is collected on the waitlist, so TCPA/SMS terms were intentionally omitted — confirm that's correct for this stage.
4. **Analytics.** The site now uses Plausible (cookieless; no IP stored; no cross-site tracking), disclosed in Privacy §3/§6. Confirm the description is accurate and sufficient; we believe no cookie banner is required.
5. **Children.** Pages state 18+ and no knowing collection under 16/18 — confirm.
6. **Indexing.** Privacy and Terms are currently set to `noindex` while in draft; the Trust page is indexable (it targets "is Detta legit" searches). Confirm you're comfortable with the Trust page being indexed once approved.

## 5. What happens after you approve

Engineering will, in one change:
1. Fill every `[FIRM TO CONFIRM]` value you provide.
2. Remove the DRAFT banner from each page.
3. Set the effective date.
4. Flip Privacy + Terms to `index, follow`.
5. Repoint the live footer's email links to `/privacy/`, `/terms/`, `/trust/`.

Then the pages go live on the next deploy.

## 6. Where to read them

All three are in pull request **#3** (`draft-legal-pages`) on `DettaSystems/waitlist`. Review on GitHub, or open the files directly:
- `privacy/index.html`
- `terms/index.html`
- `trust/index.html`

*This note and the drafts were prepared to assist review and are not legal advice.*
