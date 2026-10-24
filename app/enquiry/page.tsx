import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import {
  SITE_NAME,
  SITE_URL,
  PRIMARY_PHONE_NUMBER,
  PRIMARY_PHONE_DISPLAY,
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_PHONE_DISPLAY,
  COMPANY_ADDRESS,
  PLAY_STORE_URL,
} from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import { EnquiryFormClient } from "./EnquiryFormClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "Business Enquiry — Partner with Lotwaala | India's #1 Wholesale B2B Marketplace",
  description:
    "Partner with Lotwaala — India's #1 zero-commission B2B dead stock and wholesale marketplace. Submit a business enquiry to become a seller, bulk buyer, brand partner, or media collaborator. Operated by Surplus Saga Pvt. Ltd., Greater Noida.",
  path: "/enquiry",
  keywords: [
    "Lotwaala business enquiry",
    "partner with Lotwaala India",
    "become a seller on Lotwaala",
    "wholesale seller registration India",
    "bulk buyer wholesale enquiry India",
    "B2B marketplace partnership India",
    "Lotwaala brand partnership",
    "Surplus Saga Pvt Ltd enquiry",
    "wholesale marketplace business India",
    "dead stock seller registration India",
    "B2B wholesale business enquiry",
    "Lotwaala contact business",
    "wholesale partnership India",
  ],
});

// ─── Structured Data ──────────────────────────────────────────────────────────

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Lotwaala Business Enquiry",
  description:
    "Submit a business enquiry to Lotwaala — India's #1 zero-commission dead stock and wholesale marketplace operated by Surplus Saga Private Limited.",
  url: `${SITE_URL}/enquiry`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Lotwaala — Surplus Saga Pvt. Ltd.",
    telephone: `+91-${PRIMARY_PHONE_NUMBER}`,
    email: "support@lotwaala.com",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_ADDRESS.streetAddress,
      addressLocality: COMPANY_ADDRESS.addressLocality,
      addressRegion: COMPANY_ADDRESS.addressRegion,
      postalCode: COMPANY_ADDRESS.postalCode,
      addressCountry: COMPANY_ADDRESS.addressCountry,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.instagram.com/lotwaala/",
      "https://www.youtube.com/@Lotwaala/",
      "https://www.linkedin.com/company/lotwaala/",
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Business Enquiry", item: `${SITE_URL}/enquiry` },
  ],
};

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@Lotwaala/",
    desc: "Podcast & tutorials",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "#ef4444",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lotwaala/",
    desc: "Updates & stories",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    color: "#e1306c",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/lotwaala/",
    desc: "Professional network",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "#0a66c2",
  },
  {
    label: "Google Maps",
    href: "https://share.google/Nrf7hJo1fiEvQUbcS",
    desc: "Find us on Maps",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    color: "#ea4335",
  },
];

