"use client";

import { Image, Volume2, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
const STAGES = [
  {
    math: "Differential Equations",
    app: "AI Image Generation",
    eq: "xₜ₋₁ = xₜ − σₜ · ε(xₜ)",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ede9fe",
    icon: "image",
  },
  {
    math: "Fourier Transform",
    app: "AI for Sound & Speech",
    eq: "F(ω) = ∫ f(t) e⁻ⁱωᵗ dt",
    color: "#0ea5a4",
    bg: "#f0fdfa",
    border: "#ccfbf1",
    icon: "volume",
  },
  {
    math: "Laplace Transform",
    app: "AI Control & Stability",
    eq: "F(s) = ∫ f(t) e⁻ˢᵗ dt",
    color: "#f59e0b",
    bg: "#fffbeb",
    border: "#fde68a",
    icon: "settings",
  },
];

export default function Slide09Pipeline() {
  const [showSpeaker, setShowSpeaker] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSpeaker(false), 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      {/* decorative */}
      <div className="float-slow absolute rounded-full" style={{ right: -80, top: -80, width: 260, height: 260, background: "rgba(16,185,129,0.05)" }} />

      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#10b981" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            The AI Pipeline
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
        <li>Three mathematical transforms power modern AI</li>
        <li>Each drives a different AI application</li>
      </motion.ul>

      {/* pipeline: three columns with flow */}
      <div className="mt-6 flex items-stretch gap-3">
        {STAGES.map((s, i) => (
          <div key={i} className="flex flex-1 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.2 }}
              className="flex-1 rounded-2xl p-5"
              style={{ background: s.bg, border: `1px solid ${s.border}` }}
            >
              <div className="flex items-center gap-2">
                {s.icon === "image" ? <Image size={32} /> : s.icon === "volume" ? <Volume2 size={32} /> : <Settings size={32} />}
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[20px] font-bold text-white"
                  style={{ background: s.color }}
                >
                  {i + 1}
                </span>
              </div>
              <div className="mt-3 text-[19px] font-bold text-gray-900">{s.math}</div>
              <div className="eq mt-2 rounded-lg bg-white px-3 py-2 text-center text-[20px] font-bold" style={{ color: s.color, border: `1px solid ${s.border}` }}>
                {s.eq}
              </div>
              <div className="mt-3 text-[20px] font-bold uppercase tracking-[0.12em]" style={{ color: s.color }}>
                Applied to
              </div>
              <div className="text-[22px] font-semibold text-gray-700">{s.app}</div>
            </motion.div>
            {i < STAGES.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.2 }}
                className="px-2 text-[32px] font-bold text-gray-300"
              >
                +
              </motion.div>
            )}
          </div>
        ))}
      </div>

     

      <AnimatePresence>
        {showSpeaker && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-5 right-5 z-20 rounded-full px-4 py-2 shadow-lg"
            style={{ background: "rgba(245,158,11,0.92)" }}
          >
            <span className="text-[18px] font-bold text-white">Nazmus Sakib</span>
            <span className="mx-2 text-white/60">|</span>
            <span className="text-[16px] font-medium text-white/80">252-15-839</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        09 / 11
      </div>
    </div>
  );
}
