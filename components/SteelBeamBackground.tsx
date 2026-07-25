"use client";

import { motion } from "framer-motion";

// A technical line-drawing of a steel frame, built entirely in SVG - no
// photo, a few KB instead of a multi-MB image. Simple on-load reveal,
// positioned in the right two-thirds of the frame so it never competes
// with the headline, which sits bottom-left.
export default function SteelBeamBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
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
        <rect width="100%" height="100%" fill="url(#ibeam-pattern)" opacity="0.05" />
      </svg>

      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g opacity="0.9">
          <motion.path
            d="M700 620 L1140 620 M700 620 L780 560 M1140 620 L1060 560"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.22"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />

          {[780, 960, 1140].map((x, i) => (
            <motion.line
              key={x}
              x1={x}
              y1={560}
              x2={x}
              y2={260}
              stroke="white"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: "easeInOut" }}
            />
          ))}

          <motion.path
            d="M780 260 L960 240 L1140 260"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease: "easeInOut" }}
          />

          <motion.path
            d="M780 560 L960 260 M960 560 L1140 260"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 5"
            fill="none"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          />

          {[
            [780, 260],
            [960, 240],
            [1140, 260],
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
              transition={{ duration: 0.3, delay: 1.3 + i * 0.08 }}
            />
          ))}

          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <line x1="780" y1="205" x2="1140" y2="205" stroke="white" strokeWidth="0.75" opacity="0.45" />
            <line x1="780" y1="200" x2="780" y2="210" stroke="white" strokeWidth="0.75" opacity="0.45" />
            <line x1="1140" y1="200" x2="1140" y2="210" stroke="white" strokeWidth="0.75" opacity="0.45" />
            <text x="880" y="193" fill="white" fontSize="12" fontFamily="var(--font-plex-mono), monospace" opacity="0.55" letterSpacing="1">
              W12&times;26 — 30&#39;-0&#34;
            </text>
          </motion.g>
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/70" />
    </div>
  );
}
