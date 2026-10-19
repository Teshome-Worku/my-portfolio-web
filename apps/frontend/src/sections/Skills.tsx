import Link from "next/link";

const capabilities = [
  ["01", "Business websites", "Clear, responsive websites that help a business present its services and guide visitors toward action.", "/projects/appointment-booking-system"],
  ["02", "Responsive interfaces", "Thoughtful frontend experiences that stay readable, usable, and focused across screen sizes.", "/projects"],
  ["03", "Full-stack applications", "Connected web applications that bring interface, server logic, and stored data into one useful workflow.", "/projects/astu-complaint-tracker"],
  ["04", "REST API development", "Backend routes and integrations that allow interfaces and services to exchange the data they need.", "/projects/astu-complaint-tracker"],
  ["05", "Database-backed systems", "Practical data workflows using persistent or browser-based storage suited to the project.", "/projects/inventory-management-system"],
  ["06", "Integrations and automation", "Useful connections such as Telegram order notifications that reduce manual follow-up.", "/projects/lemi-fashion"],
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
  ["02", "Connect", "Choose an appropriate way for interfaces, APIs, and storage to work together around the user’s task."],
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

      <section className="skills-section skills-capabilities">
        <div className="skills-shell">
          <div className="skills-heading">
            <p className="eyebrow">What I can build</p>
            <h2>Technology matters most when it makes the work <em>easier.</em></h2>
          </div>
          <div className="capability-list">
            {capabilities.map(([number, title, description, href]) => (
              <Link href={href} className="capability-item" key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><i aria-hidden>↗</i>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section skills-stack">
        <div className="skills-shell">
          <div className="skills-heading skills-heading--row">
            <div><p className="eyebrow">Technical toolkit</p><h2>Tools I use to turn ideas into <em>working products.</em></h2></div>
            <p>These groups reflect technologies already represented in my projects, portfolio, and supporting application code.</p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.category}>
                <h3>{group.category}</h3><p>{group.detail}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section skills-projects">
        <div className="skills-shell">
          <div className="skills-heading"><p className="eyebrow">Skills in practice</p><h2>Real projects are where the pieces <em>come together.</em></h2></div>
          <div className="skills-project-list">
            <Link href="/projects/lemi-fashion"><span>01</span><div><h3>Lemi Fashion</h3><p>HTML, CSS, JavaScript, Node.js, and Telegram API applied to a fashion store and order-notification workflow.</p></div><i aria-hidden>↗</i></Link>
            <Link href="/projects/inventory-management-system"><span>02</span><div><h3>Inventory Management System</h3><p>React and IndexedDB used for a responsive interface with browser-based local data storage.</p></div><i aria-hidden>↗</i></Link>
            <Link href="/projects/astu-complaint-tracker"><span>03</span><div><h3>ASTU Complaint Tracker</h3><p>React, Node.js, Express, and MongoDB connected around complaint submission, tracking, and management workflows.</p></div><i aria-hidden>↗</i></Link>
            <Link href="/projects/appointment-booking-system"><span>04</span><div><h3>Appointment Booking System</h3><p>React and Tailwind CSS used to shape a focused experience for scheduling service appointments.</p></div><i aria-hidden>↗</i></Link>
          </div>
        </div>
      </section>

      <section className="skills-section skills-approach">
        <div className="skills-shell">
          <div className="skills-heading"><p className="eyebrow">Engineering approach</p><h2>Build clearly. Test carefully. <em>Keep improving.</em></h2></div>
          <ol className="practice-list">{practices.map(([number, title, description]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        </div>
      </section>

      <section className="skills-closing">
        <div className="skills-shell"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s put the right skills to <em>work.</em></h2><div className="skills-actions"><Link href="/contact" className="home-button home-button--gold">Let&apos;s Discuss Your Project <span aria-hidden>-&gt;</span></Link><Link href="/projects" className="home-button home-button--quiet">Explore My Work <span aria-hidden>-&gt;</span></Link></div></div>
      </section>
    </div>
  );
}
