"use client";

import { Logo } from "@/components/brand/Logo";
import { IconClose, IconMenu } from "@/components/icons/Icons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/cn";
import { navId, site } from "@/lib/site";
import Link from "next/link";
import { whatsappUrl } from "@/lib/whatsapp";
import { useEffect, useRef, useState } from "react";

const sectionIds = site.nav.map((item) => navId(item.href));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);

      // Se escribe directo en el DOM para no re-renderizar en cada frame de scroll
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      const marker = window.innerHeight * 0.28;
      // En páginas sin estas secciones (servicios) ningún ítem queda activo
      let current = document.getElementById(sectionIds[0]) ? sectionIds[0] : "";
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

  // Sobre el hero el header es transparente; al hacer scroll gana fondo sólido
  const solid = scrolled || open;

  return (
    <header className="animate-drop fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative border-b transition-[background-color,border-color,box-shadow] duration-300",
          solid
            ? "border-line bg-page/90 shadow-[0_1px_12px_rgba(15,23,42,0.06)] backdrop-blur-md"
            : "border-transparent bg-transparent",
        )}
      >
        <span
          ref={progressRef}
          aria-hidden="true"
          className="scroll-progress absolute inset-x-0 bottom-0 h-0.5"
          style={{ transform: "scaleX(0)" }}
        />
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link
            href="/#inicio"
            className="flex min-w-0 shrink items-center"
            aria-label="CODEXIA, ir al inicio"
          >
            <Logo size={36} priority />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center">
              {site.nav.map((item) => {
                const id = navId(item.href);
                const isActive = activeId === id;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative inline-flex items-center rounded-md px-2.5 py-2 text-sm font-medium transition-colors xl:px-3.5",
                        isActive ? "text-fg" : "text-fg-subtle hover:text-fg",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-2.5 -bottom-[17px] h-0.5 rounded-full bg-brand-400 transition-opacity duration-300 xl:inset-x-3.5",
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
            <ThemeToggle />
            <div className="hidden lg:block">
              <Button href={whatsappUrl()}>Agenda una consulta</Button>
            </div>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-fg transition-colors hover:bg-surface-muted lg:hidden",
              )}
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
          "max-h-[calc(100svh-4rem)] overflow-y-auto border-b border-line bg-page lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="py-2 pb-5">
          <ul className="divide-y divide-line">
            {site.nav.map((item) => {
              const id = navId(item.href);
              const isActive = activeId === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "flex min-h-12 items-center justify-between py-3 text-base font-medium transition-colors",
                      isActive ? "text-fg" : "text-fg-subtle hover:text-fg",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                    {isActive ? (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <Button
              href={whatsappUrl()}
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Agenda una consulta
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
