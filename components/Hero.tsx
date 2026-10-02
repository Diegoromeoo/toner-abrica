"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRightIcon, WhatsAppIcon, LocationIcon } from "./icons";
import { whatsappUrl } from "@/lib/site";
import { Magnetic } from "./Magnetic";

const lineas = ["Impresoras", "Plotters", "Consumibles"];

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_LUXE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 70]);
  // El scroll inicial del target no se conoce hasta montar: forzamos 0 en el primer
  // render de cliente (igual que en el servidor) para que la hidratacion coincida,
  // y activamos el parallax real justo despues.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden bg-cyan-100">
      {/* Fondo difuminado: el globo queda suave para no competir con el texto. Se desplaza
          mas lento que el contenido al hacer scroll (parallax sutil, contenido en overflow-hidden). */}
      <motion.div
        aria-hidden
        style={{ y: mounted ? bgY : 0 }}
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat"
        initial={false}
      >
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/hero-sky.jpg')", filter: "blur(14px)", transform: "scale(1.12)" }}
        />
      </motion.div>
      {/* Velo para legibilidad del texto a la izquierda (mas fuerte y amplio) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/55 md:to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/60 to-transparent md:w-2/3" />

      <div className="container-ta relative z-10 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-xl lg:max-w-[34rem]"
        >
          <motion.span variants={item} className="badge bg-white/90 text-navy shadow-soft">
            <LocationIcon className="h-3.5 w-3.5 text-magenta" />
            Envio local en Guadalajara y a todo Mexico
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-navy drop-shadow-sm sm:text-5xl lg:text-6xl"
          >
            Todo para tu oficina,
            <span className="block text-magenta">en un solo lugar.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 max-w-md text-base text-periwinkle sm:text-lg">
            Toner, tintas y cartuchos originales y compatibles, impresoras,
            plotters de gran formato, papeleria corporativa y hardware — con
            precios reales y surtido inmediato para empresas.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-2.5">
            {lineas.map((l) => (
              <span
                key={l}
                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-navy shadow-soft backdrop-blur"
              >
                {l}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a href="#catalogo" className="btn-primary">
                Ver catalogo
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25} max={10}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
