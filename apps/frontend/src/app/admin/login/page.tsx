"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#BB4D00]" aria-hidden="true">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const LoaderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin" aria-hidden="true">
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white p-6 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-[#BB4D00]/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-md relative z-10">
        <form onSubmit={handleLogin} className="bg-[#171717] p-8 sm:p-10 rounded-2xl border border-[#262626] shadow-2xl space-y-7">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-[#BB4D00]/10 rounded-xl flex items-center justify-center mx-auto mb-3 border border-[#BB4D00]/25 shadow-[0_0_20px_rgba(187,77,0,0.15)]">
              <LockIcon />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Admin Portal</h2>
            <p className="text-xs text-[#A3A3A3]">Please sign in to access the dashboard.</p>
          </div>

          {error && (
            <div className="p-3.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] mb-1.5" htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-white placeholder-neutral-600 focus:outline-none focus:border-[#BB4D00] focus:ring-1 focus:ring-[#BB4D00] transition-colors"
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#A3A3A3] mb-1.5" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-white placeholder-neutral-600 focus:outline-none focus:border-[#BB4D00] focus:ring-1 focus:ring-[#BB4D00] transition-colors"
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#BB4D00] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#D65A00] hover:shadow-[0_0_20px_rgba(187,77,0,0.3)] transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
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

          <div className="text-center pt-1">
            <p className="text-xs text-[#737373]">Restricted access. Authorized personnel only.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
