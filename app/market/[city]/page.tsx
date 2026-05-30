import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, ArrowRight, Star, MapPin } from "lucide-react";
import TrackedLink from "@/components/TrackedLink";
import {
  generatePageMetadata,
  generateCityHubSchema,
  generateCityCategoryItemListSchema,
  generateAppSchema,
  generateFAQSchema,
} from "@/lib/seo";
import {
  CATEGORIES,
  CITIES,
  CITY_SEO_DATA,
  SITE_NAME,
  PLAY_STORE_URL,
  IOS_APP_INTEREST_URL,
  APP_FEATURES,
  generateCityFAQs,
} from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import FAQSection from "@/components/FAQSection";
import PopularSearches from "@/components/PopularSearches";

// ─── Generate all city params at build time ──────────────────────────────────

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

// ─── Dynamic SEO Metadata ────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cit = CITIES.find((c) => c.slug === city);
  if (!cit) return {};

  const seoData = CITY_SEO_DATA[city];
  const targetKw = seoData?.targetKeyword ?? `wholesale market ${cit.name}`;

  return generatePageMetadata({
    title: `Wholesale Market in ${cit.name} - Wholesale Products Online`,
    description: `Explore the wholesale market in ${cit.name} for verified bulk suppliers. Buy wholesale products in ${cit.name} across electronics, clothing, footwear, FMCG and more on the free ${SITE_NAME} app.`,
    path: `/market/${city}`,
    keywords: [
      targetKw,
      `wholesale market in ${cit.name}`,
      `${cit.name} wholesale market`,
      `best wholesale market in ${cit.name}`,
      `online wholesale market ${cit.name}`,
      `wholesale market near me ${cit.name}`,
      `wholesale products ${cit.name}`,
      `wholesale products in ${cit.name}`,
      `buy wholesale products ${cit.name}`,
      `wholesale products online ${cit.name}`,
      `wholesale suppliers ${cit.name}`,
      `bulk dealers ${cit.name}`,
      `wholesale market ${cit.name} app`,
      `buy wholesale ${cit.name}`,
      `${cit.name} wholesale marketplace`,
      `${cit.name} wholesale products dealers`,
    ],
  });
}

// ─── City Hub Page ───────────────────────────────────────────────────────────

