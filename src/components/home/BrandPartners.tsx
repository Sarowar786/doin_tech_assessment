import SectionHeader from "@/components/common/SectionHeader";

const partnerLogos = [
  {
    name: "Logoipsum 1",
    icon: (
      <svg className="h-7 w-7 text-slate-700" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 4C9.37 4 4 9.37 4 16s5.37 12 12 12 12-5.37 12-12S22.63 4 16 4zm-4 7c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm8 11H8v-1c0-2.67 5.33-4 8-4 .83 0 1.83.13 2.8.38A6.97 6.97 0 0018 20c0 .72.12 1.4.34 2.04L20 22z" />
        <path d="M7 14c3-2 7 2 11 0s5-1 7 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 2",
    icon: (
      <svg className="h-7 w-7 text-slate-700" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="4" />
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6.1 6.1l2.8 2.8M23.1 23.1l2.8 2.8M6.1 25.9l2.8-2.8M23.1 8.9l2.8-2.8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 3",
    icon: (
      <svg className="h-7 w-7 text-slate-700" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M17 7L10 17h6l-2 8 8-11h-6l2-7z" />
      </svg>
    ),
  },
  {
    name: "Logoipsum 4",
    icon: (
      <svg className="h-7 w-7 text-slate-700" viewBox="0 0 32 32" fill="currentColor">
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
      <svg className="h-7 w-7 text-slate-700" viewBox="0 0 32 32" fill="currentColor">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="3.5" fill="currentColor" />
        <path d="M16 3a13 13 0 0113 13h-4a9 9 0 00-9-9V3z" />
      </svg>
    ),
  },
];

export default function BrandPartners() {
  return (
    <section className="w-full h-50 bg-[#F5F5F6]/50 pt-2 sm:pt-16 pb-16 sm:pb-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Row of 5 Partner Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 sm:gap-12 opacity-85 py-6">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 text-[#82868E] transition-opacity hover:opacity-100"
            >
              {logo.icon}
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#82868E]">
                logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
