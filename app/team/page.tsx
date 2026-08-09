import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_URL, PLAY_STORE_URL } from "@/lib/constants";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = generatePageMetadata({
  title: "Meet the Team — Lotwaala | Building India's Wholesale Trust Economy",
  description:
    "Meet the people behind Lotwaala — India's #1 dead stock liquidation and wholesale marketplace. Founder Anurag Sharma leads a team of technologists, operations experts, and support specialists committed to transforming B2B commerce across India.",
  path: "/team",
  keywords: [
    "Lotwaala team",
    "Anurag Sharma Lotwaala founder CEO",
    "Lotwaala leadership team India",
    "Surplus Saga Pvt Ltd team",
    "Lotwaala web developer Aditya Kumar Rai",
    "wholesale marketplace team India",
    "B2B startup team Noida",
    "Lotwaala Nandani Rastogi HR",
    "wholesale app India founder",
  ],
});

// ─── Structured Data ──────────────────────────────────────────────────────────

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Lotwaala",
  url: SITE_URL,
  member: [
    {
      "@type": "Person",
      name: "Anurag Sharma",
      jobTitle: "Founder & Chief Executive Officer",
      description:
        "Anurag Sharma founded Lotwaala in 2025 after 15+ years across global sales, real estate, and international trade in India and Dubai. He previously served as Sales Manager at Octagon International (Dubai) and operates Colour Tribe clothing brand.",
      worksFor: { "@type": "Organization", name: "Lotwaala / Surplus Saga Pvt. Ltd." },
    },
    {
      "@type": "Person",
      name: "Navneet Pandey",
      jobTitle: "Full-Stack & App Developer",
      description:
        "Navneet Pandey is a Full-Stack & App Developer with 3+ years of experience building and maintaining web and mobile applications for Lotwaala.",
      worksFor: { "@type": "Organization", name: "Lotwaala / Surplus Saga Pvt. Ltd." },
    },
    {
      "@type": "Person",
      name: "Aditya Kumar Rai",
      jobTitle: "Web Developer & Digital Marketer",
      url: `${SITE_URL}/developer`,
      description:
        "Aditya Kumar Rai is the Software Developer, Web Developer, and Digital Marketer behind Lotwaala's web platform and digital presence, based in Greater Noida, India.",
      worksFor: { "@type": "Organization", name: "Lotwaala / Surplus Saga Pvt. Ltd." },
    },
    {
      "@type": "Person",
      name: "Sachin Puri",
      jobTitle: "Operations & Platform Manager",
      description:
        "Sachin Puri is the Operations & Platform Manager at Lotwaala, overseeing platform operations, buyer/seller onboarding, and dispute resolution.",
      worksFor: { "@type": "Organization", name: "Lotwaala / Surplus Saga Pvt. Ltd." },
    },
    {
      "@type": "Person",
      name: "Nandani Rastogi",
      jobTitle: "HR & Support Lead",
      description:
        "Nandani Rastogi leads Human Resources and Customer Support operations at Lotwaala, managing team recruitment and buyer/seller assistance.",
      worksFor: { "@type": "Organization", name: "Lotwaala / Surplus Saga Pvt. Ltd." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    { "@type": "ListItem", position: 3, name: "Meet the Team", item: `${SITE_URL}/team` },
  ],
};

// ─── Team Data ────────────────────────────────────────────────────────────────

const LEADERSHIP = [
  {
    name: "Anurag Sharma",
    role: "Founder & CEO",
    department: "Leadership",
    initials: "AS",
    gradient: "from-[#6366f1] to-[#4f46e5]",
    image: "/Anurag sharma Official .png",
    bio: "Anurag Sharma is the driving force behind Lotwaala — a seasoned business leader with 15+ years spanning global trade, corporate sales, and apparel manufacturing. Since 2017, he has successfully owned and operated Colour Tribe, a premier clothing brand generating ₹30–40 Lakhs in monthly sales revenue. He spent nearly a decade (2016–2025) as Sales Manager at Octagon International in Dubai, specializing in global trade and marketing before returning to India to build Lotwaala.",
    highlights: [
      "Founder & Owner — Colour Tribe (Clothing brand est. 2017, ₹30–40L/month revenue)",
      "Sales Manager — Octagon International, Dubai (2016–2025)",
      "General Manager — Indirapuram Real Estate Operations",
      "Alumni — HCL Technologies & EXL Service",
      "Incorporated Surplus Saga Pvt. Ltd. — July 20, 2025",
      "Launched Lotwaala App — November 26, 2025",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/anurag-sharma-8997551b/", platform: "linkedin" },
    ],
    badge: "Founder",
  },
];

const TECH_TEAM = [
  {
    name: "Navneet Pandey",
    role: "Full-Stack & App Developer",
    department: "Technology",
    initials: "NP",
    gradient: "from-[#8b5cf6] to-[#7c3aed]",
    image: "/Navneet Pandey.png",
    bio: "Navneet Pandey is a Full-Stack Developer with 3+ years of experience building and maintaining web and mobile platforms. He developed the Lotwaala app platform across frontend, backend APIs, MySQL/Firebase databases, Cloudflare R2, and Razorpay payment integrations.",
    highlights: [
      "Full-Stack & Mobile Development (React, Next.js, React Native, Node.js)",
      "Backend APIs, MySQL, Firebase & Cloudflare R2 Architecture",
      "Razorpay Payment Gateway & Escrow Integrations",
      "3+ years of professional full-stack engineering experience",
    ],
    links: [],
    badge: "App Dev",
  },
  {
    name: "Aditya Kumar Rai",
    role: "Web Developer & Digital Marketer",
    department: "Technology",
    initials: "AKR",
    gradient: "from-[#10b981] to-[#059669]",
    image: "/Aditya Kumar Rai Lotwaala.png",
    bio: "Aditya Kumar Rai (also known as Aditya Rai) designed, developed, and marketed the Lotwaala web platform and digital ecosystem. Based in Greater Noida, he combines software development with performance-driven digital marketing to build Lotwaala's online presence, SEO footprint, and app discovery.",
    highlights: [
      "Also known as: Aditya Rai",
      "Full-stack Web Development (Next.js, React, TypeScript)",
      "Digital Marketing & SEO Architecture",
      "Designed & built lotwaala.com",
      "Based in Greater Noida, Uttar Pradesh",
    ],
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-k-rai/", platform: "linkedin" },
      { label: "GitHub", href: "https://github.com/aditya-k-rai", platform: "github" },
      { label: "Quora", href: "https://www.quora.com/profile/Aditya-Kumar-Rai-51", platform: "quora" },
      { label: "Developer Profile", href: "/developer", platform: "website" },
    ],
    badge: "Web Dev",
  },
];

