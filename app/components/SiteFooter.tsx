import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Remobilizer — Insights on AI, enterprise software, and strategy.</p>
        <div className="flex flex-wrap items-center gap-4 text-[color:var(--accent-charcoal)]">
          <Link href="/insights" className="hover:text-neutral-950">
            Insights
          </Link>
          <Link href="/about" className="hover:text-neutral-950">
            About
          </Link>
          <Link href="/contact" className="hover:text-neutral-950">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
