import { absoluteUrl, site } from "@/lib/site";

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#organization"),
    name: site.name,
    alternateName: ["Codexia", "CODEXIA Perú"],
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.logo),
    areaServed: {
      "@type": "Country",
      name: "Perú",
    },
    serviceType: [
      "Landing Pages",
      "Automatizaciones",
      "Apps Web y Mobile",
      "Asesorías Tecnológicas",
    ],
    knowsAbout: [...site.keywords],
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: site.lang,
    publisher: { "@id": absoluteUrl("/#organization") },
  };
}

export function webPageSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/#webpage"),
    url: site.url,
    name: site.title,
    description: site.description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#organization") },
    inLanguage: site.lang,
    primaryImageOfPage: absoluteUrl(site.logo),
  };
}