const OPERATIONS_TEAM = [
  {
    name: "Sachin Puri",
    role: "Operations & Platform Manager",
    department: "Operations & Support",
    initials: "SP",
    gradient: "from-[#ec4899] to-[#db2777]",
    image: "/Sachin Puri.png",
    bio: "Sachin Puri serves as Operations & Platform Manager at Lotwaala, overseeing platform management, buyer/seller onboarding operations, order escalation, and dispute handling to ensure seamless performance across the platform.",
    highlights: [
      "Platform & Operations Management",
      "Buyer & Seller Onboarding Oversight",
      "Order Dispute Resolution & Escalation",
      "Operations & Support Leadership",
    ],
    links: [
      { label: "Instagram", href: "#", platform: "instagram", isPlaceholder: true },
    ],
    badge: "Manager",
  },
  {
    name: "Nandani Rastogi",
    role: "HR & Support Lead",
    department: "HR & Support",
    initials: "NR",
    gradient: "from-[#f59e0b] to-[#d97706]",
    image: "/Nandani Rastogi.png",
    bio: "Nandani Rastogi leads Human Resources and Customer Support at Lotwaala. She oversees team recruitment, onboarding, and manages buyer and seller support operations — ensuring every Lotwaala user gets timely, reliable assistance in English and Hindi.",
    highlights: [
      "Human Resources & Team Recruitment",
      "Buyer & Seller Customer Support",
      "Support in English & Hindi",
      "Mon–Sat, 9 AM – 6 PM IST",
    ],
    links: [
      { label: "Instagram", href: "#", platform: "instagram", isPlaceholder: true },
    ],
    badge: "HR Lead",
  },
];

