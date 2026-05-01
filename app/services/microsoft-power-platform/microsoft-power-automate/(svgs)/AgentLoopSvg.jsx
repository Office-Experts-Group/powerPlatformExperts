import styles from "../../../../../styles/agentLoopSvg.module.css";

const AgentLoopSvg = () => {
  // Pentagon geometry: centre (200, 200), radius 130
  // Nodes at angles: -90 (top), -18, 54, 126, 198 degrees
  // i.e. evenly spaced starting at top
  const cx = 200;
  const cy = 200;
  const r = 128;

  const nodeAngles = [-90, -18, 54, 126, 198]; // degrees, clockwise from top
  const nodes = [
    { label: "Monitor", sub: "Watches your systems", angle: -90 },
    { label: "Detect", sub: "Identifies conditions", angle: -18 },
    { label: "Decide", sub: "Applies business rules", angle: 54 },
    { label: "Act", sub: "Executes the workflow", angle: 126 },
    { label: "Report", sub: "Logs & surfaces exceptions", angle: 198 },
  ];

  const toRad = (deg) => (deg * Math.PI) / 180;

  const nodePos = nodes.map(({ angle, ...rest }) => ({
    ...rest,
    angle,
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  }));

  // Build the orbit path string for the dashed ring
  // Large circle, radius = r, centred at (cx, cy)
  const orbitD = `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.001} ${cy - r}`;

  // Spoke lines from hub to each node box edge (shortened by 34px so they
  // don't overdraw the node box)
  const spokeEnd = (x, y) => {
    const dx = x - cx;
    const dy = y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const shorten = 38;
    return {
      x: cx + (dx / dist) * (dist - shorten),
      y: cy + (dy / dist) * (dist - shorten),
    };
  };

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.agentSvg}
      aria-label="Autonomous agent decision loop: Monitor, Detect, Decide, Act, Report"
      role="img"
    >
      {/* ── Orbit ring (dashed) ── */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="rgba(4,105,153,0.22)"
        strokeWidth="1"
        strokeDasharray="5 4"
      />

      {/* ── Pulse ring behind hub ── */}
      <circle
        cx={cx}
        cy={cy}
        r={32}
        stroke="rgba(4,105,153,0.3)"
        strokeWidth="1"
        fill="none"
        className={styles.hubRing}
      />

      {/* ── Spokes from hub to nodes ── */}
      {nodePos.map(({ label, x, y }) => {
        const end = spokeEnd(x, y);
        return (
          <line
            key={`spoke-${label}`}
            x1={cx}
            y1={cy}
            x2={end.x}
            y2={end.y}
            stroke="rgba(4,105,153,0.25)"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        );
      })}

      {/* ── Animated data packets on the orbit ── */}
      {/* SVG offset-path animation via CSS classes */}
      {[styles.packet, styles.packet2, styles.packet3].map((cls, i) => (
        <circle key={i} r="4" fill="#046999" opacity="0.9" className={cls} />
      ))}

      {/* ── Central hub ── */}
      <circle
        cx={cx}
        cy={cy}
        r={28}
        fill="rgba(4,105,153,0.18)"
        stroke="rgba(4,105,153,0.6)"
        strokeWidth="1.2"
      />
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.5"
        fill="rgba(4,105,153,0.9)"
      >
        COPILOT
      </text>
      <text
        x={cx}
        y={cy + 7}
        textAnchor="middle"
        fontSize="8"
        fontWeight="700"
        letterSpacing="1.5"
        fill="rgba(4,105,153,0.9)"
      >
        AGENT
      </text>

      {/* ── Pentagon nodes ── */}
      {nodePos.map(({ label, sub, x, y }, i) => {
        // Box: 88 × 46, centred on (x, y)
        const bw = 88;
        const bh = 46;
        const bx = x - bw / 2;
        const by = y - bh / 2;

        // Stagger opacity pop animation
        const delay = `${i * 0.6}s`;

        return (
          <g key={label} style={{ animationDelay: delay }}>
            {/* Node box */}
            <rect
              x={bx}
              y={by}
              width={bw}
              height={bh}
              rx="6"
              fill="rgba(24,35,46,0.95)"
              stroke="rgba(4,105,153,0.45)"
              strokeWidth="1.2"
            />
            {/* Accent top bar */}
            <rect
              x={bx}
              y={by}
              width={bw}
              height={3}
              rx="3"
              fill="rgba(4,105,153,0.6)"
            />
            {/* Step number */}
            <text
              x={bx + 8}
              y={by + 14}
              fontSize="6.5"
              fontWeight="700"
              letterSpacing="1"
              fill="rgba(4,105,153,0.7)"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
            {/* Label */}
            <text
              x={x}
              y={by + 24}
              textAnchor="middle"
              fontSize="10"
              fontWeight="800"
              fill="rgba(255,255,255,0.88)"
              letterSpacing="-0.3"
            >
              {label}
            </text>
            {/* Sub-label */}
            <text
              x={x}
              y={by + 36}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(255,255,255,0.4)"
            >
              {sub}
            </text>
          </g>
        );
      })}

      {/* ── Directional chevrons on orbit ── */}
      {/* Placed at 0°, 72°, 144°, 216°, 288° — midpoints between nodes */}
      {[0, 72, 144, 216, 288].map((deg) => {
        const rad = toRad(deg);
        const px = cx + r * Math.cos(rad);
        const py = cy + r * Math.sin(rad);
        // Tangent direction (perpendicular to radius, clockwise)
        const tx = -Math.sin(rad);
        const ty = Math.cos(rad);
        const size = 5;
        return (
          <path
            key={deg}
            d={`M ${px - tx * size} ${py - ty * size} L ${px + tx * size} ${py + ty * size}`}
            stroke="rgba(4,105,153,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export default AgentLoopSvg;
