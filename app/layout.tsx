import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AnalyticsListener from "@/components/AnalyticsListener";
import ConsentBanner from "@/components/ConsentBanner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ─── Global Metadata ─────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Wholesale Products Online India | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Buy wholesale products online from verified suppliers across 120+ cities in India. Browse bulk inventory on the free Lotwaala app.",
  applicationName: `${SITE_NAME} Wholesale Products App`,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: `Wholesale Products Online India | ${SITE_NAME}`,
    description: "Buy wholesale products online from verified suppliers across 120+ cities in India. Browse bulk inventory on the free Lotwaala app.",
    siteName: SITE_NAME,
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630, alt: `${SITE_NAME} wholesale marketplace app` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Wholesale Products Online India | ${SITE_NAME}`,
    description: "Buy wholesale products online from verified suppliers across 120+ cities in India. Browse bulk inventory on the free Lotwaala app.",
    images: [`${SITE_URL}/og-image.svg`],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: `${SITE_NAME} Wholesale Products App`,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6366f1",
};

// ─── Root Layout ─────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="llms.txt" href="/llms.txt" />
      </head>
      <body
        className="min-h-full flex flex-col font-sans bg-bg text-text"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsListener />
        </Suspense>
        {children}
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}
