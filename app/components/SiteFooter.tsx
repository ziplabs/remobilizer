import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 border-t border-[color:var(--line)] pt-10 md:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4 text-sm text-[color:var(--muted)]">
            <p className="text-base font-semibold text-[color:var(--accent-charcoal)]">
              Remobilizer
            </p>
            <p>
              Essays on AI, enterprise software, and the decisions that shape
              outcomes. Written for leaders who carry accountability.
            </p>
            <p className="text-xs">© {new Date().getFullYear()} Remobilizer</p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-semibold text-[color:var(--accent-charcoal)]">
            <Link href="/insights" className="hover:text-[color:var(--accent-olive)]">
              Insights
            </Link>
            <Link href="/about" className="hover:text-[color:var(--accent-olive)]">
              About
            </Link>
            <Link href="/contact" className="hover:text-[color:var(--accent-olive)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
