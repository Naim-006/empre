"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * EquationReveal — reveals an equation token-by-token (step by step) so the
 * audience sees each mathematical symbol appear in sequence, with an
 * optional caption per step. Cycles automatically while the slide is active.
 */
export interface EqStep {
  /** the token/symbol shown at this step (kept visible afterwards) */
  token: string;
  /** plain (non-italic) label */
  label?: string;
  /** caption explaining what this token means */
  caption: string;
  color?: string;
}

export default function EquationReveal({
  steps,
  active,
  interval = 1500,
}: {
  steps: EqStep[];
  active: boolean;
  interval?: number;
}) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setShown((s) => (s >= steps.length ? s : s + 1));
    }, interval);
    return () => window.clearInterval(id);
  }, [active, steps.length, interval]);

  const current = steps[Math.min(shown, steps.length - 1)];

  return (
    <div>
      {/* equation line */}
      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-2 rounded-xl border border-gray-200 bg-white px-4 py-3">
        {steps.slice(0, Math.max(1, shown)).map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="eq text-[26px] font-bold"
            style={{ color: s.color || "#111827" }}
          >
            {s.token}
            {s.label && (
              <span className="eq ml-0.5 text-[18px] font-medium not-italic" style={{ color: "#6b7280" }}>
                {s.label}
              </span>
            )}
          </motion.span>
        ))}
        {shown === 0 && (
          <span className="text-[15px] italic text-gray-400">revealing…</span>
        )}
      </div>

      {/* current caption */}
      <AnimatePresence mode="wait">
        {current && shown > 0 && (
          <motion.div
            key={shown}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.3 }}
            className="mt-2 flex items-start gap-2 rounded-lg px-2 py-1"
            style={{ background: (current.color || "#2563eb") + "12" }}
          >
            <span
              className="mt-1 h-2 w-2 shrink-0 rounded-full"
              style={{ background: current.color || "#2563eb" }}
            />
            <span className="text-[15px] leading-relaxed text-gray-600">
              <span className="font-bold" style={{ color: current.color || "#2563eb" }}>
                {current.token.replace(/[=+−·∂∫]/g, "").trim() || "→"}{" "}
              </span>
              {current.caption}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
