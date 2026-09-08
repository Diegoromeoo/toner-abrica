import { ShieldIcon, TruckIcon, TagIcon, CheckIcon } from "./icons";
import { Reveal } from "./Reveal";
import type { ComponentType, SVGProps } from "react";

interface Feature {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: ShieldIcon,
    title: "Original y compatible",
    text: "Insumos de marca y alternativas garantizadas para cada equipo.",
  },
  {
    icon: TruckIcon,
    title: "Envio local GDL",
    text: "Entrega el mismo dia en la zona metropolitana de Guadalajara.",
  },
  {
    icon: TagIcon,
    title: "Precios de mayoreo",
    text: "Esquemas por volumen para empresas, escuelas y gobierno.",
  },
  {
    icon: CheckIcon,
    title: "Facturacion inmediata",
    text: "Comprobante fiscal con desglose de IVA en cada compra.",
  },
];

export function Features() {
  return (
    <section className="bg-white py-12">
      <div className="container-ta grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal key={f.title} delay={i * 100} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
              <f.icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-base font-bold text-navy">{f.title}</h3>
              <p className="mt-1 text-sm text-periwinkle">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
