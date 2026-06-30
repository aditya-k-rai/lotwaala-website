import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  generatePageMetadata,
  generateDeveloperPersonSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

// ─── SEO Metadata ────────────────────────────────────────────────────────────

const DEV_NAME = "Aditya Kumar Rai";
const DEV_DESCRIPTION =
  `${DEV_NAME} is a Software Developer, Web Developer & Digital Marketer based in Greater Noida, India. He designed, developed, and marketed ${SITE_NAME} — India's #1 wholesale marketplace app. View his work, social profiles, and portfolio.`;

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: `${DEV_NAME} | Software Developer, Web Developer & Digital Marketer — Greater Noida`,
    description: DEV_DESCRIPTION,
    path: "/developer",
    image: `${SITE_URL}/Aditya Kumar Rai Web Developer.png`,
    keywords: [
      "Aditya Kumar Rai",
      "Aditya K. Rai",
      "Software Developer Greater Noida",
      "Web Developer Greater Noida",
      "Digital Marketer Greater Noida",
      `${SITE_NAME} developer`,
    ],
  }),
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: `${SITE_URL}/developer`,
    title: `${DEV_NAME} | Software Developer, Web Developer & Digital Marketer — Greater Noida`,
    description: DEV_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/Aditya Kumar Rai Web Developer.png`,
        width: 1200,
        height: 630,
        alt: `${DEV_NAME} — Software Developer, Web Developer & Digital Marketer`,
      },
    ],
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const ROLES = ["Software Developer", "Web Developer", "Digital Marketer"];

const WHAT_HE_BUILT = [
  {
    emoji: "🏗️",
    title: "Full-Stack Web Application",
    description: `Built the entire ${SITE_NAME} web platform as a high-performance SPA using Next.js App Router, React 19, and TypeScript — with lazy-loaded routes, optimised images via next/image, and server-side rendering for instant first paint.`,
  },
  {
    emoji: "🎨",
    title: "UI/UX Design System",
    description:
      "Designed and implemented a premium design system with Tailwind CSS v4 — featuring glassmorphism cards, gradient backgrounds, micro-animations, responsive layouts, and a cohesive indigo/amber brand palette.",
  },
  {
    emoji: "🔥",
    title: "Firebase Backend & Admin",
    description: `Integrated Firebase for real-time data, authentication, and cloud functions. Built the admin panel for ${SITE_NAME}'s wholesale marketplace with secure CRUD operations and analytics tracking.`,
  },
  {
    emoji: "⚡",
    title: "Performance & Optimisation",
    description:
      "Achieved 95+ Lighthouse scores across all metrics. Implemented dynamic imports, image lazy-loading, AVIF/WebP formats, aggressive caching headers, and GPU-accelerated CSS animations.",
  },
];

const HOW_HE_MARKETED = [
  {
    emoji: "🔍",
    title: "Technical SEO Infrastructure",
    description:
      "Implemented comprehensive Schema.org structured data (Organization, SoftwareApplication, FAQPage, BreadcrumbList, CollectionPage), dynamic sitemaps, canonical URLs, and meta tag generation for 500+ pages.",
  },
  {
    emoji: "📍",
    title: "Local & City SEO Strategy",
    description: `Built 120+ city-specific wholesale market landing pages, 15+ category hub pages, and festival deal pages — each with unique content, local keywords, and structured data targeting "wholesale products in [city]" queries.`,
  },
  {
    emoji: "📝",
    title: "Content & Keyword Strategy",
    description: `Created SEO-rich content targeting high-intent keywords like "wholesale products online India", "buy wholesale products", and "wholesale marketplace app". Optimised every page for E-E-A-T signals.`,
  },
  {
    emoji: "📊",
    title: "Analytics & Performance Tracking",
    description:
      "Set up Google Analytics 4 with custom event tracking, consent management, and conversion funnels. Implemented performance monitoring for Core Web Vitals and user engagement metrics.",
  },
];

const TECH_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Firebase",
  "Lucide Icons",
  "Google Analytics 4",
  "Schema.org",
  "Vercel",
  "PWA",
];

const SEO_KEYWORDS_TARGETED = [
  "Wholesale Products Online India",
  "Buy Wholesale Products",
  "Wholesale Marketplace App",
  "Wholesale Products Near Me",
  "B2B Wholesale Platform India",
  "Wholesale App Download",
];

