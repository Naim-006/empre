"use client";

import { motion } from "framer-motion";

export default function Slide11ThankYou() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white">
      <div className="float-slow absolute rounded-full" style={{ right: -120, top: -120, width: 380, height: 380, background: "rgba(16,185,129,0.06)" }} />
      <div className="float-slow-2 absolute rounded-full" style={{ left: -100, bottom: -100, width: 320, height: 320, background: "rgba(37,99,235,0.06)" }} />
      <div className="absolute rounded-full" style={{ left: 140, top: 110, width: 50, height: 50, background: "rgba(124,58,237,0.08)" }} />
      <div className="absolute rounded-full" style={{ right: 200, bottom: 130, width: 36, height: 36, background: "rgba(245,158,11,0.1)" }} />

      <div className="relative z-10 flex flex-col items-center px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 rounded-2xl px-8 py-4"
          style={{ background: "linear-gradient(135deg,#1e3a5f,#2563eb)" }}
        >
          <p className="text-[32px] font-bold italic leading-tight text-white">
            "The brain of AI is mathematics"
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[54px] font-bold leading-tight"
          style={{ color: "#111827", letterSpacing: "-0.02em" }}
        >
          Thank You
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 h-1 w-20 rounded-full"
          style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#0ea5a4,#f59e0b,#10b981)" }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-5 text-[22px] font-medium leading-relaxed"
          style={{ color: "#6b7280" }}
        >
          Applications of Engineering Mathematics in CSE
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 text-[18px] font-semibold uppercase tracking-[0.2em] text-gray-400"
        >
          Computer Science &amp; Engineering
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        11 / 11
      </div>
    </div>
  );
}
