import Link from "next/link";
import Image from "next/image";

const TYPES = [
  {
    title: "Retail & Big-Box",
    href: "/building-types/retail-big-box",
    img: "/images/1000009689.jpg",
    copy: "Large-footprint retail steel packages built for tight construction windows.",
  },
  {
    title: "Industrial & Warehouse",
    href: "/building-types/industrial-warehouse",
    img: "/images/1000009686.jpg",
    copy: "Clear-span warehouse and distribution steel, erected to spec and schedule.",
  },
  {
    title: "Agricultural & Rural Commercial",
    href: "/building-types/agricultural-rural",
    img: "/images/1000009653.jpg",
    copy: "Rural commercial and agricultural steel buildings, wherever the site is.",
  },
];

export default function BuildingTypesTeaser() {
  return (
    <section className="relative bg-charcoal py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
              Who We Build For
            </p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
              Building types we know cold.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TYPES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block relative h-72 overflow-hidden border border-white/10 hover:border-arc-blue/60 transition-colors"
            >
              <Image
                src={t.img}
                alt={t.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display font-bold uppercase text-xl text-white mb-1.5">
                  {t.title}
                </h3>
                <p className="text-sm text-steel-silver-dim">{t.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
