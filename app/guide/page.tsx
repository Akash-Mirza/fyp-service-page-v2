import type { ReactNode } from "react";
import Link from "next/link";

import { Footer, Header } from "../site-chrome";
import AiAssist from "./ai-assist";
import Sidebar from "./sidebar";
import { CheckIcon, Icon, WA_GUIDE } from "@/lib/brand";

/* ============================================================
   FYP Desk — protected guide page (docs.html port + Q4 additions)
   New: "The Guidance Kit" section (the ready kit for Plan 1:
   high-level build instructions, agentic-development guidance,
   free coding-agent setup) and expanded copy across the page —
   what we offer, what we are not, the class-fellows note, and
   the viva-prep promise.
   ============================================================ */

function Section({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: Parameters<typeof Icon>[0]["name"];
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="docs-section" id={id}>
      <div className="docs-heading">
        <span className="icon-chip" aria-hidden="true">
          <Icon name={icon} size={20} />
        </span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function Guide() {
  return (
    <>
      <Header />
      <a href="#docs-content" className="skip-link">Skip to the document list</a>

      <main>
        {/* ===== DOCS HERO ===== */}
        <section className="docs-hero">
          <div className="container">
            <h1 className="docs-hero-title">Every document your FYP needs, in order.</h1>
            <p className="docs-hero-intro">
              Your project from the first proposal to the final defense — the
              documents, the diagrams, the evaluations, and who sees each one.
            </p>
          </div>
        </section>

        <AiAssist />

        <div className="docs-layout">
          <Sidebar />

          <main className="docs-content" id="docs-content">
            {/* --- The Two Plans --- */}
            <Section id="doc-overview" icon="rocket" title="The Two Plans">
              <p className="docs-text">
                <strong>Plan 1 — The Builder.</strong> For the student who wants
                to build it with their own hands. You get the validated idea,
                the advisor-ready proposal, the full specification, the ready
                guidance kit, and a working development setup — then you make
                it yours.
              </p>
              <p className="docs-text">
                <strong>Plan 2 — The Guided.</strong> For the group that wants
                the whole thing handled, from idea through final defense.
                Everything in Plan 1, plus the build, the code, the tests, the
                presentation, the after-build training, and the defense prep —
                you walk into the viva ready, not exhausted.
              </p>
              <p className="docs-text">
                Both paths end the same way: you, ready for your defense.
              </p>
              <p className="docs-text">
                <strong>Who this is for.</strong> FYP Desk is run by one of
                your own class fellows, for class fellows — it is not a public
                company, and the service is kept private on purpose. You are
                not just buying a deliverable: the goal is that you genuinely
                learn the skills relevant to your FYP along the way and pass
                the viva with confidence.
              </p>
            </Section>

            {/* --- What You Get --- */}
            <Section id="doc-get" icon="key" title="What You Get">
              <p className="docs-text">
                Both plans share the same document spine. The difference is who
                does the building. Every part below is delivered in the fixed
                order shown under &ldquo;How the Work Runs&rdquo;, and you always know
                what is done and what is next.
              </p>
              <p className="docs-text"><strong>Every plan includes:</strong></p>
              <ul className="docs-list">
                <li>
                  <CheckIcon />
                  A validated FYP idea + written proposal and synopsis — problem
                  validation, tech stack, advisor-ready
                </li>
                <li>
                  <CheckIcon />
                  Requirements (SRS) — what the system must do: functional and
                  non-functional requirements, scope, user research, acceptance
                  criteria
                </li>
                <li>
                  <CheckIcon />
                  Design (HLD · SDD · LLD) — system architecture, database
                  schemas, API and component design, tech-stack rationale
                </li>
                <li>
                  <CheckIcon />
                  Full setup of your AI-assisted development environment —
                  installed, configured, with a short starter guide to run it
                </li>
                <li>
                  <CheckIcon />
                  A walkthrough of the spec, so you know how to move stage by
                  stage
                </li>
              </ul>
              <p className="docs-text"><strong>Plan 2 adds the build itself:</strong></p>
              <ul className="docs-list">
                <li>
                  <CheckIcon />
                  The full codebase — written, tested, and ready to run
                </li>
                <li>
                  <CheckIcon />
                  The final project report and the presentation slides you need
                  for mid-evaluation and the final defense
                </li>
                <li>
                  <CheckIcon />
                  After the build: training on your own project — how to run
                  the app, what framework and language it uses, what each part
                  does, question/answer practice, and preparation for the viva
                  and project representation
                </li>
              </ul>
              <p className="docs-text">
                The full set of documents is the same no matter how you pay.
                One payment simply means you receive it all at once.
              </p>
            </Section>

            {/* --- The Guidance Kit (new — Q4) --- */}
            <Section id="doc-kit" icon="boxes" title="The Guidance Kit">
              <p className="docs-text">
                Plan 1 is not a pile of PDFs — it is a{" "}
                <strong>ready-to-build kit</strong>. Any intermediate-level
                developer (that includes you, a final-year CS student) can pick
                it up and build the project with it. Here is exactly what is
                inside:
              </p>
              <ul className="docs-list">
                <li>
                  <CheckIcon />
                  <strong>High-level build instructions</strong> — the main
                  development path for your specific project: what to build
                  first, what depends on what, and how to move from an approved
                  proposal to a running system stage by stage
                </li>
                <li>
                  <CheckIcon />
                  <strong>Agentic-development guidance</strong> — how to use
                  AI coding agents properly on your FYP: planning with the
                  spec, giving the right context, reviewing what the agent
                  produces, and staying in control of your own project
                </li>
                <li>
                  <CheckIcon />
                  <strong>Free coding-agent setup</strong> — which free
                  AI coding agents (CLI-based and desktop-based) fit your
                  project, with installation and configuration done with you,
                  plus a short starter guide for daily use
                </li>
                <li>
                  <CheckIcon />
                  <strong>The document spine</strong> — proposal, SRS, and
                  design documents that double as your build instructions, so
                  the same documents you submit are the ones you build from
                </li>
              </ul>
              <p className="docs-text">
                With the kit you build the project yourself — and because you
                built it, you can explain every part of it in the viva. That is
                the point of Plan 1: the same confidence, earned by your own
                hands.
              </p>
            </Section>

            {/* --- The Documents, Explained --- */}
            <Section id="doc-documents" icon="file-text" title="The Documents, Explained">
              <p className="docs-text">
                The set below is the standard FYP path in a CS degree. Your
                department&rsquo;s handbook is the final word — every program adds its
                own small print — but this is the shape almost every university
                follows.
              </p>
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>When</th>
                    <th>Holds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Proposal &amp; Synopsis</td>
                    <td>Sem 7, early</td>
                    <td>Problem statement, objectives, tools, scope, methodology, Gantt timeline, outcomes, references</td>
                  </tr>
                  <tr>
                    <td>Progress Report</td>
                    <td>Sem 7 end / Sem 8 mid</td>
                    <td>Completed work so far, first chapters, interim screenshots</td>
                  </tr>
                  <tr>
                    <td>Requirements (SRS)</td>
                    <td>Sem 8</td>
                    <td>Functional and non-functional requirements, scope, constraints</td>
                  </tr>
                  <tr>
                    <td>Design (HLD · SDD · LLD)</td>
                    <td>Sem 8</td>
                    <td>System architecture, DFD, ERD, database schemas, API and component design</td>
                  </tr>
                  <tr>
                    <td>Test Cases</td>
                    <td>Sem 8</td>
                    <td>Inputs, steps, expected vs actual result, pass/fail evidence</td>
                  </tr>
                  <tr>
                    <td>Final Project Report — what students call &ldquo;documentation&rdquo;</td>
                    <td>Sem 8</td>
                    <td>The full life cycle: abstract, analysis, design diagrams, implementation with screenshots, testing, conclusion, references</td>
                  </tr>
                  <tr>
                    <td>Presentation slides</td>
                    <td>Sem 7 and 8</td>
                    <td>Proposal, mid-evaluation, final defense</td>
                  </tr>
                </tbody>
              </table>
              <p className="docs-text">
                About the initials: <strong>SRS</strong> stands for{" "}
                <em>Software Requirements Specification</em> — the official name
                of the requirements document. <strong>HLD</strong> means{" "}
                <em>high-level design</em> (the architecture: modules, tech
                stack, data flow), <strong>SDD</strong> is the{" "}
                <em>software design document</em> that holds it, and{" "}
                <strong>LLD</strong> is the <em>low-level design</em> — API
                endpoints, classes, and schemas. In a student report these
                usually fold into one &ldquo;Architecture and Design&rdquo; chapter; you
                rarely submit them as separate files.
              </p>
              <p className="docs-note">
                One more name: the final oral exam is the viva voce. Before it
                comes the mid-evaluation and often an internal rehearsal — some
                departments call a pre-viva.
              </p>
            </Section>

            {/* --- How the Work Runs --- */}
            <Section id="doc-flow" icon="boxes" title="How the Work Runs">
              <p className="docs-text">
                One conversation is all the input needed. From there, it is my
                responsibility — here is exactly how it runs, including payment.
              </p>
              <p className="docs-text">
                <span className="docs-step">01</span>
                <strong>Talk.</strong> One meaningful conversation — you
                describe your idea, your group, and what is in your mind. That
                is the whole test. After this, making it happen is my
                responsibility.
              </p>
              <p className="docs-text">
                <span className="docs-step">02</span>
                <strong>Free proposal.</strong> After we talk, you receive the
                proposal free — the idea, the scope, the price. You approve it
                with your advisor and decide, with zero risk and zero payment
                made.
              </p>
              <p className="docs-text">
                <span className="docs-step">03</span>
                <strong>Payment starts the work.</strong> The proposal is free
                and comes before any payment. If you continue, the first
                installment is what starts the build — pay once, or in
                installments spread across the working days, and each
                installment releases the next part on a fixed schedule.
              </p>
              <p className="docs-text">
                <span className="docs-step">04</span>
                <strong>Delivery at 100%.</strong> Full access — code,
                documents, and everything built transfers to you after the
                final payment. The same rule applies to Plan 1 and Plan 2.
              </p>
            </Section>

            {/* --- Pricing & Payment --- */}
            <Section id="doc-pricing" icon="wallet" title="Pricing & Payment">
              <p className="docs-text">
                <strong>Plan 1 — 10,000 Rs.</strong> In one payment or in
                installments (for example 4,000 + 4,000 + 2,000), paid as each
                part of the kit is released. You build the FYP yourself.
              </p>
              <p className="docs-text">
                <strong>Plan 2 — 30,000 Rs.</strong> standard, in one payment
                or six installments of 5,000 spread across the working days.
                Plan 2 has a limited launch offer at a lower starting price —
                see <Link href="/#offer">The offer</Link> on the home page.
              </p>
              <p className="docs-text">
                <strong>Switching later.</strong> If you start with Plan 1 and
                later move to Plan 2, the amount you paid is credited toward
                Plan 2. The additional amount is the Plan 2 rate minus what you
                already paid.
              </p>
              <p className="docs-text">
                Fixed prices, no hidden charges. The full set of documents is
                the same no matter how you pay — installments change the timing
                of each part, not the contents.
              </p>
            </Section>

            {/* --- FAQ & Next Step --- */}
            <Section id="doc-faq" icon="help" title="FAQ & Next Step">
              <ul className="docs-list">
                <li>
                  <CheckIcon />
                  <strong>Who is this for?</strong> Built for CS students in my
                  class, typically groups of two. If your group is different,
                  ask anyway.
                </li>
                <li>
                  <CheckIcon />
                  <strong>What do we need to start?</strong> A conversation.
                  Nothing is decided and nothing is paid before we talk.
                </li>
                <li>
                  <CheckIcon />
                  <strong>Do we own everything?</strong> Yes. Everything
                  delivered — code, documents, the running app — is yours. No
                  licensing, no retained rights.
                </li>
                <li>
                  <CheckIcon />
                  <strong>Will I be able to defend it?</strong> That is the
                  whole design of the service. Plan 1 you build yourself with
                  the kit; Plan 2 includes training on your own project,
                  Q/A practice, and viva prep. The goal is confidence, not
                  dependence.
                </li>
                <li>
                  <CheckIcon />
                  <strong>How fast do you reply?</strong> Usually within a day.
                </li>
              </ul>

              <div className="docs-cta">
                <h2>Not sure which plan yet?</h2>
                <p>
                  Send me a message and tell me where your group is. We talk,
                  and I tell you what fits — or I tell you honestly when it
                  does not.
                </p>
                <a href={WA_GUIDE} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Message me on WhatsApp
                </a>
              </div>
            </Section>
          </main>
        </div>
      </main>

      <Footer />
    </>
  );
}
