import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow, IconCheck } from "@/components/icons/Icons";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageEffects } from "@/components/visual/PageEffects";
import { ContactFormProvider } from "@/components/widgets/ContactDock";
import {
  breadcrumbSchema,
  chiclayoServiceSchema,
  faqSchema,
  webPageSchema,
} from "@/lib/schema";
import { absoluteUrl, chiclayoLanding, location, services, site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const page = chiclayoLanding;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [...page.keywords],
  alternates: { canonical: page.path, languages: { "es-PE": page.path } },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    url: absoluteUrl(page.path),
    title: `${page.title} | ${site.name}`,
    description: page.description,
    images: [{ url: absoluteUrl(site.ogImage), width: 1200, height: 630, alt: page.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${page.title} | ${site.name}`,
    description: page.description,
    images: [absoluteUrl(site.ogImage)],
  },
};

function serviceSlug(id: string) {
  return services.find((service) => service.id === id)?.slug;
}

export default function ChiclayoSoftwarePage() {
  return (
    <ContactFormProvider>
      <JsonLd
        schema={[
          webPageSchema({ path: page.path, name: page.title, description: page.description }),
          chiclayoServiceSchema(),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Desarrollo de software en Chiclayo", path: page.path },
          ]),
          faqSchema(page.faqs, page.path),
        ]}
      />
      <PageEffects />
      <Navbar />

      <main id="contenido">
        {/* Hero local */}
        <section className="hero-blue on-blue relative overflow-hidden bg-page pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 laptop:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="aurora aurora-1 -top-32 right-[-8%] h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem]" />
            <div className="aurora aurora-3 top-24 -left-24 h-[16rem] w-[16rem]" />
            <div className="bg-grid-dark mask-radial absolute inset-0" />
          </div>

          <Container className="relative max-w-4xl text-center">
            <nav aria-label="Ruta de navegación" className="animate-rise text-sm">
              <ol className="flex flex-wrap items-center justify-center gap-1.5 text-fg-subtle">
                <li>
                  <Link href="/" className="transition-colors hover:text-fg">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-fg">
                  Software en {location.city}
                </li>
              </ol>
            </nav>

            <h1 className="mt-6 font-display text-[2rem] leading-[1.1] font-extrabold tracking-tight min-[400px]:text-[2.25rem] sm:text-5xl lg:text-[3.4rem]">
              {page.h1}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted">
              {page.intro}
            </p>

            <div
              className="animate-rise mt-9 flex flex-col justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "200ms" }}
            >
              <Button href={whatsappUrl(page.message)} size="lg">
                Cotizar mi sistema
                <IconArrow className="h-4 w-4" />
              </Button>
              <Button href="#portafolio" variant="secondary" size="lg">
                Ver sistemas desarrollados
              </Button>
            </div>

            <ul
              className="animate-rise mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3 sm:gap-4"
              style={{ animationDelay: "260ms" }}
            >
              {page.localPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-fg-muted">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-fg ring-1 ring-accent-ring">
                    <IconCheck className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Tipos de sistema */}
        <section className="bg-page-alt py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
                <SectionHeading
                  eyebrow="Sistemas a medida"
                  title={`Qué sistemas desarrollo para negocios de ${location.city}`}
                />
                <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg lg:pb-1">
                  Cada sistema se diseña alrededor de cómo trabaja tu negocio. Estos son
                  los tipos que ya he construido en proyectos reales.
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {page.systems.map((system, index) => {
                const slug = serviceSlug(system.serviceId);
                return (
                  <li key={system.title}>
                    <Reveal delay={(index % 3) * 80} className="h-full">
                      <article className="spotlight flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-azure text-white">
                          <IconCheck className="h-5 w-5" />
                        </span>
                        <h3 className="mt-4 font-display text-lg font-bold text-fg">{system.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                          {system.description}
                        </p>
                        {slug ? (
                          <Link
                            href={`/servicios/${slug}`}
                            className="group mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent-fg"
                          >
                            Ver el servicio
                            <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        ) : null}
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>

        <Portfolio />
        <Process />

        <Faq
          faqs={page.faqs}
          title={`Desarrollo de software en ${location.city}: preguntas frecuentes`}
          className="bg-page-alt"
        />

        <Contact />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
