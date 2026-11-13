import Link from "next/link";
import { cacheLife } from "next/cache";
import { BrandWordmark } from "@/components/Common/brand-wordmark";
import { CONTACT_LINKS } from "@/components/Common/contact-links";

const PROJECT_LINKS = [
  { href: "/projects/sculptures", label: "Escultura" },
  { href: "/projects/photography", label: "Fotografía" },
];

const CONTACT_ITEMS = [
  { href: CONTACT_LINKS.whatsapp, label: "Whatsapp" },
  { href: CONTACT_LINKS.instagram, label: "Instagram" },
  { href: CONTACT_LINKS.email, label: "Email" },
];

const SOCIALS = [
  {
    id: "instagram",
    label: "Instagram",
    short: "ig",
    href: CONTACT_LINKS.instagram,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    short: "wa",
    href: CONTACT_LINKS.whatsapp,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    short: "in",
    href: "https://linkedin.com/",
  },
  {
    id: "facebook",
    label: "Facebook",
    short: "fb",
    href: "https://facebook.com/",
  },
];

async function getCopyrightYear() {
  "use cache";
  cacheLife("max");

  return new Date().getFullYear();
}

export async function FooterSection() {
  const year = await getCopyrightYear();

  return (
    <footer className="w-full bg-paper py-14 md:py-16">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <div className="grid gap-10 md:grid-cols-[1.7fr_1fr] md:gap-16">
          <div>
            <BrandWordmark />

            <p className="mt-5 max-w-[300px] text-[13px] leading-[1.8] text-taupe">
              Desde la mirada a la materia. Escultura y fotografía en diálogo.
            </p>

            <div className="mt-9">
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                Proyectos
              </p>
              <ul className="mt-4 space-y-3">
                {PROJECT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink/80 transition-colors hover:text-rust"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div>
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                Sobre mí
              </p>
              <ul className="mt-4">
                <li>
                  <Link
                    href="/about"
                    className="text-[14px] text-ink/80 transition-colors hover:text-rust"
                  >
                    Biografía
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-9">
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                Contacto
              </p>
              <ul className="mt-4 space-y-3">
                {CONTACT_ITEMS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-ink/80 transition-colors hover:text-rust"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink/12 pt-7 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] text-taupe">
            © {year} María del Carmen Reyes Garrido · Escultura · Fotografía
          </p>

          <ul className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 font-label text-[15px] text-ink/70 transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper"
                >
                  {social.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
