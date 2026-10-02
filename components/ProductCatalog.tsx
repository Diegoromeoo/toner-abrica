"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { products, categories, type CategoryKey } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";
import { SearchIcon, CloseIcon } from "./icons";

type Filter = CategoryKey | "ALL";

function matches(query: string, p: (typeof products)[number]): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    p.name,
    p.sku,
    p.brand,
    p.description,
    ...p.partNumbers,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

export function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [query, setQuery] = useState("");

  // Escucha el buscador del header
  useEffect(() => {
    function onSearch(e: Event) {
      const detail = (e as CustomEvent<string>).detail ?? "";
      setQuery(detail);
      setFilter("ALL");
    }
    window.addEventListener("ta-search", onSearch as EventListener);
    return () => window.removeEventListener("ta-search", onSearch as EventListener);
  }, []);

  const visible = useMemo(() => {
    return products.filter(
      (p) => (filter === "ALL" || p.category === filter) && matches(query, p)
    );
  }, [filter, query]);

  return (
    <section id="catalogo" className="scroll-mt-24 relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magenta/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-periwinkle/[0.06] blur-3xl" />
      <div className="container-ta relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Catalogo</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Productos e insumos</h2>
            <p className="mt-2 max-w-xl text-periwinkle">
              Precios de referencia por pieza. Equipos de alto valor y gran formato se
              cotizan segun configuracion y volumen.
            </p>
          </div>

          {/* Buscador local */}
          <div className="relative w-full sm:max-w-xs">
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-periwinkle" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filtrar por parte o modelo..."
              className="w-full rounded-full border border-periwinkle-200 bg-base-gray py-2.5 pl-10 pr-9 text-sm
                text-navy placeholder:text-periwinkle-300 focus:border-magenta focus:bg-white focus:outline-none
                focus:ring-4 focus:ring-magenta-100"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpiar busqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-periwinkle hover:text-magenta"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tabs de categoria */}
        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip active={filter === "ALL"} onClick={() => setFilter("ALL")}>
            Todos
          </FilterChip>
          {categories.map((c) => (
            <FilterChip key={c.key} active={filter === c.key} onClick={() => setFilter(c.key)}>
              <span className="font-mono text-[11px] opacity-70">{c.code}</span> {c.label}
            </FilterChip>
          ))}
        </div>

        {/* Grid */}
        {products.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-periwinkle-200 bg-base-gray p-12 text-center">
            <p className="text-lg font-bold text-navy">Catalogo en construccion</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-periwinkle">
              Estamos cargando nuestro inventario de toner, tintas, impresoras y mas. Mientras
              tanto, escribenos y con gusto cotizamos lo que necesitas.
            </p>
          </div>
        ) : visible.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.sku} product={p} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-dashed border-periwinkle-200 bg-base-gray p-10 text-center">
            <p className="font-semibold text-navy">Sin resultados para &ldquo;{query}&rdquo;</p>
            <p className="mt-1 text-sm text-periwinkle">
              Prueba con el numero de parte exacto o escribenos por WhatsApp y lo conseguimos.
            </p>
          </div>
        )}

        <p className="mt-8 text-center text-xs uppercase tracking-wide text-periwinkle-400">
          Precios por pieza salvo indicacion. Equipos y gran formato se cotizan por WhatsApp segun
          configuracion y volumen.
        </p>
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative isolate rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "border-magenta text-white"
          : "border-periwinkle-200 bg-white text-navy hover:border-magenta-300 hover:text-magenta"
      }`}
    >
      {active && (
        <motion.span
          layoutId="catalog-filter-pill"
          className="absolute inset-0 -z-10 rounded-full bg-magenta shadow-cta"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      {children}
    </button>
  );
}
