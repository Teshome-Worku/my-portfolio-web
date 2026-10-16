"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

const hireMeHref = "https://wa.me/251955800626";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll spy for active sections
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observerOptions = {
            root: null,
            rootMargin: "-40% 0px -40% 0px",
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(`#${entry.target.id}`);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            id="main-navbar"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-gray-900 ${isScrolled
                ? "bg-[#0a0f0d]/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,255,128,0.06)] border-b border-emerald-900/20"
                : "bg-[#0a0f0d]"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18">
                {/* ─── Logo ─── */}
                <Link
                    href="#home"
                    id="navbar-logo"
                    onClick={() => setActiveLink("#home")}
                    className="group relative flex items-center gap-2 select-none"
                >
                    {/* Glow dot */}
                    <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 blur-[3px] transition-opacity duration-500" />
                    <span className="text-2xl font-bold tracking-tight">
                        <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]">
                            Kenan
                        </span>
                        <span className="text-gray-400 font-light">.Dev</span>
                    </span>
                </Link>

                {/* ─── Desktop Nav Links ─── */}
                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                id={`nav-link-${link.name.toLowerCase()}`}
                                onClick={() => setActiveLink(link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300
                  ${activeLink === link.href
                                        ? "text-emerald-400"
                                        : "text-gray-400 hover:text-emerald-300"
                                    }
                  hover:bg-emerald-500/8
                  group
                `}
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span
                                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-emerald-400 transition-all duration-300
                    ${activeLink === link.href
                                            ? "w-5 opacity-100"
                                            : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-70"
                                        }
                  `}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ─── Right Section ─── */}
                <div className="flex items-center gap-4">
                    {/* Hire Me Button */}
                    <Link
                        href={hireMeHref}
                        id="navbar-hire-me"
                        title="Whatsapp"
                        target="_blank"
                        // onClick={() => setActiveLink("#contact")}
                        className="group hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg
              bg-emerald-500 text-[#0a0f0d]
              hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.35)]
              active:scale-[0.97]
              transition-all duration-300 ease-out"
                    >
                        Hire Me
                        <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        id="navbar-mobile-toggle"
                        aria-label="Toggle mobile menu"
                        aria-controls="navbar-mobile-menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((prev) => !prev)}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center justify-center gap-1.25 cursor-pointer">
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-1.75" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-1.75" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* ─── Mobile Menu ─── */}
            <div
                id="navbar-mobile-menu"
                className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 pt-2 border-t border-emerald-900/20 bg-[#0a0f0d]/95 backdrop-blur-xl">
                    <ul className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    id={`mobile-nav-link-${link.name.toLowerCase()}`}
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setMobileOpen(false);
                                    }}
                                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${activeLink === link.href
                                        ? "text-emerald-400 bg-emerald-500/10"
                                        : "text-gray-400 hover:text-emerald-300 hover:bg-emerald-500/5"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Hire Me */}
                    <Link
                        href={hireMeHref}
                        id="mobile-navbar-hire-me"
                        onClick={() => {
                            setActiveLink("#contact");
                            setMobileOpen(false);
                        }}
                        target="_blank"
                        className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold rounded-lg
              bg-emerald-500 text-[#0a0f0d]
              hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.35)]
              active:scale-[0.97]
              transition-all duration-300 ease-out"
                    >
                        Hire Me
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
