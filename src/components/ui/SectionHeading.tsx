import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 flex w-fit max-w-full items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan sm:mb-4 sm:text-[11px] sm:tracking-[0.24em]">
          <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight text-snow sm:text-4xl lg:text-[2.9rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-mist sm:mt-4 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
