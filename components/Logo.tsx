"use client";

import Link from "next/link";
import { motion } from "motion/react";

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
      {/* El globo "flota" todo el tiempo, como un globo aerostatico de verdad */}
      <motion.img
        src="/globo.png"
        alt="Toner Abrica"
        className="h-10 w-auto shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
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
