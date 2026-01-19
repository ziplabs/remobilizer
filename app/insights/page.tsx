import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Insights",
  description: "Executive essays on strategy, execution, and risk in the AI era.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <div className="bg-[#f6f5f1]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
          <h1 className="text-4xl font-semibold text-neutral-950 sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
            Essays on enterprise decisions where the cost of certainty is real.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="divide-y divide-neutral-200 border-t border-neutral-200 bg-white">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group block px-6 py-10 transition hover:bg-neutral-50"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                    <span>{formatDate(insight.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    <span>{insight.tags.join(" · ")}</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-neutral-950 group-hover:text-neutral-900">
                    {insight.title}
                  </h2>
                  <p className="text-base leading-relaxed text-neutral-600">
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
