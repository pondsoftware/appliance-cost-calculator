import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..");

// Read the TypeScript source to extract appliance slugs and categories dynamically.
// This ensures the sitemap always matches what generateStaticParams produces.
const appliancesSource = readFileSync(
  resolve(projectRoot, "src/data/appliances.ts"),
  "utf8"
);

// Extract all slug values from the appliances array
const slugMatches = appliancesSource.matchAll(/slug:\s*"([^"]+)"/g);
const slugs = [...slugMatches].map((m) => m[1]);

// Extract categories from the `categories` const array
const categoriesMatch = appliancesSource.match(
  /export const categories\s*=\s*\[([\s\S]*?)\]\s*as\s*const/
);
const categoryNames = categoriesMatch
  ? [...categoriesMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1])
  : [];

// Convert category names to URL slugs (must match categoryToSlug in category/[category]/page.tsx)
const categorySlugs = categoryNames.map((c) =>
  c.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")
);

if (slugs.length === 0) {
  throw new Error("No appliance slugs found — src/data/appliances.ts may have changed format");
}
if (categorySlugs.length === 0) {
  throw new Error("No categories found — src/data/appliances.ts may have changed format");
}

const BASE = "https://appliancecostcalculator.net";
const today = new Date().toISOString().split("T")[0];

const urls = [
  { loc: "/", priority: "1.0", lastmod: today },
  { loc: "/compare", priority: "0.9", lastmod: today },
  ...categorySlugs.map((c) => ({
    loc: `/category/${c}`,
    priority: "0.8",
    lastmod: today,
  })),
  ...slugs.map((s) => ({
    loc: `/${s}`,
    priority: "0.8",
    lastmod: today,
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url><loc>${BASE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync(resolve(projectRoot, "public/sitemap.xml"), xml);
console.log(`Generated sitemap.xml with ${urls.length} URLs (${slugs.length} appliances, ${categorySlugs.length} categories)`);
