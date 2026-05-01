export const InvoiceVisual = () => (
  <svg
    viewBox="0 0 240 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
    }}
  >
    {/* Source document */}
    <rect
      x="12"
      y="10"
      width="72"
      height="90"
      rx="5"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.2)"
      strokeWidth="1.2"
    />
    {/* Dog-ear fold */}
    <path d="M68 10 L84 26 L68 26 Z" fill="rgba(255,255,255,0.12)" />
    <path d="M68 10 L84 26" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    {/* Document lines */}
    <rect
      x="20"
      y="36"
      width="44"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.45)"
    />
    <rect
      x="20"
      y="44"
      width="36"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="20"
      y="50"
      width="40"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="20"
      y="60"
      width="44"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.12)"
    />
    <rect
      x="20"
      y="65"
      width="32"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.12)"
    />
    <rect
      x="20"
      y="70"
      width="38"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.12)"
    />
    {/* TAX INVOICE label */}
    <rect
      x="20"
      y="78"
      width="44"
      height="14"
      rx="2"
      fill="rgba(4,105,153,0.35)"
    />
    <rect
      x="24"
      y="83"
      width="28"
      height="3"
      rx="1"
      fill="rgba(255,255,255,0.55)"
    />

    {/* Arrow right → AI box */}
    <path
      d="M86 55 L104 55"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M100 51 L106 55 L100 59"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* AI Builder model box */}
    <rect
      x="106"
      y="36"
      width="58"
      height="38"
      rx="6"
      fill="rgba(4,105,153,0.22)"
      stroke="rgba(4,105,153,0.6)"
      strokeWidth="1.2"
    />
    <rect
      x="116"
      y="44"
      width="38"
      height="3"
      rx="1.5"
      fill="rgba(4,105,153,0.7)"
    />
    <rect
      x="120"
      y="50"
      width="30"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.3)"
    />
    <rect
      x="123"
      y="55"
      width="24"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.2)"
    />
    {/* AI label */}
    <text
      x="135"
      y="42"
      textAnchor="middle"
      fontSize="7"
      fontWeight="700"
      letterSpacing="1"
      fill="rgba(4,105,153,0.9)"
    >
      AI BUILDER
    </text>

    {/* Arrow down → output */}
    <path
      d="M135 76 L135 96"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M131 92 L135 98 L139 92"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Extracted fields output */}
    <rect
      x="56"
      y="100"
      width="156"
      height="88"
      rx="6"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1"
    />

    {/* Field rows */}
    {[
      { label: "Supplier", value: "Contoso Pty Ltd", y: 116 },
      { label: "Invoice #", value: "INV-00472", y: 130 },
      { label: "Amount", value: "$14,850.00", y: 144 },
      { label: "Due date", value: "15 May 2026", y: 158 },
      { label: "PO match", value: "✓ Matched", y: 172 },
    ].map(({ label, value, y }) => (
      <g key={y}>
        <text
          x="66"
          y={y}
          fontSize="7"
          fill="rgba(255,255,255,0.38)"
          fontWeight="500"
        >
          {label}
        </text>
        <text
          x="210"
          y={y}
          fontSize="7.2"
          fill="rgba(255,255,255,0.78)"
          fontWeight="600"
          textAnchor="end"
        >
          {value}
        </text>
        <line
          x1="64"
          y1={y + 3}
          x2="212"
          y2={y + 3}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.75"
        />
      </g>
    ))}

    {/* Dynamics badge */}
    <rect x="56" y="192" width="156" height="0" rx="0" fill="none" />
  </svg>
);
