export function GridPattern() {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-20"
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="0"
            y="0"
          >
            <circle
              cx="1"
              cy="1"
              r="1"
              className="fill-volt/30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1e]" />
    </div>
  );
}
