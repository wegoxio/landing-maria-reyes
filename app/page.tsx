import type { Metadata } from "next";
import { HeroShell } from "@/components/Hero/hero-shell";
import { HeroSection } from "@/components/Hero/hero-section";
import { HeroStatement } from "@/components/Hero/hero-statement";
import { HeroMediaBand } from "@/components/Hero/hero-media-band";
import { AboutSection } from "@/components/About/about-section";
import { PlatformSection } from "@/components/Platform/platform-section";
import { BecomePartnerSection } from "@/components/BecomePartner/become-partner-section";
import { FooterSection } from "@/components/Footer/footer-section";
import { SITE_DESCRIPTION, SITE_TITLE, pageMetadata } from "@/app/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  absolute: true,
});

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
