# SEO / AEO / GEO Roadmap — July 2026

**Status:** Approved 2026-07-03 (full scope). Owner-input required only for content approval.
**Context:** On-page SEO was audited 2026-07-02 and is strong (unique meta, schema on all pages,
AI-friendly robots.txt, llms.txt, complete sitemap, 9 attorney-reviewed guides). This roadmap
adds discovery speed, machine-readability, and content surface area.

## Tier 1 — Technical (no owner input) — SHIPPING NOW

1. **IndexNow** — host a key file at the site root; ping `api.indexnow.org` with all URLs now
   and with every future publish. Bing's index feeds ChatGPT search → faster GEO discovery.
2. **llms.txt currency** — add the statute-of-limitations and garnishment guides (they were
   published after llms.txt was written). Rule going forward: every new article updates
   llms.txt, sitemap.xml, feed.xml, and gets an IndexNow ping in the same commit.
3. **RSS feed** (`/feed.xml`) — machine-readable what's-new for AI crawlers and aggregators;
   `<link rel="alternate">` on the Learn hub.
4. **Learn hub schema** — `CollectionPage` + `ItemList` of all guides.
5. **Article schema enrichment** (all 9) — `citation` (CFPB/FTC/IRS), `isAccessibleForFree: true`,
   `articleSection`.
6. **Per-article OG images** — branded 1200×630 cards with each article's title
   (`/brand/og/<slug>.png`); better share CTR on X/LinkedIn/Reddit.
7. **"Keep reading" blocks** — consistent 3-link related-guides chips at the bottom of every
   article (internal-link mesh; replaces the plain "See also" sentence).

## Tier 2 — Content sprint (drafts → owner approval → publish)

- Guides (search-demand-driven, FDCPA wheelhouse): **charge-offs**, **how to answer a
  debt-collection lawsuit**, **debt-collector scam red flags**, **pay-for-delete**, **zombie debt**.
- **Debt glossary** (~30 terms, `DefinedTerm` schema) — long-tail AEO.
- **"Your debt-relief options, compared"** cornerstone.

## Parked (needs owner)

- Named-author E-E-A-T schema (needs attorney name + credential) — highest-value single item.
- 50-state statute-of-limitations table (needs attorney verification of state specifics).
- Google Search Console / Bing Webmaster (owner accounts); off-site distribution (owner voice).

## Honest expectations

Tier 1 improves discovery speed and machine-readability immediately; content compounds over
weeks. Nothing here produces same-day rankings.
