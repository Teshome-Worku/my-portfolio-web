"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";

// Consistent 20x20 inline SVG icons with 1.8 stroke width
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const UserRoundIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const FolderKanbanIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    <path d="M8 13v3M12 11v5M16 14v2" />
  </svg>
);

const Code2Icon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const navLinks = [
  { name: "Home", href: "/", icon: <HomeIcon /> },
  { name: "About", href: "/about", icon: <UserRoundIcon /> },
  { name: "Projects", href: "/projects", icon: <FolderKanbanIcon /> },
  { name: "Skills", href: "/skills", icon: <Code2Icon /> },
  { name: "Contact", href: "/contact", icon: <MailIcon /> },
];

export default function Navbar() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="brand" aria-label="Kenan Worku home">
            <BrandLogo size={28} className="brand__logo" />
            <span className="brand__text">
              <span>Kenan</span><em>.Dev</em>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={active ? "is-active" : ""}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="hire-cta">
            Hire Me <span aria-hidden="true">→</span>
          </Link>
        </div>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navLinks.map((link) => {
          const active = isLinkActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "is-active" : ""}
              aria-current={active ? "page" : undefined}
            >
              <span className="mobile-nav__indicator" aria-hidden="true" />
              <span className="mobile-nav__icon" aria-hidden="true">
                {link.icon}
              </span>
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
