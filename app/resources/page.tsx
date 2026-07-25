import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resource Center | Steel Erection & Welding Guides",
  description:
    "Straight answers on structural steel erection, welding, and fabrication — written for general contractors and developers evaluating a steel bid.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resource Center"
        title="Straight answers for GCs and developers."
        intro="No sales copy — just real answers to the questions that come up before, during, and after a structural steel bid."
      />

      <section className="bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10 divide-y divide-white/10">
          {RESOURCES.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group block py-8 first:pt-0"
            >
              <p className="font-utility text-xs tracking-widest uppercase text-arc-blue-bright mb-3">
                {r.category} · {r.readTime}
              </p>
              <h2 className="font-display font-bold uppercase text-2xl md:text-3xl text-white group-hover:text-arc-blue-bright transition-colors mb-3 leading-tight">
                {r.title}
              </h2>
              <p className="text-steel-silver-dim leading-relaxed max-w-2xl">{r.dek}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
