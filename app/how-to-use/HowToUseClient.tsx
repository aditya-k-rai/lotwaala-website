"use client";

import { useState } from "react";
import Link from "next/link";
import { PLAY_STORE_URL, IOS_APP_INTEREST_URL } from "@/lib/constants";
import PodcastSection from "@/components/PodcastSection";

// ─── Buyer Steps ──────────────────────────────────────────────────────────────

const BUYER_STEPS = [
  {
    step: "01",
    icon: "📲",
    title: "Download the Lotwaala App",
    description:
      "Download Lotwaala free from Google Play Store (Android) or the App Store (iOS). The app is 100% free with no hidden charges, subscriptions, or fees for buyers.",
    tip: "Search 'Lotwaala' on Google Play or click the Download button on this page.",
    color: "#6366f1",
  },
  {
    step: "02",
    icon: "🪪",
    title: "Create Your Free Buyer Account",
    description:
      "Sign up with your mobile number and complete basic verification. As a buyer, you can browse all listings immediately. For bulk orders, optionally verify your business with GST for better credibility with sellers.",
    tip: "GST verification unlocks higher-volume negotiation and priority seller responses.",
    color: "#8b5cf6",
  },
  {
    step: "03",
    icon: "🔍",
    title: "Browse Dead Stock & Surplus Listings",
    description:
      "Explore 100,000+ live wholesale and dead stock listings across 120+ cities. Filter by category (textiles, electronics, FMCG, stationery, etc.), city, price range, or minimum order quantity. All sellers are GST and KYC verified.",
    tip: "Use the 'Near Me' filter to find surplus stock available in your city for faster delivery.",
    color: "#6366f1",
  },
  {
    step: "04",
    icon: "💬",
    title: "Chat Directly with the Seller",
    description:
      "Unlike directory-style platforms, Lotwaala gives you direct access to the actual manufacturer or wholesaler. Chat in-app to negotiate price, MOQ (minimum order quantity), packaging, and delivery terms — with no middleman.",
    tip: "Always verify product photos, batch details, and delivery timelines in chat before ordering.",
    color: "#0ea5e9",
  },
  {
    step: "05",
    icon: "🔒",
    title: "Place Your Order — Payment Goes Into Escrow",
    description:
      "Once you agree on terms, place your order through the app. Your payment is securely held by Lotwaala's escrow system — the seller does NOT receive funds until you confirm receipt and quality. You are fully protected.",
    tip: "Escrow means your money is safe. You only lose it if you confirm delivery and are satisfied.",
    color: "#10b981",
  },
  {
    step: "06",
    icon: "✅",
    title: "Receive, Verify & Release Payment",
    description:
      "Once the goods arrive, you have 7–10 days to physically inspect the batch quality. If satisfied, confirm receipt in the app — and Lotwaala releases the payment to the seller. If there's a quality issue, raise a dispute for resolution.",
    tip: "Inspect every unit of the batch. Use the in-app dispute feature if anything doesn't match the listing.",
    color: "#f59e0b",
  },
];

// ─── Seller Steps ─────────────────────────────────────────────────────────────

