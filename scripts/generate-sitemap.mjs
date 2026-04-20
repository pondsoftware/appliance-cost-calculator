import { writeFileSync } from "fs";

// Must match src/data/appliances.ts slugs
const slugs = [
  "space-heater", "window-ac-unit", "central-air-conditioner", "ceiling-fan",
  "portable-air-conditioner", "electric-furnace", "dehumidifier",
  "refrigerator", "electric-oven", "microwave", "dishwasher", "coffee-maker",
  "air-fryer", "instant-pot", "clothes-dryer", "washing-machine",
  "gaming-pc", "television", "game-console", "desktop-computer", "laptop",
  "monitor", "wifi-router", "incandescent-bulb", "led-bulb", "hair-dryer",
  "electric-water-heater", "pool-pump", "ev-charger", "hot-tub",
  "laser-printer", "crypto-mining-rig",
];

// Must match categories in src/data/appliances.ts converted to slugs
const categories = [
  "heating-cooling",
  "kitchen",
  "laundry",
  "electronics",
  "lighting",
  "bathroom",
  "outdoor",
  "home-office",
];

const BASE = "https://appliancecostcalculator.net";
const today = new Date().toISOString().split("T")[0];

const urls = [
  `  <url><loc>${BASE}/</loc><lastmod>${today}</lastmod><priority>1.0</priority></url>`,
  `  <url><loc>${BASE}/compare</loc><lastmod>${today}</lastmod><priority>0.9</priority></url>`,
  ...categories.map(
    (c) =>
      `  <url><loc>${BASE}/category/${c}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
  ),
  ...slugs.map(
    (s) =>
      `  <url><loc>${BASE}/${s}</loc><lastmod>${today}</lastmod><priority>0.8</priority></url>`
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
