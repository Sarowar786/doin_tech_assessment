
export function LimeSpring3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="limeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eafc55" />
          <stop offset="40%" stopColor="#cbf822" />
          <stop offset="100%" stopColor="#93cc0a" />
        </linearGradient>
        <linearGradient id="limeGradShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#81b805" />
          <stop offset="100%" stopColor="#5d8502" />
        </linearGradient>
        <filter id="glowLime" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#081d6e" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#glowLime)">
        {/* Coil Loop 1 */}
        <path
          d="M30 40 C 20 15, 75 10, 85 30 C 95 50, 45 65, 30 75"
          stroke="url(#limeGrad1)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Coil Loop 2 */}
        <path
          d="M30 75 C 15 90, 80 85, 90 105 C 100 125, 45 140, 25 155"
          stroke="url(#limeGrad1)"
          strokeWidth="24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Highlights */}
        <path
          d="M40 32 C 45 22, 70 20, 80 30"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M38 95 C 45 88, 75 85, 82 100"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.65"
        />
      </g>
    </svg>
  );
}

export function WhiteSquiggle3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 110 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="whiteGrad1" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id="glowWhite" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#081d6e" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#glowWhite)">
        <path
          d="M30 25 C 55 15, 85 35, 75 65 C 65 95, 30 85, 35 115 C 40 140, 75 145, 85 135"
          stroke="url(#whiteGrad1)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Soft highlight */}
        <path
          d="M36 24 C 52 18, 75 32, 70 55"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.9"
        />
      </g>
    </svg>
  );
}

export function WhiteTorus3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="torusGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#e2e8f0" />
          <stop offset="85%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </radialGradient>
        <filter id="torusShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="5" dy="12" stdDeviation="10" floodColor="#061a5e" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#torusShadow)" transform="rotate(-25 75 75)">
        <ellipse
          cx="75"
          cy="75"
          rx="58"
          ry="38"
          fill="url(#torusGrad)"
        />
        <ellipse
          cx="75"
          cy="75"
          rx="26"
          ry="15"
          fill="#1346f0"
        />
        {/* Specular highlight */}
        <ellipse
          cx="70"
          cy="52"
          rx="22"
          ry="4"
          fill="#ffffff"
          opacity="0.8"
          transform="rotate(5 70 52)"
        />
      </g>
    </svg>
  );
}

export function LimeCylinder3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cylSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b2e50f" />
          <stop offset="35%" stopColor="#d5fb23" />
          <stop offset="70%" stopColor="#cbf822" />
          <stop offset="100%" stopColor="#86be03" />
        </linearGradient>
        <radialGradient id="cylTop" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f3ffa2" />
          <stop offset="70%" stopColor="#d5fb23" />
          <stop offset="100%" stopColor="#a7da0b" />
        </radialGradient>
        <filter id="cylShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="6" dy="12" stdDeviation="8" floodColor="#081d6e" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#cylShadow)" transform="rotate(20 65 90)">
        {/* Cylinder Body */}
        <path
          d="M25 45 L25 130 C25 145, 95 145, 95 130 L95 45 Z"
          fill="url(#cylSide)"
        />
        {/* Cylinder Bottom curved cap */}
        <ellipse cx="60" cy="130" rx="35" ry="14" fill="#86be03" />
        {/* Cylinder Top Cap */}
        <ellipse cx="60" cy="45" rx="35" ry="14" fill="url(#cylTop)" />
        {/* Top Rim Highlight */}
        <ellipse cx="58" cy="43" rx="22" ry="7" fill="#ffffff" opacity="0.45" />
      </g>
    </svg>
  );
}

export function WhitePyramid3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pyrFaceLeft" x1="50%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="pyrFaceRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id="pyrFaceBottom" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <filter id="pyrShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="5" dy="10" stdDeviation="8" floodColor="#071d6d" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#pyrShadow)" transform="rotate(-15 65 70)">
        {/* Left facet */}
        <polygon points="65,15 15,95 65,110" fill="url(#pyrFaceLeft)" />
        {/* Right facet */}
        <polygon points="65,15 115,85 65,110" fill="url(#pyrFaceRight)" />
        {/* Bottom facet */}
        <polygon points="15,95 65,110 115,85 70,125" fill="url(#pyrFaceBottom)" opacity="0.3" />
        {/* Apex highlight */}
        <circle cx="65" cy="15" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}

export function WhiteSpring3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="whiteCoilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <filter id="coilShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#061a5e" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#coilShadow)" transform="rotate(-10 60 90)">
        <path
          d="M25 35 C 10 50, 90 40, 95 65 C 100 90, 20 85, 25 110 C 30 135, 100 130, 90 155"
          stroke="url(#whiteCoilGrad)"
          strokeWidth="22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Specular highlights */}
        <path
          d="M32 45 C 50 38, 80 42, 88 58"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M35 118 C 50 110, 85 114, 85 138"
          stroke="#ffffff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>
    </svg>
  );
}

export function LimeTorus3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="limeTorusGrad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f3ffa2" />
          <stop offset="45%" stopColor="#d5fb23" />
          <stop offset="80%" stopColor="#a5da09" />
          <stop offset="100%" stopColor="#678d02" />
        </radialGradient>
        <filter id="limeTorusShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodColor="#081d6e" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#limeTorusShadow)" transform="rotate(-30 75 75)">
        <ellipse cx="75" cy="75" rx="58" ry="38" fill="url(#limeTorusGrad)" />
        <ellipse cx="75" cy="75" rx="26" ry="15" fill="#1346f0" />
        <ellipse
          cx="70"
          cy="52"
          rx="22"
          ry="4"
          fill="#ffffff"
          opacity="0.75"
          transform="rotate(5 70 52)"
        />
      </g>
    </svg>
  );
}

export function LimePyramid3D({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="limePyrLeft" x1="50%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f4ffa6" />
          <stop offset="100%" stopColor="#cbf822" />
        </linearGradient>
        <linearGradient id="limePyrRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b6e40f" />
          <stop offset="100%" stopColor="#81b504" />
        </linearGradient>
        <linearGradient id="limePyrBottom" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5d8502" />
          <stop offset="100%" stopColor="#436001" />
        </linearGradient>
        <filter id="limePyrShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="5" dy="10" stdDeviation="8" floodColor="#071d6d" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#limePyrShadow)" transform="rotate(-15 65 70)">
        <polygon points="65,15 15,95 65,110" fill="url(#limePyrLeft)" />
        <polygon points="65,15 115,85 65,110" fill="url(#limePyrRight)" />
        <polygon points="15,95 65,110 115,85 70,125" fill="url(#limePyrBottom)" opacity="0.3" />
        <circle cx="65" cy="15" r="2.5" fill="#ffffff" />
      </g>
    </svg>
  );
}
