
import HeroSearchForm from "./HeroSearchForm";
import HeroVisual from "./HeroVisual";
import BrandPartners from "./BrandPartners";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-blue bg-hero-grid text-white min-h-[880px] lg:h-[1024px] lg:max-h-[1024px] flex flex-col justify-between pt-[120px] pb-0">
        {/* Subtle radial glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Main Hero Header Content */}
        <div className="relative w-full mx-auto px-4 sm:px-6 text-center pt-2 sm:pt-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.08] font-poppings max-w-[800px] mx-auto">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mt-3.5 text-blue-100/90 text-sm sm:text-base md:text-[18px] max-w-[900px] mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Pill Search Bar */}
          <div className="mt-6 sm:mt-7">
            <HeroSearchForm />
          </div>
        </div>

        {/* Hero Visual: Full-section 3D floating shapes + Central stage with upper-half lime dome */}
        <HeroVisual />
      </section>

      {/* Brand Partners & Next Section Title */}
      <BrandPartners />
    </>
  );
}
