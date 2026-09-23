import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game Wingo Guide 2026 | Colour Selection Game Features & How to Play",
  description:
    "Complete guide to Wingo colour selection game on Veer Game app - learn about game mechanics, round types (30s/1m/3m/5m), and how the colour-based entertainment game works.",
  keywords: [
    "Veer Game Wingo",
    "Wingo game guide",
    "Wingo game information",
    "Veer Game colour game",
    "Wingo colour game guide",
    "Veer Game Wingo guide",
    "how to play Wingo",
    "Wingo game tutorial",
    "Veer Game Wingo 2026",
    "Wingo game interface",
    "Wingo game mechanics",
    "colour selection game",
    "entertainment app game",
  ],
  alternates: {
    canonical: "/wingo",
  },
  openGraph: {
    title: "Veer Game Wingo Guide 2026 | Colour Selection Game Information",
    description:
      "Learn about Wingo game on Veer Game - game mechanics, round types, and how the colour-based entertainment game works.",
    url: "https://veergames1.com/wingo",
    siteName: "Veer Game Guide",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veergame-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Veer Game Wingo Game Interface Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Wingo Guide 2026 | Colour Selection Game",
    description:
      "Complete guide to Wingo game on Veer Game - game features, round types, and interface information.",
    images: ["https://veergames1.com/images/imgs/veergame-1024x683.jpeg"],
  },
};

