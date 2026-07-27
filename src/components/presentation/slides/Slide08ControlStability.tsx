"use client";

import { motion } from "framer-motion";
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
        <li>Self-driving cars and robotics need stable, real-time control</li>
        <li>Laplace Transform converts time-domain signals into the s-domain</li>
        <li>Analyses stability before deploying AI in the real world</li>
      </motion.ul>

      {/* two-column body */}
      <div className="mt-5 grid grid-cols-2 gap-6" style={{ minHeight: 0 }}>
        {/* left: brief formal explanation */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Formal definition
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-[21px] leading-relaxed text-gray-600 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <li>Converts a time-domain signal <span className="eq font-semibold">f(t)</span> into a function of <span className="eq font-semibold">s</span></li>
            <li>Differential equations become <span className="font-semibold" style={{ color: "#f59e0b" }}>simple algebra</span> in the s-domain</li>
            <li>Enables stability analysis for control systems and robotics</li>
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
              <li>• Reinforcement learning policy stability</li>
              <li>• Robotics and autonomous vehicle control</li>
              <li>• Signal processing in neural feedback loops</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mt-3 rounded-lg px-3 py-2 text-[20px]"
            style={{ background: "#ecfdf5", border: "1px solid #a7f3d0", color: "#047857" }}
          >
            Next: Member 5 brings all three transforms together.
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

      <div className="absolute bottom-5 left-10 flex items-center gap-2 text-[20px] font-bold" style={{ color: "#0ea5a4" }}>
        <span className="opacity-80">Tahsin Afridi</span>
        <span className="text-gray-400 font-medium">|</span>
        <span className="text-gray-500 font-medium">252-15-467</span>
      </div>
      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        08 / 11
      </div>
    </div>
  );
}
