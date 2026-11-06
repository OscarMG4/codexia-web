import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import { siFacebook, siInstagram, siTiktok, type SimpleIcon } from "simple-icons";

const icons: Record<(typeof site.social)[number]["id"], SimpleIcon> = {
  facebook: siFacebook,
  instagram: siInstagram,
  tiktok: siTiktok,
};

type SocialLinksProps = {
  className?: string;
  /** Clases de cada botón (borde, fondo y color según dónde se use). */
  itemClassName?: string;
};

export function SocialLinks({ className, itemClassName }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {site.social.map((profile) => (
        <li key={profile.id}>
          <a
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`CODEXIA en ${profile.label}`}
            title={profile.label}
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-colors",
              itemClassName,
            )}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
              <path d={icons[profile.id].path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
