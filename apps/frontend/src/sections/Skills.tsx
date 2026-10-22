import Link from "next/link";

const capabilities = [
  ["01", "Business websites", "Clear, responsive websites that help a business present its services and guide visitors toward action.", "/projects/appointment-booking-system"],
  ["02", "Responsive interfaces", "Thoughtful frontend experiences that stay readable, usable, and focused across screen sizes.", "/projects"],
  ["03", "Full-stack applications", "Connected web applications that bring interface, server logic, and stored data into one useful workflow.", "/projects/astu-complaint-tracker"],
  ["04", "REST API development", "Backend routes and integrations that allow interfaces and services to exchange the data they need.", "/projects/astu-complaint-tracker"],
  ["05", "Database-backed systems", "Practical data workflows using persistent or browser-based storage suited to the project.", "/projects/inventory-management-system"],
  ["06", "Integrations and automation", "Useful connections such as Telegram order notifications that reduce manual follow-up.", "/projects/lemi-fashion"],
];

const capIcons = [
  /* 01 – monitor */
  <svg key="01" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  /* 02 – mobile/responsive */
  <svg key="02" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 22v-4h6v4M9 6h6M9 10h6M9 14h4"/></svg>,
  /* 03 – layers/stack */
  <svg key="03" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3L2 9l10 6 10-6-10-6z"/><path d="M2 15l10 6 10-6"/><path d="M2 12l10 6 10-6"/></svg>,
  /* 04 – API/arrows */
  <svg key="04" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M14 6l6 6-6 6"/></svg>,
  /* 05 – database */
  <svg key="05" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"/><path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/></svg>,
  /* 06 – link/integration */
  <svg key="06" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>,
];

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
    items: ["MongoDB", "IndexedDB"],
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

      {/* ── Section 1: What I can build – Editorial showcase list ── */}
      <section className="skills-section skills-capabilities">
        <div className="skills-shell">
          <div className="skills-heading">
            <p className="eyebrow">What I can build</p>
            <h2>Technology matters most when it makes the work <em>easier.</em></h2>
          </div>
          <ul className="cap-showcase">
            {capabilities.map(([number, title, description, href], idx) => (
              <li key={number} className="cap-showcase__item">
                <Link href={href} className="cap-showcase__link">
                  <span className="cap-showcase__num" aria-hidden="true">{number}</span>
                  <span className="cap-showcase__icon">{capIcons[idx]}</span>
                  <div className="cap-showcase__body">
                    <h3 className="cap-showcase__title">{title}</h3>
                    <p className="cap-showcase__desc">{description}</p>
                  </div>
                  <span className="cap-showcase__arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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
            <Link href="/projects/lemi-fashion">
              <span>01</span>
              <div>
                <h3>Lemi Fashion</h3>
                <p>HTML, CSS, JavaScript, Node.js, and Telegram API applied to a fashion store and order-notification workflow.</p>
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
