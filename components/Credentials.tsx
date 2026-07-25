// NOTE for Brock: add AISC certification, bonding capacity, EMR rating, and
// years-in-business here as soon as you have the documentation - these are
// the numbers that actually differentiate a bid, more than OSHA 10/30 alone.
const CREDENTIALS = [
  {
    label: "Crew Training",
    value: "OSHA 10 & 30 Certified",
    note: "Every crew member trained before stepping on site.",
  },
  {
    label: "Capability",
    value: "In-House Fab + Erection",
    note: "No subcontracting the structural work.",
  },
  {
    label: "Bid Reach",
    value: "Nationwide",
    note: "Retail, industrial, and agricultural commercial builds.",
  },
  {
    label: "Accountability",
    value: "One Crew, Quote to Punch List",
    note: "Same team on the bid is the team on the roof.",
  },
];

export default function Credentials() {
  return (
    <section className="border-y border-white/10 bg-gunmetal">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-16">
        <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-8">
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
