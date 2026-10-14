# Partner pages

A partner page is a private signup page at `detta.us/<slug>/`, reached only from a link or
QR poster a company shares with its workers. It is `noindex`, and it is never added to the
sitemap, feed, llms.txt, or any site navigation.

This repo is public and deploys in full. **Never commit a company's name until that company
has given written consent.** That is why every page has two versions:

| Version | Wording | Where the wording lives |
|---|---|---|
| Generic (default) | "Free for drivers.", "your company" | `docs/partner-pages/partners.json` (public) |
| Named (after consent) | "Free for <Company> drivers." | `.partners-private/<slug>.json` (gitignored, local only) |

Both versions use the same URL and the same QR code, so posters printed for the generic
version keep working after the switch.

## Build

```
node scripts/partner-page.mjs <slug>            # generic version
node scripts/partner-page.mjs <slug> --named    # named version (only after written consent)
```

This writes `<slug>/index.html` and `<slug>/poster.pdf` from `page.template.html` and
`poster.template.html`. Never edit `<slug>/index.html` by hand. The PDF step uses Playwright
from the app repo checked out next to this one (`../Paytio`). Set `POSTER_PNG=/path.png` to
also save a preview image. The script warns if the poster runs past the page bottom.

## Switch a page to the named version

1. Get written consent covering the name, the URL, the QR poster, and the right to have the page taken down.
2. Make sure `.partners-private/<slug>.json` exists (a backup lives outside this repo).
3. `node scripts/partner-page.mjs <slug> --named`, review the page at 390px and desktop, commit `<slug>/index.html` and `<slug>/poster.pdf`, open a PR.

## Add a new partner

1. Add an entry to `partners.json` with generic wording. Keys: `slug`, `signupSource` (`partner-<slug>`), `forLine`, `headline`, `who`, `company`, `Company`, `leaveLine`, `pageTitle`, `metaDescription`.
2. Optional, after consent: add `.partners-private/<slug>.json` overriding any of those keys with the company's name.
3. Make the QR code for the plain `https://www.detta.us/<slug>/` and save it as `<slug>/qr.svg` and `<slug>/qr.png`. Decode it from the rendered poster before printing, and scan the printed copy with a real iPhone and Android phone from about 3 feet.
4. The templates are written for drivers (truck notes and fuel cards in the scope box, "whenever you are parked"). For another industry, generalize those lines in the templates first.

## Rules every partner page keeps

- Free terms on the page match what was offered, word for word.
- Partners get only a total signup count, shown as a range when small. Never confirm or deny any one person. The privacy policy (section 5, "Partner pages") discloses this.
- The form sends only email, optional first name, optional situation, the partner tag, and an allow-listed `utm_source`. Test only with `window.fetch` overridden in the page; never submit to the live form.
- No em dashes or en dashes. Footer disclaimer copied word for word from the rest of the site.
