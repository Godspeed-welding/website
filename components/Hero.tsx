"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SteelBeamBackground from "./SteelBeamBackground";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] flex items-end overflow-hidden">
      <SteelBeamBackground />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-24 pt-40">
        <div className="max-w-3xl">
          <p className="spec-tick font-utility text-xs md:text-sm tracking-[0.25em] uppercase text-ember-bright mb-5">
            Commercial Steel Erection · Welding · Fabrication
          </p>

          <h1 className="font-display font-bold uppercase leading-[1.02] text-4xl sm:text-5xl md:text-6xl lg:text-7xl plate-heading">
            Structural Steel.
            <br />
            Built for the Job.
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="h-[3px] w-32 md:w-56 bg-white mt-5 mb-6"
          />

          <p className="text-base md:text-xl text-steel-silver max-w-xl">
            Godspeed Welding erects structural steel and builds custom
            fabrication for general contractors and developers across the
            country — 10+ years in the field, OSHA 10/30-trained crews, and
            a schedule you can bid against.
          </p>

          <div className="mt-7 md:mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+17044986870"
              className="font-display uppercase tracking-wider text-sm md:text-base bg-white hover:bg-steel-silver text-charcoal px-6 md:px-7 py-3 md:py-3.5 transition-colors"
            >
              Call (704) 498-6870
            </a>
            <Link
              href="/work"
              className="font-display uppercase tracking-wider text-sm md:text-base border border-steel-silver-dim/60 hover:border-steel-silver text-steel-silver px-6 md:px-7 py-3 md:py-3.5 transition-colors"
            >
              See the Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
