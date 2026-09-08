/**
 * Toner Abrica â€” Catalogo B2B (mock data)
 * Precios en MXN. Los articulos de hardware de alto valor o gran formato
 * pueden manejarse "por cotizacion" (price: null).
 */

export type BadgeType = "stock" | "envio" | "promo" | "original" | "compatible" | "nuevo";

export interface Product {
  sku: string;
  name: string;
  description: string;
  category: CategoryKey;
  brand: string;
  /** Precio de lista en MXN. null = "Cotizar" */
  price: number | null;
  /** Precio anterior para mostrar oferta (opcional) */
  listPrice?: number;
  badges: BadgeType[];
  /** Numeros de parte / modelos compatibles, para el buscador */
  partNumbers: string[];
}

export type CategoryKey =
  | "TON"
  | "TIN"
  | "CAR"
  | "IMP"
  | "MUL"
  | "PLO"
  | "PAP"
  | "OFI"
  | "HW";

export interface Category {
  key: CategoryKey;
  code: string;
  label: string;
}

/** Tabs de filtro del catalogo */
export const categories: Category[] = [
  { key: "TON", code: "TON", label: "Toner" },
  { key: "TIN", code: "TIN", label: "Tintas" },
  { key: "CAR", code: "CAR", label: "Cartuchos" },
  { key: "IMP", code: "IMP", label: "Impresoras" },
  { key: "MUL", code: "MUL", label: "Multifuncionales" },
  { key: "PLO", code: "PLO", label: "Gran Formato" },
  { key: "PAP", code: "PAP", label: "Papeleria" },
  { key: "OFI", code: "OFI", label: "Articulos de Oficina" },
  { key: "HW", code: "HW", label: "Hardware" },
];

/**
 * Pilares de servicio / categorias rapidas.
 * Cada pilar agrupa varias categorias del catalogo.
 */
export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: "insumos" | "granformato" | "papeleria" | "hardware";
  categories: CategoryKey[];
  accent: "cyan" | "blush" | "periwinkle" | "magenta";
}

export const pillars: Pillar[] = [
  {
    id: "insumos",
    title: "Insumos",
    description: "Toner, tintas y cartuchos originales y compatibles para toda marca.",
    icon: "insumos",
    categories: ["TON", "TIN", "CAR"],
    accent: "magenta",
  },
  {
    id: "gran-formato",
    title: "Gran Formato",
    description: "Plotters, papel en rollo y consumibles para impresion de gran formato.",
    icon: "granformato",
    categories: ["PLO"],
    accent: "cyan",
  },
  {
    id: "papeleria",
    title: "Papeleria",
    description: "Papeleria corporativa y articulos de oficina para tu operacion diaria.",
    icon: "papeleria",
    categories: ["PAP", "OFI"],
    accent: "blush",
  },
  {
    id: "hardware",
    title: "Hardware",
    description: "Impresoras, multifuncionales, escaneres y equipo de computo.",
    icon: "hardware",
    categories: ["IMP", "MUL", "HW"],
    accent: "periwinkle",
  },
];

export const products: Product[] = [];


/** Formatea un precio MXN o devuelve "Cotizar" */
export function formatPrice(price: number | null): string {
  if (price === null) return "Cotizar";
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export const BADGE_LABELS: Record<BadgeType, string> = {
  stock: "En stock",
  envio: "Envio local GDL",
  promo: "Oferta",
  original: "Original",
  compatible: "Compatible",
  nuevo: "Nuevo",
};
