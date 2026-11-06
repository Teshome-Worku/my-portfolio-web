"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Blog() {
  return (
    <div className="blog-page">
      {/* ── Main Hero & Coming Soon Statement ── */}
      <section className="blog-hero">
        <div className="blog-shell">
          <AnimatedSection variant="fadeInUp" className="blog-hero__content">
            {/* Status Pill Badge */}
            <div className="blog-status-badge" role="status" aria-label="Blog status: Coming Soon">
              <span className="blog-status-badge__dot" aria-hidden="true" />
              <span className="blog-status-badge__text">COMING SOON</span>
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

            {/* Single Clean Return Action */}
            <div className="blog-actions">
              <Link href="/" className="home-button home-button--secondary">
                <span aria-hidden="true">←</span> Back to Home
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
