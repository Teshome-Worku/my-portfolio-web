import type { StaticImageData } from "next/image";
import astuTracker from "@/assets/astu-tracker.png";
import lemi from "@/assets/lemi.png";

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
    slug: "lemi-fashion",
    number: "01",
    title: "Lemi Fashion",
    category: "E-commerce platform",
    description: "A fashion e-commerce platform integrated with a Telegram bot for real-time order notifications.",
    overview: "Lemi Fashion is an online clothing store designed to help customers browse products and place orders through a focused shopping experience.",
    problem: "A small online store needs a simple way to present products and receive new orders without requiring the owner to constantly monitor the website.",
    solution: "The platform combines a storefront with Telegram integration so order information can be sent directly to the shop owner.",
    features: ["Product browsing", "Online ordering flow", "Telegram order notifications"],
    technologies: [
      { name: "HTML", role: "Page structure" },
      { name: "CSS", role: "Responsive presentation" },
      { name: "JavaScript", role: "Interface behavior" },
      { name: "Node.js", role: "Server-side integration" },
      { name: "Telegram API", role: "Order notifications" },
    ],
    contribution: "I built the customer-facing store experience and connected the order flow to Telegram-based notifications.",
    lessons: "This project strengthened my understanding of connecting a customer interface to a practical communication workflow.",
    image: lemi,
    imageAlt: "Lemi Fashion online store interface",
    github: "https://github.com/Teshome-Worku/lemi-fashion",
    live: "https://lemi-fashion.vercel.app/",
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