const DEPARTMENTS = [
  {
    icon: "⚙️",
    name: "Operations & Business",
    description:
      "Our operations team manages seller onboarding, KYC verification, inventory quality checks, and day-to-day platform health — ensuring Lotwaala's zero-fraud promise is maintained at every transaction.",
  },
  {
    icon: "📣",
    name: "Marketing & Growth",
    description:
      "The marketing team drives Lotwaala's organic and paid growth across social media (Instagram, YouTube, LinkedIn), content channels, and the podcast — building brand authority and generating qualified B2B leads.",
  },
  {
    icon: "🚚",
    name: "Logistics & Delivery",
    description:
      "Our logistics team coordinates last-mile delivery partnerships with Big-Ship and other major carriers — managing delivery tracking, returns, and buyer-side confirmation to trigger escrow release.",
  },
];

const CORE_VALUES = [
  { icon: "🔒", title: "Trust First", description: "Every decision — from seller KYC to payment escrow — is designed to eliminate fraud and protect every participant in the supply chain." },
  { icon: "🆓", title: "Zero Commission", description: "We are committed to never charging sellers a rupee. Our success is measured by their growth, not our margin." },
  { icon: "🌐", title: "Pan-India Access", description: "We believe every MSME in India — regardless of city or size — deserves access to a safe, efficient wholesale marketplace." },
  { icon: "⚡", title: "Move Fast, Stay Honest", description: "We move with startup speed but never compromise on transparency, compliance, or the trust we've built with our users." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

interface TeamMemberLink {
  label: string;
  href: string;
  platform?: string;
  isPlaceholder?: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  department: string;
  initials: string;
  gradient: string;
  image?: string;
  bio: string;
  highlights: string[];
  links: TeamMemberLink[];
  badge: string;
  placeholder?: boolean;
}

function SocialIcon({ icon }: { icon?: string }) {
  if (icon === "linkedin") {
    return (
      <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }
  if (icon === "github") {
    return (
      <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
      </svg>
    );
  }
  if (icon === "quora") {
    return (
      <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.69 2.01 6.91 5 8.61V22l3.41-1.71C10.92 20.78 11.45 20.8 12 20.8c5.52 0 10-4.48 10-9.8S17.52 2 12 2zm1 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
      </svg>
    );
  }
  if (icon === "instagram") {
    return (
      <svg className="h-4 w-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4 fill-none stroke-current stroke-2 flex-shrink-0" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
    </svg>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative flex flex-col justify-between h-full overflow-hidden rounded-[2rem] border border-[#e2e8f0] bg-white shadow-md team-card-glow transition-all duration-500 hover:shadow-2xl">
      {/* Sheen light sweep animation layer */}
      <div className="team-card-sheen" />

      {/* Decorative Top Accent Gradient Header */}
      <div className="h-28 w-full bg-gradient-to-r from-[#6366f1]/15 via-[#a855f7]/15 to-[#f59e0b]/15 relative overflow-hidden flex-shrink-0">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#6366f1]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#f59e0b]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>

      <div className="px-6 sm:px-8 pb-8 -mt-16 relative z-10 flex flex-col justify-between flex-1">
        <div>
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
            {/* 1080x1350 4:5 Portrait Photo Frame */}
            <div className="relative flex-shrink-0">
              {/* Animated Conic Glow Outer Ring */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-ring-pulse"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #a855f7, #f59e0b, #6366f1)",
                }}
              />

              {member.image ? (
                <div className="relative w-44 sm:w-52 aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-[#f8fafc]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    priority={member.badge === "Founder"}
                  />
                </div>
              ) : (
                <div
                  className={`relative flex w-44 sm:w-52 aspect-[4/5] items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br ${member.gradient} text-4xl font-extrabold text-white shadow-2xl transition-transform duration-700 group-hover:scale-105`}
                >
                  {member.initials}
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1 pb-2">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0f172a] transition-colors duration-300 group-hover:text-[#6366f1]">
                  {member.name}
                </h3>
                <span className="rounded-full bg-[#6366f1] px-3.5 py-1 text-xs font-extrabold text-white shadow-sm">
                  {member.badge}
                </span>
                {member.placeholder && (
                  <span className="rounded-full bg-[#f59e0b]/10 px-3 py-1 text-xs font-medium text-[#d97706]">
                    Details Coming Soon
                  </span>
                )}
              </div>
              <p className="text-base sm:text-lg font-bold text-[#6366f1] mt-1">{member.role}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] mt-0.5">{member.department}</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#475569]">{member.bio}</p>

          {/* Key Highlights — Single-column smooth vertical flow */}
          <div className="mt-5 border-t border-[#f1f5f9] pt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#6366f1] mb-2.5">Key Highlights</p>
            <ul className="space-y-2">
              {member.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] group/item">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform duration-300 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-[#0f172a] transition-colors">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Links — Always aligned at bottom */}
        <div className="mt-6 border-t border-[#f1f5f9] pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {member.links && member.links.length > 0 ? (
              member.links.map((link) => {
                if (link.isPlaceholder) {
                  return (
                    <span
                      key={link.label}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-pink-500/10 border border-pink-500/20 px-3 py-1.5 text-xs font-bold text-pink-600 cursor-default"
                      title="Instagram profile coming soon"
                    >
                      <SocialIcon icon="instagram" />
                      Instagram (Soon)
                    </span>
                  );
                }

                return (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${
                      link.platform === "linkedin"
                        ? "bg-[#0a66c2] hover:bg-[#004182]"
                        : link.platform === "github"
                        ? "bg-[#24292e] hover:bg-[#1b1f23]"
                        : link.platform === "quora"
                        ? "bg-[#b92b27] hover:bg-[#961c19]"
                        : "bg-[#6366f1] hover:bg-[#4f46e5]"
                    }`}
                  >
                    <SocialIcon icon={link.platform} />
                    {link.label}
                  </Link>
                );
              })
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 px-3.5 py-1.5 text-xs font-bold text-[#6366f1]">
                <SocialIcon icon="website" />
                Lotwaala Team
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main id="main-content" className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0a0a1a] py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#6366f1]/15 blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-[#f59e0b]/10 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <Breadcrumb
              items={[
                { label: "About", href: "/about" },
                { label: "Meet the Team", href: "/team" },
              ]}
            />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm font-medium text-[#818cf8]">
              <span className="h-2 w-2 rounded-full bg-[#6366f1] animate-pulse" />
              Surplus Saga Pvt. Ltd. · Noida, India
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet the Team{" "}
              <span className="bg-gradient-to-r from-[#6366f1] to-[#f59e0b] bg-clip-text text-transparent">
                Building India&apos;s Trust Economy
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              Behind Lotwaala is a lean, mission-driven team of builders, operators, and problem-solvers — united by one goal: making India&apos;s wholesale market safe, transparent, and accessible to every business.
            </p>
          </div>
        </section>

        {/* ── Leadership ── */}
        <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="leadership-heading">
          <div className="flex items-center gap-3">
            <span className="text-2xl">👑</span>
            <h2 id="leadership-heading" className="text-2xl font-extrabold text-[#0f172a]">Leadership</h2>
          </div>
          <div className="mt-6">
            {LEADERSHIP.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </section>

        {/* ── Technology ── */}
        <section className="bg-[#f8fafc] py-20" aria-labelledby="tech-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💻</span>
              <h2 id="tech-heading" className="text-2xl font-extrabold text-[#0f172a]">Technology Team</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {TECH_TEAM.map((m) => (
                <TeamCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </section>

        {/* ── HR & Support ── */}
        <section className="py-20" aria-labelledby="support-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤝</span>
              <h2 id="support-heading" className="text-2xl font-extrabold text-[#0f172a]">HR & Support Team</h2>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {OPERATIONS_TEAM.map((m) => (
                <TeamCard key={m.name} member={m} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Departments ── */}
        <section className="bg-[#0a0a1a] py-20" aria-labelledby="departments-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#f59e0b]">Our Departments</span>
              <h2 id="departments-heading" className="mt-3 text-3xl font-extrabold text-white">
                How We&apos;re Organised
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {DEPARTMENTS.map((dept) => (
                <div
                  key={dept.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="text-3xl">{dept.icon}</div>
                  <h3 className="mt-4 font-bold text-white">{dept.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-20" aria-labelledby="values-heading">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-[#6366f1]">Our Values</span>
              <h2 id="values-heading" className="mt-3 text-3xl font-extrabold text-[#0f172a]">
                What Drives Every Decision We Make
              </h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CORE_VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-5 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl">{v.icon}</div>
                  <h3 className="mt-3 font-bold text-[#0f172a]">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#64748b]">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Join Us CTA ── */}
        <section className="bg-gradient-to-br from-[#6366f1] to-[#4f46e5] py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white">
              Want to Join the Team?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              We are building India&apos;s most trusted B2B marketplace. If you are passionate about wholesale commerce, technology, or operations — we&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#4f46e5] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Contact Us to Join
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                Learn About Lotwaala
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
