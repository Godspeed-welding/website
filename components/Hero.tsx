"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src="/images/1000009689.jpg"
        alt="Curved structural steel roof framing under construction on a mountain ridge job site"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/40" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-utility text-xs md:text-sm tracking-[0.3em] uppercase text-arc-blue-bright mb-4"
          >
            Commercial Steel Erection · Welding · Fabrication
          </motion.p>

          <h1 className="font-display font-extrabold uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="relative inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="steel-text block"
              >
                Built to Spec.
              </motion.span>
            </span>
            <br />
            <span className="relative inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
                className="arc-text block"
              >
                Raised on Time.
              </motion.span>
              {/* weld strike accent */}
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
                className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 h-16 w-16 md:h-24 md:w-24 rounded-full bg-weld-hot blur-xl"
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-6 text-lg md:text-xl text-steel-silver max-w-xl"
          >
            Godspeed Welding erects structural steel and builds custom
            fabrication for general contractors and developers across the
            country — from retail construction to industrial builds, wherever
            the job is.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="font-display uppercase tracking-wider text-sm md:text-base bg-arc-blue hover:bg-arc-blue-bright text-white px-7 py-3.5 rounded-sm transition-colors"
            >
              Request a Bid
            </a>
            <a
              href="#work"
              className="font-display uppercase tracking-wider text-sm md:text-base border border-steel-silver-dim/60 hover:border-steel-silver text-steel-silver px-7 py-3.5 rounded-sm transition-colors"
            >
              See the Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
