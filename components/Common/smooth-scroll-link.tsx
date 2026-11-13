"use client";

import React from "react";
import Link from "next/link";

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
  ...props
}: SmoothScrollLinkProps) {
  // Si el href es una ruta de navegación (ej. "/about"), usamos el Link nativo de Next.js
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }

  // Lógica existente para el scroll suave en anclas internas (ej. "#escultura")
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }
    target.scrollIntoView({
      behavior: "smooth",
    });
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
