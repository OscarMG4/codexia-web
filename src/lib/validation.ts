import type { RegisterOptions } from "react-hook-form";

// Validación con reglas nativas de react-hook-form: evita cargar zod (~120 KB gzip) en el cliente
export type ContactInput = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
  website?: string;
};

type ContactRules = {
  [K in keyof ContactInput]-?: RegisterOptions<ContactInput, K>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+\s()-]+$/;

function lengthBetween(min: number, max: number, minMessage: string, maxMessage: string) {
  return (value: string | undefined) => {
    const length = (value ?? "").trim().length;
    if (length < min) return minMessage;
    if (length > max) return maxMessage;
    return true;
  };
}

export const contactRules: ContactRules = {
  fullName: {
    validate: lengthBetween(3, 80, "Ingresa tus nombres y apellidos", "Máximo 80 caracteres"),
  },
  phone: {
    validate: (value) => {
      const phone = value.trim();
      if (phone.length < 9) return "Ingresa un número de celular válido";
      if (phone.length > 20) return "Máximo 20 caracteres";
      if (!PHONE_PATTERN.test(phone)) return "Solo números y los símbolos + ( ) -";
      return true;
    },
  },
  email: {
    validate: (value) => {
      const email = value.trim();
      if (!email) return "Ingresa tu correo electrónico";
      if (email.length > 120) return "Máximo 120 caracteres";
      if (!EMAIL_PATTERN.test(email)) return "Ingresa un correo válido";
      return true;
    },
  },
  message: {
    validate: lengthBetween(
      10,
      600,
      "Cuéntame en al menos 10 caracteres qué necesitas",
      "Máximo 600 caracteres",
    ),
  },
  // Honeypot: los bots lo llenan, las personas no lo ven
  website: {},
};

export function trimContact(values: ContactInput): ContactInput {
  return {
    fullName: values.fullName.trim(),
    phone: values.phone.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
    website: values.website?.trim() ?? "",
  };
}
