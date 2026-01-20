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
                  className="rounded-full bg-[color:var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-charcoal)] hover:text-white"
                  style={{ color: "#ffffff" }}
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
              className="group block rounded-3xl border border-[color:var(--line)] bg-[color:var(--surface)] p-10 shadow-[0_22px_50px_-38px_rgba(11,35,64,0.4)] transition hover:-translate-y-1 hover:border-[color:var(--accent-blue)]"
            >
              <div className="flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
                  <span>{formatDate(featured.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-[color:var(--accent-olive)]" />
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
                Tradeoffs, hard decisions, and technology shifts that shape
                outcomes across AI, enterprise software, security, and
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
              Recent topics include
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
              Representative topics drawn from current enterprise realities.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "AI vendor consolidation",
                description:
                  "How procurement leverage, platform velocity, and lock-in risk shape the choice.",
              },
              {
                title: "Model risk governance",
                description:
                  "Accountability, lineage, and override paths that hold up under scrutiny.",
              },
              {
                title: "Inference cost pressure",
                description:
                  "Where spend accumulates and how leaders manage the curve.",
              },
              {
                title: "Security review bottlenecks",
                description:
                  "Why AI delivery slows and how teams remove friction without exposure.",
              },
              {
                title: "Data access vs. privacy",
                description:
                  "What breaks when policy meets product timelines and regulatory pressure.",
              },
              {
                title: "M&A integration of AI stacks",
                description:
                  "Duplicated platforms, fractured governance, and the cost of drift.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-[color:var(--accent-olive)]"
              >
                <h3 className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
