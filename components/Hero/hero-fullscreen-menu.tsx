"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CONTACT_PAGE_PATH } from "@/components/Common/contact-links";
import { getNavActiveState } from "@/components/Common/nav-active-state";

type HeroFullscreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MENU_ITEM_BASE =
  "menu-item font-display text-[42px] leading-none font-light transition-colors";

/**
 * Igual que en la cabecera, el color se elige en un solo sitio: la sección
 * activa se pinta en terracota y el resto en papel.
 */
function menuItemClass(isActive: boolean) {
  return `${MENU_ITEM_BASE} ${isActive ? "text-rust" : "text-paper"}`;
}

export function HeroFullscreenMenu({
  isOpen,
  onClose,
}: HeroFullscreenMenuProps) {
  const pathname = usePathname();
  const active = getNavActiveState(pathname);

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

      <nav className="flex flex-1 flex-col justify-center gap-6 px-5">
        <Link
          href="/about"
          onClick={onClose}
          aria-current={active.about ? "page" : undefined}
          className={menuItemClass(active.about)}
        >
          Sobre mí
        </Link>

        <Link
          href="/projects/sculptures"
          onClick={onClose}
          aria-current={active.sculptures ? "page" : undefined}
          className={menuItemClass(active.sculptures)}
        >
          Escultura
        </Link>

        <Link
          href="/projects/photography"
          onClick={onClose}
          aria-current={active.photography ? "page" : undefined}
          className={menuItemClass(active.photography)}
        >
          Fotografía
        </Link>

        <Link
          href={CONTACT_PAGE_PATH}
          onClick={onClose}
          aria-current={active.contacto ? "page" : undefined}
          className={menuItemClass(active.contacto)}
        >
          Contacto
        </Link>
      </nav>

      <p className="px-5 pb-8 font-label text-[10px] tracking-[0.3em] text-paper/45 uppercase">
        Estudio de arte y diseño · Caracas
      </p>
    </div>
  );
}
