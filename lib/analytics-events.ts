// ─── Lotwaala — Named GA4 event helpers ─────────────────────────────────────
// Every tracked interaction in the app calls one of these. Centralizing names
// here prevents typos and makes it trivial to grep usage / rename later.

import { event } from "./gtag";

export type DownloadStore = "play_store" | "app_store";
export type DownloadSource =
  | "hero"
  | "download_cta"
  | "navbar"
  | "city_page"
  | "category_page"
  | "festival_page";

export type WhatsAppSource = "floating_button" | "hero_ios_notify";

// ─── App download click ──────────────────────────────────────────────────────

export function trackAppDownload(
  store: DownloadStore,
  source: DownloadSource,
  context: { city_slug?: string; category_slug?: string; festival_slug?: string } = {}
): void {
  event("app_download_click", { store, source, ...context });
}

// ─── WhatsApp click ──────────────────────────────────────────────────────────

export function trackWhatsAppClick(
  source: WhatsAppSource,
  context: { city_slug?: string; category_slug?: string } = {}
): void {
  event("whatsapp_click", { source, ...context });
}

// ─── Navbar / mobile menu link click ─────────────────────────────────────────

export function trackNavClick(label: string, href: string): void {
  event("nav_click", { label, href });
}

// ─── Category card click ─────────────────────────────────────────────────────

export function trackCategoryClick(
  category_slug: string,
  city_slug?: string
): void {
  event("category_click", { category_slug, city_slug });
}

// ─── City link click (other-cities lists) ────────────────────────────────────

export function trackCityClick(to_city: string, from_city?: string): void {
  event("city_click", { to_city, from_city });
}

// ─── Festival page link click ────────────────────────────────────────────────

export function trackFestivalClick(festival_slug: string): void {
  event("festival_click", { festival_slug });
}

// ─── Consent banner action ───────────────────────────────────────────────────

export function trackConsent(granted: boolean): void {
  event("consent_update", { granted });
}
