import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Healthcare & Medical Facility Steel Erection",
  description:
    "Structural steel erection for healthcare and medical facility construction — built to the tighter tolerances and coordination healthcare projects require.",
};

const CONSIDERATIONS = [
  {
    title: "Tighter Structural Tolerances",
    copy:
      "Medical equipment, imaging suites, and mechanical systems often demand tighter structural tolerances than standard commercial space. Deflection and vibration limits get called out specifically on healthcare structural drawings, and erection has to hit them.",
  },
  {
    title: "Heavy MEP Coordination",
    copy:
      "Healthcare buildings carry far more mechanical, electrical, and plumbing infrastructure than a typical retail or industrial building. Steel connections and penetrations need to be coordinated tightly with MEP trades from the structural drawings forward.",
  },
  {
    title: "Active-Facility Construction",
    copy:
      "Additions and renovations at operating hospitals or clinics mean infection control requirements, noise and vibration limits during patient hours, and phased access — all of which shape the erection schedule as much as the structural sequence does.",
  },
  {
    title: "Code & Life-Safety Requirements",
    copy:
      "Healthcare occupancies carry stricter life-safety and structural code requirements than standard commercial space. Connection details and inspection requirements reflect that, and erection sequencing has to support required life-safety systems coming online on schedule.",
  },
];

const FAQS = [
  {
    q: "Do you have completed healthcare projects to reference?",
    a: "We're actively bidding healthcare-sector work now, building on the erection and welding capability behind our other commercial work. We'll be direct with you about where our specific healthcare track record stands on any given bid — not oversell it.",
  },
  {
    q: "Can you work at an active hospital or clinic?",
    a: "Yes — active-facility construction needs a different site plan than a greenfield job, with infection control and noise/vibration constraints built into the schedule, and we plan for that rather than treating it like a standard commercial site.",
  },
  {
    q: "Do you coordinate directly with MEP trades on structural penetrations?",
    a: "Yes. Healthcare buildings carry enough mechanical and electrical infrastructure that structural steel coordination with MEP trades needs to happen early and often, not get resolved as field conflicts during erection.",
  },
];

export default function HealthcarePage() {
  return (
    <>
      <PageHeader
        eyebrow="Building Types / Healthcare"
        title="Healthcare & Medical Facility Construction"
        intro="Structural steel built to the tighter tolerances and coordination healthcare projects require — not treated like standard commercial space."
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed">
            Healthcare construction asks more of a structural steel package
            than most commercial building types — tighter tolerances, heavier
            MEP coordination, and stricter life-safety requirements. Godspeed
            Welding is actively bidding healthcare-sector work with the same
            crews and capability behind our retail, industrial, and
            agricultural commercial projects.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            What's Different Here
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What healthcare construction actually needs
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {CONSIDERATIONS.map((c) => (
              <div key={c.title} className="border-t-2 border-white/30 pt-5">
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
            <Link href="/services/structural-steel-erection" className="text-white underline underline-offset-4 hover:text-steel-silver-dim transition-colors">
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
            Healthcare construction FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Bidding a healthcare facility project?"
        subtitle="Send the drawings and the MEP coordination scope — we'll bid it straight."
      />
    </>
  );
}
