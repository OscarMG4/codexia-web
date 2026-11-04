"use client";

import { LazyContactForm } from "@/components/forms/LazyContactForm";
import { IconClose, IconMail } from "@/components/icons/Icons";
import { site } from "@/lib/site";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ContactFormContextValue = {
  openForm: () => void;
  closeForm: () => void;
};

type WhatsAppWidgetType = typeof import("@/components/widgets/WhatsAppWidget").WhatsAppWidget;

// El dock aparece recién al llegar a Servicios: su código se descarga en ese momento
function LazyWhatsAppWidget(props: React.ComponentProps<WhatsAppWidgetType>) {
  const [Widget, setWidget] = useState<WhatsAppWidgetType | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("@/components/widgets/WhatsAppWidget").then((mod) => {
      if (!cancelled) setWidget(() => mod.WhatsAppWidget);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return Widget ? <Widget {...props} /> : null;
}

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm debe usarse dentro de ContactFormProvider");
  }
  return context;
}

/**
 * El dock aparece cuando el usuario ya dejó atrás el hero (scroll real), para
 * no tapar el contenido principal en pantallas donde el hero ocupa casi todo.
 */
function hasLeftHero() {
  const hero = document.getElementById("inicio");
  if (hero) {
    return hero.getBoundingClientRect().bottom <= window.innerHeight * 0.4;
  }
  // Páginas sin hero de inicio (servicios): tras bajar más de media pantalla
  return window.scrollY > window.innerHeight * 0.6;
}

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDockVisible, setIsDockVisible] = useState(false);

  const openForm = useCallback(() => {
    setIsDockVisible(true);
    setIsFormOpen(true);
  }, []);

  const closeForm = useCallback(() => setIsFormOpen(false), []);

  useEffect(() => {
    const reveal = () => setIsDockVisible(true);

    if (hasLeftHero()) {
      reveal();
      return;
    }

    const onScroll = () => {
      if (!hasLeftHero()) return;
      window.removeEventListener("scroll", onScroll);
      reveal();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isFormOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeForm();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeForm, isFormOpen]);

  return (
    <ContactFormContext.Provider value={{ openForm, closeForm }}>
      {children}

      {isDockVisible ? (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] flex justify-end p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6">
          <div className="pointer-events-auto flex w-full max-w-[min(100%,20rem)] flex-col items-end gap-2.5 sm:max-w-sm sm:gap-3">
            {isFormOpen ? (
              <div
                role="dialog"
                aria-label="Formulario de contacto por correo"
                className="w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-12px_rgba(15,23,42,0.3)]"
              >
                <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-navy-900 px-5 py-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      {site.name}
                    </p>
                    <p className="mt-1 font-display text-base font-bold text-white">
                      Escríbeme por correo
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeForm}
                    aria-label="Minimizar formulario"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-slate-300 hover:bg-white/10 hover:text-white"
                  >
                    <IconClose className="h-4 w-4" />
                  </button>
                </div>
                <div className="max-h-[65vh] overflow-y-auto px-5 py-5">
                  <LazyContactForm compact eager />
                </div>
              </div>
            ) : null}

            <div className="flex items-end gap-3">
              <button
                type="button"
                onClick={() => (isFormOpen ? closeForm() : openForm())}
                aria-expanded={isFormOpen}
                aria-label={
                  isFormOpen
                    ? "Cerrar formulario de correo"
                    : "Abrir formulario de correo"
                }
                className="widget-enter inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white shadow-[0_10px_24px_-6px_rgba(15,23,42,0.5)] ring-1 ring-white/10 transition-colors hover:bg-navy-700 sm:h-[3.75rem] sm:w-auto sm:px-5"
              >
                {isFormOpen ? (
                  <IconClose className="h-4 w-4" />
                ) : (
                  <IconMail className="h-4 w-4" />
                )}
                <span className="hidden sm:inline">
                  {isFormOpen ? "Cerrar" : "Correo"}
                </span>
              </button>

              <LazyWhatsAppWidget suppressBubble={isFormOpen} />
            </div>
          </div>
        </div>
      ) : null}
    </ContactFormContext.Provider>
  );
}

export function ContactFormButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openForm } = useContactForm();

  return (
    <button type="button" className={className} onClick={openForm}>
      {children}
    </button>
  );
}
