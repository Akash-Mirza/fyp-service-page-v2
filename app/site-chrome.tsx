"use client";

import Link from "next/link";
import { useState } from "react";

import { OFFER_DATA } from "@/lib/offer-data";
import ThemeToggle from "@/app/theme-script";

/* ============================================================
   FYP Desk — shared site chrome (client components)
   Header: DESK wordmark + emerald dot, nav, offer bell (while
   spots remain), theme toggle, mobile hamburger. Footer: same
   wordmark, no slogan, no personal name.
   Q4 consistency fix: bell 32px, hamburger 32px, and the theme
   toggle group is now also exactly 32px tall.
   ============================================================ */

export function DeskWordmark() {
  return (
    <svg
      className="header-wordmark"
      viewBox="0 0 92 38"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text
        x="0"
        y="30"
        fill="var(--color-text-primary)"
        fontFamily="Oxanium, sans-serif"
        fontWeight="800"
        fontSize="26"
        letterSpacing="0"
      >
        DESK
      </text>
      <circle
        className="dot-bounce"
        cx="82"
        cy="26.5"
        r="3.5"
        fill="var(--color-emerald)"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Static data — computable at render time, no state/effect needed.
  const spotsLeft = Math.max(0, OFFER_DATA.totalSpots - OFFER_DATA.spotsTaken);

  const nav = (
    <>
      <Link className="header-nav-link" href="/#plans">Plans</Link>
      <Link className="header-nav-link" href="/#process">Process</Link>
      <Link className="header-nav-link" href="/#faq">FAQ</Link>
      <Link className="header-nav-link" href="/#contact">Contact</Link>
      <Link className="header-nav-link" href="/guide">Guide</Link>
    </>
  );

  return (
    <header className="site-header" id="top">
      <div className="bar-container header-inner">
        <Link className="header-logo" href="/" aria-label="FYP Desk home">
          <DeskWordmark />
        </Link>
        <nav className="header-nav" aria-label="Page navigation">
          {nav}
        </nav>

        <div className="header-controls">
          {spotsLeft > 0 && (
            <button
              type="button"
              className="offer-bell"
              aria-label={`${spotsLeft} spots left, view the offer`}
              aria-controls="offer"
              onClick={() =>
                document.getElementById("offer")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
              <span className="bell-dot" aria-hidden="true">
                <span className="bell-ping" />
              </span>
            </button>
          )}
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <nav className={`header-nav-mobile ${menuOpen ? "open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
        {nav}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="bar-container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <Link className="header-logo" href="/" aria-label="FYP Desk home">
              <DeskWordmark />
            </Link>
            <p className="footer-copy">FYP Desk — a service for class fellows.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 FYP Desk</span>
          <span>Prices are final. No hidden charges.</span>
        </div>
      </div>
    </footer>
  );
}
