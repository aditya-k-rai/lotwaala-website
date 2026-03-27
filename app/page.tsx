import type { Metadata } from "next";
import { generatePageMetadata, generateAppSchema, generateWebsiteSchema, generateOrganizationSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import AppShowcase from "@/components/AppShowcase";
import HowItWorks from "@/components/HowItWorks";
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
  ],
});

// ─── Home Page — App Showcase ────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd data={generateAppSchema()} />
      <JsonLd data={generateWebsiteSchema()} />
      <JsonLd data={generateOrganizationSchema()} />

      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="section-divider" />

        <FeatureGrid />
        <AppShowcase />
        <HowItWorks />
        <DownloadCTA />
      </main>

      <Footer />
    </>
  );
}
