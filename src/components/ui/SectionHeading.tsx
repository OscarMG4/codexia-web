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
        <p className="mb-4 flex w-fit items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-cyan" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl lg:text-[2.9rem] lg:leading-[1.12]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
