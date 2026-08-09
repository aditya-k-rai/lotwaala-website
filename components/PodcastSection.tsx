"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";

export const PODCAST_EPISODES = [
  {
    id: "ep1-real-impact",
    youtubeId: "2-0C9jxqO9k",
    episodeNumber: "Episode 1",
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
  },
  {
    id: "ep3-fraud-free",
    youtubeId: "rhYv9IrLX8A",
    episodeNumber: "Episode 3",
    title: "Building a Trusted and Fraud-Free B2B Marketplace in India",
    description:
      "One of the most critical challenges in India's B2B wholesale market is endemic fraud — from fake sellers to payment defaults and substandard goods. In this special episode, Anurag Sharma outlines the exact mechanisms Lotwaala has built to eliminate fraud: mandatory KYC, GST verification, escrow payments, and transparent dispute resolution.",
    keyTakeaways: [
      "The anatomy of B2B fraud in India's unorganised wholesale market",
      "Why mandatory GST and KYC verification is Lotwaala's first line of defense",
      "How the 7–10 day escrow window eliminates quality disputes",
      "Lotwaala's dispute resolution process — step by step",
    ],
    tags: ["Fraud Prevention", "KYC Verification", "Trust Economy", "Escrow System"],
    publishDate: "2025",
  },
  {
    id: "ep4-vision-story",
    youtubeId: "AGOHvmRE8ps",
    episodeNumber: "Episode 4",
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
  },
  {
    id: "ep5-trusted-marketplace",
    youtubeId: "BN9SmF1ZY5k",
    episodeNumber: "Episode 5",
    title: "Building a Trusted and Fraud-Free B2B Marketplace — The Lotwaala Model",
    description:
      "In this episode, Anurag Sharma goes deeper into the structural design choices behind Lotwaala's trust-first model — why the platform chose zero commission over monetisation, how the escrow system was designed to protect both buyers and sellers simultaneously, and what other Indian B2B startups can learn from Lotwaala's approach.",
    keyTakeaways: [
      "Why Lotwaala chose zero commission over revenue extraction",
      "Designing an escrow that works for both buyer AND seller simultaneously",
      "Lessons for Indian B2B startups building in trust-deficit markets",
      "How Lotwaala plans to scale verification as the platform grows",
    ],
    tags: ["Trust Architecture", "Zero Commission", "B2B Startup", "Escrow Design"],
    publishDate: "2025",
  },
];

const videoSchemas = PODCAST_EPISODES.map((ep) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: ep.title,
  description: ep.description,
  thumbnailUrl: `https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`,
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
  url: `${SITE_URL}/about#podcast`,
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

function VideoPlayerCard({ ep }: { ep: (typeof PODCAST_EPISODES)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full bg-[#05050f] overflow-hidden rounded-xl border border-white/10 shadow-xl">
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${ep.title}`}
          className="group/thumb relative h-full w-full text-left cursor-pointer overflow-hidden border-0 p-0"
        >
          {/* Official High-Res YouTube Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${ep.youtubeId}/hqdefault.jpg`}
            alt={ep.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 group-hover/thumb:via-black/20 transition-colors" />

          {/* Red & White Animated Play Button Badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-2xl transition-all duration-300 group-hover/thumb:scale-110 group-hover/thumb:bg-[#e60000]">
              <div className="absolute -inset-2 rounded-full bg-[#ff0000]/30 blur-md group-hover/thumb:opacity-100 transition-opacity" />
              <svg className="relative h-7 w-7 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>

          {/* Top Title Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="rounded-md bg-black/80 px-2.5 py-1 text-[11px] font-bold text-[#fbbf24] backdrop-blur-sm border border-white/10">
              {ep.episodeNumber}
            </span>
            <span className="rounded-md bg-red-600 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-sm">
              YouTube
            </span>
          </div>

          {/* Bottom Click to Watch Badge */}
          <div className="absolute bottom-3 right-3 rounded-md bg-black/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Click to Watch Video
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${ep.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
          title={ep.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      )}
    </div>
  );
}

export default function PodcastSection() {
  return (
    <section id="podcast" className="bg-[#0a0a1a] py-20 text-white" aria-labelledby="podcast-section-heading">
      {videoSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <JsonLd data={podcastSeriesSchema} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-4 py-1.5 text-xs font-semibold text-[#fbbf24] mb-3">
            <span className="h-2 w-2 rounded-full bg-[#f59e0b] animate-pulse" />
            Official Video Podcast · Hosted by Founder Anurag Sharma
          </div>
          <h2 id="podcast-section-heading" className="text-3xl font-extrabold sm:text-4xl text-white">
            The{" "}
            <span className="bg-gradient-to-r from-[#f59e0b] to-[#6366f1] bg-clip-text text-transparent">
              Lotwaala Podcast
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Watch founder <strong>Anurag Sharma</strong> explain the mechanics of India&apos;s B2B wholesale market, escrow security, fraud prevention, and MSME expansion strategies.
          </p>
        </div>

        {/* Video Grid */}
        <div className="mt-12 space-y-12">
          {PODCAST_EPISODES.map((ep, i) => (
            <article
              key={ep.id}
              id={ep.id}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#6366f1]/50 transition-colors"
            >
              <div className={`grid gap-0 ${i % 2 === 0 ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"}`}>
                {/* Video Player Container */}
                <div className={`p-4 sm:p-6 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <VideoPlayerCard ep={ep} />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-between p-6 sm:p-8 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="rounded-full bg-[#f59e0b]/20 px-3 py-0.5 text-xs font-bold text-[#fbbf24]">
                        {ep.episodeNumber}
                      </span>
                      <span className="text-xs text-white/50">{ep.publishDate}</span>
                    </div>
                    <h3 className="mt-3 text-lg sm:text-xl font-bold leading-snug text-white">
                      {ep.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                      {ep.description}
                    </p>

                    {/* Key Takeaways */}
                    <div className="mt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#818cf8]">Key Highlights</p>
                      <ul className="mt-2 space-y-1.5">
                        {ep.keyTakeaways.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-xs text-white/80">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#6366f1]" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {ep.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] text-white/70"
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
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-[#6366f1] px-4 py-2 text-xs sm:text-sm font-bold text-white transition-all hover:bg-[#4f46e5]"
                  >
                    Watch Full Episode on YouTube →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* YouTube Subscribe Bar */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-[#1e1b4b] to-[#311b92] p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h3 className="text-xl font-extrabold text-white">Subscribe to The Lotwaala Podcast</h3>
            <p className="mt-1 text-sm text-white/70">
              Get raw wholesale insights, founder stories, and market liquidation strategies direct from Noida &amp; pan-India hubs.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@Lotwaala/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
