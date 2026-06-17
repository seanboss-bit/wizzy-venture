import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink("Hi Wizzy Venture, I'd like to chat about a shipment.")}
      target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-glow animate-pulse-ring transition hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
