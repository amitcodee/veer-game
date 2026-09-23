import Link from "next/link";
import Image from "next/image";

const REGISTER_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";
const TELEGRAM_URL = "https://t.me/+SQ2smTBoOV82ZjY9";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-simple">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Veer Game"
              width={140}
              height={40}
              className="brand-logo"
              style={{ width: "auto" }}
            />
          </Link>
          <p>Veer Game - Entertainment Gaming Platform</p>
          <span className="adult-note">18+ Only</span>
        </div>
        <div className="footer-actions">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-register-btn"
          >
            Register Now
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-telegram-btn"
          >
            <i className="fab fa-telegram"></i> Join Telegram
          </a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>&copy; 2026 Veer Game. All rights reserved.</span>
      </div>
    </footer>
  );
}
