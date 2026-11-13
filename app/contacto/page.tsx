import type { Metadata } from "next";
import { ContactSection } from "@/components/Contact/contact-section";
import { GradientRule } from "@/components/Common/gradient-rule";
import { FooterSection } from "@/components/Footer/footer-section";
import { HeroSection } from "@/components/Hero/hero-section";
import { HeroShell } from "@/components/Hero/hero-shell";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbele a María del Carmen Reyes: encargos, colaboraciones, prensa y propuestas de escultura y fotografía.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell />

      <HeroSection
        id="contacto-hero"
        tagline="CONTACTO"
        showTaglineLine={true}
        lines={[
          <span key="1">Hablemos de</span>,
          <span key="2" className="italic text-rust">
            lo que tienes en mente
          </span>,
        ]}
        description="Encantos, propuestas, prensa o unasimple conversación sobre la práctica. Cuéntame qué tienes en mente y te respondo por correo."
        imageSrc="/images/about/about-sculpture-featured.jpg"
        imageAlt="Escultura en tonos claro de María del Carmen Reyes Garrido"
        darkBackground={false}
        actions={[
          {
            kind: "hash",
            href: "#formulario",
            label: "Ir al formulario",
            variant: "solid",
          },
        ]}
        className="rounded-sm"
        gradientRule={<GradientRule className="mt-8 md:mt-10 w-full" />}
      />

      <ContactSection />

      <FooterSection />
    </main>
  );
}
