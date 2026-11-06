const DEFAULT_URL = "http://localhost:3000";

/**
 * URL canónica del sitio. Orden: NEXT_PUBLIC_SITE_URL (dominio propio) →
 * dominio de producción que Vercel expone en el build → localhost.
 */
function resolveSiteUrl(): string {
  const raw = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  )?.trim();
  if (!raw) return DEFAULT_URL;
  const withProtocol = /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, resolveSiteUrl()).toString();
}

/** Solo el deploy de producción se indexa; previews y local quedan fuera. */
export function isIndexable(): boolean {
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV === "production";
  return !resolveSiteUrl().includes("localhost");
}

export const location = {
  city: "Chiclayo",
  region: "Lambayeque",
  regionCode: "PE-LAM",
  country: "PE",
  countryName: "Perú",
  // Centro de Chiclayo (referencial para SEO local; no es una dirección pública)
  geo: { latitude: -6.7714, longitude: -79.8409 },
} as const;

export const site = {
  name: "CODEXIA",
  title: "CODEXIA | Desarrollo Web y Software a Medida en Chiclayo",
  tagline: "IDEAS + CÓDIGO = SOLUCIONES",
  headline: "Convierte tus ideas en productos digitales.",
  headlineAccent: "productos digitales.",
  proposition:
    "Desarrollo web, apps, automatizaciones y asesorías tecnológicas para negocios en Chiclayo y todo el Perú.",
  heroLead:
    "Te acompaño desde la idea hasta el producto publicado: con alcance claro, cotización formal y desarrollo a medida.",
  description:
    "CODEXIA: desarrollo web, apps, automatizaciones y asesoría tecnológica en Chiclayo para negocios de todo el Perú. Cotización formal y trato directo.",
  locale: "es_PE",
  lang: "es-PE",
  url: resolveSiteUrl(),
  email: "oscarmg4501@gmail.com",
  phoneDisplay: "+51 981 474 747",
  phoneE164: "+51981474747",
  github: "https://github.com/OscarMG4",
  founder: "Oscar Muñoz",
  whatsapp: {
    number: "51981474747",
    message:
      "Hola CODEXIA 👋 Estoy interesado en desarrollar un proyecto y me gustaría recibir más información.",
  },
  keywords: [
    "CODEXIA",
    "desarrollo web Chiclayo",
    "diseño de páginas web Chiclayo",
    "desarrollo de software Chiclayo",
    "programador Chiclayo",
    "empresa de desarrollo web Chiclayo",
    "landing page Chiclayo",
    "aplicaciones web Chiclayo",
    "desarrollo web Lambayeque",
    "desarrollo web Perú",
    "software a medida Perú",
    "automatización de procesos Perú",
    "asesoría tecnológica Chiclayo",
  ],
  nav: [
    { href: "/#inicio", label: "Inicio" },
    { href: "/#servicios", label: "Servicios" },
    { href: "/#proyectos", label: "Proyectos" },
    { href: "/#portafolio", label: "Portafolio" },
    { href: "/#proceso", label: "Proceso" },
    { href: "/#contacto", label: "Contacto" },
  ],
  cta: "Ver servicios",
  heroEyebrow: "CODEXIA · Software a medida en Chiclayo, Perú",
  assurances: [
    "Cotización formal y contrato",
    "Plazos y alcance definidos",
    "Soporte después del lanzamiento",
  ],
  avatar: "/brand/oscar-avatar.jpg",
  logo: "/brand/codexia-mark.png",
  ogImage: "/opengraph-image",
} as const;

/** id del ancla de una entrada de navegación ("/#servicios" → "servicios"). */
export function navId(href: string): string {
  return href.split("#")[1] ?? "";
}

export type Faq = { question: string; answer: string };

const remoteFaq: Faq = {
  question: "¿Trabajas con negocios fuera de Chiclayo?",
  answer:
    "Sí. CODEXIA está en Chiclayo y atiende a negocios de todo el Perú: las reuniones pueden ser presenciales en Chiclayo o por videollamada, y el seguimiento del proyecto es el mismo.",
};

