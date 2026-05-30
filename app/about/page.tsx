import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "About Lotwaala — India's #1 Wholesale Marketplace",
  description:
    "Learn about Lotwaala, India's leading wholesale products marketplace app connecting retailers with verified wholesalers across 120+ cities in India.",
  path: "/about",
  keywords: [
    "about Lotwaala",
    "wholesale marketplace India",
    "B2B wholesale platform",
    "wholesale suppliers India",
  ],
});

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
              About <span className="text-[#6366f1]">Lotwaala</span>
            </h1>
            <p className="mt-4 text-xl text-[#64748b]">
              Revolutionizing wholesale commerce in India
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#e2e8f0]">
            <h2 className="text-3xl font-bold text-[#0f172a]">Our Mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#475569]">
              To empower retailers and small businesses across India by providing
              a seamless, trustworthy platform to connect with verified wholesale
              suppliers and source bulk goods at the best prices. We believe that
              technology should simplify commerce, not complicate it.
            </p>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Who We Serve</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Retailers & Shop Owners",
                description:
                  "Access 100,000+ wholesale products from verified suppliers to stock your store at competitive prices.",
              },
              {
                title: "E-commerce Sellers",
                description:
                  "Find reliable bulk suppliers for your online business without minimum order hassles.",
              },
              {
                title: "Small Business Owners",
                description:
                  "Negotiate better wholesale prices and build direct relationships with manufacturers.",
              },
              {
                title: "Wholesalers & Distributors",
                description:
                  "List your products and reach thousands of buyers across 120+ cities in India.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e2e8f0]"
              >
                <h3 className="font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#64748b]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Numbers & Impact */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Our Impact</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { number: "100K+", label: "Wholesale Products" },
              { number: "10K+", label: "Verified Wholesalers" },
              { number: "120+", label: "Cities in India" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-[#6366f1]">
                  {stat.number}
                </div>
                <div className="mt-2 text-[#64748b]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f172a]">Why Choose Lotwaala?</h2>
          <ul className="mt-8 space-y-4">
            {[
              "Verified Sellers: All wholesalers are thoroughly vetted",
              "Real-Time Inventory: Live stock availability for all products",
              "Secure Payments: Industry-standard encryption and security",
              "Built-In Logistics: Big-Ship and major delivery partner support across India",
              "Price Negotiation: Direct negotiation with suppliers",
              "Market Insights: Real-time market trends and pricing data",
              "24/7 Support: Dedicated customer support in English & Hindi",
              "Pan-India Coverage: Wholesale markets in 120+ cities in India",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-lg">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#6366f1]" />
                <span className="text-[#475569]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Trust & Credentials */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] p-8 text-white">
            <h2 className="text-2xl font-bold">Trusted by Thousands</h2>
            <p className="mt-4 text-white/90">
              Lotwaala app has a <strong>4.8★ rating</strong> from over{" "}
              <strong>12,400 users</strong> on Google Play Store. Our commitment
              to quality, security, and customer satisfaction has made us India&apos;s
              leading B2B wholesale marketplace app.
            </p>
            <p className="mt-4 text-white/90">
              We secure every transaction with enterprise-grade encryption and
              maintain strict KYC verification for all wholesalers. Your trust is
              our most valuable asset.
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0f172a]">Have Questions?</h2>
          <p className="mt-3 text-[#64748b]">
            Want to learn more about partnerships or have feedback? We&apos;d love to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-[#6366f1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4f46e5]"
          >
            Get in Touch
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
