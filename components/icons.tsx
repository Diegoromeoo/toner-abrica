import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ------------------------- Iconos de pilares ------------------------- */

// Insumos: cartucho de toner con gota de tinta
export function InsumosIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="8" width="14" height="8" rx="1.5" />
      <path d="M17 10h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" />
      <path d="M6 8V6.5A1.5 1.5 0 0 1 7.5 5H13" />
      <path d="M9 12h4" />
    </svg>
  );
}

// Gran formato: plotter / impresora ancha con rollo
export function GranFormatoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="9" width="18" height="7" rx="1.5" />
      <path d="M7 16v3h10v-3" />
      <path d="M7 9V6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
      <path d="M8 13h1M15 13h1" />
    </svg>
  );
}

// Papeleria: hojas / resma apilada
export function PapeleriaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 4h8l4 4v12H6z" />
      <path d="M14 4v4h4" />
      <path d="M9 12h6M9 15h6M9 18h4" />
    </svg>
  );
}

// Hardware: impresora / multifuncional
export function HardwareIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9V4h12v5" />
      <rect x="4" y="9" width="16" height="7" rx="1.5" />
      <path d="M7 16h10v4H7z" />
      <circle cx="8" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/* ------------------------- Iconos de UI ------------------------- */

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5c0 8.3 6.7 15 15 15v-3.2a1.5 1.5 0 0 0-1.2-1.5l-3-.6a1.5 1.5 0 0 0-1.5.7l-.7 1.1A11.4 11.4 0 0 1 7 11.4l1.1-.7a1.5 1.5 0 0 0 .7-1.5l-.6-3A1.5 1.5 0 0 0 6.7 5z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

// Cookie: galleta con mordidas y chispas
export function CookieIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M21 12.5A8.5 8.5 0 1 1 11.5 3c-.3 1.4.7 2.7 2.1 2.7a2.1 2.1 0 0 0 2.1-2.1c1.9 1 3.3 2.8 3.8 4.9a2 2 0 0 0-2 2 2 2 0 0 0 2 2c.3 0 .6 0 .9-.1.4.3.6.7.6 1.1Z" />
      <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="13" cy="16.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h11v9H3z" />
      <path d="M14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12V4h8l9 9-8 8z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}
