"use client";

import { useRef, useState } from "react";

/** Tilt 3D CSS para los mockups — perspectiva + brillo, sin WebGL pesado */
export default function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div style={{ perspective: 1400 }} className={className}>
      <div
        ref={ref}
        onMouseMove={(e) => {
          if (reduce || !ref.current) return;
          const r = ref.current.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          setT({
            rx: (0.5 - py) * 10,
            ry: (px - 0.5) * 12,
            gx: px * 100,
            gy: py * 100,
          });
        }}
        onMouseLeave={() => setT({ rx: 0, ry: 0, gx: 50, gy: 50 })}
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: "transform 0.25s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="relative will-change-transform"
      >
        {children}
        {/* glare */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(600px circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.14), transparent 55%)`,
            mixBlendMode: "overlay",
          }}
        />
      </div>
    </div>
  );
}
