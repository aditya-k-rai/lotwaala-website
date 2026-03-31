import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download, MapPin, Star } from "lucide-react";
import {
  generatePageMetadata,
  generateLocalMarketSchema,
  generateAppSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import {
  CATEGORIES,
  CITIES,
  CITY_SEO_DATA,
  SITE_NAME,
  SITE_URL,
  PLAY_STORE_URL,
  APP_STORE_URL,
  APP_FEATURES,
  generateMarketFAQs,
} from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import PopularSearches from "@/components/PopularSearches";

// ─── Generate all city/category combos at build time ─────────────────────────

export function generateStaticParams() {
  const params: { city: string; category: string }[] = [];
  for (const city of CITIES) {
    for (const cat of CATEGORIES) {
      params.push({ city: city.slug, category: cat.slug });
    }
  }
  return params;
}

// ─── Dynamic SEO Metadata ────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ city: string; category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, category } = await params;

  const cit = CITIES.find((c) => c.slug === city);
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cit || !cat) return {};

  return generatePageMetadata({
    title: `Wholesale ${cat.name} in ${cit.name} — Best Deals on ${SITE_NAME}`,
    description: `Looking for wholesale ${cat.name.toLowerCase()} in ${cit.name}? Download the ${SITE_NAME} wholesaler app to connect with verified ${cat.name.toLowerCase()} suppliers in ${cit.name}, ${cit.state}. Browse bulk inventory, negotiate prices, and close deals instantly.`,
    path: `/market/${city}/${category}`,
    keywords: [
      ...cat.keywords,
      `wholesale ${cat.name.toLowerCase()} ${cit.name}`,
      `${cat.name.toLowerCase()} wholesaler ${cit.name}`,
      `bulk ${cat.name.toLowerCase()} ${cit.name}`,
      `${cit.name} wholesale market`,
      `${cat.name.toLowerCase()} supplier ${cit.name}`,
      `wholesale marketplace ${cit.name}`,
      `buy ${cat.name.toLowerCase()} in bulk ${cit.name}`,
    ],
  });
}

// ─── Page Component ──────────────────────────────────────────────────────────

