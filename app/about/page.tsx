export const metadata = {
  title: "About",
  description: "Why Remobilizer exists and what it is built to support.",
};

export default function AboutPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-20">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            About Remobilizer
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[color:var(--muted)]">
            Remobilizer is a publishing platform focused on enterprise decisions
            in the AI era. It is a working library of decision-grade essays on AI,
            enterprise software, security, and operating models under real constraints.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--muted)]">
            The site is written for leaders who carry the decision, not the
            commentary. Each Insight surfaces tradeoffs, second-order effects, and
            the questions that matter before a commitment is made.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="max-w-2xl space-y-6 border-t border-[color:var(--line)] pt-12 text-base leading-relaxed text-[color:var(--accent-charcoal)]">
            <p>
              The purpose is clarity under uncertainty. We focus on what
              shifts outcomes when complexity is real and time is short.
            </p>
            <p className="text-[color:var(--muted)]">
              Remobilizer is not a research archive or a consulting library.
              It is a disciplined stream of essays meant to stand up in the
              room where decisions are made.
            </p>
            <p>
              The scope is intentionally broad, spanning AI, enterprise
              software, security, operating models, and the mechanics of
              execution. The essays are written to be useful when concrete
              choices are on the table—platform, build vs buy, operating
              model—and to hold up when scrutinized by people who live the
              tradeoffs.
            </p>
            <p className="text-[color:var(--muted)]">
              The content reflects constraints and tradeoffs encountered in
              real deployments and operating contexts, so it stays practical
              rather than theoretical.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
