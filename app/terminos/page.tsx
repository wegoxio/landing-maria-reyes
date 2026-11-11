import type { Metadata } from "next";
import { HeroShell } from "@/components/Hero/hero-shell";
import { LegalPage } from "@/components/Common/legal-page";
import { FooterSection } from "@/components/Footer/footer-section";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso del sitio y del contenido publicado por María Reyes.",
};

const SECTIONS = [
  {
    heading: "Objeto",
    paragraphs: [
      "Estos términos regulan el acceso y uso del sitio web de María Reyes. Al navegar por el sitio aceptas las condiciones que se exponen a continuación.",
    ],
  },
  {
    heading: "Contenido informativo",
    paragraphs: [
      "La información publicada en este sitio tiene carácter orientativo y no constituye asesoramiento profesional, financiero, legal ni de ninguna otra naturaleza. Sustituye este apartado por el redactado aprobado por la asesoría legal.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      "Los textos, imágenes, marcas y demás elementos del sitio son propiedad de sus respectivos titulares. Queda prohibida su reproducción o explotación sin autorización previa y por escrito.",
    ],
  },
  {
    heading: "Enlaces de terceros",
    paragraphs: [
      "Este sitio puede incluir enlaces a contenidos de terceros sobre los que no exertsemos control. No respondemos por su contenido ni por su disponibilidad.",
    ],
  },
  {
    heading: "Limitación de responsabilidad",
    paragraphs: [
      "El uso del sitio se realiza bajo tu responsabilidad. No respondemos por daños derivados de la interrupción del servicio, de la pérdida de datos o del uso indebido del contenido publicado.",
    ],
  },
  {
    heading: "Legislación aplicable",
    paragraphs: [
      "Estos términos se rigen por la legislación aplicable en Venezuela. Cualquier controversia se someterá a los tribunales competentes de la jurisdicción del domicilio de María Reyes.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell hashPrefix="/" />

      <div className="w-full pt-[112px] md:pt-[150px]">
        <LegalPage
          title="Términos y condiciones"
          updatedAt="10 de enero de 2026"
          sections={SECTIONS}
        />
      </div>

      <FooterSection />
    </main>
  );
}
