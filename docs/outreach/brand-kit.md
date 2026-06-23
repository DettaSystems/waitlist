# Detta — brand & entity consistency kit

> **Why this exists:** AI engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) and Google's Knowledge Graph decide *what Detta is* by reconciling how Detta is described **across the whole web**. If every profile, directory, and pitch uses the **same name, the same description, and the same category language**, Detta reads as one coherent, trustworthy entity. If they drift, Detta reads as noise — or worse, gets mis-filed as a debt-settlement company.
>
> **Rule: copy these verbatim. Do not paraphrase per-platform.**

---

## Name

- **Always:** `Detta` (trademark form `Detta™` where styling allows).
- Never "Detta App", "Detta.us", "Detta Systems" as the public product name. (`DettaSystems` is only the GitHub org handle.)
- Operator / legal entity on legal pages: **[FIRM TO CONFIRM: legal entity name]** — keep this consistent once set.

## One-liner (≤ 60 chars — for X bio, directory taglines)

```
Self-help software to resolve your debt yourself.
```

## Short description (≤ 160 chars — for meta, LinkedIn tagline, directories)

```
Detta is self-help software that gives you the tools to resolve your own unsecured debt — no escrow, no middlemen. You pay creditors directly.
```

## Standard description (1 paragraph — for Crunchbase, LinkedIn About, BetaList)

```
Detta is self-help debt-resolution software. It gives consumers the tools, letter templates, phone scripts, calculators, and step-by-step guidance to resolve their own unsecured debts — credit cards, medical bills, personal loans, and accounts in collections — by contacting creditors directly. There is no escrow and no middleman: Detta never holds or moves your money. Detta is not a debt-settlement, debt-relief, or credit-counseling company, and not a law firm.
```

## Category language — say it exactly this way

| Detta **IS** | Detta is **NOT** |
|---|---|
| Self-help software | A debt-settlement company |
| A DIY tool you operate yourself | A debt-relief / debt-adjustment service |
| A way to contact creditors directly | A credit-counseling agency |
| Personal-finance / debt-management **software** | A law firm or financial advisor |

When a directory or roundup asks for a **category**, always choose the **software** option (e.g. *budgeting software*, *personal-finance software*, *debt-management software*) — **never** "debt settlement," "debt relief," or "credit counseling."

## Mandatory disclaimer line (use on every profile footer / bio where length allows)

```
Self-help software. Not legal advice. Not an offer of securities.
```

## The "sameAs" entity graph — keep these identical and cross-linked

The site's structured data (`index.html`) lists a `sameAs` array. **Every official profile you create should be added to that array**, and each profile should link back to `https://www.detta.us/`. Keep the name/description/logo identical across all of them.

| Profile | Handle / URL | Status | In site `sameAs`? |
|---|---|---|---|
| Website | https://www.detta.us/ | ✅ live | n/a |
| GitHub org | https://github.com/DettaSystems | ✅ live | ✅ yes |
| LinkedIn Company Page | `[create]` | ◻️ to create | ◻️ add after |
| Crunchbase | `[create]` | ◻️ to create | ◻️ add after |
| X (Twitter) | `[create]` | ◻️ to create | ◻️ add after |
| AlternativeTo | `[create]` | ◻️ to create | ◻️ add after |
| Product Hunt | `[launch-day]` | ◻️ later | ◻️ add after |
| Trustpilot | `[reserve only]` | ◻️ reserve, seed no reviews | optional |

> **Logo:** use `https://www.detta.us/logo.png` everywhere. **Brand color:** teal `#0D4F4F`. **Fonts:** Fraunces (display), DM Sans (body).

## Hard rules (compliance)

- Never describe Detta as settling, reducing, negotiating, or "relieving" debt **for** the user.
- Never state or imply savings/outcome figures, success rates, or guarantees.
- Any "settlement companies charge 15–25%" stat is **attributed to a third party** (NerdWallet, Debt.org) — never presented as Detta's or the FTC's claim.
- No fake, incentivized, or insider reviews on any platform. Reserve review profiles; seed nothing until real users exist.
