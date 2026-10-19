import Link from "next/link";

const email = "teshomeworku96@gmail.com";

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475v-1.875c-2.775.6-3.362-1.225-3.362-1.225-.45-1.15-1.112-1.462-1.112-1.462-.912-.612.062-.6.062-.6 1.012.075 1.55 1.037 1.55 1.037.9 1.538 2.363 1.1 2.938.838.088-.65.35-1.1.65-1.35-2.225-.25-4.563-1.112-4.563-4.937 0-1.088.388-1.975 1.025-2.675-.1-.263-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.025a9.28 9.28 0 0 1 2.5-.337 9.3 9.3 0 0 1 2.5.337c1.9-1.288 2.75-1.025 2.75-1.025.55 1.375.2 2.387.1 2.65.65.7 1.025 1.587 1.025 2.675 0 3.837-2.35 4.675-4.575 4.925.362.312.675.912.675 1.85v2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0f0d] text-white pt-16 pb-8 overflow-hidden">
            {/* Top sleek gradient border */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent opacity-50" />

            {/* Ambient glow center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-emerald-500/5 blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 flex flex-col items-center text-center">

                {/* Brand Logo */}
                <Link href="/" className="group flex items-center gap-2 select-none mb-4">
                    <span className="text-2xl font-bold tracking-tight">
                        <span className="text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.45)]">Kenan</span>
                        <span className="text-gray-400 font-light group-hover:text-white transition-colors duration-300">.Dev</span>
                    </span>
                </Link>

                {/* Tagline */}
                <p className="text-gray-400 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
                    Full Stack Developer building modern, scalable, and beautifully designed web applications.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6 mb-12">
                    <Link
                        href="https://github.com/Teshome-Worku"
                        target="_blank"
                        className="p-3 rounded-full bg-gray-900/50 border border-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300 hover:-translate-y-1"
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/teshome-worku-017834392"
                        target="_blank"
                        className="p-3 rounded-full bg-gray-900/50 border border-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300 hover:-translate-y-1"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link
                        href={`mailto:${email}`}
                        className="p-3 rounded-full bg-gray-900/50 border border-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300 hover:-translate-y-1"
                        aria-label="Email"
                    >
                        <MailIcon />
                    </Link>
                </div>

                {/* Divider Line */}
                <div className="w-full max-w-md h-px bg-white/5 border-0 mb-8" />

                {/* Copyright */}
                <p className="text-gray-600 text-sm font-medium tracking-wide">
                    © {new Date().getFullYear()} Kenan Worku. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
