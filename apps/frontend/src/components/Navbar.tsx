"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/", icon: "⌂" },
  { name: "About", href: "/about", icon: "◉" },
  { name: "Projects", href: "/projects", icon: "▣" },
  { name: "Skills", href: "/skills", icon: "✦" },
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
