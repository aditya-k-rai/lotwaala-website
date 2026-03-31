import type { MetadataRoute } from "next";
import { CATEGORIES, CITIES, FESTIVALS, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Home page ──
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // ── City Hub pages: /market/[city] — 20 pages ──
  const cityHubPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${SITE_URL}/market/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // ── Category Hub pages: /market/category/[category] — 12 pages ──
  const categoryHubPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/market/category/${cat.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // ── Festival pages: /market/festival/[festival] — 6 pages ──
  const festivalPages: MetadataRoute.Sitemap = FESTIVALS.map((fest) => ({
    url: `${SITE_URL}/market/festival/${fest.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Programmatic SEO: /market/[city]/[category] — 240 pages ──
  const marketPages: MetadataRoute.Sitemap = [];
  for (const city of CITIES) {
    for (const cat of CATEGORIES) {
      marketPages.push({
        url: `${SITE_URL}/market/${city.slug}/${cat.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Total: 1 + 20 + 12 + 6 + 240 = 279 URLs
  return [
    ...staticPages,
    ...cityHubPages,
    ...categoryHubPages,
    ...festivalPages,
    ...marketPages,
  ];
}
