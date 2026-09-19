import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyCodexia } from "@/components/sections/WhyCodexia";
import { ContactFormProvider } from "@/components/widgets/ContactDock";

export default function Home() {
  return (
    <ContactFormProvider>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Services />
        <WhyCodexia />
        <Process />
        <Projects />
      </main>
      <Footer />
    </ContactFormProvider>
  );
}
