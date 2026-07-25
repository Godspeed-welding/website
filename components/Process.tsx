"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Drawing Review & RFIs",
    copy:
      "Structural drawings get reviewed against the foundation survey and connection details before we bid, not after. Anything ambiguous goes back to the engineer of record as an RFI in the bid phase — not discovered mid-erection.",
  },
  {
    n: "02",
    title: "Shop Drawings & Detailing",
    copy:
      "Connection details, bolt patterns, and piece marks get detailed and submitted for EOR approval before a single piece of steel is cut. Approved shop drawings are the contract for what actually gets built.",
  },
  {
    n: "03",
    title: "Procurement & Mill Certification",
    copy:
      "Steel is ordered against mill lead times with certified mill test reports tracked per heat number — so material traceability holds up if a special inspector or the EOR asks for it.",
  },
  {
    n: "04",
    title: "Fabrication",
    copy:
      "Shop-built connections, stairs, rail, and custom steel — fit-checked, welded to spec, and coated before it ever leaves the shop floor.",
  },
  {
    n: "05",
    title: "Site Logistics & Erection",
    copy:
      "Crane sizing, rigging plans, and erection sequencing built around your site access and schedule — then crews on site executing that plan, not improvising one.",
  },
  {
    n: "06",
    title: "Special Inspection & Closeout",
    copy:
      "Connections get checked as they close out, coordinated directly with third-party special inspectors where required. Punch list and closeout documentation are part of the job, not an afterthought once the crane leaves.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            How A Job Actually Moves
          </p>
          <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
            From RFI to closeout documentation.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-white/60"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex md:block items-center gap-4 mb-4">
                  <span className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-gunmetal border border-white/30 font-utility text-white text-sm shrink-0">
                    {s.n}
                  </span>
                  <h3 className="md:mt-5 font-display font-bold uppercase text-xl text-white leading-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-steel-silver-dim leading-relaxed">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
