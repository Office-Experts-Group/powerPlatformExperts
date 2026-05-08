export const PowerBiMockup = () => (
  <svg
    viewBox="0 0 380 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Browser chrome */}
    <rect width="380" height="260" rx="8" fill="#1a2a3a" />
    <rect x="0" y="0" width="380" height="28" rx="8" fill="#18232e" />
    <circle cx="16" cy="14" r="4" fill="#c0392b" fillOpacity="0.7" />
    <circle cx="28" cy="14" r="4" fill="#f39c12" fillOpacity="0.7" />
    <circle cx="40" cy="14" r="4" fill="#27ae60" fillOpacity="0.7" />
    <rect
      x="60"
      y="8"
      width="200"
      height="12"
      rx="6"
      fill="rgba(255,255,255,0.08)"
    />
    <text
      x="160"
      y="18"
      textAnchor="middle"
      fill="rgba(255,255,255,0.3)"
      fontSize="6"
    >
      portal.contoso.com/dashboard
    </text>

    {/* Role badge */}
    <rect
      x="12"
      y="38"
      width="68"
      height="16"
      rx="8"
      fill="rgba(4,105,153,0.3)"
      stroke="#046999"
      strokeWidth="1"
    />
    <text
      x="46"
      y="49.5"
      textAnchor="middle"
      fill="#7ec8e3"
      fontSize="6.5"
      fontWeight="700"
    >
      Supplier View
    </text>

    {/* KPI row */}
    {[
      { x: 12, label: "Orders", val: "142" },
      { x: 96, label: "Pending", val: "18" },
      { x: 180, label: "Overdue", val: "3" },
    ].map((k) => (
      <g key={k.label}>
        <rect
          x={k.x}
          y="60"
          width="76"
          height="44"
          rx="5"
          fill="rgba(255,255,255,0.05)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <text
          x={k.x + 38}
          y="78"
          textAnchor="middle"
          fill="rgba(255,255,255,0.85)"
          fontSize="14"
          fontWeight="700"
        >
          {k.val}
        </text>
        <text
          x={k.x + 38}
          y="92"
          textAnchor="middle"
          fill="rgba(255,255,255,0.35)"
          fontSize="6.5"
        >
          {k.label}
        </text>
      </g>
    ))}

    {/* Bar chart */}
    <rect
      x="12"
      y="114"
      width="172"
      height="90"
      rx="5"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <text
      x="22"
      y="127"
      fill="rgba(255,255,255,0.4)"
      fontSize="6.5"
      fontWeight="600"
    >
      Monthly orders
    </text>
    {[
      { x: 22, h: 38, v: "Jan" },
      { x: 42, h: 52, v: "Feb" },
      { x: 62, h: 44, v: "Mar" },
      { x: 82, h: 60, v: "Apr" },
      { x: 102, h: 35, v: "May" },
      { x: 122, h: 66, v: "Jun" },
      { x: 142, h: 48, v: "Jul" },
      { x: 162, h: 55, v: "Aug" },
    ].map((b) => (
      <g key={b.v}>
        <rect
          x={b.x}
          y={196 - b.h}
          width="14"
          height={b.h}
          rx="2"
          fill="#046999"
          fillOpacity="0.75"
        />
        <text
          x={b.x + 7}
          y="204"
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize="5"
        >
          {b.v}
        </text>
      </g>
    ))}

    {/* Donut chart */}
    <rect
      x="192"
      y="114"
      width="90"
      height="90"
      rx="5"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.07)"
      strokeWidth="1"
    />
    <text
      x="202"
      y="127"
      fill="rgba(255,255,255,0.4)"
      fontSize="6.5"
      fontWeight="600"
    >
      Status split
    </text>
    <circle
      cx="237"
      cy="166"
      r="22"
      stroke="#046999"
      strokeWidth="12"
      strokeDasharray="83 55"
      strokeDashoffset="0"
      fill="none"
    />
    <circle
      cx="237"
      cy="166"
      r="22"
      stroke="#7ec8e3"
      strokeWidth="12"
      strokeDasharray="30 108"
      strokeDashoffset="-83"
      fill="none"
    />
    <circle
      cx="237"
      cy="166"
      r="22"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="12"
      strokeDasharray="25 113"
      strokeDashoffset="-113"
      fill="none"
    />

    {/* Row-level security label */}
    <rect
      x="12"
      y="212"
      width="270"
      height="18"
      rx="4"
      fill="rgba(4,105,153,0.15)"
    />
    <text x="22" y="224" fill="#7ec8e3" fontSize="6.5" fontWeight="600">
      Row-level security active — showing your records only
    </text>
  </svg>
);
