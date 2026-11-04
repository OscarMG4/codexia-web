import {
  IconChat,
  IconDevices,
  IconLayers,
  IconTarget,
  IconTrend,
} from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { differentiators, site } from "@/lib/site";
import Image from "next/image";

// Mismo orden que `differentiators`
const icons = [IconLayers, IconDevices, IconTrend, IconChat, IconTarget];

export function WhyCodexia() {
  return (
    <section className="relative overflow-hidden bg-page py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-light mask-fade-b absolute inset-x-0 top-0 h-80" />
        <div className="aurora aurora-2 top-1/3 -left-40 h-[24rem] w-[24rem]" style={{ opacity: 0.14 }} />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Por qué CODEXIA"
                title="Un partner técnico directo, no una fábrica de plantillas."
                description="Trabajo con negocios que necesitan un producto claro, bien hecho y listo para evolucionar. Sin capas innecesarias y con decisiones explicadas."
              />
            </Reveal>

            <Reveal delay={120}>
              <figure className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] lg:max-w-md">
                <div className="relative aspect-[4/3] bg-navy-900">
                  <Image
                    src={site.avatar}
                    alt="Fundador de CODEXIA desarrollando un producto digital"
                    fill
                    sizes="(max-width: 1024px) 100vw, 28rem"
                    className="object-cover object-[50%_20%]"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                  <div>
                    <p className="font-display text-base font-bold text-fg">
                      Comunicación directa
                    </p>
                    <p className="mt-0.5 text-sm text-fg-muted">
                      Hablas con quien diseña y desarrolla.
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success-fg ring-1 ring-success-ring">
                    <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Disponible
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]">
            <ul className="divide-y divide-line">
              {differentiators.map((item, index) => {
                const Icon = icons[index] ?? IconTarget;
                return (
                  <li key={item.title}>
                    <Reveal delay={index * 70} variant="fade">
                      <article className="spotlight flex gap-5 p-6 sm:p-7">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-fg ring-1 ring-accent-ring">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-lg font-bold text-fg">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[15px] leading-relaxed text-fg-muted">
                            {item.description}
                          </p>
                          <p className="mt-2 text-sm font-medium text-fg-subtle">
                            {item.detail}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
