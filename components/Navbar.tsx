"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "#work", label: "Proyectos" },
  { href: "#about", label: "Sobre mí" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 mix-blend-difference"
    >
      <nav className="flex items-center justify-between px-5 md:px-10 py-4 md:py-5 text-[#F5F5F0]">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display font-semibold tracking-tight text-lg leading-none"
        >
          ALEJA<span className="align-super text-[10px] ml-1">®</span>
        </a>

        <div className="hidden md:flex items-center gap-8 label-mono opacity-80">
          {links.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="hover:opacity-100 transition-opacity">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden sm:flex items-center gap-1.5 text-sm font-medium border border-white/30 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors"
          >
            Hablemos
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="md:hidden w-10 h-10 rounded-full border border-white/30 flex items-center justify-center"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* menú móvil */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mx-4 rounded-2xl border border-white/15 bg-black/80 backdrop-blur-xl p-3"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-2xl tracking-tight text-[#F5F5F0] hover:bg-white/10 active:bg-white/10"
              >
                {l.label}
                <span className="font-mono text-[10px] tracking-[0.2em] opacity-50">
                  0{i + 1}
                </span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
