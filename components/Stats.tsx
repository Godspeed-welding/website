"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "Nationwide", label: "Bid Reach" },
  { value: "In-House", label: "Fab + Erection" },
  { value: "Retail / Industrial / Ag", label: "Building Types" },
  { value: "One Crew", label: "Quote to Punch List" },
];

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-l-2 border-arc-blue/50 pl-4"
            >
              <div className="font-display font-bold uppercase text-xl md:text-2xl text-white leading-tight">
                {s.value}
              </div>
              <div className="font-utility text-xs tracking-widest uppercase text-steel-silver-dim mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
