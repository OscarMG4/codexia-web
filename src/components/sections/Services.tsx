import { IconArrow } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionFlair } from "@/components/visual/SectionFlair";
import { cn } from "@/lib/cn";
import { services } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";
import Image from "next/image";

const accents = [
  "from-volt/25 via-transparent to-cyan/10",
  "from-cyan/20 via-transparent to-orchid/10",
  "from-orchid/20 via-transparent to-volt/10",
  "from-volt/20 via-transparent to-orchid/15",
] as const;

export function Services() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 overflow-hidden py-24 sm:py-28"
    >
      <SectionFlair variant="services" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Servicios"
            title="Soluciones digitales para hacer crecer tu negocio."
            description="Cuatro caminos claros. En cada uno ves qué incluye, para quién es y cómo empezamos."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 md:gap-5">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");
            const featured = index === 0 || index === 3;

            return (
              <Reveal
                key={service.id}
                delay={index * 120}
                variant={index % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <a
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[1.8rem] border transition-all duration-500",
                    "hover:-translate-y-1.5",
                    featured
                      ? "border-volt/30 bg-[linear-gradient(165deg,rgba(61,91,255,0.16),rgba(11,18,36,0.94)_48%,rgba(167,139,250,0.08))] shadow-[0_24px_60px_rgba(61,91,255,0.2)] hover:shadow-[0_32px_70px_rgba(61,91,255,0.3)]"
                      : "border-white/10 bg-panel/75 shadow-[0_16px_40px_rgba(0,0,0,0.2)] hover:border-volt/30 hover:shadow-[0_28px_60px_rgba(61,91,255,0.22)]",
                  )}
                >
                  <div
                    aria-hidden="true"
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60",
                      accents[index],
                    )}
                  />

                  <div className="relative overflow-hidden">
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={service.image}
                        alt={`Ilustración de ${service.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224] via-[#0b1224]/35 to-transparent" />
                      <span className="absolute right-4 top-4 font-display text-3xl font-bold text-white/20 sm:right-5 sm:top-5 sm:text-4xl">
                        {number}
                      </span>
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan">
                      Servicio {number}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-snow sm:text-[1.7rem]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-base font-medium text-orchid">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-mist">
                      {service.detail}
                    </p>

                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-fog">
                      Ideal para
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-mist">
                      {service.idealFor}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-fog"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors group-hover:text-snow">
                      Quiero este servicio
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan/25 bg-cyan/10 transition-all duration-500 group-hover:translate-x-1 group-hover:border-snow/30 group-hover:bg-snow/10">
                        <IconArrow className="h-3.5 w-3.5" />
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
