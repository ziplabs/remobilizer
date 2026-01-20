import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Remobilizer to compare notes on hard decisions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            If you are working through a complex AI-era decision, we can compare
            notes and share patterns we are seeing across the enterprise
            landscape.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-8 border-t border-[color:var(--line)] pt-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-base leading-relaxed text-[color:var(--accent-charcoal)]">
                Reach out at{" "}
                <a
                  href="mailto:contact@remobilizer.com"
                  className="font-semibold text-[color:var(--accent-blue)] hover:text-[color:var(--accent-olive)]"
                >
                  contact@remobilizer.com
                </a>
                .
              </p>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                We respond to relevant executive inquiries and specific decision
                contexts.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm font-semibold text-[color:var(--accent-charcoal)]">
              <Link href="/insights" className="hover:text-[color:var(--accent-blue)]">
                Read the latest insights
              </Link>
              <Link href="/about" className="hover:text-[color:var(--accent-blue)]">
                About Remobilizer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
