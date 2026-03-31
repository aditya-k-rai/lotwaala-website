"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Menu } from "lucide-react";
import { SITE_NAME, PLAY_STORE_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#features", label: "Features", color: "#ff007f" }, // Vivid pink
  { href: "#how-it-works", label: "How It Works", color: "#7928ca" }, // Vibrant purple
  { href: "/market/delhi/electronics", label: "Markets", color: "#00f0ff" }, // Electric cyan
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 overflow-hidden" role="navigation">
      {/* Scroll progress bar — CodePen CSS effect via JS width */}
      <div 
        className="nav-scroll-progress transition-[width] duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      <div 
        className="nav-scroll-line transition-[width] duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Dark glass base */}
      <div className="absolute inset-0 glass-dark z-[-2]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 animate-fade-in-down">
            <Image
              src="/logo.png"
              alt="Lotwaala Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain bg-white"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight text-white">
              {SITE_NAME}
            </span>
          </Link>

          {/* Center links — with CodePen color-fill hover effect */}
          {/* Changed 'gap-0' approach to 'gap-3' for new pill design */}
          <div className="hidden items-center gap-3 md:flex animate-fade-in-down delay-100">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-codepen text-sm font-semibold text-white/70"
                style={{ "--clr": link.color } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 animate-fade-in-down delay-200">
            <Link
              href={PLAY_STORE_URL}
              className="group inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Get</span>
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
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
