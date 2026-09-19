export function CodePanel() {
  return (
    <figure className="gradient-border relative overflow-hidden rounded-[1.4rem] bg-[#080e1a] shadow-[0_24px_70px_rgba(61,91,255,0.35),0_0_100px_rgba(167,139,250,0.2)] sm:rounded-[1.6rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(61,91,255,0.18),transparent_60%)]" />

      <div className="relative flex items-center gap-2 border-b border-white/8 bg-black/20 px-3.5 py-2.5 sm:px-4 sm:py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b7a] shadow-[0_0_8px_rgba(255,107,122,0.6)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166] shadow-[0_0_8px_rgba(255,209,102,0.6)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7] shadow-[0_0_8px_rgba(110,231,183,0.6)]" />
        <figcaption className="ml-2.5 text-[11px] tracking-wide text-mist sm:ml-3 sm:text-xs">
          codexia.init
        </figcaption>
      </div>
      <pre className="relative overflow-x-auto p-3.5 text-[11px] leading-5 text-fog sm:p-5 sm:text-[13px] sm:leading-6 lg:p-5 lg:text-[13px] lg:leading-6 xl:p-7 xl:text-sm xl:leading-7">
        <code>
          <span className="text-mist">$ </span>
          <span className="font-semibold text-cyan/90 drop-shadow-[0_0_8px_rgba(125,211,252,0.4)]">
            codexia
          </span>
          {" create --idea="}
          <span className="font-medium text-volt drop-shadow-[0_0_8px_rgba(61,91,255,0.4)]">
            &quot;tu negocio&quot;
          </span>
          {"\n\n"}
          <span className="text-mist">▸</span> Analizamos el alcance{"\n"}
          <span className="text-mist">▸</span> Diseñamos la solución{"\n"}
          <span className="text-mist">▸</span> Cotización y contrato{"\n"}
          <span className="text-mist">▸</span> Desarrollamos y lanzamos{"\n\n"}
          <span className="text-cyan/80 drop-shadow-[0_0_6px_rgba(125,211,252,0.5)]">
            ✓
          </span>{" "}
          Listo para construir.
        </code>
      </pre>
    </figure>
  );
}
