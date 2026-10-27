import type { StaticImageData } from "next/image";
import smartMenuCover from "@/assets/smart-digital-menu-cover.jpg";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: { name: string; role: string }[];
  contribution: string;
  lessons: string;
  image: StaticImageData | null;
  imageAlt: string;
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    slug: "smart-digital-menu",
    number: "01",
    title: "Smart Digital Menu",
    category: "Restaurant Management Platform",
    description: "A mobile-first restaurant ordering platform that lets customers scan a table QR code, browse the menu, place orders, and track progress while restaurant staff manage orders and menu items from a dashboard.",
    overview: "Smart Digital Menu bridges dine-in restaurant guests and kitchen operations. By replacing static physical menus with an instant QR-driven digital interface, customers can inspect dishes, customize selections, and review orders from their mobile phones, while staff manage incoming orders, menu items, and preparation status directly from a unified operations dashboard.",
    problem: "Traditional restaurant ordering frequently suffers from paper menu bottlenecks, delays during peak service hours, and order miscommunication between dining tables and the kitchen. Guests wait for physical menus and staff attention, while restaurant operators lack real-time visibility into table turnover, item availability, and active kitchen queues.",
    solution: "Smart Digital Menu provides an end-to-end QR ordering flow paired with a real-time kitchen operations dashboard. Diners scan a dedicated table QR code to browse dynamic categorized menus with clear imagery and pricing, customize items, and track order stages, while restaurant managers monitor active orders, update preparation states, and toggle menu availability in real time.",
    features: [
      "QR-based table session resolution",
      "Mobile-first menu browsing with dish detail modals",
      "Interactive cart, quantity adjustments, and order submission",
      "Chapa digital payment checkout integration (Test Mode verified)",
      "Real-time restaurant operations dashboard with live order queues",
      "Order status progression tracking (New → Preparing → Ready → Served)",
      "Menu catalog and category management for staff",
    ],
    technologies: [
      { name: "Next.js", role: "Customer frontend & server-rendered interface" },
      { name: "TypeScript", role: "Type safety across order flows and data contracts" },
      { name: "Tailwind CSS", role: "Responsive styling and mobile-optimized layouts" },
      { name: "Express.js", role: "Backend API routing and order state endpoints" },
      { name: "PostgreSQL", role: "Relational persistence for orders, tables, and menu items" },
      { name: "Prisma ORM", role: "Type-safe database modeling and query execution" },
    ],
    contribution: "I designed and implemented the full-stack architecture, including the customer-facing mobile ordering experience, the real-time restaurant operations dashboard, the Express API endpoints, and the Prisma schema connecting tables, categories, menu items, and order lifecycles.",
    lessons: "Designing a dual-sided application highlighted the importance of keeping customer-facing mobile interactions friction-free while providing dense, clear status indicators and controls on the restaurant operations dashboard.",
    image: smartMenuCover,
    imageAlt: "Smart Digital Menu QR ordering stand, mobile ordering interface, and restaurant management dashboard",
    github: "https://github.com/Teshome-Worku/smart_digital_menu",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
