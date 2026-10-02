"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { Logo } from "./Logo";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "./icons";
import { navLinks, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const elevatedShadow = useTransform(scrollY, [0, 60], [0, 1]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-periwinkle-100 bg-white/95 shadow-header backdrop-blur">
      {/* Sombra que se intensifica al bajar: sensacion de "elevacion" progresiva */}
      <motion.div
        aria-hidden
        style={{ opacity: elevatedShadow }}
        className="pointer-events-none absolute inset-x-0 top-full h-6 bg-gradient-to-b from-navy/10 to-transparent"
      />
      {/* Barra de progreso de lectura: se llena segun cuanto has bajado en la pagina */}
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-gradient-to-r from-magenta via-magenta-400 to-cyan-400"
      />
      <div className="container-ta">
        {/* Fila 1: logo + buscador + CTA */}
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Logo showSubtitle />

          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
            className="rounded-full p-2 text-navy transition hover:bg-base-gray lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Fila 2: menu de secciones (desktop) */}
      <nav className="hidden border-t border-periwinkle-100 bg-white/80 lg:block">
        <div className="container-ta flex items-center justify-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-3 text-sm font-semibold text-navy transition-colors hover:text-magenta
                after:absolute after:inset-x-4 after:bottom-1.5 after:h-0.5 after:origin-left after:scale-x-0
                after:bg-magenta after:transition-transform hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menu movil desplegable */}
      {open && (
        <nav className="border-t border-periwinkle-100 bg-white lg:hidden">
          <div className="container-ta flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy transition hover:bg-base-gray hover:text-magenta"
              >
                {link.label}
              </Link>
            ))}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-2">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp directo
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