export const homeFaqs: Faq[] = [
  {
    question: "¿Dónde está ubicado CODEXIA?",
    answer:
      "En Chiclayo, Lambayeque. Desarrollo proyectos para negocios de Chiclayo y de todo el Perú, de forma presencial o remota.",
  },
  {
    question: "¿Qué servicios ofrece CODEXIA?",
    answer:
      "Diseño de landing pages, desarrollo de aplicaciones web y móviles a medida, automatización de procesos y asesoría tecnológica para negocios.",
  },
  {
    question: "¿Cuánto cuesta desarrollar una página web o un sistema?",
    answer:
      "Depende del alcance: funcionalidades, integraciones y contenido. Después de una primera conversación recibes una cotización formal con alcance, plazos e inversión definidos, antes de empezar.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto?",
    answer:
      "Depende del alcance. Los plazos quedan definidos en la cotización y el contrato, y durante el desarrollo ves avances concretos para validar cada etapa.",
  },
  {
    question: "¿Qué pasa después del lanzamiento?",
    answer:
      "Publicamos el producto, lo validamos con uso real y te acompaño en los primeros ajustes con soporte inicial. El mantenimiento continuo se acuerda según tus necesidades.",
  },
];

export const services = [
  {
    id: "landing-pages",
    slug: "diseno-de-landing-pages",
    seo: {
      title: "Diseño de Landing Pages en Chiclayo y Perú",
      description:
        "Landing pages a medida en Chiclayo: diseño moderno, carga rápida, SEO local y contacto por WhatsApp para captar clientes. Atención en todo el Perú.",
      h1: "Diseño de landing pages en Chiclayo que convierten visitas en clientes",
      intro:
        "Una landing page bien hecha es la forma más rápida de que tu negocio en Chiclayo aparezca en Google, explique su oferta y reciba consultas por WhatsApp. La diseño y desarrollo a medida, sin plantillas genéricas.",
      keywords: [
        "landing page Chiclayo",
        "diseño de páginas web Chiclayo",
        "página web para negocio Chiclayo",
        "diseño web Lambayeque",
        "landing page Perú",
      ],
      deliverables: [
        "Diseño a medida alineado a tu marca",
        "Desarrollo con Next.js y carga rápida",
        "Adaptada a celular, tablet y desktop",
        "SEO técnico y local para Google",
        "Botón de WhatsApp y formulario de contacto",
        "Publicación en tu dominio",
      ],
      faqs: [
        {
          question: "¿Cuánto cuesta una landing page en Chiclayo?",
          answer:
            "Depende del alcance: número de secciones, contenido e integraciones. Después de una primera conversación recibes una cotización formal con alcance, plazos e inversión definidos.",
        },
        {
          question: "¿Mi página aparecerá en Google?",
          answer:
            "Se entrega con SEO técnico: metadatos, sitemap, datos estructurados y velocidad optimizada. El posicionamiento depende también del contenido y la competencia, pero la base técnica queda lista desde el día uno.",
        },
        remoteFaq,
      ],
    },
    name: "Landing Pages",
    description: "Páginas que convierten y generan resultados.",
    detail:
      "Diseño y desarrollo de páginas de alto impacto, pensadas para comunicar tu oferta y convertir visitas en conversaciones reales.",
    includes: ["Diseño UI", "Responsive", "SEO básico", "Formulario / WhatsApp"],
    idealFor: "Lanzamientos, campañas y servicios que necesitan captar leads.",
    image: "/services/service-landing.png",
    message:
      "Hola CODEXIA 👋 Quiero una landing page para mi negocio y me gustaría recibir más información.",
  },
  {
    id: "automatizaciones",
    slug: "automatizacion-de-procesos",
    seo: {
      title: "Automatización de Procesos para Empresas en Chiclayo y Perú",
      description:
        "Automatiza tareas repetitivas de tu negocio en Chiclayo y todo el Perú: integraciones entre sistemas, flujos, notificaciones y reportes automáticos.",
      h1: "Automatización de procesos para empresas en Chiclayo y todo el Perú",
      intro:
        "Si tu equipo pierde horas copiando datos entre sistemas, enviando avisos a mano o armando reportes, hay trabajo que se puede automatizar. Analizo tu operación y conecto tus herramientas para que el negocio funcione con menos tareas manuales.",
      keywords: [
        "automatización de procesos Chiclayo",
        "automatización de empresas Perú",
        "integración de sistemas Perú",
        "automatizar procesos de negocio",
      ],
      deliverables: [
        "Diagnóstico de tareas manuales",
        "Integraciones entre tus herramientas y sistemas",
        "Flujos automáticos de aprobación y seguimiento",
        "Notificaciones por correo o mensajería",
        "Reportes automáticos",
        "Documentación y acompañamiento",
      ],
      faqs: [
        {
          question: "¿Qué procesos se pueden automatizar?",
          answer:
            "Tareas repetitivas con reglas claras: traslado de datos entre sistemas, envío de notificaciones, generación de reportes, seguimiento de pedidos o flujos de aprobación.",
        },
        {
          question: "¿Tengo que cambiar los sistemas que ya uso?",
          answer:
            "No necesariamente. Primero se evalúa qué herramientas usas y, cuando es posible, se integran entre sí en lugar de reemplazarlas.",
        },
        remoteFaq,
      ],
    },
    name: "Automatizaciones",
    description: "Optimiza procesos y ahorra tiempo.",
    detail:
      "Conectamos herramientas, flujos y operaciones para que tu negocio deje de depender de tareas repetitivas.",
    includes: ["Integraciones", "Flujos", "Notificaciones", "Reportes"],
    idealFor: "Equipos que pierden tiempo en procesos manuales repetitivos.",
    image: "/services/service-automation.png",
    message:
      "Hola CODEXIA 👋 Estoy interesado en automatizar procesos de mi negocio y me gustaría recibir más información.",
  },
  {
    id: "apps",
    slug: "desarrollo-de-aplicaciones-web-y-moviles",
    seo: {
      title: "Desarrollo de Aplicaciones Web y Móviles en Chiclayo",
      description:
        "Desarrollo de software a medida en Chiclayo: aplicaciones web, paneles administrativos, APIs y apps móviles para negocios de todo el Perú.",
      h1: "Desarrollo de aplicaciones web y móviles a medida en Chiclayo",
      intro:
        "Sistemas hechos para tu operación: aplicaciones web, paneles administrativos, APIs e integraciones. Desarrollo el producto completo, del diseño al despliegue, con tecnología que puede crecer contigo.",
      keywords: [
        "desarrollo de software Chiclayo",
        "desarrollo de aplicaciones Chiclayo",
        "sistemas web Chiclayo",
        "programador Chiclayo",
        "software a medida Perú",
        "desarrollo de apps Perú",
      ],
      deliverables: [
        "Análisis y diseño UX/UI",
        "Frontend web con React, Next.js o Angular",
        "Backend y APIs con Laravel o Spring Boot",
        "Paneles administrativos y roles de usuario",
        "Base de datos y despliegue en la nube",
        "Soporte después del lanzamiento",
      ],
      faqs: [
        {
          question: "¿Con qué tecnologías trabajas?",
          answer:
            "Next.js, React, TypeScript y Angular en el frontend; Laravel (PHP) y Spring Boot (Java) en el backend; MySQL y Redis para datos. El stack se elige según lo que necesita cada proyecto.",
        },
        {
          question: "¿Puedo ver sistemas que hayas desarrollado?",
          answer:
            "Sí. En el portafolio hay sistemas completos como Contafy (SaaS contable), un sistema veterinario y una plataforma de reservas, con enlaces a su código en GitHub cuando es público.",
        },
        remoteFaq,
      ],
    },
    name: "Apps Web y Mobile",
    description: "Tu idea, en todas las pantallas.",
    detail:
      "Productos digitales a medida para web y dispositivos móviles, con una experiencia clara, rápida y consistente.",
    includes: ["UX/UI", "Frontend", "Backend", "Despliegue"],
    idealFor: "Negocios que necesitan un producto propio para operar o vender.",
    image: "/services/service-apps.png",
    message:
      "Hola CODEXIA 👋 Quiero desarrollar una app web o mobile y me gustaría recibir más información.",
  },
  {
    id: "asesorias",
    slug: "asesoria-tecnologica",
    seo: {
      title: "Asesoría Tecnológica para Negocios en Chiclayo y Perú",
      description:
        "Asesoría tecnológica para pymes en Chiclayo y todo el Perú: diagnóstico, roadmap, elección de tecnología y prioridades antes de invertir en desarrollo.",
      h1: "Asesoría tecnológica para negocios en Chiclayo y todo el Perú",
      intro:
        "Antes de invertir en software conviene saber qué construir primero, con qué tecnología y cuánto alcance tiene cada etapa. Te ayudo a tomar esas decisiones con criterio técnico y foco en tu negocio.",
      keywords: [
        "asesoría tecnológica Chiclayo",
        "consultoría de software Perú",
        "transformación digital pymes Chiclayo",
        "consultor tecnológico Chiclayo",
      ],
      deliverables: [
        "Diagnóstico de tu situación actual",
        "Roadmap por etapas",
        "Recomendación de tecnología",
        "Priorización de funcionalidades (MVP)",
        "Estimación de alcance",
        "Revisión técnica de proyectos existentes",
      ],
      faqs: [
        {
          question: "¿Para quién es la asesoría?",
          answer:
            "Para negocios que quieren digitalizarse o construir un producto y necesitan claridad sobre qué hacer primero, con qué tecnología y qué alcance tiene cada etapa.",
        },
        {
          question: "¿Cómo es el proceso?",
          answer:
            "Empieza con una conversación para entender tu negocio y tus objetivos. Luego recibes un diagnóstico y un roadmap con prioridades claras.",
        },
        remoteFaq,
      ],
    },
    name: "Asesorías Tecnológicas",
    description: "Estrategia y tecnología para tu negocio.",
    detail:
      "Te ayudo a decidir qué construir, con qué stack y en qué orden, para invertir mejor el tiempo y el presupuesto.",
    includes: ["Diagnóstico", "Roadmap", "Stack", "Prioridades"],
    idealFor: "Quienes quieren claridad antes de invertir en desarrollo.",
    image: "/services/service-advisory.png",
    message:
      "Hola CODEXIA 👋 Necesito una asesoría tecnológica para mi negocio y me gustaría coordinar una conversación.",
  },
] as const;

