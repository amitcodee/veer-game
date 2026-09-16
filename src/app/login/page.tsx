import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game Login & Register 2026 | Official Portal (Code: 69548120159)",
  description:
    "Veer Game login and register portal 2026. Sign in to your account or create new account with invite code 69548120159. Get ₹100 welcome bonus, play Wingo & Aviator. Secure 256-bit SSL encrypted access.",
  keywords: [
    "Veer Game login",
    "Veer Game register",
    "Veer Game sign up",
    "Veer Game sign in",
    "Veer Game login 2026",
    "Veer Game registration",
    "Veer Game login link",
    "Veer Game account login",
    "Veer Game new account",
    "Veer Game login kaise kare",
    "Veer Game me register kaise kare",
    "Veer Game password reset",
    "Veer Game forgot password",
    "Veer Game invite code",
    "Veer Game invite code 69548120159",
    "Veer Game official login",
    "veergames1.com login",
    "veergames login",
  ],
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Veer Game Login & Register Portal 2026 | Official Account Access",
    description:
      "Official Veer Game login and register gateway. Instant mobile login, 256-bit SSL encryption, and ₹100 welcome bonus on registration.",
    url: "https://veergames1.com/login",
    siteName: "Veer Game",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veer-game-login-573x1024.jpeg",
        width: 573,
        height: 1024,
        alt: "Veer Game Official Login and Registration Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game Login & Register Portal 2026 | Official Account Access",
    description:
      "Secure login portal for Veer Game. Play Wingo, Aviator, and Lottery with instant ₹100 UPI deposits.",
    images: ["https://veergames1.com/images/imgs/veer-game-login-573x1024.jpeg"],
  },
};

