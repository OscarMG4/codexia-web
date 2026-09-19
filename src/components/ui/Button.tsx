import { IconWhatsApp } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  onClick,
}: ButtonProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 xl:gap-2.5 xl:px-6 xl:py-3.5 xl:text-[15px]",
        variant === "primary" &&
          "btn-shine bg-gradient-to-r from-[#5b78ff] via-volt to-[#7a5bff] text-white shadow-[0_0_32px_rgba(61,91,255,0.42)] hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(61,91,255,0.55)]",
        variant === "secondary" &&
          "border border-snow/20 bg-white/5 text-snow backdrop-blur-sm hover:border-orchid/40 hover:bg-white/10",
        variant === "ghost" && "text-mist hover:text-snow",
        className,
      )}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}

export function WhatsAppButton({
  children,
  message,
  className,
  variant = "primary",
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
  variant?: ButtonProps["variant"];
}) {
  return (
    <Button href={whatsappUrl(message)} variant={variant} className={className} external>
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 xl:h-8 xl:w-8">
        <IconWhatsApp className="h-3.5 w-3.5 xl:h-[1.1rem] xl:w-[1.1rem]" />
      </span>
      {children}
    </Button>
  );
}
