import { Reveal } from "@/animations/reveal";
import { Stagger, StaggerItem } from "@/animations/stagger";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand the Problem",
    body: "We start by understanding what you're trying to build, how the current process works, and what's getting in the way.",
  },
  {
    number: "02",
    title: "Define the Scope",
    body: "We agree on the features, priorities, timeline, and expected deliverables before development begins.",
  },
  {
    number: "03",
    title: "Build and Review",
    body: "We develop in stages, share progress, and review the work against agreed requirements.",
  },
  {
    number: "04",
    title: "Deliver and Support",
    body: "We test, hand over the project, and agree on any maintenance or ongoing support needed.",
  },
];

export function HowWeWork() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <SectionHeading
        title="How We"
        highlight="Work"
        subtitle="A straightforward way to take an idea from problem to practical next step."
      />
      <Stagger
        className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2"
        stagger={0.08}
      >
        {steps.map((step) => (
          <StaggerItem key={step.number} className="bg-background">
            <Reveal variant="fadeUp" className="h-full p-7 sm:p-9">
              <p className="font-display text-sm text-primary">{step.number}</p>
              <h3 className="font-display mt-7 text-2xl">{step.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">{step.body}</p>
            </Reveal>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
