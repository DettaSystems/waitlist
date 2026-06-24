# Detta.us Discoverability Gameplan — SEO / GEO / AEO

_Master plan for making the Detta waitlist (detta.us) findable across classic search (SEO), generative AI engines (GEO), and answer engines (AEO). Written for a non-technical owner — plain English, jargon explained in one phrase. Last updated 2026-06-24. Companion docs: the search-research paper [audits/cc-debt-search-research-2026-06-24.md](audits/cc-debt-search-research-2026-06-24.md) (how stuck credit-card-debt consumers search) and [vercel-migration-plan.md](vercel-migration-plan.md)._

> **What these three letters mean**
> - **SEO** — Search Engine Optimization: ranking in Google/Bing's normal blue-link results.
> - **GEO** — Generative Engine Optimization: being _quoted/cited inside_ AI answers (ChatGPT, Perplexity, Gemini, Google AI Overviews).
> - **AEO** — Answer Engine Optimization: being the extracted answer box (featured snippets, "People Also Ask", voice).

---

## 0. Status — what's now LIVE on detta.us (updated 2026-06-24)

Since this plan was written, most of Phase 0 plus several Phase 1/2 items have shipped (PRs #1–#18 on `DettaSystems/waitlist`). **Live now:**

- **Technical/SEO foundation:** identity JSON-LD (Organization/WebSite/SoftwareApplication/FAQPage, enriched with `knowsAbout`/`areaServed`/`featureList`), fixed og-image, AI-crawler-explicit robots.txt + sitemap (incl. legal pages), `.well-known/security.txt`, meta polish, accessibility primitives (skip link, `<main>`, aria-live, forced-colors), **self-hosted fonts** (Google CDN dropped), and all em/en dashes removed.
- **Analytics:** Plausible (cookieless) live with a `Signup` goal.
- **Legal suite:** lawyer-grade **/privacy**, **/terms** (binding arbitration + class-action waiver), **/trust** — published, indexable, footer-linked.
- **Two interactive tools** (the research's #1 lever): a **payoff calculator** (snowball vs avalanche) and a **settlement & negotiation planner** — both 100% client-side (debt numbers never leave the browser), math/ranges ported from the platform's vetted engines.
- **YMYL trust layer:** "Reviewed by a consumer-protection attorney" byline on the money tools + a "Who builds and reviews Detta?" section on /trust (signed generically for now; swap to a named attorney + `Person`/`reviewedBy` schema when available).

**Still owner-gated:** Search Console + Bing; create LinkedIn/Crunchbase/X (then wire into `sameAs`); run the roundup-pitch campaign (§5); name the reviewing attorney; decide the Vercel migration. **Still CMS/product-gated:** the content hub (§8b).

---

## 1. Bottom line

Detta.us is a clean, fast, single-page waitlist that is **technically healthy but invisible**: until recently it had zero structured data (machine-readable labels telling Google and AI engines what Detta is), no robots.txt or sitemap, a broken social-share image, and no analytics. Because debt is a **"Your-Money-Your-Life" (YMYL)** topic — where Google applies its strictest trust bar — a lone waitlist page **cannot and should not** chase competitive terms like "debt settlement"; those are owned by billion-dollar incumbents and would also drag Detta toward the regulated-company label it must legally avoid.

**The single biggest lever is building Detta as a recognized "entity"** (a known, verified brand) — and the highest-leverage _new_ tactic is getting Detta **named inside other people's "best DIY debt tools" lists**, because AI engines overwhelmingly cite third-party roundups, comparison sites, and Reddit rather than a brand's own page. Everything winnable now is brand-and-foundation work; real organic traffic on debt questions is a later project that needs a real content hub — not edits to one HTML file.

---

## 2. Current scorecard

_(This is the pre-work baseline from 2026-06-23; see §0 for what is now live — several of these have since improved.)_

| Dimension | Score | Why |
|---|---|---|
| **Technical SEO** (crawlability, speed, domain) | **7 / 10** | Clean title/meta/H1, HTTPS, OG cards, canonical; apex→www redirect already correct. Lost points for missing robots/sitemap (now fixed) + render-blocking fonts. |
| **On-page / Keywords** | **5 / 10** | Strong brand-intent copy, but one thin page. Can't — and correctly shouldn't — rank non-branded debt terms. |
| **Structured data** | **1 → in progress** | Was zero JSON-LD. Identity + FAQ markup added (see §4). |
| **GEO** (AI-citation readiness) | **3 / 10** | Crawlers allowed, but Detta is an unknown entity with no profiles/mentions/quotable content. Citation share ≈ 0 today. |
| **AEO** (answer extractability) | **4 / 10** | Good answer-first FAQ already; fee comparison is locked in a JS slider machines can't read. |
| **Off-page / Authority** | **2 / 10** | Near-zero. No LinkedIn/Crunchbase/Wikidata/press/backlinks. The real long-term ceiling. |

---

## 3. Hard constraints (every recommendation respects these)

1. **YMYL** — debt is Google's strictest content category. Thin or hypey content is actively penalized; trust signals matter more than tricks.
2. **Self-help SOFTWARE, never a debt-relief entity.** Detta must not be described, framed, or schema-tagged as a debt-settlement, debt-relief, or credit-counseling company. No escrow, no funds held.
3. **Pre-launch waitlist** — the conversion goal is email signups; the product isn't live yet.
4. **Hand-edited static HTML on GitHub Pages** — no server, no headers, no redirect rules, no geo-logic. Every on-page lever is an `index.html` edit or a static file. A real content hub or header-dependent work means fronting with Cloudflare or migrating hosts.
5. **Ethical / white-hat only** — no fake reviews, no manipulative/cloaking tactics, no individualized financial/legal advice, no unverifiable outcome claims.

---

## 4. Phase 0 — quick wins (same-day, static edits)

> **Status:** the safe technical items below shipped in **PR #1** (`seo-geo-aeo-phase-0-tech-fixes`). Items marked _(deferred)_ make brand/legal claims and need owner/firm sign-off.

| # | Item | Status |
|---|---|---|
| 1 | **Identity JSON-LD** — `Organization` + `WebSite` + `SoftwareApplication` (+ `FAQPage`). Use only software types, **never** `FinancialService`/`LoanOrCredit`; no fake ratings. Validate at **validator.schema.org**. | ✅ PR #1 |
| 2 | **Fix `og-image.png`** (was a 404 → blank share previews everywhere). Real 1200×630, no savings/outcome wording on the image. | ✅ PR #1 |
| 3 | **robots.txt** (points to sitemap; AI crawlers welcome). | ✅ PR #1 |
| 4 | **sitemap.xml** (one URL). | ✅ PR #1 |
| 5 | **Meta polish** — og image dimensions/alt, og:site_name, twitter:image:alt, author, explicit index,follow. | ✅ PR #1 |
| 6 | **Form honeypot** (`_gotcha`) to cut spam signups. | ✅ PR #1 |
| 7 | **Cookieless analytics** (Plausible or Fathom) — stub added; **create the account + uncomment** to activate. Don't use GA4 (cookies + consent banner). | ✅ Plausible live + `Signup` goal |
| 8 | **Search Console (Domain property via DNS TXT) + Bing Webmaster Tools** (import from Google); submit sitemap. | ◻️ owner action |
| 9 | **Confirm no `noindex`** (confirmed clean) and fonts use `&display=swap` (already present). | ✅ verified |
| 10 | **Real Privacy / Terms / Legal pages** (currently `mailto:` links — must be written, not just linked). | ✅ /privacy + /terms live (lawyer-grade) |
| 11 | **"Is Detta legit? / Trust & Safety" page** answering skeptic queries. | ✅ /trust live |
| 12 | **Soften outcome-implying copy** ("keep every dollar you save" borders on a guarantee). | ◻️ _(deferred — brand voice)_ |

**Do NOT "fix" the www-vs-apex canonical** — verified correct: `detta.us` 301-redirects cleanly to `www.detta.us` and the canonical matches. Re-doing it is a no-op.

---

## 5. The headline new lever — get named in AI-cited roundups

Stop _only_ polishing your own page; start getting Detta **named inside other people's "best debt tools" lists.** AI engines mostly cite the sources they already trust — third-party roundups, comparison sites, and Reddit. Independent studies put ~75–94% of AI citations on content the brand _doesn't_ own; branded web mentions correlate with AI visibility far more than domain authority or page count. One honest sentence about Detta inside NerdWallet's or InCharge's debt-app roundup outweighs almost anything on your own site. This is earned-media PR, done white-hat — and it can start pre-launch.

**How to run it:**
1. **Build the target list.** Run ~10–15 queries you want to win ("best debt payoff apps 2026", "alternatives to debt settlement", "DIY debt payoff tools") through ChatGPT, Perplexity, and Google's AI answers; log every page each engine cites. Keep roundups with a named author + an update within ~12 months that _aren't_ affiliate "we rank ourselves #1" pages. Confirmed starting targets: InCharge "8 Best Debt Payoff Apps", NerdWallet "How to Pay Off Debt", LendEDU, WalletHub.
2. **Pitch each author individually** (no mass email). Four sentences: a genuine reference to their article; one honest positioning line — _"Detta is self-help software for people who want to resolve unsecured debt themselves, paying creditors directly — no escrow, and we are **not** a debt-settlement, debt-relief, or credit-counseling service"_; a no-strings offer of value (a free press login _not_ conditioned on inclusion); and "no payment, sponsorship, or affiliate arrangement is involved." Then ask explicitly to be listed in the **DIY / self-help** category.
3. **Keep a written log** of who you pitched, when, and the exact disclaimer sent (audit trail).

---

## 6. The GEO play (ChatGPT / Perplexity / Gemini / AI Overviews)

**What genuinely works:**
- **Be a recognized entity** — the #1 driver; lives off-page (§9). The on-page half is the identity JSON-LD.
- **Make AI crawlers welcome** (already true) — OAI-SearchBot, PerplexityBot, Claude-SearchBot, Bingbot, Googlebot crawl freely; robots.txt documents intent.
- **Make content extractable** — answer-first chunks, one real question per heading, numbers in plain HTML/tables (not locked in a JS slider).
- **Freshness** — a visible "Last updated" date + occasional _genuine_ edits earns meaningfully more AI citations than a frozen page. Never fake it.

**What's hype — skip it:**
- **llms.txt** — Google's search team confirmed no major engine reads it; bots don't even fetch it.
- **"Schema = 3× more AI citations"** — vendor stats; the strongest independent study found _no_ citation uplift from schema alone. Do JSON-LD for cheap identity grounding, not as a guaranteed citation win.
- **Honest ceiling** — a one-page waitlist gives AI engines almost nothing to quote. Citation share stays near zero until real profiles/mentions and a content hub exist.

---

## 7. The AEO play (snippets / PAA / voice)

**Reality check:** Google **fully killed FAQ rich results in May 2026** — the expandable Q&A dropdown no longer appears for anyone. So FAQ structured data will never give a visual SERP feature again; we added `FAQPage` JSON-LD only as a harmless, low-priority AI-parse signal. **The real win is the visible HTML:**
- **Answer-first FAQ** — each question a real heading (`<h2>`/`<h3>`), first sentence answers it in ~40–90 words, self-contained. (Detta's FAQ already does this well.)
- **Target positioning questions** — "Is Detta a debt settlement company?" (no — self-help software, you pay creditors, Detta holds no money), "Does Detta hold my money?", "How much does Detta cost vs a settlement company?", "Is Detta available in my state?"
- **Turn the fee slider into a static HTML table** AI/Google can read — and **attribute the 15–25% settlement fee to NerdWallet / Debt.org, _not_ the FTC** (it is not an FTC rule). Never present it as a Detta claim.
- **Skip Speakable / voice-specific schema** — low ROI; answer-first FAQ already covers voice.

---

## 8. Keyword & content strategy

**Don't chase head terms** ("debt settlement", "debt relief", "best debt relief companies") — owned by National Debt Relief, Freedom Debt Relief, NerdWallet, Bankrate, CFPB, and held ~90% in AI answers. A new low-authority page has zero chance, and those terms pull Detta toward the regulated-entity label it must avoid.

**Three realistic clusters, in order of winnability:**
1. **Brand / navigational (now):** "Detta", "Detta app", "Detta ANNA", "Detta waitlist", "is Detta legit". The only organic terms a waitlist can own.
2. **Comparison / positioning (later, defensible):** "self-help debt tools", "do it yourself debt settlement", "debt payoff app vs settlement company". Stays safely in the software/tool lane. **Being named in _others'_ comparisons (§5) is higher-leverage than your own comparison page — which must never rank Detta #1.**
3. **Long-tail informational (the real prize — needs infrastructure):** "how to write a debt validation letter", "statute of limitations on debt by state", "what to do when a debt collector calls". Low competition; a new domain _can_ earn these (how Upsolve/SoloSuit grew) — but it requires many pages (a resources hub), a **separate post-launch project**.

**How a waitlist demonstrates YMYL E-E-A-T** (Experience, Expertise, Authoritativeness, Trust):
- Add a **named founder + one-line credential** — anonymous YMYL pages underperform regardless of markup.
- Keep the **"self-help software, not legal or financial advice"** disclaimer (already present in footer) — compliance _and_ an honesty signal.
- **Soften outcome-implying copy** toward "keep the fees you'd have paid".
- Publish **real** privacy/terms pages (not mailto links).

---

## 8b. The awareness-gap funnel & content map (from the 2026-06-24 search research)

A dedicated deep-research pass (full paper: [audits/cc-debt-search-research-2026-06-24.md](audits/cc-debt-search-research-2026-06-24.md)) studied **how stuck credit-card-debt consumers actually search**.

**The core insight — the awareness gap.** People buried in credit-card debt search like people in pain ("drowning in credit card debt", "can't afford my minimum"), and **most don't know that resolving debt _themselves_ is even an option.** The SERPs push them into a false binary: struggle alone, or hand it to a for-profit settlement company. The FTC/CFPB say "you can do this yourself, for free" — but no software brand owns that calm middle path. **That gap is Detta's single biggest opportunity.**

**The honest verdict.** Organic search will not be a meaningful waitlist channel for **12–18 months**. Head terms are owned by DR-80+ incumbents (NerdWallet/Bankrate/Experian/CFPB) and cannibalized by AI Overviews (~83% no-click). **YMYL E-E-A-T is a hard gate, not a tiebreaker** — without a named credentialed reviewer, content is filtered out regardless of quality (this is why the attorney-review layer matters). Realistic wins live in the **long-tail DIY/procedural corner**, **interactive tools the AI can't replicate**, **authentic Reddit presence**, and the **12–18-month entity/citation build**. For pre-launch signups, **paid + community + partnerships** beat organic.

**The funnel — panic to signup (without ever posing as a debt-relief company):**
1. **Awareness:** an overwhelmed searcher finds a Detta page / Reddit answer / AI citation that _validates the feeling_ and reframes it ("your debts are countable, not bottomless").
2. **Education:** name every legitimate path honestly, cite FTC/CFPB, position Detta as _the software for the DIY path_ — beside nonprofits, not instead of them.
3. **Demonstration:** a free interactive tool lets them feel control in 5 minutes (the tool _is_ the value).
4. **Conversion:** email-gated "save your plan / get early access" — never "we'll settle your debt."

**Cluster → asset map (winnability × impact).** Most article-shaped assets need a CONTENT HUB the static page lacks; tools can ship now.

| Priority | Search cluster | Asset | Status |
|---|---|---|---|
| P1 | DIY payoff ("how to pay off", "snowball vs avalanche") | **Payoff calculator** | ✅ shipped |
| P1 | Negotiate ("what to say", "how much to offer") | **Settlement & negotiation planner** | ✅ shipped |
| P2 | Negotiate / collections | Debt-validation + settlement **letter generators** | ⛔ deliberately NOT free — core paid product |
| P2 | "Help / options" (option-unaware) | **"Do I need a settlement company?"** honest comparison (flagship third-option page) | content hub |
| P2 | Consequences ("statute of limitations", "can they sue") | Attorney-reviewed **SOL table + rights toolkit** | content hub |
| P3 | Emotional distress | Empathetic **on-ramp explainer** (crisis-resources-first) | content hub |
| P3 | DIY payoff | Programmatic **"$X in credit card debt" worked-plan pages** | content hub |
| Supporting | Debt depression/anxiety | Crisis-aware pages (lead with 988, never a conversion page) | content hub |

**Compliance spine of the funnel:** every step is "a tool _you_ operate", "you pay creditors directly", "no funds held", "no outcome promised". Crisis-adjacent queries lead with 988/mental-health resources, never as conversion pages.

---

## 9. Off-page & brand-entity building (the real long-term lever)

**Week 1 — claim the entity (these _are_ the brand to AI engines):**
- Create/claim a **LinkedIn Company Page**, **Crunchbase**, **X**, and tidy the public **GitHub org** (add a repo description, topics, README, and an org `profile/README.md` — there's no text there yet to be consistent with).
- Use one identical name/description/logo/founding year everywhere. Approved boilerplate: _"Self-help debt-resolution software that gives consumers DIY tools — no escrow, no funds held; not a debt-settlement, debt-relief, or credit-counseling service."_
- Wire each real profile URL into the JSON-LD `sameAs` array (currently only the verified GitHub org is listed — **do not list profiles that don't exist yet**).
- **Skip Google Business Profile** — online-only, ineligible, risks suspension.

**Weeks 2–6 — earn first signals:**
- **Software directories first** (these feed AI answers): AlternativeTo, G2, Capterra (→ GetApp + Software Advice), TrustRadius — in the **software** category (budgeting / personal-finance), never "debt settlement". **Reserve** Trustpilot; seed **zero** reviews until real users exist.
- **BetaList** (built for waitlists; real do-follow link; free queue 2–3 mo or ~$129 priority).
- **30–50 startup directories** (compounding legitimacy backlinks).
- **HARO / Qwoted / Featured** monitoring for "debt"/"DIY finance" sourcing — fast, genuine expert replies earn editorial mentions.

**Ongoing — the human authority layer:**
- **Named founder identity** (LinkedIn + author bio); guest on existing personal-finance/fintech **podcasts**. Always general education, never individualized advice.
- **Genuine, help-first** participation in r/personalfinance, r/povertyfinance, r/debt (Reddit is heavily cited by Perplexity). Disclose "I'm the founder" in the same comment; many subs ban affiliated-tool mentions even with disclosure — in those, give the help and skip the name. One honest answer, never a seeded campaign.

**Realistic timelines:** profiles week 1; directory/HARO links accrue 4–12 weeks; any Knowledge Panel or AI-citation lift is **6–12+ months** for a new brand. **Wikidata** comes _after_ a real independent reference; **Wikipedia is a year-plus out** — a premature promotional article gets deleted.

---

## 10. Additional tactics (net-new, prioritized)

### Add now (Phase 0/1)
| Tactic | Moves | Impact | Effort | Legal/ethical note |
|---|---|---|---|---|
| Get named in AI-cited debt roundups (§5) | GEO+SEO | High | Moderate | Self-help-software framing; never pay for placement. |
| First-party "Is Detta legit? / Trust & Safety" page | AEO+GEO+SEO | High | Moderate | Only claims true today; no reviews on it; no named competitors. |
| Real Privacy / Terms / Legal pages | SEO trust + compliance | High | Moderate | Your own self-help-software policies; firm reviews. |
| Software directory profiles (AlternativeTo/G2/Capterra/TrustRadius) | GEO+AEO entity | Medium | Trivial–Mod | Software categories only; zero fake reviews. |
| GitHub repo/org as a brand page (README, topics, org profile) | SEO+GEO entity | Medium | Trivial | Carry the disclaimer; don't tag "debt-settlement". |
| Email nurture sequence (replace Formspree auto-reply) | Retention/pipeline | High | Moderate | Education only; honor CAN-SPAM (address + unsubscribe). Not an SEO win. |

### Later / optional (post-launch or product-gated)
| Tactic | Moves | Impact | Note |
|---|---|---|---|
| One original Detta dataset (anonymized waitlist survey) offered to roundup authors | GEO+SEO+AEO | High | Report only what was measured; state sample size + self-selected; attribute fee stat to NerdWallet/Debt.org, not FTC. |
| One long-form explainer video (corrected transcript + chapters) + republished transcript | GEO+AEO | Medium | "What X _is_", never "what _you_ should do"; clean title/tags/thumbnail. |
| Founder podcast guesting (existing shows) | GEO+authority | Medium | General education; pre-written self-help framing for show notes. |
| Ethical referral loop (reward the signup, never praise) | Earned reach | High | Reward referred signup, never positive sentiment (FTC reviews rule). |
| Product Hunt **launch-day** (account ages ~30 days) | Discovery | Medium | Personal-finance _software_ category. **Not** a pre-launch teaser. |
| Front the site with Cloudflare free plan | Security headers + speed | Medium | Unlocks HSTS/headers GitHub Pages can't set; keep the apex→www redirect. |
| Seasonal timing (post-holiday January, tax season) | Off-page pickup | Medium | Self-help framing only. |
| Bing "AI Performance" (Copilot citation) report | GEO measurement | Medium | Only first-party AI-citation metric that exists. |

---

## 11. What NOT to do

- **No regulated-entity language or schema** — never "debt settlement/relief/credit counseling" in copy, schema, or directory blurbs. `SoftwareApplication`, never `FinancialService`/`LoanOrCredit`.
- **Don't expect FAQ schema to produce a rich result** — dead since May 2026; it's a minor AI-parse signal only.
- **Don't believe GEO snake-oil** — skip llms.txt; treat "3×/+35%" schema-lift stats as marketing; never fabricate ratings.
- **No fake, incentivized, gated, or insider reviews — anywhere.** FTC reviews rule is actively enforced (**$53,088/violation**). Reserve review profiles; seed nothing until real users exist, then invite everyone identically.
- **No outcome/savings guarantees** — "erase your debt", "guaranteed", "keep every dollar".
- **Don't chase head debt terms** or over-invest in the single thin page.
- **Don't "fix" the canonical/redirect** — already correct.
- **Evaluated and rejected for this pre-launch waitlist:** Hacker News "Show HN" (bans waitlists), Product Hunt _teaser_ (it's a launch-day play), Google Business Profile, short-form video for citations, sitelinks search-box markup (retired Nov 2024), hreflang/i18n (US-only), debt-by-state pages (saturated + legal-framing trap), IndexNow (Google ignores it), product/breadcrumb schema (single page), HSTS on bare GitHub Pages (impossible without Cloudflare).

---

## 12. Ethics & legal guardrails (bright lines)

1. **Self-help SOFTWARE only — never a debt-relief entity.** Mandatory phrase everywhere: _"self-help software, no escrow, not a debt-settlement, debt-relief, or credit-counseling service."_ State the category yourself, every time; ask listers to use the DIY/self-help category. This is the single highest legal risk.
2. **No fake/incentivized/gated/insider reviews.** No "leave us 5 stars", no rewarding positive sentiment, no company-controlled "independent review" site, no hiding negatives.
3. **No outcome, savings, or guarantee claims.** Any settlement-fee figure (15–25%) is attributed to NerdWallet/Debt.org — **not** the FTC. Original data reports only what was measured, with sample size + self-selected caveat.
4. **No individualized financial or legal advice.** General education only, sourced to CFPB/FTC. Keep the "not legal or financial advice" disclaimer present.
5. **White-hat, transparency always.** No astroturfing, sockpuppets, upvote rings, or paid-for rankings. Disclose "I'm the founder" in the same comment. Keep an audit log of pitches and placements.

---

## 13. Phased roadmap

**Phase 0 — this week (same-day, free):** identity + FAQ JSON-LD; robots.txt + sitemap.xml; fix og-image; meta polish; honeypot; analytics → **✅ DONE** (PRs #1–#18). Analytics live, legal pages live, accessibility + self-hosted fonts + the two tools + the attorney-review trust layer all shipped. Remaining owner actions: set up Search Console + Bing.
_Payoff: a clean, indexable, shareable, entity-grounded page that wins **branded** search and is AI-parseable. (Does not bring non-branded traffic — correct for a waitlist.)_

**Phase 1 — weeks 2–4 (off-page, mostly founder time):** claim LinkedIn/Crunchbase/X + GitHub org page with identical messaging wired into `sameAs`; software directories + BetaList + 30–50 directories; HARO/Qwoted; **start the roundup-pitch campaign (§5)**; stand up the (named) founder/attorney identity; email nurture. _(The two tools and the attorney-review trust layer are already shipped.)_
_Payoff: first real entity signals and backlinks — the groundwork AI engines and Knowledge Panels need. Compounds over months._

**Phase 2 — month 2+ (infrastructure — the ceiling):** stand up a real **resources/education hub** — 5–10 evergreen, answer-first explainers ("what is a debt validation letter", "secured vs unsecured debt") with named authors, CFPB/FTC citations, and Article schema. Prioritize "what is / how does X work" explainers (AI Overviews cover ~91% of those finance queries).
_Payoff: the only path to non-branded organic traffic and meaningful AI citations. **Worth migrating to a real site/CMS** (or fronting GitHub Pages with Cloudflare) when you commit — a hand-edited file can't sustain a content library, redirects, or headers._

---

## 14. Measurement

**Set up now:** Google Search Console (Domain property) · Bing Webmaster Tools (+ AI Performance report) · validator.schema.org · Facebook Sharing Debugger + LinkedIn Post Inspector · cookieless analytics (Plausible/Fathom).

**Track (with realistic expectations):**
- **Branded search** ("Detta" terms) — the one metric that should move within weeks; your real near-term signal.
- **Indexation** — is `https://www.detta.us/` the indexed URL in Google + Bing? (pass/fail)
- **Core Web Vitals** — keep LCP < 2.5s, INP < 200ms, CLS < 0.1. Measure in the **lab** (PageSpeed/Lighthouse) until traffic exists — a pre-launch site shows "no field data" in Search Console.
- **Backlinks / mentions** — log directory + BetaList + HARO + roundup placements.
- **AI-citation checks** — weekly, ask ChatGPT/Perplexity/Gemini "What is Detta?" _and_ the skeptic queries ("is Detta legit", "Detta scam"); note whether Detta appears and is described correctly (self-help software, not a settlement company). **Expect near-zero for months** — baseline-and-watch, not a near-term KPI.
- **Waitlist signups** — the business goal; correlate spikes with directory launches, HARO hits, and founder posts to learn which channel works.

---

## 15. Completeness verdict

**For a pre-launch static waitlist, the plan is effectively maximal.** Every ethical, legal lever that can move the needle for a one-page GitHub-Pages site is on the table: the on-page/technical layer (Phase 0, shipped), entity-building + measurement, the live-bug fixes, and the earned-media "get named in AI-cited roundups" strategy — the highest-leverage GEO lever for this category.

**Genuinely open (judgment calls, not missing tactics):** whether to adopt Cloudflare; the exact wording of legal pages (needs your firm).

**Simply _gated_ on the product launching / a real content site existing** (not gaps — just not startable yet): the content hub, real reviews (Trustpilot/G2), Product Hunt launch day, Wikipedia/Wikidata, and the original-dataset play.

**Where it stands now (2026-06-24):** Phase 0 is shipped; analytics, the legal suite, two interactive tools, and the attorney-review trust layer are live. **The next highest-leverage moves are owner-gated:** name the reviewing attorney (unlocks the full YMYL signal + `Person` schema), set up Search Console + the LinkedIn/Crunchbase/X profiles, and run the roundup-pitch campaign (§5). The real organic ceiling remains the **content hub (§8b)** — a CMS + named author.

---

_Provenance: synthesized from two multi-agent deep-research passes (6-dimension research + adversarial verification, then a 6-angle completeness gap-hunt), 2026-06-23. Stats are corroborated by primary sources where possible; GEO is fast-moving — re-verify time-sensitive claims before relying on them._
