import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Insights", href: "/insights" },
  { label: "Outcomes", href: "/outcomes" },
  { label: "Decisions", href: "/decisions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="h-[3px] w-full bg-[color:var(--accent-olive)]" />
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[color:var(--accent-blue)]"
        >
          <Image
            src="/images/site/brand/R-logo.png"
            alt="Remobilizer logo"
            width={44}
            height={44}
            className="h-[44px] w-[44px]"
            priority
          />
          <span>Remobilizer</span>
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-[color:var(--accent-charcoal)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--accent-olive)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
