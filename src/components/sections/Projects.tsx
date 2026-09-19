import { IconArrow } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionFlair } from "@/components/visual/SectionFlair";
import { cn } from "@/lib/cn";
import { projects } from "@/lib/site";
import Image from "next/image";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <SectionFlair variant="projects" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Proyectos"
            title="Trabajo real, con resultado visible."
            description="Casos publicados. Más proyectos se irán sumando a medida que avance CODEXIA."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 140}
              variant={index % 2 === 0 ? "left" : "right"}
              className="h-full"
            >
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden rounded-[1.8rem] border transition-all duration-500",
                  "hover:-translate-y-1.5",
                  index === 0
                    ? "border-volt/30 bg-[linear-gradient(180deg,rgba(22,30,54,0.95),rgba(11,18,36,0.98))] shadow-[0_24px_60px_rgba(61,91,255,0.22)]"
                    : "border-white/10 bg-panel/80 shadow-[0_16px_40px_rgba(0,0,0,0.22)] hover:border-volt/30 hover:shadow-[0_28px_60px_rgba(61,91,255,0.22)]",
                )}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Proyecto ${project.name} — ${project.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224] via-[#0b1224]/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-snow backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan">
                    Caso publicado
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-snow">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-orchid">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {project.description}
                  </p>

                  <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] px-3.5 py-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan">
                      Resultado
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-fog">
                      {project.result}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-volt/20 bg-volt/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-fog"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors group-hover:text-snow"
                    >
                      Ver sitio en vivo
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 transition-all duration-500 group-hover:translate-x-1">
                        <IconArrow className="h-3.5 w-3.5" />
                      </span>
                    </a>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-xs text-mist transition-colors hover:text-cyan"
                    >
                      {project.urlLabel}
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
