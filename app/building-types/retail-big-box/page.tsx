import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Retail & Big-Box Steel Erection",
  description:
    "Structural steel erection for retail and big-box commercial construction — built for tight schedules and phased openings.",
};

const CONSIDERATIONS = [
  {
    title: "Schedule Pressure",
    copy:
      "Retail construction runs on fixed opening dates tied to lease agreements and seasonal openings. Steel erection has to hit its window so the trades behind it — roofing, mechanical, storefront — aren't compressed into an impossible schedule.",
  },
  {
    title: "Large Clear Spans",
    copy:
      "Big-box retail floor plans need long clear spans with minimal interior columns. That means larger, heavier main beams and a rigging plan built around fewer, bigger picks rather than many small ones.",
  },
  {
    title: "Site Access & Laydown",
    copy:
      "Retail sites are often tight — shared parking lots, active roads, adjacent tenants still operating. Erection sequencing has to account for limited laydown space and crane positioning that doesn't shut down the whole site.",
  },
  {
    title: "Coordination With Other Trades",
    copy:
      "Roofing, mechanical curb placement, and storefront framing are all waiting on the steel frame. Clear, proactive communication about sequencing keeps the whole schedule moving instead of stacking delays on the trades behind us.",
  },
];

const FAQS = [
  {
    q: "How fast can you erect a typical retail building?",
    a: "It depends on square footage and bay spacing, but a straightforward single-story retail box typically erects over one to a few weeks once steel is on site. We'll give you a real schedule once we see the drawings — not a generic number that doesn't hold up.",
  },
  {
    q: "Can you work around an active shopping center?",
    a: "Yes. Sites next to occupied retail or in active shopping centers need a different traffic and safety plan than a greenfield site, and we scope that into the bid and the site logistics plan up front.",
  },
  {
    q: "Do you coordinate with the roofing contractor on deck timing?",
    a: "Yes — we sequence steel and deck installation to hand off a clean, complete deck to the roofer as early in the schedule as the structural sequence allows, rather than leaving isolated gaps that slow the roof down.",
  },
];

export default function RetailBigBoxPage() {
  return (
    <>
      <PageHeader
        eyebrow="Building Types / Retail & Big-Box"
        title="Retail & Big-Box Steel Erection"
        intro="Large-footprint retail steel packages built for the schedule pressure that comes with a fixed opening date."
        image="/images/1000009689.jpg"
        imageAlt="Structural steel roof framing on a large commercial retail building"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed">
            Retail and big-box construction doesn't leave much room for a
            slow start. Lease agreements, seasonal openings, and tenant
            build-out schedules all stack on top of the steel package, which
            usually means steel erection is the first domino — and the one
            everyone downstream is watching.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            What's Different Here
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What retail steel actually needs
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
            Retail construction FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Got a retail steel package on the schedule?"
        subtitle="Send the drawings and the opening date — we'll bid against it."
      />
    </>
  );
}
