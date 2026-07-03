// One-shot SEO/AEO enrichment for the /learn library (July 2026 roadmap, Tier 1).
// - Generates branded per-article OG images (sharp, borrowed from the platform checkout)
// - Rewrites each article: per-article og:image + twitter card, Article JSON-LD
//   enrichment (image, articleSection, isAccessibleForFree, citation), and a
//   "Keep reading" chips block replacing the plain "See also" sentence.
// - Generates /feed.xml (RSS 2.0) and injects CollectionPage schema + feed link
//   into the Learn hub.
// Deterministic + idempotent-ish: reports every transform per file; run from repo root:
//   node scripts/seo-enrich-2026-07.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";

const require = createRequire("/Users/carlrausaesq./ClaudeSandbox/Paytio/package.json");
const sharp = require("sharp");

const ROOT = path.resolve(import.meta.dirname, "..");
const BASE = "https://www.detta.us";
const CFPB = "https://www.consumerfinance.gov/";
const FTC = "https://www.ftc.gov/";
const IRS = "https://www.irs.gov/";

const ARTICLES = {
  "debt-collector-rights": {
    short: "Your rights when a debt collector calls",
    desc: "What collectors can and cannot do under the FDCPA, what to do when they call, and how to spot a scam.",
    date: "2026-06-26",
    section: "Your Rights",
    citation: [CFPB, FTC],
    ogLines: ["Your rights when a", "debt collector calls"],
    related: ["debt-validation-letter", "can-a-credit-card-company-sue-you", "statute-of-limitations-on-debt"],
  },
  "debt-validation-letter": {
    short: "How to write a debt validation letter",
    desc: "Make a collector prove the debt is really yours before you pay. The 30-day window and what your letter must include.",
    date: "2026-07-02",
    section: "Your Rights",
    citation: [CFPB, FTC],
    ogLines: ["How to write a debt", "validation letter"],
    related: ["debt-collector-rights", "statute-of-limitations-on-debt", "negotiate-credit-card-debt"],
  },
  "negotiate-credit-card-debt": {
    short: "How to negotiate credit card debt yourself",
    desc: "How much to offer, which department to call, and how to get the deal in writing — without a settlement company.",
    date: "2026-07-02",
    section: "Do It Yourself",
    citation: [CFPB, FTC, IRS],
    ogLines: ["How to negotiate credit card", "debt settlement yourself"],
    related: ["do-i-need-a-debt-settlement-company", "debt-validation-letter", "can-a-credit-card-company-sue-you"],
  },
  "do-i-need-a-debt-settlement-company": {
    short: "Do I need a debt settlement company?",
    desc: "An honest comparison of your options for resolving debt, including doing it yourself for free.",
    date: "2026-06-26",
    section: "Your Options",
    citation: [CFPB, FTC],
    ogLines: ["Do I need a debt", "settlement company?"],
    related: ["negotiate-credit-card-debt", "debt-collector-rights", "drowning-in-credit-card-debt"],
  },
  "can-a-credit-card-company-sue-you": {
    short: "Can a credit card company actually sue you?",
    desc: "The real timeline from missed payment to lawsuit, garnishment, and the statute of limitations.",
    date: "2026-06-26",
    section: "Lawsuits & Time Limits",
    citation: [CFPB, FTC],
    ogLines: ["Can a credit card company", "actually sue you?"],
    related: ["statute-of-limitations-on-debt", "can-debt-collectors-garnish-wages", "debt-validation-letter"],
  },
  "drowning-in-credit-card-debt": {
    short: "Drowning in credit card debt? Start here",
    desc: "A calm, judgment-free first step when it all feels bottomless, plus where to find help.",
    date: "2026-06-26",
    section: "Start Here",
    citation: [CFPB, FTC],
    ogLines: ["Drowning in credit card", "debt? Start here."],
    related: ["debt-snowball-vs-avalanche", "debt-collector-rights", "do-i-need-a-debt-settlement-company"],
  },
  "debt-snowball-vs-avalanche": {
    short: "Debt snowball vs. avalanche",
    desc: "Which method clears your cards faster, the honest answer, and how to choose.",
    date: "2026-06-26",
    section: "Payoff Strategy",
    citation: [CFPB, FTC],
    ogLines: ["Debt snowball vs. avalanche:", "which clears cards faster?"],
    related: ["drowning-in-credit-card-debt", "negotiate-credit-card-debt", "statute-of-limitations-on-debt"],
  },
  "statute-of-limitations-on-debt": {
    short: "Statute of limitations on debt",
    desc: "How long you can be sued over a debt, when the clock starts, and what quietly restarts it.",
    date: "2026-07-02",
    section: "Lawsuits & Time Limits",
    citation: [CFPB, FTC],
    ogLines: ["Statute of limitations on debt:", "how long can you be sued?"],
    related: ["can-a-credit-card-company-sue-you", "can-debt-collectors-garnish-wages", "debt-validation-letter"],
  },
  "can-debt-collectors-garnish-wages": {
    short: "Can debt collectors garnish your wages?",
    desc: "When garnishment can happen, the federal limit on your paycheck, and which income is protected.",
    date: "2026-07-02",
    section: "Lawsuits & Time Limits",
    citation: [CFPB, FTC],
    ogLines: ["Can debt collectors garnish", "your wages or bank account?"],
    related: ["statute-of-limitations-on-debt", "can-a-credit-card-company-sue-you", "debt-collector-rights"],
  },
};

