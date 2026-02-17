export const metadata = {
  title: "Contact",
  description: "Contact Remobilizer with a brief note on what you are working through.",
};

type ContactPageProps = {
  searchParams: Promise<{ sent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const sent = params?.sent === "1";

  return (
    <div className="bg-[color:var(--background)]">
      <section className="border-b border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-16">
          <h1 className="text-4xl font-semibold text-[color:var(--accent-blue)] sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            For correspondence—or to share context in response to an
            essay—send a note.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--surface)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14">
          <div className="border-t border-[color:var(--line)] pt-10">
            {sent && (
              <p className="mb-8 text-sm text-[color:var(--accent-charcoal)]">
                Message sent.
              </p>
            )}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="grid gap-5"
            >
              <input
                type="hidden"
                name="access_key"
                value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""}
              />
              <input type="hidden" name="subject" value="Remobilizer — Contact" />
              <input type="hidden" name="from_name" value="Remobilizer" />
              <input
                type="hidden"
                name="redirect"
                value="https://remobilizer.com/contact?sent=1"
              />
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                aria-hidden="true"
              />
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
                Messages are sent directly and reviewed periodically.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
