import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/format";
import { getAllInsights } from "@/lib/insights";
import { getOutcomeBySlug, type Outcome } from "@/lib/outcomes";
import { decisions, getDecisionBySlug, getInsightsByDecision } from "@/lib/decisions";

type DecisionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () =>
  decisions.map((decision) => ({ slug: decision.slug }));

export const generateMetadata = async ({ params }: DecisionPageProps) => {
  const { slug } = await params;
  const decision = getDecisionBySlug(slug);

  if (!decision) {
    return { title: "Decisions" };
  }

  return {
    title: `${decision.title} | Decisions`,
    description: decision.shortDescription,
  };
};

export default async function DecisionPage({ params }: DecisionPageProps) {
  const { slug } = await params;
  const decision = getDecisionBySlug(slug);

  if (!decision) {
    notFound();
  }

  const insights = getInsightsByDecision(slug);
  const [featured] = getAllInsights();
  const relatedInsights =
    insights.length > 0 ? insights : featured ? [featured] : [];
  const usesPlaceholder = insights.length === 0;
  const relatedOutcomes =
    decision.relatedOutcomes
      ?.map((slug) => getOutcomeBySlug(slug))
      .filter((item): item is Outcome => Boolean(item)) ?? [];
  const sections =
    decision.sections ??
    [];

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-olive)]">
            Decisions
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            {decision.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            {decision.longIntro ?? decision.shortDescription}
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-10 border-t border-[color:var(--line)] pt-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
                    {section.body}
                  </p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-base text-[color:var(--muted)]">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {relatedOutcomes.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--accent-charcoal)]">
                  Connected outcomes
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {relatedOutcomes.map((outcome) => (
                    <Link
                      key={outcome.slug}
                      href={`/outcomes/${outcome.slug}`}
                      className="rounded-2xl bg-[color:var(--background)] p-5 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.25)] transition hover:-translate-y-1"
                    >
                      <h3 className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                        {outcome.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {outcome.shortDescription}
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
