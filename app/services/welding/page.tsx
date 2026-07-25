import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Structural Welding | Field & Shop Welding for Commercial Steel",
  description:
    "Structural welding for commercial steel connections — field and shop welding, built to code and ready for inspection.",
};

const CONNECTION_TYPES = [
  {
    title: "Fillet Welds",
    copy:
      "The most common structural connection — two pieces joined at an angle, typically where a beam lands on a column or a plate connects to a flange. Sized to the load the connection has to carry, not a standard bead run the same way regardless of what's behind it.",
  },
  {
    title: "Groove Welds",
    copy:
      "Full or partial penetration welds used where the connection needs to transfer load through the full cross-section — moment connections, column splices, and anywhere the structural drawings call for it specifically.",
  },
  {
    title: "Field Welds vs. Shop Welds",
    copy:
      "Shop welding happens in a controlled environment before steel ships — better access, easier inspection, more consistent conditions. Field welds happen on site, often overhead or in tight quarters, and the crew doing them needs to be comfortable working at height as much as they're comfortable running a bead.",
  },
];

const FAQS = [
  {
    q: "What code governs structural welding?",
    a: "Structural steel welding in the U.S. is governed by AWS D1.1, the American Welding Society's Structural Welding Code — Steel. It sets the requirements for weld procedures, welder qualification, and inspection criteria that structural connections have to meet, regardless of who's doing the welding.",
  },
  {
    q: "Do you weld to the structural engineer's specs or your own standard?",
    a: "The engineer of record's drawings and specifications always govern — weld type, size, and location come from the structural drawings, not a default. Where a detail is ambiguous, we flag it and get clarification before welding rather than guessing.",
  },
  {
    q: "Can you inspect and document welds as the job progresses?",
    a: "Yes. Weld quality gets checked connection by connection as the structure goes up, which means problems surface immediately instead of at final inspection when they're expensive to fix. We can coordinate directly with a third-party special inspector where the project requires one.",
  },
  {
    q: "What's the difference between a certified welder and a certified weld?",
    a: "A welder certification qualifies a person to weld a specific process, position, and material within tested parameters. A certified — or inspected — weld is a specific joint that's been checked against the applicable code. Having certified welders on a crew is necessary but isn't the same as every weld being inspected and documented; we do both.",
  },
  {
    q: "Do you handle both structural and miscellaneous metals welding?",
    a: "Yes. Structural connections (beam-to-column, moment frames, bracing) and miscellaneous metals (stairs, rail, embeds, ladders) both come through the same shop and field crews, so the finish quality doesn't drop off once you're past the primary structure.",
  },
];

export default function WeldingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Structural Welding"
        title="Structural Welding"
        intro="Certified structural welding on every connection — field and shop, built to code, and ready for inspection the first time."
        image="/images/1000009686.jpg"
        imageAlt="Ironworker welding a structural steel connection at height"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed mb-6">
            A structural connection only works if the weld holding it
            together actually does what the engineer of record's drawings
            say it does. Godspeed Welding runs structural welding to the
            connection details on the drawings — not a generic bead run the
            same way on every job — with crews trained to OSHA 10/30
            standards working both in the shop and in the field.
          </p>
          <p className="text-steel-silver-dim leading-relaxed">
            Every connection gets the weld type and size called for on the
            structural drawings, checked as the structure goes up rather
            than assumed correct until someone looks closer.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            The Work Itself
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            Connection types we run
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {CONNECTION_TYPES.map((c) => (
              <div key={c.title} className="border-t-2 border-arc-blue/50 pt-5">
                <h3 className="font-display font-bold uppercase text-lg text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-steel-silver-dim leading-relaxed">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            Quality Control
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-6">
            Inspection-ready, not inspection-hopeful
          </h2>
          <p className="text-steel-silver-dim leading-relaxed max-w-2xl">
            A weld that only looks right from across the room isn't a
            finished weld. We check profile, size, and coverage against the
            applicable code as connections close out — not in a rush at the
            end of the job — so a special inspector or the engineer of
            record isn't finding surprises during final sign-off.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            Common Questions
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-10">
            Welding FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Need welding on a structural package?"
        subtitle="Send the connection details — we'll bid it straight."
      />
    </>
  );
}
