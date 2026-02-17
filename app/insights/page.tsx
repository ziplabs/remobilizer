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
            Essays on enterprise decisions where clarity matters more than
            consensus.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
          <ul className="divide-y divide-[color:var(--line)]">
            {insights.map((insight) => (
              <li key={insight.slug}>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="group flex flex-col gap-0.5 py-4 sm:flex-row sm:items-baseline sm:gap-4 sm:py-3"
                >
                  <span className="shrink-0 text-xs text-[color:var(--muted)] sm:w-24">
                    {formatDate(insight.date)}
                  </span>
                  <span className="text-base font-medium text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)] sm:text-base">
                    {insight.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
