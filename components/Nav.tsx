"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Get a Bid" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-charcoal/90 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-display font-extrabold tracking-wide text-xl md:text-2xl uppercase">
          <span className="steel-text">Godspeed</span>{" "}
          <span className="arc-text">Welding</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-display uppercase tracking-wider text-sm text-steel-silver-dim">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={
                l.href === "#contact"
                  ? "rounded-[1px] border border-arc-blue/60 px-4 py-2 text-steel-silver hover:bg-arc-blue/15 hover:text-white transition-colors"
                  : "hover:text-white transition-colors"
              }
            >
              {l.label}
            </a>
          ))}
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
        <nav className="md:hidden bg-charcoal border-t border-white/10 px-6 py-4 flex flex-col gap-4 font-display uppercase tracking-wider text-steel-silver">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