const SELLER_STEPS = [
  {
    step: "01",
    icon: "📲",
    title: "Download App & Start Seller Registration",
    description:
      "Download Lotwaala from Google Play Store and tap 'Register as Seller'. The registration is completely free — no sign-up fee, no subscription, no commission. Lotwaala is 100% free for all sellers.",
    tip: "Keep your GST certificate, Aadhaar card, and business address ready for verification.",
    color: "#6366f1",
  },
  {
    step: "02",
    icon: "✅",
    title: "Complete GST & KYC Verification",
    description:
      "Lotwaala mandates GST registration and KYC (Aadhaar/PAN) verification for every seller. This is non-negotiable — it is what makes Lotwaala India's most trusted wholesale platform. Verification is reviewed within 24–48 hours.",
    tip: "Only GST-registered businesses can list products. This protects you and gives buyers confidence.",
    color: "#10b981",
  },
  {
    step: "03",
    icon: "🏪",
    title: "Create Your Seller Store Profile",
    description:
      "Set up your business profile with your company name, description, product categories, location, and business details. A complete profile with clear photos and descriptions gets significantly more buyer inquiries.",
    tip: "Add your business registration year, key categories, and a short bio to build buyer trust fast.",
    color: "#8b5cf6",
  },
  {
    step: "04",
    icon: "📦",
    title: "List Your Dead Stock & Surplus Inventory",
    description:
      "Create product listings with clear photos, descriptions, quantities available, minimum order quantity (MOQ), and your asking price. Lotwaala is exclusively for dead stock, clearance, surplus, and factory-excess inventory — not primary catalog goods.",
    tip: "Be transparent about product condition (factory-fresh, slight defects, seasonal surplus). Honest listings get faster sales.",
    color: "#f59e0b",
  },
  {
    step: "05",
    icon: "💬",
    title: "Receive & Respond to Buyer Inquiries",
    description:
      "Buyers will contact you directly via in-app chat. Respond promptly with product details, available quantities, and delivery options. You can negotiate price, MOQ, and logistics directly — no platform middleman involved.",
    tip: "Sellers who respond within 2 hours get 3× more confirmed orders. Keep notifications on.",
    color: "#0ea5e9",
  },
  {
    step: "06",
    icon: "💰",
    title: "Ship the Order & Get Paid Via Escrow",
    description:
      "Once an order is confirmed, ship the goods via Big-Ship or your preferred logistics partner. Coordinate delivery tracking in the app. After the buyer receives and verifies the batch quality (within 7–10 days), Lotwaala releases the full payment to you.",
    tip: "Use in-app logistics coordination via Big-Ship for faster delivery and automatic tracking updates.",
    color: "#6366f1",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Is Lotwaala free to use for buyers?",
    a: "Yes, completely free. Buyers pay only for the products they purchase. There are no subscription fees, registration charges, or platform commissions charged to buyers.",
  },
  {
    q: "Is Lotwaala free for sellers?",
    a: "Yes, 100% free. Lotwaala operates on a zero-commission model. Sellers pay no registration fee, listing fee, or percentage of sales. This directly benefits sellers compared to platforms like IndiaMart (paid subscription) or Udaan (commission-based).",
  },
  {
    q: "What is the escrow system and how long does it take?",
    a: "When a buyer places an order, the payment is held securely by Lotwaala — not released to the seller immediately. The buyer has 7–10 days post-delivery to inspect and verify the product quality. If satisfied, they confirm in the app and the funds are released to the seller. If there's a dispute, Lotwaala mediates.",
  },
  {
    q: "What kind of products can be listed on Lotwaala?",
    a: "Lotwaala is exclusively for dead stock, clearance inventory, surplus batches, factory-excess goods, and slow-moving inventory. This is the platform's core differentiation — it is NOT for primary catalog or regular wholesale goods. Categories include textiles, electronics, FMCG, stationery, toys, cosmetics, and more.",
  },
  {
    q: "How long does seller verification take?",
    a: "GST and KYC verification is reviewed within 24–48 business hours. Once approved, you can list your products immediately. All sellers must be GST-registered to list on Lotwaala.",
  },
  {
    q: "What logistics partners does Lotwaala support?",
    a: "Lotwaala supports in-app delivery coordination via Big-Ship and other major logistics partners. Sellers can also arrange their own logistics — the platform provides tracking integration for buyer visibility.",
  },
  {
    q: "What if I have a dispute with a buyer or seller?",
    a: "Lotwaala provides an in-app dispute resolution system. If a buyer raises a quality issue within the 7–10 day window, Lotwaala's support team mediates between both parties. Payment is not released until the dispute is resolved.",
  },
  {
    q: "Is Lotwaala available on iOS?",
    a: "Lotwaala is currently live on Android (Google Play Store). The iOS version is scheduled to launch on August 26, 2026. iOS users can join the waitlist via WhatsApp to be notified at launch.",
  },
];

// ─── Client Component ─────────────────────────────────────────────────────────

