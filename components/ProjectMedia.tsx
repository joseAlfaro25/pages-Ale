"use client";

import type { Project } from "@/data/projects";

/* Pure-CSS editorial mockups — no external images, fast + build-safe */

function BrowserChrome({ url, dark = true }: { url: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1.5 px-4 py-3 border-b ${
        dark ? "border-white/10" : "border-black/10"
      }`}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      <span
        className={`ml-3 flex-1 truncate rounded-full px-3 py-1 text-[11px] font-mono ${
          dark ? "bg-white/[0.06] text-white/50" : "bg-black/[0.05] text-black/50"
        }`}
      >
        {url}
      </span>
    </div>
  );
}

function VictoriaVisual() {
  return (
    <div className="relative w-full h-full bg-[#1A1512] overflow-hidden">
      {/* photographic backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_20%_10%,#E8CFC0_0%,#C9A58E_28%,#6B4A3A_58%,#1A1512_100%)]" />
      <div className="absolute -right-10 -top-10 w-[60%] aspect-square rounded-full bg-[#F5E7DA]/30 blur-2xl" />
      <div className="absolute left-[8%] bottom-[6%] right-[8%] top-[18%] rounded-t-[160px] rounded-b-2xl bg-gradient-to-b from-[#F7E9DC] via-[#E6C6B2] to-[#8A5E4B] border border-white/20 shadow-2xl overflow-hidden">
        <div className="absolute inset-x-0 top-0 p-5 flex justify-between text-[10px] tracking-[0.2em] uppercase text-[#3A2620]/70 font-mono">
          <span>Estética</span>
          <span>VR — 2025</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="font-display text-[#2A1A14] text-4xl md:text-6xl leading-[0.9] tracking-tight">
            BEAUTY
            <br />
            <span className="italic font-light">meets digital</span>
          </p>
          <p className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[#3A2620]/70 font-mono">
            Tratamientos · Confianza · Bienestar
          </p>
        </div>
      </div>
      {/* desktop mock */}
      <div className="absolute left-[6%] top-[8%] w-[62%] rounded-xl bg-[#111111]/95 border border-white/15 shadow-2xl overflow-hidden backdrop-blur">
        <BrowserChrome url="estetica-victoria-retamozo.web.app" />
        <div className="p-4 md:p-5">
          <div className="flex justify-between items-center">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/60 font-mono">Victoria Retamozo</p>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#DDF247] text-black font-medium">Reservar valoración</span>
          </div>
          <p className="mt-3 font-display text-xl md:text-3xl text-[#F5F5F0] leading-[0.95]">Confianza desde<br />el primer contacto</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Facial", "Corporal", "Bienestar"].map((s) => (
              <div key={s} className="rounded-lg bg-white/[0.06] border border-white/10 p-2.5">
                <div className="h-10 md:h-14 rounded-md bg-gradient-to-br from-[#E8CFC0] to-[#8A5E4B]" />
                <p className="mt-2 text-[10px] text-white/70 font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* phone mock */}
      <div className="absolute right-[6%] bottom-[5%] w-[26%] min-w-[120px] rounded-[22px] bg-black border border-white/20 shadow-2xl overflow-hidden">
        <div className="mx-auto mt-2 w-12 h-1.5 rounded-full bg-white/20" />
        <div className="p-2.5">
          <div className="rounded-xl bg-[#F5EDE4] p-2.5 text-[#2A1A14]">
            <div className="h-16 rounded-lg bg-gradient-to-br from-[#E8CFC0] to-[#6B4A3A]" />
            <p className="mt-2 text-[10px] font-semibold">Valoración inicial</p>
            <p className="text-[9px] opacity-60">Encuentra información y agenda</p>
            <div className="mt-2 rounded-full bg-[#2A1A14] text-white text-[9px] text-center py-1.5">Agendar</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartagenaVisual() {
  return (
    <div className="relative w-full h-full bg-[#1C0F08] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(110%_90%_at_80%_10%,#F2A65A_0%,#B4552A_35%,#4A1E0E_65%,#1C0F08_100%)]" />
      <div className="absolute left-[6%] top-[10%] max-w-[70%]">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/60">Cartagena · Caribe</p>
        <p className="mt-2 font-display text-3xl md:text-5xl text-[#FFF6EA] leading-[0.9]">SABOR<br />QUE SE<br />RESERVA</p>
      </div>
      {/* booking panel */}
      <div className="absolute left-[5%] bottom-[6%] w-[58%] rounded-2xl bg-[#FFF8EE] text-[#2A160B] shadow-2xl overflow-hidden">
        <BrowserChrome url="cartagena-cooking-school / reservas" dark={false} />
        <div className="p-4 md:p-5">
          <div className="flex gap-2">
            {["Experiencias", "Calendario", "Backoffice"].map((t, i) => (
              <span key={t} className={`text-[10px] px-2.5 py-1 rounded-full font-medium ${i === 0 ? "bg-[#2A160B] text-white" : "bg-black/5"}`}>{t}</span>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl overflow-hidden border border-black/10">
              <div className="h-14 md:h-20 bg-gradient-to-br from-[#F2A65A] via-[#B4552A] to-[#2A160B]" />
              <div className="p-2.5"><p className="text-[11px] font-semibold">Cocina cartagenera</p><p className="text-[10px] opacity-60">4.9 · 2h30 · Desde $85</p></div>
            </div>
            <div className="rounded-xl border border-black/10 p-2.5 bg-white">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-50">Reserva</p>
              <div className="mt-2 space-y-1.5">
                <div className="h-6 rounded-md bg-black/[0.06]" />
                <div className="h-6 rounded-md bg-black/[0.06]" />
                <div className="h-7 rounded-md bg-[#2A160B] text-white text-[10px] flex items-center justify-center">Confirmar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* floating dish card */}
      <div className="absolute right-[5%] top-[12%] w-[30%] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
        <div className="h-24 md:h-36 bg-[conic-gradient(from_40deg,#F2A65A,#7A2E12,#F7D9A8,#B4552A,#F2A65A)]" />
        <div className="bg-black/70 backdrop-blur p-2.5 text-white">
          <p className="text-[10px] font-medium">Tour gastronómico · Getsemaní</p>
          <p className="text-[9px] opacity-60">Mañana · 4 cupos</p>
        </div>
      </div>
    </div>
  );
}

function FuntabVisual() {
  return (
    <div className="relative w-full h-full bg-[#F4F1EA] text-[#101010] overflow-hidden">
      <div className="p-4 md:p-6 flex items-center justify-between border-b border-black/10">
        <p className="font-display font-semibold tracking-tight">FUNTAB</p>
        <div className="hidden sm:flex gap-4 text-[11px] font-mono uppercase tracking-widest opacity-60">
          <span>Institución</span><span>Oferta</span><span>Programas</span><span>Contacto</span>
        </div>
        <span className="text-[10px] px-3 py-1.5 rounded-full bg-[#101010] text-white">Inscribirme</span>
      </div>
      <div className="p-4 md:p-6 grid grid-cols-5 gap-3 md:gap-4">
        <div className="col-span-3">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-50">Educación accesible</p>
          <p className="mt-2 font-display text-2xl md:text-4xl leading-[0.92]">ENCUENTRA<br />TU PROGRAMA</p>
          <div className="mt-3 flex gap-2">
            <div className="flex-1 h-9 rounded-full bg-white border border-black/15 px-3 flex items-center text-[11px] opacity-70">Buscar programa…</div>
            <div className="h-9 w-9 rounded-full bg-[#1E4B3A] text-white flex items-center justify-center text-sm">→</div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              ["Técnico Laboral", "12 programas"],
              ["Diplomados", "08 cursos"],
            ].map(([t, s]) => (
              <div key={t} className="rounded-xl bg-white border border-black/10 p-3">
                <p className="text-[12px] font-semibold">{t}</p>
                <p className="text-[10px] opacity-60">{s}</p>
                <p className="mt-2 text-[10px] font-medium underline underline-offset-2">Ver oferta</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2 rounded-xl bg-[#1E4B3A] text-white p-3 md:p-4 flex flex-col justify-between min-h-[220px] md:min-h-[300px]">
          <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">Admisiones abiertas</p>
          <div>
            <p className="font-display text-xl md:text-3xl">2026</p>
            <div className="mt-2 h-1.5 rounded-full bg-white/20 overflow-hidden"><div className="h-full w-2/3 bg-[#DDF247]" /></div>
            <p className="mt-2 text-[10px] opacity-70">Institución → Oferta → Programa → Contacto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative w-full h-full bg-[#0C0E0C] text-[#EDEFE8] overflow-hidden flex">
      {/* sidebar */}
      <div className="w-[26%] min-w-[110px] border-r border-white/10 p-3 md:p-4 flex flex-col gap-1 bg-white/[0.02]">
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50 px-1 mb-1">LegalTech</p>
        {["Propietarios", "Cartera", "Obligaciones", "Cobros", "Administración"].map((m, i) => (
          <div key={m} className={`px-2 py-1.5 rounded-md text-[10px] md:text-[11px] ${i === 1 ? "bg-[#DDF247] text-black font-semibold" : "text-white/60 bg-white/[0.03]"}`}>{m}</div>
        ))}
        <div className="mt-auto rounded-lg bg-white/[0.04] border border-white/10 p-2">
          <p className="text-[9px] opacity-60">Recaudo mes</p>
          <p className="text-sm font-semibold">87.4%</p>
        </div>
      </div>
      <div className="flex-1 p-3 md:p-5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] md:text-sm font-semibold">Cartera · Propiedad horizontal</p>
          <span className="text-[9px] px-2 py-1 rounded-full border border-white/15 text-white/60">En vivo</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ["$ 284M", "Cartera total", "+6.2%"],
            ["1.284", "Obligaciones", "-2.1%"],
            ["96.2%", "Al día", "+1.4%"],
          ].map(([v, l, d]) => (
            <div key={l} className="rounded-lg bg-white/[0.04] border border-white/10 p-2 md:p-3">
              <p className="text-[13px] md:text-xl font-semibold tracking-tight">{v}</p>
              <p className="text-[9px] opacity-60">{l}</p>
              <p className="text-[9px] text-[#DDF247]">{d}</p>
            </div>
          ))}
        </div>
        {/* chart */}
        <div className="mt-2 rounded-lg bg-white/[0.03] border border-white/10 p-2 md:p-3">
          <div className="flex items-end gap-1.5 h-16 md:h-24">
            {[35, 55, 42, 70, 58, 82, 64, 90, 76, 95, 68, 88].map((h, i) => (
              <div key={i} className={`flex-1 rounded-sm ${i === 9 ? "bg-[#DDF247]" : "bg-white/20"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 space-y-1.5">
            {[0, 1, 2].map((r) => (
              <div key={r} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/10" />
                <div className="flex-1 h-5 rounded bg-white/[0.04] border border-white/[0.06]" />
                <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${r === 0 ? "bg-amber-400/20 text-amber-300" : "bg-emerald-400/15 text-emerald-300"}`}>
                  {r === 0 ? "En mora" : "Al día"}
                </span>
              </div>
            ))}
          </div>
        </div>
        {!compact && (
          <p className="mt-2 font-mono text-[9px] tracking-[0.18em] uppercase text-white/40">
            Propietarios · Cartera · Obligaciones · Cobros · Administración
          </p>
        )}
      </div>
    </div>
  );
}

export default function ProjectMedia({ project }: { project: Project }) {
  return (
    <div className="w-full h-full">
      {project.id === "victoria" && <VictoriaVisual />}
      {project.id === "cartagena" && <CartagenaVisual />}
      {project.id === "funtab" && <FuntabVisual />}
      {project.id === "legal" && <LegalVisual />}
    </div>
  );
}

export { LegalVisual };
