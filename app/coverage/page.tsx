export const metadata = {
  title: "Coverage",
  description: "How Remobilizer approaches enterprise decision topics.",
};

export default function CoveragePage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Coverage
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            Remobilizer examines decisions that shape enterprise outcomes in the
            AI era.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-10 border-t border-[color:var(--line)] pt-10">
            <div className="space-y-6 text-base leading-relaxed text-[color:var(--accent-charcoal)]">
              <p>
                The focus is on tradeoffs and decision pressure: where platform
                strategy meets procurement reality, where security review shapes
                delivery speed, and where product commitments collide with data
                constraints.
              </p>
              <p>
                We do not publish frameworks or playbooks. We document how
                leaders weigh optionality, risk, and accountability when the
                answer is not obvious and the consequences are measurable.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Platform strategy and consolidation",
                  detail:
                    "Standardize versus best-of-breed, vendor leverage, and operational ownership.",
                },
                {
                  title: "Security, governance, and model risk",
                  detail:
                    "Auditability, lineage, human override, and regulatory exposure.",
                },
                {
                  title: "Cost, scale, and unit economics",
                  detail:
                    "Inference spend, tooling sprawl, and the true cost of speed.",
                },
                {
                  title: "Operating model and accountability",
                  detail:
                    "Who owns decisions, how incentives align, and where friction accumulates.",
                },
                {
                  title: "Product, GTM, and adoption pressure",
                  detail:
                    "Execution risk when customer timelines outpace platform readiness.",
                },
                {
                  title: "M&A integration and platform drift",
                  detail:
                    "Duplicated stacks, fragmented governance, and long-tail risk.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--background)] p-6"
                >
                  <h2 className="text-base font-semibold text-[color:var(--accent-charcoal)]">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-[color:var(--muted)]">
              Coverage shifts with the market. Essays are selected for relevance
              to enterprise leadership decisions, not for topical breadth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
