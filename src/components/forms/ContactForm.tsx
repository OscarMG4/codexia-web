"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IconCheck } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { submitWeb3Form } from "@/lib/web3forms";

type Status = "idle" | "sending" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border border-white/10 bg-ink px-4 py-3.5 text-sm text-snow placeholder:text-mist/70 transition-colors duration-200 focus:border-volt focus:outline-none";

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
    resolver: zodResolver(contactSchema),
    defaultValues: { fullName: "", phone: "", email: "", message: "", website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
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
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-volt/10 px-6 py-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-volt text-white">
          <IconCheck className="h-6 w-6" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold text-snow">
            ¡Mensaje enviado!
          </p>
          <p className="mt-2 text-sm text-mist">
            Te responderé muy pronto para hablar de tu proyecto.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-snow hover:bg-white/5"
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
        {...register("website")}
      />

      <div className={cn(compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2")}>
        <div>
          <label
            htmlFor={`${idPrefix}fullName`}
            className="mb-2 block text-sm font-medium text-mist"
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
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.fullName.message}</p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}phone`}
            className="mb-2 block text-sm font-medium text-mist"
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
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}email`}
          className="mb-2 block text-sm font-medium text-mist"
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
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}message`}
          className="mb-2 block text-sm font-medium text-mist"
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
          {...register("message")}
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="rounded-xl bg-red-500/10 px-4 py-3 text-xs text-red-300">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-volt px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#2f4cf0] disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Quiero más información"}
      </button>

      <p className="text-center text-[11px] leading-relaxed text-mist">
        Al enviar aceptas que CODEXIA te contacte por celular o correo.
      </p>
    </form>
  );
}
