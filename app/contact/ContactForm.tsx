"use client";

import { useEffect, useRef } from "react";

const FALLBACK_REDIRECT = "https://remobilizer.com/contact?sent=1";

export default function ContactForm() {
  const redirectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && redirectRef.current) {
      redirectRef.current.value = `${window.location.origin}/contact?sent=1`;
    }
  }, []);

  return (
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
        ref={redirectRef}
        type="hidden"
        name="redirect"
        defaultValue={FALLBACK_REDIRECT}
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
    </form>
  );
}
