import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/market/", "/market/category/", "/market/festival/"],
        disallow: ["/admin/", "/account/", "/api/", "/dashboard/", "/settings/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
