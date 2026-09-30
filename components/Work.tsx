import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import RevealText from "./RevealText";

const grupos = [
  {
    label: "Selección 01 — Experiencias",
    titulo: ["EXPERIENCIAS"],
    ids: ["victoria", "cartagena"],
  },
  {
    label: "Selección 02 — Plataformas",
    titulo: ["PLATAFORMAS"],
    ids: ["funtab", "legal"],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-[#090909]">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-14 md:py-20 border-t hairline">
        <p className="label-mono text-[#989898]">01 — Proyectos</p>
        <RevealText
          lines={["TRABAJO", "SELECCIONADO"]}
          className="display mt-3 text-[11vw] md:text-[5.5vw] text-[#F5F5F0]"
        />
        <p className="mt-5 max-w-xl text-[#B9B9B4] text-sm md:text-lg leading-relaxed">
          Cuatro casos en dos selecciones. Cada vista previa es el sitio real en
          miniatura — tócala para abrirlo en vivo.
        </p>
      </div>

      {grupos.map((g) => (
        <div key={g.label} className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-5 md:px-10 pt-10 md:pt-12 pb-6">
            <p className="label-mono text-[#989898]">{g.label}</p>
            <RevealText
              lines={g.titulo}
              className="display mt-3 text-[10vw] md:text-[4.5vw] text-[#F5F5F0]"
            />
          </div>
          <div className="mx-auto max-w-6xl px-5 md:px-10 pb-12 md:pb-16 grid gap-5 md:grid-cols-2 items-start">
            {g.ids.map((id) => {
              const p = projects.find((x) => x.id === id)!;
              return <ProjectCard key={p.id} project={p} />;
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
