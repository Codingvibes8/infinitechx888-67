const stats = [
  { value: "5x", label: "Faster Load Times" },
  { value: "3x", label: "More Enquiries" },
  { value: "0", label: "Plugin Issues" },
  { value: "100%", label: "Mobile Optimised" },
];

export function Results() {
  return (
    <section className="border-t border-border/40 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Real Results for Real Businesses
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Businesses that switch from WordPress to Next.js with Infinitechx
            typically see dramatic improvements across every metric that matters.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border/40 bg-card p-8 text-center"
            >
              <span className="font-heading text-4xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
