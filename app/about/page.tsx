import { HeroShell } from "@/components/Hero/hero-shell";
import { HeroSection } from "@/components/Hero/hero-section";
import { HeroMediaBand } from "@/components/Hero/hero-media-band";
import { AboutSection } from "@/components/About/about-section";
import { BecomePartnerSection } from "@/components/BecomePartner/become-partner-section";
import { FooterSection } from "@/components/Footer/footer-section";
import { GradientRule } from "@/components/Common/gradient-rule";
import { LanguagesSection } from "@/components/About/languages-section";
import { TrajectorySection } from "@/components/About/trajectory-section";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell />
      <HeroSection
        gradientRule={<GradientRule className="mt-8 md:mt-10 w-full" />}
        id="sobre-mi"
        tagline="SOBRE MÍ"
        showTaglineLine={true}
        darkBackground={true} // <-- Aquí activas el fondo oscuro y degradados solo para esta página
        backgroundWatermark="MCRG"
        lines={[
          <span key="1">Conoce mi trabajo</span>,
          <span key="2" className="italic text-[#C4694A]">
            y mi trayectoria
          </span>,
        ]}
        description="Soy María del Carmen Reyes Garrido, escultora y fotógrafa. Mi práctica explora la relación entre la materia, la forma y la observación."
        imageSrc="/images/about/hero-sculpture-base.jpg"
        imageAlt="Escultura con base de madera de María del Carmen"
        actions={[
          {
            kind: "hash",
            href: "#trayectoria",
            label: "Saber más",
            variant: "solid",
          },
        ]}
      />

      <HeroMediaBand
        imageSrc="/images/about/about-sculpture-featured.jpg"
        imageAlt="Obra destacada de María del Carmen"
      />
      <AboutSection
        id="trayectoria"
        tagline="SOBRE MÍ"
        showTaglinePill={true}
        eyebrow="MI PRÁCTICA ARTÍSTICA"
        lines={[
          <span key="1">Lo que empezó</span>,
          <span key="2" className="italic text-rust">
            como un sueño
          </span>,
        ]}
        descriptionTop={[
          <span key="d1">
            María del Carmen Reyes Garrido desarrolla su práctica artística a
            través de la escultura y la fotografía...
          </span>,
        ]}
        displayCard={true}
        disciplines={[
          { name: "Escultura", detail: "Materia, volumen y vacío" },
          { name: "Fotografía", detail: "Luz, encuadre y observación" },
          { name: "Proceso", detail: "Tiempo, exploración y sensibilidad" },
          { name: "Obra", detail: "Un diálogo entre la forma y la mirada" },
        ]}
        descriptionBottom={[
          <span key="d3">
            La escultura y la fotografía permiten explorar lo tangible y lo
            efímero...
          </span>,
        ]}
        actionType="download"
        actionHref="/files/cv-maria-del-carmen.pdf"
        actionLabel="Descarga mi currículum"
        showActionIcon={true} // <-- Aquí activas el círculo con el icono solo para esta página
      />
      <LanguagesSection />
      <TrajectorySection />
      <BecomePartnerSection />
      <FooterSection />
    </main>
  );
}
