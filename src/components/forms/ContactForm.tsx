"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconCheck } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { contactRules, trimContact, type ContactInput } from "@/lib/validation";
import { submitWeb3Form } from "@/lib/web3forms";

type Status = "idle" | "sending" | "success" | "error";

const fieldClasses =
  "w-full rounded-lg border border-line bg-surface-muted px-3.5 py-2.5 text-[15px] text-fg placeholder:text-fg-subtle/70 transition-colors duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-accent-ring aria-[invalid=true]:border-red-400";

type ContactFormProps = {
  compact?: boolean;
  onSuccess?: () => void;
};

export function ContactForm({ compact = false, onSuccess }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const idPrefix = compact ? "dock-" : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    defaultValues: { fullName: "", phone: "", email: "", message: "", website: "" },
  });

  const onSubmit = handleSubmit(async (rawValues) => {
    const values = trimContact(rawValues);
    setStatus("sending");
    setErrorMessage("");

    if (values.website) {
      setStatus("success");
      reset();
      onSuccess?.();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "El envío por correo aún no está activo. Escríbeme por WhatsApp mientras tanto.",
      );
      return;
    }

    try {
      await submitWeb3Form({
        access_key: accessKey,
        subject: `Contacto web CODEXIA — ${values.fullName}`,
        from_name: site.name,
        name: values.fullName,
        email: values.email,
        phone: values.phone,
        message: [
          `Nombre: ${values.fullName}`,
          `Celular: ${values.phone}`,
          `Correo del cliente: ${values.email}`,
          "",
          values.message,
        ].join("\n"),
        replyto: values.email,
      });

      setStatus("success");
      reset();
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "No pudimos enviar tu mensaje.",
      );
    }
  });

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-accent-soft px-6 py-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-fg">
            ¡Mensaje enviado!
          </p>
          <p className="mt-2 text-sm text-fg-muted">
            Te responderé muy pronto para hablar de tu proyecto.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-lg border border-line bg-surface-muted px-4 py-2 text-sm font-semibold text-fg hover:bg-surface-muted"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website", contactRules.website)}
      />

      <div className={cn(compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2")}>
        <div>
          <label
            htmlFor={`${idPrefix}fullName`}
            className="mb-1.5 block text-sm font-medium text-fg-muted"
          >
            Nombres y apellidos
          </label>
          <input
            id={`${idPrefix}fullName`}
            type="text"
            autoComplete="name"
            placeholder="Ej. María Pérez Díaz"
            className={fieldClasses}
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName", contactRules.fullName)}
          />
          {errors.fullName ? (
            <p className="mt-1.5 text-xs text-danger-fg">{errors.fullName.message}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}phone`}
            className="mb-1.5 block text-sm font-medium text-fg-muted"
          >
            Celular
          </label>
          <input
            id={`${idPrefix}phone`}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Ej. 981 474 747"
            className={fieldClasses}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone", contactRules.phone)}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-xs text-danger-fg">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}email`}
          className="mb-1.5 block text-sm font-medium text-fg-muted"
        >
          Tu correo electrónico
        </label>
        <input
          id={`${idPrefix}email`}
          type="email"
          autoComplete="email"
          required
          placeholder="Ej. tu@correo.com"
          className={fieldClasses}
          aria-invalid={Boolean(errors.email)}
          {...register("email", contactRules.email)}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-danger-fg">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}message`}
          className="mb-1.5 block text-sm font-medium text-fg-muted"
        >
          Mensaje
        </label>
        <textarea
          id={`${idPrefix}message`}
          rows={compact ? 3 : 4}
          required
          placeholder="Cuéntame qué idea o proyecto tienes en mente."
          className={cn(fieldClasses, "resize-none")}
          aria-invalid={Boolean(errors.message)}
          {...register("message", contactRules.message)}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-danger-fg">{errors.message.message}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="rounded-lg border border-danger-ring bg-danger-soft px-4 py-3 text-xs text-danger-fg">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center btn-gradient rounded-lg px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar solicitud"}
      </button>

      <p className="text-center text-xs leading-relaxed text-fg-subtle">
        Al enviar aceptas que CODEXIA te contacte por celular o correo.
      </p>
    </form>
  );
}
