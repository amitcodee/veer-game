import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  blogPosts,
  OFFICIAL_REGISTER_URL,
  OFFICIAL_INVITE_CODE,
  OFFICIAL_TELEGRAM_URL,
  BASE_URL,
} from "@/data/blogData";

export const metadata: Metadata = {
  title: "Veer Games & Veer Game Official Blog 2026 | Login, APK Download & Wingo Tricks",
  description:
    "Official Veer Games (Veer Game) strategy hub. Access verified login tutorials, APK v2.1 download, Wingo colour prediction formulas, withdrawal proofs, and invite code 69548120159 agent daily salary guide.",
  keywords: [
    "Veer Games",
    "Veer Game",
    "Veer Games blog",
    "Veer Game blog",
    "Veer Games login",
    "Veer Game login",
    "Veer Games register",
    "Veer Game register",
    "Veer Games APK download",
    "Veer Game APK download",
    "Wingo colour prediction tricks",
    "Veer Games real or fake",
    "Veer Game real or fake",
    "Veer Games invite code 69548120159",
    "Veer Game invite code 69548120159",
    "Veer Games agent salary",
    "Veer Games withdrawal proof",
    "veergames1.com",
  ],
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
  openGraph: {
    title: "Veer Game Official Blog & Platform Guides 2026",
    description:
      "Comprehensive platform guides, APK downloads, winning strategies, and payment verification for Veer Game players in India.",
    url: `${BASE_URL}/blog`,
    type: "website",
    siteName: "Veer Game",
    images: [
      {
        url: "https://picsum.photos/id/1073/1200/630",
        width: 1200,
        height: 630,
        alt: "Veer Game Official Blog and Strategy Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Official Blog & Platform Guides",
    description:
      "All official guides for Veer Game login, registration, APK download, and Wingo strategies.",
    images: ["https://picsum.photos/id/1073/1200/630"],
  },
};

export default function BlogHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Veer Game Official Blog & Strategy Guides",
    url: `${BASE_URL}/blog`,
    description:
      "Official articles, tutorials, and strategy guides for Veer Game players, agents, and community members in India.",
    publisher: {
      "@type": "Organization",
      name: "Veer Game",
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo/logo.png`,
    },
    hasPart: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${BASE_URL}/blog/${post.slug}`,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  return (
    <div className="blog-hub-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="blog-hero-banner">
        <div className="site-shell">
          <div className="blog-hero-content">
            <span className="blog-badge-top">
              <i className="fas fa-shield-halved"></i> Official Platform Knowledge Base
            </span>
            <h1 className="blog-hero-title">
              Veer Game Guides, Strategy &amp; Insights
            </h1>
            <p className="blog-hero-desc">
              Authoritative guides on account registration, Android APK v2.1 setup, Wingo colour prediction formulas, withdrawal proofs, and the Agent Daily Salary system.
            </p>

            {/* Quick Action CTAs */}
            <div className="blog-hero-actions">
              <a
                href={OFFICIAL_REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero btn-hero-register"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-user-plus"></i> Register on Veer Game
              </a>
              <a
                href={OFFICIAL_TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero btn-hero-telegram"
                style={{ textDecoration: "none" }}
              >
                <i className="fab fa-telegram"></i> Join VIP Telegram Signals
              </a>
            </div>

            <div className="blog-hero-chips">
              <span className="blog-chip">
                <i className="fas fa-key"></i> Invite Code: <strong>{OFFICIAL_INVITE_CODE}</strong>
              </span>
              <span className="blog-chip">
                <i className="fas fa-wallet"></i> Min Deposit: <strong>₹100</strong>
              </span>
              <span className="blog-chip">
                <i className="fas fa-bolt"></i> Instant UPI Withdrawals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Grid */}
      <section className="site-shell blog-grid-section">
        <div className="blog-section-header">
          <div>
            <h2 className="section-title">Latest Official Articles &amp; Tutorials</h2>
            <p className="section-desc">
              Browse deep-dive walkthroughs engineered to maximize your winning accuracy and earnings.
            </p>
          </div>
          <div className="blog-total-count">
            <span>{blogPosts.length} Guides Available</span>
          </div>
        </div>

        <div className="blog-cards-grid">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card pro-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-img-link">
                <div className="blog-card-img-wrap">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="blog-card-img"
                  />
                  <span className="blog-card-tag">{post.category}</span>
                </div>
              </Link>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>
                    <i className="far fa-calendar-alt"></i>{" "}
                    {new Date(post.datePublished).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>
                    <i className="far fa-clock"></i> {post.readTime}
                  </span>
                </div>
                <h3 className="blog-card-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <Link href={`/blog/${post.slug}`} className="blog-read-more">
                    <span>Read Complete Guide</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Internal SEO Linking Strip (High-value backlink anchor targets) */}
      <section className="blog-seo-links-strip">
        <div className="site-shell">
          <h3>Explore Veer Game Official Features</h3>
          <div className="blog-seo-links-grid">
            <Link href="/#overview">
              <i className="fas fa-info-circle"></i> Veer Game Overview
            </Link>
            <Link href="/#register">
              <i className="fas fa-user-plus"></i> How to Register (Step-by-Step)
            </Link>
            <Link href="/#login">
              <i className="fas fa-sign-in-alt"></i> Login Portal &amp; 2FA Guide
            </Link>
            <Link href="/#apk">
              <i className="fab fa-android"></i> Download APK v2.1 (12.4 MB)
            </Link>
            <Link href="/#wingo">
              <i className="fas fa-dice"></i> Wingo Colour Prediction Rules
            </Link>
            <Link href="/#deposit">
              <i className="fas fa-money-bill-wave"></i> ₹100 Minimum UPI Deposit
            </Link>
            <Link href="/#withdraw">
              <i className="fas fa-university"></i> Instant Bank Withdrawals
            </Link>
            <Link href="/#referral">
              <i className="fas fa-users"></i> Agent Daily Salary &amp; Invite Code 69548120159
            </Link>
            <Link href="/#telegram">
              <i className="fab fa-telegram"></i> Official VIP Telegram Predictions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
