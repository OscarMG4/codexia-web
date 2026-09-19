"use client";

import { IconWhatsApp } from "@/components/icons/Icons";
import { site } from "@/lib/site";
import {
  isMobileUserAgent,
  whatsappApiUrl,
  whatsappWebUrl,
} from "@/lib/whatsapp";
import Image from "next/image";
import { useEffect, useState } from "react";

const DISMISS_KEY = "codexia-whatsapp-bubble-dismissed";
const WIDGET_REVEAL_MS = 120;
const BUBBLE_DELAY_MS = 900;
const TYPING_MS = 1200;
const EXIT_MS = 220;

function WhatsAppFab({
  href,
  className = "",
  showBadge,
}: {
  href: string;
  className?: string;
  showBadge: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-button pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-200 hover:scale-110 sm:h-[60px] sm:w-[60px] ${className}`}
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-ring" aria-hidden="true" />
      <span className="whatsapp-ring whatsapp-ring-delayed" aria-hidden="true" />
      <span className="relative z-[1]">
        <IconWhatsApp className="h-8 w-8" />
      </span>
      {showBadge ? (
        <span className="whatsapp-badge absolute -right-0.5 -top-0.5 z-[2] flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ff3b30] px-1 text-[11px] font-bold leading-none text-white shadow-md">
          1
        </span>
      ) : null}
    </a>
  );
}

type WhatsAppWidgetProps = {
  suppressBubble?: boolean;
};

export function WhatsAppWidget({ suppressBubble = false }: WhatsAppWidgetProps) {
  const [href, setHref] = useState(whatsappWebUrl());
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setHref(
      isMobileUserAgent(navigator.userAgent)
        ? whatsappApiUrl()
        : whatsappWebUrl(),
    );

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

  const bubbleVisible = showBubble && !suppressBubble;

  if (!isVisible) return null;

  return (
    <div className="whatsapp-widget widget-enter pointer-events-none flex flex-col items-end gap-3 sm:gap-4">
      {bubbleVisible ? (
        <div
          className={`whatsapp-bubble pointer-events-auto relative w-[min(19.5rem,calc(100vw-5.5rem))] overflow-visible rounded-[22px] bg-white shadow-[0_18px_50px_-12px_rgba(37,211,102,0.55),0_12px_28px_-8px_rgba(15,23,42,0.45)] ${
            isLeaving ? "whatsapp-bubble-out" : "whatsapp-bubble-in"
          }`}
        >
          <div className="whatsapp-bubble-header relative flex items-center gap-3 rounded-t-[22px] bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#20bd5a] px-3.5 py-3 pr-10">
            <span className="whatsapp-avatar relative inline-flex h-10 w-10">
              <span className="h-10 w-10 overflow-hidden rounded-full bg-ink ring-[2.5px] ring-white">
                <Image
                  src={site.avatar}
                  alt="CODEXIA"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover object-[50%_18%]"
                />
              </span>
              <span className="whatsapp-online absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#b7ff53]" />
            </span>
            <div className="min-w-0 text-white">
              <p className="truncate text-[13px] font-bold leading-tight">
                {site.name}
              </p>
              <p className="text-[11px] font-medium leading-tight text-white/90">
                {isTyping ? "escribiendo..." : "en línea ahora"}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={dismissBubble}
            aria-label="Cerrar mensaje de WhatsApp"
            className="absolute right-2 top-2 z-[2] flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            ×
          </button>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block min-h-[7.25rem] px-3.5 pb-3.5 pt-3"
            title="Escribir por WhatsApp"
            aria-live="polite"
          >
            {isTyping ? (
              <div className="flex h-full items-center">
                <span className="inline-flex items-center gap-1 rounded-2xl bg-[#f0f2f5] px-3.5 py-2.5">
                  <span className="whatsapp-dot" />
                  <span className="whatsapp-dot" />
                  <span className="whatsapp-dot" />
                </span>
              </div>
            ) : (
              <div className="whatsapp-message">
                <p className="mb-3 text-[15px] font-medium leading-snug text-slate-800">
                  ¿Tienes una idea para tu negocio? Conversemos por WhatsApp. 👋
                </p>
                <span className="whatsapp-cta inline-flex w-full items-center justify-center rounded-xl bg-[#25D366] px-3 py-2.5 text-[13px] font-bold text-white shadow-[0_8px_18px_-6px_rgba(37,211,102,0.9)]">
                  Chatear ahora
                </span>
              </div>
            )}
          </a>
          <span className="whatsapp-tail" aria-hidden="true" />
        </div>
      ) : null}

      <WhatsAppFab href={href} showBadge={bubbleVisible && !isTyping} />
    </div>
  );
}
