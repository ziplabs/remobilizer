import Link from "next/link";
import { getAllInsights } from "@/lib/insights";
import { formatDate } from "@/lib/format";

export default function Home() {
  const [featured] = getAllInsights();

  return (
    <div className="bg-[#f6f5f1]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-24">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-8">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Insights
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-neutral-950 sm:text-6xl">
                Decisions in the AI era carry real consequence.
              </h1>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-neutral-600">
              <p>
                Remobilizer exists for leaders accountable to outcomes. We
                publish essays on strategy, execution, and risk when the right
                answer is not obvious and the cost of getting it wrong is real.
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
                  Contact Remobilizer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="border-b border-neutral-200/70 bg-[#f6f5f1]">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-neutral-950">
                  Featured Insight
                </h2>
                <p className="mt-2 text-neutral-600">
                  A representative essay that sets the bar.
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
              className="group block border-l-4 border-neutral-900 bg-white px-8 py-10 shadow-[0_30px_60px_-50px_rgba(15,23,42,0.4)] transition hover:-translate-y-1"
            >
              <div className="flex flex-col gap-5">
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
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-950">
                What we publish
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Essays on real enterprise dynamics: when platform strategy
                collides with security mandates, when procurement constrains
                product velocity, when governance slows execution, and when the
                cost of indecision shows up on the balance sheet.
              </p>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-neutral-700">
              <p>
                No frameworks. No platitudes. No default posture. We document
                tradeoffs, failure modes, and the consequences leaders absorb
                when the decision is theirs to sign.
              </p>
              <p>
                This is not designed for casual consumption. It is written for
                executives who need clarity before they move.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 border-t border-neutral-200/70 pt-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="text-3xl font-semibold text-neutral-950">
                A place for decisions, not declarations.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                Remobilizer exists for leaders who carry accountability. The
                work is to document what breaks, what holds, and what leaders
                should debate before they commit.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold text-neutral-700">
              <Link href="/about" className="hover:text-neutral-950">
                Why Remobilizer exists
              </Link>
              <Link href="/contact" className="hover:text-neutral-950">
                Compare notes with Remobilizer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
