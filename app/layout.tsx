import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "toner",
    "cartuchos",
    "tintas",
    "impresoras",
    "plotters",
    "gran formato",
    "papeleria corporativa",
    "articulos de oficina",
    "hardware",
    "Guadalajara",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {/* "never": las animaciones se muestran siempre, aunque el sistema del
            visitante pida reducir movimiento (decision explicita del cliente). */}
        <MotionConfig reducedMotion="never">
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <CookieConsent />
        </MotionConfig>
      </body>
    </html>
  );
}
