import Link from "next/link";
import Image from "next/image";
import { SITE_NAME, CATEGORIES, CITIES } from "@/lib/constants";

const DEVELOPER_URL = "https://aditya-k-rai.github.io/P-Website/";

export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f8fafc]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Lotwaala Logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-xl object-contain"
              />
              <span className="text-xl font-extrabold text-[#0f172a]">
                {SITE_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#64748b]">
              India&apos;s #1 wholesaler app. Connecting buyers with verified
              wholesale suppliers across 120+ cities.
            </p>
          </div>

          {/* Markets by Category */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
              Wholesale Markets
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/market/delhi/${cat.slug}`}
                    className="text-sm text-[#64748b] transition-colors hover:text-[#2563eb]"
                  >
                    Wholesale {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets by City */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
              Top Cities
            </h4>
            <ul className="mt-4 space-y-2.5">
              {CITIES.slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/market/${city.slug}/electronics`}
                    className="text-sm text-[#64748b] transition-colors hover:text-[#2563eb]"
                  >
                    Wholesale in {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#94a3b8]">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5">
              {[
                "About",
                "Blog",
                "Careers",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-[#64748b] transition-colors hover:text-[#2563eb]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#e2e8f0] pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#94a3b8]">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-sm text-[#94a3b8]">
            India&apos;s #1 Wholesaler App &amp; Wholesale Marketplace
          </p>
        </div>
      </div>

      {/* Developer credit bar */}
      <div className="bg-[#0a0a0a] py-3">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2.5 px-4">
          <span className="text-xs text-[#6b7280]">Developed by</span>
          <a
            href={DEVELOPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Image
              src="/alr-logo.png"
              alt="Aditya Rai"
              width={24}
              height={24}
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm font-bold text-[#f59e0b]">
              Aditya Rai
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
