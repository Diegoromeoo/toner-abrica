"use client";

import { motion } from "motion/react";
import { pillars } from "@/lib/catalog";
import { InsumosIcon, GranFormatoIcon, PapeleriaIcon, HardwareIcon, ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  insumos: InsumosIcon,
  granformato: GranFormatoIcon,
  papeleria: PapeleriaIcon,
  hardware: HardwareIcon,
};

const accentRing: Record<string, string> = {
  magenta: "group-hover:border-magenta-300 group-hover:bg-magenta-50",
  cyan: "group-hover:border-cyan-300 group-hover:bg-cyan-50",
  blush: "group-hover:border-blush-300 group-hover:bg-blush-50",
  periwinkle: "group-hover:border-periwinkle-300 group-hover:bg-periwinkle-50",
};

export function CategoryPillars() {
  return (
    <section id="pilares" className="scroll-mt-28 relative overflow-hidden bg-base-gray py-16 sm:py-20">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magenta/[0.07] blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-periwinkle/[0.06] blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container-ta relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Categorias</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Cuatro pilares, todo tu abasto</h2>
          <p className="mt-3 text-periwinkle">
            Desde el consumible del dia a dia hasta el equipo de gran formato.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon];
            return (
              <Reveal key={pillar.id} delay={i * 100} className="h-full">
                <a
                  href="#catalogo"
                  className={`group card-soft flex h-full flex-col p-6 hover:scale-[1.015] ${accentRing[pillar.accent]}`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-base-gray text-navy shadow-neu-inset transition-all duration-300 ease-luxe group-hover:scale-110 group-hover:bg-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{pillar.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-periwinkle">{pillar.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta">
                    Ver productos
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
