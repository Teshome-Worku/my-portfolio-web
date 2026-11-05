"use client";

import { motion, type TargetAndTransition, type HTMLMotionProps } from "framer-motion";
import React, { ReactNode } from "react";

type AnimationVariant = {
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
};

// Fluid, alive spring and cubic-bezier easing curves
const smoothEase = [0.22, 1, 0.36, 1] as const;

// Predefined animation variants tailored for alive, premium feels
export const variants: Record<string, AnimationVariant> = {
  fadeInUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: smoothEase } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 36 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: smoothEase } },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.93, y: 24 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.65, ease: smoothEase } },
  },
  cardElevate: {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: smoothEase } },
  },
  // Stagger containers
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: smoothEase } },
  },
  staggerCard: {
    hidden: { opacity: 0, y: 26, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: smoothEase } },
  },
};

type MotionTag = "div" | "section" | "article" | "header" | "aside" | "form";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  delay?: number;
  viewportAmount?: number;
  as?: MotionTag;
  id?: string;
  style?: React.CSSProperties;
  onSubmit?: React.FormEventHandler;
}

export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeInUp",
  delay = 0,
  viewportAmount = 0.15, // Trigger when 15% is visible
  as = "div",
  id,
  style,
  onSubmit,
}: AnimatedSectionProps) {
  const baseVariant = variants[variant] || variants.fadeInUp;
  const customVariant = delay
    ? {
        ...baseVariant,
        visible: {
          ...baseVariant.visible,
          transition: {
            ...(typeof baseVariant.visible.transition === "object" ? baseVariant.visible.transition : {}),
            delay,
          },
        },
      }
    : baseVariant;

  const Component = motion[as] as React.ElementType;

  return (
    <Component
      id={id}
      style={style}
      onSubmit={onSubmit}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={customVariant}
    >
      {children}
    </Component>
  );
}

// Staggered Container specifically for grids/lists
export function AnimatedStaggerContainer({
  children,
  className = "",
  viewportAmount = 0.1,
  as = "div",
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  viewportAmount?: number;
  as?: MotionTag;
  id?: string;
  style?: React.CSSProperties;
}) {
  const Component = motion[as] as React.ElementType;

  return (
    <Component
      id={id}
      style={style}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants.staggerContainer}
    >
      {children}
    </Component>
  );
}

// Staggered item for lists
export function AnimatedStaggerItem({
  children,
  className = "",
  variant = "staggerItem",
  as = "div",
  style,
}: {
  children: ReactNode;
  className?: string;
  variant?: "staggerItem" | "staggerCard";
  as?: MotionTag;
  style?: React.CSSProperties;
}) {
  const Component = motion[as] as React.ElementType;

  return (
    <Component style={style} className={className} variants={variants[variant] || variants.staggerItem}>
      {children}
    </Component>
  );
}
