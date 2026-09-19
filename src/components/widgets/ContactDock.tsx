"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { IconClose, IconMail } from "@/components/icons/Icons";
import { WhatsAppWidget } from "@/components/widgets/WhatsAppWidget";
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

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function useContactForm() {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm debe usarse dentro de ContactFormProvider");
  }
  return context;
}

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsFormOpen(true);
  }, []);

  const closeForm = useCallback(() => setIsFormOpen(false), []);

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

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] flex justify-end p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6">
        <div className="pointer-events-auto flex w-full max-w-[min(100%,20rem)] flex-col items-end gap-2.5 sm:max-w-sm sm:gap-3">
          {isFormOpen ? (
            <div
              role="dialog"
              aria-label="Formulario de contacto por correo"
              className="w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-ink-soft shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 bg-ink px-5 py-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-fog">
                    {site.name}
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-snow">
                    Escríbeme por correo
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeForm}
                  aria-label="Minimizar formulario"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-snow/70 hover:text-snow"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-[65vh] overflow-y-auto px-5 py-5">
                <ContactForm compact />
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
              className="mb-1 inline-flex h-12 w-12 items-center justify-center gap-2 rounded-full bg-[#0b1224] text-sm font-semibold text-white shadow-[0_10px_28px_rgba(61,91,255,0.28)] ring-1 ring-volt/45 transition hover:-translate-y-0.5 hover:ring-volt/70 hover:shadow-[0_12px_32px_rgba(61,91,255,0.4)] sm:w-auto sm:px-5 widget-enter"
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

            <WhatsAppWidget suppressBubble={isFormOpen} />
          </div>
        </div>
      </div>
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
