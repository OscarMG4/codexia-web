import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionFlair } from "@/components/visual/SectionFlair";
import { cn } from "@/lib/cn";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <SectionFlair variant="process" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Proceso"
            title="De la idea al lanzamiento, sin perder claridad."
            description="Seis etapas con resultado concreto. Sabes qué ocurre, qué decides y qué recibes en cada paso."
          />
        </Reveal>

        <ol className="relative mt-14 space-y-4 md:mt-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {processSteps.map((step, index) => {
              const isHighlight = step.number === "04";

              return (
                <li key={step.number} className="relative">
                  <Reveal
                    delay={index * 120}
                    variant={index % 2 === 0 ? "left" : "right"}
                    className="h-full"
                  >
                    <article
                      className={cn(
                        "group relative flex h-full gap-4 overflow-hidden rounded-[1.7rem] border p-5 transition-all duration-500 sm:gap-5 sm:p-6",
                        "hover:-translate-y-1.5",
                        isHighlight
                          ? "border-volt/35 bg-[linear-gradient(160deg,rgba(61,91,255,0.18),rgba(11,18,36,0.92)_42%,rgba(167,139,250,0.1))] shadow-[0_24px_60px_rgba(61,91,255,0.22)]"
                          : "border-white/10 bg-panel/75 shadow-[0_16px_40px_rgba(0,0,0,0.2)] hover:border-volt/30 hover:shadow-[0_24px_55px_rgba(61,91,255,0.2)]",
                      )}
                    >
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />

                      <div className="relative shrink-0">
                        <span
                          className={cn(
                            "relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border text-sm font-bold tracking-wide sm:h-12 sm:w-12 sm:text-base",
                            isHighlight
                              ? "border-cyan/50 bg-volt/30 text-snow shadow-[0_0_28px_rgba(61,91,255,0.45)]"
                              : "border-volt/30 bg-volt/15 text-cyan shadow-[0_0_20px_rgba(61,91,255,0.22)] group-hover:border-cyan/45 group-hover:text-snow",
                          )}
                        >
                          {step.number}
                        </span>
                      </div>

                      <div className="relative min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-lg font-bold leading-snug text-snow sm:text-xl">
                            {step.title}
                          </h3>
                          {isHighlight ? (
                            <span className="shrink-0 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan">
                              Acuerdo
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-mist sm:text-[15px]">
                          {step.description}
                        </p>
                        <p className="mt-3 border-t border-white/8 pt-3 text-sm leading-relaxed text-fog">
                          <span className="font-semibold text-cyan">Resultado: </span>
                          {step.outcome}
                        </p>

                        <div className="mt-5 flex items-center gap-1.5">
                          {processSteps.map((_, i) => (
                            <span
                              key={i}
                              aria-hidden="true"
                              className={cn(
                                "h-1 flex-1 rounded-full transition-colors duration-500",
                                i <= index
                                  ? isHighlight
                                    ? "bg-gradient-to-r from-volt to-cyan"
                                    : "bg-volt/55 group-hover:bg-cyan/70"
                                  : "bg-white/8",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </div>
        </ol>

        <Reveal delay={420} variant="fade">
          <p className="mt-8 text-center text-sm text-mist/90 sm:mt-10">
            Cada etapa termina con una decisión clara antes de pasar a la siguiente.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
