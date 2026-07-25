export default function Footer() {
  return (
    <footer className="bg-gunmetal border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-display font-extrabold uppercase tracking-wide text-lg">
          <span className="steel-text">Godspeed</span>{" "}
          <span className="arc-text">Welding</span>
        </div>
        <p className="font-utility text-xs text-steel-silver-dim tracking-wide text-center">
          Commercial Steel Erection · Welding · Fabrication — Nationwide Bid Work
        </p>
        <p className="font-utility text-xs text-steel-silver-dim">
          &copy; {new Date().getFullYear()} Godspeed Welding, LLC
        </p>
      </div>
    </footer>
  );
}
