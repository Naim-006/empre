"use client";

import { motion } from "framer-motion";

export default function Slide04ImageGeneration() {
  return (
    <div className="relative flex h-full w-full flex-col bg-white px-12 py-7">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-start"
      >
        <div className="flex items-center gap-3">
          <div className="h-9 w-1.5 rounded-full" style={{ background: "#7c3aed" }} />
          <h2 className="text-[44px] font-bold leading-tight" style={{ color: "#111827", letterSpacing: "-0.01em" }}>
            AI Image Generation
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
          <li>DALL·E and Stable Diffusion generate images from text</li>
          <li>Powered by differential equations solved in reverse</li>
        </ul>
      </motion.div>

      <div className="mt-5 grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl p-4"
            style={{ background: "#f5f3ff", border: "1px solid #ede9fe" }}
          >
            <div className="text-[20px] font-bold uppercase tracking-[0.14em]" style={{ color: "#7c3aed" }}>
              Step 1 — Add Noise
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1 text-[22px] leading-relaxed text-gray-700">
              <li>Start with a real image and add random noise</li>
              <li>Repeat until the image becomes pure static</li>
              <li>This is the <span className="font-bold" style={{ color: "#7c3aed" }}>forward diffusion</span> process</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-xl p-4"
            style={{ background: "#eff6ff", border: "1px solid #dbeafe" }}
          >
            <div className="text-[20px] font-bold uppercase tracking-[0.14em]" style={{ color: "#2563eb" }}>
              Step 2 — Learn to Reverse
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1 text-[22px] leading-relaxed text-gray-700">
              <li>Train a neural network to predict the noise</li>
              <li>Learn to remove noise at each timestep</li>
              <li>This is <span className="font-bold" style={{ color: "#2563eb" }}>solving a DE backwards</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="rounded-xl p-4"
            style={{ background: "#ecfdf5", border: "1px solid #a7f3d0" }}
          >
            <div className="text-[20px] font-bold uppercase tracking-[0.14em]" style={{ color: "#10b981" }}>
              Step 3 — Generate
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1 text-[22px] leading-relaxed text-gray-700">
              <li>Start from pure random noise</li>
              <li>Run the reverse denoising process</li>
              <li>The result is a <span className="font-bold" style={{ color: "#10b981" }}>brand-new AI image</span></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center justify-center rounded-xl p-5"
          style={{ background: "#fafafa", border: "1px solid #e5e7eb" }}
        >
          <div className="mb-3 text-[20px] font-bold uppercase tracking-[0.14em] text-gray-500">
            The core idea
          </div>
          <NoiseToImageConcept />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-[21px] leading-relaxed text-gray-600"
          >
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Each denoising step removes predicted noise</li>
              <li>A differential equation running in reverse</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        04 / 11
      </div>
    </div>
  );
}

function NoiseToImageConcept() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1.5">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => (
              <rect
                key={`${r}-${c}`}
                x={c * 10}
                y={r * 10}
                width="10"
                height="10"
                fill={`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`}
              />
            )),
          )}
        </svg>
        <span className="text-[10px] font-bold text-gray-500">noise</span>
      </div>

      <div className="flex flex-col gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.3, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5 + i * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-[25px] text-purple-500"
          >
            →
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => {
              const isCat =
                (r === 1 && (c === 1 || c === 6)) ||
                (r === 3 && (c === 2 || c === 5)) ||
                (r === 4 && c >= 3 && c <= 4) ||
                (r === 5 && c >= 3 && c <= 4);
              const gray = isCat ? 60 : 200 + Math.random() * 55;
              return (
                <rect
                  key={`${r}-${c}`}
                  x={c * 10}
                  y={r * 10}
                  width="10"
                  height="10"
                  fill={`rgb(${gray},${gray},${gray})`}
                />
              );
            }),
          )}
        </svg>
        <span className="text-[10px] font-bold text-gray-500">step t</span>
      </div>

      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="text-[25px] text-purple-500"
      >
        →
      </motion.div>

      <div className="flex flex-col items-center gap-1.5">
        <svg width="80" height="80" viewBox="0 0 80 80">
          {Array.from({ length: 8 }).map((_, r) =>
            Array.from({ length: 8 }).map((_, c) => {
              const isCat =
                (r === 1 && (c === 1 || c === 6)) ||
                (r === 3 && (c === 2 || c === 5)) ||
                (r === 4 && c >= 3 && c <= 4) ||
                (r === 5 && c >= 3 && c <= 4);
              return (
                <rect
                  key={`${r}-${c}`}
                  x={c * 10}
                  y={r * 10}
                  width="10"
                  height="10"
                  fill={isCat ? "#1f2937" : "#f9fafb"}
                />
              );
            }),
          )}
        </svg>
        <span className="text-[10px] font-bold text-gray-500">image</span>
      </div>
    </div>
  );
}
