"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Que tan fuerte sigue al cursor (0-1) */
  strength?: number;
  /** Desplazamiento maximo en pixeles */
  max?: number;
}

/**
 * Envoltorio "magnetico": el contenido sigue ligeramente al cursor dentro de su
 * propia area. Solo en mouse (se ignora en touch) y se desactiva por completo
 * si el visitante prefiere menos movimiento. El desplazamiento esta acotado
 * para que nunca produzca scroll horizontal.
 */
export function Magnetic({ children, className = "", strength = 0.3, max = 12 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const clamp = (v: number) => Math.max(-max, Math.min(max, v));

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduced || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(clamp((e.clientX - r.left - r.width / 2) * strength));
    y.set(clamp((e.clientY - r.top - r.height / 2) * strength));
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
