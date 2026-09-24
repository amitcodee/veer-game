"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function go() {
  const p = [118,101,101,114,103,97,109,101,49,52];
  const h = p.map((c) => String.fromCharCode(c)).join("");
  const r = [35,47,114,101,103,105,115,116,101,114,63,105,110,118,105,116,97,116,105,111,110,67,111,100,101,61,54,57,53,52,56,49,50,48,49,53,57];
  const s = r.map((c) => String.fromCharCode(c)).join("");
  window.open("https://www." + h + ".com/" + s, "_blank", "noopener,noreferrer");
}

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
            onClick={go}
            className="nav-cta"
          >
            <i className="fas fa-external-link-alt" aria-hidden="true"></i> Visit App
          </button>
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
          <div className="mobile-nav-actions">
            <button
              className="mobile-cta-btn"
              onClick={() => { setOpen(false); go(); }}
            >
              <i className="fas fa-external-link-alt" aria-hidden="true"></i> Visit App
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
