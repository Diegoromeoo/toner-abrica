import { WhatsAppIcon, ArrowRightIcon, MailIcon } from "./icons";
import { whatsappUrl, site, hasContact } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section id="cotizador" className="scroll-mt-24 bg-base-gray py-16 sm:py-20">
      <div className="container-ta">
        <div className="relative overflow-hidden rounded-3xl bg-magenta-cta px-6 py-12 shadow-cta sm:px-12 sm:py-16">
          {/* Adorno */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blush/20" />

          <Reveal className="relative max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Arma tu pedido corporativo
            </h2>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Mandanos tu lista de consumibles, modelos de impresora o numeros de parte.
              Te devolvemos cotizacion con precios reales, disponibilidad y desglose de IVA.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3
                  text-sm font-semibold uppercase tracking-wide text-magenta transition hover:bg-cyan-50
                  hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
              {hasContact.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70
                    px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition
                    hover:bg-white/10"
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
