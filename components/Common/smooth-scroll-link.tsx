"use client";

import { MouseEvent, type AnchorHTMLAttributes } from "react";

type SmoothScrollLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  /**
   * Ancla interna (`#seccion`) o ruta con ancla (`/#seccion`).
   * Si el destino no existe en el documento, se deja que el navegador
   * resuelva la navegación normal.
   */
  href: string;
};

export function SmoothScrollLink({
  href,
  onClick,
  children,
  ...props
}: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
