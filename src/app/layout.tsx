import type { Metadata, Viewport } from "next";
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
    "Welcome to the official Veer Game platform. Download the official Veer Games APK (v2.1), login securely, and access Wingo Colour Prediction and Aviator crash games with 256-bit encryption.",
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
    default: "Veer Game Official Site | Play Wingo & Aviator Online",
    template: "%s | Veer Game Official 2026",
  },
  description: siteConfig.description,
  keywords: [
    "Veer Games",
    "Veer Game",
    "Veer Games official website",
    "Veer Game official website",
    "Veer Games login",
    "Veer Game login",
    "Veer Games register",
    "Veer Game register",
    "Veer Games app download",
    "Veer Game app download",
    "Veer Games APK download",
    "Veer Game APK download",
    "Veer Games invite code 69548120159",
    "Veer Game invite code 69548120159",
    "Veer Games referral code",
    "Veer Games wingo",
    "Wingo colour prediction",
    "Veer Games real or fake",
    "Veer Game real or fake",
    "Veer Games minimum deposit 100",
    "Veer Games telegram channel",
    "Veer Game telegram channel",
    "Veer Games trick",
    "Veer Game winning formula",
    "Veer Games login kaise kare",
    "Veer Game login kaise kare",
    "Veer Games me register kaise kare",
    "Veer Games se paise kaise kamaye",
    "Veer Games agent salary",
    "Veer Games withdrawal proof",
    "veergames1.com",
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
    types: {
      "application/rss+xml": "/feed.xml",
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
    title: "Veer Game Official Site | Play Wingo & Aviator Online",
    description:
      "Welcome to the official Veer Game platform. Download the official Veer Games APK (v2.1), login securely, and access Wingo Colour Prediction and Aviator crash games with 256-bit encryption.",
    images: [
      {
        url: "/images/imgs/veergame-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Veer Game Official Site - India's Trusted Online Gaming Platform",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Official Site | Play Wingo & Aviator Online",
    description:
      "Welcome to the official Veer Game platform. Download the official Veer Games APK (v2.1), login securely, and access Wingo Colour Prediction and Aviator crash games with 256-bit encryption.",
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
  category: "gaming",
  classification: "Online Gaming Platform",
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
        <link rel="alternate" type="application/rss+xml" title="Veer Game RSS Feed" href="/feed.xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen">
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
