"use client";

import type { ContactForm as ContactFormComponent } from "@/components/forms/ContactForm";
import { useEffect, useRef, useState } from "react";

type ContactFormType = typeof ContactFormComponent;

// Promesa compartida: el formulario (y react-hook-form) se descarga una sola vez
let contactFormPromise: Promise<ContactFormType> | null = null;

function loadContactForm() {
  contactFormPromise ??= import("@/components/forms/ContactForm").then((mod) => mod.ContactForm);
  return contactFormPromise;
}

type LazyContactFormProps = {
  compact?: boolean;
  /** Cargar de inmediato (p. ej. dentro de un panel que el usuario ya abrió). */
  eager?: boolean;
};

/**
 * El formulario no entra en la carga inicial: se importa al acercarse a la
 * pantalla. Mientras tanto se reserva su alto para que no salte el layout.
 */
export function LazyContactForm({ compact = false, eager = false }: LazyContactFormProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [Form, setForm] = useState<ContactFormType | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = () =>
      loadContactForm().then((component) => {
        if (!cancelled) setForm(() => component);
      });

    if (eager) {
      void load();
      return () => {
        cancelled = true;
      };
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        void load();
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [eager]);

  return (
    <div ref={ref}>
      {Form ? (
        <Form compact={compact} />
      ) : (
        <div aria-hidden="true" className={compact ? "min-h-[26rem]" : "min-h-[26rem] sm:min-h-[22rem]"} />
      )}
    </div>
  );
}
