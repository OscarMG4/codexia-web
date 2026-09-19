import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AmbientBackground } from "@/components/visual/AmbientBackground";
import { CodePanel } from "@/components/visual/CodePanel";
import { FloatingShapes } from "@/components/visual/FloatingShapes";
import { GridPattern } from "@/components/visual/GridPattern";
import { Marquee } from "@/components/visual/Marquee";
import { site } from "@/lib/site";
import Image from "next/image";

const heroFacts = [
  {
    label: "Inicio",
    value: "Conversación clara",
    detail: "Entendemos el problema antes de proponer tecnología.",
  },
  {
    label: "Acuerdo",
    value: "Cotización y contrato",
    detail: "Alcance, plazos e inversión definidos antes de construir.",
  },
  {
    label: "Entrega",
    value: "Producto publicado",
    detail: "Lanzamiento acompañado y listo para iterar.",
  },
] as const;

export function Hero() {
  const accent = site.headlineAccent;
  const titleStart = site.headline.replace(accent, "").trim();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] scroll-mt-20 flex-col overflow-hidden pt-[4.5rem] sm:scroll-mt-24 sm:pt-24"
    >
      <AmbientBackground />
      <GridPattern />
      <div className="hidden sm:block">
        <FloatingShapes />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-[14%] top-[18%] hidden h-48 w-px bg-gradient-to-b from-transparent via-volt/45 to-transparent lg:block" />
        <div className="absolute right-[18%] top-[26%] hidden h-px w-36 bg-gradient-to-r from-transparent via-cyan/55 to-transparent xl:block" />
        <div className="absolute bottom-[30%] left-[6%] hidden h-2.5 w-2.5 rounded-full bg-orchid/70 shadow-[0_0_20px_rgba(167,139,250,0.85)] lg:block" />
        <div className="absolute right-[10%] top-[16%] hidden h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(125,211,252,0.95)] xl:block" />
      </div>

      <Container className="relative z-10 grid flex-1 items-center gap-8 pb-8 sm:gap-12 sm:pb-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 lg:pb-14 xl:gap-20 xl:pb-16">
        <div className="min-w-0">
          <p
            className="animate-rise mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-volt/35 bg-volt/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan shadow-[0_0_24px_rgba(61,91,255,0.25)] backdrop-blur-sm sm:mb-5 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]"
            style={{ animationDelay: "80ms" }}
          >
            <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_rgba(125,211,252,0.8)]" />
            <span className="truncate">{site.tagline}</span>
          </p>

          <h1
            className="animate-rise font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[4.1rem] xl:text-[4.75rem] 2xl:text-[5.15rem]"
            style={{ animationDelay: "200ms" }}
          >
            {titleStart}{" "}
            <span className="text-gradient">{accent}</span>
          </h1>

          <p
            className="animate-rise mt-4 max-w-xl text-[15px] leading-relaxed text-mist sm:mt-6 sm:text-lg xl:max-w-2xl xl:text-xl"
            style={{ animationDelay: "320ms" }}
          >
            {site.proposition}
          </p>

          <p
            className="animate-rise mt-3 hidden max-w-xl text-sm leading-relaxed text-fog sm:mt-4 sm:block sm:text-base xl:max-w-2xl"
            style={{ animationDelay: "400ms" }}
          >
            {site.heroLead}
          </p>

          <div
            className="animate-rise mt-6 sm:mt-8"
            style={{ animationDelay: "520ms" }}
          >
            <Button href="#servicios" className="w-full sm:w-auto">
              {site.cta}
            </Button>
          </div>

          {/* Facts */}
          <div
            className="animate-rise mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3"
            style={{ animationDelay: "620ms" }}
          >
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-panel/70 px-3.5 py-3 backdrop-blur-sm shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:bg-panel/55 sm:py-3.5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-snow">
                  {fact.value}
                </p>
                <p className="mt-1 hidden text-xs leading-relaxed text-mist sm:block">
                  {fact.detail}
                </p>
              </div>
            ))}
          </div>

          <div
            className="animate-rise mt-6 flex items-center gap-3 sm:mt-7"
            style={{ animationDelay: "740ms" }}
          >
            <span className="relative inline-flex h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-volt/60 shadow-[0_0_32px_rgba(61,91,255,0.6)] sm:h-12 sm:w-12">
              <Image
                src={site.avatar}
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover object-[50%_18%]"
              />
            </span>
            <p className="text-sm leading-snug text-mist">
              Un solo interlocutor. Diseña, desarrolla y lanza contigo.
            </p>
          </div>
        </div>

        <div
          className="animate-rise relative mt-2 sm:mt-0"
          style={{ animationDelay: "300ms" }}
        >
          <div className="absolute -left-6 -top-8 hidden h-24 w-24 rounded-3xl border border-volt/45 bg-volt/20 shadow-[0_0_50px_rgba(61,91,255,0.4)] lg:block" />
          <div className="absolute -right-4 bottom-10 hidden h-16 w-16 rounded-full border border-cyan/40 bg-cyan/20 shadow-[0_0_40px_rgba(125,211,252,0.35)] lg:block" />
          <CodePanel />
        </div>
      </Container>

      <div className="animate-rise mt-2 sm:mt-0" style={{ animationDelay: "960ms" }}>
        <Marquee />
      </div>
    </section>
  );
}
