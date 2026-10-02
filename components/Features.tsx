"use client";

import { motion } from "motion/react";
import { ShieldIcon, TruckIcon, TagIcon, CheckIcon } from "./icons";
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
    <section className="bg-white py-14 sm:py-16">
      <div className="container-ta grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group flex items-start gap-4 rounded-2xl border border-periwinkle-100 bg-white p-5 shadow-soft hover:shadow-elevate"
          >
            <motion.span
              whileHover={{ rotate: -8, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100
                text-cyan-700 shadow-neu-inset"
            >
              <f.icon className="h-6 w-6" />
            </motion.span>
            <div>
              <h3 className="text-base font-bold text-navy">{f.title}</h3>
              <p className="mt-1 text-sm text-periwinkle">{f.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
