"use client";

import { motion } from "framer-motion";
import DiffusionModel from "../math/DiffusionModel";
import EquationReveal from "../math/EquationReveal";

const STEPS = [
  {
    token: "x",
    label: "ₜ₋₁",
    caption: "Cleaner image after one reverse diffusion step.",
    color: "#111827",
  },
  {
    token: " = x",
    label: "ₜ",
    caption: "Current noisy image.",
    color: "#6b7280",
  },
  {
    token: " − σ",
    label: "ₜ",
    caption: "σₜ controls how much noise is removed.",
    color: "#f59e0b",
  },
  {
    token: " · ε",
    label: "θ(xₜ,t)",
    caption: "The neural network predicts the noise.",
    color: "#7c3aed",
  },
];

export default function Slide05Diffusion() {
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-1.5 rounded-full"
            style={{ background: "#7c3aed" }}
          />
          <h2
            className="text-[44px] font-bold"
            style={{ color: "#111827" }}
          >
            Diffusion Models
          </h2>
        </div>
      </motion.div>

      <div className="mt-5 grid grid-cols-2 gap-6">

        {/* LEFT */}
        <div className="flex flex-col">

          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Reverse-Time Differential Equation
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">

            <div className="eq text-center text-[30px] font-bold text-gray-900">
              dx/dt = f(x,t) − g(t)²∇ log p(x,t)
            </div>

            <p className="mt-3 text-[18px] leading-relaxed text-gray-600">
              This is the mathematical equation that describes how a noisy image
              evolves backwards toward a clean image.
            </p>

          </div>

          <div className="mt-4 mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Practical Denoising Step
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50 p-3">

            <div className="eq text-center text-[28px] font-bold text-purple-800">
              xₜ₋₁ = xₜ − σₜ · εθ(xₜ,t)
            </div>

            <p className="mt-2 text-center text-[17px] text-gray-600">
              The AI predicts the noise and subtracts a small portion of it at
              every step.
            </p>

          </div>

          <div className="mt-4 mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Equation Breakdown
          </div>

          <EquationReveal
            steps={STEPS}
            active
            interval={1500}
          />

          <div className="mt-5 grid grid-cols-2 gap-3">

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="rounded-xl border border-purple-200 bg-purple-50 p-3"
            >
              <div className="text-[15px] font-bold text-purple-700">
                Stable Diffusion
              </div>

              <div className="mt-1 text-[14px] text-gray-600">
                Starts from random Gaussian noise.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15 }}
              className="rounded-xl border border-blue-200 bg-blue-50 p-3"
            >
              <div className="text-[15px] font-bold text-blue-700">
                Reverse Process
              </div>

              <div className="mt-1 text-[14px] text-gray-600">
                Repeatedly solves the reverse diffusion process until a clean
                image appears.
              </div>
            </motion.div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col">

          <div className="mb-2 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            Watch Noise Become an Image
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
