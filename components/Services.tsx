"use client";

import { services } from "@/data/projects";
import RevealText from "./RevealText";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-[#090909] border-t border-white/10 px-5 md:px-10 py-24 md:py-36">
      <p className="label-mono text-[#989898]">03 — Capacidades</p>
      <RevealText lines={["QUÉ HACEMOS"]} className="display mt-4 text-[14vw] md:text-[8vw] text-[#F5F5F0]" />

      <div className="mt-12 md:mt-16 border-t hairline">
        {services.map((s) => (
          <a
            key={s.index}
            href="#contact"
            className="group grid grid-cols-12 items-center gap-3 border-b hairline py-6 md:py-8 hover:bg-white/[0.02] transition-colors px-1 md:px-2"
          >
            <span className="col-span-2 md:col-span-1 font-mono text-xs text-[#989898]">{s.index}</span>
            <span className="col-span-10 md:col-span-6 font-display text-2xl md:text-5xl tracking-tight text-[#F5F5F0] group-hover:translate-x-2 transition-transform duration-300">
              {s.title}
            </span>
            <span className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto text-sm text-[#989898]">
              {s.desc}
            </span>
            <span className="hidden md:flex col-span-1 justify-end">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#DDF247] group-hover:text-black group-hover:border-[#DDF247] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {["Diseño UX/UI", "Diseño web", "Frontend", "Plataformas web", "Sistemas administrativos", "Adaptable"].map((t) => (
          <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-white/12 text-white/70">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
