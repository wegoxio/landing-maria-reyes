import { FooterSection } from "@/components/Footer/footer-section";
import { HeroSection } from "@/components/Hero/hero-section";
import { HeroShell } from "@/components/Hero/hero-shell";
import { PhotographyGallerySection } from "@/components/project/photography/photography-gallery-section";
import { PhotographySeriesSection } from "@/components/project/photography/photography-series-section";

export default function PhotographyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell />
      <HeroSection
        id="fotografia-hero"
        tagline="PROYECTOS · FOTOGRAFÍA"
        showTaglineLine={true}
        darkBackground={true}
        fullBackgroundImage={true}
        lightTaglineOnDark={true}
        lines={[
          <span key="1" className="text-white">
            Una mirada
          </span>,
          <span key="2" className="text-white">
            al mundo
          </span>,
          <span key="3" className="italic text-white">
            en imágenes
          </span>,
        ]}
        description="Paisajes, encuentros y vida cotidiana. Diez series para recorrer distintas formas de mirar el mundo."
        imageSrc="/images/project/photography/hero-photograph.jpg"
        imageAlt="Una mirada al mundo en imágenes"
        actions={[
          {
            kind: "hash",
            href: "#galeria",
            label: "Ver galería",
            variant: "outline",
          },
        ]}
      />
      <PhotographySeriesSection />
      <PhotographyGallerySection />
      <FooterSection />
    </main>
  );
}
