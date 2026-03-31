import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, ArrowRight, Star, MapPin } from "lucide-react";
import {
  generatePageMetadata,
  generateCategoryHubSchema,
  generateAppSchema,
  generateFAQSchema,
} from "@/lib/seo";
import {
  CATEGORIES,
  CITIES,
  CITY_SEO_DATA,
  SITE_NAME,
  PLAY_STORE_URL,
  APP_STORE_URL,
  APP_FEATURES,
  generateCategoryFAQs,
} from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";

// ─── Generate all category params at build time ──────────────────────────────

export function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ category: cat.slug }));
}

// ─── Dynamic SEO Metadata ────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};

  return generatePageMetadata({
    title: `Wholesale ${cat.name} in India — Bulk ${cat.name} Suppliers`,
    description: `Find wholesale ${cat.name.toLowerCase()} suppliers across India. Browse bulk ${cat.name.toLowerCase()} listings from verified wholesalers in 20+ cities. ${cat.description}. Download the ${SITE_NAME} app free.`,
    path: `/market/category/${category}`,
    keywords: [
      ...cat.keywords,
      `wholesale ${cat.name.toLowerCase()} India`,
      `bulk ${cat.name.toLowerCase()} suppliers`,
      `${cat.name.toLowerCase()} wholesale market`,
      `buy ${cat.name.toLowerCase()} in bulk`,
    ],
  });
}

// ─── Category Hub Page ───────────────────────────────────────────────────────

export default async function CategoryHubPage({ params }: PageProps) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const faqs = generateCategoryFAQs(cat.name);

  // Sort cities by search volume for prominence
  const sortedCities = [...CITIES].sort((a, b) => {
    const volA = CITY_SEO_DATA[a.slug]?.searchVolume ?? 0;
    const volB = CITY_SEO_DATA[b.slug]?.searchVolume ?? 0;
    return volB - volA;
  });

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={generateCategoryHubSchema({
          category: cat.name,
          categorySlug: category,
          description: `Find wholesale ${cat.name.toLowerCase()} suppliers across India. ${cat.description}.`,
        })}
      />
      <JsonLd data={generateAppSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden gradient-dark py-20 text-white sm:py-28">
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
                  { label: `Wholesale ${cat.name}` },
                ]}
              />
            </div>

            {/* H1 */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Wholesale {cat.name} in India
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              Connect with verified {cat.name.toLowerCase()} wholesalers across
              20+ Indian cities. Browse {cat.description.toLowerCase()} — all on
              the {SITE_NAME} wholesaler app. Download free and find the best
              bulk deals.
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

        {/* ── About this category ── */}
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              About Wholesale {cat.name} on {SITE_NAME}
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-text-secondary leading-relaxed">
              <p>
                The wholesale {cat.name.toLowerCase()} market in India is one of
                the largest in the world. Whether you&apos;re a retailer looking
                to stock {cat.description.toLowerCase()}, or a bulk buyer
                seeking the best wholesale prices, {SITE_NAME} connects you with
                verified suppliers across the country.
              </p>
              <p>
                With {SITE_NAME}, you can browse thousands of{" "}
                {cat.name.toLowerCase()} listings with real-time inventory, chat
                directly with wholesalers, negotiate bulk pricing, and get
                doorstep delivery — all from your phone. Our platform covers 20+
                major wholesale hubs, from Delhi&apos;s Chandni Chowk to
                Mumbai&apos;s Crawford Market.
              </p>
            </div>
          </div>
        </section>

        {/* ── Browse by City ── */}
        <section className="py-20 bg-bg-subtle">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Find Wholesale {cat.name} by City
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              Browse {cat.name.toLowerCase()} wholesalers in India&apos;s top
              wholesale markets. Select a city to see verified suppliers.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedCities.map((city) => {
                const seoData = CITY_SEO_DATA[city.slug];
                return (
                  <Link
                    key={city.slug}
                    href={`/market/${city.slug}/${category}`}
                    className="group rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
                          <MapPin className="h-3 w-3" />
                          <span>{city.state}</span>
                        </div>
                        <h3 className="mt-1 text-base font-bold text-text group-hover:text-primary transition-colors">
                          {cat.name} in {city.name}
                        </h3>
                      </div>
                      <ArrowRight className="h-4 w-4 text-text-tertiary transition-all group-hover:text-primary group-hover:translate-x-1" />
                    </div>
                    {seoData && (
                      <p className="mt-2 text-xs text-text-tertiary">
                        {seoData.strength} business activity
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why buy this category on Lotwaala ── */}
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Why Buy Wholesale {cat.name} on {SITE_NAME}?
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              {SITE_NAME} is the best app for sourcing {cat.name.toLowerCase()}{" "}
              in bulk. Here&apos;s why thousands of buyers trust us:
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

        {/* ── Other Categories ── */}
        <section className="py-16 bg-bg-subtle">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-text">
              Explore Other Wholesale Categories
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {CATEGORIES.filter((c) => c.slug !== category).map((c) => (
                <Link
                  key={c.slug}
                  href={`/market/category/${c.slug}`}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  Wholesale {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <FAQSection
          title={`Wholesale ${cat.name} in India — FAQ`}
          subtitle={`Common questions about buying ${cat.name.toLowerCase()} wholesale`}
          faqs={faqs}
        />

        {/* ── Final CTA ── */}
        <section className="gradient-dark py-20 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Source Wholesale {cat.name}?
            </h2>
            <p className="mt-4 text-white/60">
              Download {SITE_NAME} free and start browsing wholesale{" "}
              {cat.name.toLowerCase()} suppliers across India.
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
