const layers = [
  {
    id: "auth",
    index: "01",
    label: "Authentication",
    short: "Azure AD · Azure AD B2C · Social / local",
    detail:
      "Authentication options include Azure AD for internal users or B2B, Azure AD B2C for external customer accounts, and a range of social and federated identity providers. Local contact authentication is also available for simpler username/password setups.",
    svgY: 30,
    svgFill: "#046999",
    svgTextFill: "#fff",
  },
  {
    id: "webroles",
    index: "02",
    label: "Web Roles",
    short: "Who is allowed to do what",
    detail:
      "Web roles group authenticated users by their access level — customer, partner, admin, or any custom role you define. Every permission in the system is attached to a web role, not to individual users.",
    svgY: 80,
    svgFill: "#0a4f72",
    svgTextFill: "#fff",
  },
  {
    id: "table",
    index: "03",
    label: "Table Permissions",
    short: "Which Dataverse tables each role can read, write, or delete",
    detail:
      "Table permissions define exactly which Dataverse tables a given web role can read, create, edit, or delete. A supplier role might have read-only access to order records and write access to delivery confirmations — nothing else.",
    svgY: 130,
    svgFill: "#0d6e9e",
    svgTextFill: "#fff",
  },
  {
    id: "column",
    index: "04",
    label: "Column Permissions",
    short: "Hide sensitive fields from users who can see the record",
    detail:
      "Column-level permissions let you hide sensitive fields — cost prices, internal notes, margin data — from users who are permitted to view the rest of the record. The most granular layer of access control in the platform.",
    svgY: 180,
    svgFill: "#e8f4fa",
    svgTextFill: "#046999",
  },
];

export const PermissionStackSvg = ({ activeId }) => (
  <svg
    viewBox="0 0 340 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: "100%", height: "auto", display: "block" }}
  >
    {/* Connector lines between layers */}
    {layers.slice(0, -1).map((l) => (
      <line
        key={`line-${l.id}`}
        x1="170"
        y1={l.svgY + 38}
        x2="170"
        y2={l.svgY + 50}
        stroke="rgba(4,105,153,0.25)"
        strokeWidth="1.5"
        strokeDasharray="3 2"
      />
    ))}

    {/* Padlock icon at top */}
    <circle
      cx="170"
      cy="16"
      r="10"
      fill="rgba(4,105,153,0.1)"
      stroke="#046999"
      strokeWidth="1.2"
    />
    <text x="170" y="20" textAnchor="middle" fill="#046999" fontSize="10">
      🔒
    </text>
    <line
      x1="170"
      y1="26"
      x2="170"
      y2="30"
      stroke="rgba(4,105,153,0.25)"
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />

    {/* Layer rectangles */}
    {layers.map((l) => {
      const isActive = activeId === l.id;
      return (
        <g key={l.id}>
          <rect
            x="20"
            y={l.svgY}
            width="300"
            height="44"
            rx="6"
            fill={l.svgFill}
            stroke={isActive ? "#046999" : "transparent"}
            strokeWidth={isActive ? 2.5 : 0}
            opacity={isActive ? 1 : 0.85}
          />
          {/* Index */}
          <text
            x="36"
            y={l.svgY + 26}
            fill={l.svgTextFill}
            fontSize="7"
            fontWeight="700"
            opacity="0.6"
          >
            {l.index}
          </text>
          {/* Layer label */}
          <text
            x="54"
            y={l.svgY + 20}
            fill={l.svgTextFill}
            fontSize="9"
            fontWeight="700"
          >
            {l.label}
          </text>
          {/* Short description */}
          <text
            x="54"
            y={l.svgY + 33}
            fill={l.svgTextFill}
            fontSize="7"
            opacity="0.7"
          >
            {l.short}
          </text>
          {/* Active indicator — right edge chevron */}
          {isActive && (
            <text
              x="298"
              y={l.svgY + 27}
              fill={l.svgTextFill}
              fontSize="9"
              fontWeight="700"
            >
              ›
            </text>
          )}
        </g>
      );
    })}

    {/* DLP governance badge at bottom */}
    <line
      x1="170"
      y1="224"
      x2="170"
      y2="234"
      stroke="rgba(4,105,153,0.2)"
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />
    <rect
      x="60"
      y="234"
      width="220"
      height="14"
      rx="7"
      fill="rgba(4,105,153,0.08)"
      stroke="rgba(4,105,153,0.2)"
      strokeWidth="1"
    />
    <text
      x="170"
      y="244"
      textAnchor="middle"
      fill="#046999"
      fontSize="6.5"
      fontWeight="700"
      letterSpacing="0.5"
    >
      Power Platform DLP · Admin Centre · Audit Logging
    </text>
  </svg>
);
