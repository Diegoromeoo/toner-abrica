import { Reveal } from "./Reveal";
import { TruckIcon, ShieldIcon, CheckIcon } from "./icons";

/** Coordenadas en el espacio de la imagen mexico.png (857 x 1109) */
const HUB = { x: 330, y: 615 };

const cities = [
  { name: "Tijuana", x: 96, y: 315, anchor: "start" as const },
  { name: "Monterrey", x: 495, y: 398, anchor: "start" as const },
  { name: "CDMX", x: 452, y: 668, anchor: "start" as const },
  { name: "Cancun", x: 805, y: 598, anchor: "end" as const },
  { name: "Oaxaca", x: 478, y: 766, anchor: "middle" as const },
];

const routes = [
  { d: "M330,615 Q220,430 96,315", dur: "3.2s" },
  { d: "M330,615 Q430,420 495,398", dur: "2.6s" },
  { d: "M330,615 Q400,650 452,668", dur: "2.0s" },
  { d: "M330,615 Q560,500 805,598", dur: "3.8s" },
  { d: "M330,615 Q400,705 478,766", dur: "2.9s" },
];

const perks = [
  { icon: TruckIcon, title: "Cobertura nacional", text: "Enviamos a las 32 entidades del pais." },
  { icon: ShieldIcon, title: "Empaque seguro", text: "Proteccion especial para toner y equipos." },
  { icon: CheckIcon, title: "Rastreo de tu pedido", text: "Seguimiento desde que sale del almacen." },
];

export function MexicoShipping() {
  return (
    <section id="envios" className="scroll-mt-28 overflow-hidden bg-white py-16 sm:py-20">
      <div className="container-ta grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Texto */}
        <Reveal>
          <p className="section-label">Logistica</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Envio local en Guadalajara y a todo <span className="text-magenta">Mexico</span>
          </h2>
          <p className="mt-4 max-w-lg text-periwinkle">
            Desde nuestro centro en Guadalajara despachamos consumibles y equipo a cualquier ciudad
            del pais, con empaque seguro y seguimiento de principio a fin.
          </p>

          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <p.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-navy">{p.title}</h3>
                  <p className="mt-0.5 text-sm text-periwinkle">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Mapa real + rutas animadas */}
        <Reveal delay={150}>
          <div className="rounded-3xl border border-periwinkle-100 bg-base-gray p-4 shadow-soft sm:p-6">
            <div className="relative mx-auto w-full max-w-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mexico.png" alt="Mapa de Mexico" className="w-full" />
              <svg
                viewBox="0 0 857 1109"
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-label="Rutas de envio en Mexico"
              >
                {routes.map((r, i) => (
                  <g key={i}>
                    <path d={r.d} fill="none" stroke="#9B1B7D" strokeWidth="3" opacity="0.25" />
                    <path
                      d={r.d}
                      fill="none"
                      stroke="#9B1B7D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="6 14"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="0"
                        to="-40"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <circle r="6" fill="#9B1B7D">
                      <animateMotion dur={r.dur} repeatCount="indefinite" path={r.d} />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        dur={r.dur}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                ))}

                {cities.map((c) => (
                  <g key={c.name}>
                    <circle cx={c.x} cy={c.y} r="5.5" fill="#101846" />
                    <text
                      x={c.anchor === "end" ? c.x - 8 : c.anchor === "start" ? c.x + 8 : c.x}
                      y={c.y - 10}
                      textAnchor={c.anchor}
                      className="fill-navy"
                      fontSize="17"
                      fontWeight="700"
                    >
                      {c.name}
                    </text>
                  </g>
                ))}

                {/* Hub Guadalajara */}
                <circle cx={HUB.x} cy={HUB.y} r="16" fill="#9B1B7D" opacity="0.2">
                  <animate attributeName="r" values="14;26;14" dur="2.2s" repeatCount="indefinite" />
                </circle>
                <circle cx={HUB.x} cy={HUB.y} r="9" fill="#9B1B7D" stroke="#fff" strokeWidth="2.5" />
                <text
                  x={HUB.x - 6}
                  y={HUB.y + 26}
                  textAnchor="end"
                  className="fill-magenta"
                  fontSize="18"
                  fontWeight="800"
                >
                  Guadalajara
                </text>
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
