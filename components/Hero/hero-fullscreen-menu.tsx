"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CONTACT_LINKS } from "@/components/Common/contact-links";

type HeroFullscreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function HeroFullscreenMenu({
  isOpen,
  onClose,
}: HeroFullscreenMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col bg-ink text-paper md:hidden">
      <div className="flex h-[76px] items-center justify-between border-b border-paper/12 px-5">
        <span className="font-label text-[12px] tracking-[0.34em] uppercase">
          María del Carmen
          <br />
          Reyes Garrido
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar menú"
          className="flex h-10 w-10 items-center justify-center border border-paper/25 text-[18px] leading-none text-paper transition-colors hover:bg-paper/10"
        >
          ×
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-8 px-5">
        <Link
          href="#about"
          onClick={onClose}
          className="font-display text-[42px] leading-none font-light text-paper"
        >
          Sobre mí
        </Link>

        <Link
          href="#servicios"
          onClick={onClose}
          className="font-display text-[42px] leading-none font-light text-paper"
        >
          Proyectos
        </Link>

        <a
          href={CONTACT_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="font-display text-[42px] leading-none font-light text-paper"
        >
          Contacto
        </a>
      </nav>

      <p className="px-5 pb-8 font-label text-[10px] tracking-[0.3em] text-paper/45 uppercase">
        Estudio de arte y diseño · Caracas
      </p>
    </div>
  );
}
