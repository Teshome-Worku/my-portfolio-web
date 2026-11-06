"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const plannedTopics = [
  "Full-Stack Architecture",
  "Modern Next.js & React 19",
  "Database & API Reliability",
  "Real-World Production Lessons",
];

export default function Blog() {
  return (
    <div className="blog-page">
      {/* ── Main Hero & Coming Soon Statement ── */}
      <section className="blog-hero">
        <div className="blog-shell">
          <AnimatedSection variant="fadeInUp" className="blog-hero__content">
            {/* Status Pill Badge */}
            <div className="blog-status-badge" role="status" aria-label="Blog status: In Preparation">
              <span className="blog-status-badge__dot" aria-hidden="true" />
              <span className="blog-status-badge__text">COMING SOON // IN PREPARATION</span>
            </div>

            <p className="eyebrow">The Blog</p>
            <h1 className="blog-hero__title">
              Something Worth Reading <em>Is Coming.</em>
            </h1>

            <p className="blog-hero__description">
              I&apos;m working on sharing practical insights, development experiences,
              technical discoveries, and lessons from building real-world digital products.
              Stay tuned for upcoming articles.
            </p>

            {/* Editorial Drafting Visual Card */}
            <motion.div
              className="blog-draft-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="blog-draft-card__header">
                <div className="blog-draft-card__meta">
                  <span className="blog-draft-card__icon" aria-hidden="true">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                    </svg>
                  </span>
                  <span className="blog-draft-card__filename">drafts/engineering-journal.md</span>
                </div>
                <span className="blog-draft-card__badge">DRAFTING</span>
              </div>

              <div className="blog-draft-card__body">
                <p className="blog-draft-card__headline">
                  Focusing on depth and signal over noise.
                </p>
                <p className="blog-draft-card__subtext">
                  Articles are currently being researched, written, and refined directly from hands-on codebase architectures.
                </p>

                <div className="blog-draft-card__topics-label">
                  Upcoming Exploration Areas:
                </div>
                <div className="blog-draft-card__topics">
                  {plannedTopics.map((topic) => (
                    <span key={topic} className="blog-topic-pill">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Navigation Actions */}
            <div className="blog-actions">
              <Link href="/projects" className="home-button home-button--primary">
                Explore Projects <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="home-button home-button--secondary">
                Get In Touch <span aria-hidden="true">→</span>
              </Link>
              <Link href="/" className="blog-back-link">
                <span aria-hidden="true">←</span> Back to Home
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
