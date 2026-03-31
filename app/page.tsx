import type { Metadata } from "next";
import {
  generatePageMetadata,
  generateAppSchema,
  generateWebsiteSchema,
  generateOrganizationSchema,
  generateFAQSchema,
} from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
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
import Footer from "@/components/Footer";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "India's #1 Wholesale Marketplace App — Download Free",
  description:
    "Lotwaala is the #1 wholesaler app in India. Connect with verified wholesale suppliers, browse bulk inventory across 120+ cities, and close deals from your phone. Download free on Android & iOS.",
  path: "/",
  keywords: [
    "wholesale marketplace app",
    "wholesaler app download",
    "B2B wholesale app India",
    "bulk inventory app",
    "wholesale supplier app",
    "dead stock marketplace India",
    "wholesale products India",
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
    question: "What is Lotwaala?",
    answer: `${SITE_NAME} is India's #1 wholesale marketplace app. It connects retailers and bulk buyers with verified wholesale suppliers across 120+ Indian cities. Browse thousands of wholesale listings, negotiate pricing, and close deals — all from your phone. Download free on Android and iOS.`,
  },
  {
    question: "Is Lotwaala free to use?",
    answer: `Yes! ${SITE_NAME} is completely free to download and use. There are no subscription fees, listing charges, or hidden costs. Connect with verified wholesalers across India at zero cost.`,
  },
  {
    question: "How do I download the Lotwaala wholesale app?",
    answer: `You can download ${SITE_NAME} for free from the Google Play Store (Android) or Apple App Store (iOS). Create your business profile in under 60 seconds and start browsing wholesale listings immediately.`,
  },
  {
    question: "What products can I find on Lotwaala?",
    answer: `${SITE_NAME} covers 12+ wholesale categories including Electronics, Clothing & Apparel, Footwear, Home Appliances, Toys & Games, Cosmetics & Beauty, Stationery, FMCG & Grocery, Furniture, Auto Parts, Textiles & Fabrics, and Jewellery & Accessories. New categories are added regularly.`,
  },
  {
    question: "Which cities does Lotwaala cover?",
    answer: `${SITE_NAME} connects you with wholesalers in 20+ major Indian cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Surat, Jaipur, Lucknow, and more. Our network is growing rapidly to cover Tier-2 and Tier-3 cities as well.`,
  },
  {
    question: "How is Lotwaala different from IndiaMART or other B2B platforms?",
    answer: `${SITE_NAME} is purpose-built for wholesale buying and selling. Unlike general B2B platforms, we focus exclusively on wholesale with features like real-time inventory, in-app price negotiation, escrow-protected payments, and integrated logistics. Every supplier is KYC-verified with real buyer reviews.`,
  },
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

        <FAQSection
          title="Everything You Need to Know About Lotwaala"
          subtitle="Common questions about India's #1 wholesale marketplace app"
          faqs={HOME_FAQS}
        />

        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}
