"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Bid",
    copy: "Takeoffs, scope review, and a straight number back to the GC — fast enough to matter during the bid window.",
  },
  {
    n: "02",
    title: "Fabricate",
    copy: "Shop-built stairs, rail, and custom steel, fit and finished before it ever hits the truck.",
  },
  {
    n: "03",
    title: "Erect",
    copy: "Crews on site with the crane, the plan, and the schedule — moving at the pace your job needs.",
  },
  {
    n: "04",
    title: "Finish",
    copy: "Punch list, inspection-ready welds, and a clean handoff. No callbacks chasing loose ends.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            How a Job Moves
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
            One seam, start to finish.
          </h2>
        </div>

        <div className="relative">
          {/* connecting seam line - desktop */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-gradient-to-r from-arc-blue via-arc-blue-bright to-weld-spark"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-10 md:gap-8">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex md:block items-center gap-4 mb-4">
                  <span className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-gunmetal border border-arc-blue/50 font-utility text-arc-blue-bright text-sm shrink-0">
                    {s.n}
                  </span>
                  <h3 className="md:mt-5 font-display font-bold uppercase text-2xl text-white">
                    {s.title}
                  </h3>
                </div>
                <p className="text-steel-silver-dim leading-relaxed">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
