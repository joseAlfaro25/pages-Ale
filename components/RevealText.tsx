"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

export default function RevealText({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  once = true,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  // amount en vez de margin en % (más compatible con Lenis + IO)
  const inView = useInView(ref, { amount: 0.35, once });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={`${i}-${line}`} className="mask-line">
          <motion.span
            className={`mask-inner ${lineClassName}`}
            initial={reduce ? false : { y: "110%" }}
            animate={reduce ? { y: "0%" } : inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
