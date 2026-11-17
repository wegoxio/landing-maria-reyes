type BrandWordmarkProps = {
  className?: string;
  /** Segunda línea opcional (subtítulo del estudio). */
  subtitle?: string;
  subtitleVariant?: "italic" | "caps";
};

/**
 * Logotipo: "María del Carmen / Reyes Garrido".
 * Se usa en el header y en el pie de página.
 *
 * Va en negrita y con un cuerpo mayor que el de una etiqueta normal porque es
 * el nombre de la artista: tiene que leerse de un vistazo, sinforzar la
 * vista. Es el texto que menos se puede permitir ser pequeño.
 */
export function BrandWordmark({
  className = "",
  subtitle,
  subtitleVariant = "italic",
}: BrandWordmarkProps) {
  return (
    <span className={`flex flex-col ${className}`}>
      <span className="font-label text-[15px] leading-[1.45] font-semibold tracking-[0.2em] text-ink uppercase md:text-[17px]">
        María del Carmen
        <br />
        Reyes Garrido
      </span>

      {subtitle ? (
        <span
          className={
            subtitleVariant === "caps"
              ? "mt-2 font-label text-[12px] font-medium tracking-[0.24em] text-ink/55 uppercase"
              : "mt-2 font-display text-[17px] italic text-rust"
          }
        >
          {subtitle}
        </span>
      ) : null}
    </span>
  );
}
