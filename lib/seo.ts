import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  PRIMARY_KEYWORDS,
  APP_STORE_URL,
  PLAY_STORE_URL,
  PHONE_NUMBER,
} from "./constants";

// ─── Dynamic Metadata Generator ─────────────────────────────────────────────

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
}: MetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const allKeywords = [...PRIMARY_KEYWORDS, ...keywords];
  const fullTitle = `${title} | ${SITE_NAME} — Wholesaler App`;

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    applicationName: `${SITE_NAME} — Wholesaler App`,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: image
        ? [{ url: image, width: 1200, height: 630, alt: title }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: `${SITE_NAME} — Wholesaler App`,
    },
    other: {
      "mobile-web-app-capable": "yes",
      "application-name": `${SITE_NAME} Wholesaler App`,
    },
  };
}

// ─── JSON-LD: SoftwareApplication Schema ────────────────────────────────────
// This schema tells Google this is a downloadable app — enables star ratings,
// download buttons, and pricing info directly in search results.

export function generateAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} — Wholesale Marketplace`,
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: PLAY_STORE_URL,
    installUrl: APP_STORE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12400",
      bestRating: "5",
      worstRating: "1",
    },
    screenshot: `${SITE_URL}/screenshots/app-home.png`,
    featureList:
      "Verified Sellers, Real-Time Inventory, Secure Payments, Built-In Logistics, Price Negotiation, Market Insights",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// ─── JSON-LD: WebSite Schema (enables site-wide search box in SERP) ────────

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── JSON-LD: Organization Schema ───────────────────────────────────────────

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${PHONE_NUMBER}`,
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [],
  };
}

// ─── JSON-LD: Local Business Page Schema (for /market/[city]/[category]) ────

export function generateLocalMarketSchema(opts: {
  city: string;
  state: string;
  category: string;
  categoryDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Wholesale ${opts.category} in ${opts.city} | ${SITE_NAME}`,
    description: `Find wholesale ${opts.category.toLowerCase()} dealers and suppliers in ${opts.city}, ${opts.state}. Download the ${SITE_NAME} app to connect with verified wholesalers.`,
    url: `${SITE_URL}/market/${opts.city.toLowerCase()}/${opts.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: `Wholesale ${opts.category} Market in ${opts.city}`,
      description: opts.categoryDescription,
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: `${SITE_NAME} — Wholesale Marketplace`,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "12400",
      },
    },
  };
}
