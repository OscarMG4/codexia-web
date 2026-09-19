import Image from "next/image";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Imagen de fondo bien visible */}
      <div className="absolute inset-0">
        <Image
          src="/brand/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-[75%_35%] sm:object-center"
        />
        {/* Solo oscurece un poco a la izquierda para leer el texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1224]/92 via-[#0b1224]/55 to-[#0b1224]/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1224]/80 via-transparent to-[#0b1224]/40" />
      </div>

      {/* Orbes suaves */}
      <div className="animate-orb absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.22),transparent_68%)] blur-3xl" />
      <div className="animate-orb-slow absolute top-16 right-[-6%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.16),transparent_68%)] blur-3xl" />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="noise absolute inset-0 opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}
