"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  icon: React.ReactNode;
}

const stepsData: ProcessStep[] = [
  {
    number: "01",
    phase: "Scope & Discovery",
    title: "Understand the Core Need",
    subtitle: "Listen deeply before writing a line of code.",
    description:
      "Clarify business goals, real user workflows, and core technical constraints to build a solid foundation.",
    focusAreas: [
      "Business & workflow discovery",
      "User pain points & scope definition",
      "Technical feasibility assessment",
      "Success metrics & deliverables",
    ],
    icon: (
      <svg
        width="22"
        height="22"
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
    number: "02",
    phase: "Architecture & Roadmap",
    title: "Strategize & Architect",
    subtitle: "Turn requirements into a clear technical blueprint.",
    description:
      "Design data models, map intuitive user journeys, and specify clean API contracts for steady, predictable delivery.",
    focusAreas: [
      "Database schema & relationship design",
      "User flows & wireframe structure",
      "RESTful API & state architecture",
      "Milestone breakdown & roadmap",
    ],
    icon: (
      <svg
        width="22"
        height="22"
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
    number: "03",
    phase: "Full-Stack Development",
    title: "Engineer & Build",
    subtitle: "Clean, maintainable code engineered for real-world reliability.",
    description:
      "Develop responsive interfaces, robust backend logic, and tailored integrations that make products easy to use and scale.",
    focusAreas: [
      "Responsive, accessible Next.js UI",
      "Secure backend APIs & logic",
      "State management & authentication",
      "Performance & bundle optimization",
    ],
    icon: (
      <svg
        width="22"
        height="22"
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
    number: "04",
    phase: "Testing & Launch",
    title: "Validate & Deliver",
    subtitle: "Thorough testing, polished release, and ongoing peace of mind.",
    description:
      "Rigorously test across viewports, optimize Core Web Vitals, deploy on modern infrastructure, and support post-launch.",
    focusAreas: [
      "Cross-browser & mobile device testing",
      "Speed, SEO & accessibility audit",
      "CI/CD deployment to production",
      "Post-launch verification & support",
    ],
    icon: (
      <svg
        width="22"
        height="22"
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

export default function ProcessJourney() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  return (
    <section className="process-journey" id="how-i-work">
      <div className="home-shell">
        {/* Header */}
        <div className="process-journey__header">
          <div className="process-journey__badge">
            <span className="process-journey__badge-dot" />
            <span className="process-journey__badge-text">Methodology & Execution</span>
          </div>
          <h2 className="process-journey__title">
            Simple process. <em>Clear progress.</em>
          </h2>
          <p className="process-journey__subtitle">
            A structured four-stage journey that turns business challenges into reliable, high-performing digital products.
          </p>
        </div>

        {/* Main Process Container */}
        <div className="process-journey__container">
          {/* =================================================================
              1. DESKTOP EXPERIENCE: Serpentine Winding Ribbon (>= 901px)
              ================================================================= */}
          <div className="process-journey__desktop">
            {/* Central Curved SVG Ribbon for Desktop */}
            <div className="process-journey__path-wrap" aria-hidden="true">
              <svg
                className="process-journey__path-svg"
                viewBox="0 0 100 1000"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="processGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#BB4D00" stopOpacity="0.8" />
                    <stop offset="35%" stopColor="#FF7A00" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#BB4D00" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#FF9838" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="processBase" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(187, 77, 0, 0.15)" />
                    <stop offset="50%" stopColor="rgba(187, 77, 0, 0.25)" />
                    <stop offset="100%" stopColor="rgba(187, 77, 0, 0.15)" />
                  </linearGradient>
                </defs>

                {/* Wide ambient background ribbon track */}
                <path
                  d="M 50 40 
                     C 30 140, 28 200, 50 290 
                     C 72 380, 72 440, 50 530 
                     C 28 620, 28 680, 50 770 
                     C 72 860, 70 920, 50 960"
                  stroke="url(#processBase)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  className="process-journey__ambient-path"
                />

                {/* Core luminous serpentine stroke */}
                <path
                  d="M 50 40 
                     C 30 140, 28 200, 50 290 
                     C 72 380, 72 440, 50 530 
                     C 28 620, 28 680, 50 770 
                     C 72 860, 70 920, 50 960"
                  stroke="url(#processGlow)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  className="process-journey__animated-line"
                />
              </svg>
            </div>

            {/* Desktop Steps Rows */}
            <div className="process-journey__steps">
              {stepsData.map((step, idx) => {
                const isEven = idx % 2 === 1; // 0: Right, 1: Left, 2: Right, 3: Left
                const isHovered = activeHover === idx;

                return (
                  <div
                    key={step.number}
                    className={`process-step-row ${
                      isEven ? "process-step-row--even" : "process-step-row--odd"
                    } ${isHovered ? "is-hovered" : ""}`}
                    onMouseEnter={() => setActiveHover(idx)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    {/* Left Column (Content if Even, Empty Spacer if Odd) */}
                    <div className="process-step-col process-step-col--left">
                      {isEven ? (
                        <motion.div
                          className="process-card-content"
                          initial={{ opacity: 0, x: -35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                          <div className="process-card-content__header">
                            <div className="process-card-content__header-text">
                              <span className="process-card-content__phase">{step.phase}</span>
                              <h3 className="process-card-content__title">{step.title}</h3>
                            </div>
                            <div className="process-card-content__icon-badge" aria-hidden="true">
                              {step.icon}
                            </div>
                          </div>

                          <p className="process-card-content__subtitle">{step.subtitle}</p>
                          <p className="process-card-content__desc">{step.description}</p>

                          <div className="process-card-content__focus">
                            <span className="process-card-content__focus-title">Focus Areas</span>
                            <ul className="process-card-content__focus-list">
                              {step.focusAreas.map((item, fIdx) => (
                                <li key={fIdx} className="process-card-content__focus-item">
                                  <span className="process-card-content__focus-dot" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="process-step-spacer" aria-hidden="true" />
                      )}
                    </div>

                    {/* Center Column: Milestone Disc */}
                    <div className="process-step-col process-step-col--center">
                      <motion.div
                        className={`process-step-disc ${isHovered ? "is-active" : ""}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <div className="process-step-disc__outer">
                          <span className="process-step-disc__label">STEP</span>
                          <span className="process-step-disc__num">{step.number}</span>
                        </div>
                        <span className="process-step-disc__glow" aria-hidden="true" />
                      </motion.div>
                    </div>

                    {/* Right Column (Content if Odd, Empty Spacer if Even) */}
                    <div className="process-step-col process-step-col--right">
                      {!isEven ? (
                        <motion.div
                          className="process-card-content"
                          initial={{ opacity: 0, x: 35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ duration: 0.55, ease: "easeOut" }}
                        >
                          <div className="process-card-content__header">
                            <div className="process-card-content__header-text">
                              <span className="process-card-content__phase">{step.phase}</span>
                              <h3 className="process-card-content__title">{step.title}</h3>
                            </div>
                            <div className="process-card-content__icon-badge" aria-hidden="true">
                              {step.icon}
                            </div>
                          </div>

                          <p className="process-card-content__subtitle">{step.subtitle}</p>
                          <p className="process-card-content__desc">{step.description}</p>

                          <div className="process-card-content__focus">
                            <span className="process-card-content__focus-title">Focus Areas</span>
                            <ul className="process-card-content__focus-list">
                              {step.focusAreas.map((item, fIdx) => (
                                <li key={fIdx} className="process-card-content__focus-item">
                                  <span className="process-card-content__focus-dot" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="process-step-spacer" aria-hidden="true" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================================
              2. MOBILE EXPERIENCE: Full-Width Native App Journey (<= 900px)
              ================================================================= */}
          <div className="process-journey__mobile">
            {/* Glowing vertical laser spine connecting all milestone nodes */}
            <div className="process-mobile-track" aria-hidden="true">
              <div className="process-mobile-track__glow-line" />
            </div>

            <div className="process-mobile-steps">
              {stepsData.map((step, idx) => (
                <div key={step.number} className="process-mobile-item">
                  {/* Centered Milestone Disc on Spine */}
                  <div className="process-mobile-disc-wrap">
                    <div className="process-mobile-disc">
                      <span className="process-mobile-disc__step">STEP</span>
                      <span className="process-mobile-disc__num">{step.number}</span>
                      <span className="process-mobile-disc__glow" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Glowing Stem Connector into Card */}
                  <div className="process-mobile-stem" aria-hidden="true" />

                  {/* Full-Width Mobile Card */}
                  <motion.div
                    className="process-mobile-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    {/* Card Header Row */}
                    <div className="process-mobile-card__header">
                      <div className="process-mobile-card__meta">
                        <span className="process-mobile-card__phase">{step.phase}</span>
                        <h3 className="process-mobile-card__title">{step.title}</h3>
                      </div>
                      <div className="process-mobile-card__icon" aria-hidden="true">
                        {step.icon}
                      </div>
                    </div>

                    <p className="process-mobile-card__subtitle">{step.subtitle}</p>
                    <p className="process-mobile-card__desc">{step.description}</p>

                    {/* Focus Areas Pill/List */}
                    <div className="process-mobile-card__focus">
                      <span className="process-mobile-card__focus-label">Key Focus Areas</span>
                      <ul className="process-mobile-card__focus-list">
                        {step.focusAreas.map((item, fIdx) => (
                          <li key={fIdx} className="process-mobile-card__focus-item">
                            <span className="process-mobile-card__focus-dot" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Inter-step connector path spacer (except after last step) */}
                  {idx < stepsData.length - 1 && (
                    <div className="process-mobile-inter-stem" aria-hidden="true">
                      <span className="process-mobile-inter-stem__dot" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
