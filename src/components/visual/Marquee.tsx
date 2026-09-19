import { marqueeItems } from "@/lib/site";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />
      <div className="animate-marquee flex w-max gap-10">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-10 text-sm uppercase tracking-[0.28em] text-fog"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
