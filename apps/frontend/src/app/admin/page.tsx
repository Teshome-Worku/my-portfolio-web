/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DeletePopup from "../../components/deletePopup";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Simple inline SVGs for layout icons to avoid adding unnecessary dependencies
const LayoutDashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
);
const MessageSquareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const LogOutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
);
const Trash2Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
);

export default function AdminPage() {
    const [messages, setMessages] = useState<any[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState("overview"); // overview, messages, profile
    const [deletePopup, setDeletePopup] = useState<{ isOpen: boolean; id: string | null }>({
        isOpen: false,
        id: null,
    });
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const fetchMessages = async (currentToken: string) => {
        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                headers: {
                    Authorization: `Bearer ${currentToken}`
                }
            });
            if (res.status === 401) {
                localStorage.removeItem("token");
                router.push("/admin/login");
                return;
            }
            const data = await res.json();
            setMessages(data);
        } catch {
            console.error("Error fetching messages");
        }
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("token");

        if (!storedToken) {
            router.push("/admin/login");
            return;
        } else {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setToken(storedToken);
            fetchMessages(storedToken);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        router.push("/admin/login");
    };

    const handleDelete = async (id: any) => {
        setDeletePopup({ isOpen: true, id });
    };

    const confirmDelete = async () => {
        if (!deletePopup.id || !token) return;

        setIsDeleting(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/contact/${deletePopup.id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.ok) {
                // Remove from UI instantly
                setMessages((prev) => prev.filter((msg) => msg._id !== deletePopup.id));
                console.log("Message deleted successfully");
            } else {
                alert("Failed to delete message");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setIsDeleting(false);
            setDeletePopup({ isOpen: false, id: null });
        }
    };

    const cancelDelete = () => {
        setDeletePopup({ isOpen: false, id: null });
    };

    // Return a blank loading screen briefly while we confirm the browser token
    if (!token) return <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white">Authenticating...</div>;

    const totalCount = messages.length;

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#0A0A0A] text-white">

            {/* SIDEBAR (Left Panel) */}
            <aside className="w-full md:w-64 bg-[#171717] border-r border-[#262626] flex flex-col md:sticky md:top-0 md:h-screen z-20 shadow-2xl">
                <div className="p-6 border-b border-[#262626]">
                    <h2 className="text-2xl font-bold tracking-tight text-white">
                        Admin<span className="text-[#BB4D00]">Panel</span>
                    </h2>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${activeTab === 'overview' ? 'bg-[#BB4D00]/15 text-[#BB4D00] shadow-sm font-semibold' : 'text-[#A3A3A3] hover:bg-[#1F1F1F] hover:text-white'}`}
                    >
                        <LayoutDashboardIcon />
                        <span className="font-medium">Overview</span>
                    </button>

                    <button
                        onClick={() => setActiveTab("messages")}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${activeTab === 'messages' ? 'bg-[#BB4D00]/15 text-[#BB4D00] shadow-sm font-semibold' : 'text-[#A3A3A3] hover:bg-[#1F1F1F] hover:text-white'}`}
                    >
                        <div className="flex items-center gap-3">
                            <MessageSquareIcon />
                            <span className="font-medium">Messages</span>
                        </div>
                        {totalCount > 0 && (
                            <span className="bg-[#BB4D00] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                {totalCount}
                            </span>
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer ${activeTab === 'profile' ? 'bg-[#BB4D00]/15 text-[#BB4D00] shadow-sm font-semibold' : 'text-[#A3A3A3] hover:bg-[#1F1F1F] hover:text-white'}`}
                    >
                        <UserIcon />
                        <span className="font-medium">Profile</span>
                    </button>
                </nav>

                <div className="p-4 border-t border-[#262626]">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[#A3A3A3] hover:bg-red-500/10 hover:text-red-400 transition-colors cursor-pointer"
                    >
                        <LogOutIcon />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* MAIN CONTENT AREA (Right Panel) */}
            <main className="flex-1 p-6 md:p-10 overflow-y-auto md:h-screen">
                <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">

                    {/* Header */}
                    <header className="flex justify-between items-end border-b border-[#262626] pb-6">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight capitalize">{activeTab}</h1>
                            <p className="text-[#A3A3A3] text-sm mt-1">Manage your portfolio data and application settings.</p>
                        </div>
                    </header>

                    {/* VIEW: OVERVIEW */}
                    {activeTab === "overview" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#171717] border border-[#262626] p-6 rounded-2xl flex flex-col justify-between shadow-lg hover:border-[#BB4D00]/30 transition-colors">
                                <h3 className="text-[#A3A3A3] font-medium mb-4">Total Messages</h3>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-bold text-white">{totalCount}</span>
                                    <MessageSquareIcon />
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#171717] border border-[#BB4D00]/25 p-6 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#BB4D00]/10 rounded-full blur-3xl group-hover:bg-[#BB4D00]/20 transition-all"></div>
                                <h3 className="text-[#BB4D00] font-medium mb-4 relative z-10">Unread Action</h3>
                                <div className="flex items-end justify-between relative z-10">
                                    <span className="text-5xl font-bold text-white">{totalCount}</span>
                                    <span className="text-[#BB4D00] bg-[#BB4D00]/10 px-2.5 py-1 rounded-md text-xs font-semibold">Attention Needed</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* VIEW: MESSAGES */}
                    {activeTab === "messages" && (
                        <div className="bg-[#171717] border border-[#262626] rounded-2xl shadow-xl overflow-hidden">
                            {messages.length === 0 ? (
                                <div className="p-16 text-center text-[#737373] flex flex-col items-center">
                                    <MessageSquareIcon />
                                    <p className="mt-4 font-medium">No messages found.</p>
                                    <p className="text-sm mt-1">When users contact you, messages will appear here.</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-black/40 border-b border-[#262626] text-[#A3A3A3] text-xs uppercase tracking-widest">
                                                <th className="px-6 py-5 font-semibold">Contact</th>
                                                <th className="px-6 py-5 font-semibold">Project / Budget</th>
                                                <th className="px-6 py-5 font-semibold min-w-75">Message</th>
                                                <th className="px-6 py-5 font-semibold">Date</th>
                                                <th className="px-6 py-5 font-semibold text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-[#262626]">
                                            {messages.map((msg: any, index) => (
                                                <tr key={index} className="hover:bg-white/2 transition-colors group">
                                                    <td className="px-6 py-5 whitespace-nowrap">
                                                        <div className="font-medium text-gray-200">{msg.name}</div>
                                                        <div className="text-xs text-[#A3A3A3] mt-0.5">
                                                            <Link href={`mailto:${msg.email}`} className="hover:text-[#BB4D00] transition-colors">{msg.email}</Link>
                                                        </div>
                                                        {msg.phone && (
                                                            <div className="text-xs text-[#737373] mt-0.5">
                                                                <a href={`tel:${msg.phone}`} className="hover:text-[#BB4D00] transition-colors">{msg.phone}</a>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-5 whitespace-nowrap text-sm">
                                                        <div className="text-gray-200 font-medium">
                                                            {msg.projectType || <span className="text-[#737373] italic">Not specified</span>}
                                                        </div>
                                                        {msg.budget && (
                                                            <div className="text-xs text-[#BB4D00] mt-1 inline-block bg-[#BB4D00]/10 px-2 py-0.5 rounded">
                                                                {msg.budget}
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="px-6 py-5 text-gray-300 text-sm leading-relaxed">
                                                        <p className="line-clamp-2">{msg.message}</p>
                                                    </td>
                                                    <td className="px-6 py-5 whitespace-nowrap text-[#737373] text-sm">
                                                        {new Date(msg.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </td>
                                                    <td className="px-6 py-5 whitespace-nowrap text-right">
                                                        <button
                                                            className="text-[#737373] cursor-pointer hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-400/10 inline-flex items-center justify-center"
                                                            title="Delete Message"
                                                            onClick={() => handleDelete(msg._id)}
                                                        >
                                                            <Trash2Icon />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {/* VIEW: PROFILE */}
                    {activeTab === "profile" && (
                        <div className="max-w-2xl">
                            <div className="bg-[#171717] border border-[#262626] rounded-2xl shadow-xl overflow-hidden p-8 space-y-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    <div className="w-24 h-24 rounded-full bg-[#BB4D00]/15 border-2 border-[#BB4D00]/50 flex items-center justify-center text-[#BB4D00] text-3xl font-bold shadow-lg shadow-[#BB4D00]/15">
                                        KW
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold">Admin Account</h3>
                                        <p className="text-[#A3A3A3] text-sm mt-1">Manage your account and security settings.</p>
                                        <button className="mt-4 text-sm px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors">
                                            Change Avatar (UI Demo)
                                        </button>
                                    </div>
                                </div>

                                <hr className="border-[#262626]" />

                                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A3A3A3] mb-1.5">Full Name</label>
                                        <input type="text" defaultValue="Kenan Worku" className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#BB4D00] focus:ring-1 focus:ring-[#BB4D00] transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A3A3A3] mb-1.5">Email Address</label>
                                        <input type="email" defaultValue="teshomeworku96@gmail.com" disabled className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-3.5 text-[#555555] cursor-not-allowed" />
                                        <p className="text-xs text-[#737373] mt-2">Email address cannot be changed for this account.</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#A3A3A3] mb-1.5">New Password</label>
                                        <input type="password" placeholder="••••••••" className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#BB4D00] focus:ring-1 focus:ring-[#BB4D00] transition-colors" />
                                    </div>
                                    <div className="pt-4">
                                        <button type="button" className="px-6 py-3.5 bg-[#BB4D00] text-white font-bold rounded-xl hover:bg-[#D65A00] hover:shadow-[0_0_20px_rgba(187,77,0,0.3)] transition-all active:scale-95 cursor-pointer">
                                            Save Settings
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Delete Confirmation Popup */}
            <DeletePopup
                isOpen={deletePopup.isOpen}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                title="Delete Message"
                message="Are you sure you want to delete this contact message? This action cannot be undone."
                confirmText="Delete Message"
                isLoading={isDeleting}
            />
        </div>
    );
}
