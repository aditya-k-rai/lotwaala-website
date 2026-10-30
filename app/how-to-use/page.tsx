import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { HowToUseClient } from "./HowToUseClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "How to Use Lotwaala App — Step-by-Step Guide for Buyers & Sellers",
  description:
    "Learn how to use the Lotwaala wholesale app. Complete step-by-step guide for buyers (browse, order, escrow) and sellers (register, list dead stock, get paid). India's #1 B2B wholesale marketplace — 100% free with escrow-protected payments.",
  path: "/how-to-use",
  keywords: [
    "how to use Lotwaala app",
    "Lotwaala buyer guide India",
    "Lotwaala seller guide India",
    "how to buy wholesale on Lotwaala",
    "how to sell dead stock on Lotwaala",
    "wholesale app tutorial India",
    "B2B marketplace guide India",
    "Lotwaala escrow payment guide",
    "register as seller Lotwaala",
    "dead stock listing guide India",
    "wholesale buying app tutorial",
    "surplus inventory selling guide",
    "GST verified seller registration wholesale",
    "bulk buying app step by step",
  ],
});

// ─── Structured Data ──────────────────────────────────────────────────────────

const buyerHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Buy Wholesale on Lotwaala",
  description:
    "Step-by-step guide for buyers to purchase dead stock and wholesale goods on Lotwaala — India's #1 zero-commission B2B marketplace with mandatory escrow payment protection.",
  totalTime: "PT10M",
  supply: [
    { "@type": "HowToSupply", name: "Smartphone (Android or iOS)" },
    { "@type": "HowToSupply", name: "Lotwaala App (Free Download)" },
    { "@type": "HowToSupply", name: "Mobile Number for Verification" },
  ],
  step: [
    { "@type": "HowToStep", position: 1, name: "Download the Lotwaala App", text: "Download Lotwaala free from Google Play Store (Android) or App Store (iOS). The app is 100% free with no hidden charges for buyers." },
    { "@type": "HowToStep", position: 2, name: "Create Your Free Buyer Account", text: "Sign up with your mobile number and complete basic verification. Optionally verify your GST for higher-volume bulk negotiations." },
    { "@type": "HowToStep", position: 3, name: "Browse Dead Stock & Surplus Listings", text: "Explore 100,000+ live wholesale and surplus listings across 120+ Indian cities. Filter by category, city, price, or MOQ." },
    { "@type": "HowToStep", position: 4, name: "Chat Directly with the Seller", text: "Use in-app chat to negotiate price, MOQ, packaging, and delivery terms directly with the verified manufacturer or wholesaler." },
    { "@type": "HowToStep", position: 5, name: "Place Your Order — Payment Goes Into Escrow", text: "Place your order through the app. Your payment is securely held in escrow. The seller receives funds only after you confirm delivery and quality." },
    { "@type": "HowToStep", position: 6, name: "Receive, Verify & Release Payment", text: "Inspect the goods within 7–10 days. If satisfied, confirm in the app to release payment to the seller. If there's a quality issue, raise a dispute." },
  ],
};

const sellerHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Sell Dead Stock on Lotwaala",
  description:
    "Step-by-step guide for sellers to register, list surplus inventory, and get paid via escrow on Lotwaala — India's #1 zero-commission dead stock liquidation marketplace.",
  totalTime: "PT30M",
  supply: [
    { "@type": "HowToSupply", name: "Smartphone (Android or iOS)" },
    { "@type": "HowToSupply", name: "Lotwaala Seller App (Free)" },
    { "@type": "HowToSupply", name: "GST Registration Certificate" },
    { "@type": "HowToSupply", name: "Aadhaar / PAN for KYC" },
  ],
  step: [
    { "@type": "HowToStep", position: 1, name: "Download App & Start Seller Registration", text: "Download Lotwaala from Google Play Store and tap Register as Seller. Registration is completely free — no sign-up fee, subscription, or commission." },
    { "@type": "HowToStep", position: 2, name: "Complete GST & KYC Verification", text: "Submit your GST certificate and Aadhaar/PAN for mandatory KYC verification. Verification is completed within 24–48 hours." },
    { "@type": "HowToStep", position: 3, name: "Create Your Seller Store Profile", text: "Set up your business profile with company name, description, product categories, and location. A complete profile gets significantly more buyer inquiries." },
    { "@type": "HowToStep", position: 4, name: "List Your Dead Stock & Surplus Inventory", text: "Create product listings with photos, descriptions, quantities, MOQ, and pricing. Lotwaala is exclusively for dead stock, clearance, and surplus inventory." },
    { "@type": "HowToStep", position: 5, name: "Receive & Respond to Buyer Inquiries", text: "Buyers contact you via in-app chat. Respond promptly to negotiate price, MOQ, and logistics directly — no platform middleman involved." },
    { "@type": "HowToStep", position: 6, name: "Ship the Order & Get Paid Via Escrow", text: "Ship goods via Big-Ship or your logistics partner. After the buyer verifies quality within 7–10 days, Lotwaala releases the full payment to your account." },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Lotwaala free to use for buyers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. Buyers pay only for the products they purchase. There are no subscription fees, registration charges, or platform commissions charged to buyers." },
    },
    {
      "@type": "Question",
      name: "Is Lotwaala free for sellers?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, 100% free. Lotwaala operates on a zero-commission model. Sellers pay no registration fee, listing fee, or percentage of sales." },
    },
    {
      "@type": "Question",
      name: "What is the escrow system and how long does it take?",
      acceptedAnswer: { "@type": "Answer", text: "When a buyer places an order, payment is held securely by Lotwaala. Funds are released to the seller only 7–10 days post-delivery after the buyer verifies product quality." },
    },
    {
      "@type": "Question",
      name: "What kind of products can be listed on Lotwaala?",
      acceptedAnswer: { "@type": "Answer", text: "Lotwaala is exclusively for dead stock, clearance inventory, surplus batches, factory-excess goods, and slow-moving inventory — not primary catalog or regular wholesale goods." },
    },
    {
      "@type": "Question",
      name: "How long does seller verification take?",
      acceptedAnswer: { "@type": "Answer", text: "GST and KYC verification is reviewed within 24–48 business hours. Once approved, sellers can list products immediately." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "How to Use Lotwaala", item: `${SITE_URL}/how-to-use` },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowToUsePage() {
  return (
    <>
      <JsonLd data={buyerHowToSchema} />
      <JsonLd data={sellerHowToSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      {/* Static hero (server-rendered for SEO) */}
      <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#6366f1]/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#f59e0b]/10 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "How to Use Lotwaala", href: "/how-to-use" }]} />
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm font-medium text-[#818cf8]">
            <span className="h-2 w-2 rounded-full bg-[#6366f1] animate-pulse" />
            Step-by-Step Guide · Buyers & Sellers
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Start Buying or Selling{" "}
            <span className="bg-gradient-to-r from-[#6366f1] to-[#f59e0b] bg-clip-text text-transparent">
              Wholesale in Minutes
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
            Whether you are a retailer looking for deeply discounted bulk inventory or a manufacturer with
            dead stock to clear — Lotwaala makes it safe, simple, and completely free. Select your role below
            to see your personalised step-by-step guide.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto sm:max-w-sm">
            <div className="rounded-xl border border-[#6366f1]/30 bg-[#6366f1]/10 p-4 text-center">
              <div className="text-2xl">🛍️</div>
              <p className="mt-1 text-sm font-bold text-white">Buyers</p>
              <p className="text-xs text-slate-200">Browse & Order</p>
            </div>
            <div className="rounded-xl border border-[#f59e0b]/30 bg-[#f59e0b]/10 p-4 text-center">
              <div className="text-2xl">📦</div>
              <p className="mt-1 text-sm font-bold text-white">Sellers</p>
              <p className="text-xs text-slate-200">List & Get Paid</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive client content */}
      <main id="main-content">
        <HowToUseClient />
      </main>

      <Footer />
    </>
  );
}
