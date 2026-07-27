"use client";

import { motion } from "framer-motion";
import { TEAM } from "./team";

/**
 * MemberBadge — a compact, persistent presenter indicator placed on every
 * content slide so the audience always knows which team member is speaking.
 * Supports a clean serial handoff between the 5 members.
 *
 * `member` is 1-based (1 = Member 1 … 5 = Member 5).
 */
export default function MemberBadge({
  member,
  className = "",
}: {
  member: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const m = TEAM[member - 1];
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${className}`}
      style={{ background: m.bg, border: `1px solid ${m.border}` }}
    >
      <span
        className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
        style={{ background: m.color }}
      >
        {m.id}
      </span>
      <span className="text-[20px] font-bold" style={{ color: m.color }}>
        {m.name}
      </span>
      <span className="text-[10px] font-medium text-gray-400">·</span>
      <span className="text-[10px] font-semibold text-gray-500">{m.role}</span>
    </motion.div>
  );
}
