"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const UserRoundIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const FolderKanbanIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M8 13v3M12 11v5M16 14v2" />
  </svg>
);

const Code2Icon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/", icon: "⌂" },
  { name: "About", href: "/about", icon: <UserRoundIcon /> },
  { name: "Projects", href: "/projects", icon: <FolderKanbanIcon /> },
  { name: "Skills", href: "/skills", icon: <Code2Icon /> },
  { name: "Contact", href: "/contact", icon: "✉" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label="Kenan Worku home">
            <span>Kenan</span><em>.Dev</em>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href ? "is-active" : ""}>{link.name}</Link>
            ))}
          </nav>
          <Link href="/contact" className="hire-cta">Hire Me <span aria-hidden>→</span></Link>
        </div>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={pathname === link.href ? "is-active" : ""}>
            <span className="mobile-nav__icon" aria-hidden>{link.icon}</span><span>{link.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
