"use client";

import { useState } from "react";
import { HeroFullscreenMenu } from "./hero-fullscreen-menu";
import { HeroHeader } from "./hero-header";

type HeroShellProps = {
  /** Segunda línea del logotipo. */
  subtitle?: string;
  subtitleVariant?: "italic" | "caps";
};

export function HeroShell({
  subtitle,
  subtitleVariant = "italic",
}: HeroShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeroHeader
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((current) => !current)}
        subtitle={subtitle}
        subtitleVariant={subtitleVariant}
      />

      <HeroFullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
