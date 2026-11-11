import { Breadcrumbs } from "@/components/Common/breadcrumbs";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updatedAt, sections }: LegalPageProps) {
  return (
    <div className="w-full bg-paper py-14 md:py-20">
      <div className="mx-auto w-full max-w-[840px] px-5 md:px-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: title }]} />

        <h1 className="mt-8 font-display text-[38px] leading-[1.08] font-light text-ink sm:text-[46px] md:text-[56px]">
          {title}
        </h1>

        <p className="mt-4 font-label text-[10px] tracking-[0.24em] text-taupe uppercase">
          Última actualización: {updatedAt}
        </p>

        <span className="mt-8 block h-px w-full bg-ink/12" />

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-[24px] leading-tight font-light text-ink md:text-[28px]">
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[15px] leading-[1.85] text-taupe"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <p className="mt-12 border-l-2 border-rust bg-paper-deep/50 px-5 py-4 text-[14px] leading-[1.7] text-taupe">
          Texto pendiente de revisión jurídica. Sustituye este documento por la
          versión final firmada por la asesoría legal.
        </p>
      </div>
    </div>
  );
}
