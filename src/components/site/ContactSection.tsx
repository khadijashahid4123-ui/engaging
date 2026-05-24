import { useState } from "react";
import { z } from "zod";

const WEB3FORMS_ACCESS_KEY = "0c72d3f7-af5f-4493-a91a-ce60a75f890e";

const Schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...parsed.data,
        }),
      });

      const result = (await res.json()) as { success?: boolean; message?: string };

      if (!res.ok || !result.success) {
        throw new Error(result.message ?? "Request failed");
      }

      setSuccessMessage("Message sent! We'll be in touch shortly.");
      form.reset();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not send your message. Please try again.";
      setErrorMessage(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center font-display text-3xl md:text-4xl font-bold text-foreground">
          Contact Us
        </h2>
        <form
          onSubmit={onSubmit}
          className="mt-10 grid gap-4 rounded-2xl border border-border bg-background p-6 md:p-8 shadow-sm"
        >
          {successMessage && (
            <p
              role="status"
              className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
            >
              {successMessage}
            </p>
          )}
          {errorMessage && (
            <p
              role="alert"
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              {errorMessage}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" placeholder="Full Name" disabled={submitting} />
            <Field name="email" type="email" placeholder="Email Address" disabled={submitting} />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            disabled={submitting}
            className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  disabled,
}: {
  name: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-60"
    />
  );
}
