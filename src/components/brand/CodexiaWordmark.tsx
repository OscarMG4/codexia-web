import { cn } from "@/lib/cn";

type CodexiaWordmarkProps = {
  className?: string;
};

export function CodexiaWordmark({ className }: CodexiaWordmarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex items-center font-display text-[0.95rem] font-bold leading-none tracking-[0.22em] text-fg sm:text-[1.05rem] sm:tracking-[0.24em]",
        className,
      )}
    >
      COD
      <span className="mx-[0.04em] inline-flex h-[0.7em] w-[0.58em] flex-col justify-between">
        <span className="h-[0.13em] w-full rounded-[0.5px] bg-current" />
        <span className="h-[0.13em] w-full rounded-[0.5px] bg-current" />
        <span className="h-[0.13em] w-full rounded-[0.5px] bg-current" />
      </span>
      XIA
    </span>
  );
}
