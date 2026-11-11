import type { Metadata } from "next";
import { HeroShell } from "@/components/Hero/hero-shell";
import { LegalPage } from "@/components/Common/legal-page";
import { FooterSection } from "@/components/Footer/footer-section";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Cómo se tratan y protegen los datos personales enviados a través de este sitio.",
};

const SECTIONS = [
  {
    heading: "Responsable del tratamiento",
    paragraphs: [
      "Identifica a María del Carmen Reyes Garrido como responsable del tratamiento de los datos personales que nos facilitas a través de los canales de contacto de este sitio.",
      "Sustituye este párrafo por los datos de identidad fiscal, domicilio y correo electrónico de contacto.",
    ],
  },
  {
    heading: "Datos que recabamos",
    paragraphs: [
      "Cuando utilizas los canales de contacto recabamos los datos que nos compartes: tu nombre, tu correo electrónico, el teléfono que nos indiques y el contenido de tu mensaje.",
      "No recabamos categorías especiales de datos personales ni información sobre menores de edad.",
    ],
  },
  {
    heading: "Finalidad y base jurídica",
    paragraphs: [
      "Los datos se utilizan únicamente para responder tu solicitud y mantener la comunicación derivada de ella. La base jurídica es tu consentimiento, que otorgas al escribirnos.",
    ],
  },
  {
    heading: "Conservación y destinatarios",
    paragraphs: [
      "Los datos se conservan durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos exigidos por la normativa aplicable.",
      "No se ceden datos a terceros con fines comerciales.",
    ],
  },
  {
    heading: "Tus derechos",
    paragraphs: [
      "Puedes solicitar el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos escribiendo a correo@ejemplo.com. Responderemos en el plazo máximo de un mes.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <HeroShell hashPrefix="/" />

      <div className="w-full pt-[112px] md:pt-[150px]">
        <LegalPage
          title="Política de privacidad"
          updatedAt="10 de enero de 2026"
          sections={SECTIONS}
        />
      </div>

      <FooterSection />
    </main>
  );
}
