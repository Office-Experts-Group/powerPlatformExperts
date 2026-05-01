export const EmailVisual = () => (
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
    {/* Incoming email stack */}
    {[
      { y: 8, opacity: 0.15, label: "" },
      { y: 16, opacity: 0.22, label: "" },
      { y: 24, opacity: 0.35, label: "" },
    ].map(({ y, opacity }) => (
      <rect
        key={y}
        x="10"
        y={y}
        width="72"
        height="36"
        rx="4"
        fill={`rgba(255,255,255,${opacity})`}
        stroke={`rgba(255,255,255,${opacity * 0.8})`}
        strokeWidth="1"
      />
    ))}
    {/* Top envelope */}
    <rect
      x="10"
      y="30"
      width="72"
      height="36"
      rx="4"
      fill="rgba(255,255,255,0.08)"
      stroke="rgba(255,255,255,0.28)"
      strokeWidth="1.2"
    />
    <path
      d="M10 38 L46 54 L82 38"
      stroke="rgba(255,255,255,0.35)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="18"
      y="56"
      width="40"
      height="2.5"
      rx="1.25"
      fill="rgba(255,255,255,0.2)"
    />
    <rect
      x="18"
      y="61"
      width="30"
      height="2"
      rx="1"
      fill="rgba(255,255,255,0.12)"
    />

    {/* Arrow into classifier */}
    <path
      d="M84 48 L104 48"
      stroke="rgba(255,255,255,0.4)"
      strokeWidth="1.5"
      strokeDasharray="3 3"
    />
    <path
      d="M100 44 L106 48 L100 52"
      stroke="rgba(255,255,255,0.5)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* NLP classifier box */}
    <rect
      x="106"
      y="28"
      width="64"
      height="42"
      rx="6"
      fill="rgba(255,255,255,0.1)"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.2"
    />
    <text
      x="138"
      y="44"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      letterSpacing="0.8"
      fill="rgba(255,255,255,0.8)"
    >
      NLP
    </text>
    <text
      x="138"
      y="53"
      textAnchor="middle"
      fontSize="6.5"
      fontWeight="700"
      letterSpacing="0.8"
      fill="rgba(255,255,255,0.8)"
    >
      CLASSIFY
    </text>
    {/* Intent / urgency rows */}
    <rect
      x="114"
      y="57"
      width="48"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.15)"
    />
    <rect
      x="114"
      y="62"
      width="36"
      height="3"
      rx="1.5"
      fill="rgba(255,255,255,0.1)"
    />

    {/* Three routing arrows + queues */}
    {/* High priority */}
    <path
      d="M138 72 L138 88 L186 88 L186 100"
      stroke="rgba(46,200,120,0.7)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="3 3"
    />
    <rect
      x="158"
      y="100"
      width="60"
      height="26"
      rx="4"
      fill="rgba(46,200,120,0.15)"
      stroke="rgba(46,200,120,0.4)"
      strokeWidth="1"
    />
    <text
      x="188"
      y="111"
      textAnchor="middle"
      fontSize="6"
      fontWeight="700"
      fill="rgba(46,200,120,0.9)"
    >
      HIGH PRIORITY
    </text>
    <text
      x="188"
      y="120"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Fast-track queue
    </text>

    {/* Standard */}
    <path
      d="M138 72 L138 138"
      stroke="rgba(4,105,153,0.7)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="3 3"
    />
    <rect
      x="108"
      y="138"
      width="60"
      height="26"
      rx="4"
      fill="rgba(4,105,153,0.2)"
      stroke="rgba(4,105,153,0.45)"
      strokeWidth="1"
    />
    <text
      x="138"
      y="149"
      textAnchor="middle"
      fontSize="6"
      fontWeight="700"
      fill="rgba(4,105,153,0.9)"
    >
      STANDARD
    </text>
    <text
      x="138"
      y="158"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Normal queue
    </text>

    {/* Escalate */}
    <path
      d="M138 72 L138 88 L20 88 L20 100"
      stroke="rgba(220,80,60,0.65)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="3 3"
    />
    <rect
      x="0"
      y="100"
      width="60"
      height="26"
      rx="4"
      fill="rgba(220,80,60,0.14)"
      stroke="rgba(220,80,60,0.38)"
      strokeWidth="1"
    />
    <text
      x="30"
      y="111"
      textAnchor="middle"
      fontSize="6"
      fontWeight="700"
      fill="rgba(220,100,80,0.9)"
    >
      ESCALATE
    </text>
    <text
      x="30"
      y="120"
      textAnchor="middle"
      fontSize="6"
      fill="rgba(255,255,255,0.45)"
    >
      Complaints
    </text>

    {/* Sentiment meter */}
    <rect
      x="10"
      y="140"
      width="220"
      height="24"
      rx="4"
      fill="rgba(255,255,255,0.04)"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    <text
      x="120"
      y="150"
      textAnchor="middle"
      fontSize="6.5"
      fill="rgba(255,255,255,0.35)"
      fontWeight="500"
    >
      SENTIMENT SCORE
    </text>
    {/* Gradient bar */}
    <rect
      x="18"
      y="155"
      width="204"
      height="4"
      rx="2"
      fill="rgba(255,255,255,0.08)"
    />
    <rect
      x="18"
      y="155"
      width="76"
      height="4"
      rx="2"
      fill="rgba(220,80,60,0.7)"
    />
    <rect
      x="94"
      y="155"
      width="76"
      height="4"
      rx="2"
      fill="rgba(4,105,153,0.5)"
    />
    <rect
      x="170"
      y="155"
      width="52"
      height="4"
      rx="2"
      fill="rgba(46,200,120,0.65)"
    />

    {/* Labels under bar */}
    <text x="26" y="168" fontSize="5.5" fill="rgba(220,100,80,0.7)">
      Negative
    </text>
    <text
      x="120"
      y="168"
      textAnchor="middle"
      fontSize="5.5"
      fill="rgba(255,255,255,0.3)"
    >
      Neutral
    </text>
    <text
      x="214"
      y="168"
      textAnchor="end"
      fontSize="5.5"
      fill="rgba(46,200,120,0.7)"
    >
      Positive
    </text>
  </svg>
);
