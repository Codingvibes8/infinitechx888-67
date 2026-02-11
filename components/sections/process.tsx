const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We understand your goals, audience, and current website issues.",
  },
  {
    number: "02",
    title: "Design Phase",
    description:
      "You get a modern, custom design tailored to your brand identity.",
  },
  {
    number: "03",
    title: "Next.js Rebuild",
    description:
      "We build a fast, secure, SEO-optimised site on a modern tech stack.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy your site and provide optional ongoing support.",
  },
];

export function Process() {
  return (
    <section className="border-t border-border/40 bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How the Process Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From first call to launch in four simple steps.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const delays = [
              "animate-card-enter",
              "animate-card-enter-d1",
              "animate-card-enter-d2",
              "animate-card-enter-d3",
            ];
            return (
              <div
                key={step.number}
                className={`group card-glow card-animate-init relative rounded-xl border border-border/40 bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg ${delays[i] || delays[3]}`}
              >
                <span className="font-heading text-5xl font-bold text-primary/20 transition-all duration-300 group-hover:text-primary/40 group-hover:scale-110 inline-block origin-left">
                  {step.number}
                </span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
