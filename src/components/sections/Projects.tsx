import { IconArrow, IconExternal } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/site";
import Image from "next/image";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-16 bg-page-alt py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <SectionHeading
              eyebrow="Proyectos para clientes"
              title="Trabajo real, con resultado visible."
            />
            <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg lg:pb-1">
              Casos publicados y en producción. Más proyectos se irán sumando a
              medida que avance CODEXIA.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100} className="h-full">
              <article className="spotlight group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-accent-border">
                {/* Captura dentro de un marco de navegador */}
                <div className="border-b border-line bg-surface-muted p-4 sm:p-6">
                  <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
                    <div className="flex items-center gap-2 border-b border-line px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-line-strong" />
                      <span className="h-2 w-2 rounded-full bg-line-strong" />
                      <span className="h-2 w-2 rounded-full bg-line-strong" />
                      <span className="ml-2 truncate rounded bg-surface-muted px-2 py-0.5 text-[11px] text-fg-subtle">
                        {project.urlLabel}
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`Proyecto ${project.name} — ${project.subtitle}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-accent-fg ring-1 ring-accent-ring">
                      {project.category}
                    </span>
                    <span className="text-fg-subtle">{project.subtitle}</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-fg">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 border-l-2 border-brand-500 pl-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                      {project.result}
                    </p>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-line px-2 py-0.5 text-xs font-medium text-fg-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-fg transition-colors hover:text-fg"
                    >
                      Ver sitio en vivo
                      <IconExternal className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 flex justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-sm font-semibold text-fg-muted transition-colors hover:text-accent-fg"
            >
              ¿Quieres que tu proyecto sea el siguiente?
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
