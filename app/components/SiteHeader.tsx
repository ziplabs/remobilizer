import Link from "next/link";

const navItems = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--accent-olive)]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Remobilizer
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[color:var(--accent-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
