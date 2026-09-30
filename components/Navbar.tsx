"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
    >
      <nav className="flex items-center justify-between px-5 md:px-10 py-5 text-[#F5F5F0]">
        <a href="#top" className="font-display font-semibold tracking-tight text-lg leading-none">
          ALEJA<span className="align-super text-[10px] ml-1">®</span>
        </a>

        <div className="hidden md:flex items-center gap-8 label-mono opacity-80">
          <a href="#work" className="hover:opacity-100 transition-opacity">Proyectos</a>
          <a href="#about" className="hover:opacity-100 transition-opacity">Sobre mí</a>
          <a href="#services" className="hover:opacity-100 transition-opacity">Servicios</a>
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-1.5 text-sm font-medium border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
        >
          Hablemos
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}
