"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const email = "teshomeworku96@gmail.com";
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

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    setError("");

    if (!API_URL) {
      setError("The contact service is not configured right now. Please use the email address below.");
      return;
    }

    setLoading(true);
    const context = [
      form.phone && `Phone: ${form.phone}`,
      form.projectType && `Project type: ${form.projectType}`,
      form.budget && `Budget range: ${form.budget}`,
    ].filter(Boolean);
    const message = context.length > 0
      ? `${form.message}\n\nProject details:\n${context.join("\n")}`
      : form.message;

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      });
      const data: { message?: string } = await response.json();

      if (!response.ok) {
        setError(data.message || "Your message could not be sent. Please try again.");
        return;
      }

      setStatus("Thanks — your message has been received. I’ll review it and get back to you.");
      setForm(initialForm);
    } catch {
      setError("We couldn’t reach the contact service. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
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
                <Link href="https://www.linkedin.com/in/teshome-worku-017834392" target="_blank" rel="noreferrer">
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
            {status && <p className="contact-status contact-status--success" role="status">{status}</p>}
            {error && <p className="contact-status contact-status--error" role="alert">{error}</p>}
            <div className="contact-fields">
              <label>
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  minLength={3}
                  maxLength={30}
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
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send project inquiry"}
              <span aria-hidden="true">{loading ? "..." : "→"}</span>
            </button>
            <p className="contact-form__note">
              Your message is sent securely to the portfolio contact service. I&apos;ll review it before getting back to you.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
