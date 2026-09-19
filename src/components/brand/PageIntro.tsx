"use client";

import { CodexiaWordmark } from "@/components/brand/CodexiaWordmark";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";

const INTRO_LEAVE_MS = 1200;
const INTRO_DONE_MS = 1700;

export function PageIntro() {
  const [phase, setPhase] = useState<"show" | "leave" | "done">("show");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("intro-active");
    root.classList.remove("intro-done");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const leaveAt = reduced ? 800 : INTRO_LEAVE_MS;
    const doneAt = reduced ? 1200 : INTRO_DONE_MS;

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
        <span className="page-intro-logo-ring">
          {/* img nativo: visible al instante al cargar */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/codexia-mark.jpg"
            alt={site.name}
            width={144}
            height={144}
            decoding="sync"
            fetchPriority="high"
            className="page-intro-logo-img"
          />
        </span>
        <CodexiaWordmark className="text-[1.2rem] tracking-[0.3em] sm:text-[1.5rem] sm:tracking-[0.34em]" />
      </div>
    </div>
  );
}
