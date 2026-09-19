import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { cn } from "@/lib/cn";
import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  size?: number;
  priority?: boolean;
};

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  size = 48,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 sm:gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex shrink-0 overflow-hidden rounded-full ring-1 ring-white/20 shadow-[0_0_22px_rgba(61,91,255,0.28)]",
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
      {showWordmark ? <CodexiaWordmark /> : null}
      <span className="sr-only">CODEXIA</span>
    </span>
  );
}
