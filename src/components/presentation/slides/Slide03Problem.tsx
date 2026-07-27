"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Image, Mic, Bot } from "lucide-react";

const EXAMPLES = [
  {
    icon: Image,
    title: "AI Image Generation",
    bullets: [
      "A text prompt produces a photo-realistic image",
      "The computer only processes numbers, not meaning",
      "How does it bridge text to pixels?",
    ],
    color: "#7c3aed",
    bg: "#f5f3ff",
  },
  {
    icon: Mic,
    title: "Speech Recognition",
    bullets: [
      "Sound waves are converted into accurate text",
      "Handles varied voices, accents, and background noise",
      "All in real time with high precision",
    ],
    color: "#0ea5a4",
    bg: "#f0fdfa",
  },
  {
    icon: Bot,
    title: "Autonomous Systems",
    bullets: [
      "Self-driving cars navigate dynamic environments",
      "Must maintain stability and safety in real time",
      "No room for delay or error",
    ],
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

export default function Slide03Problem() {
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
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#2563eb" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            The Problem
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2"
        style={{ color: "#6b7280" }}
      >
        <ul className="list-disc pl-5 space-y-1.5 text-[25px] leading-relaxed">
          <li>AI appears intelligent but only processes numbers</li>
          <li>How are images, speech, and control possible?</li>
        </ul>
      </motion.div>

      <div className="mt-5 grid grid-cols-3 gap-4">
        {EXAMPLES.map((e, i) => {
          const IconComponent = e.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="rounded-2xl p-5"
              style={{ background: e.bg, border: `1px solid ${e.color}22` }}
            >
              <div
                className="inline-flex items-center justify-center rounded-xl p-3"
                style={{ background: e.color + "18" }}
              >
                <IconComponent className="w-8 h-8" style={{ color: e.color }} />
              </div>
              <div className="mt-3 text-[28px] font-bold text-gray-900">{e.title}</div>
              <ul className="mt-1.5 list-disc pl-5 space-y-1 text-[21px] leading-relaxed text-gray-600">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>



      <AnimatePresence>
        {showSpeaker && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="absolute top-5 right-5 z-20 rounded-full px-4 py-2 shadow-lg"
            style={{ background: "rgba(37,99,235,0.92)" }}
          >
            <span className="text-[18px] font-bold text-white">Naim Hossain</span>
            <span className="mx-2 text-white/60">|</span>
            <span className="text-[16px] font-medium text-white/80">252-15-178</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        03 / 11
      </div>
    </div>
  );
}
