import { cn } from "@/lib/cn";

type SectionFlairProps = {
  className?: string;
  variant?: "services" | "why" | "process" | "projects";
};

export function SectionFlair({ className, variant = "services" }: SectionFlairProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {variant === "services" ? (
        <>
          <div className="absolute top-16 left-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.16),transparent_66%)] blur-3xl" />
          <div className="absolute bottom-10 right-[4%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.12),transparent_68%)] blur-3xl" />
          <div className="absolute left-[6%] top-[38%] hidden h-28 w-px bg-gradient-to-b from-transparent via-volt/35 to-transparent lg:block" />
          <div className="absolute right-[10%] top-[22%] hidden h-1.5 w-1.5 rounded-full bg-cyan/80 shadow-[0_0_14px_rgba(125,211,252,0.8)] lg:block" />
          <div className="absolute bottom-[18%] left-[14%] hidden h-2 w-2 rounded-full bg-orchid/60 shadow-[0_0_16px_rgba(167,139,250,0.7)] xl:block" />
        </>
      ) : null}

      {variant === "why" ? (
        <>
          <div className="absolute top-[10%] left-[5%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.16),transparent_68%)] blur-3xl" />
          <div className="absolute bottom-[5%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.12),transparent_70%)] blur-3xl" />
          <div className="absolute right-[18%] top-[28%] hidden h-px w-24 bg-gradient-to-r from-transparent via-orchid/45 to-transparent lg:block" />
          <div className="absolute left-[12%] bottom-[22%] hidden h-24 w-px bg-gradient-to-b from-transparent via-cyan/35 to-transparent lg:block" />
        </>
      ) : null}

      {variant === "process" ? (
        <>
          <div className="absolute top-1/4 right-[12%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_66%)] blur-3xl" />
          <div className="absolute bottom-1/4 left-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.14),transparent_68%)] blur-3xl" />
          <div className="absolute inset-x-[12%] top-[42%] hidden h-px bg-gradient-to-r from-transparent via-volt/25 to-transparent lg:block" />
          <div className="absolute right-[8%] top-[20%] hidden h-2 w-2 rounded-full bg-volt/70 shadow-[0_0_16px_rgba(61,91,255,0.7)] lg:block" />
        </>
      ) : null}

      {variant === "projects" ? (
        <>
          <div className="absolute top-1/4 left-[4%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_68%)] blur-3xl" />
          <div className="absolute bottom-1/5 right-[6%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_66%)] blur-3xl" />
          <div className="absolute left-[20%] top-[18%] hidden h-px w-32 bg-gradient-to-r from-transparent via-cyan/40 to-transparent lg:block" />
          <div className="absolute bottom-[24%] right-[16%] hidden h-1.5 w-1.5 rounded-full bg-orchid/80 shadow-[0_0_14px_rgba(167,139,250,0.8)] lg:block" />
        </>
      ) : null}
    </div>
  );
}
