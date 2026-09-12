import Link from "next/link";

export interface Crumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** "dark" for the hero bands, "light" for plain page backgrounds. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Visual breadcrumb trail. BreadcrumbList JSON-LD lives in <BreadcrumbSchema />
 * (components/shared/SEO.tsx) so the site URL has a single source of truth.
 */
export default function Breadcrumbs({
  items,
  tone = "light",
  className = "",
}: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className={`vg-breadcrumb ${className}`.trim()}
      data-tone={tone}
      aria-label="Breadcrumb"
    >
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href}>
              {i > 0 && (
                <span className="crumb-sep" aria-hidden="true">
                  <i className="fas fa-chevron-right"></i>
                </span>
              )}
              {isLast ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className={i === 0 ? "crumb-home" : ""}>
                  {i === 0 && <i className="fas fa-house" aria-hidden="true"></i>}
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
