"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandWordmark } from "@/components/Common/brand-wordmark";
import { CONTACT_LINKS } from "@/components/Common/contact-links";
import { getNavActiveState } from "@/components/Common/nav-active-state";
import { SmoothScrollLink } from "@/components/Common/smooth-scroll-link";

type HeroHeaderProps = {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  /** Segunda línea del logotipo. */
  subtitle?: string;
  subtitleVariant?: "italic" | "caps";
};

const NAV_LINK_BASE =
  "nav-link font-nav text-[12px] tracking-[0.2em] uppercase transition-colors";

const PROJECTS_MENU = [
  { href: "/projects/sculptures", label: "Escultura", key: "sculptures" },
  { href: "/projects/photography", label: "Fotografía", key: "photography" },
] as const;

/**
 * El color se decide aquí y no en la lista de clases: fijar siempre
 * `text-nav-ink` y añadir `text-rust` después haría depender el resultado
 * del orden en que Tailwind emite las utilidades de color.
 */
function navLinkClass(isActive: boolean) {
  return `${NAV_LINK_BASE} ${
    isActive ? "text-rust" : "text-nav-ink hover:text-rust"
  }`;
}

function dropdownItemClass(isActive: boolean) {
  return `block px-5 py-2.5 font-label text-[11px] tracking-[0.18em] uppercase transition-colors ${
    isActive
      ? "bg-paper-deep text-rust"
      : "text-ink/80 hover:bg-paper-deep hover:text-rust"
  }`;
}

export function HeroHeader({
  isMenuOpen,
  onToggleMenu,
  subtitle,
  subtitleVariant = "italic",
}: HeroHeaderProps) {
  const pathname = usePathname();
  const active = getNavActiveState(pathname);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9999] bg-nav-bg backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled
          ? "border-b border-ink/10 shadow-[0_10px_30px_rgba(42,31,26,0.07)]"
          : "border-b border-rust/12"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full items-center justify-between px-6 md:h-[92px] md:px-11">
        <Link href="/" aria-label="Inicio">
          <BrandWordmark
            subtitle={subtitle}
            subtitleVariant={subtitleVariant}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <SmoothScrollLink
            href="/about"
            aria-current={active.about ? "page" : undefined}
            className={navLinkClass(active.about)}
          >
            Sobre mí
          </SmoothScrollLink>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-current={active.projects ? "page" : undefined}
              className={`${navLinkClass(active.projects)} inline-flex items-center gap-1.5`}
            >
              Proyectos
              <svg viewBox="0 0 12 8" className="h-2 w-2.5" fill="none">
                <path
                  d="M1 1.5 6 6.5l5-5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute top-full right-0 z-50 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-48 border border-ink/12 bg-paper py-2 shadow-[0_18px_40px_rgba(42,31,26,0.12)]">
                {PROJECTS_MENU.map((item) => {
                  const isActive = active[item.key];

                  return (
                    <SmoothScrollLink
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={dropdownItemClass(isActive)}
                    >
                      {item.label}
                    </SmoothScrollLink>
                  );
                })}
              </div>
            </div>
          </div>

          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={navLinkClass(false)}
          >
            Contacto
          </a>
        </nav>

        <button
          type="button"
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-ink/25 md:hidden"
        >
          <span className="block h-px w-4 bg-ink" />
          <span className="block h-px w-4 bg-ink" />
        </button>
      </div>

      {/* Barra de progreso de lectura: sigue el scroll del documento en CSS puro. */}
      <div
        aria-hidden
        className="scroll-progress h-px w-full"
        style={{ background: "var(--brand-gradient)" }}
      />
    </header>
  );
}
