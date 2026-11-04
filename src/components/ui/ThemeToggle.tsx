"use client";

import { cn } from "@/lib/cn";
import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import { useSyncExternalStore } from "react";

function readTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

// El tema vive en <html data-theme>; se observa ese atributo como store externo
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Almacenamiento bloqueado: el tema se aplica igual en esta visita
  }
}

/**
 * Cambia el tema con la View Transitions API: el navegador anima solo dos
 * capturas (antes/después) en la GPU, en vez de transicionar cada elemento.
 * El tema nuevo se expande en círculo desde el botón. Sin soporte, cambia al instante.
 */
function applyTheme(theme: Theme, origin: { x: number; y: number }) {
  const root = document.documentElement;
  saveTheme(theme);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    root.dataset.theme = theme;
    return;
  }

  const transition = document.startViewTransition(() => {
    root.dataset.theme = theme;
  });

  // Radio hasta la esquina más lejana para cubrir toda la pantalla
  const radius = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y),
  );

  void transition.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${origin.x}px ${origin.y}px)`,
          `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
        ],
      },
      {
        duration: 550,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as Theme);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        applyTheme(isDark ? "light" : "dark", {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={isDark ? "Modo claro" : "Modo oscuro"}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface/90 text-fg-muted transition-colors hover:border-accent-border hover:text-fg",
        className,
      )}
    >
      {/* Sol */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={cn(
          "absolute h-5 w-5 transition-all duration-500",
          isDark ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 rotate-0 opacity-100",
        )}
      >
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {/* Luna */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={cn(
          "absolute h-5 w-5 transition-all duration-500",
          isDark ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0",
        )}
      >
        <path
          d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
