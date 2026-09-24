"use client";

import Link from "next/link";
import Image from "next/image";

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
