#!/usr/bin/env node
// Builds a private partner page (<slug>/index.html) and its print poster
// (<slug>/poster.pdf) from the templates in docs/partner-pages/.
//
//   node scripts/partner-page.mjs kj           generic version (no company name)
//   node scripts/partner-page.mjs kj --named   company-named version
//
// Generic wording lives in docs/partner-pages/partners.json (public).
// Named wording lives in .partners-private/<slug>.json, which is gitignored,
// because this repo is public: a company's name must not be committed until
// that company has given written consent. Only build --named after consent.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createRequire } from "node:module";
import { createServer } from "node:http";
import { extname, join, resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const [slug, flag] = process.argv.slice(2);
const named = flag === "--named";
if (!slug) { console.error("Usage: node scripts/partner-page.mjs <slug> [--named]"); process.exit(1); }

const all = JSON.parse(readFileSync(join(ROOT, "docs/partner-pages/partners.json"), "utf8"));
if (!all[slug]) { console.error(`No partner "${slug}" in partners.json`); process.exit(1); }
let cfg = { ...all[slug] };
if (named) {
  const priv = join(ROOT, ".partners-private", `${slug}.json`);
  if (!existsSync(priv)) { console.error(`Missing ${priv}. Named builds need the private settings file.`); process.exit(1); }
  cfg = { ...cfg, ...JSON.parse(readFileSync(priv, "utf8")) };
}
cfg.mode = named ? "named" : "generic";
cfg.Who = cfg.who.charAt(0).toUpperCase() + cfg.who.slice(1);

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/™/g, "&trade;");
const fill = (tpl) => tpl.replace(/\{\{(\w+)\}\}/g, (_, k) => {
  if (!(k in cfg)) throw new Error(`Template token {{${k}}} has no value`);
  return esc(cfg[k]);
});

const page = fill(readFileSync(join(ROOT, "docs/partner-pages/page.template.html"), "utf8"));
writeFileSync(join(ROOT, slug, "index.html"), page);
const poster = fill(readFileSync(join(ROOT, "docs/partner-pages/poster.template.html"), "utf8"));
console.log(`Built ${slug}/index.html (${cfg.mode})`);

// Render the poster to PDF with Playwright (borrowed from the app repo).
const require = createRequire(resolve(ROOT, "../Paytio/package.json"));
let chromium;
try { ({ chromium } = require("playwright")); } catch {
  console.warn("Playwright not found next door in ../Paytio; poster PDF not rebuilt."); process.exit(0);
}
const TYPES = { ".html": "text/html", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  const p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/__poster") { res.writeHead(200, { "Content-Type": "text/html" }); return res.end(poster); }
  const f = join(ROOT, p);
  if (!f.startsWith(ROOT) || !existsSync(f)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { "Content-Type": TYPES[extname(f)] || "application/octet-stream" });
  res.end(readFileSync(f));
}).listen(0);
const port = server.address().port;
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: 816, height: 1056 } });
await tab.goto(`http://localhost:${port}/__poster`);
await tab.evaluate(() => document.fonts.ready);
const overflow = await tab.evaluate(() => {
  const els = [...document.querySelectorAll(".page p, .page li, .page img, .page h1")];
  return Math.max(...els.map((e) => e.getBoundingClientRect().bottom)) > 1056;
});
await tab.pdf({ path: join(ROOT, slug, "poster.pdf"), width: "8.5in", height: "11in", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
if (process.env.POSTER_PNG) await tab.screenshot({ path: process.env.POSTER_PNG });
await browser.close();
server.close();
console.log(`Built ${slug}/poster.pdf${overflow ? "  WARNING: content runs past the page bottom" : ""}`);
