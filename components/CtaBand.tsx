import Link from "next/link";

const PHONE_DISPLAY = "(704) 498-6870";
const PHONE_TEL = "+17044986870";

export default function CtaBand({
  title = "Call, text, or email — whatever's fastest.",
  subtitle = "We bid nationwide and travel for the right job.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-charcoal border-y border-white/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h2 className="font-display font-bold uppercase text-3xl md:text-4xl plate-heading leading-tight mb-2">
            {title}
          </h2>
          <p className="text-steel-silver-dim">{subtitle}</p>
        </div>
        <div className="shrink-0 flex flex-wrap gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-display uppercase tracking-wider text-sm md:text-base bg-ember hover:bg-ember-bright text-white px-7 py-4 rounded-[1px] transition-colors"
          >
            Call {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="font-display uppercase tracking-wider text-sm md:text-base border border-steel-silver-dim/60 hover:border-steel-silver text-steel-silver px-7 py-4 rounded-[1px] transition-colors"
          >
            Text / Email
          </Link>
        </div>
      </div>
    </section>
  );
}
