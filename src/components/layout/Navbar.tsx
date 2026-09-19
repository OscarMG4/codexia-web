"use client";

import { Logo } from "@/components/brand/Logo";
import { IconClose, IconMenu } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { useEffect, useState } from "react";

const sectionIds = site.nav.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 16);

      const marker = window.innerHeight * 0.28;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= marker) current = id;
      }
      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="animate-drop fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative border-b transition-[background-color,border-color,box-shadow] duration-300",
          scrolled || open
            ? "border-white/10 bg-[#0b1224]/95 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "border-white/8 bg-[#0b1224]/70 backdrop-blur-md",
        )}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-volt/0 via-volt/50 to-orchid/0"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-volt/70 to-cyan/40"
        />

        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem] sm:gap-4 xl:h-[4.5rem]">
          <a
            href="#inicio"
            className="relative flex h-full min-w-0 shrink items-center"
            aria-label="CODEXIA, ir al inicio"
          >
            <Logo size={40} className="items-center leading-none" priority />
          </a>

          <nav aria-label="Principal" className="hidden min-w-0 lg:block">
            <ul className="flex items-center gap-0.5">
              {site.nav.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={cn(
                        "relative inline-flex items-center px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors xl:px-4 xl:text-sm",
                        isActive ? "text-snow" : "text-mist hover:text-snow",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3.5 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-volt to-cyan transition-opacity duration-300 xl:inset-x-4",
                          isActive ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden lg:block">
              <Button
                href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`}
                className="px-4 py-2 text-[13px] shadow-[0_0_24px_rgba(61,91,255,0.28)] xl:px-5 xl:py-2.5 xl:text-sm"
              >
                Hablemos
              </Button>
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-snow transition-colors hover:border-volt/40 hover:bg-volt/10 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
              {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </div>

      <div
        id="menu-mobile"
        className={cn(
          "max-h-[calc(100svh-3.5rem)] overflow-y-auto border-b border-white/10 bg-[#0b1224]/98 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-3 pb-5">
          <ul className="divide-y divide-white/8">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex min-h-12 items-center justify-between py-3 text-base transition-colors",
                      isActive ? "text-snow" : "text-mist hover:text-snow",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_rgba(125,211,252,0.8)]" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <Button
              href={`https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(site.whatsapp.message)}`}
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Hablemos
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
