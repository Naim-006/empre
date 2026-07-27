"use client";

import { motion } from "framer-motion";
import { TEAM } from "../team";

export default function Slide10Conclusion() {
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      {/* decorative */}
      <div className="float-slow absolute rounded-full" style={{ right: -100, top: -100, width: 320, height: 320, background: "rgba(16,185,129,0.06)" }} />
      <div className="float-slow-2 absolute rounded-full" style={{ left: -90, bottom: -90, width: 280, height: 280, background: "rgba(124,58,237,0.06)" }} />

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
            Conclusion
          </h2>
        </div>
      </motion.div>

      {/* journey recap */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-5 rounded-2xl p-5"
        style={{ background: "#f9fafb", border: "1px solid #e5e7eb" }}
      >
        <div className="mb-3 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
          Our journey
        </div>
        <div className="flex flex-col gap-2.5">
          {TEAM.map((m, i) => {
            const bullets = [
              ["AI generates images, understands sound, and stays stable."],
              ["Differential Equations power AI image generation.", "Noise is transformed into meaningful images."],
              ["Fourier Transform powers speech recognition.", "Sound waves become frequency data."],
              ["Laplace Transform powers AI control systems.", "Time signals enable stability analysis."],
              ["Three syllabus topics form the engine of AI.", "Mathematics drives real-world AI applications."],
            ];
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.18 }}
                className="flex items-start gap-3"
              >
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white"
                  style={{ background: m.color }}
                >
                  {m.id}
                </span>
                <div className="flex-1">
                  <div className="text-[21px] font-bold" style={{ color: m.color }}>
                    {m.name} — {m.role}
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {bullets[i].map((b, j) => (
                      <li key={j} className="text-[22px] leading-snug text-gray-700">{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="eq hidden shrink-0 text-[21px] font-bold sm:block" style={{ color: m.color }}>
                  {m.equation}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* the takeaway */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
        className="mt-4 rounded-2xl px-6 py-4"
        style={{ background: "linear-gradient(90deg,#eff6ff,#f5f3ff,#f0fdfa)" }}
      >
        <ul className="list-disc pl-5 space-y-1.5">
          <li className="text-[30px] font-bold leading-snug" style={{ color: "#111827" }}>
            Engineering Mathematics is not just theory —{" "}
            <span style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed,#0ea5a4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              it is the engine of Artificial Intelligence
            </span>.
          </li>
          <li className="text-[21px] font-medium text-gray-500">
            Every AI feature we use daily runs on the mathematics from our syllabus.
          </li>
        </ul>
      </motion.div>

      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        10 / 11
      </div>
    </div>
  );
}
