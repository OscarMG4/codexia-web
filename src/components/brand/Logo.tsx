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
          "relative inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          markClassName,
        )}
      >
        <Image
          src="/brand/codexia-mark.png"
          alt=""
          width={size * 2}
          height={size * 2}
          className="h-full w-full object-cover"
          priority={priority}
        />
      </span>
      {showWordmark ? <CodexiaWordmark className={wordmarkClassName} /> : null}
      <span className="sr-only">CODEXIA</span>
    </span>
  );
}
