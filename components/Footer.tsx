import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import {
  SITE_NAME,
  CATEGORIES,
  CITIES,
  FESTIVALS,
  PLAY_STORE_URL,
  PRIMARY_PHONE_NUMBER,
  PRIMARY_PHONE_DISPLAY,
  WHATSAPP_PHONE_NUMBER,
  WHATSAPP_PHONE_DISPLAY,
} from "@/lib/constants";

const DEVELOPER_PORTFOLIO = "https://aditya-k-rai.github.io/P-Website/";
const DEVELOPER_LINKEDIN = "https://www.linkedin.com/in/aditya-k-rai/";

// Top featured categories for the 4-column balanced grid
const TOP_CATEGORIES = CATEGORIES.slice(0, 10);

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#fafbff] cv-auto">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ── Main Footer Grid — 4 Balanced Columns ── */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-icon.png"
                alt="Lotwaala Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-sm"
              />
              <span className="text-xl font-extrabold text-[#0f172a]">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
              India&apos;s #1 wholesale products marketplace, serving all of
              India. Buy wholesale products online from 10,000+ verified
              wholesalers — with hubs in 120+ cities in India and in-app
              delivery support through Big-Ship and other major delivery
              partners.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#64748b]">
              Surplus Saga Pvt. Ltd. (Lotwaala), KH 58, Tigri Gol Chakkar,
              Plot no 2, Taj Hwy, Biharipura, Raghunathpuri, Nai Basti Dundahera,
              Chipyana Khurd Urf Tigri, Greater Noida, UP 201009
            </p>
            <div className="mt-3.5 space-y-1.5 border-t border-[#e2e8f0]/80 pt-3 text-xs text-[#64748b]">
              <p className="flex items-center gap-1.5">
                <span className="font-semibold text-[#0f172a]">Call (Primary):</span>
                <a
                  href={`tel:${PRIMARY_PHONE_NUMBER}`}
                  className="font-medium text-[#6366f1] hover:underline"
                >
                  {PRIMARY_PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <span className="font-semibold text-[#0f172a]">WhatsApp (Secondary):</span>
                <a
                  href={`https://wa.me/91${WHATSAPP_PHONE_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#10b981] hover:underline"
                >
                  {WHATSAPP_PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Company Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
              Company &amp; Platform
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { label: "About Lotwaala", href: "/about" },
                { label: "Meet the Team", href: "/team" },
                { label: "How to Use the App", href: "/how-to-use" },
                { label: "Podcast", href: "/about#podcast" },
                { label: "Business Enquiry", href: "/enquiry" },
                { label: "Contact Us", href: "/contact" },
                { label: "Developer Profile", href: "/developer" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Editorial Policy", href: "/editorial-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-[#475569] transition-colors hover:text-[#4338ca]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Wholesale Categories */}
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
                Top Categories
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {TOP_CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/market/category/${cat.slug}`}
                    className="text-xs sm:text-sm text-[#475569] transition-colors hover:text-[#4338ca] truncate block"
                  >
                    Wholesale {cat.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1.5">
                <a
                  href="#all-categories"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4338ca] hover:text-[#312e81] transition-colors"
                >
                  <span>View all 50+ categories</span>
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Festival Deals & Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
              Festival &amp; Seasonal Deals
            </h3>
            <ul className="mt-4 space-y-2">
              {FESTIVALS.map((fest) => (
                <li key={fest.slug}>
                  <Link
                    href={`/market/festival/${fest.slug}`}
                    className="text-xs sm:text-sm text-[#475569] transition-colors hover:text-[#4338ca]"
                  >
                    {fest.name} Wholesale
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-[#e2e8f0]">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
                Mobile App
              </h4>
              <p className="mt-2 text-xs text-[#475569]">
                Download Lotwaala free on Android &amp; iOS to buy wholesale goods anywhere.
              </p>
              <div className="mt-3">
                <Link
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4338ca] hover:underline"
                >
                  <span>Google Play Store</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── Wholesale Categories Directory — Full-Width Balanced Grid ── */}
        <div id="all-categories" className="mt-12 border-t border-[#e2e8f0] pt-8">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
              All Wholesale Categories (50+ Categories)
            </h3>
            <span className="text-xs text-[#475569]">Verified Pan-India B2B Wholesalers</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2.5 gap-x-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/market/category/${cat.slug}`}
                className="text-xs text-[#475569] transition-colors hover:text-[#4338ca] hover:underline truncate"
                title={`Wholesale ${cat.name} Products`}
              >
                Wholesale {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Wholesale Markets by City — Full-Width Balanced Grid ── */}
        <div className="mt-10 border-t border-[#e2e8f0] pt-8">
          <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#4338ca]">
              Wholesale Markets Across India (120+ Cities)
            </h3>
            <span className="text-xs text-[#475569]">Verified B2B Market Hubs</span>
          </div>
          
          {/* 4-column balanced grid on desktop, 2-column on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2.5 gap-x-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/market/${city.slug}`}
                className="text-xs text-[#475569] transition-colors hover:text-[#4338ca] hover:underline truncate"
                title={`Wholesale Market in ${city.name}`}
              >
                Wholesale Market in {city.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="mt-10 border-t border-[#e2e8f0] pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row text-xs text-[#475569]">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p>
            India&apos;s #1 Wholesale Products App &amp; Wholesale Marketplace
          </p>
          <p>
            Surplus Saga Private Limited
          </p>
        </div>
      </div>

      {/* Developer Credit Bar */}
      <div className="bg-[#080e18] border-t border-white/5 py-2.5 px-3 sm:px-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 font-[family-name:var(--font-inter)]">
          <span className="text-white/75 text-[10px] sm:text-xs">Developed &amp; Marketed by</span>
          <Link
            href="/developer"
            className="flex-shrink-0 rounded-full hover:scale-110 transition-transform duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center p-1"
            title="Aditya Kumar Rai — Developer"
          >
            <Image
              src="/Aditya Kumar Rai Lotwaala.png"
              alt="Aditya Kumar Rai"
              width={34}
              height={34}
              className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] rounded-full object-cover border-2 border-[#fbbf24] shadow-[0_0_8px_rgba(251,191,36,0.3)]"
            />
          </Link>
          <Link
            href="/developer"
            className="text-white/90 hover:text-[#fbbf24] transition-colors duration-300 text-[11px] sm:text-xs font-semibold tracking-wide py-2"
            title="Visit Developer Page"
          >
            Aditya Kumar Rai
          </Link>
          <span className="text-white/30">|</span>
          <a
            href={DEVELOPER_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aditya Kumar Rai on LinkedIn"
            className="text-white/75 hover:text-[#0A66C2] transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={DEVELOPER_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aditya Kumar Rai Portfolio"
            className="text-white/75 hover:text-[#818cf8] transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-lg hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
