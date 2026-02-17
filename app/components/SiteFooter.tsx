import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--surface)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-8 border-t border-[color:var(--line)] pt-10 md:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4 text-sm text-[color:var(--muted)]">
            <div className="flex items-center gap-3 text-base font-semibold text-[color:var(--accent-blue)]">
              <Image
                src="/images/site/brand/R-logo.png"
                alt="Remobilizer logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span>Remobilizer</span>
            </div>
            <p>
              Essays on AI, enterprise software, and the decisions that shape
              outcomes. Written for leaders responsible for direction and
              execution.
            </p>
            <p className="text-xs">© {new Date().getFullYear()} Remobilizer</p>
            <p className="text-xs text-[color:var(--muted)]">
              Edited by Editor. A Ziplabs project.
            </p>
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
