import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game Register 2026 | Official Sign Up & ₹100 Welcome Bonus",
  description:
    "Register your official Veer Game account in 60 seconds with invite code 69548120159. Claim 100% welcome bonus match, ₹100 minimum UPI deposit, and 8-15 minute withdrawals.",
  keywords: [
    "Veer Game Register",
    "Veer Game sign up",
    "Veer Game registration",
    "Veer Game create account",
    "Veer Game me register kaise kare",
    "Veer Game registration link",
    "Veer Game invite code 69548120159",
    "Veer Games sign up bonus",
    "Veer Game official register portal",
    "veergames1.com register",
  ],
  alternates: {
    canonical: "/register",
  },
  openGraph: {
    title: "Veer Game Register 2026 | Official Sign Up & ₹100 Welcome Bonus",
    description:
      "Join 10 Lakh+ players on Veer Game. Register with official code 69548120159 to claim ₹100 bonus, fast UPI deposit, and play Wingo & Aviator.",
    url: "https://veergames1.com/register",
    siteName: "Veer Game",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veer-game-login-573x1024.jpeg",
        width: 573,
        height: 1024,
        alt: "Veer Game Official Account Registration Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Register 2026 | Official Sign Up & ₹100 Bonus",
    description:
      "Official registration portal with invite code 69548120159. Instant UPI recharge from ₹100 and fast bank payouts.",
    images: ["https://veergames1.com/images/imgs/veer-game-login-573x1024.jpeg"],
  },
};

