"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CAPS = [
  {
    title: "Structural Steel Erection",
    copy:
      "Full-scope erection for commercial and retail construction — from foundation-ready steel packages to fully framed buildings, coordinated tight against the GC's schedule.",
    img: "/images/1000009653.jpg",
    alt: "Aerial view of a commercial structural steel building frame under construction",
  },
  {
    title: "Structural Welding",
    copy:
      "Certified structural welding with clean, inspection-ready beads on every connection. If it has to hold a building up, it gets our full attention — not a shortcut.",
    img: "/images/1000009637.jpg",
    alt: "Close-up detail of a clean structural weld on steel railing",
  },
  {
    title: "Custom Fabrication",
    copy:
      "In-house fabrication for stairs, rail, canopies, and one-off architectural steel — built to print in the shop, finished and ready for install day.",
    img: "/images/1000009684.jpg",
    alt: "Custom fabricated steel stair and platform assembly in the fabrication shop",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-gunmetal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-14 md:mb-20">
          <p className="font-utility text-xs tracking-[0.3em] uppercase text-arc-blue-bright mb-3">
            What We Build
          </p>
          <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl steel-text leading-[0.95]">
            Three trades. One crew. No subcontracting the hard parts.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {CAPS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative bg-gunmetal-light overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal-light via-transparent to-transparent" />
              </div>
              <div className="p-7 md:p-8">
                <h3 className="font-display font-bold uppercase text-2xl text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-steel-silver-dim leading-relaxed">{c.copy}</p>
              </div>
              <div className="absolute left-0 top-0 h-full w-[3px] bg-arc-blue/0 group-hover:bg-arc-blue transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
