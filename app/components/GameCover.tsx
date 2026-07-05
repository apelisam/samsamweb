export default function GameCover() {
  return (
    <svg
      viewBox="0 0 680 340"
      className="h-full w-full"
      role="img"
      aria-label="Nyota Vanguard cover art: a ship flying through a starfield toward a ringed planet"
    >
      <defs>
        <radialGradient id="planetGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b4a6b" />
          <stop offset="100%" stopColor="#1a2035" />
        </radialGradient>
        <linearGradient id="engine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffb347" />
          <stop offset="100%" stopColor="#ff6b35" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="680" height="340" fill="#0a0e1a" />
      {[
        [60, 40, 1.2],
        [130, 90, 1],
        [220, 30, 1.5],
        [310, 70, 1],
        [410, 20, 1.3],
        [480, 60, 1],
        [560, 35, 1.4],
        [620, 85, 1],
        [40, 150, 1],
        [150, 200, 1.2],
        [260, 160, 1],
        [380, 220, 1.3],
        [500, 180, 1],
        [600, 250, 1.2],
        [90, 280, 1],
        [200, 300, 1.4],
        [330, 290, 1],
        [450, 310, 1.1],
        [570, 300, 1.3],
        [70, 220, 1],
        [640, 180, 1.2],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#ffffff" opacity="0.7" />
      ))}
      <circle cx="560" cy="90" r="46" fill="url(#planetGlow)" />
      <ellipse
        cx="560"
        cy="90"
        rx="62"
        ry="14"
        fill="none"
        stroke="#6b7fa8"
        strokeWidth="1.5"
        opacity="0.6"
        transform="rotate(-18 560 90)"
      />
      <g transform="translate(150,250)">
        <polygon
          points="0,-34 -18,20 0,10 18,20"
          fill="#4a90d9"
          stroke="#8ec5ff"
          strokeWidth="1"
        />
        <polygon points="-18,20 -30,30 -10,14" fill="#3a7bc0" />
        <polygon points="18,20 30,30 10,14" fill="#3a7bc0" />
        <ellipse cx="0" cy="26" rx="7" ry="16" fill="url(#engine)" />
      </g>
      <g opacity="0.85">
        <polygon points="450,120 442,132 458,132" fill="#c0525a" />
        <polygon points="500,150 492,160 508,160" fill="#c0525a" />
        <polygon points="380,90 373,100 387,100" fill="#c0525a" />
      </g>
      <text
        x="340"
        y="200"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="42"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="2"
      >
        NYOTA VANGUARD
      </text>
      <text
        x="340"
        y="228"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="14"
        fill="#8ec5ff"
        letterSpacing="4"
      >
        DEFEND THE STARS
      </text>
    </svg>
  );
}
