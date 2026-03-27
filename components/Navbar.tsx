import Link from "next/link";
import Image from "next/image";
import { Download, Menu } from "lucide-react";
import { SITE_NAME, PLAY_STORE_URL } from "@/lib/constants";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 animate-fade-in-down">
            <Image
              src="/logo.png"
              alt="Lotwaala Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight text-[#0f172a]">
              {SITE_NAME}
            </span>
          </Link>

          {/* Center links */}
          <div className="hidden items-center gap-8 md:flex animate-fade-in-down delay-100">
            <Link
              href="#features"
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#2563eb]"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#2563eb]"
            >
              How It Works
            </Link>
            <Link
              href="/market/delhi/electronics"
              className="text-sm font-medium text-[#475569] transition-colors hover:text-[#2563eb]"
            >
              Markets
            </Link>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 animate-fade-in-down delay-200">
            <Link
              href={PLAY_STORE_URL}
              className="inline-flex items-center gap-2 rounded-xl gradient-primary px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Get App</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#475569] transition-colors hover:bg-[#f1f5f9] md:hidden"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
