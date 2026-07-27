"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  Presentation,
} from "lucide-react";
import { SlideShell } from "./SlideShell";
import { slideRegistry } from "./slides/registry";

export default function PresentationApp() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [presenterMode, setPresenterMode] = useState(false);
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = slideRegistry.length;
  const Current = slideRegistry[index].Component;

  const go = useCallback(
    (next: number, dir: 1 | -1) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === index) return;
      setDirection(dir);
      setIndex(clamped);
    },
    [index, total],
  );

  const nextSlide = useCallback(() => go(index + 1, 1), [go, index]);
  const prevSlide = useCallback(() => go(index - 1, -1), [go, index]);

  /* ---- fullscreen ---- */
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  /* ---- keyboard navigation ---- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Home":
          setDirection(-1);
          setIndex(0);
          break;
        case "End":
          setDirection(1);
          setIndex(total - 1);
          break;
        case "f":
        case "F":
          toggleFullscreen();
          break;
        case "Escape":
          if (showOverview) setShowOverview(false);
          else if (presenterMode) setPresenterMode(false);
          break;
        case "p":
        case "P":
          setPresenterMode((p) => !p);
          break;
        case "o":
        case "O":
        case "g":
        case "G":
          setShowOverview((s) => !s);
          break;
      }
      if (e.key >= "1" && e.key <= "9") {
        const n = parseInt(e.key, 10) - 1;
        if (n < total) go(n, n > index ? 1 : -1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, nextSlide, prevSlide, go, showOverview, presenterMode]);

  /* ---- mouse wheel (debounced) ---- */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (wheelLock.current) return;
      if (showOverview || presenterMode) return;
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 18) return;
      wheelLock.current = true;
      if (delta > 0) nextSlide();
      else prevSlide();
      window.setTimeout(() => (wheelLock.current = false), 720);
    };
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [nextSlide, prevSlide, showOverview, presenterMode]);

  /* ---- touch swipe ---- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      const dy = e.changedTouches[0].clientY - touchStartY.current;
      if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) nextSlide();
        else prevSlide();
      }
      touchStartX.current = null;
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, [nextSlide, prevSlide]);

  /* ---- viewport scaling (cover: fill entire screen) ---- */
  useEffect(() => {
    const onResize = () => {
      const el = containerRef.current;
      if (!el) return;
      const padding = presenterMode ? 24 : 0;
      const w = el.clientWidth - padding * 2;
      const h = el.clientHeight - padding * 2;
      const s = Math.min(w / 1280, h / 720);
      setScale(s > 0 ? s : 1);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [presenterMode]);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const progress = useMemo(() => (index / (total - 1)) * 100, [index, total]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 80 : -80,
      scale: 0.98,
    }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -80 : 80,
      scale: 0.98,
    }),
  };

  return (
    <div
      ref={containerRef}
      className="no-select relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white"
    >
      {/* progress bar (top) */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-30 h-1 bg-gray-100">
        <motion.div
          className="h-full"
          style={{ background: "linear-gradient(90deg,#2563eb,#7c3aed)" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      {/* slide stage */}
      <div
        className="relative"
        style={{
          width: 1280 * scale,
          height: 720 * scale,
        }}
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              position: "absolute",
              inset: 0,
              transformOrigin: "top left",
              width: 1280,
              height: 720,
              // scale the fixed 1280x720 design to the container
              transform: `scale(${scale})`,
            }}
          >
            <SlideShell>
              <Current />
            </SlideShell>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* overview drawer */}
      <AnimatePresence>
        {showOverview && (
          <OverviewPanel
            current={index}
            onClose={() => setShowOverview(false)}
            onPick={(i) => {
              go(i, i > index ? 1 : -1);
              setShowOverview(false);
            }}
          />
        )}
      </AnimatePresence>

      {/* presenter notes drawer */}
      <AnimatePresence>
        {presenterMode && (
          <PresenterPanel
            title={slideRegistry[index].title}
            notes={slideRegistry[index].notes}
            index={index}
            total={total}
            onClose={() => setPresenterMode(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Overview / thumbnail grid ---------- */
function OverviewPanel({
  current,
  onClose,
  onPick,
}: {
  current: number;
  onClose: () => void;
  onPick: (i: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-40 flex flex-col bg-white/95 backdrop-blur"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <h3 className="text-lg font-bold text-gray-900">Slide Overview</h3>
        <button
          className="deck-btn flex h-8 w-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="scrollbar-thin grid flex-1 grid-cols-2 content-start gap-4 overflow-y-auto p-6 sm:grid-cols-3 lg:grid-cols-4">
        {slideRegistry.map((s, i) => {
          const C = s.Component;
          return (
            <button
              key={s.id}
              onClick={() => onPick(i)}
              className={`group relative overflow-hidden rounded-xl border bg-white text-left transition-all hover:shadow-lg ${
                i === current ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
              }`}
            >
              <div
                className="pointer-events-none origin-top-left"
                style={{ width: 1280, height: 720, transform: "scale(0.16)" }}
              >
                <div style={{ width: 1280, height: 720 }}>
                  <SlideShell>
                    <C />
                  </SlideShell>
                </div>
              </div>
              <div
                className="relative flex items-center justify-between px-3 py-2"
                style={{ height: 0, marginTop: 206 }}
              >
                <span className="text-[11px] font-bold text-gray-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="border-t border-gray-100 px-3 py-2">
                <div className="truncate text-[12px] font-semibold text-gray-700">
                  {s.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ---------- Presenter notes panel ---------- */
function PresenterPanel({
  title,
  notes,
  index,
  total,
  onClose,
}: {
  title: string;
  notes: string[];
  index: number;
  total: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-20 left-1/2 z-40 w-[min(680px,92vw)] -translate-x-1/2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <Presentation className="h-4 w-4 text-purple-600" />
          <span className="text-[13px] font-bold text-gray-900">Presenter Notes</span>
          <span className="text-[11px] font-semibold text-gray-400">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <button
          className="deck-btn flex h-7 w-7 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
          onClick={onClose}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="px-5 pb-2 pt-3">
        <div className="text-[13px] font-bold text-gray-900">{title}</div>
      </div>
      <ul className="scrollbar-thin max-h-56 overflow-y-auto px-5 pb-4">
        {notes.map((n, i) => (
          <li key={i} className="flex gap-2 py-1.5 text-[13px] leading-relaxed text-gray-600">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
            <span>{n}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
