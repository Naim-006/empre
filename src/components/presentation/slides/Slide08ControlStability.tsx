"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import LaplaceTransform from "../math/LaplaceTransform";
import EquationReveal from "../math/EquationReveal";

const STEPS = [
  { token: "F(s)", label: "", caption: "F(s) = the signal in the s-domain", color: "#f59e0b" },
  { token: " = ∫₀", label: "⁺∞", caption: "integrate over all future time", color: "#6b7280" },
  { token: " f(t)", label: "", caption: "f(t) = the signal in time", color: "#111827" },
  { token: " · e", label: "⁻ˢᵗ", caption: "e⁻ˢᵗ = damping + oscillation factor", color: "#2563eb" },
  { token: " dt", label: "", caption: "converts time-domain → s-domain", color: "#7c3aed" },
];

export default function Slide08ControlStability() {
  const [showSpeaker, setShowSpeaker] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSpeaker(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#f59e0b" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            AI Control &amp; Stability
          </h2>
        </div>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="list-disc pl-5 space-y-1.5 mt-2 text-[25px] leading-relaxed"
        style={{ color: "#6b7280" }}
      >
        <li>Stable real-time control systems</li>
        <li>Time-domain → s-domain conversion</li>
        <li>Stability analysis before deployment</li>
      </motion.ul>

      {/* two-column body */}
      <div className="mt-5 grid grid-cols-2 gap-6" style={{ minHeight: 0 }}>
        {/* left: brief formal explanation */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Formal definition
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-[21px] leading-relaxed text-gray-600 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <li><span className="eq font-semibold">f(t)</span> → <span className="eq font-semibold">s</span>-domain function</li>
            <li>Differential eq → <span className="font-semibold" style={{ color: "#f59e0b" }}>simple algebra</span></li>
            <li>Stability for control &amp; robotics</li>
          </ul>

          <div className="mt-3 mb-1 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            The equation, revealed
          </div>
          <EquationReveal steps={STEPS} active interval={1600} />

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 rounded-xl p-3"
            style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
          >
            <div className="text-[20px] font-bold uppercase tracking-[0.14em]" style={{ color: "#f59e0b" }}>
              Where it is used in AI
            </div>
            <ul className="mt-2 space-y-1 text-[21px] leading-relaxed text-gray-700">
              <li>• RL policy stability</li>
              <li>• Robotics &amp; autonomous control</li>
              <li>• Neural feedback loop processing</li>
            </ul>
          </motion.div>

        </div>

        {/* right: laplace visual */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Time domain → s-domain
          </div>
          <LaplaceTransform active />
        </div>
      </div>

      <AnimatePresence>
        {showSpeaker && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-5 right-5 z-20 rounded-full px-4 py-2 shadow-lg"
            style={{ background: "rgba(14,165,164,0.92)" }}
          >
            <span className="text-[18px] font-bold text-white">Tahsin Afridi</span>
            <span className="mx-2 text-white/60">|</span>
            <span className="text-[16px] font-medium text-white/80">252-15-467</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        08 / 11
      </div>
    </div>
  );
}