const report = [];
const ok = (f, what) => report.push(`OK    ${f}: ${what}`);
const miss = (f, what) => report.push(`MISS  ${f}: ${what}`);

// ── 1. OG images ─────────────────────────────────────────────
const ogDir = path.join(ROOT, "brand", "og");
fs.mkdirSync(ogDir, { recursive: true });
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

async function makeOg(slug, lines) {
  const tspans = lines
    .map((l, i) => `<tspan x="80" dy="${i === 0 ? 0 : 76}">${esc(l)}</tspan>`)
    .join("");
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0D4F4F"/>
  <rect x="0" y="0" width="1200" height="6" fill="#C8922A"/>
  <text x="80" y="110" font-family="Georgia, serif" font-weight="bold" font-size="40" fill="#C8922A">Detta</text>
  <text x="80" y="300" font-family="Georgia, serif" font-weight="bold" font-size="62" fill="#FBFDFD">${tspans}</text>
  <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#9FC6C4">Free, attorney-reviewed guide &#183; detta.us/learn</text>
</svg>`;
  await sharp(Buffer.from(svg)).png().toFile(path.join(ogDir, `${slug}.png`));
  ok(slug, "og image generated");
}

// ── 2. Article rewrites ─────────────────────────────────────
function chipsBlock(slug) {
  const rel = ARTICLES[slug].related;
  const chips = rel
    .map((r) => `<a class="kr-chip" href="/learn/${r}/">${esc(ARTICLES[r].short)}</a>`)
    .join("\n        ");
  return `    <style>
      .kr{margin:34px 0 0;padding:22px 24px;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 2px 12px rgba(13,79,79,0.05)}
      .kr h2{margin:0 0 12px;font-size:20px}
      .kr-chips{display:flex;flex-wrap:wrap;gap:10px}
      .kr-chip{display:inline-flex;align-items:center;font-size:14px;font-weight:600;color:var(--teal);background:var(--teal-light);border:1px solid var(--line);border-radius:999px;padding:8px 15px;text-decoration:none;transition:transform .12s ease,box-shadow .12s ease}
      .kr-chip:hover{transform:translateY(-1px);box-shadow:0 5px 14px rgba(13,79,79,0.13)}
    </style>
    <div class="kr">
      <h2>Keep reading</h2>
      <div class="kr-chips">
        ${chips}
        <a class="kr-chip" href="/learn/">All guides &rarr;</a>
      </div>
    </div>
`;
}

function rewriteArticle(slug) {
  const f = path.join(ROOT, "learn", slug, "index.html");
  let h = fs.readFileSync(f, "utf-8");
  const cfg = ARTICLES[slug];
  const ogUrl = `${BASE}/brand/og/${slug}.png`;

  // 2a. og:image meta -> per-article
  const before1 = h;
  h = h.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${ogUrl}" />\n  <meta name="twitter:card" content="summary_large_image" />\n  <meta name="twitter:image" content="${ogUrl}" />`
  );
  h !== before1 ? ok(slug, "og:image + twitter card") : miss(slug, "og:image meta");

  // 2b. JSON-LD Article image
  const before2 = h;
  h = h.replace(/"image": "https:\/\/www\.detta\.us\/og-image\.png"/, `"image": "${ogUrl}"`);
  h !== before2 ? ok(slug, "JSON-LD image") : miss(slug, "JSON-LD image");

  // 2c. Article enrichment after "about" array
  const before3 = h;
  h = h.replace(/("about": \[[^\]]*\])/, (m, g1) =>
    `${g1},\n      "articleSection": ${JSON.stringify(cfg.section)},\n      "isAccessibleForFree": true,\n      "citation": ${JSON.stringify(cfg.citation)}`
  );
  h !== before3 ? ok(slug, "articleSection/citation") : miss(slug, "about-array anchor");

  // 2d. Keep-reading block + trim the trailing "See also" sentence
  const metaRe =
    /(<p class="meta" style="margin-top:28px;border-top:1px solid var\(--line\);padding-top:18px;">)(Reviewed by a consumer-protection attorney &middot; Last reviewed [A-Za-z]+ 2026)[\s\S]*?<\/p>/;
  if (metaRe.test(h)) {
    h = h.replace(metaRe, `${chipsBlock(slug)}\n    $1$2.</p>`);
    ok(slug, "keep-reading block");
  } else {
    miss(slug, "trailing meta line pattern");
  }

  fs.writeFileSync(f, h);
}

