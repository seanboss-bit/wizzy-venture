import { Clock, Globe2, MapPin, Plane, ShieldCheck, Truck } from "lucide-react";

const ITEMS = [
  {
    icon: Truck,
    title: "Freight & Haulage",
    body: "Long-haul, short-haul and last-mile delivery for full and partial truckloads.",
  },
  {
    icon: Globe2,
    title: "Global Logistics",
    body: "Cross-border coordination with customs clearance and port handling.",
  },
  {
    icon: Plane,
    title: "Air Cargo Brokerage",
    body: "Time-critical air freight with door-to-door tracking and reporting.",
  },
  {
    icon: ShieldCheck,
    title: "Insured Transit",
    body: "Every shipment is fully insured. Real-time documentation included.",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    body: "Live ETAs and SLA-backed delivery windows for sensitive cargo.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    body: "Hubs across major economic corridors with verified driver network.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="border-y border-border/40 bg-card/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Built for the long road.
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete logistics stack — fleet, freight forwarding, and global
            coordination — under one trusted name.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition hover:border-primary/50 hover:shadow-elegant"
            >
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-blue-gradient opacity-0 blur-3xl transition group-hover:opacity-30" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
