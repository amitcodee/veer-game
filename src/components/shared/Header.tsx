"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  ["Win Go", "/wingo"],
  ["Aviator", "/aviator"],
  ["Download APK", "/download"],
  ["Agent Salary", "/referral"],
  ["Guides", "/blog"],
  ["FAQ", "/#faq"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["overview", "games", "wingo-guide", "aviator-guide", "telegram", "deposit", "withdraw", "bonus", "faq"];
    const updateHash = () => setActiveHash(window.location.hash.replace("#", ""));
    updateHash();
    window.addEventListener("hashchange", updateHash);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(visible.target.id);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: [0.15, 0.5, 1] }
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      window.removeEventListener("hashchange", updateHash);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <Link className="brand" href="/" aria-label="Veer Game home">
          <Image
            src="/images/logo/logo.png"
            alt="Veer Game"
            width={125}
            height={34}
            priority
            className="brand-logo"
            style={{ width: "auto", height: "34px" }}
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main Navigation">
          {links.map(([label, href]) => (
            <Link
              className={Boolean(activeHash) && href === `/#${activeHash}` ? "active" : ""}
              key={href}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <a
            href="https://www.veergame14.com/#/register?invitationCode=69548120159"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-login"
          >
            <i className="fas fa-right-to-bracket" aria-hidden="true"></i> Login
          </a>
          <a
            href="https://www.veergame14.com/#/register?invitationCode=69548120159"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-register"
          >
            <i className="fas fa-user-plus" aria-hidden="true"></i> Register
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav site-shell" aria-label="Mobile Navigation">
          {links.map(([label, href]) => (
            <Link onClick={() => setOpen(false)} key={href} href={href}>
              {label}
            </Link>
          ))}
          <div className="mobile-nav-actions">
            <a
              href="https://www.veergame14.com/#/register?invitationCode=69548120159"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-login-btn"
              onClick={() => setOpen(false)}
            >
              <i className="fas fa-right-to-bracket" aria-hidden="true"></i> Member Login
            </a>
            <a
              href="https://www.veergame14.com/#/register?invitationCode=69548120159"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-register-btn"
              onClick={() => setOpen(false)}
            >
              <i className="fas fa-user-plus" aria-hidden="true"></i> Register (₹100 Bonus)
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
