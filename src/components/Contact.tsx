import { useState, type ReactNode, type FormEvent } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "../lib/whatsapp";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Freight & Haulage",
    message: "",
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg =
      `New enquiry from ${form.name}\n\n` +
      `Email: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n` +
      `Message:\n${form.message}`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get in touch
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Ready to move your cargo?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send us your details — we'll get back to you on WhatsApp with a
            quote tailored to your route, weight, and timeline.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              icon={<MessageCircle className="h-5 w-5" />}
              label="WhatsApp"
              value={WHATSAPP_DISPLAY}
              accent="whatsapp"
            />
            <ContactRow
              href={`tel:+${WHATSAPP_NUMBER}`}
              icon={<Phone className="h-5 w-5" />}
              label="Phone"
              value={WHATSAPP_DISPLAY}
            />
            <ContactRow
              href="mailto:timbelianas@gmail.com"
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="timbelianas@gmail.com"
            />
          </div>
        </div>

        <form
          onSubmit={submit}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-elegant"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" required>
              <input
                required
                maxLength={100}
                className="input-base"
                placeholder="Jane Doe"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                maxLength={150}
                className="input-base"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </Field>
            <Field label="Phone" required>
              <input
                required
                maxLength={30}
                className="input-base"
                placeholder="+1 ..."
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </Field>
            <Field label="Service">
              <select
                className="input-base"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option>Freight & Haulage</option>
                <option>Global Logistics</option>
                <option>Air Cargo</option>
                <option>Other</option>
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field label="Tell us about your cargo" required>
                <textarea
                  required
                  maxLength={1000}
                  rows={5}
                  className="input-base resize-none"
                  placeholder="Route, weight, timing, special requirements..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </Field>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Send via WhatsApp
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            Submitting opens WhatsApp with your enquiry pre-filled.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  href,
  icon,
  label,
  value,
  accent,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  accent?: "whatsapp";
}) {
  const hoverBorder =
    accent === "whatsapp" ? "hover:border-whatsapp" : "hover:border-primary";
  const iconBg =
    accent === "whatsapp"
      ? "bg-whatsapp/20 text-whatsapp"
      : "bg-primary/20 text-primary";
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition ${hoverBorder}`}
    >
      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}
      >
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="font-semibold">{value}</p>
      </div>
    </a>
  );
}
