import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { PHONE_NUMBER } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Lotwaala — Get in Touch",
  description:
    "Contact Lotwaala customer support. Reach us via email, phone, or contact form. Serving wholesale businesses across India.",
  path: "/contact",
  keywords: [
    "contact Lotwaala",
    "customer support",
    "wholesale marketplace support",
  ],
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
              Get in Touch with <span className="text-[#6366f1]">Lotwaala</span>
            </h1>
            <p className="mt-4 text-xl text-[#64748b]">
              We&apos;re here to help. Reach out with any questions or feedback.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e2e8f0]">
              <Phone className="h-8 w-8 text-[#6366f1]" />
              <h3 className="mt-3 font-bold text-[#0f172a]">Phone</h3>
              <p className="mt-2 text-sm text-[#64748b]">
                Call us during business hours
              </p>
              <a
                href={`tel:+91${PHONE_NUMBER}`}
                className="mt-3 inline-block font-semibold text-[#6366f1] hover:underline"
              >
                +91 {PHONE_NUMBER}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e2e8f0]">
              <Mail className="h-8 w-8 text-[#6366f1]" />
              <h3 className="mt-3 font-bold text-[#0f172a]">Email</h3>
              <p className="mt-2 text-sm text-[#64748b]">
                Reach out to our team
              </p>
              <a
                href="mailto:support@lotwaala.com"
                className="mt-3 inline-block font-semibold text-[#6366f1] hover:underline"
              >
                support@lotwaala.com
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e2e8f0]">
              <Clock className="h-8 w-8 text-[#6366f1]" />
              <h3 className="mt-3 font-bold text-[#0f172a]">Hours</h3>
              <p className="mt-2 text-sm text-[#64748b]">
                Mon-Sat: 9:00 AM - 6:00 PM IST
              </p>
              <p className="mt-1 text-sm text-[#64748b]">
                Sunday: Closed
              </p>
            </div>
          </div>
        </section>

        {/* Headquarters */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#e2e8f0]">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-[#6366f1]" />
              <div>
                <h3 className="text-lg font-bold text-[#0f172a]">Headquarters</h3>
                <p className="mt-2 text-[#475569]">
                  Lotwaala Wholesale Marketplace Pvt. Ltd.
                  <br />
                  New Delhi, India 110001
                </p>
                <p className="mt-3 text-sm text-[#64748b]">
                  Serving wholesale businesses across 120+ cities in India
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#e2e8f0]">
            <h2 className="text-2xl font-bold text-[#0f172a]">Send us a Message</h2>
            <form className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-2 w-full rounded-lg border border-[#e2e8f0] px-4 py-2 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-lg border border-[#e2e8f0] px-4 py-2 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-2 w-full rounded-lg border border-[#e2e8f0] px-4 py-2 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  placeholder="+91 98XXXXXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]">
                  Subject
                </label>
                <select
                  name="subject"
                  className="mt-2 w-full rounded-lg border border-[#e2e8f0] px-4 py-2 text-[#0f172a] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                >
                  <option value="">Select a subject</option>
                  <option value="support">Customer Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="bug">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-[#e2e8f0] px-4 py-2 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#6366f1] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#4f46e5]"
              >
                Send Message
              </button>
            </form>
            <p className="mt-4 text-sm text-[#64748b]">
              We&apos;ll get back to you within 24 hours during business hours.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0f172a]">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "How do I become a seller on Lotwaala?",
                a: "Visit our app or website, complete KYC verification, and start listing your products. Our team reviews all sellers to ensure quality and trustworthiness.",
              },
              {
                q: "What are your delivery timelines?",
                a: "Delivery timeframes depend on the seller and product location. Most orders within metro cities are delivered within 3-7 days.",
              },
              {
                q: "Is my payment secure?",
                a: "Yes, we use enterprise-grade encryption and secure payment gateways. All transactions are protected.",
              },
              {
                q: "Do you have a minimum order quantity?",
                a: "Minimum order quantities vary by seller and product. Our platform allows direct negotiation with wholesalers.",
              },
            ].map((item, i) => (
              <details key={i} className="rounded-lg border border-[#e2e8f0] p-4">
                <summary className="cursor-pointer font-semibold text-[#0f172a]">
                  {item.q}
                </summary>
                <p className="mt-3 text-[#64748b]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
