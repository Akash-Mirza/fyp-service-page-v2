import type { Metadata } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono, Montserrat, Oxanium } from "next/font/google";

import "./globals.css";

/* ============================================================
   FYP Desk — root layout
   Title stays "FYP Desk" (Q4); the wordmark is "DESK".
   Fonts: the locked brand trio, self-hosted via next/font
   (brand rule — font loading must not block render).
   noindex: the site is a private, gated service (A2 §3) —
   crawlers must never list it.
   ============================================================ */

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-oxanium",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FYP Desk",
  description:
    "FYP help for CS students from idea to defense. Two plans, one clear path.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    title: "FYP Desk",
    description:
      "FYP help for CS students from idea to defense. Two plans, one clear path.",
    siteName: "FYP Desk",
  },
};

/* Theme before paint — no flash of the wrong theme.
   Same key + behavior as the old app (fyp-desk-theme). */
const themeScript = `document.documentElement.setAttribute('data-theme',(function(){try{var s=localStorage.getItem('fyp-desk-theme');if(s==='light'||s==='dark')return s;return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}catch(e){return 'light';}})());`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${oxanium.variable} ${montserrat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0F4C81" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
