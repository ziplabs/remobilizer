import Link from "next/link";

export const metadata = {
  title: "Contact",
  description: "Contact Remobilizer with a brief note on what you are working through.",
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
            Share the context you are working through. We respond to relevant
            executive inquiries and specific decision situations.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="grid gap-10 border-t border-[color:var(--line)] pt-10 md:grid-cols-[1.2fr_0.8fr]">
            <form
              action="mailto:contact@remobilizer.com"
              method="post"
              encType="text/plain"
              className="grid gap-5"
            >
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--accent-charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-olive)]"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--accent-charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-olive)]"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  Organization
                </label>
                <input
                  name="organization"
                  type="text"
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--accent-charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-olive)]"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  Topic
                </label>
                <input
                  name="topic"
                  type="text"
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--accent-charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-olive)]"
                />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-semibold text-[color:var(--accent-charcoal)]">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--background)] px-4 py-3 text-sm text-[color:var(--accent-charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-olive)]"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex w-fit rounded-full bg-[color:var(--accent-blue)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--accent-charcoal)]"
              >
                Send message
              </button>
              <p className="text-xs text-[color:var(--muted)]">
                Submitting the form opens your email client to send the message.
              </p>
            </form>
            <div className="flex flex-col gap-4 text-sm font-semibold text-[color:var(--accent-charcoal)]">
              <Link href="/insights" className="hover:text-[color:var(--accent-blue)]">
                Latest insights
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
