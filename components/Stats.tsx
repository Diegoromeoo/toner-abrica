import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

interface Stat {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
  separator?: boolean;
}

const stats: Stat[] = [
  { end: 10, suffix: "+", label: "Anos de experiencia" },
  { end: 1500, suffix: "+", label: "Clientes B2B atendidos" },
  { end: 62000, suffix: "+", label: "Pedidos surtidos" },
  { end: 97, suffix: "%", label: "Clientes que recompran" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
      {/* Textura sutil */}
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.15]" />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-magenta/20 blur-3xl" />

      <div className="container-ta relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Con quien ya trabajamos
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Diez anos siendo tu aliado en insumos de oficina
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 120}
              className="rounded-2xl border border-periwinkle-700/60 bg-white/5 p-6 text-center backdrop-blur-sm"
            >
              <div className="font-display text-4xl font-extrabold text-cyan-300 sm:text-5xl">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} separator={s.separator} />
              </div>
              <div className="mt-2 text-sm text-cyan-100/80">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-wide text-periwinkle-300">
          Cifras de referencia aproximadas del negocio.
        </p>
      </div>
    </section>
  );
}
