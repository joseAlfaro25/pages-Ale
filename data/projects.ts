export type Project = {
  id: string;
  index: string;
  titleLines: string[];
  title: string;
  category: string;
  type: string;
  description: string;
  longDescription?: string;
  services: string[];
  website?: string;
  websiteLabel?: string;
  /** Ruta en /public/shots — ej. "/shots/victoria.png". Si no existe el archivo, se muestra el mock + placeholder para enviarla. */
  screenshot?: string;
  featured?: boolean;
  theme: "dark" | "warm" | "light" | "legal";
  challenge?: string;
  solution?: string;
};

export const projects: Project[] = [
  {
    id: "victoria",
    index: "01",
    title: "Victoria Retamozo",
    titleLines: ["VICTORIA", "RETAMOZO"],
    category: "Belleza / Bienestar / Experiencia digital",
    type: "Belleza · Bienestar",
    description:
      "Experiencia web para un centro especializado en servicios estéticos, diseñada para presentar sus tratamientos, comunicar confianza y facilitar el contacto con nuevos clientes.",
    longDescription:
      "Diseñamos una experiencia enfocada en presentar tratamientos estéticos, comunicar profesionalismo y facilitar que nuevos pacientes encuentren información y soliciten una valoración.",
    services: ["Diseño UX/UI", "Diseño web", "Servicios", "Adaptable", "Captación de clientes"],
    website: "https://estetica-victoria-retamozo.web.app/",
    websiteLabel: "Visitar sitio",
    screenshot: "/shots/victoria.png",
    theme: "dark",
  },
  {
    id: "cartagena",
    index: "02",
    title: "Cartagena Cooking School",
    titleLines: ["CARTAGENA", "COOKING", "SCHOOL"],
    category: "Gastronomía / Turismo / Reservas",
    type: "Gastronomía · Turismo",
    description:
      "Plataforma web para experiencias gastronómicas en Cartagena, con sistema de reservas y panel administrativo para la gestión de citas.",
    longDescription:
      "Una experiencia web que combina promoción turística, presentación gastronómica y un sistema completo para gestionar las reservas desde un backoffice.",
    challenge:
      "Transformar la experiencia de descubrir una actividad gastronómica en un proceso sencillo de exploración y reserva.",
    solution:
      "Una experiencia web que combina promoción turística, presentación gastronómica y un sistema completo para gestionar las reservas desde un backoffice.",
    services: ["Diseño web", "Reservas", "Backoffice", "Gestión de citas", "Adaptable"],
    website: "https://cooking-8943d.web.app/",
    websiteLabel: "Visitar sitio",
    screenshot: "/shots/cartagena.png",
    theme: "warm",
  },
  {
    id: "funtab",
    index: "03",
    title: "FUNTAB",
    titleLines: ["FUNTAB"],
    category: "Educación / Institucional",
    type: "Educación · Institucional",
    description:
      "Plataforma web institucional para una entidad educativa, enfocada en presentar su oferta académica y facilitar la navegación de estudiantes potenciales.",
    longDescription:
      "Una plataforma institucional diseñada para simplificar el acceso a la oferta académica y ayudar a futuros estudiantes a encontrar rápidamente el programa y la información que necesitan.",
    services: [
      "Diseño institucional",
      "Programas académicos",
      "Diseño UX/UI",
      "Adaptable",
      "Desarrollo web",
    ],
    website: "https://demofuntab.web.app/",
    websiteLabel: "Visitar sitio",
    screenshot: "/shots/funtab.png",
    theme: "light",
  },
  {
    id: "legal",
    index: "04",
    title: "LegalTech",
    titleLines: ["LEGAL", "TECH"],
    category: "Propiedad horizontal / Plataforma SaaS",
    type: "Propiedad horizontal",
    description:
      "Plataforma web desarrollada para digitalizar y facilitar la gestión de cobros y obligaciones asociadas a la propiedad horizontal, centralizando información y procesos administrativos en un entorno digital.",
    longDescription:
      "Una plataforma centralizada para consultar propietarios, gestionar obligaciones, administrar cartera y digitalizar procesos de cobranza.",
    challenge:
      "Información fragmentada, procesos administrativos manuales y poca visibilidad del estado de cartera.",
    solution:
      "Una plataforma centralizada para consultar propietarios, gestionar obligaciones, administrar cartera y digitalizar procesos de cobranza.",
    services: [
      "Plataforma web",
      "Gestión de cobros",
      "Propiedad horizontal",
      "Administración",
      "Desarrollo de software",
    ],
    website: "https://legal-angular2-prod.web.app/",
    websiteLabel: "Ver plataforma",
    screenshot: "/shots/legal.png",
    featured: true,
    theme: "legal",
  },
];

export const services = [
  {
    index: "01",
    title: "Diseño web",
    desc: "Sitios editoriales, rápidos y memorables.",
  },
  {
    index: "02",
    title: "Diseño UX/UI",
    desc: "Interfaces claras que convierten.",
  },
  {
    index: "03",
    title: "Productos digitales",
    desc: "De la idea al producto funcional.",
  },
  {
    index: "04",
    title: "Desarrollo frontend",
    desc: "React / Next.js, animación y rendimiento.",
  },
  {
    index: "05",
    title: "Plataformas y backoffice",
    desc: "Reservas, administración y sistemas internos.",
  },
];
