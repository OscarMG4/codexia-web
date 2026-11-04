import { cn } from "@/lib/cn";

export type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

/**
 * Server component: solo marca el bloque. Un único IntersectionObserver en
 * PageEffects le agrega `is-visible`, en vez de hidratar un componente por bloque.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  return (
    <div
      className={cn("reveal", `reveal-${variant}`, className)}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
