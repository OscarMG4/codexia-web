import { site } from "@/lib/site";

export function whatsappUrl(message: string = site.whatsapp.message) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function whatsappWebUrl(message: string = site.whatsapp.message) {
  return `https://web.whatsapp.com/send?phone=${site.whatsapp.number}&text=${encodeURIComponent(message)}`;
}

export function whatsappApiUrl(message: string = site.whatsapp.message) {
  return `https://api.whatsapp.com/send?phone=${site.whatsapp.number}&text=${encodeURIComponent(message)}`;
}

export function isMobileUserAgent(userAgent: string) {
  return /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);
}
