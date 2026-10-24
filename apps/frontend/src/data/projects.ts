import type { StaticImageData } from "next/image";
import astuTracker from "@/assets/astu-tracker.png";
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
  {
    slug: "inventory-management-system",
    number: "02",
    title: "Inventory Management System",
    category: "Offline-first application",
    description: "A React inventory management system using IndexedDB for local data storage and fast performance.",
    overview: "This application is designed for managing inventory records in a responsive interface that can keep data available locally.",
    problem: "Inventory work benefits from quick access to records, including in situations where a persistent network connection is not available.",
    solution: "The application uses React for the interface and IndexedDB for browser-based data storage, keeping the workflow responsive and local.",
    features: ["Inventory record management", "Local browser storage", "Responsive React interface"],
    technologies: [
      { name: "React", role: "Application interface" },
      { name: "IndexedDB", role: "Offline data storage" },
    ],
    contribution: "I developed the React interface and the IndexedDB-backed storage approach for the inventory workflow.",
    lessons: "The project gave me practical experience thinking about local persistence and interfaces that do not depend on every action reaching a server.",
    image: null,
    imageAlt: "",
    github: "https://github.com/Teshome-Worku/inventory-management-system",
  },
  {
    slug: "astu-complaint-tracker",
    number: "03",
    title: "ASTU Complaint Tracker",
    category: "Full-stack system",
    description: "A system for submitting, tracking, and managing campus complaints through structured workflows.",
    overview: "The ASTU Complaint Tracker gives users a way to submit complaints and provides a management workflow for following their status.",
    problem: "Complaint handling can become difficult to follow when submissions and updates are scattered across informal channels.",
    solution: "The system organizes complaint submissions and status updates in one application, creating a clearer path from submission to management.",
    features: ["Complaint submission", "Complaint tracking", "Management and status workflows"],
    technologies: [
      { name: "React", role: "Frontend interface" },
      { name: "Node.js", role: "Backend runtime" },
      { name: "Express", role: "API layer" },
      { name: "MongoDB", role: "Application data" },
    ],
    contribution: "I worked across the frontend and backend to create the complaint flow, status handling, and supporting data connections.",
    lessons: "This project helped me practice designing a full-stack workflow around clear state changes and practical user needs.",
    image: astuTracker,
    imageAlt: "ASTU Complaint Tracker interface",
    github: "https://github.com/Teshome-Worku/astu-complaint-tracker",
    live: "https://astu-complaint-tracker.vercel.app/",
  },
  {
    slug: "appointment-booking-system",
    number: "04",
    title: "Appointment Booking System",
    category: "Booking experience",
    description: "A React and Tailwind CSS booking system for scheduling appointments for services.",
    overview: "The Appointment Booking System is designed to help users choose a service and schedule an appointment through a clear interface.",
    problem: "Service businesses need a straightforward way for people to request appointment times without unnecessary back-and-forth.",
    solution: "The system presents the booking journey as a focused React experience with Tailwind CSS supporting a responsive interface.",
    features: ["Service appointment scheduling", "Focused booking journey", "Responsive interface"],
    technologies: [
      { name: "React", role: "Application interface" },
      { name: "Tailwind CSS", role: "Responsive styling" },
    ],
    contribution: "I built the booking interface and shaped the responsive presentation around a simple scheduling flow.",
    lessons: "This project reinforced the value of reducing friction in forms and task-focused interfaces.",
    image: null,
    imageAlt: "",
    github: "https://github.com/Teshome-Worku/appointment-booking-system",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
