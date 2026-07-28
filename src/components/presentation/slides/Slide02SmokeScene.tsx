"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide02SmokeScene() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      className="relative h-full w-full bg-white overflow-hidden cursor-pointer"
      onClick={() => setRevealed(true)}
    >
      <img
        src="/smoke-scene.png"
        alt="Smoke scene"
        className="absolute inset-0 h-full w-full object-contain p-4"
      />

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 px-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block rounded-xl px-5 py-2 text-[18px] font-bold text-amber-300 mb-3"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              AI Generated (Gemini)
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[36px] font-bold leading-tight text-white text-center"
            >
              Mr Einstein and Ajmine Taking photo
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-3 text-[24px] font-semibold text-red-400 text-center"
            >
               Ethical tip: Generating fake image is punishable offense! 
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-5 right-10 z-20 text-[20px] font-semibold tracking-[0.2em] text-gray-400">
        {revealed ? "01 / 11" : "Click to reveal"}
      </div>
    </div>
  );
}
