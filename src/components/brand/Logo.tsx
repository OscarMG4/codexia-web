import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Tamaño del isotipo con clases responsivas (por defecto 40px, igual que los botones del navbar). */
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  /** Tamaño máximo en px al que se muestra: define la resolución de la imagen. */
  size?: number;
  priority?: boolean;
};

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  size = 48,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none sm:gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-black",
          markClassName,
        )}
      >
        <Image
          src="/brand/codexia-mark.jpg"
          alt=""
          width={size * 2}
          height={size * 2}
          // El círculo del logo ocupa ~76% de la imagen: se amplía para que su anillo sea el borde
          className="h-full w-full scale-[1.31] object-cover object-center"
          priority={priority}
        />
      </span>
      {showWordmark ? <CodexiaWordmark className={wordmarkClassName} /> : null}
      <span className="sr-only">CODEXIA</span>
    </span>
  );
}
