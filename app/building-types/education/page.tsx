import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Education & School Construction Steel Erection",
  description:
    "Structural steel erection for education and school construction — gymnasiums, additions, and new campus buildings, built around active-campus scheduling.",
};

const CONSIDERATIONS = [
  {
    title: "Occupied-Campus Scheduling",
    copy:
      "School construction often happens around an active campus — summer break windows, phased occupancy, or renovation while classes are in session. Erection sequencing has to respect those constraints, not just the structural logic of the building.",
  },
  {
    title: "Gymnasiums & Long-Span Spaces",
    copy:
      "Gyms, cafetorias, and multi-purpose spaces need long clear spans without interior columns — similar structural demands to light industrial work, detailed to an educational occupancy's code requirements.",
  },
  {
    title: "Security & Site Access",
    copy:
      "Active campuses mean controlled access, background-checked crews in some districts, and construction fencing that keeps students and site work separated. That gets planned into the site logistics, not handled reactively.",
  },
  {
    title: "Public Bid Requirements",
    copy:
      "Public school construction often comes with prevailing wage requirements and public bid documentation. We scope and bid accordingly rather than treating it like a private commercial job with extra paperwork.",
  },
];

const FAQS = [
  {
    q: "Do you have completed school projects to reference?",
    a: "We're actively bidding education-sector work now, building on the same erection and welding crews behind our retail, industrial, and agricultural commercial projects. We won't claim a school-specific track record we don't have yet — we'll tell you plainly where we stand on any given bid.",
  },
  {
    q: "Can you work around an active school schedule?",
    a: "Yes — school construction almost always requires phased work around occupied buildings or a limited summer window, and we plan erection sequencing accordingly rather than defaulting to a standard commercial timeline.",
  },
  {
    q: "Do you handle prevailing wage and public bid documentation?",
    a: "Yes, we scope public education bids with prevailing wage requirements built in from the start, not added as a change order once awarded.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Building Types / Education"
        title="Education & School Construction"
        intro="Structural steel for gymnasiums, additions, and new campus buildings — scheduled around an active campus, not against it."
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed">
            Education construction has its own rhythm — summer-window
            deadlines, occupied campuses, and public bid requirements that
            don't show up on a typical commercial job. Godspeed Welding is
            actively bidding education-sector work with the same crews and
            capability behind our retail, industrial, and agricultural
            commercial projects.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            What's Different Here
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What school construction actually needs
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
            Education construction FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Bidding a school or campus project?"
        subtitle="Send the drawings and the occupancy constraints — we'll bid it straight."
      />
    </>
  );
}
