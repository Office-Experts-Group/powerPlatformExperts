export const introSVG = () => {
  return (
    <svg
      viewBox="0 0 320 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      {/* Spokes */}
      <line
        x1="160"
        y1="90"
        x2="60"
        y2="38"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.4"
      />
      <line
        x1="160"
        y1="90"
        x2="260"
        y2="38"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.4"
      />
      <line
        x1="160"
        y1="90"
        x2="60"
        y2="148"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.4"
      />
      <line
        x1="160"
        y1="90"
        x2="260"
        y2="148"
        stroke="#046999"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        strokeOpacity="0.4"
      />

      {/* Centre node — Power Pages */}
      <circle cx="160" cy="90" r="32" fill="#046999" />
      <text
        x="160"
        y="86"
        textAnchor="middle"
        fill="#fff"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.3"
      >
        Power
      </text>
      <text
        x="160"
        y="97"
        textAnchor="middle"
        fill="#fff"
        fontSize="8.5"
        fontWeight="700"
        letterSpacing="0.3"
      >
        Pages
      </text>

      {/* Satellite nodes */}
      {/* Dataverse */}
      <circle
        cx="60"
        cy="38"
        r="22"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <text
        x="60"
        y="35"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        Data
      </text>
      <text
        x="60"
        y="44"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        verse
      </text>

      {/* Power BI */}
      <circle
        cx="260"
        cy="38"
        r="22"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <text
        x="260"
        y="35"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        Power
      </text>
      <text
        x="260"
        y="44"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        BI
      </text>

      {/* Power Apps */}
      <circle
        cx="60"
        cy="148"
        r="22"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <text
        x="60"
        y="145"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        Power
      </text>
      <text
        x="60"
        y="154"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        Apps
      </text>

      {/* Azure AD */}
      <circle
        cx="260"
        cy="148"
        r="22"
        fill="#e8f4fa"
        stroke="#046999"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      <text
        x="260"
        y="145"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        Azure
      </text>
      <text
        x="260"
        y="154"
        textAnchor="middle"
        fill="#046999"
        fontSize="7"
        fontWeight="700"
      >
        AD
      </text>
    </svg>
  );
};
