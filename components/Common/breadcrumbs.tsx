import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Migas de pan" className="flex">
      <ol className="inline-flex items-center space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="font-label text-[10px] tracking-[0.2em] text-taupe/60">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="font-label text-[10px] tracking-[0.2em] text-taupe uppercase transition-colors hover:text-rust"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-label text-[10px] tracking-[0.2em] text-rust uppercase">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
