import { HeroShell } from "@/components/Hero/hero-shell";
import { HeroSection } from "@/components/Hero/hero-section";
import { HeroStatement } from "@/components/Hero/hero-statement";
import { HeroMediaBand } from "@/components/Hero/hero-media-band";
import { AboutSection } from "@/components/About/about-section";
import { PlatformSection } from "@/components/Platform/platform-section";
import { BecomePartnerSection } from "@/components/BecomePartner/become-partner-section";
import { FooterSection } from "@/components/Footer/footer-section";

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell />
      <HeroSection />
      <HeroStatement />
      <HeroMediaBand />
      <AboutSection />
      <PlatformSection />
      <BecomePartnerSection />
      <FooterSection />
    </main>
  );
}
