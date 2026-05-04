import { motion } from 'framer-motion';

// Stylized circuit-board / nodes illustration. Pure SVG, no images.
export default function HeroArt() {
  return (
    <div className="relative h-full w-full">
      <motion.svg
        viewBox="0 0 520 560"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>

        <rect width="520" height="560" fill="url(#grid)" />

        {/* Central server-rack frame */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="1" fill="none">
          <rect x="160" y="120" width="200" height="320" rx="8" />
          <line x1="160" y1="180" x2="360" y2="180" />
          <line x1="160" y1="240" x2="360" y2="240" />
          <line x1="160" y1="300" x2="360" y2="300" />
          <line x1="160" y1="360" x2="360" y2="360" />
        </g>

        {/* Rack LEDs */}
        {[150, 210, 270, 330, 390].map((y, i) => (
          <g key={y}>
            <circle cx="180" cy={y} r="3" fill="#6366F1" opacity={0.85}>
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            <circle cx="200" cy={y} r="3" fill="#A8A89E" opacity="0.5" />
            <rect x="220" y={y - 4} width="120" height="8" rx="2" fill="rgba(255,255,255,0.05)" />
          </g>
        ))}

        {/* Outer circuit lines */}
        <g stroke="url(#lineGrad)" strokeWidth="1.4" fill="none">
          <path d="M40 100 L120 100 L120 200 L160 200" />
          <path d="M40 260 L100 260 L100 320 L160 320" />
          <path d="M480 140 L400 140 L400 220 L360 220" />
          <path d="M480 360 L420 360 L420 300 L360 300" />
          <path d="M260 460 L260 500 L120 500" />
          <path d="M260 460 L260 510 L420 510" />
        </g>

        {/* Outer nodes */}
        {[
          [40, 100], [40, 260], [480, 140], [480, 360], [120, 500], [420, 510],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill="url(#dotGlow)" />
            <circle cx={cx} cy={cy} r="5" fill="#0D0D0D" stroke="#6366F1" strokeWidth="1.5" />
          </g>
        ))}

        {/* Floating mono labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(168,168,158,0.7)">
          <text x="40" y="86">api/v1</text>
          <text x="40" y="246">opc.ua</text>
          <text x="450" y="126">node</text>
          <text x="450" y="346">django</text>
          <text x="60" y="490">mysql</text>
          <text x="380" y="500">react</text>
        </g>

        {/* Center pulse */}
        <circle cx="260" cy="280" r="6" fill="#6366F1">
          <animate attributeName="r" values="6;10;6" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <text x="260" y="86" textAnchor="middle" fontFamily="Syne, sans-serif" fontWeight="700" fontSize="11" fill="rgba(250,250,247,0.55)" letterSpacing="3">
          SYSTEM ONLINE
        </text>
      </motion.svg>
    </div>
  );
}
