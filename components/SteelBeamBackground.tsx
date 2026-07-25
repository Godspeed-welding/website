"use client";

import { RefObject } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// A technical line-drawing of a steel frame, built entirely in SVG - no
// photo. The frame assembles as the user scrolls, driven by real scroll
// position against the tall outer section in Hero.tsx (the sticky pin
// pattern) - not this component's own container, since that's pinned in
// place and wouldn't produce useful scroll progress on its own.
export default function SteelBeamBackground({
  scrollRef,
}: {
  scrollRef: RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const seg = (start: number, end: number) => useTransform(scrollYProgress, [start, end], [0, 1]);

  const baseLine = seg(0, 0.12);
  const col1 = seg(0.05, 0.2);
  const col2 = seg(0.1, 0.25);
  const col3 = seg(0.15, 0.3);
  const beams = seg(0.28, 0.42);
  const bracing = seg(0.4, 0.55);
  const bolts = seg(0.52, 0.6);
  const callout = seg(0.58, 0.68);

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
            style={{ pathLength: baseLine }}
          />

          <motion.line x1={780} y1={560} x2={780} y2={260} stroke="white" strokeWidth="2" style={{ pathLength: col1 }} />
          <motion.line x1={960} y1={560} x2={960} y2={260} stroke="white" strokeWidth="2" style={{ pathLength: col2 }} />
          <motion.line x1={1140} y1={560} x2={1140} y2={260} stroke="white" strokeWidth="2" style={{ pathLength: col3 }} />

          <motion.path
            d="M780 260 L960 240 L1140 260"
            stroke="white"
            strokeWidth="2.5"
            fill="none"
            style={{ pathLength: beams }}
          />

          <motion.path
            d="M780 560 L960 260 M960 560 L1140 260"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="4 5"
            fill="none"
            opacity="0.35"
            style={{ pathLength: bracing }}
          />

          {[
            [780, 260],
            [960, 240],
            [1140, 260],
          ].map(([cx, cy]) => (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="5"
              stroke="white"
              strokeWidth="1.5"
              fill="black"
              style={{ scale: bolts, opacity: bolts }}
            />
          ))}

          <motion.g style={{ opacity: callout }}>
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
