import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrow, IconCheck } from "@/components/icons/Icons";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Process } from "@/components/sections/Process";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightEffects } from "@/components/visual/SpotlightEffects";
import { ContactFormProvider } from "@/components/widgets/ContactDock";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";
import { absoluteUrl, location, services, site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

// Solo existen las páginas de los servicios definidos en site.ts
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return {};

  const path = `/servicios/${service.slug}`;
  const image = { url: absoluteUrl(site.ogImage), width: 1200, height: 630, alt: service.seo.title };

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: [...service.seo.keywords, ...site.keywords.slice(0, 4)],
    alternates: { canonical: path, languages: { "es-PE": path } },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      url: absoluteUrl(path),
      title: `${service.seo.title} | ${site.name}`,
      description: service.seo.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.seo.title} | ${site.name}`,
      description: service.seo.description,
      images: [image.url],
    },
  };
}

export default async function ServicePage({
  params,
}: PageProps<"/servicios/[slug]">) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const path = `/servicios/${service.slug}`;
  const otherServices = services.filter((item) => item.id !== service.id);

  return (
    <ContactFormProvider>
      <JsonLd
        schema={[
          webPageSchema({ path, name: service.seo.title, description: service.seo.description }),
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/#servicios" },
            { name: service.name, path },
          ]),
          faqSchema(service.seo.faqs, path),
        ]}
      />
      <SpotlightEffects />
      <Navbar />

      <main id="contenido">
        {/* Hero del servicio */}
        <section className="relative overflow-hidden bg-page pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="aurora aurora-1 -top-32 right-[-8%] h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem]" />
            <div className="aurora aurora-3 top-24 -left-24 h-[16rem] w-[16rem]" />
            <div className="bg-dots mask-radial absolute inset-0 opacity-50" />
          </div>

          <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="min-w-0">
              <nav aria-label="Ruta de navegación" className="animate-rise text-sm">
                <ol className="flex flex-wrap items-center gap-1.5 text-fg-subtle">
                  <li>
                    <Link href="/" className="transition-colors hover:text-fg">
                      Inicio
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/#servicios" className="transition-colors hover:text-fg">
                      Servicios
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="font-medium text-fg">
                    {service.name}
                  </li>
                </ol>
              </nav>

              <h1
                className="animate-rise mt-6 font-display text-[2rem] leading-[1.1] font-extrabold tracking-tight min-[400px]:text-[2.25rem] sm:text-5xl lg:text-[3.25rem]"
                style={{ animationDelay: "80ms" }}
              >
                {service.seo.h1}
              </h1>

              <p
                className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-fg-muted"
                style={{ animationDelay: "140ms" }}
              >
                {service.seo.intro}
              </p>

              <div
                className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: "200ms" }}
              >
                <Button href={whatsappUrl(service.message)} size="lg">
                  Cotizar por WhatsApp
                  <IconArrow className="h-4 w-4" />
                </Button>
                <Button href="/#portafolio" variant="secondary" size="lg">
                  Ver portafolio
                </Button>
              </div>

              <p
                className="animate-rise mt-8 text-sm text-fg-subtle"
                style={{ animationDelay: "260ms" }}
              >
                Desde {location.city}, {location.region}, para negocios de todo el {location.countryName}.
              </p>
            </div>

            <div className="animate-rise mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "160ms" }}>
              <div className="glow-border rounded-2xl">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-line/70 bg-navy-900">
                  <Image
                    src={service.image}
                    alt={`${service.name} en ${location.city}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Qué incluye */}
        <section className="relative overflow-hidden bg-page-alt py-20 sm:py-28">
          <Container>
            <Reveal>
              <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
                <SectionHeading eyebrow="Qué incluye" title={`${service.name}: lo que recibes`} />
                <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg lg:pb-1">
                  {service.detail}
                </p>
              </div>
            </Reveal>

            <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {service.seo.deliverables.map((item, index) => (
                <li key={item}>
                  <Reveal delay={(index % 3) * 80} className="h-full">
                    <div className="spotlight flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet text-white">
                        <IconCheck className="h-4 w-4" />
                      </span>
                      <p className="pt-1.5 font-medium text-fg">{item}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={120}>
              <div className="mt-8 rounded-2xl border border-accent-ring bg-accent-soft px-6 py-5">
                <p className="text-xs font-semibold tracking-[0.12em] text-accent-fg uppercase">
                  Ideal para
                </p>
                <p className="mt-1.5 text-[15px] text-fg">{service.idealFor}</p>
              </div>
            </Reveal>
          </Container>
        </section>

        <Process />

        <Faq
          faqs={service.seo.faqs}
          title={`Preguntas sobre ${service.name.toLowerCase()}`}
          className="bg-page-alt"
        />

        {/* Enlazado interno hacia los demás servicios */}
        <section className="bg-page pt-20 sm:pt-28">
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Otros servicios" title="También te puede interesar" />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {otherServices.map((item, index) => (
                <Reveal key={item.id} delay={index * 80} className="h-full">
                  <Link
                    href={`/servicios/${item.slug}`}
                    className="spotlight group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors hover:border-accent-border"
                  >
                    <p className="font-display text-lg font-bold text-fg">{item.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-accent-fg">
                      Ver servicio
                      <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <Contact />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
