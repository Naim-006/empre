"use client";

import { motion } from "framer-motion";
export default function Slide06SoundSpeech() {
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
            AI for Sound &amp; Speech
          </h2>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-2 text-[25px] leading-relaxed"
        style={{ color: "#6b7280" }}
      >
        Voice assistants like Siri and Alexa understand speech. The math behind them?
        The Fourier Transform — converting sound waves into frequencies.
      </motion.p>

      {/* body: left = intuition, right = concept visual */}
      <div className="mt-5 grid grid-cols-2 gap-6">
        {/* left: 3-step intuition */}
        <div className="flex flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-xl p-4"
            style={{ background: "#f0fdfa", border: "1px solid #ccfbf1" }}
          >
            <div className="text-[20px] font-bold uppercase tracking-[0.14em]" style={{ color: "#0ea5a4" }}>
              Step 1 — Sound is a Wave
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1.5 text-[22px] leading-relaxed text-gray-700">
              <li>When you speak, the air vibrates</li>
              <li>A microphone records this as a <span className="font-bold" style={{ color: "#0ea5a4" }}>complex wave</span> over time</li>
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
              Step 2 — Split into Frequencies
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1.5 text-[22px] leading-relaxed text-gray-700">
              <li>Fourier Transform breaks the wave into individual <span className="font-bold" style={{ color: "#2563eb" }}>pure frequencies</span></li>
              <li>Like separating a chord into individual notes</li>
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
              Step 3 — Recognize Patterns
            </div>
            <ul className="mt-1.5 list-disc pl-5 space-y-1.5 text-[22px] leading-relaxed text-gray-700">
              <li>AI matches frequency patterns to known words</li>
              <li>This is how <span className="font-bold" style={{ color: "#10b981" }}>speech recognition</span> works</li>
            </ul>
          </motion.div>
        </div>

        {/* right: wave → frequencies concept */}
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
          <WaveToFreqConcept />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 text-center text-[21px] leading-relaxed text-gray-600"
          >
            One complex wave becomes many pure tones —<br />
            this is the <span className="font-bold" style={{ color: "#0ea5a4" }}>Fourier Transform</span>.
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-10 flex items-center gap-2 text-[20px] font-bold" style={{ color: "#7c3aed" }}>
        <span className="opacity-80">Md Nuruzzaman Raju</span>
        <span className="text-gray-400 font-medium">|</span>
        <span className="text-gray-500 font-medium">252-15-363</span>
      </div>
      <div className="absolute bottom-5 right-10 text-[20px] font-semibold tracking-[0.2em] text-gray-300">
        06 / 11
      </div>
    </div>
  );
}

/** Concept visual: complex wave on top, frequency bars on bottom */
function WaveToFreqConcept() {
  const W = 240;
  const H = 160;

  // complex wave path (sum of 2 sines)
  const wavePath = (() => {
    const pts: string[] = [];
    for (let i = 0; i <= 60; i++) {
      const t = (i / 60) * Math.PI * 2;
      const y = 0.6 * Math.sin(3 * t) + 0.3 * Math.sin(7 * t);
      const x = 10 + (i / 60) * (W - 20);
      const py = 35 - y * 20;
      pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${py.toFixed(1)}`);
    }
    return pts.join(" ");
  })();

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
      {/* wave section */}
      <text x={10} y={14} fontSize="10" fill="#9ca3af" fontWeight="700">SOUND WAVE</text>
      <line x1={10} y1={35} x2={W - 10} y2={35} stroke="#e5e7eb" strokeWidth="1" />
      <path d={wavePath} fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" />

      {/* arrow down */}
      <motion.path
        d={`M ${W / 2} 60 L ${W / 2} 78`}
        stroke="#0ea5a4"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        markerEnd="url(#ftArrow)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
      <defs>
        <marker id="ftArrow" markerWidth="8" markerHeight="8" refX="4" refY="6" orient="auto">
          <path d="M0,0 L8,6 L0,8 Z" fill="#0ea5a4" />
        </marker>
      </defs>

      {/* frequency bars */}
      <text x={10} y={92} fontSize="10" fill="#9ca3af" fontWeight="700">FREQUENCIES</text>
      <line x1={10} y1={H - 10} x2={W - 10} y2={H - 10} stroke="#d1d5db" strokeWidth="1.5" />

      {[
        { x: 30, h: 35, color: "#2563eb" },
        { x: 70, h: 18, color: "#7c3aed" },
        { x: 110, h: 28, color: "#0ea5a4" },
        { x: 150, h: 12, color: "#f59e0b" },
        { x: 190, h: 22, color: "#10b981" },
      ].map((bar, i) => (
        <motion.rect
          key={i}
          x={bar.x}
          y={H - 10 - bar.h}
          width="24"
          height={bar.h}
          rx={3}
          fill={bar.color}
          initial={{ height: 0, y: H - 10 }}
          animate={{ height: bar.h, y: H - 10 - bar.h }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}