export default function LoginPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}/login#webpage`,
    name: "Veer Game Login and Registration Portal",
    description:
      "Official portal for logging into existing Veer Game accounts or creating a new verified profile with invitation code 69548120159.",
    url: `${BASE_URL}/login`,
    inLanguage: ["en-IN", "hi-IN"],
    publisher: {
      "@type": "Organization",
      name: "Veer Game Official",
      url: BASE_URL,
    },
  };

  const howToLoginSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Login to Your Veer Game Account",
    description: "Step-by-step instructions for signing into Veer Game on mobile or desktop.",
    totalTime: "PT1M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Enter Registered Mobile Number",
        text: "Input your 10-digit Indian phone number associated with your Veer Game profile.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Input Account Password",
        text: "Enter your secure account password created during initial registration.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Click Login to Access Games",
        text: "Tap the Login button to enter your member dashboard, play Wingo & Aviator, or cash out winnings.",
      },
    ],
  };

  const howToRegisterSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Register on Veer Game with Code 69548120159",
    description: "Guide to creating a new account and claiming the ₹100 welcome bonus match.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open Official Registration Gateway",
        text: "Visit the verified Veer Game registration cashier.",
        url: REGISTER_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enter Mobile Number & Create Password",
        text: "Type your active 10-digit phone number and set an 8+ character password.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Confirm Invitation Code 69548120159",
        text: "Ensure invite code 69548120159 is applied to qualify for ₹100 bonus and priority payouts.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Deposit ₹100 & Start Playing",
        text: "Fund your wallet with minimum ₹100 using PhonePe, Paytm, or Google Pay.",
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
        name: "Login & Register",
        item: `${BASE_URL}/login`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I log in to my Veer Game account if I forgot my password?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On the login screen, click 'Forgot Password'. Enter your registered 10-digit mobile number, receive an SMS OTP, and set a new secure password.",
        },
      },
      {
        "@type": "Question",
        name: "What is the official Veer Game invite code for new registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The official invite code is 69548120159. Using this code activates up to ₹100 welcome bonus match and prioritizes your bank withdrawal processing to 8–15 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Can I log in to Veer Game on both my phone and PC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can log in with the same mobile number and password across Android APK, mobile web browser, and desktop browser with synchronized wallet balance.",
        },
      },
      {
        "@type": "Question",
        name: "Why is my Veer Game account showing 'Login Error' or network timeout?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ensure your mobile data or Wi-Fi connection is stable. If you are using a VPN, disconnect it as domestic Indian payment gateways require an Indian IP address.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLoginSchema) }}
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
            { label: "Veer Game Login & Register", href: "/login" },
          ]}
        />
      </div>

      {/* Hero / Login Form Section */}
      <section className="login-hero-section">
        <div className="site-shell">
          <div className="login-hero-grid">
            {/* Left: Crawlable & Functional Portal Form Box */}
            <div className="login-form-box">
              <div className="form-box-header">
                <span className="form-badge">
                  <i className="fas fa-lock"></i> 256-Bit SSL Encrypted
                </span>
                <h1 className="form-title">
                  Veer Game <span className="highlight-text">Login &amp; Register</span>
                </h1>
                <p className="form-subtitle">
                  Access your official account to play Wingo, Aviator, and withdraw real-time earnings.
                </p>
              </div>

              {/* Functional Interactive Form UI */}
              <div className="crawlable-form-container">
                <div className="form-mode-tabs">
                  <span className="mode-tab active">
                    <i className="fas fa-right-to-bracket"></i> Member Login
                  </span>
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mode-tab"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fas fa-user-plus"></i> New Register
                  </a>
                </div>

                <div className="form-input-group">
                  <label htmlFor="mobile-input">
                    <i className="fas fa-phone"></i> Registered Mobile Number
                  </label>
                  <div className="input-prefix-wrap">
                    <span className="input-prefix">+91</span>
                    <input
                      id="mobile-input"
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      maxLength={10}
                      className="login-input"
                      aria-label="Mobile Number"
                    />
                  </div>
                </div>

                <div className="form-input-group">
                  <label htmlFor="password-input">
                    <i className="fas fa-key"></i> Account Password
                  </label>
                  <input
                    id="password-input"
                    type="password"
                    placeholder="Enter your account password"
                    className="login-input"
                    aria-label="Account Password"
                  />
                </div>

                <div className="form-invite-banner">
                  <div className="invite-tag">
                    <i className="fas fa-gift"></i> Official Invite Code Active
                  </div>
                  <div className="invite-code-display">
                    <code>69548120159</code>
                    <span className="invite-perk">₹100 Welcome Bonus Match</span>
                  </div>
                </div>

                <div className="form-action-row">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-login-submit"
                  >
                    <i className="fas fa-arrow-right-to-bracket"></i> Secure Log In Now
                  </a>
                </div>

                <div className="form-footer-links">
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="forgot-link"
                  >
                    <i className="fas fa-question-circle"></i> Forgot Password?
                  </a>
                  <a
                    href={REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="create-link"
                  >
                    Don't have an account? <strong>Register Here &rarr;</strong>
                  </a>
                </div>
              </div>

              {/* Safety Badges */}
              <div className="login-security-badges">
                <span><i className="fas fa-shield-halved"></i> 256-Bit SSL</span>
                <span><i className="fas fa-mobile-screen"></i> SMS OTP Protected</span>
                <span><i className="fas fa-user-shield"></i> Anti-Fraud Monitored</span>
              </div>
            </div>

            {/* Right: Explanatory Visual & Benefits */}
            <div className="login-visual-box">
              <div className="login-image-card">
                <Image
                  src="/images/imgs/veer-game-login-573x1024.jpeg"
                  alt="Veer Game Official Member Login Portal"
                  width={460}
                  height={820}
                  priority
                  className="login-app-img"
                />
                <div className="login-perks-overlay">
                  <h3>Member Privileges</h3>
                  <ul>
                    <li><i className="fas fa-circle-check"></i> Instant ₹100 UPI Recharge</li>
                    <li><i className="fas fa-circle-check"></i> 8–15 Minute Fast IMPS Cashout</li>
                    <li><i className="fas fa-circle-check"></i> Up to ₹50,000 Daily Agent Salary</li>
                    <li><i className="fas fa-circle-check"></i> 24/7 Priority Telegram Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Login & Registration Tutorial */}
      <section className="site-shell login-instructions-section">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-book-open"></i> Account Guide
          </span>
          <h2 className="vg-section-title">How to Access &amp; Protect Your Veer Game Account</h2>
          <p className="vg-section-desc">
            Complete walkthrough for 1-click web login, Android APK biometric access, and password recovery.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-globe"></i></div>
              <span className="why-badge">WEB ACCESS</span>
            </div>
            <h3>Browser Login (No Download)</h3>
            <p>
              Open <a href="https://veergames1.com/">veergames1.com</a> on Chrome or Safari. Tap Log In, enter your
              10-digit mobile number and password, and instantly access the full cashier and games suite.
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fab fa-android"></i></div>
              <span className="why-badge">1-TAP APK</span>
            </div>
            <h3>Android APK Biometric Login</h3>
            <p>
              Download the official <Link href="/download">12.4 MB Android APK v2.1</Link>. Enable fingerprint or FaceID
              to log in with sub-20ms latency and receive instant Telegram prediction alerts.
            </p>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-key"></i></div>
              <span className="why-badge">RECOVERY</span>
            </div>
            <h3>SMS OTP Password Reset</h3>
            <p>
              Forgot your password? Click \"Forgot Password\", enter your linked phone number, verify the 6-digit SMS OTP,
              and create a new password in under 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Game Preview */}
      <section className="site-shell login-games-section">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-dice"></i> Ready to Play
          </span>
          <h2 className="vg-section-title">Games Available Immediately After Login</h2>
          <p className="vg-section-desc">
            Log in today to explore fair, certified multiplayer games with instant bank settlement.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-bullseye"></i></div>
              <span className="why-badge">WINGO</span>
            </div>
            <h3>Wingo Colour Prediction</h3>
            <p>
              Choose Green, Red, or Violet in 30s to 5m rounds. Master the 3X investment formula to build daily
              bankroll consistency.
            </p>
            <Link
              href="/blog/wingo-colour-prediction-tricks-veer-game"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Wingo Strategy Guide &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-plane-departure"></i></div>
              <span className="why-badge">AVIATOR</span>
            </div>
            <h3>Aviator Crash Game</h3>
            <p>
              Watch multiplier flight curves up to 100x+. Use dual-bet auto-cashout at 1.50x to protect base capital
              while chasing high returns.
            </p>
            <Link
              href="/blog/veer-game-aviator-game-tricks-signals-strategy"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Aviator Cashout Formula &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-gift"></i></div>
              <span className="why-badge">REWARDS</span>
            </div>
            <h3>Daily Telegram Gift Codes</h3>
            <p>
              Claim daily promo tokens worth ₹20 to ₹500 dropped on Telegram. Fast 30-second redemption with zero turnover lock.
            </p>
            <Link
              href="/blog/veer-game-gift-code-today-free-bonus-redeem"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Claim Gift Code Today &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Login FAQ Section */}
      <section className="site-shell login-faq-section" style={{ paddingBottom: "60px" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-circle-question"></i> Login Support
          </span>
          <h2 className="vg-section-title">Veer Game Login &amp; Account FAQs</h2>
          <p className="vg-section-desc">
            Find immediate solutions for login errors, password resets, and invitation code benefits.
          </p>
        </div>

        <div className="faq-accordion">
          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                How do I log in to Veer Game if I forgot my password?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Click \"Forgot Password\" on the login form. Enter your registered 10-digit mobile number, request an SMS OTP,
              input the 6-digit code, and enter your new password. You will be logged in immediately.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                What is the official Veer Game invite code for new accounts?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              The verified official invitation code is <strong>69548120159</strong>. Entering this code unlocks the ₹100
              recharge welcome bonus, priority 8–15 minute bank payouts, and eligibility for agent salary commissions.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Can I use my Veer Game login on multiple devices?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Yes, you can log in on your Android phone, tablet, and laptop browser simultaneously. Your wallet balance,
              bet history, and VIP rebate status sync instantly across all platforms.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Why is my login failing or showing network error?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Check that your internet connection is active and that your registered phone number is entered without spaces
              or country codes. If you are connected to a VPN, please disconnect it to ensure compatibility with Indian banking rails.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>New to Veer Game? Create Your Account in 60 Seconds</h2>
          <p>
            Register with verified invite code <strong>69548120159</strong> to claim your ₹100 welcome bonus,
            play Wingo &amp; Aviator, and withdraw your winnings via UPI.
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
              <i className="fab fa-android"></i> Download Android APK (12.4 MB)
            </Link>
          </div>
          <div className="cta-guarantee-row">
            <span><i className="fas fa-shield-halved"></i> 256-Bit SSL Encrypted</span>
            <span><i className="fas fa-bolt"></i> Instant UPI Recharge</span>
            <span><i className="fas fa-lock"></i> 18+ Responsible Gaming</span>
            <span><i className="fas fa-headset"></i> 24/7 Live Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
