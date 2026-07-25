"use client";

import { motion } from "framer-motion";

// A technical line-drawing of a steel frame connection, built entirely in
// SVG - no photo. Reads as a structural shop drawing / blueprint rather
// than a stock hero image, ties directly to what the company actually
// does, and costs almost nothing over the wire (a few KB vs a multi-MB
// photo), which matters for LCP.
export default function SteelBeamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* tiled I-beam cross-section pattern, very low opacity */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="ibeam-pattern" width="90" height="90" patternUnits="userSpaceOnUse">
            <path
              d="M10 10 H30 M20 10 V30 M10 30 H30 M50 10 H70 M60 10 V30 M50 30 H70"
              stroke="white"
              strokeWidth="1"
              fill="none"
              opacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ibeam-pattern)" opacity="0.06" />
      </svg>

      {/* main technical illustration: axonometric steel frame with
          dimension lines and beam callouts, drawn on load */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <g opacity="0.9">
          {/* base grid / foundation lines */}
          <motion.path
            d="M120 620 L1080 620 M120 620 L220 560 M1080 620 L980 560"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* primary frame - columns */}
          {[220, 500, 780, 980].map((x, i) => (
            <motion.line
              key={x}
              x1={x}
              y1={i % 2 === 0 ? 560 : 560}
              x2={x}
              y2={i % 2 === 0 ? 240 : 260}
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: "easeInOut" }}
            />
          ))}

          {/* primary beams connecting columns */}
          <motion.path
            d="M220 260 L500 240 L780 260 L980 260"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          />

          {/* diagonal bracing */}
          <motion.path
            d="M220 560 L500 240 M500 560 L780 260 M780 560 L980 260"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 5"
            fill="none"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.3, delay: 1.1, ease: "easeInOut" }}
          />

          {/* bolt circles at connection nodes */}
          {[
            [220, 260],
            [500, 240],
            [780, 260],
            [980, 260],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="5"
              stroke="white"
              strokeWidth="1.5"
              fill="black"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.6 + i * 0.08 }}
            />
          ))}

          {/* dimension line + beam callout, real AISC-style designation */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <line x1="500" y1="200" x2="780" y2="200" stroke="white" strokeWidth="0.75" opacity="0.5" />
            <line x1="500" y1="195" x2="500" y2="205" stroke="white" strokeWidth="0.75" opacity="0.5" />
            <line x1="780" y1="195" x2="780" y2="205" stroke="white" strokeWidth="0.75" opacity="0.5" />
            <text x="600" y="188" fill="white" fontSize="13" fontFamily="var(--font-plex-mono), monospace" opacity="0.65" letterSpacing="1">
              W12&times;26 — 30&#39;-0&#34;
            </text>
          </motion.g>
        </g>
      </svg>

      {/* fade to solid black at the edges so content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
    </div>
  );
}
