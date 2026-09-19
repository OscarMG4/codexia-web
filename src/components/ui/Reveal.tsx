"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
};

function waitForIntroDone(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (document.documentElement.classList.contains("intro-done")) {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const check = () => {
      if (document.documentElement.classList.contains("intro-done")) {
        observer.disconnect();
        window.clearInterval(poll);
        resolve();
      }
    };

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const poll = window.setInterval(check, 120);
    // Fallback por si el intro no marca la clase
    window.setTimeout(() => {
      observer.disconnect();
      window.clearInterval(poll);
      document.documentElement.classList.add("intro-done");
      resolve();
    }, 2500);
  });
}

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let revealed = false;
    let observer: IntersectionObserver | null = null;
    let cancelled = false;

    const reveal = () => {
      if (revealed || cancelled) return;
      revealed = true;
      // Forzar reflow para que la transición se note al añadir la clase
      void node.offsetWidth;
      node.classList.add("is-visible");
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Dispara un poco antes de que el elemento quede centrado
      return rect.top < vh * 0.88 && rect.bottom > 40;
    };

    const onScroll = () => {
      if (isInView()) reveal();
    };

    const start = async () => {
      await waitForIntroDone();
      if (cancelled || !node.isConnected) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          reveal();
        },
        { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
      );

      observer.observe(node);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      // Pequeño delay para que el estado inicial (opacity 0) se pinte antes
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(onScroll);
      });
    };

    void start();

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", `reveal-${variant}`, className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
