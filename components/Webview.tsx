"use client";

import { useState } from "react";
import { ArrowUpRight, Upload } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";

/**
 * Webview con el sitio REAL:
 * - El iframe ocupa todo el marco (aspecto 16/10) y el sitio muestra
 *   su propio diseño adaptable según el ancho — sin JS de medición.
 * - Sin scroll interno: scrolling="no" + overflow hidden + sin eventos.
 * - Toda la tarjeta es un enlace: tocar/clic abre el sitio real.
 * - Mientras carga muestra la captura de /public/shots; si no existe, el mock.
 */
export default function Webview({ project }: { project: Project }) {
  const [loaded, setLoaded] = useState(false);
  const [shotOk, setShotOk] = useState(true);
  const shotSrc = project.screenshot ?? `/shots/${project.id}.png`;

  const isLight = project.theme === "light";
  const chromeBg = isLight ? "bg-[#ECE7DB]" : "bg-[#141414]";
  const chromeBorder = isLight ? "border-black/10" : "border-white/10";
  const chromeText = isLight ? "text-black/60" : "text-white/50";

  const vista = (
    <div className="relative aspect-[16/10] w-full select-none overflow-hidden bg-black">
      {/* póster: captura real o mock mientras carga el iframe */}
      {shotOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={shotSrc}
          alt={`${project.title} — captura`}
          loading="lazy"
          draggable={false}
          onError={() => setShotOk(false)}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="pointer-events-none absolute inset-0">
          <ProjectMedia project={project} />
        </div>
      )}

      {/* sitio real, sin interacción ni scroll interno */}
      {project.website && (
        <iframe
          src={project.website}
          title={`${project.title} — sitio real`}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* velo hover + CTA */}
      {project.website && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/35">
          <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-[#DDF247] px-4 py-2 text-xs font-semibold text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Abrir sitio <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      )}

      {/* aviso compacto si falta la captura */}
      {!shotOk && (
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 justify-between rounded-lg border border-dashed border-white/25 bg-black/65 backdrop-blur px-3 py-2">
          <p className="flex min-w-0 items-center gap-1.5 text-[11px] text-white/80">
            <Upload className="h-3.5 w-3.5 shrink-0 text-[#DDF247]" />
            <span className="truncate">
              Falta la captura — <code className="font-mono text-[#DDF247]">/shots/{project.id}.png</code>
            </span>
          </p>
          {project.website && (
            <span className="shrink-0 rounded-full bg-[#DDF247] px-3 py-1 text-[11px] font-semibold text-black">
              Toca para visitar
            </span>
          )}
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`group overflow-hidden rounded-xl border transition-shadow duration-300 hover:shadow-2xl ${isLight ? "border-black/15" : "border-white/12"}`}
    >
      <div className={`flex items-center gap-2 px-3 py-2 border-b ${chromeBorder} ${chromeBg}`}>
        <span className="flex shrink-0 gap-1.5">
          <i className="block h-2 w-2 rounded-full bg-[#FF5F57]" />
          <i className="block h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <i className="block h-2 w-2 rounded-full bg-[#28C840]" />
        </span>
        <span className={`min-w-0 flex-1 truncate rounded-full border ${chromeBorder} px-3 py-0.5 font-mono text-[11px] ${chromeText}`}>
          {project.website ? project.website.replace("https://", "") : "Captura pendiente de publicación"}
        </span>
        {project.website && (
          <span className={`${chromeText} shrink-0 p-1`}>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>

      {project.website ? (
        <a
          href={project.website}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — abrir sitio real`}
          className="block cursor-pointer"
        >
          {vista}
        </a>
      ) : (
        vista
      )}
    </div>
  );
}
