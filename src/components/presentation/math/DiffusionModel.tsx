"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * DiffusionModel — animated visualization of how AI image generation works.
 *
 * Shows a pixel grid that starts as pure random noise and progressively
 * denoises into a recognizable shape (a cat face). This is the visual
 * story of differential equations running in reverse: the AI starts from
 * noise and "solves backwards" to produce an image.
 *
 * The denoising step:  x_{t-1} = x_t - sigma_t * epsilon(x_t)
 */
const GRID = 10; // 10x10 pixel grid

// Target image: a simple cat face (1 = dark/face, 0 = light/background)
const CAT: number[][] = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
];

export default function DiffusionModel({ active }: { active: boolean }) {
  const [step, setStep] = useState(0);
  const STEPS = 12; // denoising steps from noise → image

  // pre-generate random noise per pixel (stable across renders)
  const noise = useMemo(() => {
    const n: number[][] = [];
    for (let r = 0; r < GRID; r++) {
      n[r] = [];
      for (let c = 0; c < GRID; c++) {
        n[r][c] = Math.random();
      }
    }
    return n;
  }, []);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setStep((s) => (s >= STEPS ? 0 : s + 1));
    }, 700);
    return () => window.clearInterval(id);
  }, [active, STEPS]);

  // progress: 0 = full noise, 1 = full image
  const progress = step / STEPS;
  const converged = step >= STEPS - 1;

  const CELL = 26;
  const GAP = 2;
  const SIZE = GRID * (CELL + GAP) - GAP;
  const PADDING = 14;
  const W = SIZE + PADDING * 2;
  const H = SIZE + PADDING * 2 + 50;

  // color for a pixel at given row, col
  function pixelColor(r: number, c: number): string {
    const target = CAT[r][c]; // 0 or 1
    const targetVal = target === 1 ? 0.15 : 0.95; // dark or light
    const noiseVal = noise[r][c];
    // interpolate from noise → target
    const val = noiseVal * (1 - progress) + targetVal * progress;
    const gray = Math.round(val * 255);
    return `rgb(${gray},${gray},${gray})`;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="relative rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            Noise → Image (Reverse Diffusion)
          </span>
          <span className="text-[20px] font-semibold text-gray-400">
            step {step} / {STEPS}
          </span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
          {/* pixel grid */}
          <g transform={`translate(${PADDING},${PADDING})`}>
            {Array.from({ length: GRID }).map((_, r) =>
              Array.from({ length: GRID }).map((_, c) => (
                <motion.rect
                  key={`${r}-${c}`}
                  x={c * (CELL + GAP)}
                  y={r * (CELL + GAP)}
                  width={CELL}
                  height={CELL}
                  rx={3}
                  fill={pixelColor(r, c)}
                  animate={{ fill: pixelColor(r, c) }}
                  transition={{ duration: 0.5 }}
                />
              )),
            )}
          </g>

          {/* arrow + label at bottom */}
          <g transform={`translate(${PADDING},${SIZE + PADDING + 10})`}>
            <text x={0} y={14} fontSize="20" fill="#6b7280" fontStyle="italic">
              t = {Math.max(0, STEPS - step)}  (noise level)
            </text>
            <text x={W - PADDING * 2} y={14} fontSize="20" fill="#7c3aed" fontWeight="700" textAnchor="end">
              {converged ? "image generated" : "denoising…"}
            </text>
          </g>
        </svg>
      </div>

      {/* status row */}
      <div className="grid grid-cols-2 gap-3">
        <div
          className="rounded-xl p-3"
          style={{
            background: converged ? "#ecfdf5" : "#f5f3ff",
            border: `1px solid ${converged ? "#a7f3d0" : "#ede9fe"}`,
          }}
        >
          <div className="mb-1 text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            What is happening
          </div>
          <div className="text-[15px] font-semibold leading-snug" style={{ color: converged ? "#047857" : "#5b21b6" }}>
            {converged
              ? "The AI reached a clean image from pure noise."
              : "Each step removes a little noise — solving a DE in reverse."}
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <div className="mb-1 text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            The denoising rule
          </div>
          <div className="eq text-[16px] font-bold text-gray-800">
            xₜ₋₁ = xₜ − σₜ · ε(xₜ)
          </div>
          <div className="mt-1 text-[17px] text-gray-500">
            subtract the predicted noise each step
          </div>
        </div>
      </div>
    </div>
  );
}
