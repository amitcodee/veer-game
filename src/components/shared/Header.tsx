"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  ["Games", "/#games"],
  ["Wingo Guide", "/#wingo-guide"],
  ["Aviator", "/#aviator-guide"],
  ["Download APK", "/download"],
  ["Deposit", "/#deposit"],
  ["Withdraw", "/#withdraw"],
  ["Rewards", "/#bonus"],
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
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveHash(visible.target.id);
    }, { rootMargin: "-92px 0px -55% 0px", threshold: [0.15, 0.5, 1] });
    ids.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => { window.removeEventListener("hashchange", updateHash); observer.disconnect(); };
  }, [pathname]);
  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <Link className="brand" href="/" aria-label="Veer Game home">
          <Image src="/images/logo/logo.png" alt="Veer Game" width={140} height={40} priority className="brand-logo" style={{ width: "auto" }} />
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
          <Link
            href="/login"
            className="nav-login-link"
            style={{
              padding: "7px 14px",
              borderRadius: "8px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.88rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <i className="fas fa-right-to-bracket"></i> Login
          </Link>
          <a
            href="https://www.veergame14.com/#/register?invitationCode=69548120159"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-register"
            style={{ textDecoration: "none" }}
          >
            Register
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
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
          <Link
            href="/login"
            className="mobile-register-btn"
            style={{
              width: "100%",
              marginTop: "8px",
              textDecoration: "none",
              display: "block",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
            }}
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-right-to-bracket" style={{ marginRight: "8px" }}></i>
            Member Login
          </Link>
          <a
            href="https://www.veergame14.com/#/register?invitationCode=69548120159"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-register-btn"
            style={{ width: "100%", marginTop: "8px", textDecoration: "none", display: "block" }}
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-user-plus" style={{ marginRight: "8px" }}></i>
            Register Now
          </a>
        </nav>
      )}
    </header>
  );
}
