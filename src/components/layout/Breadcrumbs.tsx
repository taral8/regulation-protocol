import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <BreadcrumbSchema items={allItems} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm font-sans text-muted">
          {allItems.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-stone-300" aria-hidden="true">
                  /
                </span>
              )}
              {item.href && index < allItems.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-gold-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary-800" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
