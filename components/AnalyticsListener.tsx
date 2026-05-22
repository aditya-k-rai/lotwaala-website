"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, getPageContext, isGaEnabled } from "@/lib/gtag";

// Fires a `page_view` on every App Router navigation, enriched with
// page_type / city_slug / city_name / state / category_slug derived from the URL.

export default function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isGaEnabled() || !pathname) return;
    const ctx = getPageContext(pathname);
    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    pageview(url, { ...ctx });
  }, [pathname, searchParams]);

  return null;
}
