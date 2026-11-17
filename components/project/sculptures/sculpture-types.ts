/**
 * Datos de las piezas.
 *
 * `technicalSheet` reproduce la ficha técnica de la obra: dimensiones,
 * material, técnica y año. Se muestran al voltear la card.
 */
export interface SculptureDimensions {
  /** Alto de la pieza. */
  height: string;
  /** Ancho de la pieza. */
  width: string;
  /** Profundidad de la pieza. */
  depth: string;
}

export interface SculptureTechnicalSheet {
  dimensions: SculptureDimensions;
  material: string;
  technique: string;
  year: string;
}

export interface SculptureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  /** Ficha técnica de la obra, si existe. */
  technicalSheet?: SculptureTechnicalSheet;
}
