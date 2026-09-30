"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Upload } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";

/** Tamaño virtual del sitio real para la miniatura */
const VW = 1280;
const VH = 800;

/**
 * Webview con el sitio REAL en miniatura:
 * - iframe a tamaño desktop (1280×800) escalado al contenedor.
 * - Sin scroll interno: scrolling="no" + overflow hidden + pointer-events none.
 * - Toda la tarjeta es un enlace: tocar/clic abre el sitio real en pestaña nueva.
 * - Mientras carga muestra la captura de /public/shots; si no existe, el mock.
 */
export default function Webview({ project }: { project: Project }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  const [loaded, setLoaded] = useState(false);
  const [shotOk, setShotOk] = useState(true);
  const shotSrc = project.screenshot ?? `/shots/${project.id}.png`;

  const isLight = project.theme === "light";
  const chromeBg = isLight ? "bg-[#ECE7DB]" : "bg-[#141414]";
  const chromeBorder = isLight ? "border-black/10" : "border-white/10";
  const chromeText = isLight ? "text-black/60" : "text-white/50";

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / VW);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const vista = (
    <div
      ref={wrapRef}
      className="relative w-full select-none overflow-hidden bg-black"
      style={{ height: VH * scale }}
    >
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

      {/* sitio real en miniatura, sin interacción ni scroll */}
      {project.website && (
        <iframe
          src={project.website}
          title={`${project.title} — sitio real`}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          tabIndex={-1}
          aria-hidden={false}
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 border-0 transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ width: VW, height: VH, transform: `scale(${scale})`, transformOrigin: "top left" }}
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
          <p className="flex items-center gap-1.5 text-[11px] text-white/80">
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
      className={`group overflow-hidden rounded-xl border ${isLight ? "border-black/15" : "border-white/12"} shadow-xl`}
    >
      <div className={`flex items-center gap-2 px-3 py-2 border-b ${chromeBorder} ${chromeBg}`}>
        <span className="flex gap-1.5">
          <i className="block h-2 w-2 rounded-full bg-[#FF5F57]" />
          <i className="block h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <i className="block h-2 w-2 rounded-full bg-[#28C840]" />
        </span>
        <span className={`flex-1 truncate rounded-full border ${chromeBorder} px-3 py-0.5 font-mono text-[11px] ${chromeText}`}>
          {project.website ?? "Captura pendiente de publicación"}
        </span>
        {project.website && (
          <span className={`${chromeText} p-1`}>
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
