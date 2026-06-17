import { ArrowRight, Globe2, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32"
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <img
        src="/images/hero-truck.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 dark:opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <Globe2 className="h-3.5 w-3.5" /> Global Haulage Partner
          </span>
          <h1 className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient-chrome">Moving Cargo.</span>
            <br />
            <span className="text-gradient-blue">Driving Trust.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Wizzy Venture Transportation Incorporated delivers reliable freight,
            logistics and cross-border haulage — on the road, in the air, around
            the world.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink("Hi Wizzy Venture, I'd like a freight quote.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-card"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "10+", v: "Years on the road" },
              { k: "50+", v: "Fleet vehicles" },
              { k: "24/7", v: "Dispatch support" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-gradient-blue">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 rounded-full bg-blue-gradient opacity-30 blur-3xl" />
          <img
            src="/images/wizzy-logo.png"
            alt="Wizzy Venture Transportation Incorporated"
            className="w-full max-w-lg animate-float drop-shadow-[0_25px_45px_rgba(56,130,255,0.45)]"
          />
        </div>
      </div>
    </section>
  );
}
