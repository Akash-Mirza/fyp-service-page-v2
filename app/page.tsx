import Link from "next/link";

import Faq from "./faq";
import { Footer, Header } from "./site-chrome";
import PlanTabs from "./plan-tabs";
import { WA_GENERAL, WA_OFFER } from "@/lib/brand";
import { OFFER_DATA } from "@/lib/offer-data";

/* ============================================================
   FYP Desk - protected home page
   Port of apps/fyp-service-app/index.html with the Q4 changes.
   The server checks the session cookie before rendering (A3 §4)
   - a visitor without it only ever receives the login page.
   ============================================================ */

function OfferLine() {
  const { totalSpots, spotsTaken, offerPrice, standardPrice } = OFFER_DATA;
  const left = Math.max(0, totalSpots - spotsTaken);

  if (left >= totalSpots) {
    return <p className="offer-line">Limited offer - be the first to claim a spot.</p>;
  }
  if (left > 1) {
    return (
      <p className="offer-line">
        <span className="offer-spots">{left} spots left of {totalSpots}</span>
        {" "}- the full Plan 2 at {offerPrice} Rs. instead of {standardPrice}.
      </p>
    );
  }
  if (left === 1) {
    return (
      <p className="offer-line">
        <span className="offer-spots">Only 1 spot left</span> - the full Plan 2 at {offerPrice} Rs. instead of {standardPrice}.
      </p>
    );
  }
  return (
    <p className="offer-line offer-over">
      All {totalSpots} spots are taken. Plan 2 is {standardPrice} Rs.
    </p>
  );
}

const steps = [
  {
    num: "01",
    title: "Talk",
    text: "One meaningful conversation - you describe your idea, your group, and what is in your mind. That is the whole test. After this, making it happen is my responsibility.",
  },
  {
    num: "02",
    title: "Free proposal",
    text: "After we talk, you receive the proposal free - the idea, the scope, the price. You decide with zero risk and zero payment made.",
  },
  {
    num: "03",
    title: "Payment starts the work",
    text: "Pay once, or in installments spread across the working days. Work begins when the plan and payment are agreed and you always know what stage you are at.",
  },
  {
    num: "04",
    title: "Delivery at 100%",
    text: "Full access - code, documents, and everything built transfers to you after the final payment. The same rule applies to Plan 1 and Plan 2.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <a href="#plans" className="skip-link">Skip to plans</a>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-heading">
                Your FYP <span className="finish">finished</span> with certainty
              </h1>
              <p className="hero-subheading">
                Two ways forward - build it yourself with a complete kit behind
                you, or hand it over and walk into your defense prepared. Either
                way, you finish this semester done.
              </p>
              <p className="hero-credibility">
                No confusing process. No guessing. You always know what is done,
                what is next, and what it costs.
              </p>
              <div className="hero-cta-group">
                <Link href="#plans" className="btn btn-primary">See the plans</Link>
                <Link href="#process" className="btn btn-secondary">How it works</Link>
              </div>
              <ul className="hero-trust" aria-label="What you can count on">
                <li className="hero-trust-item">Fixed prices</li>
                <li className="hero-trust-item">Free proposal after we talk</li>
                <li className="hero-trust-item">Replies within a day</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== WHICH ONE ===== */}
        <section className="which-section" id="which">
          <div className="container">
            <h2 className="section-heading">Which one is right for you?</h2>
            <div className="choice-grid">
              <div className="choice-card">
                <span className="icon-chip" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
                    <path d="m18 15 4-4" />
                    <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
                  </svg>
                </span>
                <h3 className="choice-title">Plan 1 - The Builder</h3>
                <p className="step-text">
                  This is for you if you are the student who wants to build it
                  with your own hands - the one with the energy to take the
                  challenge and the mind to finish it.
                </p>
                <ul className="choice-features">
                  <li>
                    You get the validated idea, the advisor-ready proposal, and
                    the full specification - plus the ready guidance kit and
                    free coding-agent setup so you can build it yourself
                  </li>
                  <li>
                    You want the lower commitment now, with a path to Plan 2
                    later
                  </li>
                </ul>
              </div>

              <div className="choice-card">
                <span className="icon-chip" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </span>
                <h3 className="choice-title">Plan 2 - The Guided</h3>
                <p className="step-text">
                  This is for you if you have the will to learn but the semester
                  is heavy and the pressure is real. Hand the build to someone
                  who does this every day and walk into your defense ready, not
                  exhausted.
                </p>
                <ul className="choice-features">
                  <li>
                    You want the whole thing handled - idea through final
                    defense, including the training and viva prep after the
                    build
                  </li>
                  <li>You want one person accountable for the result</li>
                </ul>
              </div>
            </div>
            <p className="choice-note">Both paths end the same way.</p>
          </div>
        </section>

        {/* ===== PLANS ===== */}
        <section className="plans-section" id="plans">
          <div className="container">
            <h2 className="section-heading">The two plans</h2>
            <p className="plans-intro">
              Two ways to work with me. Fixed prices - no hidden charges.
            </p>
            <PlanTabs />
          </div>
        </section>

        {/* ===== OFFER ===== */}
        <section className="offer-section" id="offer">
          <div className="container">
            <div className="offer-card">
              <h2 className="section-heading">The offer</h2>
              <OfferLine />
              <p className="offer-note">
                <a className="link-arrow" href={WA_OFFER} target="_blank" rel="noopener noreferrer">
                  Message me to claim a spot
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="process-section" id="process">
          <div className="container">
            <h2 className="section-heading">How it works</h2>
            <p className="process-intro">
              One conversation is all the input needed. From there, it is my
              responsibility - here is exactly how it runs, including payment.
            </p>
            <div className="process-grid">
              {steps.map((step) => (
                <div className="step-card" key={step.num}>
                  <span className="step-num">{step.num}</span>
                  <span className="icon-chip" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {step.num === "01" && <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />}
                      {step.num === "02" && (
                        <>
                          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </>
                      )}
                      {step.num === "03" && (
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                      )}
                      {step.num === "04" && (
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                      )}
                    </svg>
                  </span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.text}</p>
                </div>
              ))}
            </div>
            <p className="process-more">
              <Link className="link-arrow" href="/guide">
                Learn more about it
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Link>
            </p>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq-section" id="faq">
          <div className="container">
            <h2 className="section-heading">Questions students ask</h2>
            <Faq />
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section" id="contact">
          <div className="container">
            <h2 className="cta-heading">Not sure yet?</h2>
            <p className="cta-text">
              Send me a message and tell me where your group is. We talk, and I
              tell you what fits - or I tell you honestly when it does not.
            </p>
            <a href={WA_GENERAL} className="btn btn-invert btn-large" target="_blank" rel="noopener noreferrer">
              Message me on WhatsApp
            </a>
            <p className="cta-note cta-reply">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Replies usually within a day. If your group is different, ask anyway.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
