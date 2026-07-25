import Link from "next/link";
import { RESOURCES } from "@/lib/resources";

export default function ResourcesTeaser() {
  const items = RESOURCES.slice(0, 3);
  return (
    <section className="relative bg-gunmetal py-20 md:py-24 border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="spec-tick font-utility text-xs tracking-[0.25em] uppercase text-arc-blue-bright mb-3">
              Resource Center
            </p>
            <h2 className="font-display font-bold uppercase text-4xl md:text-5xl plate-heading leading-[0.95]">
              Straight answers for GCs and developers.
            </h2>
          </div>
          <Link
            href="/resources"
            className="font-display uppercase tracking-wider text-sm border border-steel-silver-dim/60 hover:border-arc-blue-bright hover:text-white text-steel-silver px-6 py-3 rounded-[1px] transition-colors"
          >
            All Resources
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {items.map((r) => (
            <div key={r.slug} className="bg-gunmetal p-7">
              <p className="font-utility text-xs tracking-widest uppercase text-arc-blue-bright mb-3">
                {r.category}
              </p>
              <Link href={`/resources/${r.slug}`} className="group">
                <h3 className="font-display font-bold uppercase text-xl text-white mb-3 group-hover:text-arc-blue-bright transition-colors leading-tight">
                  {r.title}
                </h3>
              </Link>
              <p className="text-sm text-steel-silver-dim leading-relaxed mb-4">{r.dek}</p>
              <span className="font-utility text-xs text-steel-silver-dim">{r.readTime}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
