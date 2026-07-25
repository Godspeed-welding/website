import Image from "next/image";
import Link from "next/link";

const CAPS = [
  {
    title: "Structural Steel Erection",
    href: "/services/structural-steel-erection",
    copy:
      "Full-scope erection for commercial and retail construction — from foundation-ready steel packages to fully framed buildings, coordinated tight against the GC's schedule.",
    img: "/images/1000009686.jpg",
    alt: "Ironworker welding a structural steel connection at height on a commercial job site",
  },
  {
    title: "Structural Welding",
    href: "/services/welding",
    copy:
      "Certified structural welding with clean, inspection-ready beads on every connection. If it has to hold a building up, it gets our full attention — not a shortcut.",
    img: "/images/1000009653.jpg",
    alt: "Close-up detail of a clean structural weld connection",
  },
  {
    title: "Custom Fabrication",
    href: "/services/fabrication",
    copy:
      "In-house fabrication for stairs, rail, canopies, and one-off architectural steel — built to print in the shop, finished and ready for install day.",
    img: "/images/1000009665.jpg",
    alt: "Custom fabricated structural steel components staged on site",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-gunmetal py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            What We Build
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
            Three trades. One crew. No subcontracting the hard parts.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {CAPS.map((c) => (
            <div key={c.title} className="relative bg-gunmetal-light overflow-hidden border-t-2 border-transparent hover:border-arc-blue transition-colors">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal-light via-transparent to-transparent" />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display font-bold uppercase text-2xl text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-steel-silver-dim leading-relaxed mb-4">{c.copy}</p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 font-display uppercase tracking-wider text-sm text-arc-blue-bright hover:text-white transition-colors"
                >
                  Learn More <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
