import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Read the Lotwaala privacy policy for wholesale buyers and suppliers using our app and website across India.",
  path: "/privacy",
  keywords: ["Lotwaala privacy policy", "wholesale app privacy India"],
});

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "We collect account details, business profile information, contact details, device data, and marketplace activity needed to connect buyers with verified wholesale suppliers.",
  },
  {
    title: "How We Use Information",
    body: "We use information to operate the marketplace, verify suppliers, improve product discovery, process support requests, prevent fraud, and measure app and website performance.",
  },
  {
    title: "Sharing and Security",
    body: "We share information only with service providers, logistics partners, payment partners, or verified marketplace participants when required to complete a transaction or support request.",
  },
  {
    title: "Your Choices",
    body: "You can request account updates, correction, or deletion by contacting Lotwaala support. Some records may be retained where required for security, legal, or accounting purposes.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#64748b]">
            Lotwaala protects business information for wholesale buyers,
            suppliers, and retailers using our app and website.
          </p>
          <div className="mt-10 space-y-6">
            {SECTIONS.map((section) => (
              <section key={section.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-[#e2e8f0]">
                <h2 className="text-xl font-bold text-[#0f172a]">{section.title}</h2>
                <p className="mt-3 leading-relaxed text-[#475569]">{section.body}</p>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
