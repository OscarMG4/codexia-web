import {
  absoluteUrl,
  homeFaqs,
  location,
  portfolio,
  services,
  site,
  techStack,
} from "@/lib/site";

export const dynamic = "force-static";

/** Resumen en texto plano para buscadores con IA (llmstxt.org). */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Ubicación: ${location.city}, ${location.region}, ${location.countryName}. Atiende a negocios de todo el Perú.`,
    `Contacto: ${site.email} · WhatsApp ${site.phoneDisplay}`,
    `Redes: ${site.social.map((profile) => `${profile.label} ${profile.url}`).join(" · ")}`,
    "",
    "## Servicios",
    ...services.map(
      (service) => `- [${service.seo.title}](${absoluteUrl(`/servicios/${service.slug}`)}): ${service.seo.description}`,
    ),
    "",
    "## Portafolio",
    ...portfolio.map((item) => `- ${item.name} (${item.category}): ${item.description}`),
    "",
    "## Tecnologías",
    techStack.join(", "),
    "",
    "## Preguntas frecuentes",
    ...homeFaqs.flatMap((faq) => [`### ${faq.question}`, faq.answer, ""]),
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
