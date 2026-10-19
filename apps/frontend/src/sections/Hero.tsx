import Image from "next/image";
import Link from "next/link";
import heroDeveloper from "@/assets/hero-developer.png"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 lg:px-10 bg-[#0a0f0d] text-white overflow-hidden pt-20"
        >
            {/* Background elements for depth */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Side - Text */}
                <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                    <div className="space-y-3">
                        <p className="text-emerald-400 font-medium tracking-wide">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-md mx-auto lg:mx-0 ">
                            Kenan Worku
                        </h1>
                        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mt-2">
                            Full Stack <span className="font-semibold text-white">Developer</span>
                        </h2>
                        <p className="text-base text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed mt-6">
                            I design and build scalable, high-performance web applications focused on intuitive user experiences and real-world impact.
                        </p>
                    </div>

                    <div className="flex  sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
                        <Link
                            href="/projects"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-emerald-500 text-[#0a0f0d] hover:bg-emerald-400 transition-colors"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl border border-gray-700 bg-gray-900/50 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="order-2 flex justify-center lg:justify-end w-full">
                    <div className="relative">
                        {/* Soft background glow */}
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-[60px] opacity-70 rounded-[3rem]" />

                        {/* Image Container */}
                        <div className="hidden md:flex relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-white/5 shadow-xl">
                            {/* Inner gradient overlay for better blending */}
                            <div className="absolute inset-0 bg-linear-to-tr from-[#0a0f0d]/30 via-transparent to-transparent z-10 pointer-events-none" />

                            <Image
                                src={heroDeveloper}
                                alt="Abstract Developer Illustration"
                                fill
                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
