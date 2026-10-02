import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad y cookies",
  description:
    "Aviso de privacidad y politica de cookies de Toner Abrica: que datos recabamos, para que los usamos y como ejercer tus derechos ARCO.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-ta max-w-3xl">
        <p className="section-label">Legal</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Aviso de privacidad y cookies</h1>
        <p className="mt-3 text-sm text-periwinkle">Ultima actualizacion: octubre de 2026.</p>

        <div className="prose-ta mt-8 space-y-8 text-sm leading-relaxed text-navy sm:text-base">
          <div>
            <h2 className="text-lg font-bold text-navy">1. Responsable</h2>
            <p className="mt-2 text-periwinkle">
              <strong className="text-navy">{site.owner}</strong>, operando bajo el nombre comercial{" "}
              <strong className="text-navy">{site.name}</strong>, con domicilio en {site.city}, es
              responsable del tratamiento de tus datos personales conforme a la Ley Federal de
              Proteccion de Datos Personales en Posesion de los Particulares (LFPDPPP).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">2. Datos que recabamos</h2>
            <p className="mt-2 text-periwinkle">
              Solo recabamos los datos que tu nos proporcionas directamente al contactarnos, por
              ejemplo a traves de WhatsApp o del formulario de cotizacion: nombre, numero de
              telefono, correo electronico (si lo compartes), empresa y los productos o numeros de
              parte que nos pides cotizar. No recabamos datos sensibles ni financieros a traves del
              sitio.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">3. Para que usamos tus datos</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-periwinkle">
              <li>Responder tus solicitudes de cotizacion e informacion.</li>
              <li>Dar seguimiento a pedidos y coordinar entregas.</li>
              <li>Facturacion y cumplimiento de obligaciones fiscales.</li>
              <li>Mejorar el catalogo y la atencion que ofrecemos.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">4. Cookies y almacenamiento local</h2>
            <p className="mt-2 text-periwinkle">
              Este sitio usa el almacenamiento local de tu navegador (localStorage) para recordar
              una sola cosa: si aceptaste o declinaste el aviso de cookies, bajo la llave{" "}
              <code className="rounded bg-base-gray px-1.5 py-0.5 text-xs">ta-cookie-consent</code>.
              Ese dato vive unicamente en tu dispositivo, no se envia a ningun servidor, y puedes
              borrarlo en cualquier momento desde la configuracion de tu navegador.
            </p>
            <p className="mt-2 text-periwinkle">
              Si en el futuro incorporamos cookies de analitica o publicidad de terceros,
              actualizaremos este aviso y el banner de cookies antes de activarlas, para que puedas
              aceptarlas o declinarlas.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">5. Con quien compartimos tus datos</h2>
            <p className="mt-2 text-periwinkle">
              No vendemos ni rentamos tus datos personales. Solo los compartimos con paqueterias y
              proveedores logisticos cuando es necesario para entregar tu pedido, y con autoridades
              cuando la ley lo requiere.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">6. Derechos ARCO</h2>
            <p className="mt-2 text-periwinkle">
              Tienes derecho a Acceder, Rectificar y Cancelar tus datos personales, asi como a
              Oponerte a su tratamiento (derechos ARCO). Para ejercerlos, escribenos por{" "}
              <Link href={whatsappUrl()} className="font-semibold text-magenta hover:underline">
                WhatsApp
              </Link>{" "}
              indicando tu nombre y la solicitud especifica; te responderemos en un plazo razonable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-navy">7. Cambios a este aviso</h2>
            <p className="mt-2 text-periwinkle">
              Podemos actualizar este aviso de privacidad para reflejar cambios en el sitio o en la
              normativa aplicable. La fecha de la ultima actualizacion siempre aparece al inicio de
              esta pagina.
            </p>
          </div>
        </div>

        <Link href="/" className="btn-secondary mt-10 inline-flex">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
