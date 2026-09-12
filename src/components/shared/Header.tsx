"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  ["Overview", "/#overview"],
  ["Games", "/#games"],
  ["Telegram", "/#telegram"],
  ["Deposit", "/#deposit"],
  ["Withdraw", "/#withdraw"],
  ["Rewards", "/#bonus"],
  ["APK guide", "/#apk"],
  ["FAQ", "/#faq"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["overview", "games", "telegram", "deposit", "withdraw", "bonus", "apk", "faq"];
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
