"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-shell nav-wrap">
        <Link className="brand" href="/" aria-label="Veer Game Guide home">
          <Image
            src="/images/logo/logo.svg"
            alt="Veer Game Guide"
            width={125}
            height={34}
            priority
            className="brand-logo"
            style={{ width: "auto", height: "34px" }}
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main Navigation">
          <Link href="/">Home</Link>
        </nav>
        <div className="nav-actions">
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
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
        </nav>
      )}
    </header>
  );
}
