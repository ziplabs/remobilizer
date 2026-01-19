import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export default function Home() {
  const [featured] = getAllInsights();

  return (
    <div className="bg-[#f9f8f5]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Executive Insights
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-950 sm:text-5xl">
            Remobilizer is a calm, executive-grade publishing platform for
            leaders navigating strategy, execution, and risk in the AI era.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-600">
            We publish thoughtful essays for senior executives and founders who
            need to make high-stakes decisions without defaulting to easy
            answers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/insights"
              className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Read the latest insights
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 transition hover:border-neutral-400 hover:text-neutral-950"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-b border-neutral-200/70">
          <div className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-neutral-950">
                  Featured Insight
                </h2>
                <p className="mt-2 text-neutral-600">
                  A model essay representing our editorial standard.
                </p>
              </div>
              <Link
                href="/insights"
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-950"
              >
                View all insights
              </Link>
            </div>
            <Link
              href={`/insights/${featured.slug}`}
              className="group block rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
                  <span>{formatDate(featured.date)}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>{featured.tags.join(" · ")}</span>
                </div>
                <h3 className="text-3xl font-semibold leading-snug text-neutral-950 group-hover:text-neutral-900">
                  {featured.title}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
                  {featured.description}
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-neutral-950">
                What we publish
              </h2>
              <p className="mt-3 text-neutral-600">
                Remobilizer focuses on essays that help leaders understand
                complex enterprise dynamics without requiring a framework or a
                taxonomy to be useful.
              </p>
            </div>
            <div className="grid gap-6">
              {[
                "Clear explanations of real enterprise tradeoffs and failure patterns.",
                "Plain-language analysis for executives balancing strategy, execution, and risk.",
                "Thoughtful prompts that invite discussion rather than prescribe answers.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-neutral-200 bg-white p-10">
            <h2 className="text-2xl font-semibold text-neutral-950">
              A publishing platform built for leaders
            </h2>
            <p className="mt-3 max-w-2xl text-neutral-600">
              Remobilizer exists to make executive-grade insights easy to read,
              easy to share, and easy to build on. No noise, no filler, just
              durable thinking.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-950"
              >
                Learn more about Remobilizer
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-neutral-700 hover:text-neutral-950"
              >
                Reach out with ideas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
