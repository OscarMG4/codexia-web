import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AmbientBackground } from "@/components/visual/AmbientBackground";
import { CodePanel } from "@/components/visual/CodePanel";
import { FloatingShapes } from "@/components/visual/FloatingShapes";
import { GridPattern } from "@/components/visual/GridPattern";
import { Marquee } from "@/components/visual/Marquee";
import { site } from "@/lib/site";
import Image from "next/image";

export function Hero() {
  const accent = site.headlineAccent;
  const titleStart = site.headline.replace(accent, "").trim();

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col overflow-hidden pt-24 sm:scroll-mt-24 sm:pt-28 lg:pt-28 xl:pt-32"
    >
      <AmbientBackground />
      <GridPattern />
      <div className="hidden sm:block">
        <FloatingShapes />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-[14%] top-[18%] hidden h-48 w-px bg-gradient-to-b from-transparent via-volt/45 to-transparent xl:block" />
        <div className="absolute right-[18%] top-[26%] hidden h-px w-36 bg-gradient-to-r from-transparent via-cyan/55 to-transparent xl:block" />
        <div className="absolute bottom-[30%] left-[6%] hidden h-2.5 w-2.5 rounded-full bg-orchid/70 shadow-[0_0_20px_rgba(167,139,250,0.85)] lg:block" />
        <div className="absolute right-[10%] top-[16%] hidden h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_16px_rgba(125,211,252,0.95)] xl:block" />
      </div>

      <Container className="relative z-10 grid flex-1 items-center gap-7 pb-6 sm:gap-10 sm:pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-10 lg:pb-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] xl:gap-16 xl:pb-14">
        <div className="min-w-0">
          <p
            className="animate-rise mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-volt/35 bg-volt/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan shadow-[0_0_24px_rgba(61,91,255,0.25)] backdrop-blur-sm sm:mb-4 sm:gap-3 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]"
            style={{ animationDelay: "40ms" }}
          >
            <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-cyan shadow-[0_0_8px_rgba(125,211,252,0.8)]" />
            <span className="truncate">{site.tagline}</span>
          </p>

          <h1
            className="animate-rise font-display text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem] xl:text-[4.1rem] 2xl:text-[4.75rem]"
            style={{ animationDelay: "90ms" }}
          >
            {titleStart}{" "}
            <span className="text-gradient">{accent}</span>
          </h1>

          <p
            className="animate-rise mt-3 max-w-xl text-[15px] leading-relaxed text-mist sm:mt-4 sm:text-base lg:text-[15px] xl:mt-6 xl:max-w-2xl xl:text-lg"
            style={{ animationDelay: "140ms" }}
          >
            {site.proposition}
          </p>

          <p
            className="animate-rise mt-2 hidden max-w-xl text-sm leading-relaxed text-fog lg:mt-3 xl:mt-4 xl:block xl:max-w-2xl xl:text-base"
            style={{ animationDelay: "180ms" }}
          >
            {site.heroLead}
          </p>

          <div
            className="animate-rise mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:gap-5 lg:mt-6 xl:mt-8"
            style={{ animationDelay: "220ms" }}
          >
            <Button href="#servicios" className="w-full sm:w-auto">
              {site.cta}
            </Button>
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-volt/60 shadow-[0_0_32px_rgba(61,91,255,0.6)] sm:h-11 sm:w-11">
                <Image
                  src={site.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </span>
              <p className="text-xs leading-snug text-mist sm:text-sm">
                Un solo interlocutor. Diseña, desarrolla y lanza contigo.
              </p>
            </div>
          </div>
        </div>

        <div
          className="animate-rise relative mt-1 sm:mt-0 lg:justify-self-end lg:w-full lg:max-w-[28rem] xl:max-w-none"
          style={{ animationDelay: "120ms" }}
        >
          <div className="absolute -left-5 -top-6 hidden h-20 w-20 rounded-3xl border border-volt/45 bg-volt/20 shadow-[0_0_50px_rgba(61,91,255,0.4)] lg:block xl:-left-6 xl:-top-8 xl:h-24 xl:w-24" />
          <div className="absolute -right-3 bottom-8 hidden h-14 w-14 rounded-full border border-cyan/40 bg-cyan/20 shadow-[0_0_40px_rgba(125,211,252,0.35)] lg:block xl:-right-4 xl:bottom-10 xl:h-16 xl:w-16" />
          <CodePanel />
        </div>
      </Container>

      <div className="animate-rise mt-1 sm:mt-0" style={{ animationDelay: "320ms" }}>
        <Marquee />
      </div>
    </section>
  );
}
