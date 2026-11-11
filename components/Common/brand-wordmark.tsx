type BrandWordmarkProps = {
  className?: string;
  /** Segunda línea opcional (subtítulo del estudio). */
  subtitle?: string;
  subtitleVariant?: "italic" | "caps";
};

/**
 * Logotipo: "María del Carmen / Reyes Garrido".
 * Se usa en el header y en el pie de página.
 */
export function BrandWordmark({
  className = "",
  subtitle,
  subtitleVariant = "italic",
}: BrandWordmarkProps) {
  return (
    <span className={`flex flex-col ${className}`}>
      <span className="font-label text-[13px] leading-[1.5] tracking-[0.24em] text-ink uppercase md:text-[14px]">
        María del Carmen
        <br />
        Reyes Garrido
      </span>

      {subtitle ? (
        <span
          className={
            subtitleVariant === "caps"
              ? "mt-2 font-label text-[10px] tracking-[0.28em] text-ink/55 uppercase"
              : "mt-2 font-display text-[15px] italic text-rust"
          }
        >
          {subtitle}
        </span>
      ) : null}
    </span>
  );
}
