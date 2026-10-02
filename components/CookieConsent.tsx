"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CookieIcon } from "./icons";
import { migrateLegacyConsent, onOpenCookieSettings, readConsent, writeConsent } from "@/lib/cookie-consent";

type View = "banner" | "settings";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("banner");
  const [thirdParty, setThirdParty] = useState(false);

  useEffect(() => {
    migrateLegacyConsent();
    if (readConsent() === "unset") setOpen(true);
    return onOpenCookieSettings(() => {
      setThirdParty(readConsent() === "all");
      setView("settings");
      setOpen(true);
    });
  }, []);

  function save(value: "all" | "necessary") {
    writeConsent(value);
    setOpen(false);
  }

  function cancelSettings() {
    if (readConsent() === "unset") setView("banner");
    else setOpen(false);
  }

  return (
    <AnimatePresence onExitComplete={() => setView("banner")}>
      {open && (
        <motion.div
          key="cookie-consent"
          role="dialog"
          aria-label="Preferencias de cookies"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md sm:px-0"
        >
          <div className="max-h-[85vh] overflow-y-auto rounded-2xl border border-periwinkle-100 bg-white/95 p-5 shadow-soft-lg backdrop-blur">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-magenta-50 text-magenta">
                <CookieIcon className="h-5 w-5" />
              </span>

              {view === "banner" ? (
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-navy">Usamos cookies</h2>
                  <p className="mt-1 text-sm text-periwinkle">
                    Usamos una cookie propia para recordar tu eleccion y, solo si lo permites, cargamos contenido
                    de terceros como el mapa de Google, que puede colocar sus propias cookies.{" "}
                    <Link
                      href="/aviso-de-privacidad"
                      className="font-semibold text-magenta underline underline-offset-2"
                    >
                      Mas informacion
                    </Link>
                    .
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <button type="button" onClick={() => save("all")} className="btn-primary px-5 py-2.5 text-xs">
                      Aceptar todas
                    </button>
                    <button
                      type="button"
                      onClick={() => save("necessary")}
                      className="btn-secondary px-5 py-2.5 text-xs"
                    >
                      Rechazar
                    </button>
                    <button
                      type="button"
                      onClick={() => setView("settings")}
                      className="px-2 py-2 text-xs font-semibold text-periwinkle underline underline-offset-2 transition-colors hover:text-magenta"
                    >
                      Configurar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="min-w-0 flex-1">
                  <h2 className="text-sm font-bold text-navy">Preferencias de cookies</h2>
                  <ul className="mt-3 space-y-4">
                    <li className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-navy">Necesarias</p>
                        <p className="mt-0.5 text-xs text-periwinkle">
                          Guardan tu eleccion de cookies. Siempre activas.
                        </p>
                      </div>
                      <Switch checked disabled label="Cookies necesarias" />
                    </li>
                    <li className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-navy">Contenido de terceros</p>
                        <p className="mt-0.5 text-xs text-periwinkle">
                          Mapa de Google en la seccion de ubicacion. Google puede colocar sus propias cookies.
                        </p>
                      </div>
                      <Switch checked={thirdParty} onChange={setThirdParty} label="Cookies de contenido de terceros" />
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    <button
                      type="button"
                      onClick={() => save(thirdParty ? "all" : "necessary")}
                      className="btn-primary px-5 py-2.5 text-xs"
                    >
                      Guardar preferencias
                    </button>
                    <button type="button" onClick={cancelSettings} className="btn-secondary px-5 py-2.5 text-xs">
                      Cancelar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Switch({
  checked,
  onChange,
  disabled = false,
  label,
}: {
  checked: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        checked ? "bg-magenta" : "bg-periwinkle-200"
      } ${disabled ? "cursor-not-allowed opacity-60" : ""}`}
    >
      <span
        className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}
