"use client";

import { useState } from "react";

/* ============================================================
   FYP Desk — FAQ accordion (home page)
   ============================================================ */

const faqs = [
  {
    q: "Is this only for CS students?",
    a: "This is built for CS students in my class, specifically groups of two. If your group is different, message me and we can talk about whether it fits.",
  },
  {
    q: "What if we already have an idea?",
    a: "Plan 1 still helps — I validate it, write the proposal and spec, and set up your environment. Plan 2 handles the whole build from where you are.",
  },
  {
    q: "What if we are mid-way through and stuck?",
    a: "Message me and tell me where you are. Plan 2 can pick up from any stage. Plan 1 does not cover rescue — it covers starting from scratch.",
  },
  {
    q: "Do we own the code and the documents?",
    a: "Yes. Everything I deliver is yours. There is no licensing, no hidden terms, no \"I retain rights.\" You own what you pay for.",
  },
  {
    q: "What do you need from us to start?",
    a: "For Plan 1: a brief conversation about your interests and your timeline. For Plan 2: the same, plus agreement on the scope and the price. Nothing is decided before we have talked.",
  },
  {
    q: "Can we switch from Plan 1 to Plan 2 later?",
    a: "Yes. The Plan 1 amount you paid is credited toward Plan 2. The additional amount is the Plan 2 rate minus what you already paid.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => (
        <div key={item.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <button
            type="button"
            className="faq-question"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <span className="faq-icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-answer" role="region">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
