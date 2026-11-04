import { IconCheck } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import Image from "next/image";

const phases = [
  { label: "Descubrimiento y alcance", status: "done" },
  { label: "Diseño de la solución", status: "done" },
  { label: "Cotización y contrato", status: "done" },
  { label: "Desarrollo", status: "active" },
  { label: "Lanzamiento y soporte", status: "pending" },
] as const;

const statusLabel = {
  done: "Completado",
  active: "En curso",
  pending: "Pendiente",
} as const;

export function ProjectOverview() {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-line/70 bg-surface text-fg shadow-[0_30px_60px_-24px_rgba(15,23,42,0.3)]">
      <figcaption className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
            Resumen del proyecto
          </p>
          <p className="mt-1 font-display text-base font-bold text-fg">
            Plataforma de ventas · Cliente
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success-fg ring-1 ring-success-ring">
          <span className="live-dot h-1.5 w-1.5 rounded-full bg-emerald-500" />
          En plazo
        </span>
      </figcaption>

      <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
        {[
          { value: "68%", label: "Avance" },
          { value: "6", label: "Semanas" },
          { value: "1", label: "Interlocutor" },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-4 sm:px-6">
            <p className="font-display text-xl font-bold text-fg sm:text-2xl">
              {stat.value}
            </p>
            <p className="mt-0.5 text-xs text-fg-subtle">{stat.label}</p>
          </div>
        ))}
      </div>

      <ol className="space-y-1 px-3 py-3 sm:px-4">
        {phases.map((phase) => (
          <li
            key={phase.label}
            className={cn(
              "flex items-center justify-between gap-3 rounded-lg px-2 py-2.5 sm:px-3",
              phase.status === "active" && "bg-accent-soft",
            )}
          >
            <span className="flex min-w-0 items-center gap-3">
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  phase.status === "done" && "bg-gradient-to-br from-brand-500 to-violet text-white",
                  phase.status === "active" &&
                    "border-2 border-brand-600 bg-surface",
                  phase.status === "pending" && "border border-line-strong",
                )}
              >
                {phase.status === "done" ? <IconCheck className="h-3.5 w-3.5" /> : null}
                {phase.status === "active" ? (
                  <span className="h-2 w-2 rounded-full bg-brand-600" />
                ) : null}
              </span>
              <span
                className={cn(
                  "truncate text-sm",
                  phase.status === "pending" ? "text-fg-subtle" : "font-medium text-fg",
                )}
              >
                {phase.label}
              </span>
            </span>
            <span
              className={cn(
                "shrink-0 text-xs font-medium",
                phase.status === "done" && "text-fg-subtle",
                phase.status === "active" && "text-accent-fg",
                phase.status === "pending" && "text-fg-subtle",
              )}
            >
              {statusLabel[phase.status]}
            </span>
          </li>
        ))}
      </ol>

      <div className="px-5 pb-5 sm:px-6">
        <div className="h-1.5 overflow-hidden rounded-full bg-line">
          <div className="beam h-full w-[68%] rounded-full bg-gradient-to-r from-brand-500 via-violet to-cyan" />
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-line bg-surface-muted px-5 py-3.5 sm:px-6">
        <span className="relative inline-flex h-8 w-8 shrink-0 overflow-hidden rounded-full ring-2 ring-surface">
          <Image
            src={site.avatar}
            alt=""
            width={32}
            height={32}
            className="h-full w-full object-cover object-[50%_18%]"
          />
        </span>
        <p className="text-xs leading-snug text-fg-muted">
          <span className="font-semibold text-fg">Avance semanal enviado</span>
          {" · "}con demo y próximos pasos
        </p>
      </div>
    </figure>
  );
}
