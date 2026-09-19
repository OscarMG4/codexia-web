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
          className="scale-[1.2] object-cover object-[72%_35%] brightness-[1.35] contrast-[1.2] saturate-[1.25] sm:scale-105 sm:object-center sm:brightness-100 sm:contrast-100 sm:saturate-100"
        />
        {/* Mobile: velo suave solo donde va el texto; el dibujo queda a la derecha y abajo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/82 via-[#0b1224]/35 to-transparent sm:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224]/70 via-transparent to-[#0b1224]/25 sm:hidden" />
        {/* Desktop */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b1224]/92 via-[#0b1224]/55 to-[#0b1224]/15 sm:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0b1224]/80 via-transparent to-[#0b1224]/40 sm:block" />
      </div>

      <div className="animate-orb absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.22),transparent_68%)] blur-3xl" />
      <div className="animate-orb-slow absolute top-16 right-[-6%] hidden h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_68%)] blur-3xl sm:block" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay sm:opacity-[0.08]" />
    </div>
  );
}
