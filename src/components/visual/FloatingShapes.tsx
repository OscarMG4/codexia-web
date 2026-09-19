export function FloatingShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Hexágono superior izquierda */}
      <div className="animate-float-slow absolute left-[8%] top-[15%] h-20 w-20 opacity-70">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="none"
            stroke="url(#gradient-volt)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_12px_rgba(61,91,255,0.5)]"
          />
          <defs>
            <linearGradient id="gradient-volt" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(61,91,255,0.6)" />
              <stop offset="100%" stopColor="rgba(167,139,250,0.6)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Círculo con anillo superior derecha */}
      <div className="animate-float absolute right-[10%] top-[20%] h-24 w-24 opacity-60">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="url(#gradient-cyan)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_16px_rgba(125,211,252,0.5)]"
          />
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="url(#gradient-cyan)"
            strokeWidth="1"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(125,211,252,0.7)" />
              <stop offset="100%" stopColor="rgba(61,91,255,0.5)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Triángulo inferior izquierda */}
      <div className="animate-float-slow absolute bottom-[20%] left-[5%] h-16 w-16 opacity-50">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <polygon
            points="50 10 90 90 10 90"
            fill="none"
            stroke="url(#gradient-orchid)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_10px_rgba(167,139,250,0.4)]"
          />
          <defs>
            <linearGradient id="gradient-orchid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(167,139,250,0.6)" />
              <stop offset="100%" stopColor="rgba(61,91,255,0.4)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Cuadrado rotado centro derecha */}
      <div className="animate-float absolute bottom-[35%] right-[8%] h-14 w-14 opacity-40 rotate-45">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="none"
            stroke="rgba(125,211,252,0.5)"
            strokeWidth="1.5"
            className="drop-shadow-[0_0_8px_rgba(125,211,252,0.3)]"
          />
        </svg>
      </div>
    </div>
  );
}
