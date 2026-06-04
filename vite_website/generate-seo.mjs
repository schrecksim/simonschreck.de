import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { generateSitemap, getMultilingualUrls } from "intlayer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = (process.env.SITE_URL || "https://simonschreck.de").replace(
    /\/$/,
    ""
);

const pathList = [
    { path: "/", changefreq: "monthly", priority: 1.0 },
    { path: "/aboutme", changefreq: "monthly", priority: 0.8 },
    { path: "/glossary", changefreq: "weekly", priority: 0.6 },
    { path: "/glossary/business_intelligence", changefreq: "monthly", priority: 0.6 },
    { path: "/glossary/data_analysis", changefreq: "monthly", priority: 0.6 },
    { path: "/glossary/data_engineering", changefreq: "monthly", priority: 0.6 },
    { path: "/glossary/data_science", changefreq: "monthly", priority: 0.6 },
    { path: "/glossary/requirements_engineering", changefreq: "monthly", priority: 0.6 },
    { path: "/legalnote", changefreq: "monthly", priority: 0.6 },
    { path: "/privacypolicy", changefreq: "monthly", priority: 0.6 },
];

const sitemapXml = generateSitemap(pathList, { siteUrl: SITE_URL });
fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemapXml);

const getAllMultilingualUrls = (urls) =>
    urls.flatMap((url) => Object.values(getMultilingualUrls(url)));

const allowedPaths = getAllMultilingualUrls(["/", "/aboutme", "/glossary", "glossary/business_intelligence", "glossary/data_analysis", "glossary/data_engineering", "glossary/data_science", "glossary/requirements_engineering", "/legalnote", "/privacypolicy"]);
const disallowedPaths = getAllMultilingualUrls(["/admin", "/private"]);

const robotsTxt = [
    "User-agent: *",
    ...allowedPaths.map((path) => `Allow: ${path}`),
    ...disallowedPaths.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
].join("\n");

fs.writeFileSync(path.join(__dirname, "public", "robots.txt"), robotsTxt);

console.log("SEO files generated successfully.");
