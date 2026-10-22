"use client";

import { FormEvent, useState, useRef, useEffect } from "react";
import Link from "next/link";

const email = "kenanworku981@gmail.com";
const phone = "+251 955 80 0626";
const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const contactDetails = [
  ["Email", email, `mailto:${email}`],
  ["Phone", phone, "tel:+251955800626"],
];

const nextSteps = [
  ["01", "Review", "I read through your goals, context, and requirements."],
  ["02", "Understand", "We clarify what needs to be built and what matters most."],
  ["03", "Plan", "We discuss a practical next step for the project."],
];

type Toast = {
  type: "success" | "error";
  title: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const abortControllerRef = useRef<AbortController | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear toast timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  const triggerToast = (type: "success" | "error", title: string, message: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ type, title, message });

    // Toast auto-dismisses after 5.5s
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 5500);
  };

  const closeToast = () => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (loading) return;
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleCancel = () => {
    if (loading && abortControllerRef.current) {
      abortControllerRef.current.abort();
      setLoading(false);
      triggerToast("error", "Submission Cancelled", "The request was stopped before completing.");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    if (!API_URL) {
      triggerToast("error", "Service Unavailable", "Contact service is not configured. Please email me directly.");
      return;
    }

    setLoading(true);
    abortControllerRef.current = new AbortController();

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: abortControllerRef.current.signal,
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          budget: form.budget,
          message: form.message,
        }),
      });
      const data: { message?: string } = await response.json();

      if (!response.ok) {
        triggerToast("error", "Failed to Send", data.message || "Your message could not be sent. Please check and try again.");
        return;
      }

      triggerToast("success", "Message Sent Successfully!", "Thanks — your message has been received. I’ll review it and get back to you promptly.");
      setForm(initialForm);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      triggerToast("error", "Connection Error", "We couldn’t reach the server. Please check your connection or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* ── Top-Right Floating Animated Toast Notification ── */}
      {toast && (
        <aside
          role={toast.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`contact-toast contact-toast--${toast.type}`}
        >
          <div className="contact-toast__icon">
            {toast.type === "success" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
            )}
          </div>
          <div className="contact-toast__body">
            <h4 className="contact-toast__title">{toast.title}</h4>
            <p className="contact-toast__msg">{toast.message}</p>
          </div>
          <button
            type="button"
            onClick={closeToast}
            className="contact-toast__close"
            aria-label="Dismiss notification"
          >
            ✕
          </button>
          {/* Animated 5s countdown timer bar */}
          <div className="contact-toast__progress" />
        </aside>
      )}

      <header className="contact-intro">
        <div className="contact-shell">
          <p className="eyebrow">Start a conversation</p>
          <h1>Let&apos;s build something <em>meaningful.</em></h1>
          <p>Tell me about your website, full-stack application, or digital project. Share the goals, the context, and what you would like to make better.</p>
        </div>
      </header>

      <section className="contact-main">
        <div className="contact-shell contact-grid">
          <aside className="contact-aside">
            <div className="contact-details">
              <p className="eyebrow">Direct contact</p>
              {contactDetails.map(([label, value, href]) => (
                <a href={href} key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </a>
              ))}
              <div className="contact-detail">
                <span>Based in</span>
                <strong>Adama, Ethiopia</strong>
              </div>
            </div>
            <div className="contact-socials">
              <p className="eyebrow">Elsewhere</p>
              <div>
                <Link href="https://github.com/Teshome-Worku" target="_blank" rel="noreferrer">
                  GitHub ↗
                </Link>
                <Link href="https://www.linkedin.com/in/kenan-worku-017834392" target="_blank" rel="noreferrer">
                  LinkedIn ↗
                </Link>
              </div>
            </div>
            <div className="contact-next">
              <p className="eyebrow">What happens next</p>
              {nextSteps.map(([number, title, description]) => (
                <div key={number}>
                  <span>{number}</span>
                  <p>
                    <strong>{title}</strong>
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__heading">
              <p className="eyebrow">Project inquiry</p>
              <h2>What are you working on?</h2>
              <p>Even an early idea is a good place to start. The more context you share, the more useful our first conversation can be.</p>
            </div>

            {/* Fieldset disables all child inputs/selects during submission */}
            <fieldset disabled={loading} className="contact-fieldset">
              <div className="contact-fields">
                <label>
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={3}
                    maxLength={50}
                    placeholder="Your name"
                  />
                </label>
                <label>
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  Phone <span>(optional)</span>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+251 ..."
                  />
                </label>
                <label>
                  Project type <span>(optional)</span>
                  <select name="projectType" value={form.projectType} onChange={handleChange}>
                    <option value="">Choose one</option>
                    <option>Business Website</option>
                    <option>Full-Stack Application</option>
                    <option>E-commerce</option>
                    <option>API Integration</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Budget range <span>(optional)</span>
                  <select name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Prefer not to say</option>
                    <option>Under $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500+</option>
                  </select>
                </label>
                <label className="contact-field--full">
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={5}
                    rows={6}
                    placeholder="Tell me about your goals, users, timeline, or the problem you want to solve."
                  />
                </label>
              </div>
            </fieldset>

            {/* Actions: Send button + Cancel button */}
            <div className="contact-form__actions">
              <button
                type="submit"
                disabled={loading}
                className={`contact-submit-btn${loading ? " is-submitting" : ""}`}
              >
                {loading ? (
                  <span className="contact-submit-btn__inner">
                    <span className="contact-btn-spinner" aria-hidden="true" />
                    <span>Submitting inquiry...</span>
                  </span>
                ) : (
                  <span className="contact-submit-btn__inner">
                    <span>Send project inquiry</span>
                    <span aria-hidden="true">→</span>
                  </span>
                )}
              </button>

              {loading && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="contact-cancel-btn"
                  aria-label="Cancel submission"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  <span>Cancel</span>
                </button>
              )}
            </div>

            <p className="contact-form__note">
              Your message is sent securely to the portfolio contact service. I&apos;ll review it before getting back to you.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
