import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

const LATEST_COUNT = 6;

export default function Home() {
  const allInsights = getAllInsights();
  const [featured, ...rest] = allInsights;
  const latest = rest.slice(0, LATEST_COUNT);

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
                  href="/about"
                  className="rounded-full border border-[color:var(--accent-olive)] px-6 py-3 text-sm font-semibold text-[color:var(--accent-olive)] transition hover:border-[color:var(--accent-blue)] hover:text-[color:var(--accent-blue)]"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-b border-[color:var(--line)] bg-[color:var(--background)]">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--accent-olive)]">
              Featured
            </span>
            <Link
              href={`/insights/${featured.slug}`}
              className="group mt-4 block"
            >
              <div className="space-y-6">
                <p className="text-sm text-[color:var(--muted)]">
                  {formatDate(featured.date)}
                </p>
                <h2 className="text-3xl font-semibold leading-tight text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)] sm:text-4xl">
                  {featured.title}
                </h2>
                {featured.description && (
                  <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
                    {featured.description}
                  </p>
                )}
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="mb-10 text-2xl font-semibold text-[color:var(--accent-blue)]">
            Latest insights
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {latest.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block rounded-2xl bg-[color:var(--background)] p-6 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.22)] transition hover:-translate-y-0.5"
              >
                <p className="text-xs text-[color:var(--muted)]">
                  {formatDate(insight.date)}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {insight.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/insights"
              className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
            >
              View all insights →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
