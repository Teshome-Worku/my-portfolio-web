import Image from "next/image";
import Link from "next/link";
import kenanImage from "@/assets/kenan.jpg";
import astuTracker from "@/assets/astu-tracker.png";
import mamiFood from "@/assets/mami-food.png";

const GlobeLayoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

const LayersStackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const CpuWorkflowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" rx="1" />
    <path d="M15 2v2" />
    <path d="M15 20v2" />
    <path d="M2 15h2" />
    <path d="M2 9h2" />
    <path d="M20 15h2" />
    <path d="M20 9h2" />
    <path d="M9 2v2" />
    <path d="M9 20v2" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Business websites",
    detail: "Clear, responsive websites made to present a business with confidence and turn visitors into clients.",
    icon: <GlobeLayoutIcon />,
    features: ["Responsive Design", "Fast & SEO-Ready", "Brand Showcase"],
  },
  {
    number: "02",
    title: "Full-stack applications",
    detail: "Practical web products with thoughtful interfaces, secure authentication, and reliable database workflows.",
    icon: <LayersStackIcon />,
    features: ["REST APIs & Auth", "Database Workflows", "State Architecture"],
  },
  {
    number: "03",
    title: "Custom digital solutions",
    detail: "Focused builds shaped around the way your users and team actually work, including alerts and automated flows.",
    icon: <CpuWorkflowIcon />,
    features: ["Telegram Alerts", "Workflow Automation", "Tailored Integrations"],
  },
];

const process = ["Understand", "Plan", "Build", "Deliver"];

const GitHubSmallIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInSmallIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const MailSmallIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function Hero() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-shell">
          <div className="home-hero__copy home-reveal">
            {/* Circular Profile Avatar with Ember Ring */}
            <div className="home-hero__avatar-wrap">
              <div className="home-hero__avatar">
                <Image
                  src={kenanImage}
                  alt="Kenan Worku"
                  width={104}
                  height={104}
                  priority
                />
              </div>
            </div>

            <p className="eyebrow">Hi, I&apos;m Kenan Worku</p>
            <h2 className="home-role">Full-Stack Developer</h2>
            <h1>
              I build modern websites and full-stack applications for <em>real business problems.</em>
            </h1>
            <p className="home-lede">
              I design and build polished web experiences that make ideas easier to use, manage, and grow.
            </p>

            <div className="home-actions">
              <Link href="/projects" className="home-button home-button--primary">
                View Projects
              </Link>
              <Link href="/contact" className="home-button home-button--secondary">
                Contact Me
              </Link>
            </div>

            {/* Quick Social Links */}
            <div className="home-socials">
              <Link
                href="https://github.com/Teshome-Worku"
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
                aria-label="GitHub profile"
              >
                <GitHubSmallIcon />
                <span>GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/teshome-worku-017834392"
                target="_blank"
                rel="noreferrer"
                className="home-social-link"
                aria-label="LinkedIn profile"
              >
                <LinkedInSmallIcon />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="mailto:teshomeworku96@gmail.com"
                className="home-social-link"
                aria-label="Direct Email"
              >
                <MailSmallIcon />
                <span>Email</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Elevated Cards */}
      <section className="home-section home-services">
        <div className="home-shell">
          <div className="section-heading home-reveal">
            <p className="eyebrow">What I can help with</p>
            <h2>Useful digital work, <em>made with care.</em></h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card home-reveal" key={service.number}>
                <div className="service-card__top">
                  <div className="service-card__icon">
                    {service.icon}
                  </div>
                  <span className="service-card__number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <div className="service-card__features">
                  {service.features.map((feature) => (
                    <span className="service-card__tag" key={feature}>
                      {feature}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="home-section home-work">
        <div className="home-shell">
          <div className="section-heading section-heading--row home-reveal">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Projects built to <em>do the work.</em></h2>
            </div>
            <Link href="/projects" className="text-link">
              Explore all projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="featured-work">
            <article className="featured-project home-reveal">
              <div className="featured-project__image">
                <Image
                  src={astuTracker}
                  alt="ASTU complaint tracker interface"
                  sizes="(max-width: 800px) 100vw, 56vw"
                />
                <span>01 / Full-stack system</span>
              </div>
              <div className="featured-project__content">
                <p className="eyebrow">Smart Complaint Management System</p>
                <h3>A structured way to submit, track, and manage complaints.</h3>
                <p>
                  Built around clear workflows and status updates, this project demonstrates a practical application of React, Node.js, Express, and MongoDB.
                </p>
                <Link
                  href="https://astu-complaint-tracker.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Visit live demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="featured-project featured-project--reverse home-reveal">
              <div className="featured-project__image">
                <Image
                  src={mamiFood}
                  alt="Mami Food ordering platform interface"
                  sizes="(max-width: 800px) 100vw, 56vw"
                />
                <span>02 / Ordering platform</span>
              </div>
              <div className="featured-project__content">
                <p className="eyebrow">Mami Food</p>
                <h3>An ordering experience designed for everyday use.</h3>
                <p>
                  A full-stack food ordering platform where people can place orders online and follow them in real time.
                </p>
                <Link
                  href="https://mamifood.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  Visit live demo <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="home-section home-process">
        <div className="home-shell">
          <div className="section-heading home-reveal">
            <p className="eyebrow">How I work</p>
            <h2>Simple process. <em>Clear progress.</em></h2>
          </div>
          <ol className="process-list">
            {process.map((step, index) => (
              <li className="home-reveal" key={step}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
                <i aria-hidden="true">↓</i>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="home-closing">
        <div className="home-shell home-closing__inner home-reveal">
          <p className="eyebrow">Have a project in mind?</p>
          <h2>Let&apos;s make the next step <em>useful.</em></h2>
          <p>
            I take a practical, project-based approach: understand the requirement, make the right plan, and build a clear digital experience around it.
          </p>
          <Link href="/contact" className="home-button home-button--primary">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
