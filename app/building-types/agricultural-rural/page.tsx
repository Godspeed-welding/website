import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Agricultural & Rural Commercial Steel Erection",
  description:
    "Structural steel erection for agricultural and rural commercial buildings — built wherever the site is, without a limited-radius mindset.",
};

const CONSIDERATIONS = [
  {
    title: "Remote Site Access",
    copy:
      "Rural and agricultural sites often mean unpaved access roads, limited nearby lodging, and longer mobilization distances. We scope mobilization honestly into the bid instead of treating a remote site as an afterthought change order.",
  },
  {
    title: "Utility & Grid Buildings",
    copy:
      "Agricultural commercial construction covers everything from grain and storage facilities to utility and equipment buildings — each with its own load and clear-span requirements that don't map directly onto standard retail or office steel.",
  },
  {
    title: "Weather Exposure",
    copy:
      "Rural sites are more exposed, with less surrounding infrastructure to break wind and weather. Erection sequencing and crane planning account for that exposure rather than assuming site conditions match an urban lot.",
  },
  {
    title: "Self-Sufficient Crews",
    copy:
      "Remote jobs need crews who bring what they need and don't rely on a nearby supply house for a missed item. Planning material and consumables for a rural site is part of the bid, not something figured out after mobilization.",
  },
];

const FAQS = [
  {
    q: "Do you travel for rural or remote jobs?",
    a: "Yes — we bid nationwide, including rural and agricultural sites well outside any metro area. Mobilization, lodging, and per diem are scoped transparently into the bid rather than added as surprises later.",
  },
  {
    q: "Can you erect on a site without paved access?",
    a: "In most cases, yes — we plan crane positioning and material staging around actual site conditions, including unpaved or seasonal access roads, rather than assuming standard urban site logistics.",
  },
  {
    q: "What building types fall under 'agricultural commercial'?",
    a: "Storage and processing facilities, equipment buildings, utility structures, and other commercial-scale buildings on agricultural or rural sites — generally larger and more structurally involved than a standard pole barn, which is where our erection and welding crews come in.",
  },
];

export default function AgriculturalRuralPage() {
  return (
    <>
      <PageHeader
        eyebrow="Building Types / Agricultural & Rural Commercial"
        title="Agricultural & Rural Commercial Steel Erection"
        intro="Rural commercial and agricultural steel buildings, wherever the site actually is — mobilization scoped honestly, not as an afterthought."
        image="/images/1000009653.jpg"
        imageAlt="Structural steel connection detail on a rural commercial job site"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed">
            Agricultural and rural commercial buildings don't always come
            with a nearby steel erector willing to make the drive. Godspeed
            Welding bids and erects these jobs the same way we'd bid one
            down the road — real mobilization numbers, a crew that brings
            what it needs, and a schedule built around the site's actual
            conditions.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-3">
            What's Different Here
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What rural commercial steel actually needs
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
            Rural &amp; agricultural construction FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Got a rural or agricultural steel job?"
        subtitle="Tell us where it is — distance isn't a reason we won't bid it."
      />
    </>
  );
}
