
import HeroSearchForm from "./HeroSearchForm";
import HeroVisual from "./HeroVisual";
import BrandPartners from "./BrandPartners";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-blue bg-hero-grid text-white pt-28 sm:pt-36 md:pt-40 pb-0">
        {/* Subtle radial glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Main Hero Header Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-black tracking-tight leading-[1.08] font-sans">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mt-5 text-blue-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Pill Search Bar */}
          <div className="mt-8 sm:mt-10">
            <HeroSearchForm />
          </div>
        </div>

        {/* Hero Visual Centerpiece with Lime Circle Semicircular Dome, Student Cutout & Floating Elements */}
        <div className="relative w-full overflow-hidden flex justify-center items-end mt-4 sm:mt-6">
          <HeroVisual />
        </div>
      </section>

      {/* Brand Partners & Next Section Title */}
      <BrandPartners />
    </>
  );
}
