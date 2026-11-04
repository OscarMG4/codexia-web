"use client";

import { useEffect } from "react";

/**
 * Un solo listener para todo el sitio: actualiza --mx/--my en la tarjeta
 * `.spotlight` bajo el puntero, así las tarjetas pueden seguir siendo server components.
 */
export function SpotlightEffects() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      target.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
