"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * SlideShell — the 16:9 presentation canvas.
 * Renders at a fixed 1280x720 design size and scales to fit the viewport
 * via the parent PresentationApp scaler. Preserves the original PPT layout
 * (white background, Carlito typography, padding rhythm).
 */
export function SlideShell({
  children,
  className = "",
  background,
}: {
  children: ReactNode;
  className?: string;
  background?: ReactNode;
}) {
  return (
    <div
      className={`deck-stage relative overflow-hidden bg-white ${className}`}
      style={{ width: 1280, height: 720 }}
    >
      {/* optional decorative background layer */}
      {background}
      {/* content layer */}
      <div className="relative h-full w-full">{children}</div>
    </div>
  );
}

/* ---------- Decorative orbs (from cover/section slides) ---------- */
export function DecorOrbs() {
  return (
    <>
      <div
        className="float-slow absolute rounded-full"
        style={{
          right: -80,
          top: -80,
          width: 300,
          height: 300,
          background: "rgba(37,99,235,0.07)",
        }}
      />
      <div
        className="float-slow-2 absolute rounded-full"
        style={{
          left: -70,
          bottom: -70,
          width: 260,
          height: 260,
          background: "rgba(124,58,237,0.07)",
        }}
      />
    </>
  );
}

/* ---------- Slide header (eyebrow + title) used on content slides ---------- */
export function SlideHeader({
  eyebrow,
  title,
  accent = "blue",
}: {
  eyebrow?: string;
  title: string;
  accent?: "blue" | "purple" | "teal" | "amber";
}) {
  const accentMap: Record<string, string> = {
    blue: "#2563eb",
    purple: "#7c3aed",
    teal: "#0ea5a4",
    amber: "#f59e0b",
  };
  return (
    <div className="flex items-center gap-3">
      <div
        className="h-9 w-1.5 rounded-full"
        style={{ background: accentMap[accent] }}
      />
      <div>
        {eyebrow && (
          <div
            className="text-[20px] font-bold uppercase tracking-[0.22em]"
            style={{ color: accentMap[accent] }}
          >
            {eyebrow}
          </div>
        )}
        <h2
          className="text-[44px] font-bold leading-tight"
          style={{ color: "#111827", letterSpacing: "-0.01em" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

/* ---------- Reusable tinted card (matches PPT card style) ---------- */
export function TintCard({
  children,
  tint = "#f0fdfa",
  border = "#ccfbf1",
  className = "",
  style,
}: {
  children: ReactNode;
  tint?: string;
  border?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ background: tint, border: `1px solid ${border}`, ...style }}
    >
      {children}
    </div>
  );
}

/* ---------- Section pill / badge ---------- */
export function Pill({
  children,
  color = "#2563eb",
  bg = "#eff6ff",
}: {
  children: ReactNode;
  color?: string;
  bg?: string;
}) {
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-[20px] font-bold uppercase tracking-[0.14em]"
      style={{ color, background: bg }}
    >
      {children}
    </span>
  );
}

/* ---------- Staggered reveal helper for in-slide content ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Small icon tile used across the deck ---------- */
export function IconTile({
  glyph,
  color = "#2563eb",
  bg = "#eff6ff",
  size = 44,
}: {
  glyph: ReactNode;
  color?: string;
  bg?: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center rounded-xl font-bold"
      style={{
        width: size,
        height: size,
        color,
        background: bg,
        fontSize: size * 0.45,
        lineHeight: 1,
      }}
    >
      {glyph}
    </div>
  );
}
