"use client";

import { motion } from "framer-motion";
import FourierTransform from "../math/FourierTransform";
import EquationReveal from "../math/EquationReveal";

const STEPS = [
  { token: "F(ω)", label: "", caption: "F(ω) = the strength of frequency ω", color: "#0ea5a4" },
  { token: " = ∫ ", label: "", caption: "integrate — measure over all time", color: "#6b7280" },
  { token: "f(t)", label: "", caption: "f(t) = the sound wave in time", color: "#111827" },
  { token: " · e", label: "⁻ⁱωᵗ", caption: "e⁻ⁱωᵗ = a pure test frequency (a tone)", color: "#2563eb" },
  { token: " dt", label: "", caption: "sum over time → the amount of that tone present", color: "#7c3aed" },
];

export default function Slide07Fourier() {
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
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#0ea5a4" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            Fourier Transform
          </h2>
        </div>
      </motion.div>

      {/* two-column body */}
      <div className="mt-5 grid grid-cols-2 gap-6" style={{ minHeight: 0 }}>
        {/* left: equation + explanation */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            The transform equation
          </div>
          <ul className="list-disc pl-5 space-y-1.5 text-[21px] leading-relaxed text-gray-600 rounded-xl border border-gray-200 bg-gray-50 p-3">
            <li>Measures frequency content in waves</li>
            <li><span className="font-semibold" style={{ color: "#0ea5a4" }}>Time → frequency</span> domain</li>
            <li>Powers voice recognition and MP3</li>
          </ul>

          <div className="mt-3 mb-1 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Revealed step by step
          </div>
          <EquationReveal steps={STEPS} active interval={1500} />

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              { t: "Voice AI (Siri, Alexa, ChatGPT)", c: "#0ea5a4", b: "#f0fdfa" },
              { t: "Audio compression via MP3", c: "#2563eb", b: "#eff6ff" },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                className="rounded-xl p-2.5"
                style={{ background: x.b, border: `1px solid ${x.c}22` }}
              >
                <div className="text-[10px] font-semibold leading-tight" style={{ color: "#374151" }}>
                  {x.t}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* right: animated fourier */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Watch a wave split into frequencies
          </div>
          <FourierTransform active />
        </div>
      </div>

      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        07 / 11
      </div>
    </div>
  );
}
