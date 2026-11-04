import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
  size?: number;
  priority?: boolean;
};

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
  showWordmark = true,
  size = 40,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 leading-none sm:gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden rounded-lg bg-black ring-1 ring-black/10",
          markClassName,
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src="/brand/codexia-mark.jpg"
          alt=""
          width={size * 2}
          height={size * 2}
          className="h-full w-full scale-[1.42] object-cover object-center"
          priority={priority}
        />
      </span>
      {showWordmark ? <CodexiaWordmark className={wordmarkClassName} /> : null}
      <span className="sr-only">CODEXIA</span>
    </span>
  );
}
