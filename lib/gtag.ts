// ─── Google Analytics 4 — gtag helpers ──────────────────────────────────────
// Single source of truth for GA4. All event firing goes through `event()` below
// or the named helpers in `lib/analytics-events.ts`.

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const isGaEnabled = (): boolean =>
  Boolean(GA_ID) && typeof window !== "undefined";

type GtagConsentState = "granted" | "denied";

type GtagConsentParams = {
  ad_storage?: GtagConsentState;
  ad_user_data?: GtagConsentState;
  ad_personalization?: GtagConsentState;
  analytics_storage?: GtagConsentState;
  functionality_storage?: GtagConsentState;
  personalization_storage?: GtagConsentState;
  security_storage?: GtagConsentState;
  wait_for_update?: number;
};

type GtagConfigParams = Record<string, unknown> & {
  send_page_view?: boolean;
  page_path?: string;
  page_location?: string;
  page_title?: string;
};

type GtagFn = {
  (command: "js", config: Date): void;
  (command: "config", targetId: string, config?: GtagConfigParams): void;
  (command: "event", eventName: string, params?: Record<string, unknown>): void;
  (command: "consent", action: "default" | "update", params: GtagConsentParams): void;
  (command: "set", params: Record<string, unknown>): void;
};

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

// ─── Fire a custom event ─────────────────────────────────────────────────────

export function event(name: string, params: Record<string, unknown> = {}): void {
  if (!isGaEnabled() || !window.gtag) return;
  window.gtag("event", name, params);
}

// ─── Fire a page_view (used by AnalyticsListener on SPA navigation) ─────────

export function pageview(url: string, extra: Record<string, unknown> = {}): void {
  if (!isGaEnabled() || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.href,
    page_title: document.title,
    ...extra,
  });
}

// ─── Consent helpers ─────────────────────────────────────────────────────────

export function grantConsent(): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

export function denyConsent(): void {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: "denied",
  });
}

// ─── URL → page_type / city / category extraction ────────────────────────────
// Used by AnalyticsListener to enrich every page_view with location data
// without re-deriving in each component.

import { CITIES } from "./constants";

export type PageType =
  | "home"
  | "city_hub"
  | "city_category"
  | "category_hub"
  | "festival"
  | "other";

export interface PageContext {
  page_type: PageType;
  city_slug?: string;
  city_name?: string;
  state?: string;
  category_slug?: string;
  festival_slug?: string;
}

export function getPageContext(pathname: string): PageContext {
  if (pathname === "/" || pathname === "") {
    return { page_type: "home" };
  }

  const parts = pathname.split("/").filter(Boolean);

  // /market/category/:category
  if (parts[0] === "market" && parts[1] === "category" && parts[2]) {
    return { page_type: "category_hub", category_slug: parts[2] };
  }

  // /market/festival/:festival
  if (parts[0] === "market" && parts[1] === "festival" && parts[2]) {
    return { page_type: "festival", festival_slug: parts[2] };
  }

  // /market/:city  or  /market/:city/:category
  if (parts[0] === "market" && parts[1]) {
    const citySlug = parts[1];
    const cit = CITIES.find((c) => c.slug === citySlug);
    if (cit) {
      const base = {
        city_slug: cit.slug,
        city_name: cit.name,
        state: cit.state,
      };
      if (parts[2]) {
        return { page_type: "city_category", ...base, category_slug: parts[2] };
      }
      return { page_type: "city_hub", ...base };
    }
  }

  return { page_type: "other" };
}
