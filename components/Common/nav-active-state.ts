/**
 * Estado activo de la navegación según la ruta actual.
 *
 * La cabecera y el menú móvil consultan esta función para marcar en
 * terracota la sección en la que está el visitante: "Sobre mí" en su
 * página, "Proyectos" dentro del bloque de proyectos y, además, la
 * disciplina concreta (Escultura o Fotografía).
 */
export type NavActiveState = {
  /** Página "Sobre mí". */
  about: boolean;
  /** Cualquier página dentro del bloque "Proyectos". */
  projects: boolean;
  /** Catálogo de esculturas. */
  sculptures: boolean;
  /** Galería de fotografía. */
  photography: boolean;
};

const NO_ACTIVE_STATE: NavActiveState = {
  about: false,
  projects: false,
  sculptures: false,
  photography: false,
};

export function getNavActiveState(pathname: string | null): NavActiveState {
  if (!pathname) {
    return NO_ACTIVE_STATE;
  }

  return {
    about: pathname === "/about" || pathname.startsWith("/about/"),
    projects:
      pathname === "/projects" || pathname.startsWith("/projects/"),
    sculptures: pathname.startsWith("/projects/sculptures"),
    photography: pathname.startsWith("/projects/photography"),
  };
}
