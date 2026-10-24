import Link from "next/link";
import CapabilitiesSection from "./CapabilitiesSection";

const skillGroups = [
  {
    category: "Frontend",
    detail: "Interfaces and responsive presentation",
    items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    detail: "Server logic and application workflows",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Data and storage",
    detail: "Application data and local persistence",
    items: ["MongoDB", "PostgreSQL", "Prisma",],
  },
  {
    category: "Tools and integrations",
    detail: "Delivery workflow and connected services",
    items: ["Git", "GitHub", "Telegram API"],
  },
];

const practices = [
  ["01", "Structure", "Break requirements into clear components, routes, and responsibilities so the code stays understandable."],
  ["02", "Connect", "Choose an appropriate way for interfaces, APIs, and storage to work together around the user's task."],
  ["03", "Check", "Test responsive behavior, errors, and important flows while refining the details that affect usability."],
  ["04", "Improve", "Treat delivery as a starting point for feedback, maintenance, and useful future changes."],
];

export default function Skills() {
  return (
    <div className="skills-page">
      <header className="skills-intro">
        <div className="skills-shell">
          <p className="eyebrow">Capabilities / technical skills</p>
          <h1>Technical skills, <em>applied to real problems.</em></h1>
          <p>I build business websites and full-stack web applications using modern frontend, backend, and data technologies chosen around what the project needs.</p>
        </div>
      </header>

      {/* ── Section 1: What I can build – Sticky scroll split ── */}
      <section className="skills-section skills-capabilities">
        <div className="skills-shell">
          <div className="skills-heading">
            <p className="eyebrow">What I can build</p>
            <h2>Technology matters most when it makes the work <em>easier.</em></h2>
          </div>
        </div>
        <CapabilitiesSection />
      </section>

      {/* ── Section 2: Technical Toolkit – Typographic constellation ── */}
      <section className="skills-section skills-stack">
        <div className="skills-shell">
          <div className="skills-heading skills-heading--row">
            <div>
              <p className="eyebrow">Technical toolkit</p>
              <h2>Tools I use to turn ideas into <em>working products.</em></h2>
            </div>
            <p>These groups reflect technologies already represented in my projects, portfolio, and supporting application code.</p>
          </div>
          <div className="toolkit-grid">
            {skillGroups.map((group, gi) => (
              <div className="toolkit-col" key={group.category}>
                <div className="toolkit-col__header">
                  <span className="toolkit-col__index">0{gi + 1}</span>
                  <h3 className="toolkit-col__name">{group.category}</h3>
                  <p className="toolkit-col__detail">{group.detail}</p>
                </div>
                <ul className="toolkit-col__items">
                  {group.items.map((item) => (
                    <li key={item} className="toolkit-col__item">
                      <span className="toolkit-col__dot" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills in practice ── */}
      <section className="skills-section skills-projects">
        <div className="skills-shell">
          <div className="skills-heading">
            <p className="eyebrow">Skills in practice</p>
            <h2>Real projects are where the pieces <em>come together.</em></h2>
          </div>
          <div className="skills-project-list">
            <Link href="/projects/smart-digital-menu">
              <span>01</span>
              <div>
                <h3>Smart Digital Menu</h3>
                <p>Next.js, TypeScript, Tailwind CSS, Express.js, and PostgreSQL with Prisma applied to a QR restaurant ordering and operations dashboard.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href="/projects/inventory-management-system">
              <span>02</span>
              <div>
                <h3>Inventory Management System</h3>
                <p>React and IndexedDB used for a responsive interface with browser-based local data storage.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href="/projects/astu-complaint-tracker">
              <span>03</span>
              <div>
                <h3>ASTU Complaint Tracker</h3>
                <p>React, Node.js, Express, and MongoDB connected around complaint submission, tracking, and management workflows.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
            <Link href="/projects/appointment-booking-system">
              <span>04</span>
              <div>
                <h3>Appointment Booking System</h3>
                <p>React and Tailwind CSS used to shape a focused experience for scheduling service appointments.</p>
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 3: Engineering Approach – Manifesto strip ── */}
      <section className="skills-section skills-approach">
        <div className="skills-shell">
          <div className="skills-heading">
            <p className="eyebrow">Engineering approach</p>
            <h2>Build clearly. Test carefully. <em>Keep improving.</em></h2>
          </div>
          <div className="manifesto-strip">
            {practices.map(([number, title, description]) => (
              <div className="manifesto-step" key={number}>
                <span className="manifesto-step__ghost" aria-hidden="true">{number}</span>
                <div className="manifesto-step__content">
                  <h3 className="manifesto-step__title">{title}</h3>
                  <p className="manifesto-step__desc">{description}</p>
                </div>
                <span className="manifesto-step__bar" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-closing">
        <div className="skills-shell">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let&apos;s put the right skills to <em>work.</em></h2>
          <div className="skills-actions">
            <Link href="/contact" className="home-button home-button--primary">
              Let&apos;s Discuss Your Project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/projects" className="home-button home-button--secondary">
              Explore My Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
