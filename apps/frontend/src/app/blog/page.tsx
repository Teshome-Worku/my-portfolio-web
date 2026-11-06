import type { Metadata } from "next";
import Blog from "@/sections/Blog";

export const metadata: Metadata = {
  title: "The Blog | Kenan Worku - Full-Stack Developer",
  description:
    "Practical insights, architecture patterns, development experiences, and lessons learned from building real-world digital products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "The Blog | Kenan Worku",
    description:
      "Practical insights, architecture patterns, development experiences, and lessons learned from building real-world digital products.",
    type: "website",
  },
};

export default function BlogPage() {
  return <Blog />;
}
