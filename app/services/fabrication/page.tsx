import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Custom Steel Fabrication | Stairs, Rail & Architectural Steel",
  description:
    "In-house custom steel fabrication for stairs, rail, canopies, and architectural steel — built to print and finished before delivery.",
};

const CAPABILITIES = [
  {
    title: "Stairs & Platforms",
    copy:
      "Steel pan stairs, floating stringer stairs, and access platforms — fabricated to the architectural drawings, fit-checked in the shop, and delivered ready to set.",
  },
  {
    title: "Railing & Guardrail",
    copy:
      "Code-compliant guardrail and handrail, from standard pipe rail to custom architectural designs, built to the load and height requirements of the project.",
  },
  {
    title: "Canopies & Covered Walkways",
    copy:
      "Structural steel canopies and covered walkway framing, engineered connections, fabricated and finished before it goes on the truck.",
  },
  {
    title: "Architectural & One-Off Steel",
    copy:
      "Feature beams, custom brackets, and one-off architectural steel that doesn't come out of a standard catalog — built from shop drawings we develop with your team.",
  },
];

const FAQS = [
  {
    q: "Do you work from our drawings or do you develop shop drawings?",
    a: "Both. If your architect or structural engineer has issued drawings, we fabricate to those. Where a detail needs more resolution to actually build — connection details, field-fit conditions — we develop shop drawings and get them approved before cutting steel.",
  },
  {
    q: "Can you match an existing finish or design element?",
    a: "Yes. Custom architectural steel work often needs to match an existing rail profile, stair detail, or finish already on a building. We'll take dimensions and detail off the existing work rather than guessing at a close match.",
  },
  {
    q: "What's your typical fabrication timeline?",
    a: "It depends on scope and steel availability, but a straightforward stair or rail package usually runs a few weeks from approved shop drawings to delivery. We'll give you a real number once we know the scope — not a placeholder that slips once the job starts.",
  },
  {
    q: "Do you deliver and install, or fabricate only?",
    a: "We do both. Since we also run structural erection crews, fabricated work can be delivered and installed by the same company that built it — one less handoff, one less place for a dimension or a finish detail to get lost.",
  },
  {
    q: "Can you fabricate to a specific paint or coating spec?",
    a: "Yes — shop primer, full paint systems, or hot-dip galvanizing, depending on the exposure and the spec. Tell us the environment the piece is going into and we'll spec the coating to match, not just default to primer and call it done.",
  },
];

export default function FabricationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services / Custom Fabrication"
        title="Custom Fabrication"
        intro="Stairs, rail, canopies, and architectural steel — built to print in the shop and finished before it ever reaches your site."
        image="/images/1000009665.jpg"
        imageAlt="Custom fabricated structural steel components"
      />

      <section className="bg-charcoal py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <p className="text-lg text-steel-silver leading-relaxed mb-6">
            Not every piece of steel on a job comes out of a structural
            package. Stairs, rail, canopies, and architectural details need
            a shop that can build to print, fit-check before delivery, and
            finish the piece properly — so install day is about setting
            steel, not fixing it.
          </p>
          <p className="text-steel-silver-dim leading-relaxed">
            Godspeed Welding fabricates in-house and installs with our own
            crews, which means the same standard follows a piece from the
            shop floor to the final connection on site.
          </p>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-y border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            Shop Capabilities
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-12">
            What we build
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="border-t-2 border-arc-blue/50 pt-5">
                <h3 className="font-display font-bold uppercase text-xl text-white mb-3">
                  {c.title}
                </h3>
                <p className="text-steel-silver-dim leading-relaxed">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gunmetal py-20 md:py-24 border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
            Common Questions
          </p>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading mb-10">
            Fabrication FAQ
          </h2>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand
        title="Have a fabrication scope to price?"
        subtitle="Send drawings or reference photos — we'll tell you what's realistic."
      />
    </>
  );
}