export const differentiators = [
  {
    title: "Desarrollo a medida",
    description:
      "Cada producto se construye alrededor de tu operación, no a partir de una plantilla genérica.",
    detail: "Menos deuda técnica, más control sobre lo que realmente usas.",
  },
  {
    title: "Diseño moderno y responsive",
    description:
      "Interfaces claras, rápidas y consistentes en desktop, tablet y mobile.",
    detail: "La primera impresión y la usabilidad cuentan desde el día uno.",
  },
  {
    title: "Tecnología escalable",
    description:
      "Arquitectura pensada para crecer: desde un MVP hasta un producto más robusto.",
    detail: "Empiezas simple y escalas sin rehacer todo desde cero.",
  },
  {
    title: "Comunicación directa",
    description:
      "Hablas con quien diseña y desarrolla. Menos fricción, más claridad en cada etapa.",
    detail: "Decisiones rápidas, sin capas de intermediarios.",
  },
  {
    title: "Soluciones orientadas a resultados",
    description:
      "El objetivo no es solo lanzar: es que el producto ayude a vender, operar o atender mejor.",
    detail: "Cada entrega se mide por utilidad real para tu negocio.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Cuéntame tu idea",
    description:
      "Conversamos sobre el problema, el objetivo y lo que necesitas lograr.",
    outcome: "Entendemos el contexto y el resultado esperado.",
  },
  {
    number: "02",
    title: "Analizamos tu proyecto",
    description:
      "Definimos alcance, prioridades, restricciones y la mejor ruta técnica.",
    outcome: "Queda claro qué construir y qué dejar para después.",
  },
  {
    number: "03",
    title: "Diseñamos la solución",
    description:
      "Estructuramos la experiencia, la arquitectura y los flujos principales.",
    outcome: "Una propuesta visual y técnica alineada contigo.",
  },
  {
    number: "04",
    title: "Cotización y contrato",
    description:
      "Definimos alcance, inversión y firmamos para empezar con claridad.",
    outcome: "Acuerdo formal: alcance, plazos e inversión.",
  },
  {
    number: "05",
    title: "Desarrollamos",
    description:
      "Convertimos el diseño en un producto funcional, estable y listo para iterar.",
    outcome: "Avances visibles y validación continua.",
  },
  {
    number: "06",
    title: "Lanzamos tu producto",
    description:
      "Publicamos, validamos y te acompañamos en los primeros ajustes reales.",
    outcome: "Producto en producción y soporte inicial.",
  },
] as const;

