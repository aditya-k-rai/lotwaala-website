import type { MetadataRoute } from "next";
import { CATEGORIES, CITIES, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Programmatic SEO: /market/[city]/[category]
  // 20 cities x 12 categories = 240 indexed landing pages
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

  // Future: add blog posts, individual product pages, etc.
  // const blogPages = await getBlogPosts().map(...)

  return [...staticPages, ...marketPages];
}
