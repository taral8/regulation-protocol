"use client";

import { motion } from "framer-motion";

/**
 * Flower of Life sacred geometry — renders as a subtle, luminous SVG
 * designed to sit on the right side of the hero section.
 */
export function SacredGeometry({ className = "" }: { className?: string }) {
  // Centre of the pattern
  const cx = 300;
  const cy = 300;
  const r = 80; // radius of each circle

  // Flower of Life: 1 centre + 6 around it (first ring) + 12 around those (second ring)
  const angles6 = Array.from({ length: 6 }, (_, i) => (i * 60 * Math.PI) / 180);

  // First petal ring (6 circles)
  const ring1 = angles6.map((a) => ({
    x: cx + r * Math.cos(a),
    y: cy + r * Math.sin(a),
  }));

  // Second petal ring (12 circles)
  const ring2: { x: number; y: number }[] = [];
  for (let i = 0; i < 6; i++) {
    const a1 = (i * 60 * Math.PI) / 180;
    const a2 = ((i * 60 + 30) * Math.PI) / 180;
    ring2.push(
      { x: cx + 2 * r * Math.cos(a1), y: cy + 2 * r * Math.sin(a1) },
      {
        x: cx + r * Math.sqrt(3) * Math.cos(a2),
        y: cy + r * Math.sqrt(3) * Math.sin(a2),
      }
    );
  }

  const allCircles = [
    { x: cx, y: cy },
    ...ring1,
    ...ring2,
  ];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Soft gold gradient for the strokes */}
          <radialGradient id="geo-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4b896" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#c9a87c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#b8935f" stopOpacity="0.05" />
          </radialGradient>
          {/* Outer fade mask so the pattern blends at the edges */}
          <radialGradient id="geo-mask-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="65%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="geo-fade">
            <rect width="600" height="600" fill="url(#geo-mask-gradient)" />
          </mask>
        </defs>

        <g mask="url(#geo-fade)">
          {allCircles.map((c, i) => (
            <motion.circle
              key={i}
              cx={c.x}
              cy={c.y}
              r={r}
              stroke="url(#geo-glow)"
              strokeWidth="0.8"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: 0.5 + i * 0.06,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Outer bounding circle */}
          <motion.circle
            cx={cx}
            cy={cy}
            r={r * 3}
            stroke="url(#geo-glow)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 2.5, delay: 1.8, ease: "easeOut" }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
