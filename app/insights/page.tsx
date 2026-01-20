import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Insights",
  description: "Essays on AI, enterprise software, and decision-making under pressure.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
            Essays on enterprise decisions where clarity matters more than
            consensus.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6 shadow-[0_18px_40px_-36px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-[color:var(--accent-blue)]"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
                    <span>{formatDate(insight.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-[color:var(--line)]" />
                    <span>{insight.tags.join(" · ")}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                    {insight.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[color:var(--muted)]">
                    {insight.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