export default function WingoPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Veer Game Wingo",
    description:
      "Colour selection entertainment game with multiple round intervals (30s, 1m, 3m, 5m) and interactive gameplay.",
    genre: ["Entertainment", "Casual Game"],
    operatingSystem: "Android, iOS, Web",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "Veer Game Guide",
      url: BASE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wingo Colour Prediction",
        item: `${BASE_URL}/wingo`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Wingo work on Veer Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wingo is a colour selection game where users choose from Green, Red, or Violet options. Each round displays a number (0-9) with corresponding colours.",
        },
      },
      {
        "@type": "Question",
        name: "What are the different Wingo round types?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wingo offers multiple round intervals: 30 seconds, 1 minute, 3 minutes, and 5 minutes. Each interval provides different gameplay pacing.",
        },
      },
      {
        "@type": "Question",
        name: "How do I access Wingo on Veer Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wingo is available within the Veer Game app. Create an account using invitation code 69548120159 to access all game features.",
        },
      },
    ],
  };

  return (
    <div className="download-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="site-shell" style={{ paddingTop: "20px" }}>
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Wingo Colour Prediction", href: "/wingo" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="download-hero-section">
        <div className="site-shell">
          <div className="download-hero-grid">
            <div className="download-hero-info">
              <span className="download-badge">
                <i className="fas fa-bullseye"></i> Flagship Colour Prediction Game
              </span>
              <h1 className="download-title">
                Veer Game Wingo <span className="highlight-text">(Colour Prediction)</span>
              </h1>
              <p className="download-desc">
                Play India&apos;s most popular real-time colour prediction game. Predict <strong>Green, Red, or Violet</strong> across
                30-second to 5-minute draws. Verified <strong>98.2% payout rate</strong>, Provably Fair SHA-256 draws, and minimum ₹10 entries.
              </p>

              <div className="download-cta-group">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-primary"
                >
                  <i className="fas fa-play"></i>
                  <div className="btn-text-block">
                    <span className="btn-main-label">Play Wingo Online Now</span>
                    <span className="btn-sub-label">Instant ₹100 UPI Recharge · Code: 69548120159</span>
                  </div>
                </a>
                <Link href="/download" className="download-btn-secondary">
                  <i className="fab fa-android"></i>
                  <span>Download 12MB APK</span>
                </Link>
              </div>

              <div className="download-trust-row">
                <span><i className="fas fa-clock"></i> 30s · 1m · 3m · 5m</span>
                <span><i className="fas fa-shield-halved"></i> Provably Fair SHA-256</span>
                <span><i className="fas fa-coins"></i> Min Bet: ₹10</span>
              </div>
            </div>

            <div className="download-hero-visual">
              <div className="download-mockup-card">
                <Image
                  src="/images/imgs/veergame-1024x683.jpeg"
                  alt="Veer Game Wingo Colour Prediction Game Interface"
                  width={1024}
                  height={683}
                  priority
                  className="download-mockup-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payout & Multipliers Table */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-calculator"></i> Payout Structure
          </span>
          <h2 className="vg-section-title">Wingo Multipliers &amp; Payout Odds</h2>
          <p className="vg-section-desc">
            Complete mathematical breakdown of winning multipliers across all prediction options.
          </p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Prediction Selection</th>
                <th>Qualifying Drawn Numbers</th>
                <th>Payout Multiplier</th>
                <th>Example (₹100 Stake)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: "#059669" }}>Green</strong></td>
                <td>1, 3, 7, 9</td>
                <td><strong>2.0x</strong></td>
                <td>₹200 Net Return</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#ef4444" }}>Red</strong></td>
                <td>2, 4, 6, 8</td>
                <td><strong>2.0x</strong></td>
                <td>₹200 Net Return</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#8b5cf6" }}>Violet Bonus</strong></td>
                <td>0 and 5</td>
                <td><strong style={{ color: "#8b5cf6" }}>4.5x</strong></td>
                <td>₹450 Net Return</td>
              </tr>
              <tr>
                <td><strong>Single Number (0-9)</strong></td>
                <td>Exact Single Digit Match</td>
                <td><strong style={{ color: "#f59e0b" }}>9.0x (Mega Multiplier)</strong></td>
                <td>₹900 Net Return</td>
              </tr>
              <tr>
                <td><strong>Big (5, 6, 7, 8, 9)</strong></td>
                <td>Numbers 5 through 9</td>
                <td><strong>2.0x</strong></td>
                <td>₹200 Net Return</td>
              </tr>
              <tr>
                <td><strong>Small (0, 1, 2, 3, 4)</strong></td>
                <td>Numbers 0 through 4</td>
                <td><strong>2.0x</strong></td>
                <td>₹200 Net Return</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3X Strategy Breakdown */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-chart-line"></i> Winning Strategy
          </span>
          <h2 className="vg-section-title">The 3X Bankroll Investment Plan</h2>
          <p className="vg-section-desc">
            How professional players protect capital and achieve consistent daily returns.
          </p>
        </div>

        <div className="install-steps-grid">
          <div className="install-step-card">
            <div className="step-number">Level 1</div>
            <h3>Base Entry: ₹10</h3>
            <p>
              Place base stake of ₹10 on high-confidence trend (e.g. Red streak). If won, exit with +₹10 profit and reset to Level 1.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">Level 2</div>
            <h3>Recovery: ₹30</h3>
            <p>
              If Level 1 misses, triple stake to ₹30 on the next confirmed trend. Winning pays ₹60, recovering ₹10 + ₹30 with +₹20 profit.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">Level 3</div>
            <h3>Recovery: ₹90</h3>
            <p>
              If Level 2 misses, enter ₹90. Winning pays ₹180, recovering all prior ₹40 expenses with +₹50 net profit.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">Level 4</div>
            <h3>Final Guard: ₹270</h3>
            <p>
              The 4th level covers 94% probabilistic cycle recovery. Always set a strict stop-loss limit to protect your base wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Cross-Links */}
      <section className="site-shell" style={{ paddingBottom: "60px" }}>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-book-open"></i></div>
              <span className="why-badge">TUTORIAL</span>
            </div>
            <h3>Complete Wingo Tricks Guide</h3>
            <p>
              Read our in-depth 2,400-word analysis covering zigzag alternating streaks, period parity charts, and bankroll discipline.
            </p>
            <Link
              href="/blog/wingo-colour-prediction-tricks-veer-game"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Read Full Wingo Guide &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fab fa-telegram"></i></div>
              <span className="why-badge">SIGNALS</span>
            </div>
            <h3>Official Telegram Channel</h3>
            <p>
              Join over 50,000 active members receiving 90%+ accurate Wingo prediction signals and exclusive daily promo gift codes.
            </p>
            <a
              href="https://t.me/+SQ2smTBoOV82ZjY9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Join Telegram Signals &rarr;
            </a>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-plane-departure"></i></div>
              <span className="why-badge">ALTERNATIVE</span>
            </div>
            <h3>Aviator Crash Game</h3>
            <p>
              Looking for multiplier flight thrill? Try Aviator crash game with dual auto-cashout bets and multipliers exceeding 100x.
            </p>
            <Link
              href="/aviator"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Explore Aviator Game &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>Ready to Predict &amp; Win on Wingo?</h2>
          <p>
            Register with code <strong>69548120159</strong> to claim your ₹100 welcome bonus and start playing in 60 seconds!
          </p>
          <div className="cta-actions">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register btn-lg"
            >
              <i className="fas fa-play"></i> Play Wingo Now
            </a>
            <Link href="/download" className="btn-hero btn-hero-primary btn-lg">
              <i className="fab fa-android"></i> Download Android APK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
