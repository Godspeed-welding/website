import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industrial & Warehouse Steel Erection",
  description:
    "Structural steel erection for industrial and warehouse construction — clear-span buildings erected to spec and schedule.",
};

const CONSIDERATIONS = [
  {
    title: "Clear-Span Structures",
    copy:
      "Warehouse and distribution buildings need wide, unobstructed floor space for racking and material handling. That means heavier, longer-span beams and trusses, and a rigging plan built around fewer, larger picks.",
  },
  {
    title: "Heavy Loading Requirements",
    copy:
      "Industrial buildings often carry crane systems, mezzanine loads, or heavy equipment loads the base structure has to be erected to handle exactly as designed — no field improvising on connections that carry more than a typical office or retail load.",
  },
  {
    title: "Large-Scale Sequencing",
    copy:
      "A 100,000+ square foot warehouse isn't erected as one pour of steel — it's sequenced in sections so crews, crane positioning, and material staging can move through the site efficiently instead of waiting on each other.",
  },
  {
    title: "Site Logistics on Greenfield Sites",
    copy:
      "Industrial projects are often on larger, more remote sites than retail or urban work — which usually means more room to stage steel and position cranes, but also more coordination on access roads and site utilities still being built out.",
  },
];

const FAQS = [
  {
    q: "Can you erect steel for buildings with overhead crane systems?",
    a: "Yes. Buildings designed for overhead bridge cranes have specific column and connection requirements to handle those loads, and we erect to those details exactly as engineered — this isn't a place to eyeball a connection.",
  },
  {
    q: "How do you handle erection on a large, multi-acre site?",
    a: "Large sites usually mean more room to stage material and position the crane, but they also mean more ground to cover with a plan. We section the erection sequence so crews and crane moves happen efficiently across the footprint instead of losing time repositioning.",
  },
  {
    q: "Do you erect pre-engineered metal building (PEMB) systems?",
    a: "Yes — we erect both conventional structural steel and pre-engineered metal building systems, and we'll tell you upfront which approach actually fits your building program and budget rather than defaulting to one.",
  },
];

export default function IndustrialWarehousePage() {
  return (
    <>
      <PageHeader
        eyebrow="Building Types / Industrial & Warehouse"
        title="Industrial & Warehouse Steel Erection"
        intro="Clear-span warehouse and distribution steel, erected to the loads and spans the building actually needs."
        image="/images/1000009686.jpg"
        imageAlt="Structural steel erection on an industrial building"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed">
            Industrial and warehouse buildings put different demands on a
            steel package than retail or commercial office space — longer
            spans, heavier loads, and often a much bigger footprint to
            sequence across. Godspeed Welding erects both conventional
            structural steel and pre-engineered systems for distribution,
            manufacturing, and warehouse construction.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            What's Different Here
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What industrial steel actually needs
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {CONSIDERATIONS.map((c) => (
              <div key={c.title} className="border-t-2 border-ember/50 pt-5">
                <h3 className="font-display font-bold uppercase text-xl text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-steel-silver-dim leading-relaxed">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-steel-silver-dim">
            Related service:{" "}
            <Link href="/services/structural-steel-erection" className="text-ember-bright hover:text-white transition-colors">
              Structural Steel Erection &rarr;
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            Common Questions
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-10">
            Industrial construction FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Got an industrial steel package to bid?"
        subtitle="Send the structural drawings — we'll size the crane and the crew to match."
      />
    </>
  );
}
