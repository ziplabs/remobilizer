import ContactForm from "./ContactForm";

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
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