export const projects = [
  {
    slug: "grupo-dlc",
    name: "Grupo DLC",
    subtitle: "Finca Algarrobo",
    description:
      "Landing page inmobiliaria para Grupo DLC: terrenos desde 500 m² para casas de campo en Capote, Chiclayo. Diseñada para comunicar el proyecto, generar confianza y captar consultas por WhatsApp.",
    result:
      "Sitio claro y orientado a conversión, con recorrido del proyecto, áreas comunes, proceso de compra y contacto directo.",
    category: "Landing Page",
    url: "https://dlcperu.com.pe/",
    urlLabel: "dlcperu.com.pe",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "blue" as const,
    image: "/projects/project-dlc.png",
  },
  {
    slug: "comercializadora-romeros",
    name: "Comercializadora Romeros",
    subtitle: "Presencia digital comercial",
    description:
      "Sitio web para Comercializadora Romeros: presencia digital clara para presentar la empresa, su oferta comercial y un canal directo de contacto con clientes.",
    result:
      "Web moderna, rápida y lista para comunicar marca y captar consultas online.",
    category: "Sitio Web",
    url: "https://comercializadora-gamma.vercel.app/",
    urlLabel: "comercializadora-gamma.vercel.app",
    technologies: ["Next.js", "React", "Vercel"],
    accent: "blue" as const,
    image: "/projects/project-romeros.png",
  },
] as const;