export default function RegisterPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/register#webpage`,
    name: "Veer Game Official Account Registration Portal",
    description:
      "Official registration gateway to create a verified Veer Game account with invitation code 69548120159 and unlock ₹100 welcome bonus.",
    url: `${BASE_URL}/register`,
    inLanguage: ["en-IN", "hi-IN"],
    publisher: {
      "@type": "Organization",
      name: "Veer Game Official",
      url: BASE_URL,
    },
  };

  const howToRegisterSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Register on Veer Game (Step-by-Step)",
    description:
      "Quick tutorial to create your Veer Game account, apply invite code 69548120159, and deposit minimum ₹100 via UPI.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Access the Official Registration Portal",
        text: "Click the Register Now button or visit the official cashier portal at https://www.veergame14.com/#/register?invitationCode=69548120159.",
        url: REGISTER_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Your Mobile Number",
        text: "Input your active 10-digit Indian phone number capable of receiving SMS verification codes.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Set a Strong Password",
        text: "Create a password of at least 8 characters including letters and digits to protect your balance.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Verify Invitation Code 69548120159",
        text: "Confirm that invitation code 69548120159 is entered to qualify for the ₹100 welcome match and priority VIP withdrawal route.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Deposit ₹100 via UPI & Claim Bonus",
        text: "Complete your initial recharge of ₹100 using PhonePe, Paytm, or Google Pay. Your bonus activates automatically.",
      },
    ],
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
        name: "Register",
        item: `${BASE_URL}/register`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the official Veer Game invite code for 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The official Veer Game invite code is 69548120159. Entering this code during registration unlocks your ₹100 welcome bonus and priority 8–15 minute bank withdrawals.",
        },
      },
      {
        "@type": "Question",
        name: "Is registration free on Veer Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, account creation is 100% free. You only need to deposit when you wish to place real-money entries on Wingo, Aviator, or Lottery games (minimum deposit is just ₹100).",
        },
      },
      {
        "@type": "Question",
        name: "What documents are required to register on Veer Game?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No physical documents are required for registration. You only need an active 10-digit Indian mobile number to receive SMS OTPs and an Indian bank account/UPI ID for withdrawals.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to activate a new Veer Game account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Account activation is instantaneous. Once you submit your phone number and password, you are logged in immediately and can start playing in under 60 seconds.",
        },
      },
    ],
  };

  return (
    <div className="login-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToRegisterSchema) }}
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
            { label: "Veer Game Register", href: "/register" },
          ]}
        />
      </div>

      {/* Hero / Registration Form Section */}
      <section className="login-hero-section">
        <div className="site-shell">
          <div className="login-hero-grid">
            {/* Form Box */}
            <div className="login-form-box">
              <div className="form-box-header">
                <span className="form-badge">
                  <i className="fas fa-gift"></i> ₹100 Welcome Bonus Match
                </span>
                <h1 className="form-title">
                  Veer Game <span className="highlight-text">Registration Portal</span>
                </h1>
                <p className="form-subtitle">
                  Create your verified account in 60 seconds. Enjoy instant ₹100 UPI recharge and sub-15 min bank cashouts.
                </p>
              </div>

              <div className="crawlable-form-container">
                <div className="form-mode-tabs">
                  <Link href="/login" className="mode-tab" style={{ textDecoration: "none" }}>
                    <i className="fas fa-right-to-bracket"></i> Member Login
                  </Link>
                  <span className="mode-tab active">
                    <i className="fas fa-user-plus"></i> New Register
                  </span>
                </div>

                <div className="form-input-group">
                  <label htmlFor="reg-mobile">
                    <i className="fas fa-phone"></i> Mobile Phone Number
                  </label>
                  <div className="input-prefix-wrap">
                    <span className="input-prefix">+91</span>
                    <input
                      id="reg-mobile"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="login-input"
                      aria-label="Mobile Number for Registration"
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="reg-password">
                    <i className="fas fa-lock"></i> Set Account Password
                  </label>
                  <input
                    id="reg-password"
                    type="password"
                    placeholder="Create password (min 8 characters)"
                    className="login-input"
                    aria-label="Password for Registration"
                  />
                </div>

                <div className="form-invite-banner">
                  <div className="invite-tag">
                    <i className="fas fa-badge-check"></i> Verified Official Referral Code
                  </div>
                  <div className="invite-code-display">
                    <code>69548120159</code>
                    <span className="invite-perk">VIP Fast Withdrawal Queue</span>
                  </div>
                </div>

                <div className="form-action-row">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-login-submit"
                  >
                    <i className="fas fa-user-check"></i> Complete Registration &amp; Claim ₹100
                  </a>
                </div>

                <div className="form-footer-links">
                  <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                    By clicking Register, you confirm you are 18+ and accept terms.
                  </span>
                  <Link href="/login" className="create-link">
                    Already registered? <strong>Log In Here &rarr;</strong>
                  </Link>
                </div>
              </div>

              <div className="login-security-badges">
                <span><i className="fas fa-shield-halved"></i> 256-Bit SSL</span>
                <span><i className="fas fa-bolt"></i> Instant Activation</span>
                <span><i className="fas fa-lock"></i> 100% Privacy Protected</span>
              </div>
            </div>

            {/* Visual Box */}
            <div className="login-visual-box">
              <div className="login-image-card">
                <Image
                  src="/images/imgs/veer-game-login-573x1024.jpeg"
                  alt="Veer Game Official Account Registration Interface"
                  width={460}
                  height={820}
                  priority
                  className="login-app-img"
                />
                <div className="login-perks-overlay">
                  <h3>New Player Welcome Package</h3>
                  <ul>
                    <li><i className="fas fa-check-circle"></i> 100% Matching Deposit Bonus</li>
                    <li><i className="fas fa-check-circle"></i> Accessible ₹100 Starting Deposit</li>
                    <li><i className="fas fa-check-circle"></i> Daily Free Telegram Gift Codes</li>
                    <li><i className="fas fa-check-circle"></i> Up to ₹50,000 Daily Agent Salary</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Benefits of Registering */}
      <section className="site-shell" style={{ padding: "40px 0" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-star"></i> Why Join
          </span>
          <h2 className="vg-section-title">Why 10 Lakh+ Indian Players Choose Veer Game</h2>
          <p className="vg-section-desc">
            Experience India&apos;s most reliable, transparent colour prediction and multiplayer gaming ecosystem.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-bolt"></i></div>
              <span className="why-badge">INSTANT</span>
            </div>
            <h3>₹100 UPI Recharge</h3>
            <p>
              Start playing immediately with an accessible ₹100 deposit via PhonePe, Paytm, or Google Pay.
              Zero gateway handling fees.
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-shield-halved"></i></div>
              <span className="why-badge">PROVABLY FAIR</span>
            </div>
            <h3>Certified SHA-256 RNG</h3>
            <p>
              Every game round on Wingo and Aviator is cryptographically verifiable via public seed hashes.
              Outcomes cannot be manipulated.
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-money-bill-transfer"></i></div>
              <span className="why-badge">8-15 MIN</span>
            </div>
            <h3>Rapid Bank Withdrawals</h3>
            <p>
              Withdraw your winnings directly to your Indian bank account (IMPS) or UPI with 8 to 15 minute
              processing time.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="site-shell" style={{ paddingBottom: "60px" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-circle-question"></i> Registration FAQs
          </span>
          <h2 className="vg-section-title">Registration Questions Answered</h2>
        </div>

        <div className="faq-accordion">
          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                What is the official Veer Game invite code for 2026?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              The verified invite code is <strong>69548120159</strong>. Entering this code unlocks the ₹100 welcome bonus,
              priority 8–15 minute bank payouts, and agent salary qualification.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Is registration completely free?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Yes, registration is 100% free with zero mandatory charges. You can explore the platform immediately after sign up.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Can I register more than one account on the same phone?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              No, Veer Game enforces a strict one-account-per-player policy to ensure fair play and prevent bonus abuse.
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>Ready to Create Your Account?</h2>
          <p>
            Register with verified invite code <strong>69548120159</strong> to claim your welcome bonus today!
          </p>
          <div className="cta-actions">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register btn-lg"
            >
              <i className="fas fa-user-plus"></i> Open Registration Form
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
