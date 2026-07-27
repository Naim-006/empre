"use client";

import { motion } from "framer-motion";
import { TEAM } from "../team";

export default function Slide11ThankYou() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white">
      {/* decorative orbs */}
      <div className="float-slow absolute rounded-full" style={{ right: -120, top: -120, width: 380, height: 380, background: "rgba(16,185,129,0.06)" }} />
      <div className="float-slow-2 absolute rounded-full" style={{ left: -100, bottom: -100, width: 320, height: 320, background: "rgba(37,99,235,0.06)" }} />
      <div className="absolute rounded-full" style={{ left: 140, top: 110, width: 50, height: 50, background: "rgba(124,58,237,0.08)" }} />
      <div className="absolute rounded-full" style={{ right: 200, bottom: 130, width: 36, height: 36, background: "rgba(245,158,11,0.1)" }} />

      <div className="relative z-10 flex flex-col items-center px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[22px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "#10b981" }}
        >
          Thank You
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[54px] font-bold leading-tight"
          style={{ color: "#111827", letterSpacing: "-0.02em" }}
        >
          Questions?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-4 h-1 w-20 rounded-full"
          style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#0ea5a4,#f59e0b,#10b981)" }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-5 max-w-xl text-[25px] font-medium leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Applications of Engineering Mathematics in CSE</li>
            <li>
              <span className="font-semibold" style={{ color: "#111827" }}>
                The Math Behind Modern AI
              </span>
            </li>
          </ul>
        </motion.div>

        {/* team strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-7 flex items-stretch gap-3"
        >
          {TEAM.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="flex w-[160px] flex-col items-center gap-1.5 rounded-xl p-3"
              style={{ background: m.bg, border: `1px solid ${m.border}` }}
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[22px] font-bold text-white"
                style={{ background: m.color }}
              >
                {m.id}
              </span>
              <span className="text-[20px] font-bold" style={{ color: m.color }}>
                {m.name}
              </span>
              <span className="text-center text-[9px] font-medium leading-tight text-gray-500">
                {m.role.split("—")[0].trim()}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-7 text-[20px] font-semibold uppercase tracking-[0.2em] text-gray-400"
        >
          Computer Science &amp; Engineering · 5-Member Team
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        11 / 11
      </div>
    </div>
  );
}
