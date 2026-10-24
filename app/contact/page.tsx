import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, PHONE_NUMBER } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import ContactFormClient from "./ContactFormClient";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  Sparkles,
  HelpCircle,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Lotwaala — 24/7 Wholesale Support & Inquiries",
  description:
    "Get in touch with Lotwaala. Contact our dedicated wholesale marketplace support team via phone, WhatsApp, email, or visit our Noida headquarters. Serving 120+ cities across India.",
  path: "/contact",
  keywords: [
    "Contact Lotwaala",
    "Lotwaala customer support",
    "wholesale support India",
    "Lotwaala phone number",
    "Lotwaala Noida address",
    "wholesale app customer care",
    "Lotwaala WhatsApp support",
    "Surplus Saga Pvt Ltd contact",
  ],
});

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Lotwaala Wholesale Marketplace",
  description:
    "Official customer support and contact hub for Lotwaala, operated by Surplus Saga Private Limited.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: `${SITE_NAME} — Surplus Saga Pvt. Ltd.`,
    telephone: `+91-${PHONE_NUMBER}`,
    email: "support@lotwaala.com",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "G-07B C003, Sector 4, Galaxy Blue Sapphire Plaza",
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
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact Us", item: `${SITE_URL}/contact` },
  ],
};

const CONTACT_CHANNELS = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us Directly",
    detail: `+91 ${PHONE_NUMBER}`,
    action: `tel:+91${PHONE_NUMBER}`,
    btnText: "Call Now",
    gradient: "from-[#6366f1] to-[#818cf8]",
    tag: "Mon-Sat, 9AM-6PM",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp Chat Support",
    detail: "Fastest response via WhatsApp",
    action: `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent("Hello Lotwaala! I would like to get in touch with your team.")}`,
    btnText: "Open WhatsApp Chat",
    gradient: "from-[#10b981] to-[#34d399]",
    tag: "Average reply: < 15 mins",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Official Email Support",
    detail: "support@lotwaala.com",
    action: "mailto:support@lotwaala.com",
    btnText: "Send Email",
    gradient: "from-[#ec4899] to-[#f472b6]",
    tag: "Response in 24h",
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Corporate Headquarters",
    detail: "Galaxy Blue Sapphire Plaza, Sector 4, Noida",
    action: "https://share.google/Nrf7hJo1fiEvQUbcS",
    btnText: "Open on Google Maps",
    gradient: "from-[#f59e0b] to-[#fbbf24]",
    tag: "Noida, UP 201305",
  },
];

