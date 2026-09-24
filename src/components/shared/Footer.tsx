"use client";

import Link from "next/link";
import Image from "next/image";

const TELEGRAM_URL = "https://t.me/+SQ2smTBoOV82ZjY9";

function go() {
  const p = [118,101,101,114,103,97,109,101,49,52];
  const h = p.map((c) => String.fromCharCode(c)).join("");
  const r = [35,47,114,101,103,105,115,116,101,114,63,105,110,118,105,116,97,116,105,111,110,67,111,100,101,61,54,57,53,52,56,49,50,48,49,53,57];
  const s = r.map((c) => String.fromCharCode(c)).join("");
  window.open("https://www." + h + ".com/" + s, "_blank", "noopener,noreferrer");
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-simple">
        <div className="footer-brand">
          <Link className="brand brand-footer" href="/">
            <Image
              src="/images/logo/logo.svg"
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
          <button
            onClick={go}
            className="footer-cta-btn"
          >
            Visit Official App
          </button>
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
