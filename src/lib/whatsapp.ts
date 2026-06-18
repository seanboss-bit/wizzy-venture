export const WHATSAPP_NUMBER = "14372277180";
export const WHATSAPP_DISPLAY = "+1 43 7227 7180";
export const whatsappLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
