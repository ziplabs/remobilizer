import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";
import { formatDate } from "@/lib/format";

type InsightPageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = async () =>
  getAllInsights().map((insight) => ({ slug: insight.slug }));

export const generateMetadata = ({ params }: InsightPageProps) => {
  const insight = getInsightBySlug(params.slug);

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

export default function InsightPage({ params }: InsightPageProps) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <div className="bg-[#f9f8f5]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
            <span>{formatDate(insight.date)}</span>
            <span className="h-1 w-1 rounded-full bg-neutral-300" />
            <span>{insight.tags.join(" · ")}</span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            {insight.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {insight.description}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-3xl px-6 py-14">
          <div className="flex flex-col gap-6 text-neutral-700">
            {insight.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.text}-${index}`}
                    className="mt-6 text-2xl font-semibold text-neutral-900"
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
                  className="text-base leading-relaxed"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {insight.cta && (
            <div className="mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <p className="text-base text-neutral-700">{insight.cta.text}</p>
              <Link
                href={insight.cta.href}
                className="mt-4 inline-flex text-sm font-semibold text-neutral-700 hover:text-neutral-950"
              >
                Contact Remobilizer
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
