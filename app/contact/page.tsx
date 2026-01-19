import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Connect with Remobilizer to compare notes on hard decisions.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#f6f5f1]">
      <section className="border-b border-neutral-200/70 bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-neutral-950 sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-600">
            If you are working through a complex AI-era decision, we can compare
            notes and share patterns we are seeing across the enterprise
            landscape.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
            <p className="text-base leading-relaxed text-neutral-700">
              Reach out at{" "}
              <a
                href="mailto:contact@remobilizer.com"
                className="font-semibold text-neutral-900 hover:text-neutral-700"
              >
                contact@remobilizer.com
              </a>
              .
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              We respond to relevant executive inquiries and specific decision
              contexts.
            </p>
            <Link
              href="/insights"
              className="mt-6 inline-flex text-sm font-semibold text-neutral-700 hover:text-neutral-950"
            >
              Read the latest insights
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
