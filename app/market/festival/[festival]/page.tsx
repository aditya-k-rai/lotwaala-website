import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, ArrowRight, Star, CalendarDays, Sparkles } from "lucide-react";
import {
  generatePageMetadata,
  generateFestivalPageSchema,
  generateAppSchema,
  generateFAQSchema,
} from "@/lib/seo";
import {
  CATEGORIES,
  CITIES,
  FESTIVALS,
  SITE_NAME,
  PLAY_STORE_URL,
  APP_STORE_URL,
  generateFestivalFAQs,
} from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";

// ─── Generate all festival params at build time ──────────────────────────────

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ festival: f.slug }));
}

// ─── Dynamic SEO Metadata ────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ festival: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { festival } = await params;
  const fest = FESTIVALS.find((f) => f.slug === festival);
  if (!fest) return {};

  return generatePageMetadata({
    title: `${fest.name} Wholesale Deals — Bulk ${fest.name} Products in India`,
    description: `${fest.description} Shop wholesale ${fest.name} products on ${SITE_NAME} — India's #1 wholesale marketplace app. Connect with verified suppliers for bulk ${fest.name} deals. Download free.`,
    path: `/market/festival/${festival}`,
    keywords: [
      ...fest.keywords,
      `${fest.name} wholesale India`,
      `bulk ${fest.name} products`,
      `${fest.name} wholesale suppliers`,
      `buy ${fest.name} products wholesale`,
    ],
  });
}

// ─── Festival Landing Page ───────────────────────────────────────────────────

export default async function FestivalPage({ params }: PageProps) {
  const { festival } = await params;
  const fest = FESTIVALS.find((f) => f.slug === festival);
  if (!fest) notFound();

  const faqs = generateFestivalFAQs(fest.name, fest.season);
  const relatedCats = CATEGORIES.filter((c) =>
    (fest.relatedCategories as readonly string[]).includes(c.slug)
  );
  const topCities = CITIES.slice(0, 10);

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={generateFestivalPageSchema({
          festival: fest.name,
          festivalSlug: festival,
          description: fest.description,
          season: fest.season,
        })}
      />
      <JsonLd data={generateAppSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden gradient-dark py-20 text-white sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#f59e0b]/15 blur-3xl animate-blob" />
            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#ef4444]/10 blur-3xl animate-blob delay-400" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7c3aed]/10 blur-3xl animate-blob delay-700" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                variant="dark"
                items={[
                  { label: "Home", href: "/" },
                  { label: `${fest.name} Wholesale` },
                ]}
              />
            </div>

            {/* Season badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-2 text-sm font-semibold text-[#fbbf24]">
              <CalendarDays className="h-4 w-4" />
              <span>Season: {fest.season}</span>
              <Sparkles className="h-3.5 w-3.5" />
            </div>

            {/* H1 */}
            <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {fest.name} Wholesale Deals on {SITE_NAME}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              {fest.description} Download the {SITE_NAME} app to connect with
              verified wholesale suppliers and get the best bulk prices for{" "}
              {fest.name} season — every year.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={PLAY_STORE_URL}
                className="group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-white px-6 py-3.5 text-base font-bold text-dark shadow-lg transition-all hover:shadow-xl sm:w-auto"
              >
                <Download className="h-5 w-5" />
                Download {SITE_NAME} App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href={APP_STORE_URL}
                className="inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-md)] border border-white/15 bg-white/5 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                Also on iOS
              </Link>
            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span>4.8 rating &middot; 50K+ downloads &middot; Free</span>
            </div>
          </div>
        </section>

        {/* ── Related Categories for this Festival ── */}
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Popular Wholesale Categories for {fest.name}
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              These product categories see the highest wholesale demand during{" "}
              {fest.name} season. Browse suppliers on {SITE_NAME}.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCats.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/market/category/${cat.slug}`}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors">
                    Wholesale {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {cat.description} — perfect for {fest.name} season bulk
                    buying.
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>Browse suppliers</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Festival Buying Guide ── */}
        <section className="py-20 bg-bg-subtle">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              {fest.name} Wholesale Buying Guide
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-text-secondary leading-relaxed">
              <p>
                Planning your {fest.name} wholesale purchases? Here&apos;s how
                to get the best deals on bulk {fest.name} products using the{" "}
                {SITE_NAME} app:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Start early</strong> — Begin sourcing 4–6 weeks before{" "}
                  {fest.name} ({fest.season}) to secure the best prices and avoid
                  stock shortages.
                </li>
                <li>
                  <strong>Compare suppliers</strong> — Use the {SITE_NAME} app
                  to browse listings from multiple verified wholesalers. Compare
                  prices, MOQs, and delivery timelines.
                </li>
                <li>
                  <strong>Negotiate in bulk</strong> — Chat directly with
                  suppliers on {SITE_NAME} to negotiate bulk discounts. Larger
                  orders typically unlock 15–30% savings.
                </li>
                <li>
                  <strong>Check reviews</strong> — Every supplier on {SITE_NAME}{" "}
                  is KYC-verified with real buyer reviews. Always check ratings
                  before placing orders.
                </li>
                <li>
                  <strong>Track your orders</strong> — Use the {SITE_NAME}{" "}
                  dashboard to track orders, delivery status, and manage your{" "}
                  {fest.name} inventory in real-time.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── Top Cities for Festival Shopping ── */}
        <section className="py-16 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-text">
              Top Cities for {fest.name} Wholesale Shopping
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {topCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/market/${city.slug}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  {fest.name} wholesale in {city.name}
                </Link>
              ))}
            </div>

            {/* Other festivals */}
            <h2 className="mt-12 text-xl font-bold text-text">
              Other Festival Wholesale Deals
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {FESTIVALS.filter((f) => f.slug !== festival).map((f) => (
                <Link
                  key={f.slug}
                  href={`/market/festival/${f.slug}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  {f.name} Wholesale Deals
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQSection
          title={`${fest.name} Wholesale — FAQ`}
          subtitle={`Common questions about buying ${fest.name} products wholesale`}
          faqs={faqs}
        />

        {/* ── Final CTA ── */}
        <section className="gradient-dark py-20 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready for {fest.name} Wholesale Deals?
            </h2>
            <p className="mt-4 text-white/60">
              Download {SITE_NAME} free and find the best bulk prices for{" "}
              {fest.name} products — every year.
            </p>
            <Link
              href={PLAY_STORE_URL}
              className="mt-8 inline-flex items-center gap-2.5 rounded-[var(--radius-md)] bg-white px-8 py-4 text-base font-bold text-dark shadow-lg transition-all hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download Now — Free
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
