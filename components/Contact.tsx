"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    scope: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Bid Request — ${form.company || form.name || "New Project"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject Location: ${form.location}\n\nScope of Work:\n${form.scope}`
    );
    window.location.href = `mailto:info@godspeedwelding.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full bg-charcoal border border-white/15 focus:border-arc-blue-bright rounded-[1px] px-4 py-3 text-steel-silver placeholder:text-steel-silver-dim/60 outline-none transition-colors";

  return (
    <section id="contact" className="relative bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid lg:grid-cols-5 gap-14">
          <div className="lg:col-span-2">
            <p className="font-utility text-xs tracking-[0.3em] uppercase text-arc-blue-bright mb-3">
              Get a Bid
            </p>
            <h2 className="font-display font-extrabold uppercase text-4xl md:text-5xl steel-text leading-[0.95] mb-6">
              Send us the scope. We'll send back a number.
            </h2>
            <p className="text-steel-silver-dim leading-relaxed mb-8 max-w-md">
              Tell us where the project is, what it is, and when you need
              steel in the air. We bid nationwide and travel for the right
              job.
            </p>

            <div className="space-y-4 font-utility text-sm">
              <div>
                <span className="text-steel-silver-dim uppercase tracking-widest text-xs">Email</span>
                <a href="mailto:info@godspeedwelding.com" className="block text-white hover:text-arc-blue-bright transition-colors">
                  info@godspeedwelding.com
                </a>
              </div>
              <div>
                <span className="text-steel-silver-dim uppercase tracking-widest text-xs">Phone</span>
                <a href="tel:+18285550000" className="block text-white hover:text-arc-blue-bright transition-colors">
                  (828) 555-0000
                </a>
              </div>
              <div>
                <span className="text-steel-silver-dim uppercase tracking-widest text-xs">Based In</span>
                <span className="block text-white">North Carolina — bidding nationwide</span>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gunmetal border border-white/10 rounded-[1px] p-7 md:p-10"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                className={inputClass}
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                className={inputClass}
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
              <input
                required
                type="email"
                className={inputClass}
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className={inputClass}
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <input
              className={`${inputClass} mt-5`}
              placeholder="Project location (city, state)"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />

            <textarea
              required
              rows={4}
              className={`${inputClass} mt-5 resize-none`}
              placeholder="Scope of work — building type, square footage, timeline..."
              value={form.scope}
              onChange={(e) => setForm({ ...form, scope: e.target.value })}
            />

            <button
              type="submit"
              className="mt-6 font-display uppercase tracking-wider text-sm md:text-base bg-arc-blue hover:bg-arc-blue-bright text-white px-8 py-3.5 rounded-[1px] transition-colors w-full sm:w-auto"
            >
              Send Bid Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
