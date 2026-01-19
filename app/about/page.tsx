export const metadata = {
  title: "About",
  description: "Why Remobilizer exists and the discipline it serves.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f6f5f1]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-neutral-950 sm:text-5xl">
            About Remobilizer
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Remobilizer is a publishing platform for leaders accountable for
            enterprise outcomes in the AI era.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="flex flex-col gap-6 text-base leading-relaxed text-neutral-700">
            <p>
              This site is written for executives who carry the decision, not
              the commentary. Each Insight is designed to surface tradeoffs,
              failure modes, and the questions that matter before a commitment
              is made.
            </p>
            <p>
              We avoid frameworks and prescriptive posture. The goal is clarity
              under uncertainty, not reassurance.
            </p>
            <p>
              Remobilizer is not a research archive or a consulting library. It
              is a disciplined stream of essays meant to stand up in the
              boardroom.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
