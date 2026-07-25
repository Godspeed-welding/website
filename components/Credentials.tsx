// NOTE for Brock: swap in the exact safety-hours/incident-free number here
// as soon as you have it pulled - that's the strongest plate on this list
// once it's a real figure instead of a placeholder.
const CREDENTIALS = [
  {
    label: "Experience",
    value: "10+ Years in Operation",
    note: "Structural steel erection, welding, and fabrication since day one.",
  },
  {
    label: "Crew Training",
    value: "OSHA 10 & 30 Certified",
    note: "Every crew member trained before stepping on site.",
  },
  {
    label: "Equipment",
    value: "Owned + Partner Crane Fleet",
    note: "Right-sized rigging for every lift, in-house or partnered.",
  },
  {
    label: "Bid Reach",
    value: "Nationwide",
    note: "Retail, industrial, and agricultural commercial builds.",
  },
];

export default function Credentials() {
  return (
    <section className="border-y border-ember/20 tread-plate">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-16">
        <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-ember-bright mb-8">
          Credentials &amp; Standards
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {CREDENTIALS.map((c) => (
            <div key={c.label} className="data-plate bg-gunmetal p-5 md:p-6">
              <div className="font-utility text-[0.65rem] tracking-widest uppercase text-steel-silver-dim mb-2">
                {c.label}
              </div>
              <div className="font-display font-bold uppercase text-lg md:text-xl text-white leading-tight mb-2">
                {c.value}
              </div>
              <p className="text-sm text-steel-silver-dim leading-snug">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
