export const site = {
  name: "CODEXIA",
  tagline: "IDEAS + CÓDIGO = SOLUCIONES",
  headline: "Convierte tus ideas en productos digitales.",
  headlineAccent: "productos digitales.",
  proposition:
    "Desarrollo web, apps, automatizaciones y asesorías tecnológicas para negocios.",
  heroLead:
    "Te acompaño desde la idea hasta el producto publicado: con alcance claro, cotización formal y desarrollo a medida.",
  description:
    "CODEXIA convierte ideas en productos digitales: landing pages, apps, automatizaciones y asesorías tecnológicas para negocios.",
  locale: "es_PE",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000",
  email: "oscarmg4501@gmail.com",
  phoneDisplay: "+51 981 474 747",
  whatsapp: {
    number: "51981474747",
    message:
      "Hola CODEXIA 👋 Estoy interesado en desarrollar un proyecto y me gustaría recibir más información.",
  },
  nav: [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
  ],
  cta: "Servicios",
  avatar: "/brand/oscar-avatar.jpg",
} as const;

export const services = [
  {
    id: "landing-pages",
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
    accent: "violet" as const,
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

export const marqueeItems = [
  "Landing Pages",
  "Apps Web",
  "Apps Mobile",
  "Automatizaciones",
  "Asesorías tecnológicas",
  "Diseño UI",
  "Productos a medida",
  "Integraciones",
] as const;
