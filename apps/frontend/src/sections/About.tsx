import Image from "next/image";
import Link from "next/link";
import aboutImage from "@/assets/kenan.jpg";

const journey = [
  ["01", "Learn", "I started by learning how the web works and building a strong foundation in frontend development."],
  ["02", "Build", "Hands-on projects helped me turn that foundation into responsive interfaces and useful product experiences."],
  ["03", "Go deeper", "I expanded into APIs, databases, authentication, and the backend systems that make products reliable."],
  ["04", "Keep improving", "Today I bring frontend and backend thinking together while preparing to deliver thoughtful solutions for clients."],
];

const process = [
  ["01", "Understand", "Identify the goals, users, and practical problem behind the request."],
  ["02", "Plan", "Define the right features, priorities, and technical approach before building."],
  ["03", "Build", "Develop a responsive interface and the functionality it needs to work well."],
  ["04", "Test", "Check usability, responsiveness, reliability, and the details that are easy to miss."],
  ["05", "Deploy", "Prepare the application for release and the improvements that come next."],
];

const principles = [
  "Clear communication from the first conversation to delivery.",
  "Maintainable code that remains understandable as a project grows.",
  "Responsive and accessible experiences for real people and devices.",
  "Practical problem-solving, careful testing, and continuous improvement.",
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <div className="about-shell about-intro__grid">
          <div className="about-portrait">
            <div className="about-portrait__frame">
              <Image src={aboutImage} alt="Kenan Worku" priority sizes="(max-width: 767px) 88vw, 38vw" />
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
            <Link href="/contact" className="text-link">Let&apos;s work together <span aria-hidden>-&gt;</span></Link>
          </div>
        </div>
      </section>

      <section className="about-section about-journey">
        <div className="about-shell">
          <div className="about-heading">
            <p className="eyebrow">The journey so far</p>
            <h2>From learning the fundamentals to <em>building useful things.</em></h2>
          </div>
          <div className="about-timeline">
            {journey.map(([number, title, description]) => (
              <article className="about-timeline__item" key={number}>
                <span className="about-index">{number}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-process">
        <div className="about-shell">
          <div className="about-heading about-heading--row">
            <div><p className="eyebrow">How I work</p><h2>A clear process keeps good work <em>moving.</em></h2></div>
            <p className="about-heading__note">The details change from project to project, but the way I approach the work stays grounded and collaborative.</p>
          </div>
          <ol className="about-process-list">
            {process.map(([number, title, description]) => (
              <li key={number}><span className="about-index">{number}</span><h3>{title}</h3><p>{description}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section about-credibility">
        <div className="about-shell about-credibility__grid">
          <div className="about-heading"><p className="eyebrow">Practical experience</p><h2>Learning by <em>making.</em></h2></div>
          <div className="about-credibility__copy">
            <p>I&apos;ve developed projects across business websites, course platforms, online stores, ordering flows, and structured management systems. Each one has helped me practice turning a requirement into an interface and a working end-to-end experience.</p>
            <div className="about-evidence">
              <Link href="/projects" className="about-evidence__item"><span>01</span><strong>Explore the projects</strong><i aria-hidden>-&gt;</i></Link>
              <a href="https://astu-complaint-tracker.vercel.app/" target="_blank" rel="noreferrer" className="about-evidence__item"><span>02</span><strong>See a live full-stack system</strong><i aria-hidden>-&gt;</i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-principles">
        <div className="about-shell about-principles__grid">
          <div className="about-heading"><p className="eyebrow">Working principles</p><h2>Good work should feel <em>thoughtful.</em></h2></div>
          <ul>{principles.map((principle) => <li key={principle}><span aria-hidden>+</span>{principle}</li>)}</ul>
        </div>
      </section>

      <section className="about-closing">
        <div className="about-shell about-closing__inner">
          <p className="eyebrow">Have something in mind?</p>
          <h2>Let&apos;s make your next idea <em>useful.</em></h2>
          <div className="about-actions">
            <Link href="/contact" className="home-button home-button--gold">Let&apos;s Discuss Your Project <span aria-hidden>-&gt;</span></Link>
            <Link href="/projects" className="home-button home-button--quiet">Explore My Work <span aria-hidden>-&gt;</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
