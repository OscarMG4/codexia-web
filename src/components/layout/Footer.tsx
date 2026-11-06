import { Logo } from "@/components/brand/Logo";
import { IconMail, IconWhatsApp } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { location, services, site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 pt-16 pb-28 text-slate-400 sm:pb-12">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Logo markClassName="h-12 w-12" wordmarkClassName="text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              {site.proposition}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Navegación</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Servicios</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/servicios/${service.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contacto</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <IconWhatsApp className="h-4 w-4 shrink-0 text-slate-500" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-white"
                >
                  <IconMail className="h-4 w-4 shrink-0 text-slate-500" />
                  {site.email}
                </a>
              </li>
              <li className="pt-1 text-slate-500">
                <address className="not-italic">
                  {location.city}, {location.region} — {location.countryName}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CODEXIA. Todos los derechos reservados.</p>
          <p>Productos digitales para negocios.</p>
        </div>
      </Container>
    </footer>
  );
}
