"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A hand-drawn style squiggly underline that draws itself in
 * when it scrolls into view. Place directly under a heading.
 */
export function DrawUnderline({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 220 14"
      fill="none"
      aria-hidden="true"
      className={className ?? "h-3 w-44"}
    >
      <motion.path
        d="M4 9 C 40 3, 80 11, 110 7 S 180 4, 216 8"
        stroke="#f59e0b"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
  );
}
