export const FormVisual = () => (
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
    {/* Three source form variants — stacked / fanned */}
    {/* Back form */}
    <rect
      x="22"
      y="22"
      width="62"
      height="80"
      rx="4"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="1"
      transform="rotate(-6 53 62)"
    />
    {/* Mid form */}
    <rect
      x="18"
      y="18"
      width="62"
      height="80"
      rx="4"
      fill="rgba(255,255,255,0.06)"
      stroke="rgba(255,255,255,0.14)"
      strokeWidth="1"
      transform="rotate(-2 49 58)"
    />
    {/* Front form */}
    <rect
      x="14"
      y="14"
      width="64"
      height="82"
      rx="5"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.22)"
      strokeWidth="1.2"
    />
    {/* Lines on front form */}
    <rect
      x="22"
      y="26"
      width="48"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.4)"
    />
    <rect
      x="22"
      y="34"
      width="36"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.15)"
    />
    <rect
      x="22"
      y="38"
      width="42"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.15)"
    />
    {/* Checkbox rows */}
    {[46, 53, 60, 67].map((y) => (
      <g key={y}>
        <rect
          x="22"
          y={y}
          width="6"
          height="6"
          rx="1.5"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="1"
          fill="none"
        />
        <rect
          x="32"
          y={y + 1.5}
          width="30"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.12)"
        />
      </g>
    ))}
    <rect
      x="22"
      y="78"
      width="48"
      height="10"
      rx="2"
      fill="rgba(4,105,153,0.4)"
    />
    <rect
      x="26"
      y="82"
      width="24"
      height="2.5"
      rx="1"
      fill="rgba(255,255,255,0.5)"
    />

    {/* Funnel → AI */}
    <path
      d="M80 55 L100 55"
      stroke="rgba(4,105,153,0.7)"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M96 51 L102 55 L96 59"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* AI model box */}
    <rect
      x="102"
      y="34"
      width="60"
      height="42"
      rx="6"
      fill="rgba(4,105,153,0.2)"
      stroke="rgba(4,105,153,0.55)"
      strokeWidth="1.2"
    />
    <text
      x="132"
      y="50"
      textAnchor="middle"
      fontSize="7"
      fontWeight="700"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.9)"
    >
      CUSTOM
    </text>
    <text
      x="132"
      y="59"
      textAnchor="middle"
      fontSize="7"
      fontWeight="700"
      letterSpacing="0.8"
      fill="rgba(4,105,153,0.9)"
    >
      AI MODEL
    </text>
    {/* Accuracy ring hint */}
    <circle
      cx="132"
      cy="67"
      r="5"
      stroke="rgba(4,105,153,0.5)"
      strokeWidth="1"
      fill="none"
    />
    <text
      x="132"
      y="70"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.5)"
    >
      ✓
    </text>

    {/* Arrow down */}
    <path
      d="M132 78 L132 98"
      stroke="rgba(4,105,153,0.8)"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M128 94 L132 100 L136 94"
      stroke="rgba(4,105,153,0.9)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Output — destination tiles */}
    {[
      { label: "SharePoint", bg: "rgba(4,105,153,0.22)", x: 24 },
      { label: "Dataverse", bg: "rgba(4,105,153,0.14)", x: 98 },
      { label: "Dynamics", bg: "rgba(4,105,153,0.28)", x: 172 },
    ].map(({ label, bg, x }) => (
      <g key={label}>
        <rect
          x={x}
          y={102}
          width="60"
          height="30"
          rx="4"
          fill={bg}
          stroke="rgba(4,105,153,0.35)"
          strokeWidth="1"
        />
        <rect
          x={x + 8}
          y={110}
          width="44"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.45)"
        />
        <rect
          x={x + 12}
          y={116}
          width="34"
          height="2.5"
          rx="1.25"
          fill="rgba(255,255,255,0.2)"
        />
        <text
          x={x + 30}
          y={143}
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="600"
          fill="rgba(255,255,255,0.5)"
        >
          {label}
        </text>
      </g>
    ))}

    {/* Accuracy strip */}
    <rect
      x="24"
      y="152"
      width="210"
      height="28"
      rx="4"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    <text
      x="129"
      y="164"
      textAnchor="middle"
      fontSize="7"
      fill="rgba(255,255,255,0.35)"
      fontWeight="500"
    >
      MODEL ACCURACY IMPROVES WITH EACH DOCUMENT
    </text>
    <rect
      x="30"
      y="168"
      width="168"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.08)"
    />
    <rect
      x="30"
      y="168"
      width="148"
      height="3"
      rx="1.5"
      fill="rgba(4,105,153,0.6)"
    />
    <text
      x="182"
      y="172"
      fontSize="6.5"
      fill="rgba(4,105,153,0.8)"
      fontWeight="700"
    >
      89%
    </text>
  </svg>
);
