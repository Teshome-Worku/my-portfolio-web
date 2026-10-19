import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? { title: `${project.title} | Kenan Worku`, description: project.description }
    : { title: "Project not found | Kenan Worku" };
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="case-study">
      <header className="case-study__hero">
        <div className="projects-shell">
          <Link href="/projects" className="case-study__back">← Back to Projects</Link>
          <div className="case-study__heading">
            <div><p className="eyebrow">{project.number} / {project.category}</p><h1>{project.title}</h1><p className="case-study__summary">{project.description}</p></div>
            <div className="case-study__actions">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="home-button home-button--gold">View Live Project <span aria-hidden>↗</span></a>}
              {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="home-button home-button--quiet">View Source Code <span aria-hidden>↗</span></a>}
            </div>
          </div>
          <div className="case-study__image">
            {project.image ? <Image src={project.image} alt={project.imageAlt} priority sizes="(max-width: 767px) 100vw, 78vw" /> : <div className="case-study__placeholder"><span>{project.number}</span><strong>{project.category}</strong><p>No project screenshot is currently available in the repository.</p></div>}
          </div>
        </div>
      </header>

      <div className="projects-shell case-study__body">
        <section className="case-study__overview"><p className="eyebrow">Overview</p><div><h2>Designed around a <em>useful outcome.</em></h2><p>{project.overview}</p></div></section>
        <section className="case-study__split"><div><p className="eyebrow">The problem</p><h2>Start with what needs to <em>work better.</em></h2><p>{project.problem}</p></div><div><p className="eyebrow">The solution</p><h2>A focused path from need to <em>action.</em></h2><p>{project.solution}</p></div></section>
        <section className="case-study__features"><div className="case-study__section-heading"><p className="eyebrow">Key features</p><h2>The parts that make the experience <em>useful.</em></h2></div><ul>{project.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span><strong>{feature}</strong></li>)}</ul></section>
        <section className="case-study__stack"><div className="case-study__section-heading"><p className="eyebrow">Technology stack</p><h2>Tools chosen for the <em>job.</em></h2></div><div className="case-study__stack-list">{project.technologies.map((technology) => <div key={technology.name}><strong>{technology.name}</strong><span>{technology.role}</span></div>)}</div></section>
        <section className="case-study__contribution"><p className="eyebrow">My contribution</p><div><h2>Building, learning, and making the decisions <em>count.</em></h2><p>{project.contribution}</p><p><strong>Lesson:</strong> {project.lessons}</p></div></section>
        <section className="case-study__related"><div className="case-study__section-heading"><p className="eyebrow">Keep exploring</p><h2>More work from the <em>catalogue.</em></h2></div><div className="case-study__related-grid">{relatedProjects.map((related) => <Link href={`/projects/${related.slug}`} className="project-card project-card--compact" key={related.slug}><div className="project-card__visual">{related.image ? <Image src={related.image} alt={related.imageAlt} sizes="(max-width: 767px) 100vw, 40vw" /> : <div className="project-card__placeholder"><span>{related.number}</span><strong>{related.category}</strong></div>}<span className="project-card__arrow" aria-hidden>↗</span></div><div className="project-card__content"><h3>{related.title}</h3><p>{related.description}</p></div></Link>)}</div></section>
        <nav className="case-study__prev-next" aria-label="Project navigation"><Link href={`/projects/${previous.slug}`}><span>Previous project</span><strong>← {previous.title}</strong></Link><Link href={`/projects/${next.slug}`}><span>Next project</span><strong>{next.title} →</strong></Link></nav>
      </div>
    </article>
  );
}
