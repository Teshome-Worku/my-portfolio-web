import Image from "next/image";
import Link from "next/link";
import astuTracker from "@/assets/astu-tracker.png";
import mamiFood from "@/assets/mami-food.png";

const services = [
  ["01", "Business websites", "Clear, responsive websites made to present a business with confidence."],
  ["02", "Full-stack applications", "Practical web products with thoughtful interfaces and reliable workflows."],
  ["03", "Custom digital solutions", "Focused builds shaped around the way your users and team actually work."],
];

const process = ["Understand", "Plan", "Build", "Deliver"];

export default function Hero() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__line" aria-hidden />
        <div className="home-shell home-hero__grid">
          <div className="home-hero__copy home-reveal">
            <p className="eyebrow">Hi, I&apos;m Kenan Worku.</p>
            <p className="home-role">Full-Stack Developer</p>
            <h1>I build modern websites and full-stack applications for <em>real business problems.</em></h1>
            <p className="home-lede">I design and build polished web experiences that make ideas easier to use, manage, and grow.</p>
            <div className="home-actions">
              <Link href="/projects" className="home-button home-button--gold">View My Work <span aria-hidden>-&gt;</span></Link>
              <Link href="/contact" className="home-button home-button--quiet">Let&apos;s Talk <span aria-hidden>-&gt;</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section home-services">
        <div className="home-shell">
          <div className="section-heading home-reveal"><p className="eyebrow">What I can help with</p><h2>Useful digital work, <em>made with care.</em></h2></div>
          <div className="service-list">
            {services.map(([number, title, detail]) => <article className="service-item home-reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}
          </div>
        </div>
      </section>

      <section className="home-section home-work">
        <div className="home-shell">
          <div className="section-heading section-heading--row home-reveal"><div><p className="eyebrow">Selected work</p><h2>Projects built to <em>do the work.</em></h2></div><Link href="/projects" className="text-link">Explore all projects <span>-&gt;</span></Link></div>
          <div className="featured-work">
            <article className="featured-project home-reveal">
              <div className="featured-project__image"><Image src={astuTracker} alt="ASTU complaint tracker interface" sizes="(max-width: 800px) 100vw, 56vw" /><span>01 / Full-stack system</span></div>
              <div className="featured-project__content"><p className="eyebrow">Smart Complaint Management System</p><h3>A structured way to submit, track, and manage complaints.</h3><p>Built around clear workflows and status updates, this project demonstrates a practical application of React, Node.js, Express, and MongoDB.</p><Link href="https://astu-complaint-tracker.vercel.app/" target="_blank" rel="noreferrer" className="text-link">Visit live demo <span>-&gt;</span></Link></div>
            </article>
            <article className="featured-project featured-project--reverse home-reveal">
              <div className="featured-project__image"><Image src={mamiFood} alt="Mami Food ordering platform interface" sizes="(max-width: 800px) 100vw, 56vw" /><span>02 / Ordering platform</span></div>
              <div className="featured-project__content"><p className="eyebrow">Mami Food</p><h3>An ordering experience designed for everyday use.</h3><p>A full-stack food ordering platform where people can place orders online and follow them in real time.</p><Link href="https://mamifood.vercel.app/" target="_blank" rel="noreferrer" className="text-link">Visit live demo <span>-&gt;</span></Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="home-section home-process"><div className="home-shell"><div className="section-heading home-reveal"><p className="eyebrow">How I work</p><h2>Simple process. <em>Clear progress.</em></h2></div><ol className="process-list">{process.map((step, index) => <li className="home-reveal" key={step}><span>0{index + 1}</span><strong>{step}</strong><i aria-hidden>v</i></li>)}</ol></div></section>

      <section className="home-closing"><div className="home-shell home-closing__inner home-reveal"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make the next step <em>useful.</em></h2><p>I take a practical, project-based approach: understand the requirement, make the right plan, and build a clear digital experience around it.</p><Link href="/contact" className="home-button home-button--gold">Start a conversation <span aria-hidden>-&gt;</span></Link></div></section>
    </div>
  );
}
