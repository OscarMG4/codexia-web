import {
  absoluteUrl,
  location,
  services,
  site,
  techStack,
  type Faq,
} from "@/lib/site";

type Service = (typeof services)[number];

const organizationId = absoluteUrl("/#organization");

const brandAliases = ["Codexia", "CODEXIA Chiclayo", "CODEXIA Perú"] as const;

export function serviceUrl(service: Service): string {
  return absoluteUrl(`/servicios/${service.slug}`);
}

function areaServed() {
  return [
    { "@type": "City", name: location.city },
    { "@type": "AdministrativeArea", name: location.region },
    { "@type": "Country", name: location.countryName },
  ];
}

/** Negocio local: es lo que Google usa para búsquedas "… en Chiclayo". */
export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId,
    name: site.name,
    alternateName: [...brandAliases],
    url: site.url,
    slogan: site.tagline,
    description: site.description,
    email: site.email,
    telephone: site.phoneE164,
    logo: absoluteUrl(site.logo),
    image: [absoluteUrl(site.ogImage), absoluteUrl(site.logo)],
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.region,
      addressCountry: location.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    areaServed: areaServed(),
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: "Desarrollador de software",
      sameAs: [site.github],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phoneE164,
      email: site.email,
      areaServed: location.country,
      availableLanguage: ["Spanish"],
    },
    sameAs: [site.github],
    knowsAbout: [...techStack, ...services.map((service) => service.name)],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de desarrollo de software",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@id": `${serviceUrl(service)}#service` },
      })),
    },
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    // name + alternateName: lo que Google usa como "nombre del sitio" en resultados
    name: site.name,
    alternateName: [...brandAliases],
    url: site.url,
    description: site.description,
    inLanguage: site.lang,
    publisher: { "@id": organizationId },
  };
}

export function webPageSchema({
  path = "/",
  name = site.title,
  description = site.description,
}: { path?: string; name?: string; description?: string } = {}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": organizationId },
    inLanguage: site.lang,
    primaryImageOfPage: absoluteUrl(site.ogImage),
  };
}

export function serviceSchema(service: Service): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl(service)}#service`,
    name: service.seo.title,
    serviceType: service.name,
    description: service.seo.description,
    url: serviceUrl(service),
    image: absoluteUrl(service.image),
    provider: { "@id": organizationId },
    areaServed: areaServed(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Qué incluye: ${service.name}`,
      itemListElement: service.seo.deliverables.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };
}

export function faqSchema(faqs: readonly Faq[], path = "/"): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
