import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, PHONE_NUMBER, PLAY_STORE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "About Lotwaala — India's #1 Dead Stock & Wholesale Marketplace App",
  description:
    "Learn about Lotwaala — India's leading B2B dead stock liquidation and wholesale marketplace app. Founded by Anurag Sharma, operated by Surplus Saga Pvt. Ltd., connecting verified wholesalers & retailers across 120+ cities in India with zero commission and escrow-secured payments.",
  path: "/about",
  keywords: [
    "about Lotwaala",
    "Lotwaala wholesale app India",
    "Surplus Saga Pvt Ltd",
    "Anurag Sharma Lotwaala founder",
    "B2B dead stock marketplace India",
    "wholesale liquidation platform India",
    "zero commission wholesale app India",
    "escrow payment wholesale marketplace",
    "GST verified wholesale sellers India",
    "bulk inventory clearance app",
    "wholesale marketplace Noida",
    "B2B wholesale platform India",
    "dead stock liquidation India",
    "wholesale surplus marketplace",
    "MSME wholesale solution India",
  ],
});

// ─── Structured Data ──────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Lotwaala",
  alternateName: ["Surplus Saga Private Limited", "Surplus Saga Pvt. Ltd."],
  legalName: "Surplus Saga Private Limited",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Lotwaala is India's #1 B2B dead stock liquidation and wholesale marketplace app, operated by Surplus Saga Private Limited. We connect verified wholesalers with retailers across 120+ cities in India with zero commission, mandatory GST/KYC verification, and escrow-secured payments.",
  foundingDate: "2025-07-20",
  founder: {
    "@type": "Person",
    name: "Anurag Sharma",
    jobTitle: "Founder & CEO",
    description:
      "Anurag Sharma is the founder of Lotwaala with 15+ years of experience in global sales, international business development, and trade operations spanning India and Dubai.",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-07B, C003, Sector 4, Galaxy Blue Sapphire Plaza, Nepz Post Office",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201305",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+91-${PHONE_NUMBER}`,
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
    areaServed: "IN",
  },
  sameAs: [
    "https://www.instagram.com/lotwaala/",
    "https://www.youtube.com/@Lotwaala/",
    "https://www.linkedin.com/company/lotwaala/",
    "https://play.google.com/store/apps/details?id=com.lotwallaim.app",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
    maxValue: 50,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Lotwaala — Wholesale Marketplace",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: `+91-${PHONE_NUMBER}`,
  email: "support@lotwaala.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "G-07B, C003, Sector 4, Galaxy Blue Sapphire Plaza",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201305",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "Free",
  currenciesAccepted: "INR",
  areaServed: { "@type": "Country", name: "India" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Lotwaala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotwaala is India's #1 B2B dead stock liquidation and wholesale marketplace app, operated by Surplus Saga Private Limited. It connects verified wholesalers and manufacturers with retailers and buyers across 120+ cities in India, offering zero-commission listings, mandatory GST/KYC verification, and escrow-secured payments.",
      },
    },
    {
      "@type": "Question",
      name: "Who founded Lotwaala?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotwaala was founded by Anurag Sharma, a business leader with 15+ years of experience in global sales, real estate, and international trade across India and Dubai. He incorporated Surplus Saga Private Limited on July 20, 2025, and launched the Lotwaala app on November 26, 2025.",
      },
    },
    {
      "@type": "Question",
      name: "Is Lotwaala free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Lotwaala operates on a 100% zero-commission model. Sellers pay no registration fee, listing fee, or percentage-based commission. Buyers pay only for the products they purchase. The platform earns no cut on any transaction.",
      },
    },
    {
      "@type": "Question",
      name: "How does Lotwaala protect payments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotwaala uses a mandatory 7–10 day escrow system. When a buyer places an order, the payment is held securely by the platform. Funds are only released to the seller after the buyer physically receives and verifies the product quality. This eliminates payment fraud and bad-stock disputes.",
      },
    },
    {
      "@type": "Question",
      name: "How is Lotwaala different from IndiaMart or Udaan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike IndiaMart (paid subscriptions) and Udaan (commission-based), Lotwaala is completely free and focuses exclusively on dead stock liquidation and surplus inventory clearance. Lotwaala provides built-in escrow payments, mandatory GST/KYC verification, and direct buyer-to-seller chat — features that are absent or incomplete on traditional B2B platforms.",
      },
    },
    {
      "@type": "Question",
      name: "What cities does Lotwaala operate in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lotwaala operates across 120+ cities in India, with wholesale hubs in Delhi, Mumbai, Kolkata, Surat, Jaipur, Ahmedabad, Chennai, Noida, Bengaluru, and dozens more. The platform supports in-app logistics coordination through Big-Ship and other major delivery partners.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About Lotwaala", item: `${SITE_URL}/about` },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#6366f1]/20 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#f59e0b]/10 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumb items={[{ label: "About Lotwaala", href: "/about" }]} />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm font-medium text-[#818cf8]">
              <span className="h-2 w-2 rounded-full bg-[#6366f1] animate-pulse" />
              Est. July 2025 · Noida, India
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              India&apos;s Most Trusted{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#f59e0b] bg-clip-text text-transparent">
                Dead Stock & Wholesale
              </span>{" "}
              Marketplace
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
              Lotwaala is a zero-commission, escrow-secured B2B marketplace operated by{" "}
              <strong className="text-white">Surplus Saga Private Limited</strong>. We connect
              verified wholesalers, manufacturers, and MSMEs with retailers and buyers across
              120+ cities in India — solving the dead stock crisis, eliminating payment fraud,
              and building India&apos;s trust economy.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={PLAY_STORE_URL}
                className="inline-flex items-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
              >
                Download Free App
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>

        {/* ── Impact Stats ── */}
        <section className="bg-gradient-to-b from-[#0a0a1a] to-white py-16" aria-label="Lotwaala impact statistics">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { number: "100K+", label: "Wholesale Products Listed", color: "#6366f1" },
                { number: "10K+", label: "GST-Verified Wholesalers", color: "#f59e0b" },
                { number: "120+", label: "Cities Across India", color: "#10b981" },
                { number: "4.8★", label: "Google Play Rating", color: "#ec4899" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-[#0f172a]/50 p-6 text-center backdrop-blur-sm"
                >
                  <div
                    className="text-3xl font-extrabold sm:text-4xl"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="mt-2 text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="story-heading">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Our Story</span>
              <h2 id="story-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                From Dubai to Noida — A Mission Born in the Market
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#475569]">
                After nearly a decade in Dubai as a Sales Manager at Octagon International — specializing in global marketing and international business development — <strong>Anurag Sharma</strong> returned to India and saw a glaring problem: millions of rupees in inventory were rotting in warehouses, and small retailers were getting defrauded by unverified suppliers on fragmented B2B platforms.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                Drawing on his earlier experience at <strong>HCL Technologies</strong> and <strong>EXL Service</strong>, and his deep operational work in Noida&apos;s real estate and trade sectors, Sharma incorporated <strong>Surplus Saga Private Limited</strong> on July 20, 2025, and launched the Lotwaala marketplace app on November 26, 2025 — built to solve three non-negotiable problems: fraud, dead stock, and broken payments.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#f8fafc] to-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#0f172a]">Anurag Sharma</h3>
              <p className="text-sm font-medium text-[#6366f1]">Founder & CEO, Lotwaala</p>
              <div className="mt-5 space-y-3">
                {[
                  "15+ years across global sales, trade & real estate",
                  "Sales Manager, Octagon International — Dubai (2016–2025)",
                  "General Manager, Indirapuram real estate operations",
                  "Alumni: HCL Technologies & EXL Service",
                  "Founded Surplus Saga Pvt. Ltd. in July 2025",
                  "Launched Lotwaala App on 26 Nov 2025",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#6366f1]/10 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#6366f1]" />
                    </span>
                    <span className="text-sm text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem We Solve ── */}
        <section className="bg-[#f8fafc] py-20" aria-labelledby="problem-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#f59e0b]">The Problem</span>
              <h2 id="problem-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                Why India&apos;s B2B Market Was Broken
              </h2>
              <p className="mt-4 text-lg text-[#475569] max-w-2xl mx-auto">
                Before Lotwaala, Indian MSMEs and wholesale buyers faced three systemic crises that cost the industry thousands of crores every year.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: "🚫",
                  title: "Rampant Fraud & Fake Sellers",
                  description:
                    "Unorganised B2B platforms had no KYC or GST verification. Buyers routinely paid for goods that never arrived, or received substandard products from unverified sellers. Multi-vendor fraud cost small retailers lakhs every year.",
                  color: "#ef4444",
                },
                {
                  icon: "📦",
                  title: "The Dead Stock Crisis",
                  description:
                    "Indian manufacturers and wholesalers hold billions of rupees in excess, slow-moving, or defective inventory with no efficient channel to liquidate it. Capital tied up in dead stock was strangling MSME cash flows.",
                  color: "#f59e0b",
                },
                {
                  icon: "💸",
                  title: "Unsafe Payment Systems",
                  description:
                    "Buyers transferred full payment before delivery with no recourse if the goods were wrong. Sellers faced payment defaults after dispatching goods. There was no neutral intermediary holding funds safely.",
                  color: "#8b5cf6",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm"
                >
                  <div
                    className="text-3xl"
                    style={{ textShadow: `0 0 20px ${item.color}40` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Solution — USPs ── */}
        <section className="py-20" aria-labelledby="solution-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Our Solution</span>
              <h2 id="solution-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                How Lotwaala Fixes It — Our 4 Core USPs
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: "🆓",
                  title: "100% Zero Commission",
                  description:
                    "Sellers list, sell, and earn — without paying Lotwaala a single rupee. No registration fees, no listing charges, no percentage cut. This directly undercuts premium-subscription platforms and makes Lotwaala accessible to every MSME in India.",
                  badge: "Free Forever",
                },
                {
                  icon: "🔒",
                  title: "Mandatory 7–10 Day Escrow",
                  description:
                    "Buyer payments are locked by the platform at the time of order. Funds are released to the seller only 7–10 days post-delivery after the buyer physically verifies and confirms product quality. This eliminates payment fraud and bad-stock disputes from both sides.",
                  badge: "Payment Safety",
                },
                {
                  icon: "✅",
                  title: "Strict GST & KYC Verification",
                  description:
                    "Every seller on Lotwaala is mandatorily verified using GST registration and Aadhaar/KYC documentation before they can list a single product. No anonymous seller can operate on the platform. Buyers always know exactly who they are buying from.",
                  badge: "Trust Verified",
                },
                {
                  icon: "💬",
                  title: "Direct Vendor-to-Buyer Chat",
                  description:
                    "Unlike centralised fulfillment models, Lotwaala acts as a discovery layer. Buyers deal directly with the actual manufacturer or wholesaler — negotiating price, MOQ, and logistics via open chat — cutting out middlemen and maximising margin for both parties.",
                  badge: "Direct Trade",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-3xl">{item.icon}</span>
                    <span className="rounded-full bg-[#6366f1]/10 px-3 py-1 text-xs font-bold text-[#6366f1]">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Competitor Comparison ── */}
        <section className="bg-[#0a0a1a] py-20" aria-labelledby="comparison-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#f59e0b]">Comparison</span>
              <h2 id="comparison-heading" className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Lotwaala vs. The Market
              </h2>
              <p className="mt-4 text-white/60">
                See exactly how Lotwaala differs from traditional B2B platforms
              </p>
            </div>
            <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 text-left text-white/50 font-medium">Feature</th>
                    <th className="p-4 text-center font-bold text-[#6366f1]">Lotwaala</th>
                    <th className="p-4 text-center text-white/50 font-medium">IndiaMart</th>
                    <th className="p-4 text-center text-white/50 font-medium">TradeIndia</th>
                    <th className="p-4 text-center text-white/50 font-medium">Udaan</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Primary Focus",
                      lotwaala: "Dead Stock / Surplus Clearance",
                      indiamart: "Primary Manufacturing Leads",
                      tradeindia: "General B2B Directory",
                      udaan: "Standard Wholesale Supply",
                    },
                    {
                      feature: "Cost to Sellers",
                      lotwaala: "✅ 100% Free",
                      indiamart: "❌ Paid Subscription",
                      tradeindia: "❌ Paid Subscription",
                      udaan: "❌ Commission per Sale",
                    },
                    {
                      feature: "Payment Safety",
                      lotwaala: "✅ 7–10 Day Escrow",
                      indiamart: "❌ Direct (High Fraud Risk)",
                      tradeindia: "❌ Direct Transfer",
                      udaan: "⚠️ Platform Credit Terms",
                    },
                    {
                      feature: "Seller Verification",
                      lotwaala: "✅ Mandatory GST + KYC",
                      indiamart: "⚠️ Basic Self-Declaration",
                      tradeindia: "⚠️ Basic Self-Declaration",
                      udaan: "✅ Verified",
                    },
                    {
                      feature: "Buyer–Seller Chat",
                      lotwaala: "✅ Direct Chat",
                      indiamart: "⚠️ Inquiry Form Only",
                      tradeindia: "⚠️ Inquiry Form Only",
                      udaan: "❌ Platform-Managed",
                    },
                    {
                      feature: "Dead Stock Focus",
                      lotwaala: "✅ Exclusive Niche",
                      indiamart: "❌ Mixed",
                      tradeindia: "❌ Mixed",
                      udaan: "❌ None",
                    },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                      <td className="p-4 font-medium text-white/70">{row.feature}</td>
                      <td className="p-4 text-center font-semibold text-[#6366f1]">{row.lotwaala}</td>
                      <td className="p-4 text-center text-white/50">{row.indiamart}</td>
                      <td className="p-4 text-center text-white/50">{row.tradeindia}</td>
                      <td className="p-4 text-center text-white/50">{row.udaan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20" aria-labelledby="timeline-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Milestones</span>
              <h2 id="timeline-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                Our Journey
              </h2>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] to-[#f59e0b] sm:left-1/2" />
              <div className="space-y-10">
                {[
                  {
                    date: "July 20, 2025",
                    title: "Company Incorporated",
                    description: "Surplus Saga Private Limited officially registered under the Ministry of Corporate Affairs, Government of India.",
                    icon: "🏢",
                    side: "left",
                  },
                  {
                    date: "November 26, 2025",
                    title: "Lotwaala App Launched",
                    description: "Lotwaala Android app goes live on Google Play Store — India's first dedicated dead stock liquidation and zero-commission wholesale marketplace.",
                    icon: "🚀",
                    side: "right",
                  },
                  {
                    date: "August 26, 2026",
                    title: "iOS App Launch",
                    description: "Lotwaala expands to Apple iOS — bringing the platform to iPhone users across India.",
                    icon: "🍎",
                    side: "left",
                  },
                  {
                    date: "October 2026",
                    title: "Web Platform Launch",
                    description: "Full web platform goes live at lotwaala.com — enabling browser-based wholesale trading for businesses that prefer desktop access.",
                    icon: "🌐",
                    side: "right",
                  },
                ].map((item, i) => (
                  <div
                    key={item.date}
                    className={`relative flex items-start gap-8 ${
                      i % 2 === 0
                        ? "sm:flex-row"
                        : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"} pl-16 sm:pl-0`}>
                      <div className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
                        <span className="text-2xl">{item.icon}</span>
                        <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#6366f1]">
                          {item.date}
                        </p>
                        <h3 className="mt-1 font-bold text-[#0f172a]">{item.title}</h3>
                        <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-4 sm:static sm:flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#6366f1] ring-4 ring-white shadow sm:mt-6">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <div className="hidden sm:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="bg-[#f8fafc] py-20" aria-labelledby="mission-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] p-8 text-white">
                <div className="text-3xl">🎯</div>
                <h2 id="mission-heading" className="mt-4 text-2xl font-bold">Our Mission</h2>
                <p className="mt-3 leading-relaxed text-white/90">
                  To empower every Indian MSME, retailer, and manufacturer by providing a completely transparent, fraud-free, zero-commission wholesale marketplace that turns dead stock into live capital — while protecting every transaction with mandatory escrow and verified seller identity.
                </p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e1e3f] p-8 text-white">
                <div className="text-3xl">🔭</div>
                <h2 className="mt-4 text-2xl font-bold">Our Vision</h2>
                <p className="mt-3 leading-relaxed text-white/80">
                  To build India&apos;s most transparent, nationwide B2B digital aggregator that structurally resolves the dead stock and bulk inventory liquidation crisis for Indian MSMEs — becoming the defining trust infrastructure for B2B commerce in India and, ultimately, across Asia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section className="py-20" aria-labelledby="serve-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Who We Serve</span>
              <h2 id="serve-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a] sm:text-4xl">
                Built for Every Business in India
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🛍️",
                  title: "Retailers & Shop Owners",
                  description: "Access 100,000+ surplus and dead stock products at factory-floor prices. Stock your store without large upfront capital risk.",
                },
                {
                  icon: "🏭",
                  title: "Manufacturers & Wholesalers",
                  description: "List and liquidate excess, seasonal, or defective inventory fast. Reach thousands of verified buyers across India at zero cost.",
                },
                {
                  icon: "📱",
                  title: "E-Commerce Sellers",
                  description: "Source deeply discounted bulk inventory for resale on Meesho, Flipkart, or Amazon — and protect your purchase with escrow.",
                },
                {
                  icon: "🏗️",
                  title: "MSMEs & Small Businesses",
                  description: "Negotiate directly with manufacturers. Build supply relationships. Unlock capital from surplus stock you have sitting in your godown.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-3 font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#f8fafc] py-20" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">FAQ</span>
              <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {[
                {
                  q: "What is Lotwaala?",
                  a: "Lotwaala is India's #1 B2B dead stock liquidation and wholesale marketplace app, operated by Surplus Saga Private Limited. It connects verified wholesalers and manufacturers with retailers and buyers across 120+ cities with zero commission and escrow-secured payments.",
                },
                {
                  q: "Is Lotwaala free to use?",
                  a: "Yes, completely. Lotwaala operates on a 100% zero-commission model. There are no registration fees, listing fees, or transaction percentages charged to sellers.",
                },
                {
                  q: "How does the escrow payment work?",
                  a: "When a buyer places an order, payment is held securely by Lotwaala. Funds are only released to the seller 7–10 days after the buyer physically receives and verifies the product quality — protecting both parties.",
                },
                {
                  q: "Who is eligible to become a seller on Lotwaala?",
                  a: "Any GST-registered manufacturer, wholesaler, or distributor in India can apply to become a seller. All sellers undergo KYC and GST verification before listing products.",
                },
                {
                  q: "How is Lotwaala different from IndiaMart?",
                  a: "Unlike IndiaMart, which charges paid subscriptions and focuses on primary manufacturing leads, Lotwaala is 100% free, exclusive to dead stock and surplus clearance, and provides built-in escrow payments and direct buyer–seller chat.",
                },
                {
                  q: "Which cities does Lotwaala operate in?",
                  a: "Lotwaala operates across 120+ cities in India including Delhi, Mumbai, Surat, Jaipur, Kolkata, Chennai, Ahmedabad, Bengaluru, Noida, and more — with in-app logistics coordination via Big-Ship and other major delivery partners.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-semibold text-[#0f172a]">
                    {item.q}
                    <span className="ml-4 flex-shrink-0 text-[#6366f1] transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[#64748b] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#6366f1] to-[#4f46e5] py-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 right-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[60px]" />
          </div>
          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Join India&apos;s Trust Economy?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Download Lotwaala free on Android. Start buying or selling wholesale today — with zero commission and escrow-protected payments.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={PLAY_STORE_URL}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4f46e5] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                📱 Download on Android
              </Link>
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Business Enquiry →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
