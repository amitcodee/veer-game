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
    default: "Veer Game - Official 2026 | Login, Register, Download APK & Win Real Money",
    template: "%s | Veer Game Official",
  },
  description: siteConfig.description,
  keywords: [
    "Veer Game",
    "Veer Games",
    "VeerGame",
    "Veer Game official",
    "Veer Game official website",
    "Veer Game official site",
    "Veer Game 2026",
    "Veer Game login",
    "Veer Game register",
    "Veer Game sign up",
    "Veer Game app",
    "Veer Game app download",
    "Veer Game APK",
    "Veer Game APK download",
    "Veer Game download",
    "Veer Game download APK",
    "download Veer Game",
    "Veer Game invite code",
    "Veer Game invite code 69548120159",
    "Veer Game referral code",
    "Veer Game bonus code",
    "Veer Game promo code",
    "Veer Game Wingo",
    "Wingo colour prediction",
    "Wingo game",
    "Veer Game Aviator",
    "Aviator game",
    "Veer Game real or fake",
    "is Veer Game real",
    "Veer Game withdrawal",
    "Veer Game withdrawal proof",
    "Veer Game minimum deposit",
    "Veer Game deposit",
    "Veer Game UPI",
    "Veer Game telegram",
    "Veer Game telegram channel",
    "Veer Game trick",
    "Veer Game tricks",
    "Veer Game winning trick",
    "Veer Game formula",
    "Veer Game prediction",
    "Veer Game login kaise kare",
    "Veer Game me register kaise kare",
    "Veer Game se paise kaise kamaye",
    "Veer Game agent",
    "Veer Game agent salary",
    "Veer Game referral",
    "Veer Game gift code",
    "Veer Game gift code today",
    "veergames1.com",
    "veergame",
    "veer games",
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
    title: "Veer Game - Official 2026 | Login, APK Download & Win Real Money",
    description:
      "Veer Game official website 2026. Download Veer Game APK v2.1, login/register with invite code 69548120159, play Wingo Colour Prediction & Aviator, and withdraw winnings via UPI in 8-15 minutes.",
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
    title: "Veer Game - Official 2026 | Login, APK Download & Win Real Money",
    description:
      "Veer Game official website 2026. Download APK v2.1, login with code 69548120159, play Wingo & Aviator, withdraw via UPI in 8-15 min. ₹100 min deposit.",
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