export default async function CityHubPage({ params }: PageProps) {
  const { city } = await params;
  const cit = CITIES.find((c) => c.slug === city);
  if (!cit) notFound();

  const seoData = CITY_SEO_DATA[city];
  const targetKw = seoData?.targetKeyword ?? `wholesale market ${cit.name}`;
  const faqs = generateCityFAQs(cit.name, cit.state);
  const popularSearches = [
    { label: `Wholesale Market in ${cit.name}`, href: `/market/${city}` },
    { label: `${cit.name} Wholesale Market`, href: `/market/${city}` },
    { label: `Wholesale Products in ${cit.name}`, href: `/market/${city}` },
    { label: `Bulk Suppliers in ${cit.name}`, href: `/market/${city}` },
    ...CATEGORIES.slice(0, 8).map((cat) => ({
      label: `Wholesale ${cat.name} Products in ${cit.name}`,
      href: `/market/${city}/${cat.slug}`,
    })),
  ];

  return (
    <>
      {/* JSON-LD */}
      <JsonLd
        data={generateCityHubSchema({
          city: cit.name,
          state: cit.state,
          citySlug: city,
          description: seoData?.description ?? `Find wholesale suppliers in ${cit.name} on Lotwaala.`,
        })}
      />
      <JsonLd
        data={generateCityCategoryItemListSchema({
          city: cit.name,
          citySlug: city,
        })}
      />
      <JsonLd data={generateAppSchema()} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <Navbar />

      <main id="main-content">
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
                  { label: cit.name },
                ]}
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-white/50">
              <MapPin className="h-4 w-4" />
              <span>
                {cit.name}, {cit.state}
              </span>
            </div>

            {/* H1 */}
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Wholesale Market in {cit.name} - Buy Wholesale Products Online
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60">
              {seoData?.description ??
                `Connect with verified wholesale suppliers and bulk dealers in ${cit.name}. The ${SITE_NAME} app gives you access to thousands of wholesale listings across every category. Download free and start dealing.`}
              {" "}Browse wholesale products in {cit.name} by category, compare
              bulk prices, and connect with verified suppliers from the{" "}
              {SITE_NAME} app.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={PLAY_STORE_URL}
                eventName="app_download_click"
                eventParams={{
                  store: "play_store",
                  source: "city_page",
                  city_slug: cit.slug,
                  city_name: cit.name,
                  state: cit.state,
                }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-md)] bg-white px-6 py-3.5 text-base font-bold text-dark shadow-lg transition-all hover:shadow-xl sm:w-auto"
              >
                <Download className="h-5 w-5" />
                Download {SITE_NAME} App
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </TrackedLink>
              <TrackedLink
                href={IOS_APP_INTEREST_URL}
                target="_blank"
                rel="noopener noreferrer"
                eventName="app_download_click"
                eventParams={{
                  store: "app_store_interest",
                  source: "city_page",
                  city_slug: cit.slug,
                  city_name: cit.name,
                  state: cit.state,
                }}
                className="inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-md)] border border-white/15 bg-white/5 px-6 py-3.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 sm:w-auto"
              >
                iOS availability
              </TrackedLink>
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

        {/* ── All Categories in this City ── */}
        <section className="py-20 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Wholesale Products in {cit.name} by Category
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              Explore the {cit.name} wholesale market by product category. Each
              page targets high-intent searches for wholesale products in{" "}
              {cit.name} and connects buyers with verified suppliers on the{" "}
              {SITE_NAME} app.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {CATEGORIES.map((cat) => (
                <TrackedLink
                  key={cat.slug}
                  href={`/market/${city}/${cat.slug}`}
                  eventName="category_click"
                  eventParams={{
                    category_slug: cat.slug,
                    city_slug: cit.slug,
                    source: "city_hub_grid",
                  }}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="text-base font-bold text-text group-hover:text-primary transition-colors">
                    Wholesale {cat.name} Products in {cit.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {cat.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>View suppliers</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why use Lotwaala in this city ── */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Best Wholesale Market Search Terms for {cit.name}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-text-secondary">
              This page is optimized for local wholesale buyer intent in{" "}
              {cit.name}, including searches for verified suppliers, bulk
              dealers, wholesale market prices, and app-based sourcing.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                `wholesale market in ${cit.name}`,
                `${cit.name} wholesale market`,
                targetKw,
                `wholesale products in ${cit.name}`,
                `wholesale suppliers ${cit.name}`,
              ].map((keyword) => (
                <div
                  key={keyword}
                  className="rounded-lg border border-border bg-bg-subtle px-4 py-3 text-sm font-semibold text-text"
                >
                  {keyword}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-subtle">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-text sm:text-3xl">
              Why Use {SITE_NAME} for the Wholesale Market in {cit.name}?
            </h2>
            <p className="mt-3 max-w-2xl text-text-secondary">
              {SITE_NAME} makes it easy to source wholesale products in{" "}
              {cit.name}. Here&apos;s what sets us apart:
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

        {/* ── Other Cities ── */}
        <section className="py-16 bg-bg">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-text">
              Wholesale Markets in Other Cities
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {CITIES.filter((c) => c.slug !== city).map((c) => (
                <TrackedLink
                  key={c.slug}
                  href={`/market/${c.slug}`}
                  eventName="city_click"
                  eventParams={{ to_city: c.slug, from_city: cit.slug }}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-all hover:border-primary/30 hover:text-primary hover:shadow-sm"
                >
                  Wholesale Market in {c.name}
                </TrackedLink>
              ))}
            </div>
          </div>
        </section>

        <PopularSearches
          title={`Popular Wholesale Market Searches in ${cit.name}`}
          searches={popularSearches}
        />

        {/* ── FAQ ── */}
        <FAQSection
          title={`Wholesale Market in ${cit.name} — FAQ`}
          subtitle={`Common questions about finding wholesale products in ${cit.name}`}
          faqs={faqs}
        />

        {/* ── Final CTA ── */}
        <section className="gradient-dark py-20 text-center text-white">
          <div className="mx-auto max-w-2xl px-4">
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Ready to Explore Wholesale Markets in {cit.name}?
            </h2>
            <p className="mt-4 text-white/60">
              Download {SITE_NAME} free and start browsing wholesale suppliers
              in {cit.name} now.
            </p>
            <TrackedLink
              href={PLAY_STORE_URL}
              eventName="app_download_click"
              eventParams={{
                store: "play_store",
                source: "city_page",
                placement: "final_cta",
                city_slug: cit.slug,
                city_name: cit.name,
                state: cit.state,
              }}
              className="mt-8 inline-flex items-center gap-2.5 rounded-[var(--radius-md)] bg-white px-8 py-4 text-base font-bold text-dark shadow-lg transition-all hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download Now — Free
            </TrackedLink>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
