import type { ComponentType, SVGProps } from "react";
import {
  type Product,
  type BadgeType,
  type CategoryKey,
  formatPrice,
  BADGE_LABELS,
} from "@/lib/catalog";
import { whatsappUrl } from "@/lib/site";
import {
  InsumosIcon,
  GranFormatoIcon,
  PapeleriaIcon,
  HardwareIcon,
  WhatsAppIcon,
} from "./icons";

const badgeClass: Record<BadgeType, string> = {
  stock: "badge-stock",
  envio: "badge-stock",
  promo: "badge-promo",
  original: "badge-magenta",
  compatible: "badge bg-periwinkle-100 text-periwinkle-700",
  nuevo: "badge bg-navy-100 text-navy",
};

const thumbIcon: Record<CategoryKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  TON: InsumosIcon,
  TIN: InsumosIcon,
  CAR: InsumosIcon,
  IMP: HardwareIcon,
  MUL: HardwareIcon,
  HW: HardwareIcon,
  PLO: GranFormatoIcon,
  PAP: PapeleriaIcon,
  OFI: PapeleriaIcon,
};

const thumbTint: Record<string, string> = {
  TON: "from-magenta-50 to-blush-100 text-magenta",
  TIN: "from-magenta-50 to-blush-100 text-magenta",
  CAR: "from-magenta-50 to-blush-100 text-magenta",
  PLO: "from-cyan-50 to-cyan-100 text-cyan-700",
  PAP: "from-blush-50 to-blush-100 text-blush-600",
  OFI: "from-blush-50 to-blush-100 text-blush-600",
  IMP: "from-periwinkle-50 to-cyan-50 text-periwinkle",
  MUL: "from-periwinkle-50 to-cyan-50 text-periwinkle",
  HW: "from-periwinkle-50 to-cyan-50 text-periwinkle",
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = thumbIcon[product.category];
  const hasOffer = product.listPrice && product.price !== null && product.listPrice > product.price;
  const msg = `Hola Toner Abrica, quiero cotizar: ${product.name} (SKU ${product.sku})`;

  return (
    <article className="card-soft flex flex-col overflow-hidden">
      {/* Miniatura */}
      <div
        className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${thumbTint[product.category]}`}
      >
        <Icon className="h-16 w-16 opacity-80" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.badges.slice(0, 2).map((b) => (
            <span key={b} className={badgeClass[b]}>
              {BADGE_LABELS[b]}
            </span>
          ))}
        </div>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wide text-periwinkle-400">
          <span>{product.sku}</span>
          <span>{product.brand}</span>
        </div>

        <h3 className="mt-1.5 line-clamp-2 text-base font-bold leading-snug text-navy">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-periwinkle">{product.description}</p>

        {/* Precio */}
        <div className="mt-4 flex items-end justify-between gap-2">
          <div>
            {hasOffer && (
              <span className="block text-xs text-periwinkle-300 line-through">
                {formatPrice(product.listPrice!)}
              </span>
            )}
            <span className="text-2xl font-extrabold text-magenta">
              {formatPrice(product.price)}
            </span>
            {product.price !== null && (
              <span className="ml-1 text-xs font-medium text-periwinkle-400">c/u</span>
            )}
          </div>
        </div>

        <a
          href={whatsappUrl(msg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-magenta
            px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-magenta-600"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {product.price === null ? "Solicitar cotizacion" : "Cotizar"}
        </a>
      </div>
    </article>
  );
}
