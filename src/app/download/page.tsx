import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Veer Game APK Download (Official v2.1) | Android App for Wingo & Aviator",
  description:
    "Download the official Veer Game APK v2.1 (12.4 MB) for Android. Play Wingo Colour Prediction and Aviator with sub-20ms latency, 100% Play Protect safety, and instant UPI withdrawals.",
  keywords: [
    "Veer Game APK Download",
    "Veer Game app download",
    "Veer Game APK v2.1",
    "Veer Games APK",
    "Veer Game Android app",
    "Veer Game download link",
    "Veer Game mobile app",
    "download Veer Game latest version",
    "Veer Game app 2026",
    "Veer Game invite code 69548120159",
  ],
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Veer Game APK Download (Official v2.1) | Android App for Wingo & Aviator",
    description:
      "Download the official Veer Game APK v2.1 (12.4 MB) for Android. Sub-20ms latency, Play Protect verified, and instant ₹100 UPI recharge.",
    url: "https://veergames1.com/download",
    siteName: "Veer Game",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://veergames1.com/images/imgs/veer-game-app-1-1024x683.jpeg",
        width: 1024,
        height: 683,
        alt: "Veer Game Official Android APK Download v2.1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veer Game APK Download (Official v2.1) | Android App for Wingo & Aviator",
    description:
      "Official Veer Game APK v2.1 (12.4 MB). 100% Play Protect clean, instant UPI withdrawals, and ₹100 welcome bonus.",
    images: ["https://veergames1.com/images/imgs/veer-game-app-1-1024x683.jpeg"],
  },
};

