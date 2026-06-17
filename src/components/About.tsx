export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="relative">
          <img
            src="/images/hero-truck.jpg"
            alt="Wizzy Venture truck on highway"
            className="rounded-3xl border border-border shadow-elegant"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant sm:block">
            <p className="font-display text-2xl font-bold text-gradient-blue">
              99.4%
            </p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              On-time deliveries
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About us
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            A decade of dependable haulage.
          </h2>
          <p className="mt-6 text-muted-foreground">
            From a single truck to a continental fleet, Wizzy Venture has spent
            years earning the trust of shippers, manufacturers, and importers.
            We pair seasoned drivers with modern tracking so your cargo arrives
            safe, on time, and accounted for — every single trip.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "DOT compliant fleet",
              "Verified, trained drivers",
              "Real-time GPS tracking",
              "Cargo & cross-border insurance",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
