import { IconCheck } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionFlair } from "@/components/visual/SectionFlair";
import { cn } from "@/lib/cn";
import { differentiators, site } from "@/lib/site";
import Image from "next/image";

export function WhyCodexia() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-28">
      <SectionFlair variant="why" />

      <Container className="relative">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Reveal variant="left">
              <SectionHeading
                eyebrow="Por qué CODEXIA"
                title="Un partner técnico directo, no una fábrica de plantillas."
                description="Trabajo con negocios que necesitan un producto claro, bien hecho y listo para evolucionar. Sin capas innecesarias y con decisiones explicadas."
              />
            </Reveal>

            <Reveal delay={160} variant="up">
              <div className="mt-8 rounded-2xl border border-white/10 bg-panel/60 p-5 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                  Cómo trabajamos
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  Primero entendemos el problema. Luego proponemos la ruta.
                  Después construimos y lanzamos contigo, con comunicación
                  constante y entregas claras.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240} variant="left">
              <figure className="group relative mt-10 max-w-md overflow-hidden rounded-[2rem] border border-volt/35 bg-ink shadow-[0_28px_70px_rgba(61,91,255,0.32),0_0_90px_rgba(125,211,252,0.12)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(61,91,255,0.22),transparent_55%)]"
                />
                <Image
                  src={site.avatar}
                  alt="Fundador de CODEXIA desarrollando un producto digital"
                  width={800}
                  height={800}
                  className="relative h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink via-ink/90 to-transparent px-5 pb-5 pt-24">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan">
                    Comunicación directa
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-snow sm:text-base">
                    Hablas con quien diseña y desarrolla.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {differentiators.map((item, index) => {
              const number = String(index + 1).padStart(2, "0");
              const isLast = index === differentiators.length - 1;

              return (
                <Reveal key={item.title} delay={index * 110} variant="right">
                  <article
                    className={cn(
                      "group relative flex gap-4 overflow-hidden rounded-[1.5rem] border p-4 transition-all duration-500 sm:gap-5 sm:p-5",
                      "hover:-translate-y-1",
                      isLast
                        ? "border-volt/30 bg-[linear-gradient(135deg,rgba(61,91,255,0.16),rgba(11,18,36,0.94)_50%,rgba(167,139,250,0.1))] shadow-[0_20px_50px_rgba(61,91,255,0.18)]"
                        : "border-white/10 bg-panel/70 shadow-[0_14px_36px_rgba(0,0,0,0.18)] hover:border-volt/30 hover:shadow-[0_20px_50px_rgba(61,91,255,0.2)]",
                    )}
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.1),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-volt/35 bg-volt/20 text-xs font-bold tracking-wide text-cyan shadow-[0_0_20px_rgba(61,91,255,0.28)] transition-all duration-500 group-hover:border-cyan/50 group-hover:bg-cyan/20 group-hover:text-snow">
                      {number}
                    </span>

                    <div className="relative min-w-0 flex-1 pt-0.5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-base font-bold text-snow sm:text-lg">
                          {item.title}
                        </h3>
                        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-volt/20 text-cyan opacity-70 transition-all duration-500 group-hover:bg-cyan/25 group-hover:opacity-100">
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {item.description}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-fog/90">
                        {item.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
