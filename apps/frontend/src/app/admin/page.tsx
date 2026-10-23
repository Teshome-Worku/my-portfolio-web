/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import DeletePopup from "../../components/deletePopup";

const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

// ── Icons ──
const DashboardIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1.5"/><rect width="7" height="5" x="14" y="3" rx="1.5"/><rect width="7" height="9" x="14" y="12" rx="1.5"/><rect width="7" height="5" x="3" y="16" rx="1.5"/></svg>
);
const MessagesIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
);
const FolderPlusIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><line x1="12" x2="12" y1="10" y2="16"/><line x1="9" x2="15" y1="13" y2="13"/></svg>
);
const BarChartIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
);
const SettingsIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const UserIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const BellIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);
const LogOutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);
const Trash2Icon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
);
const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

export default function AdminPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview, messages, projects, analytics, settings, profile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminUser, setAdminUser] = useState<{ name: string; email: string; avatar: string }>({
    name: "Kenan Worku",
    email: "kenanworku981@gmail.com",
    avatar: "",
  });

  // Top bar notifications & user menu dropdowns
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Message filters & pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProjectType, setSelectedProjectType] = useState("ALL");
  const [selectedBudget, setSelectedBudget] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Selected message detail view modal
  const [viewMessage, setViewMessage] = useState<any | null>(null);

  // Delete modal state
  const [deletePopup, setDeletePopup] = useState<{ isOpen: boolean; id: string | null }>({
    isOpen: false,
    id: null,
  });
  const [isDeleting, setIsDeleting] = useState(false);

  // Profile / Settings form states
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [profileStatus, setProfileStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  // Load token & initial data
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      router.push("/admin/login");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setToken(storedToken);

    // Fetch messages
    fetch(`${API_URL}/api/contact`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          router.push("/admin/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setMessages(data);
      })
      .catch(() => console.error("Error fetching messages"));

    // Fetch profile
    fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((res) => res.ok ? res.json() : null)
      .then((data) => {
        if (data) {
          setAdminUser({
            name: data.name || "Kenan Worku",
            email: data.email || "kenanworku981@gmail.com",
            avatar: data.avatar || "",
          });
          setProfileName(data.name || "Kenan Worku");
          setProfileEmail(data.email || "kenanworku981@gmail.com");
          setAvatarPreview(data.avatar || "");
        }
      })
      .catch(() => {});
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  // Avatar file upload handler
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setAvatarPreview(base64);
    };
    reader.readAsDataURL(file);
  };

  // Save profile & account settings
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;
    setSavingProfile(true);
    setProfileStatus(null);

    try {
      const body: any = {
        name: profileName,
        email: profileEmail,
        avatar: avatarPreview,
      };
      if (newPassword) {
        body.currentPassword = currentPassword;
        body.newPassword = newPassword;
      }

      const res = await fetch(`${API_URL}/api/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (res.ok) {
        setProfileStatus({ type: "success", text: "Profile updated successfully!" });
        setAdminUser({
          name: data.admin?.name || profileName,
          email: data.admin?.email || profileEmail,
          avatar: data.admin?.avatar || avatarPreview,
        });
        setCurrentPassword("");
        setNewPassword("");
      } else {
        setProfileStatus({ type: "error", text: data.message || "Failed to update profile." });
      }
    } catch {
      setProfileStatus({ type: "error", text: "Something went wrong. Please try again." });
    } finally {
      setSavingProfile(false);
    }
  };

  // Delete message
  const confirmDelete = async () => {
    if (!deletePopup.id || !token) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`${API_URL}/api/contact/${deletePopup.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m._id !== deletePopup.id));
        if (viewMessage?._id === deletePopup.id) setViewMessage(null);
      } else {
        alert("Failed to delete message");
      }
    } catch {
      alert("Error deleting message");
    } finally {
      setIsDeleting(false);
      setDeletePopup({ isOpen: false, id: null });
    }
  };

  // Filtered & Paginated Messages
  const filteredMessages = useMemo(() => {
    return messages.filter((m) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.name?.toLowerCase().includes(q) ||
        m.email?.toLowerCase().includes(q) ||
        m.message?.toLowerCase().includes(q) ||
        m.phone?.toLowerCase().includes(q);

      const matchesType =
        selectedProjectType === "ALL" ||
        (m.projectType || "Not specified") === selectedProjectType;

      const matchesBudget =
        selectedBudget === "ALL" ||
        (m.budget || "Prefer not to say") === selectedBudget;

      return matchesSearch && matchesType && matchesBudget;
    });
  }, [messages, searchQuery, selectedProjectType, selectedBudget]);

  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage) || 1;
  const paginatedMessages = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredMessages.slice(start, start + itemsPerPage);
  }, [filteredMessages, currentPage]);

  // Analytics Metrics
  const projectTypeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    messages.forEach((m) => {
      const key = m.projectType || "General Inquiry";
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [messages]);

  const budgetCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    messages.forEach((m) => {
      const key = m.budget || "Unspecified";
      counts[key] = (counts[key] || 0) + 1;
    });
    return counts;
  }, [messages]);

  if (!token) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-white font-medium">
        Authenticating Admin...
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0A0A0A] text-white font-sans antialiased relative">
      {/* ── MOBILE OVERLAY BACKDROP ── */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* ── 1. SIDEBAR (RESPONSIVE: DRAWER ON MOBILE, FIXED ON DESKTOP) ── */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#121212] border-r border-[#262626] flex flex-col justify-between h-full select-none transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          mobileMenuOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        {/* Brand / Logo */}
        <div>
          <div className="p-5 border-b border-[#262626] flex items-center justify-between">
            <Link href="/" target="_blank" className="flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-[#BB4D00] flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-[0_0_15px_rgba(187,77,0,0.4)]">
                KD
              </span>
              <div>
                <span className="font-bold text-base text-white tracking-tight">Kenan<span className="text-[#BB4D00]">.Dev</span></span>
                <span className="block text-[10px] text-[#737373] tracking-widest uppercase font-semibold">Admin Workspace</span>
              </div>
            </Link>

            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] lg:hidden"
              aria-label="Close sidebar"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-190px)]">
            <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#737373]">
              Workspace
            </div>

            <button
              onClick={() => {
                setActiveTab("overview");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <DashboardIcon />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("messages");
                setCurrentPage(1);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "messages"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <MessagesIcon />
                <span>Inquiries</span>
              </div>
              {messages.length > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  activeTab === "messages" ? "bg-black/30 text-white" : "bg-[#BB4D00]/20 text-[#BB4D00]"
                }`}>
                  {messages.length}
                </span>
              )}
            </button>

            <button
              onClick={() => {
                setActiveTab("projects");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "projects"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <FolderPlusIcon />
                <span>Project Manager</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-[#A3A3A3]">
                CMS
              </span>
            </button>

            <button
              onClick={() => {
                setActiveTab("analytics");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "analytics"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <BarChartIcon />
              <span>Analytics</span>
            </button>

            <div className="pt-4 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#737373]">
              Account & System
            </div>

            <button
              onClick={() => {
                setActiveTab("profile");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "profile"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <UserIcon />
              <span>Account & Avatar</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("settings");
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "settings"
                  ? "bg-[#BB4D00] text-white shadow-[0_4px_16px_rgba(187,77,0,0.3)] font-semibold"
                  : "text-[#A3A3A3] hover:bg-[#1A1A1A] hover:text-white"
              }`}
            >
              <SettingsIcon />
              <span>System Settings</span>
            </button>
          </nav>
        </div>

        {/* Sidebar Footer: Profile Card & Logout */}
        <div className="p-4 border-t border-[#262626]">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-[#171717] border border-[#262626] mb-2">
            {adminUser.avatar ? (
              <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-[#BB4D00]/50 flex-shrink-0">
                <Image src={adminUser.avatar} alt={adminUser.name} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-lg bg-[#BB4D00]/15 border border-[#BB4D00]/30 text-[#BB4D00] font-bold flex items-center justify-center text-xs flex-shrink-0">
                KW
              </div>
            )}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white truncate">{adminUser.name}</p>
              <p className="text-[11px] text-[#737373] truncate">{adminUser.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-red-400/80 hover:bg-red-500/10 hover:text-red-400 transition-colors"
          >
            <LogOutIcon />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* ── 2. MAIN VIEW AREA (Top Bar + Scrollable Content) ── */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Fixed Top Bar */}
        <header className="h-16 flex-shrink-0 bg-[#121212] border-b border-[#262626] px-4 sm:px-8 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] lg:hidden"
              aria-label="Open sidebar menu"
            >
              <MenuIcon />
            </button>

            <h1 className="text-base sm:text-lg font-bold text-white capitalize tracking-tight truncate max-w-[180px] sm:max-w-none">
              {activeTab === "overview" && "Dashboard"}
              {activeTab === "messages" && "Client Inquiries"}
              {activeTab === "projects" && "CMS"}
              {activeTab === "analytics" && "Analytics"}
              {activeTab === "profile" && "Account & Avatar"}
              {activeTab === "settings" && "Settings"}
            </h1>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#BB4D00]" />
            <span className="hidden md:inline-block text-xs text-[#737373]">Live Production Environment</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* View Live Portfolio Site */}
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#222222] text-[#A3A3A3] hover:text-white text-xs font-medium border border-[#262626] transition-colors"
            >
              <span className="hidden sm:inline">Public Site</span>
              <span className="sm:hidden">Site</span>
              <ExternalLinkIcon />
            </Link>

            {/* Notification Bell Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className="relative p-2 rounded-lg text-[#A3A3A3] hover:text-white hover:bg-[#1A1A1A] transition-colors"
                aria-label="Notifications"
              >
                <BellIcon />
                {messages.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#BB4D00] ring-2 ring-[#121212]" />
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-[#171717] border border-[#262626] rounded-2xl shadow-2xl p-4 z-50">
                  <div className="flex items-center justify-between border-b border-[#262626] pb-3 mb-3">
                    <span className="font-semibold text-xs text-white uppercase tracking-wider">Notifications</span>
                    <span className="text-[11px] text-[#BB4D00] font-medium">{messages.length} inquiries</span>
                  </div>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {messages.slice(0, 4).map((m, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setViewMessage(m);
                          setActiveTab("messages");
                          setShowNotifications(false);
                        }}
                        className="p-2.5 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                      >
                        <p className="text-xs font-semibold text-white truncate">{m.name} sent a message</p>
                        <p className="text-[11px] text-[#737373] truncate">{m.projectType || "General"} · {m.message}</p>
                      </div>
                    ))}
                    {messages.length === 0 && (
                      <p className="text-xs text-center text-[#737373] py-4">No new notifications</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1 pl-2 rounded-full hover:bg-[#1A1A1A] transition-colors border border-transparent hover:border-[#262626]"
              >
                <span className="text-xs font-medium text-white hidden md:inline">{adminUser.name}</span>
                {adminUser.avatar ? (
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#BB4D00]/50">
                    <Image src={adminUser.avatar} alt="Avatar" fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#BB4D00]/20 text-[#BB4D00] font-bold flex items-center justify-center text-xs">
                    KW
                  </div>
                )}
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-[#171717] border border-[#262626] rounded-xl shadow-2xl p-2 z-50">
                  <div className="p-3 border-b border-[#262626] mb-1">
                    <p className="text-xs font-bold text-white">{adminUser.name}</p>
                    <p className="text-[11px] text-[#737373] truncate">{adminUser.email}</p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveTab("profile");
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-[#A3A3A3] hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <UserIcon /> Account & Avatar
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("settings");
                      setShowUserMenu(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs text-[#A3A3A3] hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2"
                  >
                    <SettingsIcon /> System Settings
                  </button>
                  <div className="border-t border-[#262626] my-1 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-xs text-red-400 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <LogOutIcon /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ── 3. INDEPENDENT SCROLLABLE MAIN CONTENT ── */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 bg-[#0A0A0A]">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-300">

            {/* ──────── TAB 1: OVERVIEW ──────── */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Stat Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#BB4D00]/40 transition-all">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">Total Inquiries</p>
                    <h3 className="text-4xl font-extrabold text-white mt-3">{messages.length}</h3>
                    <p className="text-xs text-[#A3A3A3] mt-2 flex items-center gap-1.5">
                      <span className="text-[#BB4D00] font-semibold">100%</span> active submissions
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#BB4D00]/40 transition-all">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">Featured Projects</p>
                    <h3 className="text-4xl font-extrabold text-white mt-3">4</h3>
                    <p className="text-xs text-[#A3A3A3] mt-2">Live on public portfolio</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#BB4D00]/40 transition-all">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">High-Budget Leads</p>
                    <h3 className="text-4xl font-extrabold text-[#BB4D00] mt-3">
                      {messages.filter((m) => m.budget === "$2,500+" || m.budget === "$1,000 - $2,500").length}
                    </h3>
                    <p className="text-xs text-[#A3A3A3] mt-2">&gt; $1,000 project scope</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#BB4D00]/40 transition-all">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#737373]">Backend Health</p>
                    <div className="flex items-center gap-2 mt-4">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-bold text-white">Online &amp; Healthy</span>
                    </div>
                    <p className="text-xs text-[#737373] mt-2">Render cluster responsive</p>
                  </div>
                </div>

                {/* Recent Inquiries Quick Table */}
                <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-base font-bold text-white">Recent Client Inquiries</h3>
                      <p className="text-xs text-[#737373] mt-0.5">Most recent proposals submitted via your portfolio contact form.</p>
                    </div>
                    <button
                      onClick={() => setActiveTab("messages")}
                      className="text-xs text-[#BB4D00] hover:underline font-semibold flex items-center gap-1"
                    >
                      View All ({messages.length}) →
                    </button>
                  </div>

                  {messages.length === 0 ? (
                    <div className="py-12 text-center text-[#737373] text-sm">No inquiries received yet.</div>
                  ) : (
                    <div className="divide-y divide-[#262626]">
                      {messages.slice(0, 5).map((m, idx) => (
                        <div key={idx} className="py-3.5 flex items-center justify-between hover:bg-white/2 px-2 rounded-lg transition-colors">
                          <div className="min-w-0 pr-4">
                            <p className="text-sm font-semibold text-white truncate">{m.name}</p>
                            <p className="text-xs text-[#737373] truncate">{m.email} {m.phone && `· ${m.phone}`}</p>
                          </div>
                          <div className="flex items-center gap-4 flex-shrink-0">
                            {m.projectType && (
                              <span className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-[#262626] text-[#A3A3A3]">
                                {m.projectType}
                              </span>
                            )}
                            {m.budget && (
                              <span className="text-xs px-2.5 py-1 rounded-md bg-[#BB4D00]/10 text-[#BB4D00] font-semibold">
                                {m.budget}
                              </span>
                            )}
                            <button
                              onClick={() => {
                                setViewMessage(m);
                                setActiveTab("messages");
                              }}
                              className="text-xs px-3 py-1 rounded-lg bg-[#1A1A1A] hover:bg-[#222222] text-white border border-[#262626] transition-colors"
                            >
                              Inspect
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ──────── TAB 2: INQUIRIES (SEARCH, FILTER, PAGINATION) ──────── */}
            {activeTab === "messages" && (
              <div className="space-y-6">
                {/* Search & Filter Toolbar */}
                <div className="bg-[#141414] border border-[#262626] rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
                  {/* Search input */}
                  <div className="relative flex-1 min-w-60">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#737373]">
                      <SearchIcon />
                    </span>
                    <input
                      type="text"
                      placeholder="Search by client name, email, phone, or message keywords..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#555] focus:outline-none focus:border-[#BB4D00] transition-colors"
                    />
                  </div>

                  {/* Project Type Filter */}
                  <select
                    value={selectedProjectType}
                    onChange={(e) => {
                      setSelectedProjectType(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-[#0A0A0A] border border-[#262626] rounded-xl px-3 py-2.5 text-xs text-[#A3A3A3] focus:outline-none focus:border-[#BB4D00] cursor-pointer"
                  >
                    <option value="ALL">All Project Types</option>
                    <option value="Business Website">Business Website</option>
                    <option value="Full-Stack Application">Full-Stack Application</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="API Integration">API Integration</option>
                    <option value="Other">Other</option>
                  </select>

                  {/* Budget Filter */}
                  <select
                    value={selectedBudget}
                    onChange={(e) => {
                      setSelectedBudget(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="bg-[#0A0A0A] border border-[#262626] rounded-xl px-3 py-2.5 text-xs text-[#A3A3A3] focus:outline-none focus:border-[#BB4D00] cursor-pointer"
                  >
                    <option value="ALL">All Budget Ranges</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500 - $1,000">$500 - $1,000</option>
                    <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                    <option value="$2,500+">$2,500+</option>
                  </select>
                </div>

                {/* Inquiries Table */}
                <div className="bg-[#141414] border border-[#262626] rounded-2xl shadow-xl overflow-hidden">
                  {paginatedMessages.length === 0 ? (
                    <div className="p-16 text-center text-[#737373]">
                      <p className="font-semibold text-white">No inquiries match your filter criteria.</p>
                      <p className="text-xs mt-1">Try clearing your search query or selecting &quot;All Project Types&quot;.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-black/40 border-b border-[#262626] text-[#737373] uppercase tracking-wider font-semibold">
                            <th className="px-6 py-4">Client Contact</th>
                            <th className="px-6 py-4">Project &amp; Budget</th>
                            <th className="px-6 py-4 min-w-64">Message Preview</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#262626]">
                          {paginatedMessages.map((msg, index) => (
                            <tr key={index} className="hover:bg-white/2 transition-colors">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-bold text-white text-sm">{msg.name}</div>
                                <div className="text-[#A3A3A3] mt-0.5">
                                  <a href={`mailto:${msg.email}`} className="hover:text-[#BB4D00] transition-colors">{msg.email}</a>
                                </div>
                                {msg.phone && (
                                  <div className="text-[#737373] mt-0.5">
                                    <a href={`tel:${msg.phone}`} className="hover:text-[#BB4D00] transition-colors">{msg.phone}</a>
                                  </div>
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-white font-medium">
                                  {msg.projectType || <span className="text-[#555] italic">Not specified</span>}
                                </div>
                                {msg.budget && (
                                  <span className="inline-block mt-1 text-[11px] font-semibold text-[#BB4D00] bg-[#BB4D00]/10 px-2 py-0.5 rounded">
                                    {msg.budget}
                                  </span>
                                )}
                              </td>
                              <td className="px-6 py-4 text-[#A3A3A3] leading-relaxed">
                                <p className="line-clamp-2">{msg.message}</p>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-[#737373]">
                                {new Date(msg.createdAt).toLocaleDateString(undefined, {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                                <button
                                  onClick={() => setViewMessage(msg)}
                                  className="px-2.5 py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#222] text-white border border-[#262626] transition-colors"
                                >
                                  View
                                </button>
                                <button
                                  onClick={() => setDeletePopup({ isOpen: true, id: msg._id })}
                                  className="p-1.5 rounded-lg text-[#737373] hover:text-red-400 hover:bg-red-500/10 transition-colors"
                                  title="Delete"
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

                  {/* Pagination Controls */}
                  {filteredMessages.length > itemsPerPage && (
                    <div className="p-4 border-t border-[#262626] flex items-center justify-between text-xs text-[#737373]">
                      <span>
                        Showing {Math.min((currentPage - 1) * itemsPerPage + 1, filteredMessages.length)} to{" "}
                        {Math.min(currentPage * itemsPerPage, filteredMessages.length)} of {filteredMessages.length} entries
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          disabled={currentPage === 1}
                          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                          className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#262626] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
                        >
                          Previous
                        </button>
                        <span className="px-3 py-1.5 font-bold text-white">
                          {currentPage} / {totalPages}
                        </span>
                        <button
                          disabled={currentPage === totalPages}
                          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                          className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#262626] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ──────── TAB 3: PROJECT MANAGER (CMS COMING SOON) ──────── */}
            {activeTab === "projects" && (
              <div className="space-y-6">
                <div className="bg-[#141414] border border-[#262626] rounded-2xl p-8 text-center max-w-2xl mx-auto space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#BB4D00]/10 border border-[#BB4D00]/30 text-[#BB4D00] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(187,77,0,0.2)]">
                    <FolderPlusIcon />
                  </div>
                  <h3 className="text-xl font-bold text-white">Project Manager &amp; Content CMS</h3>
                  <p className="text-xs text-[#A3A3A3] max-w-md mx-auto leading-relaxed">
                    Add, edit, or archive portfolio projects directly from this admin panel without writing any code or updating configuration files.
                  </p>
                  <div className="inline-block bg-[#BB4D00]/15 text-[#BB4D00] border border-[#BB4D00]/30 font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Feature Coming Soon
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#141414] border border-[#262626]">
                    <span className="text-xs font-bold text-[#BB4D00] uppercase tracking-wider">Live Portfolio Project</span>
                    <h4 className="text-base font-bold text-white mt-1">Lemi Fashion E-Commerce</h4>
                    <p className="text-xs text-[#737373] mt-2">Node.js, Telegram API, responsive catalog workflow.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#141414] border border-[#262626]">
                    <span className="text-xs font-bold text-[#BB4D00] uppercase tracking-wider">Live Portfolio Project</span>
                    <h4 className="text-base font-bold text-white mt-1">ASTU Complaint Tracker</h4>
                    <p className="text-xs text-[#737373] mt-2">React, Express, MongoDB live campus system.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ──────── TAB 4: ANALYTICS ──────── */}
            {activeTab === "analytics" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* By Project Type */}
                  <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Inquiries by Project Type</h3>
                    <div className="space-y-3">
                      {Object.entries(projectTypeCounts).map(([type, count]) => {
                        const pct = Math.round((count / (messages.length || 1)) * 100);
                        return (
                          <div key={type}>
                            <div className="flex justify-between text-xs font-medium mb-1">
                              <span className="text-white">{type}</span>
                              <span className="text-[#BB4D00] font-bold">{count} ({pct}%)</span>
                            </div>
                            <div className="w-full h-2 bg-[#262626] rounded-full overflow-hidden">
                              <div className="h-full bg-[#BB4D00] rounded-full" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* By Budget Range */}
                  <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Inquiries by Budget Range</h3>
                    <div className="space-y-3">
                      {Object.entries(budgetCounts).map(([budget, count]) => {
                        const pct = Math.round((count / (messages.length || 1)) * 100);
                        return (
                          <div key={budget}>
                            <div className="flex justify-between text-xs font-medium mb-1">
                              <span className="text-white">{budget}</span>
                              <span className="text-[#BB4D00] font-bold">{count} ({pct}%)</span>
                            </div>
                            <div className="w-full h-2 bg-[#262626] rounded-full overflow-hidden">
                              <div className="h-full bg-[#BB4D00] rounded-full" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ──────── TAB 5: PROFILE & AVATAR MANAGEMENT ──────── */}
            {activeTab === "profile" && (
              <div className="max-w-2xl bg-[#141414] border border-[#262626] rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Account &amp; Avatar Management</h3>
                  <p className="text-xs text-[#737373] mt-1">Upload a custom profile photo, edit your display name, or change your password.</p>
                </div>

                {profileStatus && (
                  <div className={`p-3.5 rounded-xl text-xs font-medium ${
                    profileStatus.type === "success" ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400" : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}>
                    {profileStatus.text}
                  </div>
                )}

                {/* Avatar Uploader */}
                <div className="flex items-center gap-6 pb-6 border-b border-[#262626]">
                  <div className="relative group">
                    {avatarPreview ? (
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#BB4D00] shadow-[0_0_20px_rgba(187,77,0,0.3)]">
                        <Image src={avatarPreview} alt="Avatar Preview" fill className="object-cover" />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-2xl bg-[#BB4D00]/15 border-2 border-[#BB4D00]/40 text-[#BB4D00] font-black text-2xl flex items-center justify-center">
                        KW
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-2xl transition-opacity text-white text-xs gap-1 font-semibold cursor-pointer"
                    >
                      <CameraIcon />
                      <span>Change</span>
                    </button>
                  </div>

                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-xl bg-[#1A1A1A] hover:bg-[#222] border border-[#262626] text-white text-xs font-semibold transition-colors"
                    >
                      Upload New Photo
                    </button>
                    {avatarPreview && (
                      <button
                        type="button"
                        onClick={() => setAvatarPreview("")}
                        className="ml-2 px-3 py-2 text-xs text-red-400 hover:underline"
                      >
                        Remove
                      </button>
                    )}
                    <p className="text-[11px] text-[#737373] mt-2">Recommended: Square PNG/JPG under 2MB.</p>
                  </div>
                </div>

                <form onSubmit={handleSaveProfile} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#A3A3A3] mb-1.5">Admin Full Name</label>
                    <input
                      type="text"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      required
                      className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#BB4D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#A3A3A3] mb-1.5">Admin Email Address</label>
                    <input
                      type="email"
                      value={profileEmail}
                      onChange={(e) => setProfileEmail(e.target.value)}
                      required
                      className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#BB4D00] transition-colors"
                    />
                  </div>

                  <div className="pt-4 border-t border-[#262626]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Security &amp; Password</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-[#737373] mb-1">Current Password (required to set a new password)</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#BB4D00] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[#737373] mb-1">New Password (leave blank if keeping current)</label>
                        <input
                          type="password"
                          placeholder="••••••••"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#BB4D00] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={savingProfile}
                      className="px-6 py-3 rounded-xl bg-[#BB4D00] hover:bg-[#D65A00] text-white font-bold text-xs shadow-[0_0_20px_rgba(187,77,0,0.3)] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {savingProfile ? "Saving Updates..." : "Save Account Changes"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ──────── TAB 6: SETTINGS ──────── */}
            {activeTab === "settings" && (
              <div className="max-w-2xl bg-[#141414] border border-[#262626] rounded-2xl p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">System Settings &amp; Integrations</h3>
                  <p className="text-xs text-[#737373] mt-1">Configure your email notifications, contact form thresholds, and deployment targets.</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Instant Email Alerts</p>
                      <p className="text-[11px] text-[#737373] mt-0.5">Receive immediate notification whenever an inquiry is submitted.</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Active (Nodemailer)
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Telegram Order Alerts</p>
                      <p className="text-[11px] text-[#737373] mt-0.5">Connected Telegram bot notifications for client stores.</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#BB4D00] bg-[#BB4D00]/10 px-2.5 py-1 rounded-full border border-[#BB4D00]/20">
                      Configured
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Hosting &amp; DB</p>
                      <p className="text-[11px] text-[#737373] mt-0.5">Vercel (Frontend) &amp; Render (Node/Express API) with MongoDB Atlas.</p>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-white/10 px-2.5 py-1 rounded-full">
                      v2.0 Architecture
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ── 4. INSPECT INQUIRY MODAL POPUP ── */}
      {viewMessage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#171717] border border-[#262626] rounded-2xl w-full max-w-lg p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#262626] pb-4">
              <div>
                <h3 className="text-base font-bold text-white">{viewMessage.name}</h3>
                <p className="text-xs text-[#737373] mt-0.5">{viewMessage.email}</p>
              </div>
              <button
                onClick={() => setViewMessage(null)}
                className="text-xs text-[#A3A3A3] hover:text-white px-2.5 py-1 rounded-lg bg-[#222]"
              >
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626]">
                <p className="text-[#737373] font-semibold text-[10px] uppercase">Phone</p>
                <p className="text-white font-medium mt-1">{viewMessage.phone || "Not provided"}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626]">
                <p className="text-[#737373] font-semibold text-[10px] uppercase">Project Type</p>
                <p className="text-white font-medium mt-1">{viewMessage.projectType || "Not specified"}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626]">
                <p className="text-[#737373] font-semibold text-[10px] uppercase">Budget Range</p>
                <p className="text-[#BB4D00] font-bold mt-1">{viewMessage.budget || "Prefer not to say"}</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0A0A] border border-[#262626]">
                <p className="text-[#737373] font-semibold text-[10px] uppercase">Received Date</p>
                <p className="text-white font-medium mt-1">
                  {new Date(viewMessage.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0A0A] border border-[#262626]">
              <p className="text-[10px] font-bold uppercase text-[#737373] tracking-wider mb-2">Message Body</p>
              <p className="text-xs text-white leading-relaxed whitespace-pre-wrap">{viewMessage.message}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={`mailto:${viewMessage.email}?subject=Regarding your inquiry on Kenan.Dev`}
                className="px-4 py-2 rounded-xl bg-[#BB4D00] hover:bg-[#D65A00] text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(187,77,0,0.3)]"
              >
                Reply via Email →
              </a>
              <button
                onClick={() => {
                  setDeletePopup({ isOpen: true, id: viewMessage._id });
                }}
                className="px-3 py-2 rounded-xl text-xs text-red-400 hover:bg-red-500/10 transition-colors"
              >
                Delete Message
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 5. DELETE POPUP ── */}
      <DeletePopup
        isOpen={deletePopup.isOpen}
        onClose={() => setDeletePopup({ isOpen: false, id: null })}
        onConfirm={confirmDelete}
        title="Delete Inquiry"
        message="Are you sure you want to permanently delete this inquiry? This cannot be undone."
        confirmText="Delete Message"
        isLoading={isDeleting}
      />
    </div>
  );
}
