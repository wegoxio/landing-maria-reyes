"use client";

import { useEffect, useState } from "react";
import { HeroFullscreenMenu } from "./hero-fullscreen-menu";
import { HeroHeader } from "./hero-header";
import { OPEN_HERO_MENU_EVENT } from "./hero-menu-events";

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

  useEffect(() => {
    const onOpenMenu: EventListener = () => {
      setIsMenuOpen(true);
    };

    window.addEventListener(OPEN_HERO_MENU_EVENT, onOpenMenu);

    return () => {
      window.removeEventListener(OPEN_HERO_MENU_EVENT, onOpenMenu);
    };
  }, []);

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