// ── 3. feed.xml ──────────────────────────────────────────────
function rfc822(iso) {
  const [y, m, d] = iso.split("-");
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][+m - 1];
  return `${+d} ${mon} ${y} 12:00:00 GMT`;
}
function makeFeed() {
  const items = Object.entries(ARTICLES)
    .sort((a, b) => (a[1].date < b[1].date ? 1 : -1))
    .map(
      ([slug, c]) => `  <item>
    <title>${esc(c.short)}</title>
    <link>${BASE}/learn/${slug}/</link>
    <guid isPermaLink="true">${BASE}/learn/${slug}/</guid>
    <pubDate>${rfc822(c.date)}</pubDate>
    <description>${esc(c.desc)} Free, attorney-reviewed, plain English.</description>
  </item>`
    )
    .join("\n");
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Detta Learn — resolve your debt yourself</title>
  <link>${BASE}/learn/</link>
  <description>Free, attorney-reviewed, plain-English guides to understanding and resolving your own debt. Self-help software, not a law firm.</description>
  <language>en-us</language>
${items}
</channel>
</rss>
`;
  fs.writeFileSync(path.join(ROOT, "feed.xml"), feed);
  ok("feed.xml", `generated with ${Object.keys(ARTICLES).length} items`);
}

// ── 4. Learn hub: CollectionPage schema + feed link ─────────
function enrichHub() {
  const f = path.join(ROOT, "learn", "index.html");
  let h = fs.readFileSync(f, "utf-8");
  const list = Object.entries(ARTICLES).map(([slug, c], i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.short,
    url: `${BASE}/learn/${slug}/`,
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Learn: Resolve Your Debt Yourself",
    url: `${BASE}/learn/`,
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: "Detta", url: `${BASE}/` },
    mainEntity: { "@type": "ItemList", itemListElement: list },
  };
  if (!h.includes('"CollectionPage"')) {
    h = h.replace(
      /(<script type="application\/ld\+json">\n\{ "@context":"https:\/\/schema\.org","@type":"BreadcrumbList")/,
      `<script type="application/ld+json">\n${JSON.stringify(schema)}\n  </script>\n  $1`
    );
    ok("learn hub", "CollectionPage + ItemList schema");
  }
  if (!h.includes("feed.xml")) {
    h = h.replace(
      /(<link rel="manifest" href="\/site\.webmanifest" \/>)/,
      `$1\n  <link rel="alternate" type="application/rss+xml" title="Detta Learn" href="/feed.xml" />`
    );
    ok("learn hub", "rss alternate link");
  }
  fs.writeFileSync(f, h);
}

// ── run + validate ──────────────────────────────────────────
const run = async () => {
  for (const [slug, c] of Object.entries(ARTICLES)) await makeOg(slug, c.ogLines);
  for (const slug of Object.keys(ARTICLES)) rewriteArticle(slug);
  makeFeed();
  enrichHub();

  // validation: every ld+json block in touched files must parse
  const targets = [...Object.keys(ARTICLES).map((s) => `learn/${s}/index.html`), "learn/index.html"];
  for (const t of targets) {
    const h = fs.readFileSync(path.join(ROOT, t), "utf-8");
    const blocks = h.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
    for (const b of blocks) {
      const body = b.replace(/<\/?script[^>]*>/g, "");
      try {
        JSON.parse(body);
      } catch (e) {
        miss(t, `INVALID JSON-LD: ${e.message}`);
      }
    }
    ok(t, `${blocks.length} JSON-LD blocks parse`);
  }
  console.log(report.join("\n"));
  const misses = report.filter((r) => r.startsWith("MISS"));
  console.log(`\n${misses.length === 0 ? "ALL TRANSFORMS APPLIED CLEANLY" : `${misses.length} MISSES — inspect above`}`);
};
run();
