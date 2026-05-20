import type { Metadata } from "next";
import {
  generatePageMetadata,
  generateAppSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { SITE_NAME, CATEGORIES, CITIES } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
import MarketExplorer from "@/components/MarketExplorer";
import CategoryBrowser from "@/components/CategoryBrowser";
import FAQSection from "@/components/FAQSection";
import DownloadCTA from "@/components/DownloadCTA";
import PopularSearches from "@/components/PopularSearches";
import Footer from "@/components/Footer";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "Wholesale Products Online India — Buy 1,00,000+ Wholesale Products on Lotwaala",
  description:
    "Buy wholesale products online in India on Lotwaala — the #1 wholesale products app serving all of India. Browse 1,00,000+ wholesale products from 10,000+ verified wholesalers, with dedicated hubs in 50+ major cities and pan-India delivery. Best prices on wholesale goods, bulk inventory, and B2B wholesale supplies. Download free on Android & iOS.",
  path: "/",
  keywords: [
    "wholesale products",
    "wholesale products online",
    "wholesale products India",
    "buy wholesale products online",
    "wholesale products app",
    "wholesale products near me",
    "wholesale products marketplace",
    "wholesale products for resale",
    "wholesale products suppliers",
    "wholesale products distributors India",
    "wholesale products dealers India",
    "wholesale products for small business",
    "cheap wholesale products India",
    "wholesale goods online",
    "wholesale marketplace app",
    "wholesaler app download",
    "B2B wholesale app India",
    "bulk inventory app",
    "wholesale supplier app",
    "dead stock marketplace India",
    "garment suppliers India",
    "buy bulk goods India",
    "bulk buying app India",
    "B2B bulk trading app",
    "wholesale market app",
    "online bulk suppliers",
    "buy in bulk India",
  ],
});

// ─── Home Page FAQs ──────────────────────────────────────────────────────────

const HOME_FAQS = [
  {
    question: "What is Lotwaala — India's wholesale products app?",
    answer: `${SITE_NAME} is India's #1 wholesale products marketplace app, serving buyers and sellers all across India. It lets you buy wholesale products online from verified wholesalers — with dedicated market hubs in 50+ major cities and pan-India delivery to every state. Browse 1,00,000+ wholesale products with real-time inventory, negotiate bulk pricing, and close deals — all from your phone. Download free on Android and iOS.`,
  },
  {
    question: "How to buy wholesale products online in India?",
    answer: `Buying wholesale products online in India is easy with ${SITE_NAME}. Download the free app, sign up as a buyer in 60 seconds, search wholesale products by category or city, compare prices from multiple wholesalers, negotiate via in-app chat, and pay securely. Get doorstep delivery of wholesale products anywhere in India.`,
  },
  {
    question: "Is Lotwaala free for wholesale products buyers and suppliers?",
    answer: `Yes! ${SITE_NAME} is 100% free to download and use. There are no subscription fees, listing charges, or hidden costs on wholesale products. Connect with verified wholesale products suppliers across India at zero cost. Buyers pay only the product price negotiated with the wholesaler.`,
  },
  {
    question: "How do I download the Lotwaala wholesale products app?",
    answer: `Download ${SITE_NAME} for free from the Google Play Store (Android) or Apple App Store (iOS). Create your business profile in under 60 seconds and start browsing 1,00,000+ wholesale products from verified wholesalers immediately.`,
  },
  {
    question: "What categories of wholesale products are available on Lotwaala?",
    answer: `${SITE_NAME} covers 12+ wholesale products categories: Electronics, Clothing & Apparel, Footwear, Home Appliances, Toys & Games, Cosmetics & Beauty, Stationery, FMCG & Grocery, Furniture, Auto Parts, Textiles & Fabrics, and Jewellery & Accessories. Every category lists thousands of wholesale products at factory-direct bulk pricing.`,
  },
  {
    question: "Does Lotwaala work all across India?",
    answer: `Yes — ${SITE_NAME} is a pan-India wholesale products app. Buyers and sellers can use it from anywhere in India, and we deliver wholesale orders to every state and town nationwide. We maintain dedicated market hubs in 50+ major cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Surat, Jaipur, Lucknow, Indore, Chandigarh, Patna, Bhopal, Nagpur, Agra, Varanasi, Meerut, Ghaziabad, Noida, Amritsar, Gurgaon, Vadodara, Thane, Visakhapatnam, Madurai, Kochi, Guwahati, Bhubaneswar and more — and our Tier-2/Tier-3 town coverage is expanding rapidly.`,
  },
  {
    question: "Can I buy wholesale products for resale or small business on Lotwaala?",
    answer: `Absolutely. ${SITE_NAME} is purpose-built for retailers, resellers, kiranas, e-commerce sellers, and small businesses. Source wholesale products for resale at factory prices, get GST invoices, and scale your retail business with bulk inventory access from 10,000+ verified wholesalers.`,
  },
  {
    question: "How is Lotwaala different from IndiaMART or other B2B platforms?",
    answer: `${SITE_NAME} is purpose-built for wholesale products buying and selling, serving all of India. Unlike general B2B platforms, we focus exclusively on wholesale with features like real-time inventory, in-app price negotiation, escrow-protected payments, and integrated pan-India logistics with hubs in 50+ major cities. Every wholesale products supplier is KYC-verified with real buyer reviews.`,
  },
];

// ─── Wholesale Products — Keyword-Rich Internal Link Cloud ───────────────────
// Boosts ranking for "wholesale products [category]" + "wholesale products in [city]"
// by surfacing high-value internal anchor text from the home page.

const WHOLESALE_PRODUCTS_SEARCHES = [
  ...CATEGORIES.slice(0, 12).map((c) => ({
    label: `Wholesale ${c.name} Products`,
    href: `/market/category/${c.slug}`,
  })),
  ...CITIES.slice(0, 18).map((c) => ({
    label: `Wholesale Products in ${c.name}`,
    href: `/market/${c.slug}`,
  })),
];

// ─── Home Page — App Showcase ────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={generateAppSchema()} />
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateFAQSchema(HOME_FAQS)} />

      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="section-divider" />

        <FeatureGrid />
        <MarketExplorer />
        <CategoryBrowser />
        <AppShowcase />
        <HowItWorks />

        {/* Wholesale Products keyword cluster — internal links boost ranking */}
        <PopularSearches
          title="Popular Wholesale Products Searches"
          searches={WHOLESALE_PRODUCTS_SEARCHES}
        />

        <FAQSection
          title="Wholesale Products on Lotwaala — Everything You Need to Know"
          subtitle="Common questions about buying wholesale products online in India"
          faqs={HOME_FAQS}
        />

        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}
