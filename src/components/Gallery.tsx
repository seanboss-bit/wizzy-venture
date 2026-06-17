import { useState } from "react";
import { X } from "lucide-react";

const GALLERY_IMAGES = Array.from({ length: 20 }, (_, i) => ({
  thumb: `/images/car-${(i + 1).toString().padStart(2, "0")}.png`,
  full: `/images/car-${(i + 1).toString().padStart(2, "0")}.png`,
  alt: `Wizzy Venture logistics operation ${i + 1}`,
}));
export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="border-t border-border/40 bg-card/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our work
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              On the road, every day.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A look at our fleet, our crew, and the cargo we move across
              cities, countries, and continents.
            </p>
          </div>
          <span className="rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            {GALLERY_IMAGES.length} photos
          </span>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted transition hover:border-primary/60"
            >
              <img
                src={img.thumb}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={GALLERY_IMAGES[open].full}
            alt={GALLERY_IMAGES[open].alt}
            // Applied requested size for the lightbox view
            style={{ width: "1080px", height: "1920px" }}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
