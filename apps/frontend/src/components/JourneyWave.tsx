"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface JourneyMilestone {
  step: string;
  phase: string;
  title: string;
  tagline: string;
  summary: string;
  skills: string[];
  status?: string;
  icon: React.ReactNode;
}

const milestones: JourneyMilestone[] = [
  {
    step: "01",
    phase: "Phase 01 · Foundations",
    title: "Web Fundamentals",
    tagline: "Understanding the web engine",
    summary:
      "Mastered the core building blocks: semantic HTML architecture, modern responsive CSS layouts, and native JavaScript logic.",
    skills: ["HTML5 / Semantic Web", "Modern CSS & Flex/Grid", "JavaScript (ES6+)"],
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
    step: "02",
    phase: "Phase 02 · Frontend Craft",
    title: "Component Systems",
    tagline: "Scalable reactive UI",
    summary:
      "Transitioned to component-driven design systems, mastering React, Next.js App Router, Tailwind styling, and client state.",
    skills: ["React.js", "Next.js App Router", "Tailwind CSS", "State Architecture"],
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    step: "03",
    phase: "Phase 03 · Backend & Data",
    title: "APIs & Databases",
    tagline: "Secure, reliable pipelines",
    summary:
      "Expanded into backend services, database schemas, secure token authentication, REST endpoints, and automated notification bots.",
    skills: ["Node.js / Express", "MongoDB & Mongoose", "JWT Auth", "Telegram Webhooks"],
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
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    step: "04",
    phase: "Phase 04 · Production Ready",
    title: "Full-Stack Solutions",
    tagline: "Engineering real business impact",
    summary:
      "Unifying frontend polish with robust backends to ship fast, accessible, end-to-end applications designed for measurable growth.",
    skills: ["Full-Stack Architecture", "End-to-End Delivery", "Performance & SEO"],
    status: "Active Craft",
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

export default function JourneyWave() {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to current stage (04)

  return (
    <div className="journey-wave-root">
      {/* ====================================================================
          DESKTOP WAVE MATRIX (Horizontal Undulating Waveform, >= 960px)
          ==================================================================== */}
      <div className="journey-wave-desktop">
        {/* Continuous Flowing SVG Sine Wave Track */}
        <div className="journey-wave-track" aria-hidden="true">
          <svg
            className="journey-wave-svg"
            viewBox="0 0 1200 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BB4D00" stopOpacity="0.4" />
                <stop offset="35%" stopColor="#FF7A00" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#BB4D00" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FF9838" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="waveGlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(187, 77, 0, 0.1)" />
                <stop offset="50%" stopColor="rgba(255, 122, 0, 0.25)" />
                <stop offset="100%" stopColor="rgba(255, 152, 56, 0.3)" />
              </linearGradient>
            </defs>

            {/* Ambient wide wave ribbon */}
            <path
              d="M 60,60 
                 C 180,15 240,15 360,60 
                 C 480,105 540,105 660,60 
                 C 780,15 840,15 960,60 
                 C 1020,80 1080,80 1140,60"
              stroke="url(#waveGlowGradient)"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Primary glowing animated sine stroke */}
            <path
              d="M 60,60 
                 C 180,15 240,15 360,60 
                 C 480,105 540,105 660,60 
                 C 780,15 840,15 960,60 
                 C 1020,80 1080,80 1140,60"
              stroke="url(#waveLineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 6"
              className="journey-wave-pulse-path"
            />
          </svg>
        </div>

        {/* 4 Staggered Milestone Columns along the Wave */}
        <div className="journey-wave-grid">
          {milestones.map((m, idx) => {
            const isSelected = activeStage === idx;
            // Alternating vertical shift creates a tangible wave motion
            const isCrest = idx % 2 === 0;

            return (
              <div
                key={m.step}
                className={`journey-wave-col ${isCrest ? "is-crest" : "is-trough"} ${
                  isSelected ? "is-active" : ""
                }`}
                onMouseEnter={() => setActiveStage(idx)}
              >
                {/* Milestone Node on Wave Crest/Trough */}
                <div className="journey-node-anchor">
                  <div className="journey-node-disc">
                    <span className="journey-node-disc__num">{m.step}</span>
                    {m.status && (
                      <span className="journey-node-disc__badge">
                        <span className="journey-node-disc__beacon" />
                      </span>
                    )}
                    <span className="journey-node-disc__ring" aria-hidden="true" />
                  </div>
                  {/* Stem connecting node to card */}
                  <div className="journey-node-stem" aria-hidden="true" />
                </div>

                {/* Sleek Bento Milestone Card */}
                <motion.div
                  className="journey-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                >
                  <div className="journey-card__header">
                    <span className="journey-card__phase">{m.phase}</span>
                    <div className="journey-card__icon" aria-hidden="true">
                      {m.icon}
                    </div>
                  </div>

                  <h3 className="journey-card__title">{m.title}</h3>
                  <p className="journey-card__tagline">{m.tagline}</p>
                  <p className="journey-card__summary">{m.summary}</p>

                  <div className="journey-card__skills">
                    {m.skills.map((skill) => (
                      <span key={skill} className="journey-card__pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ====================================================================
          MOBILE & TABLET WAVE STREAM (Vertical S-Waveform Flow, <= 959px)
          ==================================================================== */}
      <div className="journey-wave-mobile">
        {/* Central glowing vertical sinusoidal spine */}
        <div className="journey-mobile-spine" aria-hidden="true">
          <div className="journey-mobile-spine__line" />
        </div>

        <div className="journey-mobile-list">
          {milestones.map((m, idx) => {
            const isLast = idx === milestones.length - 1;

            return (
              <div key={m.step} className="journey-mobile-item">
                {/* Step Disc on the Spine */}
                <div className="journey-mobile-disc-wrap">
                  <div className="journey-mobile-disc">
                    <span className="journey-mobile-disc__step">STEP</span>
                    <span className="journey-mobile-disc__num">{m.step}</span>
                    <span className="journey-mobile-disc__glow" aria-hidden="true" />
                  </div>
                </div>

                {/* Short stem into the card */}
                <div className="journey-mobile-stem" aria-hidden="true" />

                {/* Modern Full-Width Mobile Card */}
                <motion.div
                  className="journey-mobile-card"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="journey-mobile-card__top">
                    <div className="journey-mobile-card__meta">
                      <span className="journey-mobile-card__phase">{m.phase}</span>
                      <h3 className="journey-mobile-card__title">{m.title}</h3>
                    </div>
                    <div className="journey-mobile-card__icon" aria-hidden="true">
                      {m.icon}
                    </div>
                  </div>

                  <p className="journey-mobile-card__tagline">{m.tagline}</p>
                  <p className="journey-mobile-card__summary">{m.summary}</p>

                  <div className="journey-mobile-card__skills">
                    {m.skills.map((skill) => (
                      <span key={skill} className="journey-mobile-card__pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Connecting wave flow spacer between milestones */}
                {!isLast && (
                  <div className="journey-mobile-bridge" aria-hidden="true">
                    <span className="journey-mobile-bridge__pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
