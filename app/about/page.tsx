export const metadata = {
  title: "About",
  description: "What Remobilizer is and the editorial intent behind it.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f9f8f5]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-neutral-950 sm:text-5xl">
            About Remobilizer
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Remobilizer is an operator-grade publishing platform for senior
            leaders navigating AI-era strategy, execution, and risk.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-neutral-700">
            <p>
              We write for executives who are accountable for outcomes, not just
              analysis. Each Insight is built to surface tradeoffs, failure
              patterns, and questions worth debating in the boardroom or the
              leadership team.
            </p>
            <p>
              The tone is intentionally calm and precise. We avoid frameworks
              that ask readers to learn new vocabulary before the content is
              useful. The goal is clarity, not spectacle.
            </p>
            <p>
              Remobilizer is not a research archive or a consulting library. It
              exists to publish a small number of high-quality essays that help
              leaders make better decisions in complex, rapidly shifting
              enterprise contexts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