export default function DownloadPage() {
  const BASE_URL = "https://veergames1.com";
  const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/download#app`,
    name: "Veer Game Official Android APK",
    operatingSystem: "Android 5.0 (Lollipop) and higher",
    applicationCategory: "GameApplication",
    downloadUrl: `${BASE_URL}/download`,
    installUrl: `${BASE_URL}/download`,
    fileSize: "12.4 MB",
    softwareVersion: "2.1",
    datePublished: "2026-01-15T00:00:00Z",
    dateModified: "2026-09-13T09:00:00Z",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "185400",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Veer Game Official",
      url: BASE_URL,
    },
    featureList: [
      "Sub-20ms ultra-low latency WebSocket connection",
      "Instant 1-tap fingerprint & FaceID login",
      "Real-time Telegram signal push notifications",
      "UPI deposit starting from ₹100",
      "Fast 8 to 15 minute automated bank withdrawals",
      "Full access to Wingo Colour Prediction, Aviator, K3, and 5D Lottery",
    ],
  };

  const howToInstallSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Download and Install Veer Game APK on Android",
    description:
      "Step-by-step tutorial to download the verified Veer Game APK v2.1 file, enable unknown sources, and start playing.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Download the Official APK File",
        text: "Click the 'Download APK (12.4 MB)' button on veergames1.com/download to initiate the direct file download.",
        url: `${BASE_URL}/download`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Enable Unknown Sources in Android Settings",
        text: "When prompted by Chrome or your browser, tap 'Settings' and toggle 'Allow from this source' to authorize package installation.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Install Veer Game APK",
        text: "Open your notifications drawer or Downloads folder, tap veergame-v2.1.apk, and click 'Install'.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Launch App & Register with Invite Code 69548120159",
        text: "Open Veer Game, enter your mobile number and invitation code 69548120159 to claim your ₹100 welcome bonus.",
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
        name: "APK Download",
        item: `${BASE_URL}/download`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is the Veer Game APK safe and virus-free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the official Veer Game APK v2.1 is 100% virus-free, malware-tested, and verified through Google Play Protect. Always download exclusively from veergames1.com to prevent clone APKs.",
        },
      },
      {
        "@type": "Question",
        name: "What is the file size and Android version required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The APK package is ultra-lightweight at 12.4 MB and runs smoothly on all Android versions 5.0 (Lollipop) and higher, requiring only 50 MB of free storage.",
        },
      },
      {
        "@type": "Question",
        name: "Why does Android show 'File might be harmful' warning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Android displays this default caution for any app downloaded outside the Google Play Store. Veer Game is an official direct-distribution gaming APK. Simply tap 'Download anyway' to proceed.",
        },
      },
      {
        "@type": "Question",
        name: "Can I play Veer Game on an iPhone (iOS)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the native APK is for Android, iOS users can access the full web application on Safari with 100% feature parity and add it to their home screen as a Progressive Web App (PWA).",
        },
      },
      {
        "@type": "Question",
        name: "How do I claim my ₹100 bonus after downloading the APK?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After opening the app, register with invite code 69548120159. Upon your first UPI recharge of ₹100, the system automatically credits your matching welcome bonus.",
        },
      },
    ],
  };

  return (
    <div className="download-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToInstallSchema) }}
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
            { label: "Veer Game APK Download", href: "/download" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="download-hero-section">
        <div className="site-shell">
          <div className="download-hero-grid">
            <div className="download-hero-info">
              <span className="download-badge">
                <i className="fas fa-shield-check"></i> Official Android Release v2.1
              </span>
              <h1 className="download-title">
                Veer Game APK Download <span className="highlight-text">(Official v2.1)</span>
              </h1>
              <p className="download-desc">
                Download the official <strong>Veer Game Android APK</strong> for sub-20ms ultra-low
                latency execution, instant 1-tap fingerprint login, and real-time Telegram prediction
                signals. Optimized specifically for <strong>Wingo Colour Prediction</strong> and{" "}
                <strong>Aviator Crash Game</strong>.
              </p>

              {/* Direct Download Actions */}
              <div className="download-cta-group">
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-primary"
                  aria-label="Download Official Veer Game APK"
                >
                  <i className="fas fa-download"></i>
                  <div className="btn-text-block">
                    <span className="btn-main-label">Download APK (12.4 MB)</span>
                    <span className="btn-sub-label">v2.1 · Android 5.0+ · Free &amp; Clean</span>
                  </div>
                </a>
                <a
                  href={REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn-secondary"
                >
                  <i className="fas fa-globe"></i>
                  <span>Play Web Version</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="download-trust-row">
                <span>
                  <i className="fas fa-shield-halved" style={{ color: "#059669" }}></i> Play Protect
                  Verified
                </span>
                <span>
                  <i className="fas fa-bolt" style={{ color: "#f59e0b" }}></i> Sub-20ms Latency
                </span>
                <span>
                  <i className="fas fa-star" style={{ color: "#f59e0b" }}></i> 4.9/5 Rating (185K+)
                </span>
              </div>
            </div>

            {/* Visual Image Card */}
            <div className="download-hero-visual">
              <div className="download-mockup-card">
                <Image
                  src="/images/imgs/veer-game-app-1-1024x683.jpeg"
                  alt="Veer Game Android APK v2.1 Mobile Application Interface"
                  width={1024}
                  height={683}
                  priority
                  className="download-mockup-img"
                />
                <div className="download-floating-badge">
                  <span className="badge-tag">OFFICIAL APK</span>
                  <span className="badge-title">Invite Code: 69548120159</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Matrix */}
      <section className="site-shell download-specs-section">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-microchip"></i> Package Details
          </span>
          <h2 className="vg-section-title">Veer Game APK Technical Specifications</h2>
          <p className="vg-section-desc">
            Review detailed package parameters, SHA-256 integrity, and OS compatibility before installation.
          </p>
        </div>

        <div className="specs-grid">
          <div className="spec-card">
            <div className="spec-icon"><i className="fas fa-file-code"></i></div>
            <div className="spec-meta">
              <span className="spec-label">Package Name</span>
              <span className="spec-value">com.veergame.official</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon"><i className="fas fa-code-branch"></i></div>
            <div className="spec-meta">
              <span className="spec-label">Current Version</span>
              <span className="spec-value">v2.1 (Latest 2026 Build)</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon"><i className="fas fa-weight-hanging"></i></div>
            <div className="spec-meta">
              <span className="spec-label">File Size</span>
              <span className="spec-value">12.4 MB (Ultra-Light)</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon"><i className="fab fa-android"></i></div>
            <div className="spec-meta">
              <span className="spec-label">OS Compatibility</span>
              <span className="spec-value">Android 5.0 (Lollipop) +</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon"><i className="fas fa-shield-virus"></i></div>
            <div className="spec-meta">
              <span className="spec-label">Virus &amp; Malware Status</span>
              <span className="spec-value" style={{ color: "#059669" }}>100% Clean &amp; Tested</span>
            </div>
          </div>

          <div className="spec-card">
            <div className="spec-icon"><i className="fas fa-tags"></i></div>
            <div className="spec-meta">
              <span className="spec-label">License &amp; Cost</span>
              <span className="spec-value">100% Free Download</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Installation Walkthrough */}
      <section className="download-steps-section site-shell">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-list-check"></i> Step-by-Step Guide
          </span>
          <h2 className="vg-section-title">How to Install Veer Game APK on Your Phone</h2>
          <p className="vg-section-desc">
            Follow these 4 simple steps to safely install and configure the official application in under 2 minutes.
          </p>
        </div>

        <div className="install-steps-grid">
          <div className="install-step-card">
            <div className="step-number">01</div>
            <h3>Download the APK File</h3>
            <p>
              Tap the <strong>\"Download APK\"</strong> button above. When your mobile browser prompts
              that <em>\"File might be harmful\"</em>, tap <strong>\"Download anyway\"</strong>. This is a standard
              Android warning for direct-distribution APK packages.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">02</div>
            <h3>Enable Unknown Sources</h3>
            <p>
              Go to your Android phone's <strong>Settings &rarr; Security &rarr; Install Unknown Apps</strong>.
              Select your browser (Chrome or Opera) and toggle the slider to <strong>\"Allow from this source\"</strong>.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">03</div>
            <h3>Run the Installation</h3>
            <p>
              Open your <strong>Downloads folder</strong> or tap the download completed notification. Click on{" "}
              <strong>veergame-v2.1.apk</strong> and tap <strong>\"Install\"</strong>. The installation completes in 5–10 seconds.
            </p>
          </div>

          <div className="install-step-card">
            <div className="step-number">04</div>
            <h3>Login &amp; Claim Bonus</h3>
            <p>
              Launch Veer Game from your app drawer. Log in with your mobile number or register with verified invite code{" "}
              <strong style={{ color: "#ff5d43" }}>69548120159</strong> to activate your ₹100 welcome bonus match!
            </p>
          </div>
        </div>
      </section>

      {/* APK vs Mobile Web Comparison */}
      <section className="site-shell download-comparison-section">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-scale-balanced"></i> Benchmark
          </span>
          <h2 className="vg-section-title">Veer Game APK vs Mobile Web Browser</h2>
          <p className="vg-section-desc">
            Why professional Wingo and Aviator players prefer the dedicated Android application.
          </p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature / Benchmark</th>
                <th>Official Android APK (v2.1)</th>
                <th>Standard Mobile Browser</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Server Round Latency</strong></td>
                <td><strong style={{ color: "#059669" }}>&lt; 20ms (Dedicated WebSocket)</strong></td>
                <td>80ms - 150ms (HTTP Pooling)</td>
              </tr>
              <tr>
                <td><strong>Account Login</strong></td>
                <td><strong>1-Tap Biometric / Fingerprint</strong></td>
                <td>Manual Mobile &amp; Password</td>
              </tr>
              <tr>
                <td><strong>Telegram Signal Alerts</strong></td>
                <td><strong style={{ color: "#059669" }}>Real-Time Push Notifications</strong></td>
                <td>Requires Active Tab Open</td>
              </tr>
              <tr>
                <td><strong>Mobile Data Consumption</strong></td>
                <td><strong>65% Less Data (Cached Assets)</strong></td>
                <td>Re-downloads Assets Every Visit</td>
              </tr>
              <tr>
                <td><strong>Crash Game Cashout Precision</strong></td>
                <td><strong style={{ color: "#059669" }}>Instantaneous Sub-Frame Exit</strong></td>
                <td>Slight Tap Lag on Weak 4G</td>
              </tr>
              <tr>
                <td><strong>Background UPI Settlement</strong></td>
                <td><strong>Automatic In-App Refresh</strong></td>
                <td>Requires Manual Page Reload</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Educational Game Preview */}
      <section className="site-shell download-games-preview">
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-gamepad"></i> Game Access
          </span>
          <h2 className="vg-section-title">Games Unlocked Inside Veer Game APK</h2>
          <p className="vg-section-desc">
            Access the complete catalog of fair, real-money prediction and interactive lottery games.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-bullseye"></i></div>
              <span className="why-badge">TOP RATED</span>
            </div>
            <h3>Wingo Colour Prediction</h3>
            <p>
              Predict Green, Red, or Violet in 30s, 1m, 3m, or 5m rounds. Follow the 3X investment formula
              and period number patterns with 98.2% payout rates.
            </p>
            <Link
              href="/blog/wingo-colour-prediction-tricks-veer-game"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Learn Wingo Strategy &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-plane-departure"></i></div>
              <span className="why-badge">LIVE 100X</span>
            </div>
            <h3>Aviator Crash Game</h3>
            <p>
              Watch the plane soar with an exponential multiplier. Utilize the 2-bet cashout system:
              auto-cashout Bet 1 at 1.50x to protect base capital, and target Bet 2 for massive multipliers.
            </p>
            <Link
              href="/blog/veer-game-aviator-game-tricks-signals-strategy"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Explore Aviator Formula &rarr;
            </Link>
          </div>

          <div className="why-card">
            <div className="why-card-top">
              <div className="why-icon"><i className="fas fa-wallet"></i></div>
              <span className="why-badge">FAST UPI</span>
            </div>
            <h3>₹100 UPI Deposit &amp; Bank Payouts</h3>
            <p>
              Fund your wallet starting at just ₹100 using PhonePe, Paytm, or GPay. Enjoy rapid
              8 to 15 minute bank withdrawals with 0% processing fees.
            </p>
            <Link
              href="/blog/veer-game-deposit-withdrawal-methods-upi-limits"
              style={{ color: "var(--vg-coral)", fontWeight: 700, fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "10px" }}
            >
              Review Banking Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* APK FAQ Accordion */}
      <section className="site-shell download-faq-section" style={{ paddingBottom: "60px" }}>
        <div className="vg-section-header">
          <span className="vg-tag">
            <i className="fas fa-circle-question"></i> Help &amp; FAQs
          </span>
          <h2 className="vg-section-title">Veer Game APK Frequently Asked Questions</h2>
          <p className="vg-section-desc">
            Common questions regarding downloading, updating, and verifying the Android APK.
          </p>
        </div>

        <div className="faq-accordion">
          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Is the Veer Game APK safe and virus-free?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Yes, the official Veer Game APK v2.1 is 100% virus-free, malware-tested, and verified through Google Play Protect.
              Always download exclusively from veergames1.com to prevent clone or modified phishing files.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                What is the file size and Android version required?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              The APK package is ultra-lightweight at 12.4 MB and runs smoothly on all Android versions 5.0 (Lollipop) and higher,
              requiring only 50 MB of available storage on your device.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Why does Android show \"File might be harmful\" warning?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              Android displays this default caution for any application downloaded outside the Google Play Store.
              Veer Game is a secure direct-distribution real-money entertainment app. Simply tap \"Download anyway\" to continue.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                Can I play Veer Game on an Apple iPhone (iOS)?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              While the native APK is designed for Android, iOS users can access the full mobile web application on Safari
              with identical features. You can tap \"Share &rarr; Add to Home Screen\" to create a 1-tap app icon on iOS.
            </p>
          </details>

          <details>
            <summary>
              <span>
                <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                How do I claim my ₹100 welcome bonus after installing the app?
              </span>
              <i className="fas fa-chevron-down"></i>
            </summary>
            <p>
              After launching the app, register with verified invite code <strong>69548120159</strong>. Upon completing your first
              deposit of ₹100 via UPI, your welcome bonus matches automatically in your gaming wallet.
            </p>
          </details>
        </div>
      </section>

      {/* Final Download CTA */}
      <section className="vg-cta" style={{ marginBottom: "60px" }}>
        <div className="site-shell cta-inner">
          <h2>Ready to Install Veer Game on Your Smartphone?</h2>
          <p>
            Join over 10 Lakh active Indian players. Enjoy fast 12.4MB download, instant UPI deposits,
            and priority withdrawals with invite code <strong>69548120159</strong>.
          </p>
          <div className="cta-actions">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register btn-lg"
            >
              <i className="fas fa-download"></i> Download APK Now (12.4 MB)
            </a>
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-primary btn-lg"
            >
              <i className="fas fa-right-to-bracket"></i> Login to Account
            </a>
          </div>
          <div className="cta-guarantee-row">
            <span><i className="fas fa-shield-halved"></i> Google Play Protect Verified</span>
            <span><i className="fas fa-bolt"></i> Sub-20ms Round Latency</span>
            <span><i className="fas fa-lock"></i> 256-Bit SSL Encrypted</span>
            <span><i className="fas fa-headset"></i> 24/7 Live Support</span>
          </div>
        </div>
      </section>
    </div>
  );
}
