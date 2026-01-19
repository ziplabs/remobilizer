import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/70 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-12 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Remobilizer — Essays on strategy, execution, and risk in the AI era.</p>
        <div className="flex flex-wrap items-center gap-4 text-neutral-700">
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