export function HowToUseClient() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("buyer");

  const steps = activeTab === "buyer" ? BUYER_STEPS : SELLER_STEPS;

  return (
    <div className="min-h-screen bg-white">

      {/* ── Tab Selector ── */}
      <section className="sticky top-14 sm:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] py-4 shadow-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="inline-flex rounded-2xl bg-[#f1f5f9] p-1.5 gap-1">
              <button
                id="tab-buyer"
                onClick={() => setActiveTab("buyer")}
                className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeTab === "buyer"
                    ? "bg-[#6366f1] text-white shadow-md"
                    : "text-[#64748b] hover:text-[#0f172a]"
                }`}
                aria-selected={activeTab === "buyer"}
                role="tab"
              >
                🛍️ I&apos;m a Buyer
              </button>
              <button
                id="tab-seller"
                onClick={() => setActiveTab("seller")}
                className={`rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-200 ${
                  activeTab === "seller"
                    ? "bg-[#f59e0b] text-white shadow-md"
                    : "text-[#64748b] hover:text-[#0f172a]"
                }`}
                aria-selected={activeTab === "seller"}
                role="tab"
              >
                📦 I&apos;m a Seller
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Guide ── */}
      <section
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8"
        aria-label={`${activeTab === "buyer" ? "Buyer" : "Seller"} guide steps`}
      >
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: activeTab === "buyer" ? "#6366f1" : "#f59e0b" }}>
            {activeTab === "buyer" ? "Buyer Journey" : "Seller Journey"}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
            {activeTab === "buyer"
              ? "Start Buying Wholesale in 6 Simple Steps"
              : "Start Selling Your Dead Stock in 6 Simple Steps"}
          </h2>
          <p className="mt-4 text-lg text-[#64748b] max-w-2xl mx-auto">
            {activeTab === "buyer"
              ? "From downloading the app to receiving verified wholesale goods with escrow protection — here's your complete buyer guide."
              : "From registration to getting paid — here's exactly how to list, sell, and liquidate your surplus inventory on Lotwaala."}
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#6366f1] to-[#f59e0b] hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="relative flex gap-6 sm:gap-8"
                id={`${activeTab}-step-${i + 1}`}
              >
                {/* Step Number Circle */}
                <div
                  className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl text-white font-extrabold text-lg shadow-md z-10"
                  style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: step.color }}
                      >
                        Step {step.step}
                      </span>
                      <h3 className="mt-0.5 text-lg font-extrabold text-[#0f172a]">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                  <div className="mt-3 flex items-start gap-2 rounded-lg bg-[#f8fafc] px-3 py-2.5">
                    <span className="flex-shrink-0 text-sm">💡</span>
                    <p className="text-xs text-[#64748b]">
                      <strong className="font-semibold text-[#0f172a]">Pro Tip: </strong>
                      {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Section ── */}
      <section className="bg-[#f8fafc] py-16" aria-labelledby="video-heading">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Video Guides</span>
            <h2 id="video-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
              Watch Our Tutorial Videos
            </h2>
            <p className="mt-4 text-[#64748b]">
              Detailed video walkthroughs for both buyers and sellers — coming soon to our{" "}
              <a
                href="https://www.youtube.com/@Lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#6366f1] hover:underline"
              >
                YouTube channel
              </a>
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                label: "Buyer Tutorial",
                icon: "🛍️",
                desc: "Complete walkthrough: Download → Browse → Order → Receive with escrow protection.",
                color: "#6366f1",
              },
              {
                label: "Seller Tutorial",
                icon: "📦",
                desc: "Complete walkthrough: Register → KYC → List Products → Receive Orders → Get Paid.",
                color: "#f59e0b",
              },
            ].map((v) => (
              <div
                key={v.label}
                className="group rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="flex h-52 items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${v.color}18, ${v.color}08)`,
                    borderBottom: `1px solid ${v.color}20`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full shadow-lg text-white text-2xl"
                      style={{ background: v.color }}
                    >
                      ▶
                    </div>
                    <p className="mt-3 text-sm font-medium text-[#64748b]">Video Coming Soon</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span>{v.icon}</span>
                    <h3 className="font-bold text-[#0f172a]">{v.label}</h3>
                  </div>
                  <p className="mt-1.5 text-sm text-[#64748b]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Podcast Video Series ── */}
      <PodcastSection />

      {/* ── FAQ ── */}
      <section className="py-20" aria-labelledby="howto-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">FAQ</span>
            <h2 id="howto-faq-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {FAQS.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-[#0f172a]">
                  {item.q}
                  <span className="ml-4 flex-shrink-0 text-[#6366f1] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download CTA ── */}
      <section className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Download Lotwaala free on Android and start buying or selling surplus inventory today — with zero commission and full escrow protection.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={PLAY_STORE_URL}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4f46e5] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              📱 Download on Android
            </Link>
            <Link
              href={IOS_APP_INTEREST_URL}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              🍎 iOS Waitlist →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
