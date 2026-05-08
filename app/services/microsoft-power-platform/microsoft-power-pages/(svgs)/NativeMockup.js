export const NativeMockup = () => (
  <svg
    viewBox="0 0 380 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="380" height="260" rx="8" fill="#f7f8f9" />
    <rect x="0" y="0" width="380" height="28" rx="8" fill="#eaecef" />
    <circle cx="16" cy="14" r="4" fill="#c0c4ca" />
    <circle cx="28" cy="14" r="4" fill="#c0c4ca" />
    <circle cx="40" cy="14" r="4" fill="#c0c4ca" />
    <rect x="60" y="8" width="200" height="12" rx="6" fill="rgba(0,0,0,0.06)" />
    <text
      x="160"
      y="18"
      textAnchor="middle"
      fill="rgba(0,0,0,0.3)"
      fontSize="6"
    >
      portal.contoso.com/orders
    </text>

    {/* Filter bar */}
    <rect
      x="12"
      y="38"
      width="356"
      height="26"
      rx="4"
      fill="white"
      stroke="rgba(0,0,0,0.08)"
      strokeWidth="1"
    />
    <rect x="20" y="46" width="80" height="10" rx="5" fill="rgba(0,0,0,0.07)" />
    <rect
      x="112"
      y="46"
      width="60"
      height="10"
      rx="5"
      fill="rgba(0,0,0,0.07)"
    />
    <rect
      x="184"
      y="46"
      width="60"
      height="10"
      rx="5"
      fill="rgba(0,0,0,0.07)"
    />
    <rect x="316" y="44" width="44" height="14" rx="7" fill="#046999" />
    <text
      x="338"
      y="53.5"
      textAnchor="middle"
      fill="white"
      fontSize="6.5"
      fontWeight="700"
    >
      Filter
    </text>

    {/* Table header */}
    <rect
      x="12"
      y="72"
      width="356"
      height="20"
      rx="3"
      fill="rgba(4,105,153,0.07)"
    />
    {["Order #", "Customer", "Date", "Value", "Status"].map((h, i) => (
      <text
        key={h}
        x={22 + i * 70}
        y="85"
        fill="#046999"
        fontSize="6.5"
        fontWeight="700"
      >
        {h}
      </text>
    ))}

    {/* Table rows */}
    {[
      ["#10842", "Acme Corp", "01 May", "$4,200", "Shipped"],
      ["#10841", "Blue Pty", "30 Apr", "$870", "Pending"],
      ["#10840", "Zenith Co", "29 Apr", "$12,400", "Delivered"],
      ["#10839", "Apex Ltd", "28 Apr", "$2,100", "Shipped"],
      ["#10838", "Nova Inc", "27 Apr", "$680", "Overdue"],
    ].map((row, ri) => (
      <g key={ri}>
        <rect
          x="12"
          y={93 + ri * 22}
          width="356"
          height="22"
          fill={ri % 2 === 0 ? "white" : "rgba(0,0,0,0.02)"}
        />
        {row.map((cell, ci) => (
          <text
            key={ci}
            x={22 + ci * 70}
            y={108 + ri * 22}
            fill={
              cell === "Overdue"
                ? "#c0392b"
                : cell === "Pending"
                  ? "#e67e22"
                  : ci === 4
                    ? "#27ae60"
                    : "rgba(0,0,0,0.65)"
            }
            fontSize="6.5"
            fontWeight={ci === 0 ? "700" : "400"}
          >
            {cell}
          </text>
        ))}
      </g>
    ))}

    {/* Pagination */}
    <rect
      x="12"
      y="208"
      width="356"
      height="20"
      rx="3"
      fill="rgba(0,0,0,0.02)"
      stroke="rgba(0,0,0,0.06)"
      strokeWidth="1"
    />
    <text x="22" y="221" fill="rgba(0,0,0,0.4)" fontSize="6.5">
      Showing 1–5 of 142 records
    </text>
    {["←", "1", "2", "3", "→"].map((p, pi) => (
      <g key={pi}>
        <rect
          x={280 + pi * 18}
          y="211"
          width="14"
          height="14"
          rx="3"
          fill={p === "1" ? "#046999" : "white"}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="1"
        />
        <text
          x={287 + pi * 18}
          y="221"
          textAnchor="middle"
          fill={p === "1" ? "white" : "rgba(0,0,0,0.45)"}
          fontSize="6.5"
        >
          {p}
        </text>
      </g>
    ))}

    <text x="22" y="248" fill="rgba(0,0,0,0.3)" fontSize="6">
      Built with Liquid templates · FetchXML query · Dataverse
    </text>
  </svg>
);
