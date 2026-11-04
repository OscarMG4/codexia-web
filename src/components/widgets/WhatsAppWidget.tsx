"use client";

import { IconArrow, IconClose, IconWhatsApp } from "@/components/icons/Icons";
import { services, site } from "@/lib/site";
import {
  isMobileUserAgent,
  whatsappApiUrl,
  whatsappWebUrl,
} from "@/lib/whatsapp";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const DISMISS_KEY = "codexia-whatsapp-bubble-dismissed";
const WIDGET_REVEAL_MS = 120;
const BUBBLE_DELAY_MS = 900;
const TYPING_MS = 1200;
const EXIT_MS = 220;

// Respuestas rápidas: abren WhatsApp con el mensaje del servicio ya escrito
const quickReplies = [
  { id: "landing-pages", label: "Quiero una página web" },
  { id: "apps", label: "Necesito un sistema a medida" },
  { id: "automatizaciones", label: "Automatizar procesos" },
] as const;

function serviceMessage(id: (typeof quickReplies)[number]["id"]) {
  return services.find((service) => service.id === id)?.message ?? site.whatsapp.message;
}

function WhatsAppFab({ href, showBadge }: { href: string; showBadge: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="wa-fab group pointer-events-auto relative grid h-14 w-14 place-items-center rounded-2xl sm:h-[3.75rem] sm:w-[3.75rem]"
    >
      {/* Anillo con degradado que gira (solo transform: lo compone la GPU) */}
      <span aria-hidden="true" className="absolute -inset-[2px] overflow-hidden rounded-[1.125rem]">
        <span className="wa-spin absolute inset-[-60%]" />
      </span>
      <span aria-hidden="true" className="wa-ping absolute inset-0 rounded-2xl" />

      <span className="relative grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-[#34e37f] via-[#22c55e] to-[#0e9f6e] text-white shadow-[0_14px_30px_-10px_rgba(16,185,129,0.75),inset_0_1px_0_rgba(255,255,255,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.04]">
        <IconWhatsApp className="h-7 w-7 drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)] sm:h-8 sm:w-8" />
      </span>

      {/* Etiqueta al pasar el mouse */}
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 translate-x-2 rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Escríbeme por WhatsApp
      </span>

      {showBadge ? (
        <span className="whatsapp-badge absolute -top-1.5 -right-1.5 z-[2] grid h-5 min-w-5 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet px-1 text-[11px] leading-none font-bold text-white shadow-md ring-2 ring-surface">
          1
        </span>
      ) : null}
    </a>
  );
}

type WhatsAppWidgetProps = {
  suppressBubble?: boolean;
};

const subscribeNoop = () => () => {};

export function WhatsAppWidget({ suppressBubble = false }: WhatsAppWidgetProps) {
  const isMobile = useSyncExternalStore(
    subscribeNoop,
    () => isMobileUserAgent(navigator.userAgent),
    () => false,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const reveal = window.setTimeout(() => setIsVisible(true), WIDGET_REVEAL_MS);
    return () => window.clearTimeout(reveal);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;

    const appear = window.setTimeout(() => setShowBubble(true), BUBBLE_DELAY_MS);
    const reveal = window.setTimeout(
      () => setIsTyping(false),
      BUBBLE_DELAY_MS + TYPING_MS,
    );

    return () => {
      window.clearTimeout(appear);
      window.clearTimeout(reveal);
    };
  }, [isVisible]);

  const dismissBubble = () => {
    setIsLeaving(true);
    sessionStorage.setItem(DISMISS_KEY, "1");
    window.setTimeout(() => {
      setShowBubble(false);
      setIsLeaving(false);
    }, EXIT_MS);
  };

  const linkFor = (message?: string) =>
    isMobile ? whatsappApiUrl(message) : whatsappWebUrl(message);

  const bubbleVisible = showBubble && !suppressBubble;

  if (!isVisible) return null;

  return (
    <div className="whatsapp-widget widget-enter pointer-events-none relative">
      {bubbleVisible ? (
        <div
          role="dialog"
          aria-label="Chat de WhatsApp con CODEXIA"
          className={`pointer-events-auto absolute right-0 bottom-full mb-4 w-[min(21rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_70px_-20px_rgba(15,23,42,0.5)] ${
            isLeaving ? "whatsapp-bubble-out" : "whatsapp-bubble-in"
          }`}
        >
          {/* Cabecera */}
          <div className="relative overflow-hidden bg-navy-900 px-4 py-3.5">
            <span aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-60" />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-500 via-violet to-cyan"
            />
            <div className="relative flex items-center gap-3 pr-8">
              <span className="whatsapp-avatar relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 via-violet to-cyan p-[2px]">
                <span className="h-full w-full overflow-hidden rounded-full bg-navy-900">
                  <Image
                    src={site.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="h-full w-full object-cover object-[50%_18%]"
                  />
                </span>
                <span className="live-dot absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-navy-900" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold text-white">{site.name}</p>
                <p className="mt-0.5 font-mono text-[11px] text-emerald-300" aria-live="polite">
                  {isTyping ? "escribiendo…" : "● en línea"}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={dismissBubble}
              aria-label="Cerrar chat de WhatsApp"
              className="absolute top-3 right-3 grid h-7 w-7 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          {/* Conversación */}
          <div className="bg-dots relative min-h-[8.5rem] bg-surface-muted px-4 py-4">
            {isTyping ? (
              <span className="inline-flex items-center gap-1 rounded-2xl rounded-tl-md border border-line bg-surface px-3.5 py-3 shadow-sm">
                <span className="whatsapp-dot" />
                <span className="whatsapp-dot" />
                <span className="whatsapp-dot" />
              </span>
            ) : (
              <>
                <div className="whatsapp-message max-w-[85%] rounded-2xl rounded-tl-md border border-line bg-surface px-3.5 py-2.5 shadow-sm">
                  <p className="text-sm leading-snug text-fg">
                    Hola 👋 ¿Tienes un proyecto en mente? Cuéntame y lo conversamos por WhatsApp.
                  </p>
                  <p className="mt-1 text-right font-mono text-[10px] text-fg-subtle">ahora</p>
                </div>

                <p className="whatsapp-message mt-4 font-mono text-[10px] tracking-[0.14em] text-fg-subtle uppercase" style={{ animationDelay: "120ms" }}>
                  Respuestas rápidas
                </p>
                <ul className="mt-2 flex flex-col items-end gap-1.5">
                  {quickReplies.map((reply, index) => (
                    <li
                      key={reply.id}
                      className="whatsapp-message"
                      style={{ animationDelay: `${180 + index * 70}ms` }}
                    >
                      <a
                        href={linkFor(serviceMessage(reply.id))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/reply inline-flex items-center gap-1.5 rounded-full border border-accent-ring bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent-fg transition-colors hover:border-accent-border hover:bg-surface"
                      >
                        {reply.label}
                        <IconArrow className="h-3 w-3 transition-transform group-hover/reply:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Acción principal */}
          <div className="border-t border-line bg-surface p-3">
            <a
              href={linkFor()}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#22c55e] to-[#0e9f6e] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(16,185,129,0.8)] transition-transform hover:-translate-y-0.5"
            >
              <IconWhatsApp className="h-4 w-4" />
              Abrir WhatsApp
              <IconArrow className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
            </a>
          </div>
        </div>
      ) : null}

      <WhatsAppFab href={linkFor()} showBadge={bubbleVisible && !isTyping} />
    </div>
  );
}
