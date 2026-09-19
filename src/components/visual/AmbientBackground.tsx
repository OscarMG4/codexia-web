import Image from "next/image";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-[70%_30%] opacity-70 sm:object-center sm:opacity-100"
        />
        <div className="absolute inset-0 bg-[#0b1224]/72 sm:bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/95 via-[#0b1224]/70 to-[#0b1224]/40 sm:from-[#0b1224]/92 sm:via-[#0b1224]/55 sm:to-[#0b1224]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224]/90 via-transparent to-[#0b1224]/55 sm:from-[#0b1224]/80 sm:to-[#0b1224]/40" />
      </div>

      <div className="animate-orb absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.22),transparent_68%)] blur-3xl" />
      <div className="animate-orb-slow absolute top-16 right-[-6%] hidden h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_68%)] blur-3xl sm:block" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="noise absolute inset-0 opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}