export default async function MarketCityCategory({ params }: PageProps) {
  const { city, category } = await params;

  const cit = CITIES.find((c) => c.slug === city);
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cit || !cat) notFound();

  const faqs = generateMarketFAQs(cit.name, cat.name);
  const seoData = CITY_SEO_DATA[city];

  // Popular searches for this page
  const popularSearches = [
    { label: `Wholesale ${cat.name} ${cit.name}`, href: `/market/${city}/${category}` },
    { label: `Bulk ${cat.name.toLowerCase()} suppliers ${cit.name}`, href: `/market/${city}/${category}` },
    { label: `Wholesale market in ${cit.name}`, href: `/market/${city}` },
    ...CATEGORIES.filter((c) => c.slug !== category)
      .slice(0, 4)
      .map((c) => ({
        label: `Wholesale ${c.name} in ${cit.name}`,
        href: `/market/${city}/${c.slug}`,
      })),
    ...CITIES.filter((c) => c.slug !== city)
      .slice(0, 3)
      .map((c) => ({
        label: `${cat.name} in ${c.name}`,
        href: `/market/${c.slug}/${category}`,
      })),
  ];

  return (
    <>
      {/* JSON-LD — WebPage, App, Breadcrumb, FAQ */}
      <JsonLd
        data={generateLocalMarketSchema({
          city: cit.name,
          state: cit.state,
          category: cat.name,
          categoryDescription: cat.description,
          citySlug: city,
          categorySlug: category,
        })}
      />
      <JsonLd data={generateAppSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: `Wholesale in ${cit.name}`, url: `${SITE_URL}/market/${city}` },
          { name: `${cat.name} in ${cit.name}`, url: `${SITE_URL}/market/${city}/${category}` },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden gradient-dark py-20 text-white sm:py-28">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                variant="dark"
                items={[
                  { label: "Home", href: "/" },
                  { label: cit.name, href: `/market/${city}` },
                  { label: cat.name },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4" />
              <span>
                {cit.name}, {cit.state}
              </span>
            </div>

            {/* H1 — keyword-rich */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Wholesale {cat.name} in {cit.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              Connect with verified {cat.name.toLowerCase()} wholesalers and
              suppliers in {cit.name}. The {SITE_NAME} wholesaler app gives you
              access to thousands of bulk {cat.name.toLowerCase()} listings —
              {cat.description.toLowerCase()}. Download free and start dealing.
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
                    className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-white/20"}`}
                  />
                ))}
              </div>
              <span>4.8 rating &middot; 50K+ downloads &middot; Free</span>
            </div>
          </div>
        </section>

        {/* ── About this market — long-form SEO content ── */}
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              About the Wholesale {cat.name} Market in {cit.name}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-text-secondary leading-relaxed">
              <p>
                {cit.name} is one of India&apos;s most important wholesale hubs
                for {cat.name.toLowerCase()}.{" "}
                {seoData?.description
                  ? seoData.description
                  : `The city's wholesale markets serve retailers and businesses across ${cit.state} and beyond.`}
              </p>
              <p>
                Finding reliable {cat.name.toLowerCase()} wholesalers in{" "}
                {cit.name} can be challenging through traditional methods.{" "}
                {SITE_NAME} solves this by connecting you directly with
                KYC-verified {cat.name.toLowerCase()} suppliers in {cit.name}.
                Browse live inventory for {cat.description.toLowerCase()},
                compare prices from multiple sellers, and negotiate bulk deals —
                all from the {SITE_NAME} app.
              </p>
              <p>
                Whether you&apos;re a retailer stocking up on{" "}
                {cat.name.toLowerCase()} or a business looking for bulk{" "}
                {cat.name.toLowerCase()} suppliers in {cit.name}, {SITE_NAME}{" "}
                offers the largest selection of verified wholesale listings.
                Download the app today — it&apos;s free, with no subscription fees.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why use Lotwaala for this market — ALL 6 features ── */}
        <section className="py-20 bg-bg-subtle">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Why Use {SITE_NAME} for {cat.name} in {cit.name}?
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              {SITE_NAME} is the easiest way to find verified{" "}
              {cat.name.toLowerCase()} wholesalers in {cit.name}. Here&apos;s
              what the app offers:
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {APP_FEATURES.map((feature) => (
                <div
                  key={feature.id}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h3 className="text-base font-bold text-text">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SEO Internal Links — Other categories in this city ── */}
        <section className="py-16 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-text">
              More Wholesale Markets in {cit.name}
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {CATEGORIES.filter((c) => c.slug !== category).map((c) => (
                <Link
                  key={c.slug}
                  href={`/market/${city}/${c.slug}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  {c.name} in {cit.name}
                </Link>
              ))}
            </div>

            <h2 className="mt-12 text-xl font-bold text-text">
              Wholesale {cat.name} in Other Cities
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {CITIES.filter((c) => c.slug !== city).map((c) => (
                <Link
                  key={c.slug}
                  href={`/market/${c.slug}/${category}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  {cat.name} in {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQSection
          title={`Wholesale ${cat.name} in ${cit.name} — FAQ`}
          subtitle={`Common questions about wholesale ${cat.name.toLowerCase()} in ${cit.name}`}
          faqs={faqs}
        />

        {/* ── Popular Searches ── */}
        <PopularSearches searches={popularSearches} />

        {/* ── Final CTA ── */}
        <section className="gradient-dark py-20 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Find {cat.name} Wholesalers in {cit.name}?
            </h2>
            <p className="mt-4 text-white/60">
              Download {SITE_NAME} free and start browsing wholesale{" "}
              {cat.name.toLowerCase()} listings now.
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
