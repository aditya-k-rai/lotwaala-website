import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "Lotwaala Podcast — Anurag Sharma on India's Wholesale & Dead Stock Revolution",
  description:
    "Watch the Lotwaala Podcast featuring founder Anurag Sharma discussing India's B2B dead stock crisis, wholesale market trust, MSME growth strategies, and how Lotwaala is building a fraud-free marketplace. Available on YouTube.",
  path: "/podcast",
  keywords: [
    "Lotwaala podcast",
    "Anurag Sharma podcast wholesale India",
    "B2B wholesale podcast India",
    "dead stock liquidation podcast",
    "wholesale marketplace India podcast",
    "MSME business podcast India",
    "wholesale trust India podcast",
    "Surplus Saga founder podcast",
    "B2B commerce India YouTube",
    "wholesale market insights India",
    "fraud free wholesale marketplace podcast",
    "bulk inventory India podcast",
    "Indian wholesale entrepreneur podcast",
  ],
});

// ─── Podcast Episodes Data ────────────────────────────────────────────────────

const EPISODES = [
  {
    id: "ep4-real-impact",
    youtubeId: "2-0C9jxqO9k",
    episodeNumber: "Episode 4",
    title: "Founder Anurag Sharma on the Real Impact of India's Wholesale App",
    description:
      "In this episode, Lotwaala founder Anurag Sharma dives deep into how the Lotwaala app is creating real, measurable impact for manufacturers and retailers across India. He discusses how the platform is fundamentally reshaping trust in India's fragmented B2B wholesale market — from escrow-protected payments to GST-based seller verification — and what it means for the next generation of Indian MSMEs.",
    keyTakeaways: [
      "How Lotwaala's escrow system eliminates payment fraud in B2B transactions",
      "Why GST verification is non-negotiable for building buyer trust",
      "The scale of India's dead stock problem and what it costs MSMEs annually",
      "Real success stories from sellers who cleared inventory using Lotwaala",
    ],
    tags: ["Wholesale Impact", "Escrow Payments", "MSME Growth", "B2B Trust"],
    publishDate: "2025",
    duration: "Watch Now",
  },
  {
    id: "ep2-growth-strategies",
    youtubeId: "D-diclquH1Q",
    episodeNumber: "Episode 2",
    title: "Lotwaala Founder Shares Secret Growth Strategies & Market Expansion Secrets",
    description:
      "Anurag Sharma reveals the strategic playbook behind Lotwaala's rapid market expansion. From identifying the right wholesale hubs in India's tier-1 and tier-2 cities to building credibility with GST-verified sellers, this episode is an essential watch for anyone interested in B2B marketplace strategy, supply chain dynamics, and the future of wholesale commerce in India.",
    keyTakeaways: [
      "Lotwaala's city-by-city expansion strategy across 120+ wholesale markets in India",
      "Why dead stock liquidation is a ₹50,000 crore opportunity in India",
      "How to build supply-side trust in an unorganised market",
      "The role of digital infrastructure in modernising traditional wholesale trade",
    ],
    tags: ["Growth Strategy", "Market Expansion", "Wholesale Markets", "B2B Commerce"],
    publishDate: "2025",
    duration: "Watch Now",
  },
  {
    id: "ep-fraud-free",
    youtubeId: "rhYv9IrLX8A",
    episodeNumber: "Founder Special",
    title: "Building a Trusted and Fraud-Free B2B Marketplace in India",
    description:
      "One of the most critical challenges in India's B2B wholesale market is endemic fraud — from fake sellers to payment defaults and substandard goods. In this special episode, Anurag Sharma outlines the exact mechanisms Lotwaala has built to eliminate fraud: mandatory KYC, GST verification, escrow payments, and transparent dispute resolution. A must-watch for any buyer or seller considering joining the platform.",
    keyTakeaways: [
      "The anatomy of B2B fraud in India's unorganised wholesale market",
      "Why mandatory GST and KYC verification is Lotwaala's first line of defense",
      "How the 7–10 day escrow window eliminates quality disputes",
      "Lotwaala's dispute resolution process — step by step",
    ],
    tags: ["Fraud Prevention", "KYC Verification", "Trust Economy", "Escrow System"],
    publishDate: "2025",
    duration: "Watch Now",
  },
  {
    id: "ep4-alt",
    youtubeId: "AGOHvmRE8ps",
    episodeNumber: "Episode 4 (Extended)",
    title: "Anurag Sharma on the Real Impact of India's Wholesale App — Extended Cut",
    description:
      "The extended version of our most popular episode — with additional discussion on Lotwaala's long-term vision for India's B2B market, the role of technology in transforming traditional trade, and Anurag Sharma's personal journey from Dubai-based global trade to founding one of India's most ambitious MSME marketplaces.",
    keyTakeaways: [
      "Anurag Sharma's personal journey from Dubai to founding Lotwaala",
      "The long-term vision: India's most transparent B2B liquidation aggregator",
      "Technology as a trust-builder in traditional wholesale trade",
      "What success looks like for India's MSME sector by 2030",
    ],
    tags: ["Founder Story", "Vision 2030", "MSME Future", "B2B Technology"],
    publishDate: "2025",
    duration: "Watch Now",
  },
  {
    id: "ep5-trusted-marketplace",
    youtubeId: "BN9SmF1ZY5k",
    episodeNumber: "Episode 5",
    title: "Building a Trusted and Fraud-Free B2B Marketplace — The Lotwaala Model",
    description:
      "In this episode, Anurag Sharma goes deeper into the structural design choices behind Lotwaala's trust-first model — why the platform chose zero commission over monetisation, how the escrow system was designed to protect both buyers and sellers simultaneously, and what other Indian B2B startups can learn from Lotwaala's approach to building credibility in a fragmented market.",
    keyTakeaways: [
      "Why Lotwaala chose zero commission over revenue extraction",
      "Designing an escrow that works for both buyer AND seller simultaneously",
      "Lessons for Indian B2B startups building in trust-deficit markets",
      "How Lotwaala plans to scale verification as the platform grows",
    ],
    tags: ["Trust Architecture", "Zero Commission", "B2B Startup", "Escrow Design"],
    publishDate: "2025",
    duration: "Watch Now",
  },
];

