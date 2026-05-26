"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { SITE_NAME, PLAY_STORE_URL } from "@/lib/constants";
import { trackAppDownload, trackNavClick } from "@/lib/analytics-events";

const NAV_LINKS = [
  { href: "/#features", label: "Features", color: "#ff007f" }, // Vivid pink
  { href: "/#how-it-works", label: "How It Works", color: "#7928ca" }, // Vibrant purple
  { href: "/#markets", label: "Markets", color: "#00f0ff" }, // Electric cyan
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label?: string
  ) => {
    setIsMobileMenuOpen(false);
    if (label) trackNavClick(label, href);

    const hash = href.startsWith("/#") ? href.replace("/", "") : href;

    if (hash.startsWith("#") && window.location.pathname === "/") {
      e.preventDefault();
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", hash);
        }
      }, 50);
    }
  };

  return (
    <nav className="sticky top-0 z-50 overflow-visible" role="navigation">
      {/* Scroll progress bar */}
      <div
        className="nav-scroll-progress transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div
        className="nav-scroll-line transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Solid dark-navy surface to match reference */}
      <div className="absolute inset-0 bg-[#1a2238] border-b border-white/10 z-[-2]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 animate-fade-in-down"
            onClick={(e) => handleNavClick(e, "/", "Logo")}
          >
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

          {/* Desktop center links */}
          <div className="hidden items-center gap-3 md:flex animate-fade-in-down delay-100">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.label)}
                className="nav-link-codepen text-sm font-semibold text-white/70"
                style={{ "--clr": link.color } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 animate-fade-in-down delay-200">
            <Link
              href={PLAY_STORE_URL}
              onClick={() => trackAppDownload("play_store", "navbar")}
              className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full gradient-primary px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">Download App</span>
              <span className="sm:hidden">Get App</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 animate-scale-in" />
              ) : (
                <Menu className="h-6 w-6 animate-scale-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[64px] left-0 right-0 z-40 bg-[#1a2238] border-b border-white/5 shadow-2xl md:hidden animate-fade-in-down origin-top">
          <div className="flex flex-col gap-4 p-6 pb-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.label)}
                className="text-lg font-bold text-white/80 p-3 rounded-2xl border border-white/5 transition-all w-full flex items-center justify-between"
                style={{ backgroundColor: `${link.color}15`, borderLeft: `4px solid ${link.color}` } as React.CSSProperties}
              >
                {link.label}
                <span style={{ color: link.color }}>&rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
