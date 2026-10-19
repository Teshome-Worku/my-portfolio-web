import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="projects-page">
      <header className="projects-intro">
        <div className="projects-shell">
          <p className="eyebrow">Selected work / 2026</p>
          <h1>Practical products, <em>built with intent.</em></h1>
          <p> A collection of business websites and full-stack applications shaped around useful workflows, clear interfaces, and real-world problems.</p>
        </div>
      </header>
      <section className="projects-list" aria-label="Project catalogue">
        <div className="projects-shell projects-grid">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}>
              <div className="project-card__visual">
                {project.image ? (
                  <Image src={project.image} alt={project.imageAlt} sizes="(max-width: 767px) 100vw, 50vw" />
                ) : (
                  <div className="project-card__placeholder"><span>{project.number}</span><strong>{project.category}</strong></div>
                )}
                <span className="project-card__number">{project.number} / {project.category}</span>
                <span className="project-card__arrow" aria-hidden>↗</span>
              </div>
              <div className="project-card__content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="project-card__tech">{project.technologies.map((technology) => <span key={technology.name}>{technology.name}</span>)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
