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

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      node.classList.add("is-visible");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const isInView = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh * 0.9 && rect.bottom > vh * 0.06;
    };

    const onScroll = () => {
      if (isInView()) reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
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
