/** Configuracion global del sitio Toner Abrica */

export const site = {
  name: "Toner Abrica",
  owner: "Jose Luis Abrica",
  tagline: "Toner, impresoras e insumos para tu oficina",
  description:
    "E-commerce y catalogo corporativo B2B de toner, impresoras, plotters, consumibles, papeleria y hardware. Envio local en Guadalajara y a todo Mexico.",
  city: "Guadalajara, Jalisco",
  locations: {
    taller: {
      label: "Taller",
      street: "Calle Tuerca 2175",
      postalCode: "44490",
      city: "Guadalajara, Jalisco",
    },
    local: {
      label: "Local",
      street: "Calle Galeana 279",
      neighborhood: "Zona Centro",
      postalCode: "44100",
      city: "Guadalajara, Jalisco",
    },
  },
  // ---- Contactos vacios por el momento ----
  // Numero de WhatsApp en formato internacional sin signos, ej. "523312345678".
  whatsapp: "",
  whatsappMessage: "Hola Toner Abrica, quiero cotizar:",
  email: "",
  phone: "",
  hours: "",
};

// ---- Redes sociales vacias por el momento ----
export const socials: { label: string; href: string }[] = [];

/** Menu de navegacion — secciones y categorias */
export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#pilares", label: "Categorias" },
  { href: "#catalogo", label: "Catalogo" },
  { href: "#envios", label: "Envios" },
  { href: "#equipo", label: "Equipo" },
  { href: "#cotizador", label: "Cotizador" },
  { href: "#contacto", label: "Contacto" },
];

/** Devuelve el enlace de WhatsApp, o "#" si aun no hay numero configurado */
export function whatsappUrl(message?: string): string {
  if (!site.whatsapp) return "#";
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const hasContact = {
  get whatsapp() {
    return Boolean(site.whatsapp);
  },
  get email() {
    return Boolean(site.email);
  },
  get phone() {
    return Boolean(site.phone);
  },
};
