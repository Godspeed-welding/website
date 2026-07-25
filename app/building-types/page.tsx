import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Building Types We Erect | Retail, Industrial & Agricultural",
  description:
    "Commercial steel erection across building types — retail and big-box, industrial and warehouse, agricultural and rural commercial construction.",
};

const TYPES = [
  {
    title: "Retail & Big-Box",
    href: "/building-types/retail-big-box",
    img: "/images/1000009689.jpg",
    copy: "Large-footprint retail steel packages built for tight construction windows and phased openings.",
  },
  {
    title: "Industrial & Warehouse",
    href: "/building-types/industrial-warehouse",
    img: "/images/1000009686.jpg",
    copy: "Clear-span warehouse and distribution steel, erected to spec and to schedule.",
  },
  {
    title: "Agricultural & Rural Commercial",
    href: "/building-types/agricultural-rural",
    img: "/images/1000009653.jpg",
    copy: "Rural commercial and agricultural steel buildings, wherever the site actually is.",
  },
  {
    title: "Education",
    href: "/building-types/education",
    img: null,
    copy: "Gymnasiums, additions, and campus buildings, scheduled around an active campus. Now bidding.",
  },
  {
    title: "Healthcare",
    href: "/building-types/healthcare",
    img: null,
    copy: "Tighter tolerances and heavier MEP coordination than standard commercial space. Now bidding.",
  },
];

export default function BuildingTypesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Build For"
        title="Building types we know cold."
        intro="Different building types come with different structural rhythms — bay spacing, schedule pressure, site access. We bid and erect across all three."
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-3 gap-8">
          {TYPES.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group block border border-white/10 bg-gunmetal hover:border-ember/50 transition-colors"
            >
              {t.img ? (
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center border-b border-white/10">
                  <span className="font-utility text-xs tracking-widest uppercase text-steel-silver-dim">
                    Now Bidding
                  </span>
                </div>
              )}
              <div className="p-7">
                <h2 className="font-display font-bold uppercase text-xl text-white mb-3">
                  {t.title}
                </h2>
                <p className="text-sm text-steel-silver-dim leading-relaxed mb-4">{t.copy}</p>
                <span className="font-display uppercase tracking-wider text-sm text-ember-bright">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
