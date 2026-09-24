"use client";

import { useEffect } from "react";

import { Icon, type IconName } from "@/lib/brand";

/* ============================================================
   FYP Desk — guide sidebar with scrollspy (A30 §5 port)
   [icon + label] links; sticky on desktop, horizontal chip row
   on mobile. The active item follows the section in view.
   ============================================================ */

const links: { href: string; label: string; icon: IconName }[] = [
  { href: "#doc-overview", label: "The Two Plans", icon: "rocket" },
  { href: "#doc-get", label: "What You Get", icon: "key" },
  { href: "#doc-kit", label: "The Guidance Kit", icon: "boxes" },
  { href: "#doc-documents", label: "The Documents, Explained", icon: "file-text" },
  { href: "#doc-flow", label: "How the Work Runs", icon: "boxes" },
  { href: "#doc-pricing", label: "Pricing & Payment", icon: "wallet" },
  { href: "#doc-faq", label: "FAQ & Next Step", icon: "help" },
];

export default function Sidebar() {
  useEffect(() => {
    const sidebar = document.querySelector(".docs-sidebar");
    if (!sidebar) return;

    const linkEls = Array.from(sidebar.querySelectorAll(".docs-link"));
    const sections = linkEls
      .map((link) => link.getAttribute("href")?.replace(/^#/, ""))
      .filter((id): id is string => Boolean(id))
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            linkEls.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${entry.target.id}`
              );
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="docs-sidebar" aria-label="Documents and flow sections">
      {links.map((link) => (
        <a key={link.href} className="docs-link" href={link.href}>
          <Icon name={link.icon} size={18} />
          {link.label}
        </a>
      ))}
    </nav>
  );
}
