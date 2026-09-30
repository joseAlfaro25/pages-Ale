"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import RevealText from "./RevealText";
import Webview from "./Webview";
import { motion, useInView } from "motion/react";

/** Tarjeta compacta de proyecto para el grid de 2 columnas */
export default function ProjectCard({ project }: { project: Project }) {
  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(textRef, { amount: 0.3, once: true });

  const isLight = project.theme === "light";
  const bg = isLight
    ? "bg-[#F4F1EA] text-[#101010] border-black/10"
    : project.theme === "warm"
      ? "bg-[#0E0B09] border-white/10"
      : "bg-[#111111] border-white/10";
  const sub = isLight ? "text-[#5A5750]" : "text-[#B9B9B4]";
  const muted = isLight ? "text-black/50" : "text-[#989898]";
  const pill = isLight ? "border-black/15 text-black/70" : "border-white/12 text-white/70";

  return (
    <motion.article
      ref={textRef}
      id={`work-${project.id}`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col gap-4 rounded-2xl border p-5 md:p-6 ${bg}`}
    >
      <div className="flex items-center justify-between">
        <p className={`label-mono ${muted}`}>
          {project.featured ? "Caso destacado" : `Caso ${project.index}`}
        </p>
        <p className={`label-mono ${muted}`}>{project.index} / 04</p>
      </div>

      <div>
        <p className={`label-mono ${isLight ? "text-black/60" : "text-[#DDF247]/90"}`}>
          {project.category}
        </p>
        <RevealText
          lines={project.titleLines}
          className={`display mt-2 text-[11vw] sm:text-4xl lg:text-[2.6rem] ${isLight ? "text-[#101010]" : "text-[#F5F5F0]"}`}
        />
      </div>

      <p className={`text-sm leading-relaxed ${sub}`}>{project.description}</p>

      {project.id === "legal" && (
        <div className="flex flex-wrap gap-1.5">
          {["PROPIETARIOS", "CARTERA", "OBLIGACIONES", "COBROS", "ADMINISTRACIÓN"].map((c) => (
            <span
              key={c}
              className="rounded-full border border-[#DDF247]/40 bg-[#DDF247]/10 px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-[#DDF247]"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      <Webview project={project} />

      <div className="flex flex-wrap gap-1.5">
        {project.services.map((s) => (
          <span key={s} className={`rounded-full border px-3 py-1 text-[11px] ${pill}`}>
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4" style={isLight ? { borderColor: "rgba(16,16,16,0.12)" } : undefined}>
        <p className={`label-mono ${muted}`}>{project.type}</p>
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
              isLight
                ? "bg-[#101010] text-white hover:bg-black/80"
                : "bg-[#F5F5F0] text-black hover:bg-[#DDF247]"
            }`}
          >
            {project.websiteLabel ?? "Ver proyecto"}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <span className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] ${pill}`}>
            Captura pendiente <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        )}
      </div>
    </motion.article>
  );
}
