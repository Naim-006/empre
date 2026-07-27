"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * FourierTransform — animated visualization of the Fourier Transform.
 *
 * Shows a complex sound wave (top) breaking down into its component
 * frequencies (bottom bars). As the animation cycles, individual sine
 * waves stack up to form the complex wave, demonstrating how AI "hears"
 * by transforming time-domain signals into the frequency domain.
 *
 * Equation: F(ω) = ∫ f(t) e^(-iωt) dt
 */

// three component frequencies that make up the "sound"
const COMPONENTS = [
  { freq: 2, amp: 0.7, color: "#2563eb", label: "220 Hz" },
  { freq: 5, amp: 0.35, color: "#7c3aed", label: "550 Hz" },
  { freq: 9, amp: 0.2, color: "#0ea5a4", label: "990 Hz" },
];

export default function FourierTransform({ active }: { active: boolean }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setPhase((p) => (p + 0.04) % (Math.PI * 2));
    }, 40);
    return () => window.clearInterval(id);
  }, [active]);

  const W = 520;
  const H_WAVE = 110;
  const H_BARS = 90;
  const PAD = 16;

  // generate the complex wave path (sum of components)
  const wavePath = useMemo(() => {
    const points: string[] = [];
    const samples = 120;
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * Math.PI * 2;
      let y = 0;
      for (const c of COMPONENTS) {
        y += c.amp * Math.sin(c.freq * t + phase);
      }
      const x = PAD + (i / samples) * (W - PAD * 2);
      const py = H_WAVE / 2 - y * (H_WAVE / 2 - 8);
      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${py.toFixed(1)}`);
    }
    return points.join(" ");
  }, [phase]);

  // individual component wave paths
  const componentPaths = COMPONENTS.map((c) => {
    const points: string[] = [];
    const samples = 80;
    for (let i = 0; i <= samples; i++) {
      const t = (i / samples) * Math.PI * 2;
      const y = c.amp * Math.sin(c.freq * t + phase);
      const x = PAD + (i / samples) * (W - PAD * 2);
      const py = H_WAVE / 2 - y * (H_WAVE / 2 - 8);
      points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${py.toFixed(1)}`);
    }
    return { path: points.join(" "), color: c.color, freq: c.freq, amp: c.amp, label: c.label };
  });

  const barW = (W - PAD * 2) / COMPONENTS.length - 8;

  return (
    <div className="flex flex-col gap-2">
      {/* complex waveform */}
      <div className="relative rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            Sound Wave — Time Domain
          </span>
          <span className="text-[20px] font-semibold text-gray-400">f(t)</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H_WAVE}`} className="w-full" style={{ height: H_WAVE }}>
          {/* center line */}
          <line x1={PAD} y1={H_WAVE / 2} x2={W - PAD} y2={H_WAVE / 2} stroke="#e5e7eb" strokeWidth="1" />
          {/* component waves (faint) */}
          {componentPaths.map((cp, i) => (
            <motion.path
              key={i}
              d={cp.path}
              fill="none"
              stroke={cp.color}
              strokeWidth="1.5"
              opacity={0.35}
              strokeDasharray="3 3"
            />
          ))}
          {/* complex wave (bold) */}
          <motion.path
            d={wavePath}
            fill="none"
            stroke="#111827"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* frequency bars */}
      <div className="relative rounded-xl border border-gray-200 bg-white p-3">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            Frequencies — Frequency Domain
          </span>
          <span className="text-[20px] font-semibold text-gray-400">F(ω)</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H_BARS}`} className="w-full" style={{ height: H_BARS }}>
          {/* baseline */}
          <line x1={PAD} y1={H_BARS - 8} x2={W - PAD} y2={H_BARS - 8} stroke="#d1d5db" strokeWidth="1.5" />
          {/* bars */}
          {COMPONENTS.map((c, i) => {
            const x = PAD + i * (barW + 8);
            const h = c.amp * (H_BARS - 24);
            return (
              <g key={i}>
                <motion.rect
                  x={x}
                  y={H_BARS - 8 - h}
                  width={barW}
                  height={h}
                  rx={4}
                  fill={c.color}
                  initial={{ height: 0, y: H_BARS - 8 }}
                  animate={{ height: h, y: H_BARS - 8 - h }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                />
                <text
                  x={x + barW / 2}
                  y={H_BARS - 8 - h - 6}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="700"
                  fill={c.color}
                >
                  {c.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* status */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl p-3" style={{ background: "#f0fdfa", border: "1px solid #ccfbf1" }}>
          <div className="mb-1 text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            What is happening
          </div>
          <div className="text-[15px] font-semibold leading-snug" style={{ color: "#0f766e" }}>
            One complex wave splits into pure frequencies. This is how AI hears.
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-3">
          <div className="mb-1 text-[20px] font-bold uppercase tracking-[0.16em] text-gray-500">
            The transform
          </div>
          <div className="eq text-[16px] font-bold text-gray-800">
            F(ω) = ∫ f(t) e⁻ⁱωᵗ dt
          </div>
          <div className="mt-1 text-[17px] text-gray-500">
            time domain → frequency domain
          </div>
        </div>
      </div>
    </div>
  );
}
