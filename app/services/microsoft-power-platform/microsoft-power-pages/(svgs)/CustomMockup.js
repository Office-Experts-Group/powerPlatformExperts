export const CustomMockup = () => (
  <svg
    viewBox="0 0 380 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="380" height="260" rx="8" fill="#111820" />
    <rect x="0" y="0" width="380" height="28" rx="8" fill="#18232e" />
    <circle cx="16" cy="14" r="4" fill="#c0392b" fillOpacity="0.7" />
    <circle cx="28" cy="14" r="4" fill="#f39c12" fillOpacity="0.7" />
    <circle cx="40" cy="14" r="4" fill="#27ae60" fillOpacity="0.7" />

    {/* Code panel left */}
    <rect
      x="12"
      y="38"
      width="148"
      height="190"
      rx="5"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <text
      x="22"
      y="53"
      fill="rgba(255,255,255,0.25)"
      fontSize="5.5"
      fontFamily="monospace"
    >
      // web resource
    </text>
    {[
      { t: "const data = await", c: "rgba(255,255,255,0.5)" },
      { t: "  fetch('/api/data')", c: "#7ec8e3" },
      { t: "  .then(r => r.json());", c: "rgba(255,255,255,0.4)" },
      { t: "", c: "" },
      { t: "new Chart(ctx, {", c: "#7ec8e3" },
      { t: "  type: 'bar',", c: "rgba(255,255,255,0.5)" },
      { t: "  data: {", c: "rgba(255,255,255,0.5)" },
      { t: "    labels: data.months,", c: "#046999" },
      { t: "    datasets: [{", c: "rgba(255,255,255,0.4)" },
      { t: "      data: data.values", c: "#046999" },
      { t: "    }]", c: "rgba(255,255,255,0.4)" },
      { t: "  }", c: "rgba(255,255,255,0.4)" },
      { t: "});", c: "#7ec8e3" },
    ].map((line, li) => (
      <text
        key={li}
        x="22"
        y={65 + li * 11}
        fill={line.c}
        fontSize="5.5"
        fontFamily="monospace"
      >
        {line.t}
      </text>
    ))}

    {/* Chart panel right */}
    <rect
      x="168"
      y="38"
      width="200"
      height="190"
      rx="5"
      fill="rgba(255,255,255,0.03)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <text
      x="178"
      y="53"
      fill="rgba(255,255,255,0.4)"
      fontSize="6.5"
      fontWeight="600"
    >
      Revenue by region — live
    </text>

    {/* Horizontal bars */}
    {[
      { label: "NSW", pct: 0.72, val: "$142k" },
      { label: "VIC", pct: 0.55, val: "$108k" },
      { label: "QLD", pct: 0.38, val: "$75k" },
      { label: "WA", pct: 0.28, val: "$55k" },
      { label: "SA", pct: 0.18, val: "$36k" },
    ].map((b, bi) => (
      <g key={b.label}>
        <text
          x="178"
          y={72 + bi * 26}
          fill="rgba(255,255,255,0.45)"
          fontSize="6.5"
        >
          {b.label}
        </text>
        <rect
          x="198"
          y={63 + bi * 26}
          width={130 * b.pct}
          height="12"
          rx="2"
          fill="#046999"
          fillOpacity="0.8"
        />
        <text
          x={204 + 130 * b.pct}
          y={72 + bi * 26}
          fill="#7ec8e3"
          fontSize="6"
          fontWeight="600"
        >
          {b.val}
        </text>
      </g>
    ))}

    {/* Source badge */}
    <rect
      x="178"
      y="200"
      width="180"
      height="16"
      rx="8"
      fill="rgba(4,105,153,0.2)"
    />
    <text
      x="268"
      y="211"
      textAnchor="middle"
      fill="rgba(126,200,227,0.7)"
      fontSize="6"
      fontWeight="600"
    >
      Source: Dataverse Web API · Chart.js
    </text>

    {/* Live pulse dot */}
    <circle cx="355" cy="48" r="4" fill="#27ae60" />
    <text x="348" y="61" fill="rgba(255,255,255,0.3)" fontSize="5.5">
      live
    </text>
  </svg>
);
