import { ArrowRightIcon, WhatsAppIcon, LocationIcon } from "./icons";
import { whatsappUrl } from "@/lib/site";
import { Reveal } from "./Reveal";

const lineas = ["Impresoras", "Plotters", "Consumibles"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cyan-100">
      {/* Fondo difuminado: el globo queda suave para no competir con el texto */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/hero-sky.jpg')", filter: "blur(14px)", transform: "scale(1.12)" }}
      />
      {/* Velo para legibilidad del texto a la izquierda (mas fuerte y amplio) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent md:via-white/55 md:to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-white/60 to-transparent md:w-2/3" />

      <div className="container-ta relative z-10 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-28">
        <Reveal className="max-w-xl lg:max-w-[34rem]">
          <span className="badge bg-white/90 text-navy shadow-soft">
            <LocationIcon className="h-3.5 w-3.5 text-magenta" />
            Envio local en Guadalajara y a todo Mexico
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-navy drop-shadow-sm sm:text-5xl lg:text-6xl">
            Todo para tu oficina,
            <span className="block text-magenta">en un solo lugar.</span>
          </h1>

          <p className="mt-5 max-w-md text-base text-periwinkle sm:text-lg">
            Toner, tintas y cartuchos originales y compatibles, impresoras,
            plotters de gran formato, papeleria corporativa y hardware — con
            precios reales y surtido inmediato para empresas.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {lineas.map((l) => (
              <span
                key={l}
                className="rounded-full bg-white/80 px-4 py-1.5 text-sm font-semibold text-navy shadow-soft backdrop-blur"
              >
                {l}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#catalogo" className="btn-primary">
              Ver catalogo
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