// ─── Structured Data ──────────────────────────────────────────────────────────

const videoSchemas = EPISODES.map((ep) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: ep.title,
  description: ep.description,
  thumbnailUrl: `https://img.youtube.com/vi/${ep.youtubeId}/maxresdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}`,
  url: `https://www.youtube.com/watch?v=${ep.youtubeId}`,
  uploadDate: "2025-01-01",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  },
  author: {
    "@type": "Person",
    name: "Anurag Sharma",
    jobTitle: "Founder & CEO, Lotwaala",
  },
}));

const podcastSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "The Lotwaala Podcast",
  description:
    "The Lotwaala Podcast features founder Anurag Sharma discussing India's B2B wholesale crisis, dead stock liquidation, MSME growth strategies, and how Lotwaala is building India's most trusted wholesale marketplace.",
  url: `${SITE_URL}/podcast`,
  author: {
    "@type": "Person",
    name: "Anurag Sharma",
    jobTitle: "Founder & CEO",
  },
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  sameAs: ["https://www.youtube.com/@Lotwaala/"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Podcast", item: `${SITE_URL}/podcast` },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PodcastPage() {
  return (
    <>
      {videoSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd data={podcastSeriesSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-[#f59e0b]/15 blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#6366f1]/15 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumb items={[{ label: "Podcast", href: "/podcast" }]} />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-1.5 text-sm font-medium text-[#fbbf24]">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
              5 Episodes · Available on YouTube
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              The{" "}
              <span className="bg-gradient-to-r from-[#f59e0b] to-[#6366f1] bg-clip-text text-transparent">
                Lotwaala Podcast
              </span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-[#fbbf24]">
              Inside India&apos;s B2B Wholesale Revolution — with Founder Anurag Sharma
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
              Lotwaala founder <strong className="text-white">Anurag Sharma</strong> dives into the
              mechanics of India&apos;s B2B supply chain — exploring the dead stock crisis, the trust
              deficit in wholesale trade, and how Lotwaala is building India&apos;s most fraud-free
              wholesale marketplace. Every episode is a masterclass in Indian commerce.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@Lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </a>
              <a
                href="https://www.instagram.com/lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* ── About the Show ── */}
        <section className="bg-[#f8fafc] py-14" aria-labelledby="about-show-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-sm">
              <div className="flex items-start gap-5 flex-wrap sm:flex-nowrap">
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#4f46e5] text-2xl font-extrabold text-white shadow-md">
                  AS
                </div>
                <div>
                  <h2 id="about-show-heading" className="text-xl font-extrabold text-[#0f172a]">About the Lotwaala Podcast</h2>
                  <p className="mt-1 text-sm font-medium text-[#6366f1]">Hosted by Anurag Sharma · Founder & CEO, Lotwaala</p>
                  <p className="mt-3 text-[#475569] leading-relaxed">
                    The Lotwaala Podcast is India&apos;s go-to resource for wholesale market insights, B2B commerce strategy, and MSME growth. Every episode features founder Anurag Sharma drawing on 15+ years of global trade and real estate experience to explain the structural problems in India&apos;s B2B market — and exactly how Lotwaala&apos;s technology and policy framework is solving them. From escrow mechanics to seller verification, trust-building to liquidation strategy — this is the inside story of building India&apos;s most trusted wholesale marketplace.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Dead Stock Crisis", "Wholesale Trust", "MSME Growth", "B2B Commerce", "Escrow Payments", "Fraud Prevention"].map((tag) => (
                      <span key={tag} className="rounded-full bg-[#6366f1]/10 px-3 py-1 text-xs font-semibold text-[#6366f1]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Episodes ── */}
        <section className="py-20" aria-labelledby="episodes-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">All Episodes</span>
              <h2 id="episodes-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                Watch Every Episode
              </h2>
              <p className="mt-4 text-[#64748b]">
                All podcast episodes are available free on our{" "}
                <a
                  href="https://www.youtube.com/@Lotwaala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#6366f1] hover:underline"
                >
                  YouTube channel
                </a>
              </p>
            </div>

            <div className="space-y-12">
              {EPISODES.map((ep, i) => (
                <article
                  key={ep.id}
                  id={ep.id}
                  className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  aria-label={ep.title}
                >
                  <div className={`grid gap-0 ${i % 2 === 0 ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"}`}>
                    {/* Video Embed */}
                    <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-video w-full bg-[#0a0a1a]">
                        <iframe
                          src={`https://www.youtube.com/embed/${ep.youtubeId}?rel=0&modestbranding=1`}
                          title={ep.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          className="absolute inset-0 h-full w-full"
                        />
                      </div>
                    </div>

                    {/* Episode Info */}
                    <div className={`flex flex-col justify-between p-6 sm:p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-bold text-[#d97706]">
                            {ep.episodeNumber}
                          </span>
                          <span className="text-xs text-[#94a3b8]">{ep.publishDate}</span>
                        </div>
                        <h3 className="mt-3 text-xl font-extrabold leading-snug text-[#0f172a]">
                          {ep.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                          {ep.description}
                        </p>

                        {/* Key Takeaways */}
                        <div className="mt-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-[#6366f1]">Key Takeaways</p>
                          <ul className="mt-2 space-y-1.5">
                            {ep.keyTakeaways.map((t) => (
                              <li key={t} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366f1]" />
                                <span className="text-xs text-[#475569]">{t}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {ep.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#f1f5f9] px-2.5 py-1 text-xs font-medium text-[#64748b]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <a
                        href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 self-start rounded-xl bg-[#6366f1] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#4f46e5]"
                      >
                        Watch on YouTube →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Subscribe CTA ── */}
        <section className="bg-[#0a0a1a] py-20" aria-labelledby="subscribe-heading">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="text-4xl mb-6">🎙️</div>
            <h2 id="subscribe-heading" className="text-3xl font-extrabold text-white">
              Never Miss an Episode
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Subscribe to the Lotwaala YouTube channel and follow us on Instagram for new episodes, wholesale market insights, and B2B strategy from founder Anurag Sharma.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.youtube.com/@Lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe on YouTube
              </a>
              <a
                href="https://www.instagram.com/lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Follow on Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/lotwaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ── Related Links ── */}
        <section className="py-12 bg-[#f8fafc]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-[#64748b]">
              Want to learn more?{" "}
              <Link href="/about" className="font-semibold text-[#6366f1] hover:underline">
                Read About Lotwaala
              </Link>{" "}
              ·{" "}
              <Link href="/how-to-use" className="font-semibold text-[#6366f1] hover:underline">
                How to Use the App
              </Link>{" "}
              ·{" "}
              <Link href="/team" className="font-semibold text-[#6366f1] hover:underline">
                Meet the Team
              </Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
