import Link from "next/link";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/services/structural-steel-erection", label: "Structural Steel Erection" },
      { href: "/services/welding", label: "Structural Welding" },
      { href: "/services/fabrication", label: "Custom Fabrication" },
    ],
  },
  {
    title: "Building Types",
    links: [
      { href: "/building-types/retail-big-box", label: "Retail & Big-Box" },
      { href: "/building-types/industrial-warehouse", label: "Industrial & Warehouse" },
      { href: "/building-types/agricultural-rural", label: "Agricultural & Rural" },
      { href: "/building-types/education", label: "Education" },
      { href: "/building-types/healthcare", label: "Healthcare" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/work", label: "Our Work" },
      { href: "/about", label: "About & Credentials" },
      { href: "/resources", label: "Resource Center" },
      { href: "/contact", label: "Get a Bid" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gunmetal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-display font-extrabold uppercase tracking-wide text-xl text-white">
              Godspeed <span className="text-ember-bright">Welding</span>
            </Link>
            <p className="mt-4 text-sm text-steel-silver-dim leading-relaxed max-w-xs">
              Commercial steel erection, structural welding, and custom
              fabrication. Nationwide bid work.
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              <a href="tel:+17044986870" className="text-sm text-white hover:text-ember-bright transition-colors">
                (704) 498-6870
              </a>
              <a href="mailto:justin@godspeedwelding.com" className="text-sm text-white hover:text-ember-bright transition-colors">
                justin@godspeedwelding.com
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-utility text-xs tracking-widest uppercase text-steel-silver-dim mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-steel-silver hover:text-ember-bright transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-utility text-xs text-steel-silver-dim">
            &copy; {new Date().getFullYear()} Godspeed Welding, LLC
          </p>
          <p className="font-utility text-xs text-steel-silver-dim tracking-wide">
            OSHA 10/30 Certified Crews · Based in North Carolina · Bidding Nationwide
          </p>
        </div>
      </div>
    </footer>
  );
}
