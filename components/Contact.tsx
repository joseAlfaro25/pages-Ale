"use client";

import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight, Mail, AtSign, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#090909] border-t border-white/10">
      <div className="px-5 md:px-10 pt-24 md:pt-36 pb-12 min-h-[88svh] flex flex-col justify-between">
        <div>
          <p className="label-mono text-[#989898]">04 — Contacto</p>
          <RevealText
            lines={["HAGAMOS", "ALGO", "INCREÍBLE."]}
            className="display mt-4 text-[15vw] md:text-[10vw] text-[#F5F5F0]"
          />
          <p className="mt-6 text-[#B9B9B4] text-base md:text-xl">¿Tienes una idea? Hablemos.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start">
            <MagneticButton>
              <a
                href="mailto:hola@aleja.studio"
                className="inline-flex items-center gap-2 rounded-full bg-[#DDF247] text-black px-7 py-4 font-medium hover:bg-[#F5F5F0] transition-colors"
              >
                <Mail className="w-4 h-4" />
                hola@aleja.studio
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-white/80 hover:bg-white hover:text-black transition-colors"
              >
                Volver arriba ↑
              </a>
            </MagneticButton>
          </div>
        </div>

        <footer className="mt-16 border-t hairline pt-6 flex flex-col md:flex-row gap-4 md:items-center justify-between text-sm text-[#989898]">
          <div className="flex items-center gap-5">
            <span className="text-[#F5F5F0] font-semibold">ALEJA®</span>
            <a href="mailto:hola@aleja.studio" className="hover:text-white">Email</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white">
              <AtSign className="w-3.5 h-3.5" /> Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-white">
              <Briefcase className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-4 label-mono">
            <span>Colombia</span>
            <span>2026</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
