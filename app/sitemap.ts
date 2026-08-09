import type { MetadataRoute } from "next";
import { CATEGORIES, CITIES, FESTIVALS, SITE_LAST_MODIFIED, SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_LAST_MODIFIED);

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/team",
    "/how-to-use",
    "/enquiry",
    "/contact",
    "/privacy",
    "/terms",
    "/editorial-policy",
    "/developer",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : ["/about", "/how-to-use", "/team", "/enquiry"].includes(path) ? 0.8 : path === "/developer" ? 0.5 : 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${SITE_URL}/market/${city.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.map((category) => ({
    url: `${SITE_URL}/market/category/${category.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const cityCategoryRoutes: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    CATEGORIES.map((category) => ({
      url: `${SITE_URL}/market/${city.slug}/${category.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }))
  );

  const festivalRoutes: MetadataRoute.Sitemap = FESTIVALS.map((festival) => ({
    url: `${SITE_URL}/market/festival/${festival.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...cityRoutes,
    ...categoryRoutes,
    ...cityCategoryRoutes,
    ...festivalRoutes,
  ];
}
