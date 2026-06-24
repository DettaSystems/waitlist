# Project scope: the Detta content hub

_The long-game SEO/GEO/AEO moat. Plain-English scope for a non-technical owner. Companion to [SEO-GAMEPLAN.md](SEO-GAMEPLAN.md) §8b and the search research in [audits/cc-debt-search-research-2026-06-24.md](audits/cc-debt-search-research-2026-06-24.md). Drafted 2026-06-24._

## 1. Why this is a separate project

The waitlist page is finished and excellent, but a single page cannot rank for the questions stuck-in-debt consumers actually search. The research was blunt: **the only path to non-branded organic traffic and to being cited by AI engines is a library of deep, trustworthy, attorney-reviewed explainers** — the "content hub." This is a distinct project because it needs its own architecture (a way to publish many pages), its own content production (writing + legal review), and a 6–18-month payoff horizon. It is not an edit to `index.html`.

**What it unlocks:** the awareness-gap audience (people who don't know DIY debt resolution exists), the long-tail "how do I do this myself" queries that incumbents cover thinly, and the E-E-A-T + citations that make Detta *the* named authority on self-directed debt resolution.

## 2. The architecture decision (recommended)

We need a way to publish dozens-to-hundreds of pages without hand-copying the page chrome each time (the static-site blueprint flags this exact ceiling).

| Option | What it is | Verdict |
|---|---|---|
| **A. Hand-authored static HTML** (like `/trust`, `/privacy`) | Copy-paste each page | Fine for the **first 2–3 pages** as a proof of concept; breaks down fast (no templating, no shared header/footer, error-prone). |
| **B. Static-site generator** (Astro recommended; Eleventy alt) | Write articles as **Markdown**; a build step turns them into fast static HTML with shared templates, schema, and nav | **Recommended.** Keeps the static/secure/fast/cheap properties we already have, adds templating + content-as-Markdown, scales to hundreds of pages, supports MDX (so the calculator/settlement tools can be embedded in articles). |
| **C. Headless CMS** (Sanity/Contentful) + generator | A web editor so non-coders write without touching files | Add **later**, only if non-technical authors need to publish without a developer. Overkill at the start. |

**Recommendation: Astro**, built and deployed through the **same GitHub Actions → Pages pipeline we just set up** (or via the Vercel migration in [vercel-migration-plan.md](vercel-migration-plan.md) — the content hub is the strongest reason to do that migration, since Vercel is built for Astro and gives previews + the security headers). Articles live as Markdown in the repo; the build outputs static pages under `/learn/…`.

**Start-lean path:** stand up Astro with the hub + the first **3 cornerstone articles** in one sprint; expand from there. (Optionally hand-write the very first article as static HTML to validate the format while Astro is set up.)

## 3. Information architecture + how it links to the home page

**Hub-and-spoke**, all cross-linked, with the homepage as the front door:

```
Home (detta.us)
  └─ nav + footer link → /learn/  (the hub: articles grouped by topic, tools featured)
        ├─ /learn/negotiate-credit-card-debt-yourself/
        ├─ /learn/do-i-need-a-debt-settlement-company/
        ├─ /learn/debt-collector-rights-fdcpa/
        ├─ /learn/statute-of-limitations-credit-card-debt/   (+ embedded SOL tool)
        ├─ /learn/snowball-vs-avalanche/                     (+ embedded payoff calculator)
        └─ … more
  ← every article links back to the relevant tool + a waitlist CTA, and to 2–3 sibling articles
```

- **Homepage linking (required):** add a **"Learn"** (or "Resources") item to the homepage header nav and footer, pointing to `/learn/`. _(Built once the hub exists — not before, to avoid a dead link.)_
- **The hub page `/learn/`** lists articles by cluster, features the two tools, and carries the same brand chrome.
- **Internal linking discipline:** each article links to its tool, its sibling articles, and the waitlist — this is how crawlers and AI engines (and readers) traverse the topic.

## 4. The content plan — first 10 cornerstone articles

Mapped to the **winnable** clusters from the research (head terms are deliberately skipped). Prioritized by winnability × strategic fit. Each is answer-first, cited to CFPB/FTC/FDCPA, attorney-reviewed.

| # | Article (working title) | Target query cluster | Why it wins | Embeds |
|---|---|---|---|---|
| 1 | **What to say when you negotiate credit card debt yourself** | F — "what to say when negotiating" (the single most winnable query) | Incumbents are conflicted (they sell you a company); thin coverage | Settlement planner |
| 2 | **Do I need a debt settlement company, or can I do it myself?** | D — the flagship "third option" comparison | The awareness-gap pivot; honest DIY vs DMP vs consolidation vs settlement vs bankruptcy | Settlement planner |
| 3 | **Your rights when a debt collector calls (FDCPA, plain English)** | E — collector rights | Detta's legal sweet spot; attorney-authored = real E-E-A-T edge | — |
| 4 | **Statute of limitations on credit card debt, by state** | E — SOL by state | Tool-shaped, freshness-led, attorney-reviewed table | SOL lookup tool (new) |
| 5 | **Debt snowball vs. avalanche: which clears your cards faster?** | C — snowball vs avalanche | Pairs perfectly with the existing calculator | Payoff calculator |
| 6 | **What really happens if you only pay the minimum** | B — minimum-payment trap | High-intent, fear-driven, education-first | Payoff calculator |
| 7 | **Can't pay your credit cards this month? The moves you can make** | B/D — "can't pay, what are my options" | Calm action checklist; hardship-call guidance | Settlement planner |
| 8 | **How debt settlement actually works (and the credit + tax tradeoffs)** | F — settlement education | Sets honest expectations (credit hit, 1099-C); positions Detta as the DIY route | Settlement planner |
| 9 | **Drowning in credit card debt? Start here** | A — emotional on-ramp | The empathy entry point; crisis-resources-first, never a hard sell | Both tools |
| 10 | **How to pay off $X in credit card debt** (template → $5k/$10k/$15k/$20k) | C — programmatic dollar-anchor pages | Long-tail volume via a repeatable worked-plan template | Payoff calculator |

_(Letter generators are deliberately NOT here — those are the paid product.)_

## 5. The per-article template (E-E-A-T + SEO/GEO/AEO)

Every article ships with:
- **Answer-first structure:** the title is the searcher's exact question; each H2 is a sub-question answered in the first ~40 words.
- **A named, credentialed author byline + "Reviewed by [attorney name], [State] Bar" + a review date** (the YMYL gate — see §6).
- **Primary-source citations** (CFPB, FTC, FDCPA statute, NCLC) — both an honesty signal and an AI-citation/E-E-A-T booster.
- **Schema:** `Article` + `author` (Person) + `reviewedBy` + `FAQPage`/`HowTo` where relevant + `BreadcrumbList`.
- **A People-Also-Ask block** (4–6 adjacent Q&As) to capture PAA + feed AI answers.
- **An embedded tool** (calculator/settlement planner) where it fits — the AI-resistant, conversion-driving element.
- **A waitlist CTA** ("save your plan / get early access") and links to 2–3 sibling articles.
- **Compliance footer:** self-help software, not legal/financial advice, no outcome guarantees.

## 6. E-E-A-T is the gate (non-negotiable)

The research is emphatic: without a **real, named, credentialed reviewer**, YMYL debt content is filtered out regardless of quality. Detta's advantage: **the founders are practicing consumer-protection attorneys.** Requirements before publishing:
- A **named attorney** as author/reviewer (we already added a generic "reviewed by a consumer-protection attorney" line; the hub needs the real name + bar + a bio/About page).
- An **editorial-review policy** page (how content is written, reviewed, and updated).
- An **About/team** page with the human(s) behind Detta.
- Citation standards + "last reviewed" dates on every page.

## 7. Phased roadmap

- **Phase 1 — Foundation (weeks 1–4):** stand up Astro + the `/learn/` hub + article template + schema; publish articles **1–3**; add the homepage "Learn" nav/footer link; named-author bio + editorial-policy + About pages.
- **Phase 2 — Core library (months 2–4):** publish articles **4–8**; build the SOL lookup tool; begin internal-linking and the roundup-pitch campaign that points at this content.
- **Phase 3 — Scale (months 4–9):** the programmatic "$X in debt" pages (#10), article #9, plus new articles from monthly query-gap research; deepen entity/earned-media.

## 8. Effort, cost, and who writes

- **Engineering:** ~1–2 days to scaffold Astro + templates + schema + the hub; ~½ day per new article type thereafter (content itself is Markdown).
- **Content:** the bottleneck. ~1,500–2,500 words/article, answer-first, cited. Options: (a) founder/attorney writes; (b) a finance writer drafts and the attorney reviews (faster, ~$200–500/article outsourced); either way **attorney review is mandatory**.
- **Realistic timeline to results:** first indexation in weeks; first long-tail rankings in 3–6 months; meaningful organic traffic + AI citations in **6–12+ months**. This is a compounding asset, not a quick win.

## 9. Measurement

Indexed pages (Search Console) · first long-tail rankings · **AI-citation appearances** (monthly checks: do Detta articles get cited in ChatGPT/Perplexity/AI Overviews for target questions?) · assisted waitlist signups from organic · snippet/PAA capture · time-on-page.

## 10. What NOT to do

- Don't publish thin or unreviewed YMYL content — it gets filtered, not ranked.
- Don't chase head terms ("debt settlement", "best debt relief") — unwinnable and off-positioning.
- Don't give away the paid product (letter/script generators) as free content.
- Don't use a heavy CMS before the volume justifies it.
- Don't frame anything as debt-settlement/relief/credit-counseling, promise outcomes, or use distress topics as hard-sell conversion pages (crisis resources first).

## 11. Open decisions for the owner

- [ ] **Architecture:** approve **Astro** (recommended), or prefer hand-authored static pages to start?
- [ ] **Host:** build on the current GitHub Actions/Pages pipeline, or pair this with the **Vercel migration** (recommended for the hub)?
- [ ] **Author identity:** which attorney name + bar/state goes on the byline + About page? (Unlocks the full E-E-A-T signal + `Person` schema.)
- [ ] **Who writes:** founder-authored, or writer-drafts-attorney-reviews?
- [ ] **Green-light Phase 1** (Astro + hub + first 3 articles + homepage link)?
