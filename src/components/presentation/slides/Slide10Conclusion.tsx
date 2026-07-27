"use client";

import { motion } from "framer-motion";

const CHAPTERS = [
  { label: "Differential Equations", topic: "AI Image Generation", color: "#2563eb" },
  { label: "Fourier Transform", topic: "AI for Sound & Speech", color: "#7c3aed" },
  { label: "Laplace Transform", topic: "AI Control & Stability", color: "#0ea5a4" },
  { label: "Probability", topic: "AI Decision Making", color: "#f59e0b" },
];

export default function Slide10Conclusion() {
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      <div className="float-slow absolute rounded-full" style={{ right: -100, top: -100, width: 320, height: 320, background: "rgba(16,185,129,0.06)" }} />
      <div className="float-slow-2 absolute rounded-full" style={{ left: -90, bottom: -90, width: 280, height: 280, background: "rgba(124,58,237,0.06)" }} />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#10b981" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            Conclusion
          </h2>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2 text-[25px] font-medium leading-relaxed"
        style={{ color: "#6b7280" }}
      >
        We explored how four mathematical concepts power modern AI
      </motion.p>

      <div className="mt-5 grid grid-cols-2 gap-4 flex-1">
        {CHAPTERS.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
            className="rounded-xl p-5 flex items-center gap-4"
            style={{ background: c.color + "0d", border: `1px solid ${c.color}30` }}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white" style={{ background: c.color }}>
              {i + 1}
            </span>
            <div>
              <div className="text-[22px] font-bold" style={{ color: c.color }}>{c.label}</div>
              <div className="text-[18px] font-medium text-gray-500">→ {c.topic}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-4 rounded-2xl px-6 py-5 text-center"
        style={{ background: "linear-gradient(90deg,#eff6ff,#f5f3ff,#f0fdfa)" }}
      >
        <p className="text-[32px] font-bold leading-snug" style={{ color: "#111827" }}>
          Mathematics is not just theory —{" "}
          <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#0ea5a4,#f59e0b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            it is the engine of Artificial Intelligence
          </span>
        </p>
      </motion.div>

      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        10 / 11
      </div>
    </div>
  );
}
