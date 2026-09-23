import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link className="brand brand-footer" href="/">
            <Image src="/images/logo/logo.png" alt="Veer Game Guide" width={140} height={40} className="brand-logo" style={{ width: "auto" }} />
          </Link>
          <p>
            Veer Game Guide - Your comprehensive resource for information about
            the Veer Game entertainment app. Learn about features, games, and how to use the app.
          </p>
          <span className="adult-note">18+ | Entertainment Guide</span>
          <div className="footer-telegram-cta">
            <a
              href="https://t.me/+SQ2smTBoOV82ZjY9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-telegram-btn"
              aria-label="Join Veer Game Community Telegram"
            >
              <i className="fab fa-telegram"></i>
              <span>Join Community Channel</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/download">App Download Guide</Link>
          <Link href="/wingo">Wingo Game Guide</Link>
          <Link href="/aviator">Aviator Game Guide</Link>
          <Link href="/#games">All Games Overview</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div>
          <h3>Guides & Articles</h3>
          <Link href="/blog">All Guides &amp; Blog</Link>
          <Link href="/blog/veer-game-login-registration-guide">Account Setup Guide</Link>
          <Link href="/blog/veer-game-app-download-apk">APK Download Guide</Link>
          <Link href="/blog/wingo-colour-prediction-tricks-veer-game">Wingo Game Guide</Link>
          <Link href="/blog/veer-game-real-or-fake-withdrawal-proof">App Review &amp; Analysis</Link>
          <Link href="/blog/veer-game-aviator-game-tricks-signals-strategy">Aviator Game Guide</Link>
        </div>
        <div>
          <h3>About This Site</h3>
          <Link href="/#about">About This Guide</Link>
          <Link href="/#disclaimer">Disclaimer</Link>
          <p style={{ fontSize: "12px", marginTop: "10px", opacity: 0.8 }}>
            This is an informational guide website. We do not operate any gaming platform or process any transactions.
          </p>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>&copy; 2026 Veer Game Guide. All rights reserved.</span>
        <span>
          <strong>Disclaimer:</strong> This website is an independent informational resource and review guide.
          We are not affiliated with, endorsed by, or connected to any gaming platform operators.
          All information provided is for educational and entertainment purposes only.
          Users should exercise their own judgment and comply with local laws. 18+ only.
        </span>
      </div>
    </footer>
  );
}
