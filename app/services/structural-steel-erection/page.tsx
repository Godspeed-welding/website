import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Structural Steel Erection | Commercial Construction",
  description:
    "Commercial structural steel erection for general contractors and developers — foundation-ready packages through fully framed buildings, erected to schedule.",
};

const PROCESS = [
  {
    n: "01",
    title: "Pre-Construction Coordination",
    copy:
      "Before a beam ever moves, we're reviewing the structural drawings, confirming anchor bolt layouts against the foundation survey, and building an erection sequence that matches your site logistics — laydown area, crane pad location, and access.",
  },
  {
    n: "02",
    title: "Rigging & Crane Planning",
    copy:
      "We size the crane to the heaviest pick and the longest reach on the job, not the average one — drawing on our own equipment or a partnered crane fleet depending on what the lift actually calls for. Rigging plans account for tandem picks, tight urban sites, and overhead obstructions before the crane ever shows up.",
  },
  {
    n: "03",
    title: "Erection Sequence",
    copy:
      "Columns, then main beams, then infill — sequenced so every piece has something to connect to when it's set. On multi-bay buildings we erect in sections to keep the structure stable and the schedule moving in parallel with other trades.",
  },
  {
    n: "04",
    title: "Plumb, Level & Connect",
    copy:
      "Every column gets checked plumb before final bolting. Connections are made per the connection details on the structural drawings — bolted, welded, or both — and torque or weld inspection happens as each connection closes out, not at the end of the job.",
  },
  {
    n: "05",
    title: "Decking & Close-Out",
    copy:
      "Metal deck, joists, and bracing go in behind the main frame. We walk the structure against the punch list before we release the site back to the GC — loose bolts, missing welds, and bent deck don't wait for someone else to find them.",
  },
];

const FAQS = [
  {
    q: "What's included in a structural steel erection bid?",
    a: "A complete bid covers crane and rigging, the erection crew, connection work (bolting and/or field welding per the drawings), and coordination with your schedule. We'll tell you plainly if something in the drawings is going to need clarification from the engineer of record before we bid it — that's better found in the bid phase than the field.",
  },
  {
    q: "How do you handle scheduling around other trades?",
    a: "Steel erection is usually the pacing item early in a job — everyone downstream is waiting on it. We build the erection sequence around your overall schedule, not the other way around, and we communicate delays (weather, late deliveries, RFIs) as soon as we know about them, not after they've already cost you a week.",
  },
  {
    q: "Do you erect steel you didn't fabricate?",
    a: "Yes. Most jobs come with steel fabricated by someone else, and that's normal — we erect from any qualified fabricator's shop drawings. When we fabricate and erect the same package in-house, it just means one less handoff and one less place for a dimension to get lost.",
  },
  {
    q: "What tolerances do you erect to?",
    a: "Plumb, level, and alignment tolerances follow the AISC Code of Standard Practice for Steel Buildings and Bridges unless the structural drawings call out something tighter. We check and document as we go rather than hoping it's close enough at final inspection.",
  },
  {
    q: "How does weather affect the erection schedule?",
    a: "Wind, ice, and lightning are safety stops, not judgment calls — crews come down. We build reasonable weather contingency into the schedule up front so a few lost days don't blow up the whole timeline, and we communicate proactively when conditions are trending toward a delay.",
  },
  {
    q: "Can you bid a job outside your home region?",
    a: "Yes — we bid nationwide and travel for the right job. Mobilization, lodging, and per diem get scoped into the bid transparently, not buried as a surprise change order later.",
  },
];

export default function StructuralSteelErectionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Structural Steel Erection"
        title="Structural Steel Erection"
        intro="Foundation-ready steel packages through fully framed commercial buildings — erected plumb, level, and on the schedule the job actually needs."
        image="/images/1000009689.jpg"
        imageAlt="Curved structural steel roof framing under construction"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed mb-6">
            Steel erection is the part of the job where a stack of engineered
            drawings turns into an actual building — and it's usually the
            item everyone else on site is waiting on. Godspeed Welding erects
            structural steel for retail, industrial, and agricultural
            commercial projects, with crews trained to OSHA 10/30 standards
            and a process built around keeping your schedule moving, not
            just getting steel in the air.
          </p>
          <p className="text-steel-silver-dim leading-relaxed">
            We work from the structural engineer's drawings, coordinate
            directly with your superintendent on sequencing, and erect with
            our own crews — no layer of subcontracted labor between the bid
            and the crew actually setting steel.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            Our erection process
          </h2>
          <div className="space-y-10">
            {PROCESS.map((p) => (
              <div key={p.n} className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8 border-t border-white/10 pt-8 first:border-0 first:pt-0">
                <span className="font-utility text-ember-bright text-3xl">{p.n}</span>
                <div>
                  <h3 className="font-display font-bold uppercase text-xl text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-steel-silver-dim leading-relaxed max-w-2xl">{p.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            Where We Erect
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-6">
            Built for the building types that matter to your bid list
          </h2>
          <p className="text-steel-silver-dim leading-relaxed max-w-2xl mb-8">
            Steel erection looks different on a big-box retail slab than it
            does on a rural agricultural building or a clear-span warehouse.
            We bid and erect all three.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/building-types/retail-big-box" className="border border-white/15 hover:border-ember-bright px-5 py-3 font-display uppercase text-sm tracking-wider text-steel-silver hover:text-white transition-colors">
              Retail &amp; Big-Box &rarr;
            </Link>
            <Link href="/building-types/industrial-warehouse" className="border border-white/15 hover:border-ember-bright px-5 py-3 font-display uppercase text-sm tracking-wider text-steel-silver hover:text-white transition-colors">
              Industrial &amp; Warehouse &rarr;
            </Link>
            <Link href="/building-types/agricultural-rural" className="border border-white/15 hover:border-ember-bright px-5 py-3 font-display uppercase text-sm tracking-wider text-steel-silver hover:text-white transition-colors">
              Agricultural &amp; Rural &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            Common Questions
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-10">
            Erection FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Have a steel package ready to bid?"
        subtitle="Send the drawings and the timeline — we'll send back a number."
      />
    </>
  );
}
