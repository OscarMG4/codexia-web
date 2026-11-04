import {
  IconAdvisory,
  IconApps,
  IconArrow,
  IconAutomation,
  IconCheck,
  IconLanding,
} from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";

const icons = {
  "landing-pages": IconLanding,
  automatizaciones: IconAutomation,
  apps: IconApps,
  asesorias: IconAdvisory,
} as const;

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-16 overflow-hidden bg-page-alt py-20 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-still aurora-3 -top-20 right-[-6%] h-[22rem] w-[22rem]" style={{ opacity: 0.16 }} />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <SectionHeading
              eyebrow="Servicios"
              title="Soluciones digitales para hacer crecer tu negocio."
            />
            <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg lg:pb-1">
              Cuatro líneas de servicio con alcance definido. En cada una sabes
              qué incluye, para quién es y cómo empezamos.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.id];

            return (
              <Reveal key={service.id} delay={(index % 2) * 100} className="h-full">
                <article className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-accent-border">
                  <div className="relative aspect-[16/7] overflow-hidden bg-navy-900">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent-fg ring-1 ring-accent-ring">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-bold text-fg sm:text-[1.35rem]">
                        {service.name}
                      </h3>
                    </div>

                    <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
                      {service.detail}
                    </p>

                    <ul className="mt-6 grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-fg-muted">
                          <IconCheck className="h-4 w-4 shrink-0 text-accent-fg" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 rounded-lg bg-surface-muted px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                        Ideal para
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                        {service.idealFor}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
                      <Link
                        href={`/servicios/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent-fg transition-colors hover:text-fg"
                      >
                        Ver detalle del servicio
                        <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <a
                        href={whatsappUrl(service.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-fg-subtle transition-colors hover:text-fg"
                      >
                        Solicitar información
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
