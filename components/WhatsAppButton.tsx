import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
        bg-[#25D366] text-white shadow-soft-lg transition hover:scale-105 hover:brightness-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}
