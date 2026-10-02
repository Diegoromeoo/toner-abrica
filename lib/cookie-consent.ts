import { useSyncExternalStore } from "react";

/** "all" = necesarias + contenido de terceros · "necessary" = solo necesarias · "unset" = aun no elige */
export type ConsentKey = "unset" | "all" | "necessary";

export const CONSENT_COOKIE = "ta-cookie-consent";
const CHANGE_EVENT = "ta-consent-change";
const OPEN_EVENT = "ta-open-cookie-settings";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180;

export function readConsent(): ConsentKey {
  if (typeof document === "undefined") return "unset";
  const match = document.cookie.match(new RegExp(`(?:^|; )${CONSENT_COOKIE}=([^;]*)`));
  if (!match) return "unset";
  return match[1] === "all" || match[1] === "necessary" ? match[1] : "unset";
}

export function writeConsent(value: Exclude<ConsentKey, "unset">) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${value}; max-age=${MAX_AGE_SECONDS}; path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Pasa la eleccion guardada en localStorage por la version anterior del banner a la cookie. */
export function migrateLegacyConsent() {
  try {
    const legacy = window.localStorage.getItem(CONSENT_COOKIE);
    if (legacy !== "accepted" && legacy !== "declined") return;
    window.localStorage.removeItem(CONSENT_COOKIE);
    if (readConsent() === "unset") writeConsent(legacy === "accepted" ? "all" : "necessary");
  } catch {
    // localStorage no disponible: no hay nada que migrar
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function onOpenCookieSettings(handler: () => void) {
  window.addEventListener(OPEN_EVENT, handler);
  return () => window.removeEventListener(OPEN_EVENT, handler);
}

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => window.removeEventListener(CHANGE_EVENT, onChange);
}

/** Eleccion actual del visitante; "unset" en el servidor y hasta que el cliente la lee. */
export function useConsent(): ConsentKey {
  return useSyncExternalStore(subscribe, readConsent, () => "unset");
}
