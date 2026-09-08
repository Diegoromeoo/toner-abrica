import Link from "next/link";
import { Logo } from "./Logo";
import { site, navLinks, whatsappUrl, hasContact, socials } from "@/lib/site";
import { WhatsAppIcon, LocationIcon, TruckIcon, ArrowRightIcon } from "./icons";

export function Footer() {
  return (
    <footer id="contacto" className="relative scroll-mt-24 overflow-hidden bg-navy text-cyan-100/90">
      {/* Textura armonica */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.12]" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-full bg-magenta/15 blur-3xl" />

      <div className="container-ta relative py-12">
        {/* Bloque superior compacto */}
        <div className="flex flex-col items-center gap-6 text-center">
          <Logo variant="light" showSubtitle />
          <p className="max-w-xl text-sm text-cyan-100/70">{site.description}</p>

          {/* Navegacion en una sola linea */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="transition hover:text-cyan-300">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Chips de servicio */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-periwinkle-700/70 bg-white/5 px-3 py-1.5">
              <LocationIcon className="h-3.5 w-3.5 text-cyan-300" />
              {site.address}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-periwinkle-700/70 bg-white/5 px-3 py-1.5">
              <TruckIcon className="h-3.5 w-3.5 text-cyan-300" />
              Envio a todo Mexico
            </span>
          </div>

          {/* CTA / contacto */}
          {hasContact.whatsapp ? (
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp directo
            </a>
          ) : (
            <a href="#cotizador" className="btn-primary">
              Solicitar cotizacion
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          )}

          {/* Redes (vacias por ahora) */}
          {socials.length > 0 && (
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-cyan-300">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-periwinkle-700/50 pt-5 text-xs text-cyan-100/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name} — {site.owner}.
          </p>
          <p>Hecho en {site.city}.</p>
        </div>
      </div>
    </footer>
  );
}
