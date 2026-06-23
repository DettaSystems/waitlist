# Owner checklist — making detta.us findable

Plain-English, in order. These are the steps **only you can do** (they need accounts, logins, or your firm). Each says *what*, *where*, and *how long*. Check items off as you go. Full reasoning is in [SEO-GAMEPLAN.md](SEO-GAMEPLAN.md).

The prep work is already done and waiting in four pull requests:
- **PR #1** — the technical fixes (structured data, fixed share image, robots/sitemap)
- **PR #2** — the strategy document
- **PR #3** — DRAFT Privacy / Terms / Trust pages (for your firm)
- **PR #4** — this checklist + the outreach kit

---

## This week

### 1. Merge the safe PRs ☐
- **What:** Merge **PR #1** and **PR #2** on GitHub. (Each "Merge pull request" button publishes to the live site within ~1 minute.)
- **Why:** PR #1 fixes the broken social-share image and makes Detta legible to Google and AI engines. PR #2 is just the plan (no site change).
- **Leave PR #3 and #4 for now** — #3 needs your firm (step 7); #4 you can merge once #2 is in.
- **Time:** 5 minutes.

### 2. Confirm the fixes went live ☐
- **What:** After PR #1 merges, check three things:
  1. Visit `https://www.detta.us/og-image.png` — you should see the teal "Detta" image, **not** a "page not found".
  2. Paste `https://www.detta.us/` into the **Facebook Sharing Debugger** (developers.facebook.com/tools/debug) and click "Scrape Again" — the preview card should show the image.
  3. Do the same in the **LinkedIn Post Inspector** (linkedin.com/post-inspector).
- **Why:** Confirms every future share (and your launch posts) shows a real preview.
- **Time:** 10 minutes.

### 3. Validate the structured data ☐
- **What:** Paste `https://www.detta.us/` into **validator.schema.org** and confirm it reports the Organization / WebSite / SoftwareApplication / FAQ blocks with no errors.
- **Why:** This is what tells AI engines what Detta is.
- **Time:** 5 minutes.

### 4. Turn on website analytics ☐
- **What:** Create a free account at **Plausible** (plausible.io) or **Fathom** (usefathom.com) for `detta.us`. Then, in `index.html`, find the commented "ANALYTICS" block in the `<head>` and uncomment the one line for your provider. Commit that change.
- **Why:** Right now you can't see how many people visit or which channel sends them. These are privacy-friendly (no cookie banner needed).
- **One extra step:** add a one-sentence "we use privacy-friendly analytics" line to your privacy policy when it's published (step 7).
- **Time:** 20 minutes.

### 5. Set up Search Console + Bing ☐
- **What:**
  1. **Google Search Console** (search.google.com/search-console) → add a **Domain** property for `detta.us` → verify by adding the one DNS TXT record it gives you → submit `https://www.detta.us/sitemap.xml`.
  2. **Bing Webmaster Tools** (bing.com/webmasters) → "Import from Google Search Console" (auto-verifies) → turn on its **AI Performance** report.
- **Why:** Your only window into whether people find Detta — and whether AI engines cite it.
- **Time:** 25 minutes (you'll need access to wherever detta.us's DNS is managed).

---

## Next 2–4 weeks

### 6. Claim the brand profiles ☐
- **What:** Create official profiles on **LinkedIn (Company Page)**, **Crunchbase**, and **X**. Use the exact name, description, logo, and disclaimer from [outreach/brand-kit.md](outreach/brand-kit.md) — identical everywhere.
- **Then:** send me (or your developer) each profile URL so they get added to the site's `sameAs` list, and set each profile's website to `https://www.detta.us/`.
- **Why:** AI engines confirm a brand is real and consistent before citing it. This is the #1 long-term lever.
- **Skip:** Google Business Profile (online-only products are ineligible).
- **Time:** ~1 hour.

### 7. Get the legal pages reviewed (parallel track — start now) ☐
- **What:** Send **PR #3** (the DRAFT Privacy / Terms / Trust pages) to your firm. They need to:
  1. Resolve every yellow `[FIRM TO CONFIRM: …]` placeholder (legal entity name, governing-law state, effective dates, retention period, applicable state privacy laws, launch pricing).
  2. Remove the "DRAFT" banner from each page.
  3. Flip Privacy and Terms from `noindex` to `index, follow`.
  4. Ask your developer to repoint the footer links (currently email links) to `/privacy/`, `/terms/`, `/trust/`.
- **Why:** Real published policy pages are a documented trust signal for a money-related site — and the Trust page answers the "is Detta legit?" searches.
- **Time:** your firm's review + ~15 min of edits.

### 8. List Detta in software directories ☐
- **What:** Create profiles on **AlternativeTo**, **G2**, **Capterra**, and **TrustRadius**. Always pick a **software** category (personal-finance / budgeting / debt-management software) — **never** "debt settlement." Use the brand-kit copy. **Reserve** a Trustpilot profile but add **zero** reviews.
- **Why:** These feed AI answers and build the entity.
- **Rule:** no fake or invited reviews until you have real users after launch.
- **Time:** ~1 hour total.

### 9. Create the GitHub org profile ☐
- **What:** Follow the setup steps in [outreach/org-profile-README.md](outreach/org-profile-README.md): create a public repo named `.github` in the DettaSystems org, add `profile/README.md`, paste the provided content. Also set the waitlist repo's description, website, and topics.
- **Why:** A small, free brand/entity signal.
- **Time:** 15 minutes.

---

## Ongoing (the real growth engine)

### 10. Run the roundup pitch campaign ☐
- **What:** This is the highest-leverage move. Using [outreach/roundup-target-list.md](outreach/roundup-target-list.md) and [outreach/pitch-template.md](outreach/pitch-template.md), email the authors of "best debt tools" articles to get Detta listed in the **self-help / DIY** category. Start with Tier 1 (InCharge, WalletHub, U.S. News, LendEDU). Log each in [outreach/pitch-log.md](outreach/pitch-log.md).
- **Why:** AI engines cite these roundups far more than your own page. One honest listing is worth more than any on-page tweak.
- **Cadence:** a few pitches a week; refresh the target list monthly.

### 11. Check your visibility monthly ☐
- **What:** Once a month, in Google Search Console look at whether "Detta" searches show up; and ask ChatGPT, Perplexity, and Gemini "What is Detta?" **and** "is Detta legit?" — note whether Detta appears and is described correctly (as self-help software, not a settlement company).
- **Why:** Tells you it's working. **Expect near-zero AI mentions for the first few months** — that's normal for a new brand; it builds with the profiles and pitches above.
- **Time:** 15 minutes/month.

---

## What's already handled (no action needed)
- ✅ Structured data, fixed share image, robots.txt, sitemap.xml, meta tags, spam honeypot — in PR #1.
- ✅ The www-vs-apex redirect is already correct — don't touch it.
- ✅ Strategy, outreach templates, and draft pages — written and waiting in the PRs.

## A few hard rules (keep you safe and legal)
- Always describe Detta as **self-help software** — never a debt-settlement, debt-relief, or credit-counseling service.
- **No fake or incentivized reviews**, ever.
- **No "you'll save X%" / guarantee claims.** Any "settlement companies charge 15–25%" stat is credited to a third party (NerdWallet/Debt.org), never to Detta.
- **No paying** for placement in any "best-of" list.
