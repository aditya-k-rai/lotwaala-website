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
    links: [],
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
    image: "/Aditya Kumar Rai Web Developer.png",
    bio: "Aditya Kumar Rai designed, developed, and marketed the Lotwaala web platform and digital ecosystem. Based in Greater Noida, he combines software development with performance-driven digital marketing to build Lotwaala's online presence, SEO footprint, and app discovery.",
    highlights: [
      "Full-stack Web Development (Next.js, React, TypeScript)",
      "Digital Marketing & SEO Architecture",
      "Designed & built lotwaala.com",
      "Based in Greater Noida, Uttar Pradesh",
    ],
    links: [{ label: "View Developer Profile", href: "/developer" }],
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
    links: [],
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
    links: [],
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

interface TeamMember {
  name: string;
  role: string;
  department: string;
  initials: string;
  gradient: string;
  image?: string;
  bio: string;
  highlights: string[];
  links: { label: string; href: string }[];
  badge: string;
  placeholder?: boolean;
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group relative overflow-hidden rounded-[2rem] border border-[#e2e8f0] bg-white shadow-md team-card-glow transition-all duration-500 hover:shadow-2xl">
      {/* Sheen light sweep animation layer */}
      <div className="team-card-sheen" />

      {/* Decorative Top Accent Gradient Header */}
      <div className="h-28 w-full bg-gradient-to-r from-[#6366f1]/15 via-[#a855f7]/15 to-[#f59e0b]/15 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#6366f1]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#f59e0b]/20 blur-2xl group-hover:scale-150 transition-transform duration-700" />
      </div>

      <div className="px-6 sm:px-8 pb-8 -mt-16 relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 text-center sm:text-left">
          {/* Much Larger Modern Portrait Photo Frame */}
          <div className="relative flex-shrink-0">
            {/* Animated Conic Glow Outer Ring */}
            <div
              className="absolute -inset-2 rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-ring-pulse"
              style={{
                background: "linear-gradient(135deg, #6366f1, #a855f7, #f59e0b, #6366f1)",
              }}
            />

            {member.image ? (
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-[#f8fafc]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  priority={member.badge === "Founder"}
                />
              </div>
            ) : (
              <div
                className={`relative flex h-44 w-44 sm:h-52 sm:w-52 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br ${member.gradient} text-4xl font-extrabold text-white shadow-2xl transition-transform duration-700 group-hover:scale-110`}
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
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#475569]">{member.bio}</p>

        {/* Key Highlights */}
        <div className="mt-6 border-t border-[#f1f5f9] pt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-[#6366f1] mb-3">Key Highlights</p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {member.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] group/item">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] transition-transform duration-300 group-hover/item:scale-125" />
                <span className="group-hover/item:text-[#0f172a] transition-colors">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links */}
        {member.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {member.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-2 rounded-xl bg-[#6366f1] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#4f46e5] hover:shadow-xl hover:-translate-y-0.5"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        )}
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
