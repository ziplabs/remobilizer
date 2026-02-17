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
            Essays on enterprise decisions under real constraints.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-8 sm:py-10">
          <div className="divide-y divide-[color:var(--line)]">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block border-[color:var(--line)] py-4 first:pt-0 last:pb-0"
              >
                <p className="text-xs text-[color:var(--muted)]">
                  {formatDate(insight.date)}
                </p>
                <h2 className="mt-1 text-base font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {insight.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
