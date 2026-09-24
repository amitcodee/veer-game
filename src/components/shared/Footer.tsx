import Link from "next/link";
import Image from "next/image";

const APP_URL = "https://www.veergame14.com/#/register?invitationCode=69548120159";
const TELEGRAM_URL = "https://t.me/+SQ2smTBoOV82ZjY9";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-simple">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <Image
              src="/images/logo/logo.png"
              alt="Veer Game Guide"
              width={140}
              height={40}
              className="brand-logo"
              style={{ width: "auto" }}
            />
          </Link>
          <p>Veer Game Guide - Casual Entertainment App Review</p>
        </div>
        <div className="footer-actions">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-register-btn"
          >
            Visit Official App
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-telegram-btn"
          >
            <i className="fab fa-telegram"></i> Join Community
          </a>
        </div>
      </div>
      <div className="site-shell footer-bottom">
        <span>&copy; 2026 Veer Game Guide. All rights reserved.</span>
        <p className="footer-disclaimer">
          Disclaimer: This website is an independent informational guide and review
          resource. We are not affiliated with, endorsed by, or officially connected
          to the Veer Game app. All information is provided for educational and
          informational purposes only.
        </p>
      </div>
    </footer>
  );
}
