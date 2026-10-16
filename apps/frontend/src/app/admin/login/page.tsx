"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

// Optional: Small lock icon
const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const LoaderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (!API_URL) {
                throw new Error("The API URL is not configured.");
            }

            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem("token", data.token);
                router.push("/admin");
            } else {
                setError(data.message || "Invalid credentials. Please try again.");
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0f0d] text-white p-6 relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="w-full max-w-md relative z-10">
                <form onSubmit={handleLogin} className="bg-gray-900/50 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl space-y-8">

                    <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-emerald-500/20 shadow-[0_0_20px_rgba(52,211,153,0.15)]">
                            <LockIcon />
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight">Admin Portal</h2>
                        <p className="text-sm text-gray-400 font-medium">Please sign in to access the dashboard.</p>
                    </div>

                    {error && (
                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2" htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="admin@example.com"
                                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-400 mb-2" htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300"
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="group w-full flex items-center justify-center gap-2 bg-emerald-500 text-[#0a0f0d] py-4 rounded-xl font-bold text-base hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <LoaderIcon />
                                <span>Authenticating...</span>
                            </>
                        ) : (
                            <span>Secure Login</span>
                        )}
                    </button>

                    <div className="text-center pt-2">
                        <p className="text-xs text-gray-500">Restricted access. Authorized personnel only.</p>
                    </div>
                </form>
            </div>
        </div>
    );
}