"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(24);

  const shown = GALLERY_IMAGES.slice(0, visibleCount);

  return (
    <section id="work" className="relative bg-gunmetal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
              Recent Work
            </p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
              Straight from the job site.
            </h2>
          </div>
          <p className="text-steel-silver-dim max-w-sm">
            Erection, welding, and fabrication across multiple states —
            retail, industrial, and custom architectural steel.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
          {shown.map((file, i) => (
            <motion.button
              key={file}
              onClick={() => setActive(i)}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="group relative block w-full mb-3 overflow-hidden rounded-[1px] break-inside-avoid"
            >
              <Image
                src={`/images/${file}`}
                alt="Godspeed Welding job site photo"
                width={600}
                height={800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 group-hover:ring-arc-blue-bright/70 transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/0 group-hover:from-charcoal/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>

        {visibleCount < GALLERY_IMAGES.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 16)}
              className="font-display uppercase tracking-wider text-sm border border-steel-silver-dim/60 hover:border-arc-blue-bright hover:text-white text-steel-silver px-7 py-3 rounded-[1px] transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-6 right-6 text-steel-silver hover:text-white text-3xl leading-none"
              onClick={() => setActive(null)}
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/images/${shown[active]}`}
                alt="Godspeed Welding job site photo, enlarged"
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
