import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { outcomes } from "@/lib/outcomes";
import { decisions } from "@/lib/decisions";

export default function Home() {
  const [featured] = getAllInsights();

  return (
    <div className="bg-[color:var(--background)]">
      <section className="hero-texture border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-28">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-olive)]">
                Remobilizer
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-[color:var(--accent-blue)] sm:text-6xl">
                Decision-grade thinking for operating leaders.
              </h1>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[color:var(--muted)]">
              <p className="max-w-2xl">
                AI and enterprise platforms—examined through real execution
                constraints and outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/insights"
                  className="rounded-full bg-[color:var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-charcoal)] hover:text-white"
                  style={{ color: "#ffffff" }}
                >
                  Latest insights
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
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
                  Featured Insight
                </h2>
                <p className="mt-2 text-[color:var(--muted)]">
                  An essay shaping our current point of view.
                </p>
              </div>
              <Link
                href="/insights"
                className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
              >
                See all
              </Link>
            </div>
            <Link
              href={`/insights/${featured.slug}`}
              className="group block rounded-3xl bg-[color:var(--surface)] p-10 shadow-[0_18px_40px_-28px_rgba(11,35,64,0.3)] transition hover:-translate-y-1 hover:shadow-[0_26px_55px_-32px_rgba(11,35,64,0.35)]"
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
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
                Outcomes
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[color:var(--muted)]">
                Outcomes represent what leaders are accountable for. Each lens
                connects to Insights where those results are shaped.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-[color:var(--accent-charcoal)]">
              <p>
                Explore the outcomes that surface most often in enterprise AI
                adoption, platform strategy, and governance decisions.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {outcomes.slice(0, 4).map((outcome) => (
                  <Link
                    key={outcome.slug}
                    href={`/outcomes/${outcome.slug}`}
                    className="rounded-2xl bg-[color:var(--background)] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.22)] transition hover:-translate-y-1"
                  >
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--accent-charcoal)]">
                      {outcome.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                      {outcome.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
              <div>
                <a
                  href="/outcomes"
                  className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--line)] bg-[color:var(--background)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
          <div className="mb-8 flex flex-col gap-3">
            <h2 className="text-3xl font-semibold text-[color:var(--accent-blue)]">
              Decisions
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
              Recurring decision pressure points leaders keep navigating.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {decisions.slice(0, 6).map((decision) => (
              <Link
                key={decision.slug}
                href={`/decisions/${decision.slug}`}
                className="rounded-2xl bg-[color:var(--surface)] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.3)]"
              >
                <h3 className="text-base font-semibold text-[color:var(--accent-charcoal)]">
                  {decision.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {decision.shortDescription}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/decisions"
              className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
            >
              See more
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
