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
  url: "http://veergames1.com",
  description: "Veer Game - India's trusted online gaming platform. Play Wingo, K3, 5D, Aviator, Slots, Plinko, Limbo & Poker. Register now and get up to Rs.100 welcome bonus!",
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
    default: "Veer Game - Login & Register | Best Colour Prediction App in India 2026",
    template: "%s | Veer Game - India's Trusted Gaming Platform",
  },
  description: "Veer Game - India's most trusted colour prediction and online gaming platform. Play Wingo, K3, 5D, Aviator, Slots, Plinko, Limbo & Poker. Download Veer Game APK, login & win real rewards. Get up to Rs.100 welcome bonus!",
  keywords: [
    "Veer Game",
    "Veer Game login",
    "Veer Game download",
    "Veer Game app",
    "Veer Game register",
    "Wingo colour prediction",
    "colour prediction app India",
    "best colour prediction app in India",
    "K3 game",
    "5D lottery game",
    "Aviator game India",
    "online gaming India",
    "Veer Game APK download",
    "Veer Game invite code",
    "Veer Game refer and earn",
  ],
  authors: [{ name: "Veer Game", url: siteConfig.url }],
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
      "hi-IN": "/hi",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Veer Game - Best Colour Prediction & Online Gaming Platform in India",
    description: "Play Wingo, K3, 5D, Aviator & more on Veer Game. Instant withdrawals, 24/7 support. Download APK & get up to Rs.100 bonus!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veer Game - India's Trusted Online Gaming Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game - Best Colour Prediction App in India 2026",
    description: "India's most trusted gaming platform. Play Wingo, K3, 5D, Aviator & more. Download now & win real rewards!",
    images: ["/twitter-image.png"],
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
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
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
