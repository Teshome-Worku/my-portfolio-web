import Image from "next/image";
import Link from "next/link";
import portraitImage from "@/assets/portrait.jpg";
import JourneyWave from "@/components/JourneyWave";
import ProcessBento from "@/components/ProcessBento";
import AnimatedSection, { AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/AnimatedSection";

// High-performance, clean inline SVG icons
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
          <AnimatedSection variant="scaleUp" className="about-portrait">
            <div className="about-portrait__frame">
              <Image
                src={portraitImage}
                alt="Kenan Worku - Full-Stack Developer"
                priority
                sizes="(max-width: 767px) 90vw, 500px"
                className="about-portrait__img"
              />
            </div>
            <p className="about-portrait__caption">Kenan Worku / Full-Stack Developer</p>
          </AnimatedSection>
          <AnimatedSection variant="fadeInRight" className="about-intro__copy">
            <p className="eyebrow">A little more about me</p>
            <h1>Building with purpose, <em>not just pixels.</em></h1>
            <p className="about-lede">
              I&apos;m Kenan Worku, a Full-Stack Developer who builds modern business websites and practical full-stack applications.
            </p>
            <p className="about-body">
              My focus is on making digital products usable, reliable, and clear. I enjoy taking a real problem, understanding the people behind it, and shaping a solution that feels considered from the first interaction to the final detail.
            </p>
            <div className="about-intro__actions">
              <Link href="/contact#contact-form" className="home-button home-button--primary">
                Let&apos;s work together <span aria-hidden="true">→</span>
              </Link>
              <Link href="/projects" className="home-button home-button--secondary">
                View Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 2: The Journey So Far - Vertical Engineering Stepper */}
      <section className="about-section about-journey">
        <div className="about-shell">
          <AnimatedSection variant="fadeInUp" className="about-heading">
            <p className="eyebrow">The journey so far</p>
            <h2>From learning the fundamentals to <em>building useful things.</em></h2>
            <p className="about-heading__sub">
              A continuous path of engineering curiosity, hands-on iteration, and delivering scalable solutions.
            </p>
          </AnimatedSection>

          {/* Undulating Engineering Waveform Matrix */}
          <JourneyWave />
        </div>
      </section>

      {/* Section 3: How I Work - Connected Engineering Methodology Flow */}
      <section className="about-section about-process">
        <div className="about-shell">
          <AnimatedSection variant="fadeInUp" className="about-heading about-heading--row">
            <div>
              <p className="eyebrow">How I work</p>
              <h2>A clear process keeps good work <em>moving.</em></h2>
            </div>
            <p className="about-heading__note">
              The details change from project to project, but the way I approach the work stays grounded, structured, and collaborative.
            </p>
          </AnimatedSection>

          {/* Interactive Bento Pipeline Matrix */}
          <ProcessBento />
        </div>
      </section>

      {/* Section 4: Practical Experience - Evidence & Live Proof Cards */}
      <section className="about-section about-credibility">
        <div className="about-shell about-credibility__grid">
          <AnimatedSection variant="fadeInLeft" className="about-heading">
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
          </AnimatedSection>

          <AnimatedSection variant="fadeInRight" className="about-credibility__cards">
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
          </AnimatedSection>
        </div>
      </section>

      {/* Section 5: Working Principles - 2x2 Elevated Principle Grid */}
      <section className="about-section about-principles">
        <div className="about-shell">
          <AnimatedSection variant="fadeInUp" className="about-heading about-heading--center">
            <p className="eyebrow">Working principles</p>
            <h2>Good work should feel <em>thoughtful.</em></h2>
            <p className="about-heading__sub">
              Core engineering tenets that guide my work from initial discovery to deployment.
            </p>
          </AnimatedSection>

          <AnimatedStaggerContainer className="about-principles-grid">
            {workingPrinciples.map((item) => (
              <AnimatedStaggerItem variant="staggerCard" className="about-principle-card" key={item.number}>
                <div className="about-principle-card__top">
                  <div className="about-principle-card__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <span className="about-principle-card__tag">{item.tag}</span>
                </div>
                <h3 className="about-principle-card__title">{item.title}</h3>
                <p className="about-principle-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <p className="about-principle-card__detail">{item.detail}</p>
              </AnimatedStaggerItem>
            ))}
          </AnimatedStaggerContainer>
        </div>
      </section>

      {/* Bottom Closing CTA Section */}
      <section className="about-closing">
        <AnimatedSection variant="scaleUp" className="about-shell about-closing__inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make your next idea <em>useful.</em></h2>
          <div className="about-actions">
            <Link href="/contact#contact-form" className="home-button home-button--primary">
              Let&apos;s Discuss Your Project <span aria-hidden="true">→</span>
            </Link>
            <Link href="/projects" className="home-button home-button--secondary">
              Explore My Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
