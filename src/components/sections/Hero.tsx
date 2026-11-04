import { IconArrow, IconCheck } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectOverview } from "@/components/visual/ProjectOverview";
import { TechMarquee } from "@/components/visual/TechMarquee";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  const accent = site.headlineAccent;
  const titleStart = site.headline.replace(accent, "").trim();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-page pt-28 text-fg sm:pt-32 lg:pt-36"
    >
      {/* Fondo: aurora animada + puntos + cuadrícula */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-1 -top-32 right-[-8%] h-[26rem] w-[26rem] sm:h-[34rem] sm:w-[34rem]" />
        <div className="aurora aurora-2 top-40 right-[22%] h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem]" />
        <div className="aurora aurora-3 -left-24 top-24 h-[16rem] w-[16rem] sm:h-[22rem] sm:w-[22rem]" />
        <div className="bg-dots mask-radial absolute inset-0 opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-page" />
      </div>

      <Container className="relative grid items-center gap-14 pb-14 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-20">
        <div className="min-w-0">
          <p
            className="animate-rise inline-flex max-w-full items-center gap-2 rounded-full border border-accent-ring bg-surface/90 px-3.5 py-1.5 text-xs font-medium text-fg-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
            style={{ animationDelay: "40ms" }}
          >
            <span className="live-dot h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
            {site.heroEyebrow}
          </p>

          <h1
            className="mt-6 font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-tight min-[400px]:text-[2.4rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4.1rem]"
          >
            {titleStart}{" "}
            <span className="text-gradient">{accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {site.proposition} {site.heroLead}
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "220ms" }}
          >
            <Button href={whatsappUrl()} size="lg">
              Agenda una consulta
              <IconArrow className="h-4 w-4" />
            </Button>
            <Button href="#portafolio" variant="secondary" size="lg">
              Ver portafolio
            </Button>
          </div>

          <ul
            className="animate-rise mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4"
            style={{ animationDelay: "280ms" }}
          >
            {site.assurances.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-fg-muted">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet text-white">
                  <IconCheck className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="animate-rise relative mx-auto w-full max-w-md lg:max-w-none"
          style={{ animationDelay: "180ms" }}
        >
          <div className="float-slow">
            <div className="glow-border rounded-2xl">
              <ProjectOverview />
            </div>
          </div>

          {/* Badges flotantes */}
          <div className="float-slower absolute -top-5 -left-3 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 text-xs font-medium shadow-[0_12px_30px_-12px_rgba(15,23,42,0.3)] sm:flex lg:-left-8">
            <span className="rounded-md bg-success-soft px-1.5 py-0.5 font-mono text-[11px] font-semibold text-success-fg">
              200
            </span>
            <span className="font-mono text-fg-muted">GET /api/v1/orders</span>
          </div>
          <div className="float-slower absolute -right-3 -bottom-5 hidden items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-2 text-xs font-medium shadow-[0_12px_30px_-12px_rgba(15,23,42,0.3)] sm:flex lg:-right-6">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-cyan text-white">
              <IconCheck className="h-3 w-3" />
            </span>
            <span className="text-fg">Deploy exitoso</span>
            <span className="text-fg-subtle">· hace 2 min</span>
          </div>
        </div>
      </Container>

      {/* Stack tecnológico */}
      <div className="relative pb-14 sm:pb-16">
        <Container>
          <p className="mb-5 text-center text-xs font-semibold tracking-[0.16em] text-fg-subtle uppercase">
            Tecnologías con las que trabajamos
          </p>
        </Container>
        <TechMarquee />
      </div>
    </section>
  );
}
