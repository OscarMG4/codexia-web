import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import type { Faq as FaqItem } from "@/lib/site";

type FaqProps = {
  faqs: readonly FaqItem[];
  title?: string;
  description?: string;
  className?: string;
};

export function Faq({
  faqs,
  title = "Preguntas frecuentes",
  description,
  className,
}: FaqProps) {
  return (
    <section id="preguntas" className={cn("relative scroll-mt-16 py-20 sm:py-28", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title={title} description={description} />
          </Reveal>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 60} variant="fade">
                <details className="group rounded-xl border border-line bg-surface shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors open:border-accent-border">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display text-[15px] font-semibold text-fg sm:px-6 sm:text-base [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-fg transition-transform duration-300 group-open:rotate-45"
                    >
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-fg-muted sm:px-6">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
