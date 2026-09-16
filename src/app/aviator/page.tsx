import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game Aviator 2026 | Crash Game Tricks, Signals & Win 100x",
  description:
    "Play Aviator crash game on Veer Game - proven 2-bet cashout strategy for consistent wins. Get Telegram prediction signals, auto-cashout at 1.5x-3x, win up to 100x multipliers. ₹100 deposit, fast withdrawals.",
  keywords: [
    "Veer Game Aviator",
    "Aviator game",
    "Aviator crash game",
    "Aviator tricks",
    "Aviator prediction",
    "Aviator signals",
    "Veer Game Aviator tricks",
    "Veer Game crash game",
    "Aviator predictor",
    "Aviator predictor Veer Game",
    "Aviator formula",
    "Aviator hack",
    "how to win Aviator",
    "Aviator cashout strategy",
    "Aviator telegram signals",
    "Veer Game Aviator formula 2026",
    "how to play Aviator",
    "Aviator game download",
  ],
  alternates: {
    canonical: "/aviator",
  },
  openGraph: {
    title: "Veer Game Aviator 2026 | Crash Game Formula, Signals & 100x Multipliers",
    description:
      "Master Veer Game Aviator with proven 2-bet auto-cashout formulas, Provably Fair SHA-256 integrity, sub-20ms APK latency, and Telegram signals.",
    url: "https://veergames1.com/aviator",
    siteName: "Veer Game",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veer-game-app-1-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Veer Game Official Aviator Crash Game Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Aviator 2026 | Crash Strategy & Signals",
    description:
      "Play Aviator crash on Veer Game with 2-bet cashout system and instant ₹100 UPI deposits.",
    images: ["https://veergames1.com/images/imgs/veer-game-app-1-1024x683.jpeg"],
  },
};