const CONTACT_FAQS = [
  {
    q: "How can I contact Lotwaala customer care?",
    a: `You can reach Lotwaala via phone call at +91 ${PHONE_NUMBER}, direct WhatsApp chat at +91 ${PHONE_NUMBER}, or via email at support@lotwaala.com. Our support desk operates Monday through Saturday, 9:00 AM to 6:00 PM IST.`,
  },
  {
    q: "How does Lotwaala handle order deliveries?",
    a: "Deliveries on Lotwaala are supported in-app through our integration with Big-Ship and other premier logistics partners. You can track all active orders directly in your Lotwaala app.",
  },
  {
    q: "What if I want to register as a bulk supplier or dead stock seller?",
    a: "Sellers can register for free on the Lotwaala app. We charge zero percent commission and no listing fees. You can also submit an onboarding request on our Business Enquiry page.",
  },
  {
    q: "Where is Lotwaala's physical office located?",
    a: "Our registered corporate office is located at Surplus Saga Pvt. Ltd. (Lotwaala), G-07B C003, Sector 4, Galaxy Blue Sapphire Plaza, Noida, Uttar Pradesh 201305.",
  },
  {
    q: "Is payment on Lotwaala safe?",
    a: "Yes. All transactions are protected by escrow. Payments are only released to the supplier after the buyer inspects and approves the delivered wholesale goods.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-[#fafbff]">
        {/* ── Hero Section (Themed Dark-Forward Mesh) ── */}
        <section className="relative overflow-hidden bg-[#0a0a1a] py-20 sm:py-28 text-white">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#6366f1]/20 blur-[130px]" />
            <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#f59e0b]/15 blur-[100px]" />
            <div className="absolute inset-0 dot-pattern opacity-10" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex justify-center sm:justify-start">
              <Breadcrumb
                variant="dark"
                items={[
                  { label: "Home", href: "/" },
                  { label: "Contact Us" },
                ]}
              />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#fbbf24]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>24/7 Wholesale Assistance</span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Get in Touch with{" "}
                <span className="gradient-text-light">Lotwaala</span>
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-white/60">
                Have questions about wholesale products, dead stock liquidation,
                or delivery tracking? Connect directly with our team across India.
              </p>
            </div>
          </div>
        </section>

        {/* ── Quick Contact Channel Cards ── */}
        <section className="relative -mt-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((channel, i) => (
              <div
                key={channel.title}
                className="group relative rounded-2xl border border-white/60 bg-white p-6 shadow-lg shadow-indigo-500/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.gradient} text-white shadow-md`}
                  >
                    {channel.icon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                    {channel.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-[#0f172a]">
                  {channel.title}
                </h3>
                <p className="mt-1 text-xs text-[#64748b] font-medium leading-relaxed">
                  {channel.detail}
                </p>

                <div className="mt-5">
                  <a
                    href={channel.action}
                    target={channel.action.startsWith("http") ? "_blank" : undefined}
                    rel={channel.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6366f1] group-hover:text-[#4f46e5] group-hover:underline"
                  >
                    <span>{channel.btnText}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Contact & Office Section ── */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 items-start">
              {/* Left Column: Headquarters & Information */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
                    <Headphones className="h-4 w-4" />
                    <span>Customer Support Desk</span>
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                    We&apos;re Here to Support Your Wholesale Business
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                    Lotwaala connects retailers, wholesalers, and liquidators across 120+ Indian cities. 
                    Whether you are negotiating a bulk price or resolving a shipping query, our team ensures rapid support.
                  </p>
                </div>

                {/* Office Details Card */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[#6366f1]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f172a]">
                        Surplus Saga Private Limited (Lotwaala)
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#64748b]">
                        G-07B C003, Sector 4, Galaxy Blue Sapphire Plaza,
                        <br />
                        Noida, Uttar Pradesh — 201305, India
                      </p>
                      <a
                        href="https://share.google/Nrf7hJo1fiEvQUbcS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#6366f1] hover:underline"
                      >
                        <span>View Office on Google Maps</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Hours Card */}
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0f172a]">
                        Working Hours
                      </h4>
                      <p className="mt-1 text-xs text-[#64748b]">
                        Monday – Saturday: 9:00 AM – 6:00 PM IST
                      </p>
                      <p className="text-xs text-[#94a3b8]">
                        Sunday: Closed (WhatsApp automated response active)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Highlights */}
                <div className="rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 p-6 text-white shadow-md">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-emerald-400" />
                    <h4 className="font-bold text-sm">Safe &amp; Verified Wholesale Marketplace</h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-white/70">
                    All supplier accounts on Lotwaala undergo mandatory KYC verification. 
                    Your payments are held in escrow until product inspection.
                  </p>
                </div>
              </div>

              {/* Right Column: Interactive Form Client */}
              <div className="lg:col-span-7">
                <ContactFormClient />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="border-t border-[#e2e8f0] py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
                <HelpCircle className="h-4 w-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-[#0f172a] sm:text-3xl">
                Quick Answers to Common Queries
              </h2>
            </div>

            <div className="space-y-4">
              {CONTACT_FAFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-border bg-[#fafbff] p-5 transition-all duration-300 hover:border-indigo-200 open:bg-white open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0f172a] list-none text-sm sm:text-base">
                    <span>{faq.q}</span>
                    <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-transform duration-300 group-open:rotate-180">
                      &darr;
                    </span>
                  </summary>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#64748b] border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
const CONTACT_FAFAQs = CONTACT_FAQS;
