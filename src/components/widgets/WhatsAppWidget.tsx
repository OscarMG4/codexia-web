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
      className="group pointer-events-auto relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.55)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(37,211,102,0.65)] sm:h-[3.75rem] sm:w-[3.75rem]"
    >
      <IconWhatsApp className="h-7 w-7 sm:h-8 sm:w-8" />

      {/* Etiqueta al pasar el mouse */}
      <span className="pointer-events-none absolute top-1/2 right-full mr-3 hidden -translate-y-1/2 translate-x-2 rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Escríbeme por WhatsApp
      </span>

      {showBadge ? (
        <span className="whatsapp-badge absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-[#ff3b30] px-1 text-[11px] leading-none font-bold text-white ring-2 ring-surface">
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
          className={`pointer-events-auto absolute right-0 bottom-full mb-4 w-[min(20rem,calc(100vw-1.5rem))] rounded-2xl border border-line bg-surface p-4 shadow-[0_24px_60px_-20px_rgba(15,23,42,0.4)] ${
            isLeaving ? "whatsapp-bubble-out" : "whatsapp-bubble-in"
          }`}
        >
          <div className="flex items-center gap-3 pr-7">
            <span className="whatsapp-avatar relative h-10 w-10 shrink-0">
              <span className="block h-10 w-10 overflow-hidden rounded-full bg-surface-muted">
                <Image
                  src={site.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </span>
              <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-surface" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-fg">{site.name}</p>
              <p className="text-xs text-fg-subtle" aria-live="polite">
                {isTyping ? "escribiendo…" : "En línea"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={dismissBubble}
            aria-label="Cerrar chat de WhatsApp"
            className="absolute top-3 right-3 grid h-7 w-7 place-items-center rounded-full text-fg-subtle transition-colors hover:bg-surface-muted hover:text-fg"
          >
            <IconClose className="h-4 w-4" />
          </button>

          <div className="mt-4 min-h-[6.5rem]">
            {isTyping ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-3 py-2.5">
                <span className="whatsapp-dot" />
                <span className="whatsapp-dot" />
                <span className="whatsapp-dot" />
              </span>
            ) : (
              <>
                <p className="whatsapp-message text-sm leading-relaxed text-fg-muted">
                  Hola 👋 ¿Tienes un proyecto en mente? Escríbeme y lo conversamos.
                </p>

                <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line">
                  {quickReplies.map((reply, index) => (
                    <li
                      key={reply.id}
                      className="whatsapp-message"
                      style={{ animationDelay: `${120 + index * 60}ms` }}
                    >
                      <a
                        href={linkFor(serviceMessage(reply.id))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/reply flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm text-fg transition-colors hover:bg-surface-muted"
                      >
                        {reply.label}
                        <IconArrow className="h-3.5 w-3.5 shrink-0 text-fg-subtle transition-transform group-hover/reply:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <a
            href={linkFor()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1fb658]"
          >
            <IconWhatsApp className="h-4 w-4" />
            Chatear por WhatsApp
          </a>
        </div>
      ) : null}

      <WhatsAppFab href={linkFor()} showBadge={bubbleVisible && !isTyping} />
    </div>
  );
}
