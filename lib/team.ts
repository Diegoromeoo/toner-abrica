/** Personal destacado (datos de ejemplo / placeholder) */

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Iniciales para el avatar placeholder */
  initials: string;
  accent: "magenta" | "cyan" | "periwinkle" | "blush";
}

export const team: TeamMember[] = [
  {
    name: "Jose Luis Abrica",
    role: "Fundador y Director General",
    bio: "Mas de 10 anos abasteciendo de insumos a empresas de Guadalajara. Lidera la vision de servicio de Toner Abrica.",
    initials: "JA",
    accent: "magenta",
  },
  {
    name: "Luis Abraham Abrica",
    role: "Subdirector General",
    bio: "Segundo al mando de la empresa; coordina la operacion diaria y respalda a la direccion en la atencion a clientes.",
    initials: "LA",
    accent: "cyan",
  },
  {
    name: "Mariana Torres",
    role: "Gerente de Ventas B2B",
    bio: "Disena esquemas de mayoreo y convenios corporativos a la medida de cada cliente.",
    initials: "MT",
    accent: "periwinkle",
  },
  {
    name: "Ricardo Nunez",
    role: "Coordinador de Logistica",
    bio: "Responsable del envio local y nacional; asegura entregas puntuales en todo Mexico.",
    initials: "RN",
    accent: "cyan",
  },
  {
    name: "Paola Jimenez",
    role: "Especialista Tecnico en Impresion",
    bio: "Asesora en compatibilidad de toner, mantenimiento de equipos y gran formato.",
    initials: "PJ",
    accent: "blush",
  },
];
