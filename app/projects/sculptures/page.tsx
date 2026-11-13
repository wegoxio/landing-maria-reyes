import { HeroSection } from "@/components/Hero/hero-section";
import { GradientRule } from "@/components/Common/gradient-rule";
import { HeroShell } from "@/components/Hero/hero-shell";
import { BecomePartnerSection } from "@/components/BecomePartner/become-partner-section";
import { FooterSection } from "@/components/Footer/footer-section";
import { SculpturesGridSection } from "@/components/project/sculptures/sculptures-grid-section";
import { HeroMediaBand } from "@/components/Hero/hero-media-band";
import { SculptureDetailsSection } from "@/components/project/sculptures/sculpture-details-section";

export default function SculpturesPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell />
      <HeroSection
        id="esculturas-hero"
        tagline="ESCULTURAS"
        showTaglineLine={true}
        lines={[
          <span key="1">Materia en</span>,
          <span key="2" className="italic text-rust">
            movimiento
          </span>,
        ]}
        description="Volúmenes, curvas y vacíos. Una colección de esculturas que explora la forma y su relación con la luz, presentada a través de suas distintas texturas y siluetas."
        imageSrc="/images/landing/hero-escultura.jpg"
        imageAlt="Escultura en tonos verdosos de María del Carmen Reyes Garrido"
        darkBackground={false}
        actions={[
          {
            kind: "hash",
            href: "#coleccion-esculturas",
            label: "Explorar esculturas",
            variant: "solid",
          },
        ]}
        className="rounded-sm!"
        gradientRule={<GradientRule className="h-3!" />}
      />
      <SculpturesGridSection gradientRule={<GradientRule className="h-3!" />} />
      <HeroMediaBand
        imageSrc="/images/landing/hero-escultura.jpg"
        imageAlt="Escultura de María del Carmen Reyes Garrido"
        gradientRule={<GradientRule className="h-3!" />}
      />
      <SculptureDetailsSection />
      <BecomePartnerSection />
      <FooterSection />
    </main>
  );
}
