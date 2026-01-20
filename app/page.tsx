import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export default function Home() {
  const [featured] = getAllInsights();

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-olive)]">
                Remobilizer Insights
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-[color:var(--accent-blue)] sm:text-6xl">
                Decision-grade writing for leaders operating under real
                constraints.
              </h1>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[color:var(--muted)]">
              <p>
                Remobilizer publishes essays on AI, enterprise software, and
                security with an emphasis on tradeoffs, execution pressure, and
                the realities leaders sign their names to.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/insights"
                  className="rounded-full bg-[color:var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-charcoal)]"
                >
                  Read the latest insights
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-[color:var(--accent-olive)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-olive)] transition hover:border-[color:var(--accent-blue)] hover:text-[color:var(--accent-blue)]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-b border-[color:var(--line)] bg-[color:var(--background)]">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
                  Featured Insight
                </h2>
                <p className="mt-2 text-[color:var(--muted)]">
                  The most recent essay, in full.
                </p>
              </div>
              <Link
                href="/insights"
                className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
              >
                View all insights
              </Link>
            </div>
            <Link
              href={`/insights/${featured.slug}`}
              className="group block border-l-4 border-[color:var(--accent-blue)] bg-[color:var(--surface)] px-8 py-10 shadow-[0_30px_60px_-50px_rgba(11,35,64,0.35)] transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
                  <span>{formatDate(featured.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-[color:var(--line)]" />
                  <span>{featured.tags.join(" · ")}</span>
                </div>
                <h3 className="text-3xl font-semibold leading-snug text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {featured.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
                  {featured.description}
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
                What we cover
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                We cover tradeoffs, hard decisions, and technology shifts that
                shape outcomes across AI, enterprise software, security, and
                operating models.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[color:var(--accent-charcoal)]">
              <p>
                The intent is to surface insights that help leaders navigate
                uncertainty, choose where to standardize versus experiment, and
                avoid avoidable failure patterns.
              </p>
              <p className="text-[color:var(--muted)]">
                Coverage is intentionally broad and rotates with what matters
                most, not a fixed set of themes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)] bg-[color:var(--background)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
              Examples of what we examine
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
              These are representative topics, not boundaries. The agenda shifts
              as the enterprise landscape shifts.
            </p>
          </div>
          <div className="grid gap-6 border-l-4 border-[color:var(--accent-olive)] bg-[color:var(--surface)] px-6 py-8 text-[color:var(--accent-charcoal)]">
            <p className="text-base leading-relaxed text-[color:var(--accent-charcoal)]">
              AI vendor consolidation, model risk governance, inference cost
              pressure, data access versus privacy constraints, security review
              bottlenecks, product and platform ownership, and M&A integration of
              AI stacks — among others.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 border-t border-[color:var(--line)] pt-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
                A place for decisions, not declarations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
                Remobilizer exists for leaders who carry accountability. The
                work is to document what breaks, what holds, and what deserves
                debate before a commitment is made.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold text-[color:var(--accent-charcoal)]">
              <Link href="/about" className="hover:text-[color:var(--accent-blue)]">
                About Remobilizer
              </Link>
              <Link href="/contact" className="hover:text-[color:var(--accent-blue)]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
