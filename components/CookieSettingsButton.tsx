"use client";

import type { ReactNode } from "react";
import { openCookieSettings } from "@/lib/cookie-consent";

export function CookieSettingsButton({
  className = "",
  children = "Configurar cookies",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {children}
    </button>
  );
}
