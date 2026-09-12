import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <Link className="brand brand-footer" href="/">
            <Image src="/images/logo/logo.png" alt="Veer Game" width={140} height={40} className="brand-logo" style={{ width: "auto" }} />
          </Link>
          <p>
            Veer Game is a secure online gaming platform where users can explore
            Wingo, K3, 5D, Aviator, Slots, Plinko, Limbo & Poker games.
          </p>
          <span className="adult-note">18+ | Play Responsibly</span>
          <div className="footer-telegram-cta">
            <a
              href="https://t.me/+SQ2smTBoOV82ZjY9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-telegram-btn"
              aria-label="Join Veer Game Official Telegram"
            >
              <i className="fab fa-telegram"></i>
              <span>Join Official Telegram</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/#overview">Overview</Link>
          <Link href="/#games">Games</Link>
          <Link href="/#telegram">Telegram</Link>
          <Link href="/#deposit">Deposit</Link>
          <Link href="/#withdraw">Withdraw</Link>
          <Link href="/#bonus">Rewards</Link>
          <Link href="/#apk">APK Guide</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div>
          <h3>Platform Guides</h3>
          <Link href="/blog">Official Guides &amp; Blog</Link>
          <Link href="/blog/veer-game-login-registration-guide">Veer Game Login &amp; Register</Link>
          <Link href="/blog/veer-game-app-download-apk">APK Download v2.1</Link>
          <Link href="/blog/wingo-colour-prediction-tricks-veer-game">Wingo Tricks &amp; Formula</Link>
          <Link href="/blog/veer-game-real-or-fake-withdrawal-proof">Real or Fake Audit &amp; Proof</Link>
          <Link href="/blog/veer-game-invite-code-referral-daily-salary">Invite Code 69548120159</Link>
          <Link href="/#referral">Refer &amp; Earn (Agent Salary)</Link>
        </div>
        <div>
          <h3>Trust & Legal</h3>
          <Link href="/#about">About Veer Game</Link>
          <Link href="/#trust">Security & Trust</Link>
          <Link href="/#legitimacy">Real or Fake Audit</Link>
          <Link href="/#responsible">Responsible Gaming</Link>
          <Link href="/#disclaimer">Legal Disclaimer</Link>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>&copy; 2026 Veer Game. All rights reserved.</span>
        <span>
          Veer Game is an online gaming platform. Online gaming involves real
          financial risk. Please play responsibly and only participate where
          legally permitted. 18+ only.
        </span>
      </div>
    </footer>
  );
}
