import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game Referral Program Guide | Invitation Code 69548120159",
  description:
    "Learn about Veer Game referral program and invitation code 69548120159. Information about the app's referral features and invite system.",
  keywords: [
    "Veer Game referral code",
    "Veer Game invite code 69548120159",
    "Veer Game referral program",
    "Veer Game invitation code",
    "Veer Games referral",
    "Veer Game invite friends",
    "veergames1.com referral",
  ],
  alternates: {
    canonical: "/referral",
  },
  openGraph: {
    title: "Veer Game Referral Program Guide | Invitation Code 69548120159",
    description:
      "Information about Veer Game referral program and how to use invitation code 69548120159.",
    url: "https://veergames1.com/referral",
    siteName: "Veer Game Guide",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veer-game-salary-1024x936.jpeg",
        width: 1024,
        height: 936,
        alt: "Veer Game Referral Program Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Referral Program Guide | Invitation Code 69548120159",
    description:
      "Learn about Veer Game referral program and invitation code 69548120159.",
    images: ["https://veergames1.com/images/imgs/veer-game-salary-1024x936.jpeg"],
  },
};

export default function ReferralPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/referral#webpage`,
    name: "Veer Game Referral Program Guide",
    description:
      "Information about Veer Game referral program and invitation code 69548120159.",
    url: `${BASE_URL}/referral`,
    inLanguage: ["en-IN", "hi-IN"],
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
        name: "Referral & Agent Salary",
        item: `${BASE_URL}/referral`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Veer Game invitation code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Veer Game invitation code is 69548120159. Use this code when creating your account to access app features.",
        },
      },
      {
        "@type": "Question",
        name: "How much daily salary can a Veer Game agent earn?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veer Game agents earn fixed daily salaries ranging from ₹600 up to ₹50,000 per day based on their subordinate network's active player count and daily turnover.",
        },
      },
      {
        "@type": "Question",
        name: "Do agent commissions have wagering turnover requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Agency commission and daily salary earnings have 0% wagering requirements and can be withdrawn directly to your bank account or UPI at any time.",
        },
      },
      {
        "@type": "Question",
        name: "When is agent salary credited?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Daily fixed salaries are automatically calculated and credited every midnight at 00:00 IST directly into your agent commission wallet.",
        },
      },
    ],
  };

  return (
    <div className="download-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
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
            { label: "Referral & Agent Salary", href: "/referral" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="download-hero-section">
        <div className="site-shell">
          <div className="download-hero-grid">
            <div className="download-hero-info">
              <span className="download-badge">
                <i className="fas fa-money-bill-trend-up"></i> Official Agent Program 2026
              </span>
              <h1 className="download-title">
                Veer Game Referral Code &amp; <span className="highlight-text">Agent Daily Salary</span>
              </h1>
              <p className="download-desc">
                Earn passive daily income with Veer Game&apos;s industry-leading <strong>6-tier turnover commission</strong> and
                automated <strong>fixed daily salaries up to ₹50,000/day</strong>. Zero wagering lock on affiliate withdrawals!
              </p>

              {/* Code Box */}
              <div className="form-invite-banner" style={{ maxWidth: "420px", marginBottom: "24px" }}>
                <div className="invite-tag">
                  <i className="fas fa-badge-check"></i> Official Invitation Code
                </div>
                <div className="invite-code-display">
                  <code style={{ fontSize: "1.4rem" }}>69548120159</code>
                  <span className="invite-perk">VIP Fast Payouts</span>
                </div>
              </div>

              <div className="download-cta-group">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-primary"
                >
                  <i className="fas fa-user-plus"></i>
                  <div className="btn-text-block">
                    <span className="btn-main-label">Join Agent Program</span>
                    <span className="btn-sub-label">Free Registration · Code: 69548120159</span>
                  </div>
                </a>
                <a
                  href="https://t.me/+SQ2smTBoOV82ZjY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-secondary"
                >
                  <i className="fab fa-telegram"></i>
                  <span>Telegram Agent Desk</span>
                </a>
              </div>

              <div className="download-trust-row">
                <span><i className="fas fa-calendar-check"></i> Midnight Settlement (00:00)</span>
                <span><i className="fas fa-unlock"></i> 0% Wagering Lock</span>
                <span><i className="fas fa-wallet"></i> Instant UPI Cashouts</span>
              </div>
            </div>

            <div className="download-hero-visual">
              <div className="download-mockup-card">
                <Image
                  src="/images/imgs/veer-game-salary-1024x936.jpeg"
                  alt="Veer Game Agent Daily Salary Tiers and Turnover Rewards"
                  width={1024}
                  height={936}
                  priority
                  className="download-mockup-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Salary Table */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-table-list"></i> Salary Tiers
          </span>
          <h2 className="vg-section-title">Veer Game Fixed Daily Salary Structure</h2>
          <p className="vg-section-desc">
            Fixed daily salaries credited automatically at 00:00 IST every night based on active subordinate team members.
          </p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Agent Level</th>
                <th>Daily Active Team Members</th>
                <th>Minimum Team Daily Turnover</th>
                <th>Fixed Daily Salary</th>
                <th>Estimated Monthly Earning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tier 1 Agent</strong></td>
                <td>10 - 20 Active Players</td>
                <td>₹20,000</td>
                <td><strong style={{ color: "#059669" }}>₹600 / day</strong></td>
                <td>₹18,000 / month</td>
              </tr>
              <tr>
                <td><strong>Tier 2 Agent</strong></td>
                <td>21 - 50 Active Players</td>
                <td>₹50,000</td>
                <td><strong style={{ color: "#059669" }}>₹1,500 / day</strong></td>
                <td>₹45,000 / month</td>
              </tr>
              <tr>
                <td><strong>Tier 3 Agent</strong></td>
                <td>51 - 100 Active Players</td>
                <td>₹150,000</td>
                <td><strong style={{ color: "#059669" }}>₹3,500 / day</strong></td>
                <td>₹105,000 / month</td>
              </tr>
              <tr>
                <td><strong>Tier 4 Agent</strong></td>
                <td>101 - 250 Active Players</td>
                <td>₹400,000</td>
                <td><strong style={{ color: "#059669" }}>₹8,500 / day</strong></td>
                <td>₹255,000 / month</td>
              </tr>
              <tr>
                <td><strong>Tier 5 Agent</strong></td>
                <td>251 - 500 Active Players</td>
                <td>₹1,000,000</td>
                <td><strong style={{ color: "#059669" }}>₹20,000 / day</strong></td>
                <td>₹600,000 / month</td>
              </tr>
              <tr>
                <td><strong>VIP Master Agent</strong></td>
                <td>501+ Active Players</td>
                <td>₹2,500,000+</td>
                <td><strong style={{ color: "#f59e0b" }}>₹50,000 / day</strong></td>
                <td>₹1,500,000+ / month</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6-Tier Commission Structure */}
      <section className="site-shell" style={{ padding: "30px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-sitemap"></i> Subordinate Network
          </span>
          <h2 className="vg-section-title">6-Tier Lifetime Betting Turnover Commission</h2>
          <p className="vg-section-desc">
            Earn perpetual turnover percentages on every single bet placed by your network, win or lose!
          </p>
        </div>

        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon" style={{ color: "#ff5d43" }}>L1</div>
            <div className="spec-meta">
              <span className="spec-label">Direct Referrals (Tier 1)</span>
              <span className="spec-value" style={{ color: "#ff5d43" }}>0.6% Lifetime Turnover</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon" style={{ color: "#f59e0b" }}>L2</div>
            <div className="spec-meta">
              <span className="spec-label">Subordinate Team (Tier 2)</span>
              <span className="spec-value">0.3% Lifetime Turnover</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon">L3</div>
            <div className="spec-meta">
              <span className="spec-label">Extended Network (Tier 3)</span>
              <span className="spec-value">0.15% Lifetime Turnover</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon">L4</div>
            <div className="spec-meta">
              <span className="spec-label">Network Tier 4</span>
              <span className="spec-value">0.10% Lifetime Turnover</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon">L5</div>
            <div className="spec-meta">
              <span className="spec-label">Network Tier 5</span>
              <span className="spec-value">0.05% Lifetime Turnover</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon">L6</div>
            <div className="spec-meta">
              <span className="spec-label">Network Tier 6</span>
              <span className="spec-value">0.05% Lifetime Turnover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Cross-Links */}
      <section className="site-shell" style={{ paddingBottom: "60px" }}>
        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-book-open"></i></div>
              <span className="why-badge">AGENT TUTORIAL</span>
            </div>
            <h3>Detailed Agent Promotion Guide</h3>
            <p>
              Read our full blog guide on how to build high-converting Telegram channels, YouTube tutorials, and WhatsApp groups.
            </p>
            <Link
              href="/blog/veer-game-invite-code-referral-daily-salary"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Read Full Agent Guide &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-wallet"></i></div>
              <span className="why-badge">WITHDRAWALS</span>
            </div>
            <h3>Withdrawing Commission to UPI</h3>
            <p>
              Your agency commission wallet is 100% liquid. Learn how to withdraw earnings to your bank account within 15 minutes.
            </p>
            <Link
              href="/blog/veer-game-deposit-withdrawal-methods-upi-limits"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Review Withdrawal Rules &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-user-plus"></i></div>
              <span className="why-badge">REGISTER</span>
            </div>
            <h3>Create Agent Account Now</h3>
            <p>
              Agency registration takes less than 60 seconds with invite code 69548120159. Copy your unique link immediately!
            </p>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--vg-coral)", fontWeight: 700, textDecoration: "underline", display: "inline-block", marginTop: "10px" }}
            >
              Register as Agent &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>Start Your Journey as a Veer Game Agent Today</h2>
          <p>
            Register with code <strong>69548120159</strong> and unlock your agency promotion link in 60 seconds.
          </p>
          <div className="cta-actions">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register btn-lg"
            >
              <i className="fas fa-user-plus"></i> Register with Code 69548120159
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
