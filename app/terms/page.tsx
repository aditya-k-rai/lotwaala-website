import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "Review Lotwaala terms of service for wholesale buyers, suppliers, and businesses using the marketplace app.",
  path: "/terms",
  keywords: ["Lotwaala terms", "wholesale marketplace terms India"],
});

const TERMS = [
  "Use Lotwaala only for lawful wholesale buying, selling, sourcing, and business communication.",
  "Supplier profiles, listings, prices, and inventory must be accurate and updated regularly.",
  "Buyers and sellers are responsible for confirming product quality, order terms, payment terms, taxes, and delivery details before closing a deal.",
  "Lotwaala may restrict accounts that misuse the marketplace, post misleading information, or attempt fraud.",
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#64748b]">
            These terms explain the basic rules for using Lotwaala as a
            wholesale products marketplace in India.
          </p>
          <ul className="mt-10 space-y-4">
            {TERMS.map((term) => (
              <li key={term} className="rounded-xl bg-white p-6 leading-relaxed text-[#475569] shadow-sm ring-1 ring-[#e2e8f0]">
                {term}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