const SOCIAL_LINKS = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/aditya-k-rai/",
    handle: "aditya-k-rai",
    color: "#0A66C2",
    bgTint: "rgba(10,102,194,0.12)",
    borderTint: "rgba(10,102,194,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    platform: "GitHub",
    url: "https://github.com/aditya-k-rai",
    handle: "aditya-k-rai",
    color: "#e6e6e6",
    bgTint: "rgba(255,255,255,0.07)",
    borderTint: "rgba(255,255,255,0.15)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    platform: "Portfolio",
    url: "https://aditya-k-rai.github.io/P-Website/",
    handle: "Personal Website",
    color: "#6366f1",
    bgTint: "rgba(99,102,241,0.10)",
    borderTint: "rgba(99,102,241,0.25)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/aditya_k_raii",
    handle: "@aditya_k_raii",
    color: "#E1306C",
    bgTint: "rgba(225,48,108,0.10)",
    borderTint: "rgba(225,48,108,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@Aditya-K-Rai",
    handle: "@Aditya-K-Rai",
    color: "#FF0000",
    bgTint: "rgba(255,0,0,0.09)",
    borderTint: "rgba(255,0,0,0.20)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    platform: "Facebook",
    url: "https://www.facebook.com/MightyAditya",
    handle: "MightyAditya",
    color: "#1877F2",
    bgTint: "rgba(24,119,242,0.10)",
    borderTint: "rgba(24,119,242,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    platform: "Quora",
    url: "https://www.quora.com/profile/Aditya-Kumar-Rai-51",
    handle: "Aditya-Kumar-Rai-51",
    color: "#B92B27",
    bgTint: "rgba(185,43,39,0.10)",
    borderTint: "rgba(185,43,39,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12.73 19.35c-.84-1.6-1.86-3.1-3.6-3.1-.57 0-1.06.18-1.37.5l-.83-1.67c.69-.6 1.66-.93 2.76-.93 2.16 0 3.56 1.19 4.6 2.87.6-1.39.92-3.19.92-5.42 0-5.7-2.2-8.8-5.97-8.8-3.73 0-5.98 3.1-5.98 8.8 0 5.65 2.25 8.7 5.98 8.7.55 0 1.07-.06 1.54-.18l.95 1.93c-.81.15-1.63.23-2.49.23C3.59 22.28 0 17.57 0 11.6 0 5.68 3.59.9 9.24.9c5.66 0 9.23 4.78 9.23 10.7 0 3.15-.77 5.63-2.06 7.42.56.57 1.17.85 1.89.85.85 0 1.37-.51 1.66-1.57l1.65.5c-.53 2.24-1.82 3.3-3.82 3.3-1.48 0-2.73-.62-3.86-1.75h-.2z" />
      </svg>
    ),
  },
  {
    platform: "Telegram",
    url: "https://t.me/Mighty_Joker",
    handle: "@Mighty_Joker",
    color: "#2AABEE",
    bgTint: "rgba(42,171,238,0.10)",
    borderTint: "rgba(42,171,238,0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

// ─── Page Component ──────────────────────────────────────────────────────────

export default function DeveloperPage() {
  const personSchema = generateDeveloperPersonSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "Developer", url: `${SITE_URL}/developer` },
  ]);

  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-gradient-to-b from-white to-[#f8fafc]">

        {/* JSON-LD Structured Data */}
        <JsonLd data={personSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* SR-Only SEO text */}
        <span className="sr-only">
          {DEV_NAME} — Software Developer in Greater Noida, Web Developer in Greater Noida, Digital Marketer in Greater Noida. Developed and marketed {SITE_NAME}.
        </span>

        {/* ── SECTION 1: Hero ── */}
        <section className="relative overflow-hidden">
          {/* Background gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef2ff] via-white to-[#fef3c7] opacity-60" />
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#6366f1]/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-52 h-52 sm:w-80 sm:h-80 rounded-full bg-[#f59e0b]/5 blur-3xl" />

          <div className="relative mx-auto max-w-4xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb
                items={[
                  { label: "Home", href: "/" },
                  { label: "Developer" },
                ]}
                variant="light"
              />
            </div>

            <div className="flex flex-col items-center text-center">
              {/* Developer Photo with animated glow ring */}
              <div className="relative mb-6 sm:mb-8">
                {/* Animated ring */}
                <div
                  className="absolute -inset-1.5 sm:-inset-2 rounded-full animate-ring-spin"
                  style={{
                    background: "conic-gradient(from 0deg, #6366f1, #a855f7, #06b6d4, #f59e0b, #6366f1)",
                    opacity: 0.7,
                  }}
                />
                <div className="absolute -inset-1.5 sm:-inset-2 rounded-full animate-ring-pulse" style={{ background: "conic-gradient(from 180deg, #6366f1, #a855f7, #06b6d4, #f59e0b, #6366f1)", opacity: 0.4 }} />
                {/* Photo */}
                <div className="relative h-28 w-28 rounded-full border-[3px] border-white shadow-xl overflow-hidden sm:h-44 sm:w-44 sm:border-4">
                  <Image
                    src="/Developer Aditya Kumar Rai Image .gif"
                    alt={`${DEV_NAME} — Software Developer, Web Developer & Digital Marketer in Greater Noida`}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl animate-fade-in-up">
                {DEV_NAME}
              </h1>

              {/* Role badges */}
              <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 animate-fade-in-up delay-100">
                {ROLES.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[#6366f1]/10 px-3 py-1 text-[11px] font-semibold text-[#4f46e5] sm:px-4 sm:py-1.5 sm:text-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>

              {/* Location badge */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-[#64748b] animate-fade-in-up delay-200">
                <span className="inline-flex items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#f59e0b] flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Greater Noida, UP, India
                </span>
                <span className="text-[#94a3b8]">·</span>
                <span className="text-[#94a3b8]">Originally from Kushinagar</span>
              </div>

              {/* Bio */}
              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-[#475569] animate-fade-in-up delay-300 px-2 sm:px-0">
                Also known as <strong>Aditya K. Rai</strong> or <strong>Aditya Rai</strong>.
                He designed, developed, and marketed the entire{" "}
                <span className="font-semibold text-[#6366f1]">{SITE_NAME}</span> web platform
                — from architecture and UI/UX to SEO, structured data, and digital marketing strategy.
              </p>

              {/* CTA Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-400">
                <a
                  id="dev-hero-portfolio"
                  href="https://aditya-k-rai.github.io/P-Website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full gradient-primary px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                >
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  View Portfolio
                </a>
                <a
                  id="dev-hero-linkedin"
                  href="https://www.linkedin.com/in/aditya-k-rai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${DEV_NAME} on LinkedIn`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-[#6366f1] px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-[#6366f1] transition-all duration-300 hover:bg-[#6366f1] hover:text-white hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: What He Built ── */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#6366f1]">
              {SITE_NAME} Development
            </span>
            <h2 className="mt-2 text-xl font-extrabold text-[#0f172a] sm:text-3xl lg:text-4xl">
              What He Built for {SITE_NAME}
            </h2>
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
          </div>

          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
            {WHAT_HE_BUILT.map((item, i) => (
              <div
                key={i}
                className="card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6"
              >
                <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl">{item.emoji}</div>
                <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">{item.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[#64748b]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tech stack strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[#6366f1]/8 px-3 py-1 text-xs font-semibold text-[#4f46e5]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: How He Marketed ── */}
        <section className="bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#f59e0b]">
                Digital Marketing & SEO
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-[#0f172a] sm:text-3xl lg:text-4xl">
                How He Marketed {SITE_NAME}
              </h2>
              <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ef4444]" />
            </div>

            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {HOW_HE_MARKETED.map((item, i) => (
                <div
                  key={i}
                  className="card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6"
                >
                  <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl">{item.emoji}</div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a]">{item.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Keywords targeted strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
              {SEO_KEYWORDS_TARGETED.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-xs text-[#64748b]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: Social Media ── */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#6366f1]">
              Connect
            </span>
            <h2 className="mt-2 text-xl font-extrabold text-[#0f172a] sm:text-3xl lg:text-4xl">
              Find {DEV_NAME} Online
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[#94a3b8]">
              Software Developer · Web Developer · Digital Marketer in Greater Noida
            </p>
            <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4]" />
          </div>

          <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${DEV_NAME} on ${social.platform}`}
                title={`${DEV_NAME} — ${social.platform}`}
                className="group relative flex flex-col items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
                style={{
                  backgroundColor: social.bgTint,
                  border: `1px solid ${social.borderTint}`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: `0 8px 30px ${social.borderTint}`,
                  }}
                />
                <div style={{ color: social.color }} className="relative z-10">
                  {social.icon}
                </div>
                <div className="relative z-10 text-center min-w-0 w-full">
                  <div className="text-xs sm:text-sm font-bold text-[#0f172a]">
                    {social.platform}
                  </div>
                  <div className="mt-0.5 text-[10px] sm:text-xs text-[#94a3b8] truncate">
                    {social.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 5: SEO Footer Credit ── */}
        <section className="border-t border-[#e2e8f0] bg-[#f8fafc]">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-[#6366f1]/20">
                <Image
                  src="/Developer Aditya Kumar Rai Image .gif"
                  alt={DEV_NAME}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <p className="text-xs text-[#94a3b8]">
                {DEV_NAME}
              </p>
              <p className="max-w-lg text-[10px] leading-relaxed text-[#cbd5e1]">
                Software Developer in Greater Noida · Web Developer in Greater Noida · Digital Marketer in Greater Noida.{" "}
                {SITE_NAME} website developed &amp; marketed by {DEV_NAME}.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
