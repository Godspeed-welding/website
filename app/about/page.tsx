import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Credentials from "@/components/Credentials";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Godspeed Welding | Credentials & Safety",
  description:
    "Godspeed Welding is a commercial steel erection, welding, and fabrication contractor built on in-house crews and a no-shortcuts approach to structural work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Godspeed Welding"
        title="Built by the people who actually show up on site."
        intro="Godspeed Welding runs structural steel erection, welding, and fabrication with our own crews — not a rotating bench of subcontractors."
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10 space-y-6">
          <p className="text-lg text-steel-silver leading-relaxed">
            A lot of companies bidding commercial steel work are really just
            project managers with a phone full of subcontractors. Godspeed
            Welding isn't that. Over 10+ years in the field, the crew that
            bids your job is the crew that shows up to erect it, weld it,
            and fabricate the pieces that don't come out of a catalog —
            which means the standard doesn't drop the further a project
            gets from the office.
          </p>
          <p className="text-steel-silver-dim leading-relaxed">
            We're based in North Carolina and bid nationwide. Retail
            construction, industrial and warehouse buildings, and
            agricultural commercial work all come through the same crews,
            trained to the same standard, whether the job is down the road
            or a few states away.
          </p>
        </div>
      </section>

      <Credentials />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            How We Work
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-8">
            No shortcuts on structural work
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            <div>
              <h3 className="font-display font-bold uppercase text-lg text-white mb-2">
                In-House Crews
              </h3>
              <p className="text-steel-silver-dim leading-relaxed">
                Erection, welding, and fabrication all run through our own
                people — not a bench of subs assembled per job.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-lg text-white mb-2">
                Straight Communication
              </h3>
              <p className="text-steel-silver-dim leading-relaxed">
                Delays, drawing issues, and schedule risk get flagged as soon
                as we know about them — not discovered by the GC later.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-lg text-white mb-2">
                Safety as Standard
              </h3>
              <p className="text-steel-silver-dim leading-relaxed">
                OSHA 10/30 training isn't a box to check — it's the baseline
                every crew member meets before they're on your site.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-lg text-white mb-2">
                Built to Travel
              </h3>
              <p className="text-steel-silver-dim leading-relaxed">
                Nationwide bid work, honestly scoped mobilization — distance
                isn't a reason we pass on a job worth doing right.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
