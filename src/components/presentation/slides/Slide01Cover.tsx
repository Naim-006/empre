"use client";

import { motion } from "framer-motion";
import { TEAM } from "../team";

export default function Slide01Cover() {
  return (
    <div className="relative flex h-full w-full flex-col bg-white">
      <div className="float-slow absolute rounded-full" style={{ right: 60, top: -120, width: 420, height: 420, background: "rgba(37,99,235,0.05)" }} />
      <div className="float-slow-2 absolute rounded-full" style={{ left: -120, bottom: -120, width: 360, height: 360, background: "rgba(124,58,237,0.06)" }} />
      <div className="absolute rounded-full" style={{ left: 120, top: 90, width: 60, height: 60, background: "rgba(14,165,164,0.08)" }} />
      <div className="absolute rounded-full" style={{ right: 180, bottom: 110, width: 40, height: 40, background: "rgba(245,158,11,0.1)" }} />

      {/* university header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-center pt-6 z-10"
      >
        <div className="text-[21px] font-black uppercase tracking-[0.28em]" style={{ color: "#1e3a5f" }}>
          Daffodil International University
        </div>
        <div className="text-[16px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#6b7280" }}>
          Dhaka, Bangladesh
        </div>
        <div className="mx-auto mt-1.5 h-0.5 w-20 rounded-full" style={{ background: "linear-gradient(90deg,#1e3a5f,#2563eb)" }} />
      </motion.div>

      {/* center content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <MathMark />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-4xl text-[46px] font-bold leading-tight mt-2"
          style={{ color: "#111827", letterSpacing: "-0.02em" }}
        >
          Applications of Engineering Mathematics
          <br />
          <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#0ea5a4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            in Artificial Intelligence
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 h-0.5 w-16 rounded-full"
          style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed)" }}
        />
      </div>

      {/* bottom section: team left, faculty right */}
      <div className="relative z-10 flex items-stretch px-14 pb-6 gap-8">
        {/* team — left side */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex-[2] rounded-xl px-6 py-4"
          style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
        >
          <div className="text-[17px] font-bold uppercase tracking-[0.16em] mb-3" style={{ color: "#374151" }}>
            Team Members
          </div>
          <div className="flex flex-col gap-2">
            {TEAM.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
                className="flex items-center justify-between"
              >
                <span className="text-[22px] font-bold" style={{ color: "#1e293b" }}>
                  {m.name}
                </span>
                <span className="text-[18px] font-semibold tracking-wide" style={{ color: "#475569" }}>
                  {m.id}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* faculty — right side */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex-[1.5] rounded-xl px-6 py-4"
          style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
        >
          <div className="text-[17px] font-bold uppercase tracking-[0.16em] mb-2.5" style={{ color: "#374151" }}>
            Faculty Supervisor
          </div>
          <div className="text-[22px] font-bold leading-tight" style={{ color: "#0f172a" }}>
            Prof. Dr. Bimal Chandra Das
          </div>
          <div className="text-[17px] font-medium leading-snug mt-1" style={{ color: "#475569" }}>
            Associate Dean &amp; Professor,<br />Department of Computer Science and Engineering
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-10 text-[18px] font-semibold tracking-[0.2em] text-gray-300">
        02 / 11
      </div>
    </div>
  );
}

function MathMark() {
  return (
    <svg width="90" height="70" viewBox="0 0 100 80">
      <motion.path
        d="M 20 12 C 20 12, 35 12, 35 25 C 35 38, 20 50, 20 62 C 20 70, 30 72, 36 66"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.path
        d="M 48 14 L 72 14 L 58 40 L 72 66 L 48 66"
        fill="none"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {[[20, 12], [48, 14], [72, 14], [48, 66], [72, 66]].map(([cx, cy], i) => (
        <motion.circle key={i} cx={cx} cy={cy} r="3" fill={i % 2 ? "#2563eb" : "#7c3aed"}
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 + i * 0.1 }} />
      ))}
    </svg>
  );
}
