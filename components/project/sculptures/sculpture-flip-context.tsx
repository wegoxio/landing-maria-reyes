"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/**
 * Estado compartido del volteado de las fichas técnicas.
 *
 * Vive en un contexto porque dos partes de la página necesitan hablar:
 * el botón de cada card (que voltea la suya) y el botón "Ver obra" de la
 * sección de detalle (que sube a una card concreta y la voltea).
 */
type SculptureFlipContextValue = {
  /** Id de la card que ahora mismo muestra su reverso. */
  flippedId: string | null;
  /** Voltea la card indicada, o la devuelve a su estado inicial. */
  toggle: (id: string) => void;
  /** Voltea la card indicada sin alternar: siempre muestra su reverso. */
  flip: (id: string) => void;
};

const SculptureFlipContext = createContext<SculptureFlipContextValue | null>(
  null,
);

export function SculptureFlipProvider({ children }: { children: ReactNode }) {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setFlippedId((current) => (current === id ? null : id));
  }, []);

  const flip = useCallback((id: string) => {
    setFlippedId(id);
  }, []);

  const value = useMemo(
    () => ({ flippedId, toggle, flip }),
    [flippedId, toggle, flip],
  );

  return (
    <SculptureFlipContext.Provider value={value}>
      {children}
    </SculptureFlipContext.Provider>
  );
}

export function useSculptureFlip() {
  const context = useContext(SculptureFlipContext);

  if (!context) {
    throw new Error(
      "useSculptureFlip debe usarse dentro de SculptureFlipProvider",
    );
  }

  return context;
}
