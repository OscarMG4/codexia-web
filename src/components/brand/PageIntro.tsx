"use client";

import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { site } from "@/lib/site";
import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_LEAVE_MS = 900;
const INTRO_DONE_MS = 1400;

export function PageIntro() {
  const [phase, setPhase] = useState<"show" | "leave" | "done">("show");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("intro-active");
    root.classList.remove("intro-done");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leaveAt = reduced ? 400 : INTRO_LEAVE_MS;
    const doneAt = reduced ? 700 : INTRO_DONE_MS;

    const leave = window.setTimeout(() => setPhase("leave"), leaveAt);
    const done = window.setTimeout(() => {
      setPhase("done");
      root.classList.remove("intro-active");
      root.classList.add("intro-done");
      document.body.style.overflow = previousOverflow;
    }, doneAt);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(leave);
      window.clearTimeout(done);
      root.classList.remove("intro-active");
      // Si se desmonta antes, no dejes la página bloqueada sin animaciones
      if (!root.classList.contains("intro-done")) {
        root.classList.add("intro-done");
      }
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
        <span className="relative mb-5 inline-flex h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/30 shadow-[0_0_48px_rgba(61,91,255,0.45)] sm:h-36 sm:w-36">
          <Image
            src="/brand/codexia-mark.jpg"
            alt={site.name}
            fill
            priority
            sizes="144px"
            className="scale-[1.42] object-cover object-center"
          />
        </span>
        <CodexiaWordmark className="text-[1.15rem] tracking-[0.3em] sm:text-[1.45rem] sm:tracking-[0.34em]" />
      </div>
    </div>
  );
}
