import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageShell } from "@/components/site/PageShell";
import { serviceSlugs, services } from "@/content/services";

const contactTypeSchema = z.enum(["project", "partnership", "general"]);
const contactSearchSchema = z.object({
  type: contactTypeSchema.optional().catch("general").default("general"),
  service: z.enum(serviceSlugs).optional().catch(undefined),
});
type ContactType = z.infer<typeof contactTypeSchema>;
type FormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  budget: string;
  consent: boolean;
};

export const Route = createFileRoute("/contact")({
  validateSearch: contactSearchSchema,
  head: () => ({
    meta: [
      { title: "Contact | Codrithm" },
      {
        name: "description",
        content: "Start a project, partnership, or general inquiry with Codrithm.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const search = Route.useSearch();
  const [type, setType] = useState<ContactType>(search.type);
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    company: "",
    service: search.service ?? "",
    message: "",
    budget: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [notice, setNotice] = useState("");
  const project = type === "project";
  const partnership = type === "partnership";
  const messageLabel = project
    ? "Project description"
    : partnership
      ? "Partnership inquiry"
      : "How can we help?";

  function update(field: keyof FormValues, value: string | boolean) {
    setValues((current) => ({ ...current, [field]: value }));
  }
  function checkDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (!values.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.message.trim()) next.message = "Add a short description of your inquiry.";
    if (!values.consent) next.consent = "Confirm that Codrithm may use these details to respond.";
    setErrors(next);
    setNotice(
      Object.keys(next).length
        ? "Please review the highlighted fields."
        : "Your details look complete. Submission is not enabled yet, so nothing has been sent or stored.",
    );
  }

  return (
    <PageShell
      eyebrow="Contact"
      title="Start with the problem you want to solve."
      description="Choose the kind of inquiry, then outline what you need. This form currently checks details locally and does not submit information."
    >
      <form
        className="surface-card max-w-3xl rounded-2xl p-6 sm:p-8"
        noValidate
        onSubmit={checkDetails}
      >
        <fieldset>
          <legend className="font-display text-xl">Inquiry type</legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {(["project", "partnership", "general"] as const).map((option) => (
              <label
                key={option}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm capitalize transition-colors ${type === option ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"}`}
              >
                <input
                  className="sr-only"
                  type="radio"
                  name="type"
                  value={option}
                  checked={type === option}
                  onChange={() => {
                    setType(option);
                    setNotice("");
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            value={values.name}
            error={errors.name}
            onChange={(value) => update("name", value)}
            autoComplete="name"
          />
          <Field
            label="Email"
            type="email"
            value={values.email}
            error={errors.email}
            onChange={(value) => update("email", value)}
            autoComplete="email"
          />
          <Field
            label={partnership ? "Organization" : "Company (optional)"}
            value={values.company}
            onChange={(value) => update("company", value)}
            autoComplete="organization"
          />
          {project && (
            <label className="grid gap-2 text-sm font-medium">
              Service of interest
              <select
                className="rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                value={values.service}
                onChange={(event) => update("service", event.target.value)}
              >
                <option value="">Not sure yet</option>
                {services
                  .filter((service) => service.publishable)
                  .map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
              </select>
            </label>
          )}
          {project && (
            <label className="grid gap-2 text-sm font-medium">
              Budget range <span className="font-normal text-muted-foreground">(optional)</span>
              <select
                className="rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                value={values.budget}
                onChange={(event) => update("budget", event.target.value)}
              >
                <option value="">Prefer not to say</option>
                <option value="under-1000">Under $1,000</option>
                <option value="1000-5000">$1,000–$5,000</option>
                <option value="5000-plus">$5,000+</option>
              </select>
            </label>
          )}
        </div>
        <label className="mt-5 grid gap-2 text-sm font-medium">
          {messageLabel}
          <textarea
            className="min-h-32 rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="text-sm text-red-300">
              {errors.message}
            </span>
          )}
        </label>
        <label className="mt-5 flex gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(event) => update("consent", event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            I understand this inquiry is not being sent yet and I consent to Codrithm using these
            details to respond when a secure contact provider is configured.
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-sm text-red-300">{errors.consent}</p>}
        <button
          type="submit"
          className="mt-7 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] hover:bg-primary/90"
        >
          Check inquiry details
        </button>
        {notice && (
          <p className="mt-4 text-sm text-muted-foreground" role="status">
            {notice}
          </p>
        )}
        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          A Phase 4 submission provider needs a verified recipient, server-side validation, spam
          protection, privacy approval, and delivery testing before this form can send messages.
        </p>
      </form>
    </PageShell>
  );
}

function Field({
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replaceAll(/[^a-z]+/g, "-");
  return (
    <label className="grid gap-2 text-sm font-medium" htmlFor={id}>
      {label}
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-xl border border-border bg-background px-3 py-2.5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <span id={`${id}-error`} className="text-sm text-red-300">
          {error}
        </span>
      )}
    </label>
  );
}
