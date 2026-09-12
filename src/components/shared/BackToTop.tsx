"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() { setVisible(window.scrollY > 500); }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 w-11 h-11 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] border-none rounded-full text-white text-sm cursor-pointer z-[999] shadow-[0_4px_16px_rgba(124,58,237,0.3)] transition-all duration-300 hover:-translate-y-0.5 ${visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-5"}`}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
}
