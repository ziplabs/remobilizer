import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { decisions } from "@/lib/decisions";

export const metadata = {
  title: "Decisions",
  description:
    "Decisions represent recurring pressure points leaders keep navigating.",
};

export default function DecisionsPage() {
  const latestInsights = getAllInsights().slice(0, 3);

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Decisions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            Decisions highlight recurring pressure points. Each view connects to
            the Insights where those decisions show up.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-8 border-t border-[color:var(--line)] pt-10 sm:grid-cols-2">
            {decisions.map((decision) => (
              <Link
                key={decision.slug}
                href={`/decisions/${decision.slug}`}
                className="group rounded-2xl bg-[color:var(--background)] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
              >
                <h2 className="text-base font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {decision.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {decision.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--background)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
              Latest insights
            </h2>
            <Link
              href="/insights"
              className="text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
            >
              See all
            </Link>
          </div>
          <div className="mt-6 grid gap-4">
            {latestInsights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="flex flex-col gap-2 rounded-2xl bg-[color:var(--surface)] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.25)] transition hover:-translate-y-1"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--muted)]">
                  <span>{formatDate(insight.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-[color:var(--accent-olive)]" />
                  <span>{insight.tags.join(" · ")}</span>
                </div>
                <h3 className="text-base font-semibold text-[color:var(--accent-charcoal)]">
                  {insight.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
