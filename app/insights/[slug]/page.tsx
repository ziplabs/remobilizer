import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { formatDate } from "@/lib/format";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const generateStaticParams = async () =>
  getAllInsights().map((insight) => ({ slug: insight.slug }));

export const generateMetadata = async ({ params }: InsightPageProps) => {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return {
      title: "Insight",
    };
  }

  return {
    title: insight.title,
    description: insight.description,
  };
};

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const diagram =
    slug === "ai-platform-strategy-standardize-vs-best-of-breed"
      ? {
          src: "/insights/standardize-best-of-breed-a.svg",
          altSrc: "/insights/standardize-best-of-breed-b.svg",
          alt: "A tradeoff line showing standardize and best-of-breed with directional cues for governance and velocity and a center node labeled as ongoing tension.",
          caption:
            "Enterprises re-open this choice as constraints shift; the center is tension, not resolution.",
        }
      : null;

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
            <span>{formatDate(insight.date)}</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--accent-olive)]" />
            <span>{insight.tags.join(" · ")}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[color:var(--accent-blue)] sm:text-5xl">
            {insight.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--muted)]">
            {insight.description}
          </p>
          {diagram && (
            <figure className="mt-10">
              <div className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)] p-4 sm:p-6">
                <img
                  src={diagram.src}
                  alt={diagram.alt}
                  className="h-auto w-full"
                  loading="eager"
                />
              </div>
              <figcaption className="mt-3 text-sm text-[color:var(--muted)]">
                {diagram.caption}
              </figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-3xl px-6 py-14">
          <div className="flex flex-col gap-6 text-[color:var(--accent-charcoal)]">
            {insight.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="mt-6 text-2xl font-semibold text-[color:var(--accent-charcoal)]"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                return (
                  <ul
                    key={`list-${index}`}
                    className="list-disc space-y-3 pl-6 text-base leading-relaxed"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`${block.text}-${index}`}
                  className="text-base leading-relaxed text-[color:var(--accent-charcoal)]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {insight.cta && (
            <div className="mt-12 border-l-4 border-[color:var(--accent-olive)] bg-[color:var(--background)] px-6 py-6">
              <p className="text-base text-[color:var(--accent-charcoal)]">
                {insight.cta.text}
              </p>
              <Link
                href={insight.cta.href}
                className="mt-4 inline-flex text-sm font-semibold text-[color:var(--accent-charcoal)] hover:text-[color:var(--accent-blue)]"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
