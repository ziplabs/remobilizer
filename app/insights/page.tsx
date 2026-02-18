import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Insights",
  description: "Essays on AI, enterprise software, and enterprise decisions.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:py-14">
          <h1 className="text-3xl font-semibold text-[color:var(--accent-blue)] sm:text-4xl">
            Insights
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color:var(--muted)]">
            Decision-grade essays on AI and enterprise platforms under real constraints.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-10 sm:py-12">
          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition hover:border-[color:var(--accent-charcoal)] hover:bg-[color:var(--background)]"
              >
                <p className="text-xs text-[color:var(--muted)]">
                  Operator Lens • {formatDate(insight.date)}
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-snug text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {insight.title}
                </h2>
                {insight.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {insight.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