const WHY_PARTNER = [
  {
    icon: "🆓",
    title: "Zero Commission Model",
    description:
      "Lotwaala charges sellers no registration fee, no listing fee, and no commission on sales. Sellers keep 100% of their earnings — unmatched in the Indian B2B marketplace industry.",
  },
  {
    icon: "🌐",
    title: "Pan-India Wholesale Reach",
    description:
      "Access buyers and sellers across 120+ cities in India — from Tier-1 metros to Tier-3 wholesale markets. Lotwaala's network spans every major wholesale hub.",
  },
  {
    icon: "🔒",
    title: "Escrow-Protected Payments",
    description:
      "Every transaction on Lotwaala is protected by a mandatory 7–10 day escrow system. Buyers and sellers are both protected — eliminating the fraud and payment risk endemic to traditional B2B trade.",
  },
  {
    icon: "✅",
    title: "GST & KYC Verified Community",
    description:
      "All sellers are mandatorily verified using GST registration and KYC documentation. Buyers transact with full confidence knowing every seller is a legitimate, registered business.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EnquiryPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-[#6366f1]/15 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#10b981]/10 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumb items={[{ label: "Business Enquiry", href: "/enquiry" }]} />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-sm font-medium text-[#34d399]">
              <span className="h-2 w-2 rounded-full bg-[#10b981] animate-pulse" />
              We respond within 24 business hours
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Partner With{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#10b981] bg-clip-text text-transparent">
                Lotwaala
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              Whether you want to sell your surplus inventory, buy wholesale goods at factory price, explore a brand partnership, or collaborate on media — we&apos;re ready to talk. Fill the form below and our team will reach out within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Why Partner ── */}
        <section className="py-16 bg-[#f8fafc]" aria-labelledby="why-partner-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Why Choose Lotwaala</span>
              <h2 id="why-partner-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                4 Reasons to Partner with India&apos;s Most Trusted B2B Marketplace
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_PARTNER.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-5 shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-3 font-bold text-[#0f172a] text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Form & Sidebar ── */}
        <section className="py-16" aria-labelledby="enquiry-form-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">

              {/* Form */}
              <div>
                <h2 id="enquiry-form-heading" className="text-2xl font-extrabold text-[#0f172a]">
                  Send Us a Business Enquiry
                </h2>
                <p className="mt-2 text-[#64748b]">
                  Fill in your details below — your enquiry will be sent directly to our team via WhatsApp for the fastest response.
                </p>
                <div className="mt-6">
                  <EnquiryFormClient />
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">

                {/* Direct Contact */}
                <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-[#0f172a]">Direct Contact</h3>
                  <div className="mt-4 space-y-3">
                    <a
                      href={`tel:${PRIMARY_PHONE_NUMBER}`}
                      className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#6366f1] transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1]">📞</span>
                      <div>
                        <p className="font-semibold text-[#0f172a]">{PRIMARY_PHONE_DISPLAY}</p>
                        <p className="text-xs text-[#94a3b8]">Primary Calling Line</p>
                      </div>
                    </a>
                    <a
                      href={`https://wa.me/91${WHATSAPP_PHONE_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#10b981] transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10b981]/10 text-[#10b981]">💬</span>
                      <div>
                        <p className="font-semibold text-[#0f172a]">{WHATSAPP_PHONE_DISPLAY}</p>
                        <p className="text-xs text-[#94a3b8]">Secondary WhatsApp Support</p>
                      </div>
                    </a>
                    <a
                      href="mailto:support@lotwaala.com"
                      className="flex items-center gap-3 text-sm text-[#475569] hover:text-[#6366f1] transition-colors"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1]">✉️</span>
                      <div>
                        <p className="font-semibold text-[#0f172a]">support@lotwaala.com</p>
                        <p className="text-xs text-[#94a3b8]">Business enquiries</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1]">🏢</span>
                      <div>
                        <p className="font-semibold text-[#0f172a] text-sm">Registered Office</p>
                        <p className="text-xs text-[#64748b] leading-relaxed">
                          Surplus Saga Pvt. Ltd.<br />
                          KH 58, Tigri Gol Chakkar, Plot no 2,<br />
                          Taj Hwy, Greater Noida, UP 201009
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6366f1]/10 text-[#6366f1]">🕐</span>
                      <div>
                        <p className="font-semibold text-[#0f172a] text-sm">Support Hours</p>
                        <p className="text-xs text-[#64748b]">Mon–Sat: 9 AM – 6 PM IST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-[#0f172a]">Follow Lotwaala</h3>
                  <div className="mt-4 space-y-3">
                    {SOCIAL_LINKS.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] p-3 transition-all hover:border-transparent hover:shadow-md"
                      >
                        <span style={{ color: s.color }}>{s.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-[#0f172a]">{s.label}</p>
                          <p className="text-xs text-[#94a3b8]">{s.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download App */}
                <div className="rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] p-6 text-white">
                  <h3 className="font-bold">Download the App</h3>
                  <p className="mt-2 text-sm text-white/80">
                    Start buying or selling wholesale today — free on Android.
                  </p>
                  <Link
                    href={PLAY_STORE_URL}
                    className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#4f46e5] hover:shadow-md transition-shadow"
                  >
                    📱 Download on Android
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Response Promise ── */}
        <section className="bg-[#f8fafc] py-12">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0f172a]">Our Response Promise</h2>
            <p className="mt-3 text-[#64748b]">
              Every business enquiry submitted through this form is reviewed by our team and responded to
              within <strong className="text-[#0f172a]">24 business hours</strong> (Monday–Saturday,
              9 AM – 6 PM IST). For urgent matters, reach us directly via WhatsApp at{" "}
              <a
                href={`https://wa.me/91${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#6366f1] hover:underline"
              >
                {WHATSAPP_PHONE_DISPLAY}
              </a>
              .
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
