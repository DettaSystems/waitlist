# GEO / SGE strategy review — what we adopted, what we deferred

_Reviews the "Detta Digital Footprint Strategy (SGE/GEO)" doc against the live
site and Detta's hard constraints. Principle for this pass: **enhance only, break
nothing.** No settlement framing, no synthetic data presented as real, no outcome
claims, no new legal copy, no unreviewed YMYL content. Companion to
[SEO-GAMEPLAN.md](SEO-GAMEPLAN.md), [content-hub-plan.md](content-hub-plan.md),
and [audits/cc-debt-search-research-2026-06-24.md](audits/cc-debt-search-research-2026-06-24.md)._

## The headline finding

Most of the strategy's **safe, technical** recommendations were **already live** —
and implemented more carefully than the strategy doc proposed. The site's
structured data already disambiguates Detta as self-help software (Organization
schema: _"It is not a debt-settlement, debt-relief, or credit-counseling
service"_), already ships SoftwareApplication + WebSite + FAQPage schema, and
already lists the reserved social profiles in `sameAs`. So this pass was small by
design.

## Adopted now (shipped — additive, zero new claims)

- **`legalName: "Detta Systems, Inc."`** on the Organization entity (already the
  named entity on /terms and /privacy; strengthens the knowledge-graph node).
- **Broadened `knowsAbout`** with *educational* topics that map to high-intent GEO
  questions — "Fair Debt Collection Practices Act," "Statute of limitations on
  debt," "Disputing a debt yourself." Topical authority, not service claims.
- **Disambiguation attached to the SoftwareApplication entity** (verbatim reuse of
  the approved Organization wording), so the "not a settlement company" signal
  rides on the entity AI most associates with the finance-software category.

## Rejected from the strategy (would break the moat or integrity)

1. **Schema `about → Debt Settlement (Wikipedia)`** — actively encodes the *wrong*
   identity. The whole legal position (attorney founders; 37+ states license
   settlement) depends on NOT being classified as debt settlement. Do not add.
2. **"Self-directed debt settlement" / "vs. a debt settlement company" page and
   schema wording** — reintroduces the framing we engineer away from. Any page
   must pass: _does this make us look like a settlement company or like we give
   legal advice?_
3. **Publishing persona/track "data" as real findings** — the 50 personas are
   *seeded/synthetic*. A "Debt Track Report" framed as analysis of real debt would
   be fabricated YMYL statistics. The *framework* is ownable and citable; the
   *data* is not unless clearly labeled illustrative. Also: do not publish internal
   unit economics, and never add `aggregateRating` without real reviews.
4. **Outcome/savings claims** ("user keeps savings," "the real cost of
   settlement") — violates the no-guaranteed-outcomes rule.
5. **Reddit seed-mentions** — astroturf that gets brands banned; on r/legaladvice
   it also risks UPL exposure for attorney founders. Only with up-front founder
   disclosure and genuine help.
6. **"Be the answer in 90 days"** — unrealistic in this incumbent-dominated YMYL
   vertical. Our own research: **6–12+ months** for AI-citation traction.

## Deferred — needs an owner decision or external asset (not blocked by code)

- **External entity profiles** (Crunchbase, LinkedIn company page, Product Hunt
  "coming soon"). Handles are reserved (X/IG/Reddit/PH/IndieHackers already in
  `sameAs`). When the **LinkedIn + Crunchbase URLs** exist, add them to `sameAs`
  in one line.
- **GEO anchor pages + Anna™ methodology page.** The right idea, but they live in
  the **content hub** (see content-hub-plan.md) — a separate Astro project, gated
  on (a) the architecture green-light and (b) a **named, credentialed attorney
  author/reviewer** (the YMYL hard gate, and Detta's easiest unlock). They do not
  fit on the current single static page.
- **FAQPage expansion** toward the GEO questions. Safe to do, but FAQ schema must
  mirror *visible* on-page answers, and new YMYL answers need attorney review — so
  it's a content task, not a schema-only edit.

## The guardrail, in one line

Run every page title, schema field, and data claim through: _"Are we a settlement
company? Are we giving legal advice? Are we claiming outcomes? Is this real data?"_
If any answer is yes, rewrite or drop it.
