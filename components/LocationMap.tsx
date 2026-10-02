"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { site } from "@/lib/site";
import { LocationIcon } from "./icons";
import { Reveal } from "./Reveal";

type LocationKey = "local" | "taller";

const mapsQuery = (address: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const views: Record<LocationKey, { label: string; address: string; mapQuery: string }> = {
  local: {
    label: site.locations.local.label,
    address: `${site.locations.local.street}, ${site.locations.local.neighborhood}, C.P. ${site.locations.local.postalCode}, ${site.locations.local.city}`,
    mapQuery: mapsQuery(
      `${site.locations.local.street}, ${site.locations.local.neighborhood}, ${site.locations.local.postalCode} ${site.locations.local.city}, Mexico`
    ),
  },
  taller: {
    label: site.locations.taller.label,
    address: `${site.locations.taller.street}, C.P. ${site.locations.taller.postalCode}, ${site.locations.taller.city}`,
    mapQuery: mapsQuery(
      `${site.locations.taller.street}, ${site.locations.taller.postalCode} ${site.locations.taller.city}, Mexico`
    ),
  },
};

export function LocationMap() {
  const [active, setActive] = useState<LocationKey>("local");
  const current = views[active];

  return (
    <section id="contacto" className="scroll-mt-24 relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="container-ta relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Visitanos</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Nuestra ubicacion en Guadalajara</h2>
          <p className="mt-3 text-periwinkle">
            Dos puntos de atencion: nuestro local de venta y el taller. Elige uno para ver como
            llegar.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-3xl border border-periwinkle-100 bg-base-gray p-3 shadow-soft sm:p-4">
            {/* Toggle Local / Taller con indicador deslizante */}
            <div className="relative flex gap-1 rounded-full bg-white p-1 shadow-soft">
              {(Object.keys(views) as LocationKey[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  className={`relative z-10 flex-1 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    active === key ? "text-white" : "text-navy hover:text-magenta"
                  }`}
                >
                  {active === key && (
                    <motion.span
                      layoutId="location-toggle-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-magenta shadow-cta"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {views[key].label}
                </button>
              ))}
            </div>

            {/* Direccion + mapa */}
            <div className="mt-3 flex items-start gap-2 px-2 text-sm text-periwinkle">
              <LocationIcon className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {current.address}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative mt-3 overflow-hidden rounded-2xl border border-periwinkle-100 shadow-soft">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={active}
                  src={current.mapQuery}
                  title={`Mapa de ${current.label} — Toner Abrica`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-80 w-full sm:h-96"
                  style={{ border: 0 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