export default function AviatorPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Veer Game Aviator Crash Game",
    description:
      "Multiplayer crash game with real-time exponential payout curves, Provably Fair SHA-256 cryptographic verification, and dual bet auto-cashout controls.",
    genre: ["Crash Game", "Multiplier", "Strategy"],
    operatingSystem: "Android, iOS, Web",
    offers: {
      "@type": "Offer",
      price: "10",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "174000",
      bestRating: "5",
      worstRating: "1",
    },
    publisher: {
      "@type": "Organization",
      name: "Veer Game Official",
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
        name: "Aviator Crash Game",
        item: `${BASE_URL}/aviator`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the Aviator Crash Game work on Veer Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An airplane takes off at the start of each round with an escalating payout multiplier (starting at 1.00x). Players place bets and must click 'Cash Out' before the plane flies away to secure their multiplier.",
        },
      },
      {
        "@type": "Question",
        name: "What is the 2-bet cashout formula in Aviator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2-bet formula uses both betting panels simultaneously: allocate 65% of stake on Bet 1 with Auto-Cashout at 1.45x-1.50x to cover total round risk. Allocate remaining 35% on Bet 2 targeting 3.0x to 6.0x for risk-free profit.",
        },
      },
      {
        "@type": "Question",
        name: "Is Veer Game Aviator Provably Fair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Veer Game uses cryptographic SHA-256 Provably Fair technology combining server seeds with client seeds before round start, making outcome tampering mathematically impossible.",
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
            { label: "Aviator Crash Game", href: "/aviator" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="download-hero-section">
        <div className="site-shell">
          <div className="download-hero-grid">
            <div className="download-hero-info">
              <span className="download-badge">
                <i className="fas fa-paper-plane"></i> Live Multiplayer Crash Game
              </span>
              <h1 className="download-title">
                Veer Game Aviator <span className="highlight-text">(Crash Game 2026)</span>
              </h1>
              <p className="download-desc">
                Experience heart-pounding flight multipliers up to <strong>100x+</strong>. Master the <strong>2-bet cashout strategy</strong>,
                inspect <strong>Provably Fair SHA-256 seeds</strong>, and take advantage of <strong>sub-20ms APK latency</strong> for instantaneous cashouts.
              </p>

              <div className="download-cta-group">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-primary"
                >
                  <i className="fas fa-plane-departure"></i>
                  <div className="btn-text-block">
                    <span className="btn-main-label">Play Aviator Online Now</span>
                    <span className="btn-sub-label">Instant ₹100 UPI Recharge · Code: 69548120159</span>
                  </div>
                </a>
                <Link href="/download" className="download-btn-secondary">
                  <i className="fab fa-android"></i>
                  <span>Download 12MB APK</span>
                </Link>
              </div>

              <div className="download-trust-row">
                <span><i className="fas fa-gauge-high"></i> Sub-20ms Execution</span>
                <span><i className="fas fa-shield-halved"></i> Provably Fair SHA-256</span>
                <span><i className="fas fa-arrow-trend-up"></i> Multipliers Up to 100x+</span>
              </div>
            </div>

            <div className="download-hero-visual">
              <div className="download-mockup-card">
                <Image
                  src="/images/imgs/veer-game-app-1-1024x683.jpeg"
                  alt="Veer Game Aviator Crash Game Cashout Screen"
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

      {/* Multiplier Spectrum */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-chart-line"></i> Flight Probability
          </span>
          <h2 className="vg-section-title">Aviator Multiplier Frequency &amp; Risk Spectrum</h2>
          <p className="vg-section-desc">
            Understand how flight multipliers cluster across sessions to optimize your cashout exit timing.
          </p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Multiplier Tier</th>
                <th>Flight Multiplier Range</th>
                <th>Statistical Frequency</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style={{ color: "#3b82f6" }}>Blue Waves</strong></td>
                <td>1.00x to 1.99x</td>
                <td>~45% of rounds</td>
                <td>Set Bet 1 auto-cashout at 1.45x-1.50x to cover base capital.</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#8b5cf6" }}>Purple Surges</strong></td>
                <td>2.00x to 9.99x</td>
                <td>~38% of rounds</td>
                <td>Ideal target window for Bet 2 cashout (3x to 5x profit).</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#ec4899" }}>Pink Highs</strong></td>
                <td>10.00x to 49.99x</td>
                <td>~14% of rounds</td>
                <td>Hold small fractional stake following 3+ blue rounds.</td>
              </tr>
              <tr>
                <td><strong style={{ color: "#f59e0b" }}>Gold Mega Spikes</strong></td>
                <td>50.00x to 100x+</td>
                <td>~3% of rounds</td>
                <td>High volatility outlier. Avoid chasing without bankroll reserve.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2-Bet Hedging System */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-sliders"></i> Master Strategy
          </span>
          <h2 className="vg-section-title">The 2-Bet Cashout Formula (Safe Multiplier Method)</h2>
          <p className="vg-section-desc">
            How seasoned Aviator players eliminate round risk and lock in steady profit curves.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon" style={{ background: "rgba(5, 150, 105, 0.15)", color: "#059669" }}>
                <i className="fas fa-shield"></i>
              </div>
              <span className="why-badge">BET 1: CAPITAL COVER</span>
            </div>
            <h3>65% Stake at 1.50x Auto-Cashout</h3>
            <p>
              Allocate 65% of your round budget to Bet 1. Configure <strong>Auto-Cashout at 1.50x</strong>. When this triggers,
              it returns 0.65 × 1.50 = 0.975x + base profit, ensuring zero net loss even if Bet 2 fails!
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon" style={{ background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }}>
                <i className="fas fa-rocket"></i>
              </div>
              <span className="why-badge">BET 2: PROFIT MULTIPLIER</span>
            </div>
            <h3>35% Stake at 3x–6x Exit</h3>
            <p>
              Allocate the remaining 35% stake to Bet 2. Because Bet 1 covers your round stake, this second entry is
              <strong>100% risk-free upside</strong>. Cash out between 3.0x and 6.0x for pure profit!
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon" style={{ background: "rgba(59, 130, 246, 0.15)", color: "#3b82f6" }}>
                <i className="fas fa-fingerprint"></i>
              </div>
              <span className="why-badge">SHA-256 FAIRNESS</span>
            </div>
            <h3>Cryptographic Seed Verification</h3>
            <p>
              Inspect the SHA-256 hash in your round history. Outcome formulas are pre-generated before flight starts,
              guaranteeing zero server manipulation during live ascent.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Link Tutorials */}
      <section className="site-shell" style={{ paddingBottom: "60px" }}>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-book-open"></i></div>
              <span className="why-badge">DEEP DIVE</span>
            </div>
            <h3>Full Aviator Tricks &amp; Signals Guide</h3>
            <p>
              Read our comprehensive 1,580-word strategic manual detailing multiplier waves, bankroll stop-loss rules, and signal analysis.
            </p>
            <Link
              href="/blog/veer-game-aviator-game-tricks-signals-strategy"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Read Full Aviator Guide &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fab fa-telegram"></i></div>
              <span className="why-badge">LIVE SIGNALS</span>
            </div>
            <h3>Telegram VIP Flight Alerts</h3>
            <p>
              Join official analysts sharing round volatility timing windows and exclusive promo drops.
            </p>
            <a
              href="https://t.me/+SQ2smTBoOV82ZjY9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Join Aviator Telegram Alerts &rarr;
            </a>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-bullseye"></i></div>
              <span className="why-badge">POPULAR</span>
            </div>
            <h3>Wingo Colour Prediction</h3>
            <p>
              Prefer fixed-time prediction rounds? Explore Wingo 30s and 1m with 2x and 4.5x payouts.
            </p>
            <Link
              href="/wingo"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Explore Wingo Game &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>Ready to Launch Your Aviator Flight?</h2>
          <p>
            Register with code <strong>69548120159</strong> to claim your ₹100 welcome bonus and take flight today!
          </p>
          <div className="cta-actions">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register btn-lg"
            >
              <i className="fas fa-play"></i> Play Aviator Online
            </a>
            <Link href="/download" className="btn-hero btn-hero-primary btn-lg">
              <i className="fab fa-android"></i> Download APK (12.4 MB)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
