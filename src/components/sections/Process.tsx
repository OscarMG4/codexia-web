import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-16 overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      {/* Banda oscura: rompe el fondo claro y da el toque tecnológico */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid-dark mask-radial absolute inset-0" />
        <div className="aurora aurora-1 -top-40 left-[10%] h-[24rem] w-[24rem]" style={{ opacity: 0.3 }} />
        <div className="aurora aurora-2 right-[5%] bottom-[-10rem] h-[26rem] w-[26rem]" style={{ opacity: 0.25 }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent" />
      </div>

      <Container className="relative">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <SectionHeading
              tone="dark"
              eyebrow="Proceso"
              title="De la idea al lanzamiento, sin perder claridad."
            />
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:pb-1">
              Seis etapas con un entregable concreto. Sabes qué ocurre, qué
              decides y qué recibes en cada paso.
            </p>
          </div>
        </Reveal>

        {/* Línea con haz de luz que conecta las etapas */}
        <div aria-hidden="true" className="beam mt-12 h-px bg-white/10 sm:mt-16" />

        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {processSteps.map((step, index) => {
            const isHighlight = step.number === "04";

            return (
              <li key={step.number}>
                <Reveal delay={(index % 3) * 90} className="h-full">
                  <article
                    className={cn(
                      "spotlight spotlight-dark flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 sm:p-8",
                      isHighlight
                        ? "border-brand-400/40 bg-brand-500/10"
                        : "border-white/10 bg-white/[0.03]",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="bg-gradient-to-br from-brand-300 via-azure to-cyan bg-clip-text font-display text-4xl font-extrabold text-transparent">
                        {step.number}
                      </span>
                      {isHighlight ? (
                        <span className="rounded-full bg-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-200 ring-1 ring-brand-400/30">
                          Acuerdo formal
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-slate-300">
                      {step.description}
                    </p>

                    <div className="mt-auto pt-6">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">
                          Entregable
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          {step.outcome}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
