import { techStack } from "@/lib/site";
import {
  siAngular,
  siAntdesign,
  siLaravel,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPhp,
  siPrimeng,
  siReact,
  siRedis,
  siSpringboot,
  siTailwindcss,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

const logos = {
  "Next.js": siNextdotjs,
  React: siReact,
  TypeScript: siTypescript,
  "Tailwind CSS": siTailwindcss,
  Laravel: siLaravel,
  PHP: siPhp,
  "Spring Boot": siSpringboot,
  Java: siOpenjdk,
  Angular: siAngular,
  MySQL: siMysql,
  Redis: siRedis,
  "Ant Design": siAntdesign,
  PrimeNG: siPrimeng,
  Vercel: siVercel,
} satisfies Record<(typeof techStack)[number], SimpleIcon>;

// Logos negros (Next.js, Vercel…) usan el color del texto para verse en ambos temas
function isTooDark(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b < 40;
}

export function TechMarquee() {
  // Duplicado para que el loop sea continuo (la animación recorre el 50%)
  const items = [...techStack, ...techStack];

  return (
    <div className="marquee mask-fade-x overflow-hidden py-1">
      <ul className="marquee-track flex w-max gap-3 sm:gap-4">
        {items.map((tech, index) => {
          const icon = logos[tech];
          return (
            <li
              key={`${tech}-${index}`}
              aria-hidden={index >= techStack.length}
              className="group flex items-center gap-3 rounded-xl border border-line bg-surface/80 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-fg-muted shadow-[0_1px_2px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-colors hover:border-accent-border hover:text-fg sm:px-5 sm:py-3"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                aria-label={icon.title}
                className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                style={{ fill: isTooDark(icon.hex) ? "currentColor" : `#${icon.hex}` }}
              >
                <path d={icon.path} />
              </svg>
              {tech}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
