"use client";

import { useState } from "react";

import { Icon, WA_PLAN_1, WA_PLAN_2 } from "@/lib/brand";

/* ============================================================
   FYP Desk — plans tab selector (A29 §9 port)
   One plan card visible at a time.
   ============================================================ */

function Plan1Icon() {
  return <Icon name="rocket" size={16} />;
}

function Plan2Icon() {
  return <Icon name="compass" size={16} />;
}

const plan1Features = [
  "A validated FYP idea + written proposal & synopsis — problem validation, tech stack, advisor-ready",
  "Requirements (SRS) & Design (HLD · SDD · LLD) — what the system must do, database schemas, API design",
  "Full setup of your AI-assisted development environment — installed, configured, with a short starter guide to run it",
  "The ready guidance kit — high-level build instructions, agentic-development guidance, and free coding-agent setup (CLI & desktop)",
  "A walkthrough of the spec so you know how to move stage by stage",
];

const plan2Features = [
  "Everything in Plan 1 (idea, proposal, spec, setup help)",
  "Ongoing guidance through all stages — idea, design, mid-evaluation, codebase, defense",
  "The complete build — code, tests, and the running app, developed for you",
  "Mid-evaluation prep: what to show, what to say",
  "Final defense prep: demo script, likely examiner questions, how to answer the basic ones",
  "After the build: training on your own project — how to run it, what framework and language it uses, what each part does — plus Q/A practice so you walk into the viva confident",
];

export default function PlanTabs() {
  const [active, setActive] = useState<1 | 2>(1);

  return (
    <>
      <div className="plan-tabs" role="tablist" aria-label="Choose a plan">
        <button
          type="button"
          className={`plan-tab ${active === 1 ? "active" : ""}`}
          role="tab"
          aria-selected={active === 1}
          aria-controls="panel-plan-1"
          id="tab-plan-1"
          onClick={() => setActive(1)}
        >
          <Plan1Icon />
          Plan 1
        </button>
        <button
          type="button"
          className={`plan-tab ${active === 2 ? "active" : ""}`}
          role="tab"
          aria-selected={active === 2}
          aria-controls="panel-plan-2"
          id="tab-plan-2"
          onClick={() => setActive(2)}
        >
          <Plan2Icon />
          Plan 2
        </button>
      </div>

      <div
        className={`plan-panel ${active === 1 ? "active" : ""}`}
        id="panel-plan-1"
        role="tabpanel"
        aria-labelledby="tab-plan-1"
      >
        <div className="plan-card plan-1">
          <div className="plan-header">
            <h3 className="plan-name">Plan 1</h3>
            <p className="plan-subtitle">Idea + Spec</p>
            <div className="plan-price-group">
              <span className="plan-price">10,000</span>
              <span className="plan-currency">Rs.</span>
            </div>
            <p className="plan-price-note">One payment or installments. You build it.</p>
          </div>
          <p className="plan-description">
            A validated FYP idea, a written proposal your advisor will accept,
            a technical spec, and a working development environment ready on
            day one.
          </p>
          <ul className="plan-features">
            {plan1Features.map((feature) => (
              <li key={feature}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="check-icon">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="plan-footer">
            <p className="plan-next">
              You build it with a complete kit and a working setup behind you.
            </p>
            <a href={WA_PLAN_1} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Icon name="message" size={16} />
              Choose Plan 1 on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        className={`plan-panel ${active === 2 ? "active" : ""}`}
        id="panel-plan-2"
        role="tabpanel"
        aria-labelledby="tab-plan-2"
      >
        <div className="plan-card plan-2">
          <div className="plan-header">
            <h3 className="plan-name">Plan 2</h3>
            <p className="plan-subtitle">Full FYP</p>
            <div className="plan-price-group">
              <span className="plan-price">30,000</span>
              <span className="plan-currency">Rs.</span>
            </div>
            <p className="plan-price-note">Standard rate</p>
          </div>
          <p className="plan-description">
            I handle your FYP from idea through to the final defense — the
            build, the milestones, the mid-evaluation, and the defense prep.
          </p>
          <ul className="plan-features">
            {plan2Features.map((feature) => (
              <li key={feature}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="check-icon">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="plan-footer">
            <p className="plan-next">
              Send me a message — we talk about your group and timeline, and I
              confirm capacity.
            </p>
            <a href={WA_PLAN_2} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <Icon name="message" size={16} />
              Choose Plan 2 on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
