import { IconCheck, IconGithub, IconLock } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { portfolio, site, type PortfolioRepo } from "@/lib/site";

function RepoLink({ repo }: { repo: PortfolioRepo }) {
  const content = (
    <>
      {repo.isPrivate ? (
        <IconLock className="h-3.5 w-3.5 shrink-0 text-fg-subtle" />
      ) : (
        <IconGithub className="h-3.5 w-3.5 shrink-0 text-fg-muted" />
      )}
      <span className="truncate font-mono text-[12px]">{repo.name}</span>
      <span className="ml-auto shrink-0 text-[11px] text-fg-subtle">
        {repo.isPrivate ? "Privado" : repo.role}
      </span>
    </>
  );

  const base =
    "flex min-w-0 items-center gap-2 rounded-md border border-line bg-surface-muted px-2.5 py-2";

  // Los repos privados no se enlazan: darían 404 a los visitantes
  if (repo.isPrivate) {
    return (
      <span className={cn(base, "text-fg-subtle")} title={`${repo.role} · repositorio privado`}>
        {content}
      </span>
    );
  }

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, "text-fg transition-colors hover:border-accent-border hover:text-fg")}
    >
      {content}
    </a>
  );
}

export function Portfolio() {
  return (
    <section
      id="portafolio"
      className="relative scroll-mt-16 overflow-hidden bg-page py-20 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots mask-radial absolute inset-0 opacity-40" />
        <div className="aurora aurora-still aurora-1 top-1/4 -left-32 h-[24rem] w-[24rem]" style={{ opacity: 0.16 }} />
      </div>
      <Container className="relative">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <SectionHeading
              eyebrow="Portafolio"
              title="Productos propios, de punta a punta."
            />
            <div className="lg:pb-1">
              <p className="max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                Sistemas completos que diseño y desarrollo: API, aplicación web
                y panel de administración, con reglas de negocio reales.
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-line bg-surface-muted px-4 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-line-strong hover:bg-surface-muted"
              >
                <IconGithub className="h-4 w-4" />
                Ver perfil en GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 md:grid-cols-2 lg:gap-6">
          {portfolio.map((item, index) => (
            <Reveal
              key={item.slug}
              delay={(index % 2) * 90}
              className={cn("h-full", item.featured && "md:col-span-2")}
            >
              <article
                className={cn(
                  "spotlight flex h-full flex-col rounded-2xl border bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] p-6 transition-colors duration-300 sm:p-8",
                  item.featured
                    ? "border-accent-ring hover:border-accent-border"
                    : "border-line hover:border-line-strong",
                )}
              >
                <div
                  className={cn(
                    "flex flex-1 flex-col gap-8",
                    item.featured && "lg:flex-row lg:gap-12",
                  )}
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent-fg ring-1 ring-accent-ring">
                        {item.category}
                      </span>
                      {item.featured ? (
                        <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-fg-muted ring-1 ring-line">
                          En desarrollo activo
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold text-fg sm:text-[1.65rem]">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                      {item.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-sm text-fg-muted">
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-fg" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-surface-muted px-2 py-1 text-xs font-medium text-fg-muted ring-1 ring-line"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={cn(
                      "mt-auto",
                      item.featured && "lg:mt-0 lg:w-80 lg:shrink-0 lg:self-end",
                    )}
                  >
                    <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                      Repositorios
                    </p>
                    <div className="grid gap-2">
                      {item.repos.map((repo) => (
                        <RepoLink key={repo.name} repo={repo} />
                      ))}
                    </div>
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
