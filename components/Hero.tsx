"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SteelBeamBackground from "./SteelBeamBackground";

export default function Hero() {
  // The outer section is tall (220vh of actual scroll room). The inner
  // content is sticky, so it stays pinned in the viewport for that whole
  // scroll range while scrollYProgress (tracked against the outer section)
  // drives the beam assembly. Without the pin, the visual scrolls away
  // with the page before enough progress accumulates to see anything.
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="top" ref={scrollRef} className="relative h-[220dvh]">
      <div className="sticky top-0 h-[100dvh] flex items-end overflow-hidden">
        <SteelBeamBackground scrollRef={scrollRef} />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 md:px-10 pb-16 md:pb-24 pt-48">
          <div className="max-w-3xl">
            <p className="spec-tick font-utility text-xs md:text-sm tracking-[0.25em] uppercase text-ember-bright mb-5">
              Commercial Steel Erection · Welding · Fabrication
            </p>

            <h1 className="font-display font-bold uppercase leading-[0.97] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] plate-heading">
              Structural Steel.
              <br />
              Built for the Job.
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-[3px] w-40 md:w-56 bg-white mt-6 mb-7"
            />

            <p className="text-lg md:text-xl text-steel-silver max-w-xl">
              Godspeed Welding erects structural steel and builds custom
              fabrication for general contractors and developers across the
              country — 10+ years in the field, OSHA 10/30-trained crews, and
              a schedule you can bid against.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
