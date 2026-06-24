# Plan: move detta.us from GitHub Pages to Vercel

_Scoping doc — no change made yet. Plain English. The goal is to close the one gap the static-site blueprint (§10) flags that our current host fundamentally can't fix._

## 1. Why move at all

The waitlist is a clean static site, and almost everything in the blueprint we've already done. The **one thing GitHub Pages cannot do is set HTTP response headers** — and that's exactly what the blueprint's entire security posture depends on. On GitHub Pages we have **no** way to send:

- **Strict-Transport-Security (HSTS)** — commits browsers to HTTPS
- **Content-Security-Policy (CSP)** — controls where scripts/styles/images may load from; blocks injected scripts
- **X-Frame-Options / frame-ancestors** — stops the site being embedded in a malicious frame (clickjacking)
- **Permissions-Policy** — explicitly turns off camera, mic, geolocation, etc.
- **Cross-Origin-Opener/Resource-Policy** — isolation against a class of browser attacks
- **Long-lived immutable cache headers** for `/fonts/` and assets

Vercel sends all of these via a single `vercel.json` file. **Nothing else about the site changes** — it stays static HTML, same files, same `detta.us` domain, same Formspree form, same Plausible analytics, same self-hosted fonts.

> This is a **security/quality upgrade**, not a feature change. Visitors see the identical page; the difference is in the headers a browser receives.

## 2. What stays exactly the same
- The site is still **static HTML** in this same repo — no framework, no build step required.
- `detta.us` / `www.detta.us` — same domain (DNS gets repointed; see §4).
- Formspree waitlist form, Plausible analytics, the legal pages, the self-hosted fonts — all unchanged.
- Deploys can stay tied to `main`, or switch to manual `vercel --prod` (the blueprint's preference — a deliberate "go live" signal).

## 3. What Vercel unlocks (the payoff)
1. **The full security-header suite + CSP** (drop-in block in §6).
2. **CSP in Report-Only mode first** — a "monitor without blocking" shadow that emails/logs violations, so we tune it safely before enforcing.
3. **Immutable 1-year caching** on `/fonts/*.woff2` (faster repeat visits).
4. **Preview deploys** — every branch/PR gets its own URL to eyeball before going live.
5. **Proper apex → www redirect** handled at the edge (today GitHub Pages does this; Vercel keeps it).

## 4. Migration steps (scoped, and fully reversible)
1. **Import the repo into Vercel** — New Project → import `DettaSystems/waitlist` → Framework Preset: **Other** (static). Output/root = repo root. (Or `vercel link` from the CLI, which is already installed here.)
2. **Add `vercel.json`** (the block in §6) — security headers + cache rules + apex→www redirect.
3. **Verify on the Vercel preview URL** — confirm the page, fonts, form, and analytics all work, and check headers with a tool like securityheaders.com.
4. **Cut over DNS** — in whoever manages detta.us's DNS, repoint the domain from GitHub Pages to Vercel (Vercel gives the exact A / CNAME records when you add the custom domain). **This is the only user-visible step, and it's reversible**: if anything looks wrong, repoint DNS back to GitHub Pages and you're exactly where you are today.
5. **Promote CSP from Report-Only to enforced** — after watching for a few days with no legitimate violations, rename the header from `Content-Security-Policy-Report-Only` to `Content-Security-Policy`.
6. **Retire the GitHub Pages config** once stable (the `CNAME` file becomes irrelevant; Vercel owns the domain).

**Time:** ~1 hour of work + a short DNS-propagation window (minutes to a couple hours). **Risk:** low and reversible — the cutover is a DNS change, not a code rewrite.

## 5. The one caveat — inline CSS/JS and `'unsafe-inline'`
Our page currently uses inline `<style>` and inline `<script>` blocks. A strict CSP normally forbids inline code, so the policy below **allows `'unsafe-inline'`** for styles and scripts. That's a real (if mild) relaxation. The blueprint's "remove it later" path: move the CSS and JS into external files, then drop `'unsafe-inline'` and watch the Report-Only header for a week before enforcing. Worth doing eventually; not a blocker for the migration.

## 6. Drop-in `vercel.json` (tuned for our actual third parties)
Allows exactly what the page uses today: self-hosted fonts (`'self'`), inline style/script, **Plausible** (`plausible.io`), **Formspree** (`formspree.io`), and `data:` images (the base64 logo + SVG favicon). CSP ships **Report-Only first**.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "trailingSlash": true,
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "detta.us" }],
      "destination": "https://www.detta.us/:path*",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "Content-Security-Policy-Report-Only", "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://plausible.io https://formspree.io; form-action 'self' https://formspree.io; frame-ancestors 'none'; base-uri 'self'; object-src 'none'; upgrade-insecure-requests" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=(), interest-cohort=(), browsing-topics=()" },
        { "key": "Cross-Origin-Opener-Policy", "value": "same-origin" },
        { "key": "Cross-Origin-Resource-Policy", "value": "same-origin" },
        { "key": "X-Permitted-Cross-Domain-Policies", "value": "none" }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

_After the Report-Only period is clean, change `Content-Security-Policy-Report-Only` → `Content-Security-Policy` to enforce. If you later add a CSP report collector, append `report-to`/`report-uri`._

## 7. Recommendation
**Worth doing** — it's the single remaining gap between the waitlist and the blueprint's security bar, it's low-risk and reversible, and the CLI is already set up. It's not urgent for a pre-launch waitlist, so it can wait until convenient — but when Detta starts driving real traffic (and certainly before launch), the security headers and CSP should be in place. The only thing it genuinely requires from you is access to the DNS for `detta.us` to do the cutover.

## 8. Decisions for the owner
- [ ] OK to repoint `detta.us` DNS from GitHub Pages to Vercel?
- [ ] Deploy model: auto-deploy from `main` (convenient) or manual `vercel --prod` (deliberate)?
- [ ] Now, or defer until closer to launch?
