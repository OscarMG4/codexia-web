export function CodePanel() {
  return (
    <figure className="gradient-border relative overflow-hidden rounded-[1.6rem] bg-[#080e1a] shadow-[0_30px_90px_rgba(61,91,255,0.32),0_0_120px_rgba(167,139,250,0.18)]">
      {/* Glow interno */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(61,91,255,0.15),transparent_60%)]" />
      
      <div className="relative flex items-center gap-2 border-b border-white/8 bg-black/20 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b7a] shadow-[0_0_8px_rgba(255,107,122,0.6)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166] shadow-[0_0_8px_rgba(255,209,102,0.6)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7] shadow-[0_0_8px_rgba(110,231,183,0.6)]" />
        <figcaption className="ml-3 text-xs tracking-wide text-mist">
          codexia.init
        </figcaption>
      </div>
      <pre className="relative overflow-x-auto p-4 text-[12px] leading-6 text-fog sm:p-6 sm:text-sm sm:leading-7 xl:p-8 xl:text-base xl:leading-8">
        <code>
          <span className="text-mist">$ </span>
          <span className="text-cyan/90 font-semibold drop-shadow-[0_0_8px_rgba(125,211,252,0.4)]">codexia</span>
          {" create --idea="}
          <span className="text-volt font-medium drop-shadow-[0_0_8px_rgba(61,91,255,0.4)]">&quot;tu negocio&quot;</span>
          {"\n\n"}
          <span className="text-mist">▸</span> Analizamos el alcance{"\n"}
          <span className="text-mist">▸</span> Diseñamos la solución{"\n"}
          <span className="text-mist">▸</span> Cotización y contrato{"\n"}
          <span className="text-mist">▸</span> Desarrollamos y lanzamos{"\n\n"}
          <span className="text-cyan/80 drop-shadow-[0_0_6px_rgba(125,211,252,0.5)]">✓</span> Listo para construir.
        </code>
      </pre>
    </figure>
  );
}
