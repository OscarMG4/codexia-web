import { ContactForm } from "@/components/forms/ContactForm";
import { IconMail, IconWhatsApp } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { whatsappUrl } from "@/lib/whatsapp";

const channels = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappUrl(),
    icon: IconWhatsApp,
    external: true,
  },
  {
    label: "Correo",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: IconMail,
    external: false,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-16 overflow-hidden bg-page py-20 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="aurora aurora-1 top-10 right-[-10%] h-[26rem] w-[26rem]" style={{ opacity: 0.18 }} />
        <div className="aurora aurora-3 bottom-0 left-[-8%] h-[20rem] w-[20rem]" style={{ opacity: 0.14 }} />
      </div>
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Contacto"
              title="Conversemos sobre tu proyecto."
              description="Cuéntame qué necesitas y te respondo a la brevedad con los siguientes pasos y una propuesta de alcance."
            />

            <ul className="mt-10 space-y-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : undefined)}
                    className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:border-accent-border"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-fg ring-1 ring-accent-ring">
                      <channel.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block truncate text-[15px] font-semibold text-fg">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="glow-border rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_60px_-24px_rgba(79,75,219,0.3)] sm:p-8">
              <p className="font-display text-xl font-bold text-fg">
                Solicita información
              </p>
              <p className="mt-1.5 text-sm text-fg-muted">
                Completa el formulario y te contacto a la brevedad.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
