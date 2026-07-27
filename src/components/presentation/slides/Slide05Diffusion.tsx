"use client";

import { motion } from "framer-motion";
import DiffusionModel from "../math/DiffusionModel";
import EquationReveal from "../math/EquationReveal";

const STEPS = [
  { token: "x", label: "ₜ", caption: "xₜ = the noisy image at step t", color: "#111827" },
  { token: " = x", label: "ₜ", caption: "new image = current image, then corrected", color: "#6b7280" },
  { token: " − σ", label: "ₜ", caption: "σₜ = how much noise to remove this step", color: "#f59e0b" },
  { token: " · ε(x", label: "ₜ", caption: "ε = the AI's prediction of where the noise is", color: "#7c3aed" },
  { token: ")", label: "", caption: "subtract the predicted noise → cleaner image", color: "#10b981" },
];

export default function Slide05Diffusion() {
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
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#7c3aed" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            Diffusion Models
          </h2>
        </div>
      </motion.div>

      {/* two-column body */}
      <div className="mt-5 grid grid-cols-2 gap-6" style={{ minHeight: 0 }}>
        {/* left: equation + explanation */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            The denoising equation
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
            <ul className="list-disc pl-5 space-y-1.5 text-[21px] leading-relaxed text-gray-600">
              <li>Predicts noise then subtracts it</li>
              <li>Pure noise becomes a clear image</li>
              <li>A differential equation run backwards</li>
            </ul>
          </div>

          <div className="mt-3 mb-1 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Revealed step by step
          </div>
          <EquationReveal steps={STEPS} active interval={1500} />

          <div className="mt-4 grid grid-cols-2 gap-2">
            {[
              { t: "DALL·E & Stable Diffusion", c: "#7c3aed", b: "#f5f3ff" },
              { t: "Solves a DE backwards", c: "#2563eb", b: "#eff6ff" },
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

        {/* right: animated diffusion */}
        <div className="flex flex-col">
          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Watch noise become an image
          </div>
          <DiffusionModel active />
        </div>
      </div>

      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        05 / 11
      </div>
    </div>
  );
}
