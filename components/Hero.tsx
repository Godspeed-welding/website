"use client";

import Image from "next/image";
import Link from "next/link";
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
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/75 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-24 pt-48">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="spec-tick font-utility text-xs md:text-sm tracking-[0.25em] uppercase text-ember-bright mb-5"
          >
            Commercial Steel Erection · Welding · Fabrication
          </motion.p>

          <h1 className="font-display font-bold uppercase leading-[0.97] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] plate-heading">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                className="block"
              >
                Structural Steel.
              </motion.span>
            </span>
            <span className="relative inline-block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                className="block"
              >
                Built for the Job.
              </motion.span>
            </span>
          </h1>

          {/* welded underline - literal seam, not a decorative glow */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="h-[3px] w-40 md:w-56 bg-ember mt-6 mb-7"
          />

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="text-lg md:text-xl text-steel-silver max-w-xl"
          >
            Godspeed Welding erects structural steel and builds custom
            fabrication for general contractors and developers across the
            country — 10+ years in the field, OSHA 10/30-trained crews, and
            a schedule you can bid against.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="tel:+17044986870"
              className="font-display uppercase tracking-wider text-sm md:text-base bg-white hover:bg-steel-silver text-charcoal px-7 py-3.5 transition-colors"
            >
              Call (704) 498-6870
            </a>
            <Link
              href="/work"
              className="font-display uppercase tracking-wider text-sm md:text-base border border-steel-silver-dim/60 hover:border-steel-silver text-steel-silver px-7 py-3.5 transition-colors"
            >
              See the Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
