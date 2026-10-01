

const partnerLogos = [
  {
    name: "Logoipsum 1",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm-4 7c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm8 11H8v-1c0-2.67 5.33-4 8-4 .83 0 1.83.13 2.8.38A6.97 6.97 0 0018 20c0 .72.12 1.4.34 2.04L20 22z" />
        <path d="M7 14c3-2 7 2 11 0s5-1 7 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 2",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="4" />
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.1 6.1l2.8 2.8M23.1 23.1l2.8 2.8M6.1 25.9l2.8-2.8M23.1 8.9l2.8-2.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 3",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M17 7L10 17h6l-2 8 8-11h-6l2-7z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 4",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="10" r="4" />
        <circle cx="16" cy="22" r="4" />
        <circle cx="10" cy="16" r="4" />
        <circle cx="22" cy="16" r="4" />
        <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 5",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="3.5" fill="currentColor" />
        <path d="M16 3a13 13 0 0113 13h-4a9 9 0 00-9-9V3z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 6",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <rect x="4" y="8" width="10" height="16" rx="2" />
        <rect x="18" y="4" width="10" height="10" rx="2" />
        <rect x="18" y="18" width="10" height="10" rx="2" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 7",
    icon: (
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="currentColor">
        <path d="M4 16 L16 4 L28 16 L16 28 Z" />
        <circle cx="16" cy="16" r="4" fill="white" />
      </svg>
    ),
  },
];

export default function BrandPartners() {
  return (
    <section className="w-full bg-[#F5F5F6]/50 pt-6 sm:pt-14 pb-10 sm:pb-20 border-b border-gray-100 overflow-hidden">
      {/* Marquee track — outer wrapper clips overflow, inner animates */}
      <div className="relative w-full">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-28 z-10 bg-gradient-to-r from-[#F5F5F6] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-28 z-10 bg-gradient-to-l from-[#F5F5F6] to-transparent" />

        {/* Scrolling track: two identical sets = seamless loop */}
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {/* Set 1 */}
          {partnerLogos.map((logo, index) => (
            <div
              key={`a-${index}`}
              className="flex items-center gap-2.5 text-[#82868E] mx-8 sm:mx-12 shrink-0"
            >
              {logo.icon}
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#82868E] select-none">
                logoipsum
              </span>
            </div>
          ))}
          {/* Set 2 — duplicate for seamless loop */}
          {partnerLogos.map((logo, index) => (
            <div
              key={`b-${index}`}
              className="flex items-center gap-2.5 text-[#82868E] mx-8 sm:mx-12 shrink-0"
            >
              {logo.icon}
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#82868E] select-none">
                logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

