"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * LaplaceTransform — compact, formal visualization.
 *
 * Shows a damped oscillation in the time domain (left) transforming into
 * the s-domain (right) via a pole on the left half-plane (stable system).
 * Kept brief because Laplace is a formal mention, not a deep dive.
 *
 * Equation: F(s) = ∫₀^∞ f(t) e^(-st) dt
 */
export default function LaplaceTransform({ active }: { active: boolean }) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => setT((v) => (v + 0.03) % 6), 30);
    return () => window.clearInterval(id);
  }, [active]);

  const W = 500;
  const H = 130;
  const PAD = 16;

  // damped oscillation: f(t) = e^(-0.4t) * sin(3t)
  const path = (() => {
    const pts: string[] = [];
    const samples = 100;
    for (let i = 0; i <= samples; i++) {
      const time = (i / samples) * 6;
      const y = Math.exp(-0.4 * time) * Math.sin(3 * time);
      const x = PAD + (i / samples) * (W / 2 - PAD - 10);
      const py = H / 2 - y * 30;
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(" ");
  })();

  // moving dot on the curve
  const dotTime = t;
  const dotY = Math.exp(-0.4 * dotTime) * Math.sin(3 * dotTime);
  const dotX = PAD + (dotTime / 6) * (W / 2 - PAD - 10);
  const dotPy = H / 2 - dotY * 30;

  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            Time Domain → s-Domain
          </span>
          <span className="text-[20px] font-semibold text-gray-400">stability analysis</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
          {/* divider line */}
          <line x1={W / 2} y1={10} x2={W / 2} y2={H - 10} stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* LEFT: time-domain damped oscillation */}
          <line x1={PAD} y1={H / 2} x2={W / 2 - 10} y2={H / 2} stroke="#e5e7eb" strokeWidth="1" />
          <text x={PAD} y={H - 4} fontSize="12" fill="#6b7280" fontStyle="italic">f(t) = e⁻⁰·⁴ᵗ sin(3t)</text>
          <motion.path
            d={path}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* moving dot */}
          <circle cx={dotX} cy={dotPy} r="4" fill="#f59e0b" stroke="white" strokeWidth="1.5" />
          <text x={PAD + 4} y={18} fontSize="12" fill="#9ca3af" fontWeight="700">TIME</text>

          {/* arrow */}
          <g transform={`translate(${W / 2 - 6},${H / 2 - 8})`}>
            <motion.path
              d="M 0 8 L 12 8"
              stroke="#6b7280"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              markerEnd="url(#lapArrow)"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <defs>
              <marker id="lapArrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="#6b7280" />
              </marker>
            </defs>
          </g>

          {/* RIGHT: s-domain pole plot */}
          <g transform={`translate(${W / 2 + 20},0)`}>
            {/* axes */}
            <line x1={0} y1={H / 2} x2={W / 2 - PAD - 20} y2={H / 2} stroke="#d1d5db" strokeWidth="1.5" />
            <line x1={50} y1={16} x2={50} y2={H - 16} stroke="#d1d5db" strokeWidth="1.5" />
            <text x={W / 2 - PAD - 20} y={H / 2 - 4} fontSize="16" fill="#9ca3af" fontStyle="italic" textAnchor="end">Re</text>
            <text x={54} y={20} fontSize="16" fill="#9ca3af" fontStyle="italic">Im</text>
            <text x={4} y={18} fontSize="12" fill="#9ca3af" fontWeight="700">FREQUENCY</text>

            {/* stable region shading (left half plane) */}
            <rect x={0} y={16} width={50} height={H - 32} fill="#10b981" opacity={0.06} />
            <text x={6} y={H - 8} fontSize="14" fill="#10b981" fontWeight="700">stable</text>

            {/* poles (x marks) */}
            {[
              { re: -0.4, im: 3 },
              { re: -0.4, im: -3 },
            ].map((p, i) => {
              const px = 50 + p.re * 30;
              const py = H / 2 - p.im * 8;
              return (
                <motion.g
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.2 }}
                  style={{ transformOrigin: `${px}px ${py}px` }}
                >
                  <line x1={px - 5} y1={py - 5} x2={px + 5} y2={py + 5} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1={px - 5} y1={py + 5} x2={px + 5} y2={py - 5} stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
                </motion.g>
              );
            })}
            <text x={50 - 0.4 * 30 + 8} y={H / 2 - 3 * 8 - 4} fontSize="16" fill="#f59e0b" fontWeight="700">pole</text>
          </g>
        </svg>
      </div>

      {/* formal note */}
      <div className="rounded-xl p-3" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
        <div className="mb-1 text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
          Formal definition
        </div>
        <div className="eq text-[18px] font-bold text-gray-800">
          F(s) = ∫₀^∞ f(t) e⁻ˢᵗ dt
        </div>
        <div className="mt-1 text-[20px] leading-snug text-gray-600">
          Converts time-domain signals into the s-domain. Poles on the left half-plane
          mean a stable system — essential for AI control and reinforcement learning.
        </div>
      </div>
    </div>
  );
}
