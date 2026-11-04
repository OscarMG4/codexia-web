import { IconWhatsApp } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
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
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200",
        size === "md" && "px-4 py-2.5 text-sm",
        size === "lg" && "px-6 py-3.5 text-[15px]",
        variant === "primary" && "btn-gradient text-white",
        variant === "secondary" &&
          "border border-line-strong bg-surface/70 text-fg backdrop-blur-sm hover:border-accent-border hover:bg-surface",
        variant === "ghost" && "text-fg-muted hover:text-fg",
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
  size,
}: {
  children: React.ReactNode;
  message?: string;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}) {
  return (
    <Button
      href={whatsappUrl(message)}
      variant={variant}
      size={size}
      className={className}
      external
    >
      <IconWhatsApp className="h-4 w-4" />
      {children}
    </Button>
  );
}
