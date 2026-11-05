"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface BentoStep {
  step: string;
  phase: string;
  title: string;
  summary: string;
  deliverable: string;
  isHero?: boolean;
  tags?: string[];
  icon: React.ReactNode;
}

const bentoSteps: BentoStep[] = [
  {
    step: "01",
    phase: "Discover",
    title: "Define Real Goals",
    summary: "Clarify practical user workflows, constraints, and success metrics before planning any code.",
    deliverable: "Scope & Discovery",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    step: "02",
    phase: "Plan",
    title: "Architect The System",
    summary: "Design database schemas, component hierarchies, and clean API contracts for predictable delivery.",
    deliverable: "Architecture & Schemas",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "Build · Core Engine",
    title: "Full-Stack Engineering",
    summary:
      "Where modern UI engineering meets rock-solid backend infrastructure, clean state management, and reliable automated workflows.",
    deliverable: "Full-Stack Development",
    isHero: true,
    tags: ["React / Next.js 16", "REST & Server Actions", "MongoDB & Mongoose", "Automated Webhooks"],
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="10" y1="19" x2="14" y2="5" />
      </svg>
    ),
  },
  {
    step: "04",
    phase: "Test",
    title: "Audit & Stress-Test",
    summary: "Verify cross-viewport responsiveness, accessibility standards, edge cases, and peak load speed.",
    deliverable: "QA & Performance",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    step: "05",
    phase: "Deploy",
    title: "Ship & Support",
    summary: "Configure production deployment, CI/CD pipelines, and provide proactive post-launch support.",
    deliverable: "Launch & Support",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function ProcessBento() {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Core Build

  return (
    <div className="process-bento-root">
      {/* Interactive Phase Scrubber Control */}
      <div className="bento-scrubber" role="tablist" aria-label="Workflow pipeline stages">
        {bentoSteps.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={s.step}
              type="button"
              className={`bento-scrubber__tab ${isActive ? "is-active" : ""}`}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              role="tab"
              aria-selected={isActive}
            >
              <span className="bento-scrubber__num">{s.step}</span>
              <span className="bento-scrubber__label">{s.phase.split(" ")[0]}</span>
              {isActive && <motion.span layoutId="scrubberGlow" className="bento-scrubber__pill" />}
            </button>
          );
        })}
      </div>

      {/* Asymmetric 5-Card Bento Matrix */}
      <div className="bento-matrix">
        {/* Row 1: 01 Discover & 02 Plan */}
        <div className="bento-matrix__row bento-matrix__row--split">
          {[bentoSteps[0], bentoSteps[1]].map((step, rIdx) => {
            const actualIdx = rIdx;
            const isHighlighted = activeStep === actualIdx;
            return (
              <motion.article
                key={step.step}
                className={`bento-tile ${isHighlighted ? "is-highlighted" : ""}`}
                onMouseEnter={() => setActiveStep(actualIdx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: actualIdx * 0.08 }}
              >
                <div className="bento-tile__top">
                  <span className="bento-tile__badge">
                    <span className="bento-tile__dot" />
                    STAGE {step.step} // {step.phase}
                  </span>
                  <div className="bento-tile__icon" aria-hidden="true">
                    {step.icon}
                  </div>
                </div>

                <h3 className="bento-tile__title">{step.title}</h3>
                <p className="bento-tile__summary">{step.summary}</p>

                <div className="bento-tile__bottom">
                  <span className="bento-tile__deliverable-tag">{step.deliverable}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Center Row: 03 Full-Stack Engineering (The Full-Width Featured Hero Tile) */}
        {(() => {
          const heroStep = bentoSteps[2];
          const isHeroActive = activeStep === 2;
          return (
            <motion.article
              className={`bento-tile bento-tile--hero ${isHeroActive ? "is-highlighted" : ""}`}
              onMouseEnter={() => setActiveStep(2)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <div className="bento-hero__inner">
                {/* Left info column */}
                <div className="bento-hero__info">
                  <div className="bento-tile__top">
                    <span className="bento-tile__badge bento-tile__badge--hero">
                      <span className="bento-tile__dot bento-tile__dot--live" />
                      STAGE 03 // {heroStep.phase}
                    </span>
                    <div className="bento-tile__icon bento-tile__icon--hero" aria-hidden="true">
                      {heroStep.icon}
                    </div>
                  </div>

                  <h3 className="bento-tile__title bento-tile__title--hero">{heroStep.title}</h3>
                  <p className="bento-tile__summary bento-tile__summary--hero">{heroStep.summary}</p>

                  <div className="bento-hero__tags">
                    {heroStep.tags?.map((t) => (
                      <span key={t} className="bento-hero__tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right live terminal console badge */}
                <div className="bento-hero__console" aria-hidden="true">
                  <div className="bento-console__header">
                    <span className="bento-console__dots">
                      <span className="dot dot--red" />
                      <span className="dot dot--yellow" />
                      <span className="dot dot--green" />
                    </span>
                    <span className="bento-console__title">engine.config.ts</span>
                  </div>
                  <div className="bento-console__code">
                    <div className="console-line">
                      <span className="console-kw">const</span> <span className="console-var">solution</span> ={" "}
                      <span className="console-kw">new</span> <span className="console-fn">FullStackApp</span>({`{`}
                    </div>
                    <div className="console-line console-line--indent">
                      <span className="console-prop">frontend:</span> <span className="console-str">&quot;Next.js App Router&quot;</span>,
                    </div>
                    <div className="console-line console-line--indent">
                      <span className="console-prop">backend:</span> <span className="console-str">&quot;Secure REST APIs&quot;</span>,
                    </div>
                    <div className="console-line console-line--indent">
                      <span className="console-prop">database:</span> <span className="console-str">&quot;Optimized Schemas&quot;</span>,
                    </div>
                    <div className="console-line">
                      {`})`};
                    </div>
                    <div className="console-line console-line--status">
                      <span className="console-check">✓</span> Ready for production deployment
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })()}

        {/* Row 3: 04 Test & 05 Deploy */}
        <div className="bento-matrix__row bento-matrix__row--split">
          {[bentoSteps[3], bentoSteps[4]].map((step, rIdx) => {
            const actualIdx = rIdx + 3;
            const isHighlighted = activeStep === actualIdx;
            return (
              <motion.article
                key={step.step}
                className={`bento-tile ${isHighlighted ? "is-highlighted" : ""}`}
                onMouseEnter={() => setActiveStep(actualIdx)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: actualIdx * 0.08 }}
              >
                <div className="bento-tile__top">
                  <span className="bento-tile__badge">
                    <span className="bento-tile__dot" />
                    STAGE {step.step} // {step.phase}
                  </span>
                  <div className="bento-tile__icon" aria-hidden="true">
                    {step.icon}
                  </div>
                </div>

                <h3 className="bento-tile__title">{step.title}</h3>
                <p className="bento-tile__summary">{step.summary}</p>

                <div className="bento-tile__bottom">
                  <span className="bento-tile__deliverable-tag">{step.deliverable}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
