import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services | Structural Steel Erection, Welding & Fabrication",
  description:
    "Godspeed Welding's commercial services: structural steel erection, structural welding, and custom fabrication for general contractors and developers.",
};

const SERVICES = [
  {
    title: "Structural Steel Erection",
    href: "/services/structural-steel-erection",
    img: "/images/1000009686.jpg",
    copy:
      "Full-scope erection for commercial construction — foundation-ready steel packages through fully framed buildings, coordinated against the GC's schedule.",
  },
  {
    title: "Structural Welding",
    href: "/services/welding",
    img: "/images/1000009653.jpg",
    copy:
      "Certified structural welding on every connection type, field and shop, to code and ready for inspection.",
  },
  {
    title: "Custom Fabrication",
    href: "/services/fabrication",
    img: "/images/1000009665.jpg",
    copy:
      "In-house fabrication for stairs, rail, canopies, and architectural steel — built to print and finished before it hits the truck.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Three trades. One crew. No subcontracting the hard parts."
        intro="Godspeed Welding runs structural steel erection, structural welding, and custom fabrication under one roof — the same crew that bids the job is the crew that finishes it."
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block border border-white/10 bg-gunmetal hover:border-ember/50 transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h2 className="font-display font-bold uppercase text-xl text-white mb-3">
                  {s.title}
                </h2>
                <p className="text-sm text-steel-silver-dim leading-relaxed mb-4">{s.copy}</p>
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
