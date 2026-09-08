import Link from "next/link";

interface LogoProps {
  showSubtitle?: boolean;
  variant?: "color" | "light";
  className?: string;
}

export function Logo({ showSubtitle = false, variant = "color", className = "" }: LogoProps) {
  const abricaColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-cyan-200" : "text-periwinkle";

  return (
    <Link href="/" className={`group inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/globo.png"
        alt="Toner Abrica"
        className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-extrabold tracking-tight sm:text-2xl">
          <span className="text-magenta">TONER</span>{" "}
          <span className={abricaColor}>ABRICA</span>
        </span>
        {showSubtitle && (
          <span className={`mt-0.5 font-display text-[11px] font-medium tracking-wide ${subColor}`}>
            Jose Luis Abrica
          </span>
        )}
      </span>
    </Link>
  );
}
