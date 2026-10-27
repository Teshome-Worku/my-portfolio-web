import Image from "next/image";
import Link from "next/link";
import portraitImage from "@/assets/portrait.jpg";

// High-performance, clean inline SVG icons
const CompassIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const BlueprintIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const RocketIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const MessageChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const TerminalIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

const DevicesLayoutIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const TargetCheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const journeySteps = [
  {
    step: "01",
    phase: "Learn",
    title: "Web Fundamentals & Frontend Foundations",
    description: "I started by understanding how the web works under the hood, building a solid foundation in responsive HTML, CSS architecture, and modern JavaScript.",
    skills: ["HTML5 / Semantic Web", "Modern CSS & Flexbox/Grid", "JavaScript (ES6+)"],
  },
  {
    step: "02",
    phase: "Build",
    title: "Interactive Interfaces & Component Architecture",
    description: "Hands-on projects helped me turn that foundation into responsive interfaces, reusable component libraries, and clean client experiences.",
    skills: ["React.js", "Next.js App Router", "Tailwind CSS", "State Management"],
  },
  {
    step: "03",
    phase: "Go deeper",
    title: "APIs, Databases & Backend Systems",
    description: "I expanded into RESTful APIs, relational & document databases, authentication flows, and the backend systems that make products secure and reliable.",
    skills: ["Node.js / Express", "MongoDB & Mongoose", "JWT Auth", "Telegram Alerts"],
  },
  {
    step: "04",
    phase: "Keep improving",
    title: "Full-Stack Craft & Real Business Solutions",
    description: "Today I bring frontend refinement and backend reliability together, shipping thoughtful, production-grade solutions tailored to client needs.",
    skills: ["Full-Stack Architecture", "End-to-End Delivery", "Performance & SEO"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Identify the practical goals, core users, and technical requirements before writing a single line of code.",
    deliverable: "Scope & Discovery",
    icon: <CompassIcon />,
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the right feature priorities, system architecture, database models, and sprint milestones.",
    deliverable: "Architecture & Schemas",
    icon: <BlueprintIcon />,
  },
  {
    number: "03",
    title: "Build",
    description: "Develop responsive, accessible frontend interfaces and secure backend APIs with clean, maintainable code.",
    deliverable: "Clean Development",
    icon: <CodeIcon />,
  },
  {
    number: "04",
    title: "Test",
    description: "Check usability across devices, responsiveness, edge-case reliability, and performance optimizations.",
    deliverable: "QA & Performance",
    icon: <ShieldCheckIcon />,
  },
  {
    number: "05",
    title: "Deploy",
    description: "Prepare the application for release, configure secure cloud hosting, and support post-launch improvements.",
    deliverable: "Launch & Support",
    icon: <RocketIcon />,
  },
];

const workingPrinciples = [
  {
    number: "01",
    title: "Clear Communication",
    quote: "Clear communication from the first conversation to delivery.",
    detail: "Transparent sprint updates, clear expectations, and regular check-ins ensure no surprises.",
    tag: "Collaboration",
    icon: <MessageChatIcon />,
  },
  {
    number: "02",
    title: "Maintainable Code",
    quote: "Maintainable code that remains understandable as a project grows.",
    detail: "Modular component structures, sensible naming conventions, and clean architecture make future scaling simple.",
    tag: "Architecture",
    icon: <TerminalIcon />,
  },
  {
    number: "03",
    title: "Responsive & Accessible",
    quote: "Responsive and accessible experiences for real people and devices.",
    detail: "Fast load times, smooth touch targets, and thoughtful typography that works across phones, tablets, and laptops.",
    tag: "Usability",
    icon: <DevicesLayoutIcon />,
  },
  {
    number: "04",
    title: "Practical Problem-Solving",
    quote: "Practical problem-solving, careful testing, and continuous improvement.",
    detail: "Focusing on solutions that deliver tangible business value rather than overcomplicating tech stacks.",
    tag: "Reliability",
    icon: <TargetCheckIcon />,
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Intro Hero Section */}
      <section className="about-intro">
        <div className="about-shell about-intro__grid">
          <div className="about-portrait">
            <div className="about-portrait__frame">
              <Image
                src={portraitImage}
                alt="Kenan Worku - Full-Stack Developer"
                priority
                sizes="(max-width: 767px) 85vw, 480px"
                className="about-portrait__img"
              />
            </div>
            <p className="about-portrait__caption">Kenan Worku / Full-Stack Developer</p>
          </div>
          <div className="about-intro__copy">
            <p className="eyebrow">A little more about me</p>
            <h1>Building with purpose, <em>not just pixels.</em></h1>
            <p className="about-lede">
              I&apos;m Kenan Worku, a Full-Stack Developer who builds modern business websites and practical full-stack applications.
            </p>
            <p className="about-body">
              My focus is on making digital products usable, reliable, and clear. I enjoy taking a real problem, understanding the people behind it, and shaping a solution that feels considered from the first interaction to the final detail.
            </p>
            <div className="about-intro__actions">
              <Link href="/contact" className="home-button home-button--primary">
                Let&apos;s work together <span aria-hidden="true">→</span>
              </Link>
              <Link href="/projects" className="home-button home-button--secondary">
                View Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Journey So Far - Vertical Engineering Stepper */}
      <section className="about-section about-journey">
        <div className="about-shell">
          <div className="about-heading">
            <p className="eyebrow">The journey so far</p>
            <h2>From learning the fundamentals to <em>building useful things.</em></h2>
            <p className="about-heading__sub">
              A continuous path of engineering curiosity, hands-on iteration, and delivering scalable solutions.
            </p>
          </div>

          <div className="about-stepper">
            {journeySteps.map((step) => (
              <div className="about-stepper__item" key={step.step}>
                <div className="about-stepper__node" aria-hidden="true">
                  <span>{step.step}</span>
                </div>
                <div className="about-stepper__card">
                  <div className="about-stepper__header">
                    <span className="about-stepper__phase">{step.phase}</span>
                    <span className="about-stepper__number">STAGE {step.step}</span>
                  </div>
                  <h3 className="about-stepper__title">{step.title}</h3>
                  <p className="about-stepper__desc">{step.description}</p>
                  <div className="about-stepper__skills">
                    {step.skills.map((skill) => (
                      <span className="about-stepper__skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How I Work - Connected Engineering Methodology Flow */}
      <section className="about-section about-process">
        <div className="about-shell">
          <div className="about-heading about-heading--row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>A clear process keeps good work <em>moving.</em></h2>
            </div>
            <p className="about-heading__note">
              The details change from project to project, but the way I approach the work stays grounded, structured, and collaborative.
            </p>
          </div>

          <div className="about-process-grid">
            {processSteps.map((step) => (
              <div className="about-process-card" key={step.number}>
                <div className="about-process-card__top">
                  <span className="about-process-card__index">{step.number}</span>
                  <div className="about-process-card__icon" aria-hidden="true">
                    {step.icon}
                  </div>
                </div>
                <h3 className="about-process-card__title">{step.title}</h3>
                <p className="about-process-card__desc">{step.description}</p>
                <div className="about-process-card__deliverable">
                  <span>{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Practical Experience - Evidence & Live Proof Cards */}
      <section className="about-section about-credibility">
        <div className="about-shell about-credibility__grid">
          <div className="about-heading">
            <p className="eyebrow">Practical experience</p>
            <h2>Learning by <em>making.</em></h2>
            <p className="about-credibility__copy-lead">
              I&apos;ve developed projects across business websites, course platforms, online stores, ordering flows, and structured management systems. Each one has helped me practice turning a requirement into an interface and a working end-to-end experience.
            </p>

            <div className="about-credibility__metrics">
              <div className="about-metric-pill">
                <strong>4+</strong>
                <span>Production Builds</span>
              </div>
              <div className="about-metric-pill">
                <strong>100%</strong>
                <span>Mobile Responsive</span>
              </div>
              <div className="about-metric-pill">
                <strong>Full-Stack</strong>
                <span>Frontend to Cloud</span>
              </div>
            </div>
          </div>

          <div className="about-credibility__cards">
            <Link href="/projects" className="about-proof-card group">
              <div className="about-proof-card__header">
                <span className="about-proof-card__index">01</span>
                <span className="about-proof-card__tag">PROJECT PORTFOLIO</span>
              </div>
              <h3>Explore Completed Projects</h3>
              <p>Explore production client sites, design systems, and full-stack case studies with live code.</p>
              <div className="about-proof-card__tech">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>MongoDB</span>
              </div>
              <div className="about-proof-card__cta">
                <span>Browse Catalogue</span>
                <span className="about-proof-card__arrow" aria-hidden="true">→</span>
              </div>
            </Link>

            <Link
              href="/projects/smart-digital-menu"
              className="about-proof-card about-proof-card--featured group"
            >
              <div className="about-proof-card__header">
                <span className="about-proof-card__index">02</span>
                <span className="about-proof-card__status">
                  <span className="about-proof-card__status-dot" aria-hidden="true" />
                  Featured Platform
                </span>
              </div>
              <h3>Smart Digital Menu</h3>
              <p>A QR-driven restaurant ordering platform with customer mobile ordering and real-time operations dashboard.</p>
              <div className="about-proof-card__tech">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Express</span>
                <span>PostgreSQL</span>
              </div>
              <div className="about-proof-card__cta">
                <span>Explore Case Study</span>
                <span className="about-proof-card__arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Working Principles - 2x2 Elevated Principle Grid */}
      <section className="about-section about-principles">
        <div className="about-shell">
          <div className="about-heading about-heading--center">
            <p className="eyebrow">Working principles</p>
            <h2>Good work should feel <em>thoughtful.</em></h2>
            <p className="about-heading__sub">
              Core engineering tenets that guide my work from initial discovery to deployment.
            </p>
          </div>

          <div className="about-principles-grid">
            {workingPrinciples.map((item) => (
              <div className="about-principle-card" key={item.number}>
                <div className="about-principle-card__top">
                  <div className="about-principle-card__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="about-principle-card__tag">{item.tag}</span>
                </div>
                <h3 className="about-principle-card__title">{item.title}</h3>
                <p className="about-principle-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="about-principle-card__detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Closing CTA Section */}
      <section className="about-closing">
        <div className="about-shell about-closing__inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make your next idea <em>useful.</em></h2>
          <div className="about-actions">
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
