const items = [
  "TONER",
  "TINTAS",
  "CARTUCHOS",
  "IMPRESORAS",
  "MULTIFUNCIONALES",
  "PLOTTERS",
  "GRAN FORMATO",
  "PAPEL BOND",
  "ESCANERES",
  "ARTICULOS DE OFICINA",
];

export function ServicesMarquee() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden bg-navy py-3">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-sm font-semibold tracking-widest text-cyan-200">
            {item}
            <span className="text-magenta-400" aria-hidden="true">
              &bull;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
