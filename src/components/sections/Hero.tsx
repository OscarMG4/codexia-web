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
      <FloatingShapes />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute left-[10%] top-[20%] h-28 w-px bg-gradient-to-b from-transparent via-volt/40 to-transparent sm:left-[14%] sm:top-[18%] sm:h-48 xl:via-volt/45" />
        <div className="absolute right-[12%] top-[22%] h-px w-20 bg-gradient-to-r from-transparent via-cyan/50 to-transparent sm:right-[18%] sm:top-[26%] sm:w-36 xl:via-cyan/55" />
        <div className="absolute bottom-[28%] left-[8%] h-2 w-2 rounded-full bg-orchid/70 shadow-[0_0_16px_rgba(167,139,250,0.85)] sm:bottom-[30%] sm:left-[6%] sm:h-2.5 sm:w-2.5" />
        <div className="absolute right-[8%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_14px_rgba(125,211,252,0.95)] sm:right-[10%] sm:top-[16%]" />
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
          <div className="absolute -left-3 -top-3 h-12 w-12 rounded-2xl border border-volt/40 bg-volt/15 shadow-[0_0_36px_rgba(61,91,255,0.35)] sm:-left-4 sm:-top-4 sm:h-16 sm:w-16 sm:rounded-3xl lg:-left-5 lg:-top-6 lg:h-20 lg:w-20 lg:border-volt/45 lg:bg-volt/20 lg:shadow-[0_0_50px_rgba(61,91,255,0.4)] xl:-left-6 xl:-top-8 xl:h-24 xl:w-24" />
          <div className="absolute -right-2 bottom-6 h-10 w-10 rounded-full border border-cyan/35 bg-cyan/15 shadow-[0_0_28px_rgba(125,211,252,0.3)] sm:-right-2.5 sm:bottom-7 sm:h-12 sm:w-12 lg:-right-3 lg:bottom-8 lg:h-14 lg:w-14 lg:border-cyan/40 lg:bg-cyan/20 lg:shadow-[0_0_40px_rgba(125,211,252,0.35)] xl:-right-4 xl:bottom-10 xl:h-16 xl:w-16" />
          <CodePanel />
        </div>
      </Container>

      <div className="animate-rise mt-1 sm:mt-0" style={{ animationDelay: "320ms" }}>
        <Marquee />
      </div>
    </section>
  );
}
