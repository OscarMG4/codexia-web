"use client";

import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { site } from "@/lib/site";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PageIntro() {
  const [phase, setPhase] = useState<"show" | "leave" | "done">("show");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const leave = window.setTimeout(() => setPhase("leave"), 980);
    const done = window.setTimeout(() => setPhase("done"), 2080);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`page-intro ${phase === "leave" ? "is-leaving" : ""}`}
      aria-hidden
    >
      <div className="page-intro-glow" />
      <span className="page-intro-line" />
      <div className="page-intro-mark">
        <span className="relative mb-5 inline-flex h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/25 shadow-[0_0_40px_rgba(61,91,255,0.35)] sm:h-32 sm:w-32">
          <Image
            src="/brand/codexia-mark.jpg"
            alt={site.name}
            fill
            priority
            sizes="128px"
            className="scale-[1.42] object-cover object-center"
          />
        </span>
        <CodexiaWordmark className="text-[1.15rem] tracking-[0.34em] sm:text-[1.35rem]" />
      </div>
    </div>
  );
}
