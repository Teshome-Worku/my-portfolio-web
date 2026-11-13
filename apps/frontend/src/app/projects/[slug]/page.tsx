import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import SmartDigitalMenuCaseStudy from "@/components/SmartDigitalMenuCaseStudy";
import VotelyCaseStudy from "@/components/VotelyCaseStudy";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Kenan Worku" };

  if (slug === "smart-digital-menu") {
    return {
      title: "Smart Digital Menu — QR Restaurant Ordering Platform | Kenan.Dev",
      description: "Explore Smart Digital Menu, a QR-based restaurant ordering platform with mobile menu browsing, order tracking, and a restaurant management dashboard.",
      openGraph: {
        title: "Smart Digital Menu — QR Restaurant Ordering Platform",
        description: "A mobile-first restaurant ordering platform that lets customers scan a table QR code, browse the menu, place orders, and track progress while restaurant staff manage orders and menu items from a dashboard.",
        type: "article",
        images: [
          {
            url: "/projects/smart-digital-menu/cover.jpg",
            width: 1200,
            height: 675,
            alt: "Smart Digital Menu QR ordering stand, mobile ordering interface, and restaurant management dashboard",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Smart Digital Menu — QR Restaurant Ordering Platform | Kenan.Dev",
        description: "Explore Smart Digital Menu, a QR-based restaurant ordering platform with mobile menu browsing, order tracking, and a restaurant management dashboard.",
        images: ["/projects/smart-digital-menu/cover.jpg"],
      },
    };
  }

  if (slug === "votely") {
    return {
      title: "Votely — Online Awards & Voting Platform | Kenan.Dev",
      description: "A secure, multi-tenant awards platform enabling event creation, phone-verified public voting via AfroMessage OTP, and certified results.",
      openGraph: {
        title: "Votely — Online Awards & Voting Platform",
        description: "A secure, multi-tenant awards platform enabling event creation, phone-verified public voting via AfroMessage OTP, and certified results.",
        type: "article",
        images: [
          {
            url: "/projects/votely/cover.jpg",
            width: 1200,
            height: 675,
            alt: "Votely Online Awards & Voting Platform organizer dashboard, public voting interface, and SMS OTP verification modal",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Votely — Online Awards & Voting Platform | Kenan.Dev",
        description: "A secure, multi-tenant awards platform enabling event creation, phone-verified public voting via AfroMessage OTP, and certified results.",
        images: ["/projects/votely/cover.jpg"],
      },
    };
  }

  return {
    title: `${project.title} | Kenan Worku`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const relatedProjects = projects.filter((item) => item.slug !== project.slug);
  const previous = projects[(projectIndex - 1 + projects.length) % projects.length];
  const next = projects[(projectIndex + 1) % projects.length];

  if (project.slug === "votely") {
    return (
      <VotelyCaseStudy
        project={project}
        previous={previous}
        next={next}
        relatedProjects={relatedProjects}
      />
    );
  }

  if (project.slug === "smart-digital-menu") {
    return (
      <SmartDigitalMenuCaseStudy
        project={project}
        previous={previous}
        next={next}
        relatedProjects={relatedProjects}
      />
    );
  }

  notFound();
}
