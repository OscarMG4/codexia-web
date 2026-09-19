import { Logo } from "@/components/brand/Logo";
import { IconMail, IconWhatsApp } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services, site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-soft pt-12 pb-[7.5rem] sm:pt-16 sm:pb-24">
      {/* Fondo ambiente */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(61,91,255,0.12),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.08),transparent_68%)] blur-3xl" />
      </div>
      
      <Container className="relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal variant="up">
            <div className="inline-block p-3 rounded-2xl border border-volt/20 bg-volt/5 shadow-[0_0_24px_rgba(61,91,255,0.15)]">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              {site.proposition} Productos digitales con identidad clara,
              comunicación directa y foco en resultados.
            </p>
          </Reveal>
          <Reveal delay={140} variant="up">
            <p className="text-sm font-bold text-snow">Navegación</p>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-cyan transition-colors inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-volt/50 group-hover:bg-cyan group-hover:shadow-[0_0_8px_rgba(125,211,252,0.6)] transition-all" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={260} variant="up">
            <p className="text-sm font-bold text-snow">Servicios</p>
            <ul className="mt-4 space-y-2.5 text-sm text-mist">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#servicios" className="hover:text-cyan transition-colors inline-flex items-center gap-2 group">
                    <span className="h-1 w-1 rounded-full bg-volt/50 group-hover:bg-cyan group-hover:shadow-[0_0_8px_rgba(125,211,252,0.6)] transition-all" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={380} variant="up">
            <p className="text-sm font-bold text-snow">Contacto</p>
            <ul className="mt-4 space-y-4 text-sm text-mist">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col gap-1.5 hover:text-snow transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
                    WhatsApp
                  </span>
                  <span className="inline-flex items-center gap-2.5 p-2 -ml-2 rounded-lg group-hover:bg-volt/10 transition-colors">
                    <IconWhatsApp className="h-4 w-4 text-cyan" />
                    {site.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex flex-col gap-1.5 hover:text-snow transition-colors"
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan">
                    Correo
                  </span>
                  <span className="inline-flex items-center gap-2.5 p-2 -ml-2 rounded-lg group-hover:bg-volt/10 transition-colors break-all">
                    <IconMail className="h-4 w-4 shrink-0 text-cyan" />
                    {site.email}
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-3 py-1.5 shadow-[0_0_16px_rgba(61,91,255,0.2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(125,211,252,0.8)]" />
              <p className="text-xs uppercase tracking-[0.24em] text-cyan font-semibold">
                {site.tagline}
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={220} variant="fade">
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium">© {new Date().getFullYear()} CODEXIA. Todos los derechos reservados.</p>
            <p className="text-fog">Productos digitales para negocios.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
