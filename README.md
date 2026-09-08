# Toner Abrica

E-commerce y catálogo corporativo **B2B** de tóner, impresoras, plotters, consumibles, papelería corporativa, hardware e insumos de gran formato.

Sitio construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, con la identidad visual de Toner Abrica (*Corporate Modern / Flat Design con toques neomórficos soft*).

---

## Requisitos

Necesitas **Node.js 18.17 o superior** (incluye `npm`). Descárgalo de https://nodejs.org (versión LTS).

Verifica la instalación:

```bash
node --version
npm --version
```

## Puesta en marcha

Desde la carpeta del proyecto (`Toner Abrica/`):

```bash
npm install
```

```bash
npm run dev
```

Abre http://localhost:3000 en tu navegador.

### Otros comandos

```bash
npm run build
```

```bash
npm run start
```

---

## Paleta de marca (en `tailwind.config.ts`)

| Token          | Hex       | Uso principal                               |
| -------------- | --------- | ------------------------------------------- |
| `magenta`      | `#9B1B7D` | Botones/CTA, precios, badges clave          |
| `navy`         | `#101846` | Encabezados, logotipo, textos de contraste  |
| `periwinkle`   | `#3D4C82` | Subtítulos, textos secundarios, bordes      |
| `cyan`         | `#93D5E1` | Banners, fondos suaves, badges "En stock"   |
| `blush`        | `#E8BACF` | Fondos cálidos, promociones de insumos      |
| `base.white`   | `#FFFFFF` | Contenedores / catálogo                     |
| `base.gray`    | `#F4F5F8` | Fondo general de la página                  |

Cada color tiene escala 50–900 para hover, bordes y fondos.

---

## Estructura

```
app/
  layout.tsx        # Layout raíz: fuentes, Header, Footer, botón WhatsApp, metadata SEO
  page.tsx          # Home: ensambla todas las secciones
  globals.css       # Directivas Tailwind + tokens + clases de componente (.btn-primary, .card-soft…)
  icon.svg          # Favicon (globo aerostático)
components/
  Logo.tsx          # Logotipo + marca del globo en SVG
  Header.tsx        # Nav + buscador prominente de No. de parte
  SearchBar.tsx     # Buscador (emite evento global "ta-search")
  Hero.tsx          # Banner con gradiente a cyan, globo y nubes SVG
  ServicesMarquee.tsx
  CategoryPillars.tsx # 4 pilares: Insumos / Gran Formato / Papelería / Hardware
  Features.tsx      # Barra de confianza (envío GDL, factura, etc.)
  ProductCatalog.tsx# Grid + filtros por categoría + búsqueda
  ProductCard.tsx   # Tarjeta de producto (soft shadow)
  Stats.tsx         # Contadores
  CTASection.tsx    # CTA "Arma tu pedido corporativo"
  Footer.tsx
  WhatsAppButton.tsx# Botón flotante
  icons.tsx         # Set de íconos SVG (fila del PDF de marca)
lib/
  catalog.ts        # Datos mock: productos, categorías, pilares + helpers
  site.ts           # Config global: contacto, WhatsApp, navegación
```

---

## Personalización rápida

- **Número de WhatsApp, correo, teléfono, horario:** edita `lib/site.ts`
  (el campo `whatsapp` va en formato internacional sin signos, ej. `523312345678`).
- **Productos y precios:** edita el arreglo `products` en `lib/catalog.ts`.
- **Categorías / pilares:** `categories` y `pillars` en `lib/catalog.ts`.
- **Colores:** `tailwind.config.ts`.

> Los datos de productos son de ejemplo. Sustitúyelos por tu inventario real.
> Los equipos de alto valor o gran formato usan `price: null` para mostrar
> "Cotizar" en lugar de un precio fijo.
