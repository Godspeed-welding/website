"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SERVICES = [
  { href: "/services/structural-steel-erection", label: "Structural Steel Erection" },
  { href: "/services/welding", label: "Structural Welding" },
  { href: "/services/fabrication", label: "Custom Fabrication" },
];

const BUILDING_TYPES = [
  { href: "/building-types/retail-big-box", label: "Retail & Big-Box" },
  { href: "/building-types/industrial-warehouse", label: "Industrial & Warehouse" },
  { href: "/building-types/agricultural-rural", label: "Agricultural & Rural" },
];

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [typesOpen, setTypesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-arc-blue">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-8 flex items-center justify-between text-xs font-utility tracking-wide">
          <span className="hidden sm:inline text-white/90">
            OSHA 10/30 Certified Crews · Bidding Nationwide
          </span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:+17044986870" className="text-white hover:text-charcoal transition-colors">
              (704) 498-6870
            </a>
            <a href="mailto:justin@godspeedwelding.com" className="hidden sm:inline text-white hover:text-charcoal transition-colors">
              justin@godspeedwelding.com
            </a>
          </div>
        </div>
      </div>
      <div
        className={`transition-colors duration-300 ${
          scrolled ? "bg-charcoal/95 backdrop-blur border-b border-white/10" : "bg-gradient-to-b from-charcoal/80 to-transparent"
        }`}
      >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="font-display font-extrabold tracking-wide text-xl md:text-2xl uppercase text-white">
          Godspeed <span className="text-arc-blue-bright">Welding</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-display uppercase tracking-wider text-sm text-steel-silver-dim">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="hover:text-white transition-colors flex items-center gap-1">
              Services
              <span className="text-[0.6rem]">▾</span>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-3 w-64">
                <div className="bg-gunmetal border border-white/10 flex flex-col">
                  <Link
                    href="/services"
                    className="px-4 py-3 text-sm text-arc-blue-bright hover:bg-white/5 transition-colors border-b border-white/10"
                  >
                    All Services
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="px-4 py-3 text-sm hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setTypesOpen(true)}
            onMouseLeave={() => setTypesOpen(false)}
          >
            <button className="hover:text-white transition-colors flex items-center gap-1">
              Building Types
              <span className="text-[0.6rem]">▾</span>
            </button>
            {typesOpen && (
              <div className="absolute top-full left-0 pt-3 w-64">
                <div className="bg-gunmetal border border-white/10 flex flex-col">
                  {BUILDING_TYPES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="px-4 py-3 text-sm hover:bg-white/5 hover:text-white transition-colors border-b border-white/5 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-[1px] border border-arc-blue/60 px-4 py-2 text-steel-silver hover:bg-arc-blue/15 hover:text-white transition-colors"
          >
            Get a Bid
          </Link>
        </nav>

        <button
          className="md:hidden text-steel-silver p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current mb-1.5" />
          <div className="w-6 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-1 font-display uppercase tracking-wider text-steel-silver max-h-[80vh] overflow-y-auto">
          <p className="text-xs text-steel-silver-dim mt-2 mb-1">Services</p>
          {SERVICES.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm">
              {l.label}
            </Link>
          ))}
          <p className="text-xs text-steel-silver-dim mt-3 mb-1">Building Types</p>
          {BUILDING_TYPES.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-sm">
              {l.label}
            </Link>
          ))}
          <div className="border-t border-white/10 mt-3 pt-3 flex flex-col gap-2">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="text-arc-blue-bright">
              Get a Bid
            </Link>
          </div>
        </nav>
      )}
      </div>
    </header>
  );
}
