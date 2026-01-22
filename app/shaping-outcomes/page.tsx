import Link from "next/link";
import { topics } from "@/lib/topics";

export const metadata = {
  title: "Shaping Outcomes",
  description: "Editorial topics that define how enterprise outcomes are shaped.",
};

export default function ShapingOutcomesPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Shaping Outcomes
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            A focused view into the decision domains that most influence
            enterprise outcomes in the AI era.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-8 border-t border-[color:var(--line)] pt-10 sm:grid-cols-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/shaping-outcomes/${topic.slug}`}
                className="group rounded-2xl bg-[color:var(--background)] p-6 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.2)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_-26px_rgba(15,23,42,0.28)]"
              >
                <h2 className="text-base font-semibold text-[color:var(--accent-charcoal)] group-hover:text-[color:var(--accent-blue)]">
                  {topic.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
