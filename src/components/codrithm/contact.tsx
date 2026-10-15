import { useState, type FormEvent } from "react";
import { z } from "zod";
import { HeroHeading } from "./motion";
import { SERVICES } from "./site";

export function ContactHero() {
  return (
    <section id="home" className="relative overflow-hidden hero-wash pb-16 pt-40 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div
          className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur"
          data-reveal=""
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" /> LET'S COLLABORATE
        </div>
        <HeroHeading
          lines={["Have a project in mind?", "Let's make it happen."]}
          className="font-display text-[clamp(2.4rem,7.4vw,7.5rem)] font-semibold"
        />
        <p
          className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
          data-hero-after=""
        >
          Tell us what you're working on. We'd love to explore how we can help.
        </p>
      </div>
    </section>
  );
}

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.name), "Not sure yet"];

/** Shape of an enquiry — ready to reuse server-side once delivery is configured. */
export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address.")
    .max(255),
  company: z.string().trim().max(150, "Must be under 150 characters.").optional(),
  service: z
    .string({ required_error: "Please choose a service." })
    .refine((v) => SERVICE_OPTIONS.includes(v), "Please choose a service."),
  budget: z.string().trim().max(100, "Must be under 100 characters.").optional(),
  description: z
    .string()
    .trim()
    .min(1, "Please describe your project.")
    .max(2000, "Must be under 2000 characters."),
});

type Field = keyof z.infer<typeof enquirySchema>;

const input =
  "w-full rounded-2xl border border-foreground/10 bg-background px-5 py-4 text-base outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted-foreground/60 hover:border-foreground/30 focus:border-mint focus:ring-4 focus:ring-mint/30 aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [checked, setChecked] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const res = enquirySchema.safeParse(data);
    const next: Partial<Record<Field, string>> = {};
    if (!res.success) for (const i of res.error.issues) next[i.path[0] as Field] ??= i.message;
    setErrors(next);
    setChecked(res.success);
    // Delivery not configured yet: nothing is sent or stored.
  }

  const f = (name: Field, label: string, opt = false) => ({
    label: (
      <label htmlFor={name} className="mb-2 flex justify-between text-sm font-medium">
        <span>
          {label}
          {!opt && <span className="text-electric"> *</span>}
        </span>
        {opt && <span className="text-muted-foreground">Optional</span>}
      </label>
    ),
    props: {
      id: name,
      name,
      "aria-invalid": !!errors[name],
      "aria-describedby": errors[name] ? `${name}-err` : undefined,
    },
    err: errors[name] && (
      <p id={`${name}-err`} className="mt-2 text-sm text-destructive">
        {errors[name]}
      </p>
    ),
  });

  const name = f("name", "Full name"),
    email = f("email", "Email address"),
    company = f("company", "Company / Organization", true);
  const service = f("service", "Service required"),
    budget = f("budget", "Estimated budget", true),
    desc = f("description", "Project description");

  return (
    <section className="mx-auto max-w-4xl px-5 pb-28 md:pb-40">
      <form
        noValidate
        onSubmit={onSubmit}
        className="rounded-[2rem] border border-foreground/10 bg-card p-6 shadow-sm md:p-12"
        data-reveal=""
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            {name.label}
            <input
              {...name.props}
              autoComplete="name"
              required
              maxLength={100}
              className={input}
              placeholder="Your name"
            />
            {name.err}
          </div>
          <div>
            {email.label}
            <input
              {...email.props}
              type="email"
              autoComplete="email"
              required
              maxLength={255}
              className={input}
              placeholder="you@example.com"
            />
            {email.err}
          </div>
          <div>
            {company.label}
            <input
              {...company.props}
              autoComplete="organization"
              maxLength={150}
              className={input}
              placeholder="Company name"
            />
            {company.err}
          </div>
          <div>
            {service.label}
            <select
              {...service.props}
              required
              defaultValue=""
              className={`${input} appearance-none`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {service.err}
          </div>
          <div className="md:col-span-2">
            {budget.label}
            <input
              {...budget.props}
              maxLength={100}
              className={input}
              placeholder="e.g. a range or rough figure"
            />
            {budget.err}
          </div>
          <div className="md:col-span-2">
            {desc.label}
            <textarea
              {...desc.props}
              required
              rows={6}
              maxLength={2000}
              className={`${input} resize-y`}
              placeholder="What are you building, and what do you need help with?"
            />
            {desc.err}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="flex items-start gap-2 text-sm text-muted-foreground" role="status">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            {checked
              ? "Your details look good, but online submissions aren't available yet — nothing has been sent."
              : "Online submissions aren't available yet. For now, please reach us through LinkedIn messages."}
          </p>
          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ink-foreground transition-[transform,background-color,color] duration-300 hover:bg-mint hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-mint/40 active:scale-[0.97]"
          >
            Send Enquiry
          </button>
        </div>
      </form>
    </section>
  );
}
