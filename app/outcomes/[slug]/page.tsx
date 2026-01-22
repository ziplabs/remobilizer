import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/format";
import { getAllInsights } from "@/lib/insights";
import { getDecisionBySlug, type Decision } from "@/lib/decisions";
import { getOutcomeBySlug, getInsightsByOutcome, outcomes } from "@/lib/outcomes";

type OutcomePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () =>
  outcomes.map((outcome) => ({ slug: outcome.slug }));

export const generateMetadata = async ({ params }: OutcomePageProps) => {
  const { slug } = await params;
  const outcome = getOutcomeBySlug(slug);

  if (!outcome) {
    return { title: "Outcomes" };
  }

  return {
    title: `${outcome.title} | Outcomes`,
    description: outcome.shortDescription,
  };
};

export default async function OutcomePage({ params }: OutcomePageProps) {
  const { slug } = await params;
  const outcome = getOutcomeBySlug(slug);

  if (!outcome) {
    notFound();
  }

  const insights = getInsightsByOutcome(slug);
  const [featured] = getAllInsights();
  const relatedInsights =
    insights.length > 0 ? insights : featured ? [featured] : [];
  const usesPlaceholder = insights.length === 0;
  const relatedDecisions =
    outcome.relatedDecisions
      ?.map((slug) => getDecisionBySlug(slug))
      .filter((item): item is Decision => Boolean(item)) ?? [];

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-olive)]">
            Outcomes
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            {outcome.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            {outcome.longIntro ?? outcome.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-10 border-t border-[color:var(--line)] pt-10">
            {outcome.longIntro && (
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                  Why this outcome matters
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
                  {outcome.longIntro}
                </p>
              </div>
            )}

            {outcome.failurePatterns && outcome.failurePatterns.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                  Failure patterns we see
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
                  {outcome.failurePatterns.map((pattern) => (
                    <li key={pattern}>{pattern}</li>
                  ))}
                </ul>
              </div>
            )}

            {relatedDecisions.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                  Related decisions
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {relatedDecisions.map((decision) => (
                    <Link
                      key={decision.slug}
                      href={`/decisions/${decision.slug}`}
                      className="rounded-2xl bg-[color:var(--background)] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.25)] transition hover:-translate-y-1"
                    >
                      <h3 className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                        {decision.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {decision.shortDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                Related insights
              </h2>
              <div className="mt-4 grid gap-4">
                {relatedInsights.length === 0 ? (
                  <p className="text-base text-[color:var(--muted)]">
                    More essays coming.
                  </p>
                ) : (
                  relatedInsights.map((insight) => (
                    <Link
                      key={insight.slug}
                      href={`/insights/${insight.slug}`}
                      className="rounded-2xl bg-[color:var(--background)] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.25)] transition hover:-translate-y-1"
                    >
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[color:var(--muted)]">
                        <span>{formatDate(insight.date)}</span>
                        <span className="h-1 w-1 rounded-full bg-[color:var(--accent-olive)]" />
                        <span>{insight.tags.join(" · ")}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-[color:var(--accent-charcoal)]">
                        {insight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {insight.description}
                      </p>
                    </Link>
                  ))
                )}
              </div>
              {usesPlaceholder && relatedInsights.length > 0 && (
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  More essays coming.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
