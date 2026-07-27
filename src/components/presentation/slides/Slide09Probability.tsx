"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXAMPLES = [
  {
    question: "Is this a cat?",
    result: "95% cat, 5% dog",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    question: "What word was spoken?",
    result: "85% 'hello', 10% 'yellow'",
    color: "#d97706",
    bg: "#fef3c7",
  },
  {
    question: "Should the car brake?",
    result: "99% brake immediately",
    color: "#b45309",
    bg: "#fff7ed",
  },
];

export default function Slide09Probability() {
  const [showSpeaker, setShowSpeaker] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSpeaker(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#f59e0b" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            Probability in AI
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
        <li>AI decisions are never 100% certain</li>
        <li>Probability measures how confident AI is</li>
      </motion.ul>

      <div className="mt-5 grid grid-cols-3 gap-4 flex-1">
        {EXAMPLES.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            style={{ background: e.bg, border: `1px solid ${e.color}44` }}
          >
            <div className="text-[22px] font-semibold text-gray-500 mb-2">Input</div>
            <div className="text-[28px] font-bold leading-tight mb-4" style={{ color: e.color }}>
              {e.question}
            </div>
            <div className="w-full rounded-xl px-4 py-3" style={{ background: e.color + "18" }}>
              <div className="text-[16px] font-semibold uppercase tracking-wider text-gray-500 mb-1">AI says</div>
              <div className="text-[24px] font-bold" style={{ color: e.color }}>
                {e.result}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="mt-4 rounded-xl px-5 py-3 text-center"
        style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
      >
        <p className="text-[25px] font-semibold" style={{ color: "#92400e" }}>
          Every AI prediction is a complex probability result
        </p>
      </motion.div>

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
