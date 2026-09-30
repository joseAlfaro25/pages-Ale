"use client";

import { useRef } from "react";
import RevealText from "./RevealText";
import { motion, useInView } from "motion/react";

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });

  return (
    <section id="about" className="relative bg-[#090909] px-5 md:px-10 py-28 md:py-44 border-t hairline">
      <p className="label-mono text-[#989898] mb-8 md:mb-12">02 — Sobre mí</p>

      <RevealText
        lines={[
          "Diseñamos experiencias",
          "digitales donde estrategia,",
          "diseño y tecnología",
          "trabajan juntas.",
        ]}
        className="display text-[9.5vw] md:text-[5.2vw] text-[#F5F5F0] max-w-6xl"
      />

      <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-start-7 md:col-span-5 text-base md:text-lg leading-relaxed text-[#B9B9B4]"
        >
          El objetivo es convertir ideas en experiencias digitales claras,
          funcionales y memorables — desde sitios promocionales hasta
          plataformas completas con reservas, backoffice y administración.
        </motion.p>
      </div>

      <div className="mt-14 md:mt-20 grid grid-cols-3 border-t hairline pt-6 gap-4 label-mono text-[#989898]">
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-[#F5F5F0] tracking-tight font-display">04</p>
          <p className="mt-2">Casos</p>
        </div>
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-[#F5F5F0] tracking-tight font-display">05+</p>
          <p className="mt-2">Capacidades</p>
        </div>
        <div>
          <p className="text-2xl md:text-4xl font-semibold text-[#F5F5F0] tracking-tight font-display">100%</p>
          <p className="mt-2">Adaptable</p>
        </div>
      </div>
    </section>
  );
}
