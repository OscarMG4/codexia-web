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
          <div className="absolute top-10 left-[-20%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.28),transparent_66%)] blur-3xl sm:top-16 sm:left-[8%] sm:h-[30rem] sm:w-[30rem] sm:bg-[radial-gradient(circle,rgba(61,91,255,0.16),transparent_66%)]" />
          <div className="absolute bottom-0 right-[-24%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.2),transparent_68%)] blur-3xl sm:bottom-10 sm:right-[4%] sm:h-[34rem] sm:w-[34rem] sm:bg-[radial-gradient(circle,rgba(125,211,252,0.12),transparent_68%)]" />
          <div className="absolute left-[8%] top-[36%] h-20 w-px bg-gradient-to-b from-transparent via-volt/40 to-transparent sm:left-[6%] sm:top-[38%] sm:h-28 sm:via-volt/35" />
          <div className="absolute right-[10%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan/80 shadow-[0_0_14px_rgba(125,211,252,0.8)] sm:top-[22%]" />
          <div className="absolute bottom-[14%] left-[12%] h-2 w-2 rounded-full bg-orchid/60 shadow-[0_0_16px_rgba(167,139,250,0.7)] sm:bottom-[18%] sm:left-[14%]" />
        </>
      ) : null}

      {variant === "why" ? (
        <>
          <div className="absolute top-[6%] left-[-18%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.26),transparent_68%)] blur-3xl sm:top-[10%] sm:left-[5%] sm:h-[32rem] sm:w-[32rem] sm:bg-[radial-gradient(circle,rgba(61,91,255,0.16),transparent_68%)]" />
          <div className="absolute bottom-0 right-[-20%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.2),transparent_70%)] blur-3xl sm:bottom-[5%] sm:right-[8%] sm:h-[28rem] sm:w-[28rem] sm:bg-[radial-gradient(circle,rgba(125,211,252,0.12),transparent_70%)]" />
          <div className="absolute right-[12%] top-[24%] h-px w-16 bg-gradient-to-r from-transparent via-orchid/50 to-transparent sm:right-[18%] sm:top-[28%] sm:w-24 sm:via-orchid/45" />
          <div className="absolute left-[10%] bottom-[18%] h-16 w-px bg-gradient-to-b from-transparent via-cyan/40 to-transparent sm:left-[12%] sm:bottom-[22%] sm:h-24 sm:via-cyan/35" />
        </>
      ) : null}

      {variant === "process" ? (
        <>
          <div className="absolute top-[18%] right-[-22%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.28),transparent_66%)] blur-3xl sm:top-1/4 sm:right-[12%] sm:h-[34rem] sm:w-[34rem] sm:bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_66%)]" />
          <div className="absolute bottom-[12%] left-[-18%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.24),transparent_68%)] blur-3xl sm:bottom-1/4 sm:left-[8%] sm:h-[30rem] sm:w-[30rem] sm:bg-[radial-gradient(circle,rgba(61,91,255,0.14),transparent_68%)]" />
          <div className="absolute inset-x-[10%] top-[40%] h-px bg-gradient-to-r from-transparent via-volt/30 to-transparent sm:inset-x-[12%] sm:top-[42%] sm:via-volt/25" />
          <div className="absolute right-[10%] top-[16%] h-2 w-2 rounded-full bg-volt/70 shadow-[0_0_16px_rgba(61,91,255,0.7)] sm:right-[8%] sm:top-[20%]" />
        </>
      ) : null}

      {variant === "projects" ? (
        <>
          <div className="absolute top-[16%] left-[-20%] h-[16rem] w-[16rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.24),transparent_68%)] blur-3xl sm:top-1/4 sm:left-[4%] sm:h-[30rem] sm:w-[30rem] sm:bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_68%)]" />
          <div className="absolute bottom-[8%] right-[-18%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.24),transparent_66%)] blur-3xl sm:bottom-1/5 sm:right-[6%] sm:h-[32rem] sm:w-[32rem] sm:bg-[radial-gradient(circle,rgba(167,139,250,0.14),transparent_66%)]" />
          <div className="absolute left-[14%] top-[14%] h-px w-20 bg-gradient-to-r from-transparent via-cyan/45 to-transparent sm:left-[20%] sm:top-[18%] sm:w-32 sm:via-cyan/40" />
          <div className="absolute bottom-[20%] right-[12%] h-1.5 w-1.5 rounded-full bg-orchid/80 shadow-[0_0_14px_rgba(167,139,250,0.8)] sm:bottom-[24%] sm:right-[16%]" />
        </>
      ) : null}
    </div>
  );
}