export type PortfolioRepo = {
  name: string;
  role: string;
  url: string;
  isPrivate: boolean;
};

const repo = (name: string, role: string, isPrivate = false): PortfolioRepo => ({
  name,
  role,
  url: `https://github.com/OscarMG4/${name}`,
  isPrivate,
});

export const portfolio = [
  {
    slug: "contafy",
    name: "Contafy",
    category: "SaaS · Contabilidad",
    description:
      "Plataforma SaaS multi-tenant para estudios contables en Perú. Centraliza la operación contable de sus empresas clientes con asientos automáticos sobre el PCGE e integración con la normativa SUNAT.",
    highlights: [
      "Arquitectura DDD multi-tenant",
      "Compras, inventario y kardex",
      "Panel de administración de estudios y planes",
    ],
    stack: ["Laravel 13", "PHP 8.3", "Redis", "Next.js 16", "React 19", "Ant Design 6"],
    repos: [
      repo("contafy-back", "API", true),
      repo("contafy-front", "App web"),
      repo("contafy-crm", "Admin"),
    ],
    featured: true,
  },
  {
    slug: "dlc-red-de-socios",
    name: "Red de Socios DLC",
    category: "Plataforma · Referidos",
    description:
      "Plataforma de socios y referidos para Grupo DLC: API y panel para gestionar la red comercial y sus referidos.",
    highlights: ["API REST", "Panel de gestión"],
    stack: ["Laravel 12", "PHP", "Next.js", "TypeScript"],
    repos: [repo("dlc-api", "API", true), repo("dlc-panel", "Panel", true)],
    featured: false,
  },
  {
    slug: "sistema-veterinario",
    name: "Sistema veterinario",
    category: "Gestión · Salud animal",
    description:
      "Sistema para clínicas veterinarias: inventario, ventas, compras y clientes, con API REST protegida por JWT.",
    highlights: ["Autenticación JWT", "Inventario, ventas y compras"],
    stack: ["Spring Boot 3", "Java 21", "MySQL", "React", "TypeScript", "Vite"],
    repos: [
      repo("veterinary-backend", "API"),
      repo("veterinary-app", "App web"),
    ],
    featured: false,
  },
  {
    slug: "space-booking",
    name: "Space Booking",
    category: "Reservas · Espacios",
    description:
      "Reserva de salas, oficinas y auditorios con perfiles de usuario y administrador. Valida choques de horario, capacidad y límite de reservas activas.",
    highlights: ["Reglas de negocio en la API", "Panel admin con tablas paginadas"],
    stack: ["Angular 21", "PrimeNG", "Laravel 12", "JWT", "MySQL"],
    repos: [
      repo("space-booking-server", "API"),
      repo("space-booking-app", "App web"),
    ],
    featured: false,
  },
  {
    slug: "helios",
    name: "Helios",
    category: "RR. HH. · Gestión interna",
    description:
      "Gestión de empleados y departamentos con estructura jerárquica, vista de árbol, búsqueda avanzada, filtros y estadísticas.",
    highlights: ["Departamentos jerárquicos", "Filtros, orden y paginación"],
    stack: ["React 19", "TypeScript", "Ant Design", "TanStack Query", "Laravel 12"],
    repos: [
      repo("employee-management-api", "API"),
      repo("employee-management-app", "App web"),
    ],
    featured: false,
  },
] as const;

// Tecnologías usadas en los proyectos publicados y del portafolio
export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "Spring Boot",
  "Java",
  "Angular",
  "MySQL",
  "Redis",
  "Ant Design",
  "PrimeNG",
  "Vercel",
] as const;
