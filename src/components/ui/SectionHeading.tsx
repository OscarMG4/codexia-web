import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
            dark
              ? "border-white/15 bg-white/5 text-brand-200"
              : "border-accent-ring bg-accent-soft text-accent-fg",
          )}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-cyan"
          />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[1.75rem] leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]",
          dark ? "text-white" : "text-fg",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-slate-300" : "text-fg-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
