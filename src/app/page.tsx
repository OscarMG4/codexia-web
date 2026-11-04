import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyCodexia } from "@/components/sections/WhyCodexia";
import { PageEffects } from "@/components/visual/PageEffects";
import { ContactFormProvider } from "@/components/widgets/ContactDock";
import { faqSchema, webPageSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "es-PE": "/" },
  },
};

export default function Home() {
  return (
    <ContactFormProvider>
      <JsonLd schema={[webPageSchema(), faqSchema(homeFaqs)]} />
      <PageEffects />
      <Navbar />
      <main id="contenido">
        <Hero />
        <Services />
        <WhyCodexia />
        <Projects />
        <Portfolio />
        <Process />
        <Faq
          faqs={homeFaqs}
          description="Lo que más me preguntan negocios de Chiclayo y de todo el Perú antes de empezar."
          className="bg-page-alt"
        />
        <Contact />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
