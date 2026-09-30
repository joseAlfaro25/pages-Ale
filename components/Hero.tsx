"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const LINES = ["DISEÑO", "QUE SE", "SIENTE."];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !root.current) return;
    const ctx = gsap.context(() => {
      gsap.to("[data-hero-scale]", {
        scale: 0.94,
        opacity: 0.25,
        filter: "blur(6px)",
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      // el canvas 3D hace parallax hacia arriba
      gsap.to("[data-hero-3d]", {
        yPercent: 18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section ref={root} id="top" className="relative h-[100svh] flex flex-col justify-between overflow-hidden bg-[#090909]">
      {/* anillos base */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[130vmin] h-[130vmin] rounded-full border border-white/[0.07]" />
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[92vmin] h-[92vmin] rounded-full border border-white/[0.09]" />
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full bg-[#DDF247]/[0.08] blur-3xl" />
      </div>

      {/* THREE.JS */}
      <div data-hero-3d className="absolute inset-0">
        <Hero3D />
      </div>

      <div className="relative pt-24 md:pt-28 px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="label-mono text-[#989898]"
        >
          Portafolio — 2026 · Barranquilla, CO
        </motion.p>
      </div>

      <div data-hero-scale className="relative px-5 md:px-10 will-change-transform">
        <h1 className="display text-[17.5vw] md:text-[13.5vw] text-[#F5F5F0] drop-shadow-[0_2px_30px_rgba(0,0,0,0.6)]">
          {LINES.map((line, i) => (
            <span key={line} className="mask-line">
              <motion.span
                className="mask-inner"
                initial={reduce ? { y: 0 } : { y: "112%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.25 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {i === 2 ? (
                  <>
                    SIENTE<span className="text-[#DDF247]">.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-md text-base md:text-lg leading-relaxed text-[#B9B9B4]"
          >
            Experiencias digitales creadas para
            <br />
            marcas, productos y personas.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="label-mono text-[#989898]"
          >
            UX/UI · Diseño web · Productos digitales
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative px-5 md:px-10 pb-6 md:pb-8 flex items-center justify-between border-t hairline mt-8 pt-5 text-[#989898]"
      >
        <span className="label-mono">Desliza para explorar</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
        <span className="label-mono hidden sm:block">01 — 04 Proyectos</span>
      </motion.div>
    </section>
  );
}
