import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = generatePageMetadata({
  title: "Editorial Policy",
  description:
    "Learn how Lotwaala creates and maintains wholesale market, category, city, and supplier discovery content.",
  path: "/editorial-policy",
  keywords: ["Lotwaala editorial policy", "wholesale market content policy"],
});

export default function EditorialPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Editorial Policy
          </h1>
          <div className="mt-8 space-y-6 leading-relaxed text-[#475569]">
            <p>
              Lotwaala publishes wholesale market content to help retailers,
              resellers, and business buyers discover verified suppliers by
              category and city.
            </p>
            <p>
              City and category pages are written from marketplace data, public
              wholesale market knowledge, and internal supplier coverage. We
              review pages for clarity, relevance, and practical buyer intent.
            </p>
            <p>
              Content is updated when market coverage, supported cities,
              product categories, app features, or supplier discovery workflows
              change.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
