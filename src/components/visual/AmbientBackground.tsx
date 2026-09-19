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
          className="scale-[1.15] object-cover object-[72%_32%] brightness-[1.3] contrast-[1.15] saturate-[1.2] sm:scale-105 sm:object-[60%_40%] sm:brightness-[1.1] sm:contrast-[1.05] sm:saturate-[1.1] lg:object-center lg:brightness-100 lg:contrast-100 lg:saturate-100"
        />
        {/* Mobile / tablet: deja ver el dibujo a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/85 via-[#0b1224]/40 to-transparent lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224]/72 via-transparent to-[#0b1224]/30 lg:hidden" />
        {/* Desktop / laptop: overlay más ligero para que se note la red/hexágonos */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0b1224]/88 via-[#0b1224]/45 to-[#0b1224]/10 lg:block" />
        <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0b1224]/70 via-transparent to-[#0b1224]/30 lg:block" />
      </div>

      <div className="animate-orb absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.22),transparent_68%)] blur-3xl" />
      <div className="animate-orb-slow absolute top-16 right-[-6%] hidden h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_68%)] blur-3xl sm:block" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="noise absolute inset-0 opacity-[0.06] mix-blend-overlay sm:opacity-[0.08]" />
    </div>
  );
}
