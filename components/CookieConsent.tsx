"use client";

import { useEffect, useState } from "react";
import { CookieIcon } from "./icons";

const STORAGE_KEY = "ta-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function choose(value: "accepted" | "declined") {
    setLeaving(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* localStorage no disponible: el aviso solo se oculta para esta sesion */
    }
    window.setTimeout(() => setVisible(false), 280);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className={`fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 transition-all duration-300 ease-out sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md sm:px-0 ${
        leaving ? "pointer-events-none translate-y-4 opacity-0" : "translate-y-0 opacity-100 animate-fade-up"
      }`}
    >
      <div className="flex gap-4 rounded-2xl border border-periwinkle-100 bg-white/95 p-5 shadow-soft-lg backdrop-blur">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-magenta-50 text-magenta">
          <CookieIcon className="h-5 w-5" />
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-bold text-navy">Usamos cookies</h2>
          <p className="mt-1 text-sm text-periwinkle">
            Usamos cookies propias y de terceros para mejorar tu experiencia y medir el uso del sitio. Puedes
            aceptarlas o declinarlas cuando quieras.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button type="button" onClick={() => choose("accepted")} className="btn-primary px-5 py-2.5 text-xs">
              Aceptar
            </button>
            <button
              type="button"
              onClick={() => choose("declined")}
              className="btn-secondary px-5 py-2.5 text-xs"
            >
              Declinar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
