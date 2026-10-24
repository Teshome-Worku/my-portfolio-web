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

export default function SmartDigitalMenuCaseStudy({
  project,
  previous,
  next,
  relatedProjects,
}: Props) {
  return (
    <article className="case-study sdm-case-study">
      {/* ─────────────────────────────────────────────────────────────
          SECTION A: Hero & Project Introduction
      ───────────────────────────────────────────────────────────── */}
      <header className="case-study__hero sdm-hero">
        <div className="projects-shell">
          <Link href="/projects" className="case-study__back">
            ← Back to Projects
          </Link>

          <div className="case-study__heading sdm-hero__header">
            <div>
              <p className="eyebrow">{project.number} / {project.category}</p>
              <h1>{project.title}</h1>
              <p className="case-study__summary sdm-hero__summary">
                A mobile-first restaurant ordering platform that lets customers scan a table QR code, browse dynamic categorized menus, place orders, and track progress—while restaurant staff manage active orders and kitchen queues from a centralized operations dashboard.
              </p>
            </div>

            <div className="case-study__actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="home-button home-button--secondary"
                  aria-label="View Smart Digital Menu source code on GitHub"
                >
                  View Source Code <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>

          {/* Compact Verified Metadata Strip */}
          <div className="sdm-meta-grid" aria-label="Project details summary">
            <div className="sdm-meta-card">
              <span className="sdm-meta-label">Role</span>
              <strong className="sdm-meta-val">Full-Stack Architecture & UX Design</strong>
            </div>
            <div className="sdm-meta-card">
              <span className="sdm-meta-label">Platform</span>
              <strong className="sdm-meta-val">QR Web App & Operations Dashboard</strong>
            </div>
            <div className="sdm-meta-card">
              <span className="sdm-meta-label">Core Stack</span>
              <strong className="sdm-meta-val">Next.js, TypeScript, Express, PostgreSQL</strong>
            </div>
            <div className="sdm-meta-card">
              <span className="sdm-meta-label">Payment Integration</span>
              <strong className="sdm-meta-val">Chapa Checkout (Test Mode Verified)</strong>
            </div>
          </div>

          {/* Hero Cover Visual */}
          <div className="case-study__image sdm-hero-banner">
            <Image
              src="/projects/smart-digital-menu/cover.jpg"
              alt="Smart Digital Menu table QR stand, customer smartphone menu, and restaurant dashboard"
              width={1200}
              height={675}
              priority
              sizes="(max-width: 767px) 100vw, 84vw"
              className="sdm-cover-img"
            />
          </div>
        </div>
      </header>

      <div className="projects-shell case-study__body">
        {/* ─────────────────────────────────────────────────────────────
            SECTION B: Overview & Problem / Solution Split
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__overview sdm-section">
          <div>
            <p className="eyebrow">Product Overview</p>
            <h2>
              Making restaurant ordering simpler, <em>one scan at a time.</em>
            </h2>
          </div>
          <div>
            <p>
              Smart Digital Menu connects dine-in restaurant guests directly to kitchen operations. By replacing static physical menus with an instant QR-driven digital interface, customers can inspect dishes with appetizing imagery, customize item quantities, and review orders from their mobile phones.
            </p>
            <p>
              Simultaneously, restaurant staff monitor incoming tickets, update preparation status, and control item availability through a unified real-time dashboard—eliminating order confusion and service delays.
            </p>
          </div>
        </section>

        <section className="case-study__split sdm-section">
          <div className="sdm-problem-card">
            <p className="eyebrow">The Problem</p>
            <h2>
              Physical paper menus and <em>service bottlenecks.</em>
            </h2>
            <p>
              Traditional restaurant dining frequently suffers from manual order-taking bottlenecks. During peak service hours, waitstaff are overwhelmed, guests wait extended periods for menus and bills, and verbal orders risk miscommunication between the dining room and kitchen.
            </p>
            <p>
              Furthermore, physical printed menus are difficult and expensive to update when dishes run out or prices change, leaving managers with zero real-time visibility into table turnover and live demand.
            </p>
          </div>

          <div className="sdm-solution-card">
            <p className="eyebrow">The Solution</p>
            <h2>
              Instant table access and <em>live kitchen sync.</em>
            </h2>
            <p>
              Smart Digital Menu provides an end-to-end QR ordering flow paired with a real-time kitchen operations dashboard. Diners scan a dedicated table QR code to browse dynamic categorized menus with clear imagery and pricing, customize items, and track order stages.
            </p>
            <p>
              On the kitchen side, staff monitor incoming tickets with table identifiers, transition order states in one click, and manage item availability in real time—creating a smooth, modern dining experience.
            </p>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION C: QR Code to Digital Menu (Table Access Flow)
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-feature-row sdm-section" aria-labelledby="qr-access-heading">
          <div className="sdm-feature-row__visual">
            <div className="sdm-qr-stand-card">
              <div className="sdm-qr-badge">
                <span className="sdm-live-dot" aria-hidden="true"></span>
                <span>Active Table Session</span>
              </div>
              <div className="sdm-qr-graphic">
                <div className="sdm-qr-frame">
                  {/* SVG QR Code Illustration */}
                  <svg
                    viewBox="0 0 160 160"
                    width="140"
                    height="140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="sdm-qr-svg"
                    aria-label="Table QR Code representation"
                  >
                    <rect width="160" height="160" rx="12" fill="#121212" />
                    {/* Top-Left Corner */}
                    <rect x="20" y="20" width="36" height="36" rx="4" stroke="#BB4D00" strokeWidth="4" />
                    <rect x="28" y="28" width="20" height="20" rx="2" fill="#BB4D00" />
                    {/* Top-Right Corner */}
                    <rect x="104" y="20" width="36" height="36" rx="4" stroke="#BB4D00" strokeWidth="4" />
                    <rect x="112" y="28" width="20" height="20" rx="2" fill="#BB4D00" />
                    {/* Bottom-Left Corner */}
                    <rect x="20" y="104" width="36" height="36" rx="4" stroke="#BB4D00" strokeWidth="4" />
                    <rect x="28" y="112" width="20" height="20" rx="2" fill="#BB4D00" />
                    {/* Data Pattern Grid */}
                    <rect x="66" y="24" width="10" height="10" fill="#FFFFFF" rx="1" />
                    <rect x="84" y="24" width="10" height="10" fill="#FFFFFF" rx="1" />
                    <rect x="66" y="42" width="28" height="10" fill="#BB4D00" rx="1" />
                    <rect x="24" y="66" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="44" y="66" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="66" y="66" width="28" height="28" rx="4" fill="#BB4D00" />
                    <rect x="104" y="66" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="124" y="66" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="66" y="104" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="86" y="104" width="12" height="12" fill="#FFFFFF" rx="1" />
                    <rect x="104" y="86" width="32" height="10" fill="#FFFFFF" rx="1" />
                    <rect x="104" y="114" width="14" height="22" fill="#BB4D00" rx="1" />
                    <rect x="126" y="114" width="10" height="22" fill="#FFFFFF" rx="1" />
                    <rect x="24" y="86" width="32" height="10" fill="#BB4D00" rx="1" />
                  </svg>
                </div>
              </div>
              <div className="sdm-qr-details">
                <span className="sdm-qr-restaurant">Golden Fork Restaurant</span>
                <strong className="sdm-qr-table">Table #4</strong>
                <code className="sdm-qr-url">/r/golden-fork/table/4</code>
                <p className="sdm-qr-caption">Instant dining session bound to customer table</p>
              </div>
            </div>
          </div>

          <div className="sdm-feature-row__content">
            <p className="eyebrow">Table QR Access</p>
            <h2 id="qr-access-heading">
              From table QR code to <em>digital menu.</em>
            </h2>
            <p>
              The ordering journey begins directly at the dining table. Each table features a dedicated QR stand that guests scan using their smartphone camera, opening the restaurant menu instantly without app installations or account signups.
            </p>
            <div className="sdm-steps-list">
              <div className="sdm-step-item">
                <span className="sdm-step-num">01</span>
                <div>
                  <strong>Instant Table Context Resolution</strong>
                  <p>The URL encodes table metadata securely. The application resolves the restaurant slug and table ID immediately upon access.</p>
                </div>
              </div>
              <div className="sdm-step-item">
                <span className="sdm-step-num">02</span>
                <div>
                  <strong>App-Free Browser Experience</strong>
                  <p>Built with Next.js for rapid mobile rendering, guests reach the menu in seconds regardless of mobile OS or browser.</p>
                </div>
              </div>
              <div className="sdm-step-item">
                <span className="sdm-step-num">03</span>
                <div>
                  <strong>Session-Locked Orders</strong>
                  <p>Items ordered are automatically tagged with Table #4, ensuring the kitchen team routes prepared dishes to the exact seat.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION D: Mobile Customer Experience (Screenshots)
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-feature-row sdm-feature-row--reversed sdm-section" aria-labelledby="mobile-menu-heading">
          <div className="sdm-feature-row__visual sdm-dual-phones">
            <div className="sdm-phone-card">
              <div className="sdm-phone-screen">
                <Image
                  src="/projects/smart-digital-menu/customer-menu.png"
                  alt="Customer mobile menu showing Golden Fork restaurant, food categories, and dishes"
                  width={460}
                  height={1024}
                  sizes="(max-width: 767px) 90vw, 360px"
                  className="sdm-screen-img"
                />
              </div>
              <span className="sdm-phone-caption">Categorized menu browsing</span>
            </div>

            <div className="sdm-phone-card">
              <div className="sdm-phone-screen">
                <Image
                  src="/projects/smart-digital-menu/dish-order.png"
                  alt="Dish detail modal for Burrata Bruschetta with quantity counter and Add to Order action"
                  width={460}
                  height={1024}
                  sizes="(max-width: 767px) 90vw, 360px"
                  className="sdm-screen-img"
                />
              </div>
              <span className="sdm-phone-caption">Dish detail & customization modal</span>
            </div>
          </div>

          <div className="sdm-feature-row__content">
            <p className="eyebrow">Customer Mobile Interface</p>
            <h2 id="mobile-menu-heading">
              A menu designed for the <em>customer&apos;s phone.</em>
            </h2>
            <p>
              The customer interface provides an intuitive, touch-first browsing flow tailored to handheld devices. Diners can seamlessly filter dishes across categories, view item pricing and photos, inspect detailed ingredient lists, and adjust item quantities with zero lag.
            </p>
            <ul className="sdm-bullets">
              <li>
                <strong>Category Filters:</strong> One-tap navigation across Burgers, Drinks, Desserts, and Appetizers.
              </li>
              <li>
                <strong>Dish Detail Modals:</strong> Tap any item to inspect culinary descriptions, dietary notes, and real pricing.
              </li>
              <li>
                <strong>Quantity Adjustments:</strong> Inline touch counters let customers customize portions before adding to the active cart.
              </li>
              <li>
                <strong>Real-Time Cart Badge:</strong> A floating cart counter maintains table order state continuously via client state storage.
              </li>
            </ul>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION E: Cart & Chapa Checkout Workflow
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-feature-row sdm-section" aria-labelledby="chapa-heading">
          <div className="sdm-feature-row__visual">
            <div className="sdm-phone-card sdm-phone-card--single">
              <div className="sdm-phone-screen">
                <Image
                  src="/projects/smart-digital-menu/chapa-checkout.png"
                  alt="Chapa Test Mode checkout screen showing 32.80 ETB total, Telebirr, CBE Birr, and card options"
                  width={460}
                  height={1024}
                  sizes="(max-width: 767px) 90vw, 380px"
                  className="sdm-screen-img"
                />
              </div>
              <span className="sdm-phone-caption">Chapa Checkout Flow (Test Mode Integration)</span>
            </div>
          </div>

          <div className="sdm-feature-row__content">
            <p className="eyebrow">Checkout & Payment Integration</p>
            <h2 id="chapa-heading">
              Friction-free checkout and <em>digital payment choices.</em>
            </h2>
            <p>
              Once diners finish reviewing their order summary, the application transitions to the checkout flow. Guests can verify their table items, check billing subtotals, and select their preferred digital payment gateway.
            </p>
            <div className="sdm-callout-card">
              <div className="sdm-callout-badge">
                <span className="sdm-amber-dot" aria-hidden="true"></span>
                <span>Verified Test Mode Status</span>
              </div>
              <p className="sdm-callout-text">
                The Chapa payment gateway integration has been verified in <strong>Chapa Test Mode</strong>. The flow supports Ethiopian payment options including <strong>Telebirr</strong>, <strong>CBE Birr</strong>, <strong>Awash Bank</strong>, and bank cards, handling transaction handshakes and webhook callbacks.
              </p>
              <p className="sdm-callout-note">
                Note: In keeping with authentic engineering standards, this feature is documented truthfully as a sandbox integration rather than claiming live production payment processing.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION F: Restaurant Management Dashboard
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-dashboard-section sdm-section" aria-labelledby="dashboard-heading">
          <div className="sdm-section-intro">
            <p className="eyebrow">Operations & Kitchen Dispatch</p>
            <h2 id="dashboard-heading">
              One dashboard for <em>restaurant operations.</em>
            </h2>
            <p>
              Behind the guest experience lies a comprehensive operations center built for restaurant managers, waitstaff, and kitchen cooks. The dark-themed interface prioritizes instant readability in busy kitchen environments.
            </p>
          </div>

          <div className="sdm-dashboard-preview">
            <div className="sdm-browser-frame">
              <div className="sdm-browser-bar">
                <div className="sdm-browser-dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="sdm-browser-title">Smart Digital Menu — Kitchen Dispatch & Live Orders</div>
                <span className="sdm-browser-tag">Staff Portal</span>
              </div>
              <div className="sdm-browser-screen">
                <Image
                  src="/projects/smart-digital-menu/admin-dashboard.png"
                  alt="Restaurant operations dashboard showing Live Orders queue, table tickets, daily revenue, and preparation status actions"
                  width={1024}
                  height={541}
                  sizes="(max-width: 767px) 100vw, 84vw"
                  className="sdm-dashboard-img"
                />
              </div>
            </div>
          </div>

          <div className="sdm-dash-highlights">
            <div className="sdm-dash-stat">
              <span className="sdm-dash-stat__num">Live Queue</span>
              <strong>Active Order Cards</strong>
              <p>Table-by-table tickets display item counts, order timestamps, and dish customizations in real time.</p>
            </div>
            <div className="sdm-dash-stat">
              <span className="sdm-dash-stat__num">4 States</span>
              <strong>Status Progression</strong>
              <p>Kitchen staff update orders through four distinct states: New → Preparing → Ready → Served.</p>
            </div>
            <div className="sdm-dash-stat">
              <span className="sdm-dash-stat__num">Metrics</span>
              <strong>Operations Insights</strong>
              <p>Live stats highlight active order volume, table turnover rate, and average prep time per station.</p>
            </div>
            <div className="sdm-dash-stat">
              <span className="sdm-dash-stat__num">Catalog</span>
              <strong>Menu Management</strong>
              <p>Easily edit dish availability, toggle out-of-stock items, and adjust prices without touching code.</p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION G: Order Tracking & Status Updates
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-tracking-section sdm-section" aria-labelledby="tracking-heading">
          <div className="sdm-section-intro">
            <p className="eyebrow">Order Lifecycle</p>
            <h2 id="tracking-heading">
              Keep customers informed <em>after ordering.</em>
            </h2>
            <p>
              After placing an order, diners don&apos;t have to wonder whether their ticket was received. When kitchen staff click status actions on the dashboard, the order progress indicator updates transparently on the customer&apos;s phone.
            </p>
          </div>

          <div className="sdm-timeline-wrapper">
            <div className="sdm-timeline-track">
              <div className="sdm-timeline-stage sdm-timeline-stage--complete">
                <div className="sdm-stage-icon">✓</div>
                <div className="sdm-stage-content">
                  <span className="sdm-stage-step">Stage 01</span>
                  <strong>Order Received</strong>
                  <p>Ticket created, bound to Table #4, and queued in the kitchen dispatch.</p>
                </div>
              </div>

              <div className="sdm-timeline-stage sdm-timeline-stage--active">
                <div className="sdm-stage-icon">
                  <span className="sdm-stage-pulse" aria-hidden="true"></span>
                  2
                </div>
                <div className="sdm-stage-content">
                  <span className="sdm-stage-step">Stage 02 — In Progress</span>
                  <strong>Kitchen Preparing</strong>
                  <p>Line cooks assemble and prepare dishes; prep timer actively counts down.</p>
                </div>
              </div>

              <div className="sdm-timeline-stage">
                <div className="sdm-stage-icon">3</div>
                <div className="sdm-stage-content">
                  <span className="sdm-stage-step">Stage 03</span>
                  <strong>Ready for Pickup</strong>
                  <p>Kitchen marks dishes plated and alerts waitstaff for immediate table service.</p>
                </div>
              </div>

              <div className="sdm-timeline-stage">
                <div className="sdm-stage-icon">4</div>
                <div className="sdm-stage-content">
                  <span className="sdm-stage-step">Stage 04</span>
                  <strong>Served to Table</strong>
                  <p>Food delivered to Table #4; dining session marked complete.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION H: Key Features Grid
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__features sdm-section" aria-labelledby="features-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow">Key Features</p>
            <h2 id="features-heading">
              The parts that make the experience <em>useful.</em>
            </h2>
          </div>
          <div className="sdm-features-grid">
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">01</span>
              <strong>QR-Based Table Access</strong>
              <p>Instant table session resolution from table QR codes without app downloads.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">02</span>
              <strong>Mobile-First Menu Browsing</strong>
              <p>Smooth categorized navigation with appetizing imagery and clear pricing.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">03</span>
              <strong>Dish Customization Modals</strong>
              <p>Inspect ingredients, descriptions, and adjust quantities with tactile touch counters.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">04</span>
              <strong>Chapa Payment Flow</strong>
              <p>Integrated checkout supporting Telebirr, CBE Birr, and card options (Test Mode verified).</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">05</span>
              <strong>Live Operations Dashboard</strong>
              <p>High-density kitchen queue displaying table tickets, timestamps, and order lists.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">06</span>
              <strong>4-Stage Order Progression</strong>
              <p>Transparent lifecycle updates: New → Preparing → Ready → Served.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">07</span>
              <strong>Menu & Category Manager</strong>
              <p>Staff tools to update dish availability, categories, and prices dynamically.</p>
            </div>
            <div className="sdm-feature-box">
              <span className="sdm-feature-num">08</span>
              <strong>Restaurant Operational Insights</strong>
              <p>Live visibility into active orders, daily revenue, table turnover, and prep speed.</p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION I: Technology & Architecture Flow
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__stack sdm-section" aria-labelledby="tech-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow">Technology & Architecture</p>
            <h2 id="tech-heading">
              Architecture chosen for <em>resilience and speed.</em>
            </h2>
          </div>

          {/* Interactive Architecture Flow Visual */}
          <div className="sdm-arch-diagram" aria-label="Smart Digital Menu system architecture diagram">
            <div className="sdm-arch-card">
              <span className="sdm-arch-tag">Client Layer</span>
              <strong>Customer Mobile Web</strong>
              <span className="sdm-arch-tech">Next.js 15 & Zustand</span>
              <p>QR scanning, menu browsing, cart state, order placement</p>
            </div>
            <div className="sdm-arch-arrow" aria-hidden="true">→</div>

            <div className="sdm-arch-card">
              <span className="sdm-arch-tag">API & Routing</span>
              <strong>Express REST API</strong>
              <span className="sdm-arch-tech">Node.js, Zod, JWT</span>
              <p>Payload validation, auth middleware, order lifecycle dispatch</p>
            </div>
            <div className="sdm-arch-arrow" aria-hidden="true">→</div>

            <div className="sdm-arch-card">
              <span className="sdm-arch-tag">Data Layer</span>
              <strong>PostgreSQL & Prisma</strong>
              <span className="sdm-arch-tech">Prisma 6.8 ORM</span>
              <p>Relational tables, categories, orders, order items, and audit logs</p>
            </div>
            <div className="sdm-arch-arrow" aria-hidden="true">→</div>

            <div className="sdm-arch-card">
              <span className="sdm-arch-tag">Staff Portal</span>
              <strong>Operations Dashboard</strong>
              <span className="sdm-arch-tech">Next.js & Tailwind CSS</span>
              <p>Live kitchen queue, preparation status toggles, catalog manager</p>
            </div>
          </div>

          <div className="case-study__stack-list sdm-stack-grid">
            {project.technologies.map((technology) => (
              <div key={technology.name}>
                <strong>{technology.name}</strong>
                <span>{technology.role}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION J: My Contribution & Engineering Decisions
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__contribution sdm-section" aria-labelledby="contrib-heading">
          <p className="eyebrow">Engineering Judgment</p>
          <div>
            <h2 id="contrib-heading">
              Building, learning, and making the decisions <em>count.</em>
            </h2>
            <p>
              I architected and implemented the end-to-end Smart Digital Menu platform across the monorepo structure. Key engineering decisions included:
            </p>
            <div className="sdm-decisions-grid">
              <div className="sdm-decision-item">
                <strong>Shared Contract Monorepo</strong>
                <p>
                  Structured the repository with <code>@sdm/shared</code>, sharing Zod validation schemas and TypeScript types between the Next.js web application and the Express API, eliminating type divergence.
                </p>
              </div>
              <div className="sdm-decision-item">
                <strong>Table-Bound Session Context</strong>
                <p>
                  Engineered table context preservation across mobile page transitions and category changes using lightweight Zustand stores, preventing cart loss if guests navigate through the menu.
                </p>
              </div>
              <div className="sdm-decision-item">
                <strong>Decoupled Payment & Preparation States</strong>
                <p>
                  Separated payment status (<code>PENDING</code>, <code>PAID</code>, <code>FAILED</code>) from kitchen prep status (<code>NEW</code>, <code>PREPARING</code>, <code>READY</code>, <code>SERVED</code>), providing the architectural flexibility to support both prepay and postpay dining workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION K: Challenges and Lessons Learned
        ───────────────────────────────────────────────────────────── */}
        <section className="sdm-lessons-section sdm-section" aria-labelledby="lessons-heading">
          <div className="case-study__section-heading">
            <p className="eyebrow">Challenges & Lessons</p>
            <h2 id="lessons-heading">
              Technical challenges tackled during <em>development.</em>
            </h2>
          </div>
          <div className="sdm-lessons-grid">
            <div className="sdm-lesson-card">
              <span className="sdm-lesson-topic">Information Density vs Mobile Touch</span>
              <p>
                A primary challenge was designing two completely distinct ergonomic experiences from one shared data model: a spacious, high-density dashboard for kitchen staff on desktop monitors alongside oversized, thumb-friendly touch targets for seated guests on varying smartphone screens.
              </p>
            </div>
            <div className="sdm-lesson-card">
              <span className="sdm-lesson-topic">Defensive Order Validation</span>
              <p>
                To prevent client-side price tampering or invalid item submissions, all order payloads pass through strict Zod schema validation on the Express API, re-verifying item IDs, live prices, and active category statuses directly against PostgreSQL before generating kitchen tickets.
              </p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION L: Closing Navigation & CTA
        ───────────────────────────────────────────────────────────── */}
        <section className="case-study__related sdm-section">
          <div className="case-study__section-heading">
            <p className="eyebrow">Keep exploring</p>
            <h2>More work from the <em>catalogue.</em></h2>
          </div>
          <div className="case-study__related-grid">
            {relatedProjects.map((related) => (
              <Link href={`/projects/${related.slug}`} className="project-card project-card--compact" key={related.slug}>
                <div className="project-card__visual">
                  {related.image ? (
                    <Image src={related.image} alt={related.imageAlt} sizes="(max-width: 767px) 100vw, 40vw" />
                  ) : (
                    <div className="project-card__placeholder">
                      <span>{related.number}</span>
                      <strong>{related.category}</strong>
                    </div>
                  )}
                  <span className="project-card__arrow" aria-hidden="true">↗</span>
                </div>
                <div className="project-card__content">
                  <h3>{related.title}</h3>
                  <p>{related.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Project Contact CTA */}
        <div className="sdm-cta-box">
          <div>
            <p className="eyebrow">Work with me</p>
            <h3>Have a product or full-stack application in mind?</h3>
            <p>I build robust web platforms, business systems, and tailored digital experiences with a focus on usability, clean code, and reliable architecture.</p>
          </div>
          <Link href="/contact" className="home-button home-button--primary">
            Get in Touch <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <nav className="case-study__prev-next" aria-label="Project navigation">
          <Link href={`/projects/${previous.slug}`}>
            <span>Previous project</span>
            <strong>← {previous.title}</strong>
          </Link>
          <Link href={`/projects/${next.slug}`}>
            <span>Next project</span>
            <strong>{next.title} →</strong>
          </Link>
        </nav>
      </div>
    </article>
  );
}
