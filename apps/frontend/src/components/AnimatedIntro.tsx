"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "kenan_intro_seen";

export default function AnimatedIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors if private mode disables sessionStorage
    }
  }, []);

  useEffect(() => {
    setMounted(true);

    // 1. Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    // 2. Check if already seen in current session
    try {
      const hasSeen = sessionStorage.getItem(STORAGE_KEY);
      if (hasSeen === "true") {
        return;
      }
    } catch {
      return;
    }

    // Activate the intro
    setIsVisible(true);

    // 3. Fallback auto-dismiss timer (safety cap at 2.6s)
    const timer = setTimeout(() => {
      handleDismiss();
    }, 2500);

    // 4. Keyboard dismissal on Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  if (!mounted || !isVisible) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="animated-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="intro-overlay"
          role="region"
          aria-label="Portfolio Introduction"
        >
          {/* Subtle Ambient Radial Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.45, scale: 1.15 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="intro-glow"
            aria-hidden="true"
          />

          {/* Center Stage Presentation */}
          <div className="intro-stage">
            {/* ─── STAGE A: Vector Logo Animation ─── */}
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="intro-logo-container"
            >
              <svg
                width="84"
                height="84"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="intro-logo-svg"
                aria-label="Kenan.Dev Emblem"
              >
                <defs>
                  <linearGradient id="introLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#181818" />
                    <stop offset="100%" stopColor="#0A0A0A" />
                  </linearGradient>
                  <linearGradient id="introLogoEmber" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF7A00" />
                    <stop offset="100%" stopColor="#BB4D00" />
                  </linearGradient>
                  <filter id="introLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="4.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <radialGradient id="introDotAura" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.9" />
                    <stop offset="70%" stopColor="#BB4D00" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Obsidian Tile Base with Subtle Ember Border Accent */}
                <motion.rect
                  width="128"
                  height="128"
                  rx="28"
                  fill="url(#introLogoBg)"
                  stroke="#262626"
                  strokeWidth="2.5"
                  initial={{ strokeOpacity: 0.3 }}
                  animate={{ strokeOpacity: 0.8 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.rect
                  x="2"
                  y="2"
                  width="124"
                  height="124"
                  rx="26"
                  fill="none"
                  stroke="#BB4D00"
                  strokeWidth="1.2"
                  initial={{ pathLength: 0, strokeOpacity: 0 }}
                  animate={{ pathLength: 1, strokeOpacity: 0.45 }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />

                {/* 1. Terminal Cursor Spine (Pure White) - draws downwards */}
                <motion.rect
                  x="30"
                  y="28"
                  width="9"
                  height="72"
                  rx="4.5"
                  fill="#FFFFFF"
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={{ scaleY: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "34px 28px" }}
                />

                {/* 2. Upper Angled Code Beam (Ember Orange) - draws outward */}
                <motion.path
                  d="M48 64 L84 32"
                  stroke="url(#introLogoEmber)"
                  strokeWidth="9.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 3. Lower Angled Code Beam (Ember Orange) - draws outward */}
                <motion.path
                  d="M48 64 L84 96"
                  stroke="url(#introLogoEmber)"
                  strokeWidth="9.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 4. Right .Dev Chevron Closure (Crisp White Accent) */}
                <motion.path
                  d="M84 46 L98 64 L84 82"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="6.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* 5. Glowing Pulse Dot Core & Aura */}
                <motion.circle
                  cx="104"
                  cy="64"
                  r="12"
                  fill="url(#introDotAura)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.3, 1], opacity: [0, 0.8, 0.6] }}
                  transition={{ duration: 0.6, delay: 0.68, ease: "easeOut" }}
                />
                <motion.circle
                  cx="104"
                  cy="64"
                  r="5.5"
                  fill="#FF7A00"
                  filter="url(#introLogoGlow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.72, ease: "backOut" }}
                />
              </svg>
            </motion.div>

            {/* ─── STAGE B: Professional Identity Reveal ─── */}
            <div className="intro-identity">
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="intro-name"
              >
                Kenan Worku
              </motion.h1>

              {/* Title & Accent Divider */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                className="intro-title-row"
              >
                <span className="intro-title-line" aria-hidden="true" />
                <span className="intro-title">Full-Stack Developer</span>
                <span className="intro-title-line" aria-hidden="true" />
              </motion.div>
            </div>
          </div>

          {/* ─── Accessible Skip Intro Control ─── */}
          <motion.button
            type="button"
            onClick={handleDismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="intro-skip-btn"
            aria-label="Skip animated intro"
          >
            <span>Skip</span>
            <kbd className="intro-skip-kbd">Esc</kbd>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
