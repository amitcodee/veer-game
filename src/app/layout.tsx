import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ThemeProvider from "@/components/shared/ThemeProvider";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ParticlesCanvas from "@/components/shared/ParticlesCanvas";
import BackToTop from "@/components/shared/BackToTop";
import JsonLd from "@/components/shared/JsonLd";
import "./globals.css";

const siteConfig = {
  name: "Veer Game",
  url: "https://veergames1.com",
  description:
    "Veer Game Guide - Complete information about the Veer Games app including features, game types, download instructions, and user reviews. Learn about Wingo, Aviator, and other entertainment games.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff5d43" },
    { media: "(prefers-color-scheme: dark)", color: "#ff5d43" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Veer Game Guide 2026 | App Features, Download & Complete Review",
    template: "%s | Veer Game Guide",
  },
  description: siteConfig.description,
  keywords: [
    "Veer Game",
    "Veer Games",
    "VeerGame",
    "Veer Game guide",
    "Veer Game review",
    "Veer Game information",
    "Veer Game 2026",
    "Veer Game app",
    "Veer Game app features",
    "Veer Game APK",
    "Veer Game APK download",
    "Veer Game download",
    "download Veer Game",
    "Veer Game Wingo",
    "Wingo game guide",
    "Wingo game information",
    "Veer Game Aviator",
    "Aviator game guide",
    "Veer Game review",
    "is Veer Game legit",
    "Veer Game app review",
    "Veer Game features",
    "Veer Game games list",
    "Veer Game telegram",
    "Veer Game telegram channel",
    "Veer Game guide",
    "Veer Game tutorial",
    "Veer Game how to use",
    "Veer Game app guide",
    "veergames1.com",
    "veergame",
    "veer games",
    "entertainment app India",
    "gaming app review",
    "mobile gaming guide",
  ],
  authors: [{ name: "Veer Game Official", url: siteConfig.url }],
  creator: "Veer Game",
  publisher: "Veer Game",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  verification: {
    google: "google-site-verification-veergame-official",
    yandex: "yandex-verification-veergame",
    yahoo: "yahoo-verification-veergame",
    other: {
      "msvalidate.01": "9F8B417C8D2A4E5F93B1670C5284E912",
    },
  },
  other: {
    rating: "general",
    distribution: "global",
    "revisit-after": "1 days",
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "20.5937;78.9629",
    ICBM: "20.5937, 78.9629",
    HandheldFriendly: "True",
    MobileOptimized: "320",
    coverage: "Worldwide",
    target: "all",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Veer Game Guide 2026 | Complete App Review & Features",
    description:
      "Comprehensive guide to Veer Game app - learn about game features, download instructions, app interface, and user experiences. Informational resource for entertainment gaming.",
    images: [
      {
        url: "/images/imgs/veergame-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Veer Game App Guide - Entertainment Gaming Information",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Guide 2026 | Complete App Review & Features",
    description:
      "Comprehensive guide to Veer Game app - game features, download info, interface overview. Your complete resource for entertainment gaming information.",
    images: ["/images/imgs/veergame-1024x683.jpeg"],
    creator: "@veergames",
    site: "@veergames",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  category: "entertainment",
  classification: "Entertainment App Guide & Review Website",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://t.me" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18458166613"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18458166613');
          `}
        </Script>
        <JsonLd />
        <ThemeProvider>
          <ParticlesCanvas />
          <Header />
          <main className="relative z-[1]">{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
