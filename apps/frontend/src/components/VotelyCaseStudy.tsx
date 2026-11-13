import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  previous: Project;
  next: Project;
  relatedProjects: Project[];
};

export default function VotelyCaseStudy({
  project,
  previous,
  next,
  relatedProjects,
}: Props) {
  return (
    <article className="case-study votely-case-study">
      {/* ─────────────────────────────────────────────────────────────
          SECTION A: Hero & Project Introduction
      ───────────────────────────────────────────────────────────── */}
      <header className="case-study__hero votely-hero">
        <div className="projects-shell">
          <Link href="/projects" className="case-study__back">
            ← Back to Projects
          </Link>

          <div className="case-study__heading votely-hero__header">
            <div>
              <p className="eyebrow votely-eyebrow">
                {project.number} {"//"} {project.category}
              </p>
              <h1>{project.title}</h1>
              <p className="case-study__summary votely-hero__summary">
                A secure, multi-tenant awards platform designed for transparent competitions. It enables organizers to create customized events, configure categories and nominees, and manage countdown schedules—while voters participate through phone-based OTP verification powered by AfroMessage SMS.
              </p>
            </div>

            <div className="case-study__actions">
              <span className="votely-badge-status">
                <span className="votely-badge-status__dot" aria-hidden="true" />
                Production-Engineered Architecture
              </span>
            </div>
          </div>

          {/* Compact Verified Metadata Strip */}
          <div className="votely-meta-grid" aria-label="Project details summary">
            <div className="votely-meta-card">
              <span className="votely-meta-label">Role</span>
              <strong className="votely-meta-val">Full-Stack Architecture & Security Design</strong>
            </div>
            <div className="votely-meta-card">
              <span className="votely-meta-label">Platform</span>
              <strong className="votely-meta-val">Multi-Tenant Awards & Verified Voting Web App</strong>
            </div>
            <div className="votely-meta-card">
              <span className="votely-meta-label">Core Stack</span>
              <strong className="votely-meta-val">Next.js, TypeScript, Tailwind, Supabase, Prisma</strong>
            </div>
            <div className="votely-meta-card">
              <span className="votely-meta-label">Telephony Integration</span>
              <strong className="votely-meta-val">AfroMessage SMS (Direct 6-Digit OTP Delivery)</strong>
            </div>
          </div>

          {/* Hero Cover Visual */}
          <div className="case-study__image votely-hero-banner">
            <Image
              src="/projects/votely/cover.jpg"
              alt="Votely Online Awards & Voting Platform organizer dashboard and verified ballot interface"
              width={1200}
              height={675}
              priority
              sizes="(max-width: 767px) 100vw, 84vw"
              className="votely-cover-img"
            />
          </div>
        </div>
      </header>

      <div className="projects-shell case-study__body">
        {/* ─────────────────────────────────────────────────────────────
            SECTION B: Overview & Problem / Solution Split
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__overview votely-section">
          <div>
            <p className="eyebrow votely-eyebrow">Product Overview</p>
            <h2>
              Democratizing award competitions with <em>verifiable trust.</em>
            </h2>
          </div>
          <div>
            <p>
              Votely is an awards-first web platform built to replace unverified poll widgets and manual spreadsheet tabulation with an end-to-end, multi-tenant competition engine.
            </p>
            <p>
              Event organizers can register, provision award ceremonies, upload categories, and curate contenders. Meanwhile, voters cast ballots with zero friction—verified on the fly via direct phone OTP SMS dispatch without needing passwords or app downloads, enforcing election integrity at the database layer.
            </p>
          </div>
        </section>

        <section className="case-study__split votely-section">
          <div className="votely-problem-card">
            <p className="eyebrow votely-eyebrow">The Problem</p>
            <h2>
              Ballot stuffing, fake accounts, and <em>disputed results.</em>
            </h2>
            <p>
              Traditional public award voting frequently suffers from bot attacks, multiple vote submissions using fake email aliases, and opaque manual calculation. When competitions lack cryptographic vote recording, organizers face credibility loss and disputed outcomes.
            </p>
            <p>
              Conversely, enterprise voting software introduces high per-seat license costs and cumbersome account registration gates, frustrating voters and driving participation rates down during high-stakes ceremonies.
            </p>
          </div>

          <div className="votely-solution-card">
            <p className="eyebrow votely-eyebrow">The Solution</p>
            <h2>
              Server-enforced phone OTP and <em>live transparency.</em>
            </h2>
            <p>
              Votely provides an integrated, multi-role web application. Organizers manage events, categories, and contender rosters from a private organizer console. Public landing pages display live countdown timers, category breakdowns, and verified contender standings.
            </p>
            <p>
              Every ballot is verified through an ephemeral 6-digit SMS OTP dispatched directly via AfroMessage, backed by PostgreSQL compound unique constraints enforcing strictly one vote per verified phone per category.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION C: Platform Architecture & Workflow
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="workflow-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">End-to-End Workflow</p>
            <h2 id="workflow-heading">
              How Votely powers <em>certified competitions.</em>
            </h2>
            <p className="votely-section-sub">
              From initial organizer onboarding to final winner certification, the platform enforces strict role isolation and server-side verification at each milestone.
            </p>
          </div>

          {/* Interactive Step-by-Step Architecture Pipeline */}
          <div className="votely-pipeline">
            <div className="votely-pipeline__step">
              <span className="votely-pipeline__num">01</span>
              <strong className="votely-pipeline__title">Organizer Provisioning</strong>
              <p className="votely-pipeline__desc">
                Organizers register and gain access to an isolated dashboard to manage awards, categories, and contender rosters.
              </p>
            </div>
            <div className="votely-pipeline__divider" aria-hidden="true">→</div>

            <div className="votely-pipeline__step">
              <span className="votely-pipeline__num">02</span>
              <strong className="votely-pipeline__title">Countdown & Discovery</strong>
              <p className="votely-pipeline__desc">
                Votely publishes branded event pages with countdown clocks, locking the ballot until the official voting window begins.
              </p>
            </div>
            <div className="votely-pipeline__divider" aria-hidden="true">→</div>

            <div className="votely-pipeline__step">
              <span className="votely-pipeline__num">03</span>
              <strong className="votely-pipeline__title">Phone OTP Ballot</strong>
              <p className="votely-pipeline__desc">
                Voters select their nominee and enter their phone number. AfroMessage delivers an instant 6-digit verification code.
              </p>
            </div>
            <div className="votely-pipeline__divider" aria-hidden="true">→</div>

            <div className="votely-pipeline__step">
              <span className="votely-pipeline__num">04</span>
              <strong className="votely-pipeline__title">Audit & Winner Certification</strong>
              <p className="votely-pipeline__desc">
                When the window closes, the system computes verified tallies, records cryptographic audit logs, and freezes official standings.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION D: Visual Showcase Group 1 - Organizer & Admin Oversight
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="showcase-admin-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Visual Showcase {"//"} Control Centers</p>
            <h2 id="showcase-admin-heading">
              Organizer console and <em>root platform oversight.</em>
            </h2>
            <p className="votely-section-sub">
              Votely implements strict multi-tenant authorization, separating event management for independent organizers from global system administration.
            </p>
          </div>

          <div className="votely-showcase-grid">
            {/* Screenshot 1: Organizer Dashboard */}
            <div className="votely-preview-card">
              <div className="votely-browser-bar">
                <div className="votely-browser-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="votely-browser-url">votely.app/organizer/dashboard</span>
                <span className="votely-tag votely-tag--purple">Organizer Console</span>
              </div>
              <div className="votely-preview-image">
                <Image
                  src="/projects/votely/organizer-dashboard.jpg"
                  alt="Votely Organizer Dashboard showing competition metrics, event lifecycle tabs, and linkedin change maker of the year event"
                  width={1024}
                  height={504}
                  sizes="(max-width: 767px) 100vw, 84vw"
                  className="votely-img"
                />
              </div>
              <div className="votely-preview-caption">
                <strong>Organizer Event Management:</strong> Shows event breakdown across Live, Scheduled, Drafts, and Closed & Finalized states. Organizers can create events, inspect category standings, and copy public voting links with one click.
              </div>
            </div>

            {/* Screenshot 2: Admin Oversight */}
            <div className="votely-preview-card">
              <div className="votely-browser-bar">
                <div className="votely-browser-dots" aria-hidden="true">
                  <span /><span /><span />
                </div>
                <span className="votely-browser-url">votely.app/admin/oversight</span>
                <span className="votely-tag votely-tag--red">Root Authority</span>
              </div>
              <div className="votely-preview-image">
                <Image
                  src="/projects/votely/admin-oversight.jpg"
                  alt="Votely Platform Oversight Dashboard showing Supabase PostgreSQL system core, registered organizers table, and security audit log"
                  width={1024}
                  height={532}
                  sizes="(max-width: 767px) 100vw, 84vw"
                  className="votely-img"
                />
              </div>
              <div className="votely-preview-caption">
                <strong>Platform Administration & System Oversight:</strong> Root operators monitor system core status (Supabase PostgreSQL + Server Enforcement Active), view registered organizer organizations, track provisioned roles, and audit security entries.
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION E: Visual Showcase Group 2 - Public Voting Experience
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="showcase-public-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Visual Showcase {"//"} Public Voting</p>
            <h2 id="showcase-public-heading">
              Transparent, live countdowns and <em>contender discovery.</em>
            </h2>
            <p className="votely-section-sub">
              Diners and fans explore categories, inspect contender credentials, and view countdown timers indicating exact voting window parameters.
            </p>
          </div>

          <div className="votely-preview-card votely-preview-card--full">
            <div className="votely-browser-bar">
              <div className="votely-browser-dots" aria-hidden="true">
                <span /><span /><span />
              </div>
              <span className="votely-browser-url">votely.app/events/ethiopian-tech-awards</span>
              <span className="votely-tag votely-tag--green">Live Voting Active</span>
            </div>
            <div className="votely-preview-image">
              <Image
                src="/projects/votely/public-voting.jpg"
                alt="Votely public voting interface displaying live voting countdown timer, category filters, and nominee ranking cards"
                width={1024}
                height={528}
                sizes="(max-width: 767px) 100vw, 84vw"
                className="votely-img"
              />
            </div>
            <div className="votely-preview-caption">
              <strong>Public Competition Ballot Interface:</strong> Demonstrates the live voting window countdown (19 Days : 20 Hours : 23 Mins), dynamic category navigation (Best Content Creator, Best Developer), live vote counters, and explicit voting limit rules (1 vote per verified phone per category).
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION F: Visual Showcase Group 3 - Verification Pipeline
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="showcase-otp-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Visual Showcase {"//"} Verification Flow</p>
            <h2 id="showcase-otp-heading">
              Phone OTP verification and <em>tamper-proof receipting.</em>
            </h2>
            <p className="votely-section-sub">
              To eliminate fake accounts without friction, voters authenticate through a lightweight 6-digit phone OTP dispatched via AfroMessage.
            </p>
          </div>

          <div className="votely-otp-flow-grid">
            {/* Step 1: Phone input */}
            <div className="votely-flow-card">
              <span className="votely-flow-card__step">01. Phone Number Input</span>
              <div className="votely-flow-card__frame">
                <Image
                  src="/projects/votely/phone-verification-modal.jpg"
                  alt="Votely mobile phone number input modal for OTP verification"
                  width={600}
                  height={310}
                  sizes="(max-width: 767px) 90vw, 360px"
                  className="votely-flow-img"
                />
              </div>
              <p className="votely-flow-card__desc">
                Voter inputs mobile number (+251 Ethiopian or international). UI explains human verification without password setup.
              </p>
            </div>

            {/* Step 2: OTP Verification */}
            <div className="votely-flow-card">
              <span className="votely-flow-card__step">02. 6-Digit Code Entry</span>
              <div className="votely-flow-card__frame">
                <Image
                  src="/projects/votely/otp-modal.jpg"
                  alt="Votely 6-digit SMS OTP verification modal with masked phone number"
                  width={600}
                  height={314}
                  sizes="(max-width: 767px) 90vw, 360px"
                  className="votely-flow-img"
                />
              </div>
              <p className="votely-flow-card__desc">
                Modal captures 6-digit OTP with automatic 5-minute expiry timer. The voter&apos;s phone number is masked for privacy.
              </p>
            </div>

            {/* Step 3: Real SMS AfroMessage Delivery */}
            <div className="votely-flow-card">
              <span className="votely-flow-card__step">03. AfroMessage Gateway</span>
              <div className="votely-flow-card__frame votely-flow-card__frame--phone">
                <Image
                  src="/projects/votely/afromessage-sms.jpg"
                  alt="Actual AfroMessage verification SMS received on physical phone through ethio telecom"
                  width={460}
                  height={640}
                  sizes="(max-width: 767px) 90vw, 260px"
                  className="votely-flow-img"
                />
              </div>
              <p className="votely-flow-card__desc">
                Real SMS received on a physical smartphone via AfroMessage on ethio telecom. (Verification codes obscured for security).
              </p>
            </div>

            {/* Step 4: Success Modal with Receipt Ref */}
            <div className="votely-flow-card">
              <span className="votely-flow-card__step">04. Certified Ballot Receipt</span>
              <div className="votely-flow-card__frame">
                <Image
                  src="/projects/votely/vote-success-modal.png"
                  alt="Votely Vote Successfully Recorded confirmation modal with cryptographic receipt reference"
                  width={502}
                  height={640}
                  sizes="(max-width: 767px) 90vw, 360px"
                  className="votely-flow-img"
                />
              </div>
              <p className="votely-flow-card__desc">
                Server commits the ballot and issues an immutable Receipt Reference (<code>cce0jaqjsa</code>), confirming vote recording.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION G: Key Features Grid
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="features-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Key Features</p>
            <h2 id="features-heading">
              Engineered for reliability, security, and <em>simplicity.</em>
            </h2>
          </div>

          <div className="votely-features-grid">
            <div className="votely-feature-box">
              <span className="votely-feature-num">01</span>
              <strong>Organizer Console</strong>
              <p>Dedicated portal to create competitions, manage categories, curate contenders, and monitor live standings.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">02</span>
              <strong>AfroMessage SMS OTP</strong>
              <p>Direct telecommunications integration issuing real-time 6-digit one-time passwords across cellular networks.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">03</span>
              <strong>Duplicate Vote Prevention</strong>
              <p>Database-level compound unique constraints enforce strictly 1 vote per verified phone per category.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">04</span>
              <strong>Event Lifecycle States</strong>
              <p>Automated countdowns and schedule state machines: Draft → Scheduled → Live Voting → Closed & Finalized.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">05</span>
              <strong>Platform Oversight Dashboard</strong>
              <p>Root authority controls for system administrators to audit registered organizers and review platform health.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">06</span>
              <strong>Immutable Audit Trail</strong>
              <p>System logs track security-sensitive operations with timestamps, role markers, and cryptographic reference IDs.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">07</span>
              <strong>Live Contender Standings</strong>
              <p>Category-filtered leaderboard displaying rankings, real-time vote totals, and nominee biographical details.</p>
            </div>
            <div className="votely-feature-box">
              <span className="votely-feature-num">08</span>
              <strong>Certified Winner Calculation</strong>
              <p>Automated tally computation locking results and certifying category champions upon voting closure.</p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION H: Technology & Architecture Flow
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="tech-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Technology & Architecture</p>
            <h2 id="tech-heading">
              Full-stack stack selected for <em>concurrency and integrity.</em>
            </h2>
          </div>

          {/* Interactive Architecture Flow Visual */}
          <div className="votely-arch-diagram" aria-label="Votely system architecture diagram">
            <div className="votely-arch-card">
              <span className="votely-arch-tag">Voter Portal</span>
              <strong>Public Next.js Web</strong>
              <span className="votely-arch-tech">React 19 & Tailwind</span>
              <p>Event discovery, countdown timers, category filters, phone OTP entry</p>
            </div>
            <div className="votely-arch-arrow" aria-hidden="true">→</div>

            <div className="votely-arch-card">
              <span className="votely-arch-tag">Telephony Gateway</span>
              <strong>AfroMessage SMS</strong>
              <span className="votely-arch-tech">HTTP Dispatch API</span>
              <p>Direct cellular OTP delivery, 5-minute crypto TTL, rate-limiting</p>
            </div>
            <div className="votely-arch-arrow" aria-hidden="true">→</div>

            <div className="votely-arch-card">
              <span className="votely-arch-tag">Security & Database</span>
              <strong>Supabase PostgreSQL</strong>
              <span className="votely-arch-tech">Prisma ORM</span>
              <p>Unique constraints, normalized phone hashes, immutable audit log</p>
            </div>
            <div className="votely-arch-arrow" aria-hidden="true">→</div>

            <div className="votely-arch-card">
              <span className="votely-arch-tag">Management Tier</span>
              <strong>Organizer & Admin Console</strong>
              <span className="votely-arch-tech">Role-Based Access</span>
              <p>Multi-tenant data isolation, competition controls, winner finalization</p>
            </div>
          </div>

          <div className="case-study__stack-list votely-stack-grid">
            {project.technologies.map((technology) => (
              <div key={technology.name} className="votely-stack-item">
                <strong>{technology.name}</strong>
                <span>{technology.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION I: Engineering Judgment & Technical Decisions
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="contrib-heading">
          <p className="eyebrow votely-eyebrow">Engineering Judgment</p>
          <div>
            <h2 id="contrib-heading">
              Technical decisions that <em>guaranteed system resilience.</em>
            </h2>
            <p className="votely-section-sub">
              Building a public voting platform presents distinct engineering challenges where integrity cannot be left to client-side assumptions.
            </p>
            <div className="votely-decisions-grid">
              <div className="votely-decision-item">
                <strong>Zero-Trust Ballot Verification</strong>
                <p>
                  Client-side vote requests do not increment counts directly. Instead, the backend generates an ephemeral, cryptographically hashed OTP bound to <code>(phone, eventId, categoryId, nomineeId)</code>. Only when verified against AfroMessage does an atomic database transaction register the ballot.
                </p>
              </div>
              <div className="votely-decision-item">
                <strong>Multi-Tenant Data Isolation</strong>
                <p>
                  Organizers can view and modify only events provisioned under their user account. Queries and mutations enforce organizer tenancy at the Prisma repository layer, preventing cross-tenant data tampering.
                </p>
              </div>
              <div className="votely-decision-item">
                <strong>Server-Side Deduplication & Normalization</strong>
                <p>
                  Phone inputs are normalized to E.164 formatting on the server before hashing. Compound unique indexes across <code>[eventId, categoryId, phoneHash]</code> guarantee that subsequent vote attempts by the same phone in the same category fail automatically with an idempotency error.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION J: Challenges and Lessons Learned
        ───────────────────────────────────────────────────────────── */}
        <section className="votely-section" aria-labelledby="lessons-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow votely-eyebrow">Challenges & Lessons</p>
            <h2 id="lessons-heading">
              Key engineering obstacles <em>overcome during development.</em>
            </h2>
          </div>
          <div className="votely-lessons-grid">
            <div className="votely-lesson-card">
              <span className="votely-lesson-topic">SMS Delivery Latency & Edge Retries</span>
              <p>
                Telecommunication SMS delivery can experience transient carrier network spikes. To maintain high voter confidence, the modal features a proactive countdown timer, graceful error boundary handling, and exponential backoff retry mechanisms to prevent double-charging or carrier spam flags.
              </p>
            </div>
            <div className="votely-lesson-card">
              <span className="votely-lesson-topic">High-Concurrency Voting Window Closures</span>
              <p>
                When a high-interest voting window draws near its final seconds, vote influx surges. By leveraging PostgreSQL atomic transactions and lightweight indexed state lookups, ballot processing remains fast without race conditions or ballot overcounting past the cutoff timestamp.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION K: Closing Navigation & Related Projects
        ───────────────────────────────────────────────────────────── */}
        {relatedProjects && relatedProjects.length > 0 && (
          <section className="case-study__related votely-section">
            <div className="case-study__section-heading">
              <p className="eyebrow votely-eyebrow">Keep exploring</p>
              <h2>More work from the <em>catalogue.</em></h2>
            </div>
            <div className="case-study__related-grid">
              {relatedProjects.map((related) => (
                <Link
                  href={`/projects/${related.slug}`}
                  className="project-card project-card--compact"
                  key={related.slug}
                >
                  <div className="project-card__visual">
                    {related.image ? (
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        sizes="(max-width: 767px) 100vw, 40vw"
                      />
                    ) : (
                      <div className="project-card__placeholder">
                        <span>{related.number}</span>
                        <strong>{related.category}</strong>
                      </div>
                    )}
                    <span className="project-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                  <div className="project-card__content">
                    <h3>{related.title}</h3>
                    <p>{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Project Contact CTA */}
        <div className="votely-cta-box">
          <div>
            <p className="eyebrow votely-eyebrow">Work with me</p>
            <h3>Have an online voting system, web platform, or full-stack application in mind?</h3>
            <p>
              I build secure web platforms, multi-tenant software, and verified interactive systems with a relentless focus on usability, clean code, and reliable architecture.
            </p>
          </div>
          <Link href="/contact#contact-form" className="home-button home-button--primary">
            Get in Touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <nav className="case-study__prev-next" aria-label="Project navigation">
          {previous && previous.slug !== project.slug ? (
            <Link href={`/projects/${previous.slug}`}>
              <span>Previous project</span>
              <strong>← {previous.title}</strong>
            </Link>
          ) : (
            <Link href="/projects">
              <span>Selected Work</span>
              <strong>← All Projects</strong>
            </Link>
          )}

          {next && next.slug !== project.slug ? (
            <Link href={`/projects/${next.slug}`}>
              <span>Next project</span>
              <strong>{next.title} →</strong>
            </Link>
          ) : (
            <Link href="/contact#contact-form">
              <span>Get In Touch</span>
              <strong>Start a Project →</strong>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
