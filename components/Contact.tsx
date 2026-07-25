const PHONE_DISPLAY = "(704) 498-6870";
const PHONE_TEL = "+17044986870";
const EMAIL = "justin@godspeedwelding.com";

const ACTIONS = [
  {
    label: "Call",
    detail: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    sub: "Fastest way to reach us during business hours.",
  },
  {
    label: "Text",
    detail: PHONE_DISPLAY,
    href: `sms:${PHONE_TEL}`,
    sub: "Send site photos, drawings, or a quick scope.",
  },
  {
    label: "Email",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    sub: "Best for full bid packages and drawings.",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {ACTIONS.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="group bg-gunmetal p-8 md:p-10 flex flex-col justify-between hover:bg-gunmetal-light transition-colors"
            >
              <div>
                <span className="font-utility text-xs tracking-widest uppercase text-arc-blue-bright">
                  {a.label}
                </span>
                <div className="font-display font-bold text-2xl md:text-3xl text-white mt-3 mb-3 group-hover:text-arc-blue-bright transition-colors">
                  {a.detail}
                </div>
                <p className="text-sm text-steel-silver-dim leading-relaxed">{a.sub}</p>
              </div>
              <div className="mt-8 font-display uppercase tracking-wider text-sm text-steel-silver flex items-center gap-2">
                {a.label} Now <span aria-hidden>&rarr;</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-8 font-utility text-xs text-steel-silver-dim tracking-wide text-center">
          Based in North Carolina — bidding nationwide
        </p>
      </div>
    </section>
  );
}
