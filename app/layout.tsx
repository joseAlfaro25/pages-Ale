import type { Metadata } from "next";
import { Inter, Inter_Tight, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALEJA® — Diseño que se siente | Portafolio",
  description:
    "Experiencias digitales diseñadas para marcas, productos y personas. Diseño UX/UI, diseño web, productos digitales. Barranquilla, Colombia.",
  metadataBase: new URL("https://aleja.studio"),
  openGraph: {
    title: "ALEJA® — Diseño que se siente",
    description: "Experiencias digitales creadas para marcas, productos y personas.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#090909] text-[#F5F5F0]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
