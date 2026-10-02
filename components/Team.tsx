"use client";

import { motion } from "motion/react";
import { team, type TeamMember } from "@/lib/team";
import { Reveal } from "./Reveal";

const avatarBg: Record<string, string> = {
  magenta: "from-magenta-400 to-magenta",
  periwinkle: "from-periwinkle-400 to-periwinkle",
  cyan: "from-cyan-400 to-cyan-700",
  blush: "from-blush-400 to-blush-600",
};

/** Los dos primeros son la direccion (fundador y segundo al mando); el resto es el equipo. */
const LEADERSHIP_COUNT = 2;

export function Team() {
  const leaders = team.slice(0, LEADERSHIP_COUNT);
  const staff = team.slice(LEADERSHIP_COUNT);

  return (
    <section id="equipo" className="scroll-mt-24 relative overflow-hidden bg-base-gray py-16 sm:py-20">
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-magenta/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-periwinkle/[0.06] blur-3xl" />
      <div className="container-ta relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-label">Nuestro equipo</p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Personal destacado</h2>
          <p className="mt-3 text-periwinkle">
            Gente que conoce de insumos, impresion y logistica — lista para asesorarte.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {leaders.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i} leader />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {staff.map((m, i) => (
            <MemberCard key={m.name} member={m} index={i + LEADERSHIP_COUNT} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ member: m, index, leader = false }: { member: TeamMember; index: number; leader?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      className="card-soft flex flex-col items-center p-6 text-center"
    >
      {/* Avatar placeholder (foto pendiente) */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className={`flex items-center justify-center rounded-full bg-gradient-to-br ${avatarBg[m.accent]} font-extrabold text-white shadow-soft ring-4 ring-white ${
          leader ? "h-28 w-28 text-3xl" : "h-24 w-24 text-2xl"
        }`}
      >
        {m.initials}
      </motion.div>
      <h3 className="mt-4 text-lg font-bold text-navy">{m.name}</h3>
      <p className="mt-0.5 text-sm font-semibold text-magenta">{m.role}</p>
      <p className="mt-3 text-sm text-periwinkle">{m.bio}</p>
    </motion.div>
  );
}
