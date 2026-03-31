import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_DESCRIPTION,
  PRIMARY_KEYWORDS,
  APP_INSTALL_KEYWORDS,
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
  const allKeywords = [...PRIMARY_KEYWORDS, ...APP_INSTALL_KEYWORDS, ...keywords];
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

// ─── JSON-LD: BreadcrumbList Schema ─────────────────────────────────────────

export function generateBreadcrumbSchema(
  crumbs: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

// ─── JSON-LD: FAQPage Schema ────────────────────────────────────────────────

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ─── JSON-LD: Local Market Page Schema (for /market/[city]/[category]) ──────

export function generateLocalMarketSchema(opts: {
  city: string;
  state: string;
  category: string;
  categoryDescription: string;
  citySlug: string;
  categorySlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Wholesale ${opts.category} in ${opts.city} | ${SITE_NAME}`,
    description: `Find wholesale ${opts.category.toLowerCase()} dealers and suppliers in ${opts.city}, ${opts.state}. Download the ${SITE_NAME} app to connect with verified wholesalers.`,
    url: `${SITE_URL}/market/${opts.citySlug}/${opts.categorySlug}`,
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
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `Wholesale in ${opts.city}`, item: `${SITE_URL}/market/${opts.citySlug}` },
        { "@type": "ListItem", position: 3, name: `${opts.category} in ${opts.city}`, item: `${SITE_URL}/market/${opts.citySlug}/${opts.categorySlug}` },
      ],
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

// ─── JSON-LD: City Hub Page Schema ──────────────────────────────────────────

export function generateCityHubSchema(opts: {
  city: string;
  state: string;
  citySlug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Wholesale Market in ${opts.city} | ${SITE_NAME}`,
    description: opts.description,
    url: `${SITE_URL}/market/${opts.citySlug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `Wholesale in ${opts.city}`, item: `${SITE_URL}/market/${opts.citySlug}` },
      ],
    },
    about: {
      "@type": "Place",
      name: opts.city,
      address: {
        "@type": "PostalAddress",
        addressRegion: opts.state,
        addressCountry: "IN",
      },
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: `${SITE_NAME} — Wholesale Marketplace`,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12400" },
    },
  };
}

// ─── JSON-LD: Category Hub Page Schema ──────────────────────────────────────

export function generateCategoryHubSchema(opts: {
  category: string;
  categorySlug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Wholesale ${opts.category} in India | ${SITE_NAME}`,
    description: opts.description,
    url: `${SITE_URL}/market/category/${opts.categorySlug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `Wholesale ${opts.category}`, item: `${SITE_URL}/market/category/${opts.categorySlug}` },
      ],
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: `${SITE_NAME} — Wholesale Marketplace`,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12400" },
    },
  };
}

// ─── JSON-LD: Festival Page Schema ──────────────────────────────────────────

export function generateFestivalPageSchema(opts: {
  festival: string;
  festivalSlug: string;
  description: string;
  season: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${opts.festival} Wholesale Deals | ${SITE_NAME}`,
    description: opts.description,
    url: `${SITE_URL}/market/festival/${opts.festivalSlug}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `${opts.festival} Wholesale`, item: `${SITE_URL}/market/festival/${opts.festivalSlug}` },
      ],
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: `${SITE_NAME} — Wholesale Marketplace`,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12400" },
    },
  };
}
