"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { WhatsAppIcon, ArrowRightIcon, MailIcon } from "./icons";
import { whatsappUrl, site, hasContact } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const floatA = useTransform(scrollYProgress, [0, 1], [-24, 24]);
  const floatB = useTransform(scrollYProgress, [0, 1], [20, -20]);
  // Igual que en Hero: el scroll inicial del target no se conoce hasta montar,
  // asi que arrancamos en 0 (coincide con el servidor) y activamos el parallax despues.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="cotizador" className="scroll-mt-24 bg-base-gray py-16 sm:py-20">
      <div className="container-ta">
        <div ref={ref} className="relative overflow-hidden rounded-3xl bg-magenta-cta px-6 py-12 shadow-cta sm:px-12 sm:py-16">
          {/* Adorno: deriva lentamente al hacer scroll (parallax contenido por el overflow-hidden) */}
          <motion.div
            aria-hidden
            style={{ y: mounted ? floatA : 0 }}
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"
          />
          <motion.div
            aria-hidden
            style={{ y: mounted ? floatB : 0 }}
            className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blush/20"
          />

          <Reveal className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Arma tu pedido corporativo
            </h2>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Mandanos tu lista de consumibles, modelos de impresora o numeros de parte.
              Te devolvemos cotizacion con precios reales, disponibilidad y desglose de IVA.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shine relative isolate inline-flex items-center justify-center gap-2 overflow-hidden
                    rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-magenta
                    shadow-soft transition-all duration-300 ease-luxe hover:-translate-y-0.5 hover:bg-cyan-50
                    hover:shadow-elevate"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </Magnetic>
              {hasContact.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70
                    px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all
                    duration-300 ease-luxe hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <MailIcon className="h-4 w-4" />
                  Enviar por correo
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
