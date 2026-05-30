import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOCALE,
  SITE_LAST_MODIFIED,
  SITE_DESCRIPTION,
  PRIMARY_KEYWORDS,
  APP_INSTALL_KEYWORDS,
  WHOLESALE_PRODUCTS_KEYWORDS,
  APP_STORE_URL,
  PLAY_STORE_URL,
  PHONE_NUMBER,
  CATEGORIES,
  CITIES,
} from "./constants";

// ─── Dynamic Metadata Generator ─────────────────────────────────────────────

interface MetadataOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`;
const DEFAULT_APP_SCREENSHOTS = [
  `${SITE_URL}/screenshots/explore.png`,
  `${SITE_URL}/screenshots/dashboard.png`,
  `${SITE_URL}/screenshots/orders.png`,
];

export function generatePageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image,
}: MetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const allKeywords = Array.from(new Set([
    ...WHOLESALE_PRODUCTS_KEYWORDS,
    ...PRIMARY_KEYWORDS,
    ...APP_INSTALL_KEYWORDS,
    ...keywords,
  ]));
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const socialImage = image ?? DEFAULT_OG_IMAGE;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: allKeywords.join(", "),
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    applicationName: `${SITE_NAME} - Wholesale Products App`,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en-IN": url,
      },
    },
    category: "business",
    classification: "B2B wholesale marketplace",
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [{ url: socialImage, width: 1200, height: 630, alt: `${SITE_NAME} wholesale marketplace app` }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [socialImage],
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
      title: `${SITE_NAME} - Wholesale Products App`,
    },
    other: {
      "mobile-web-app-capable": "yes",
      "application-name": `${SITE_NAME} Wholesale Products App`,
    },
  };
}

// ─── JSON-LD: SoftwareApplication Schema ────────────────────────────────────

export function generateAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} - Wholesale Marketplace`,
    alternateName: `${SITE_NAME} Wholesale App`,
    operatingSystem: "Android, iOS",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Wholesale marketplace",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    downloadUrl: PLAY_STORE_URL,
    ...(APP_STORE_URL.startsWith("http") ? { installUrl: APP_STORE_URL } : {}),
    isAccessibleForFree: true,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
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
    screenshot: DEFAULT_APP_SCREENSHOTS,
    featureList:
      "Verified Sellers, Real-Time Inventory, Secure Payments, Built-In Logistics, Price Negotiation, Market Insights",
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// ─── JSON-LD: WebSite Schema ───────────────────────────────────────────────

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateWholesaleProductsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Wholesale Products Online in India | ${SITE_NAME}`,
    description:
      "Browse wholesale products across India's most searched bulk buying categories, including electronics, clothing, footwear, FMCG, textiles, cosmetics, furniture, and jewellery.",
    url: SITE_URL,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: CATEGORIES.length,
    itemListElement: CATEGORIES.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/market/category/${category.slug}`,
      name: `Wholesale ${category.name} Products`,
      description: `Buy ${category.name.toLowerCase()} wholesale products online from verified bulk suppliers in India.`,
    })),
  };
}

export function generateWholesaleMarketItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Wholesale Market Pages in India | ${SITE_NAME}`,
    description:
      "Browse city-wise wholesale market pages for Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Surat, Kolkata, Ahmedabad, Jaipur, and more Indian wholesale hubs.",
    url: SITE_URL,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: CITIES.length,
    itemListElement: CITIES.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/market/${city.slug}`,
      name: `Wholesale Market in ${city.name}`,
      description: `Explore wholesale products, bulk suppliers, and verified dealers in the ${city.name} wholesale market.`,
    })),
  };
}

export function generateCityCategoryItemListSchema(opts: {
  city: string;
  citySlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Wholesale Market in ${opts.city} - Product Categories`,
    description: `Browse wholesale products in ${opts.city} by category, including electronics, clothing, footwear, FMCG, textiles, cosmetics, furniture, and more.`,
    url: `${SITE_URL}/market/${opts.citySlug}`,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: CATEGORIES.length,
    itemListElement: CATEGORIES.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/market/${opts.citySlug}/${category.slug}`,
      name: `Wholesale ${category.name} Products in ${opts.city}`,
      description: `Find wholesale ${category.name.toLowerCase()} products in ${opts.city} from verified bulk suppliers.`,
    })),
  };
}

export function generateCategoryCityItemListSchema(opts: {
  category: string;
  categorySlug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Wholesale ${opts.category} Products by City`,
    description: `Browse wholesale ${opts.category.toLowerCase()} products in India's top wholesale markets and cities.`,
    url: `${SITE_URL}/market/category/${opts.categorySlug}`,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: CITIES.length,
    itemListElement: CITIES.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/market/${city.slug}/${opts.categorySlug}`,
      name: `Wholesale ${opts.category} Products in ${city.name}`,
      description: `Source wholesale ${opts.category.toLowerCase()} products in ${city.name}, ${city.state}.`,
    })),
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
    foundingLocation: {
      "@type": "Place",
      name: "New Delhi, India",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${PHONE_NUMBER}`,
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
    },
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
    inLanguage: "en-IN",
    datePublished: SITE_LAST_MODIFIED,
    dateModified: SITE_LAST_MODIFIED,
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
    "@type": "CollectionPage",
    name: `Wholesale ${opts.category} Products in ${opts.city} | ${SITE_NAME}`,
    description: `Find wholesale ${opts.category.toLowerCase()} products, dealers, and suppliers in the ${opts.city} wholesale market. Download the ${SITE_NAME} app to connect with verified wholesalers.`,
    url: `${SITE_URL}/market/${opts.citySlug}/${opts.categorySlug}`,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Thing",
      name: `Wholesale ${opts.category} Products Market in ${opts.city}`,
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
      name: `${SITE_NAME} - Wholesale Marketplace`,
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
    "@type": "CollectionPage",
    name: `Wholesale Market in ${opts.city} | ${SITE_NAME}`,
    description: opts.description,
    url: `${SITE_URL}/market/${opts.citySlug}`,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
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
      name: `${SITE_NAME} - Wholesale Marketplace`,
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
    "@type": "CollectionPage",
    name: `Wholesale ${opts.category} Products in India | ${SITE_NAME}`,
    description: opts.description,
    url: `${SITE_URL}/market/category/${opts.categorySlug}`,
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
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
      name: `${SITE_NAME} - Wholesale Marketplace`,
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
    inLanguage: "en-IN",
    dateModified: SITE_LAST_MODIFIED,
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
      name: `${SITE_NAME} - Wholesale Marketplace`,
      operatingSystem: "Android, iOS",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "12400" },
    },
  };
}
