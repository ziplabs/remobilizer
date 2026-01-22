import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/format";
import { getInsightsByTopic, getTopicBySlug, topics } from "@/lib/topics";

type TopicPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () =>
  topics.map((topic) => ({ slug: topic.slug }));

export const generateMetadata = ({ params }: TopicPageProps) => {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    return { title: "Shaping Outcomes" };
  }

  return {
    title: `${topic.title} | Shaping Outcomes`,
    description: topic.description,
  };
};

export default function TopicPage({ params }: TopicPageProps) {
  const topic = getTopicBySlug(params.slug);

  if (!topic) {
    notFound();
  }

  const insights = getInsightsByTopic(params.slug);

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-olive)]">
            Shaping Outcomes
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            {topic.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            {topic.description}
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-6 border-t border-[color:var(--line)] pt-10">
            {insights.length === 0 ? (
              <p className="text-base text-[color:var(--muted)]">
                No Insights have been published in this area yet.
              </p>
            ) : (
              insights.map((insight) => (
                <Link
                  key={insight.slug}
                  href={`/insights/${insight.slug}`}
                  className="group rounded-2xl bg-[color:var(--background)] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
                >
                  <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
                    <span>{formatDate(insight.date)}</span>
                    <span className="h-1 w-1 rounded-full bg-[color:var(--accent-olive)]" />
                    <span>{insight.tags.join(" · ")}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                    {insight.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[color:var(--muted)]">
                    {insight.description}
                  </p>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
