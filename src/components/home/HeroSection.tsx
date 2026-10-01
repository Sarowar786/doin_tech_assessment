
import HeroSearchForm from "./HeroSearchForm";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-blue bg-hero-grid text-white min-h-[700px] sm:min-h-[820px] md:min-h-[900px] lg:h-[1024px] lg:max-h-[1024px] flex flex-col justify-between pt-[80px] sm:pt-[100px] lg:pt-[120px] pb-0">
        {/* Subtle radial glow in background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[200px] sm:h-[300px] lg:h-[400px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Main Hero Header Content */}
        <div className="relative w-full mx-auto px-4 sm:px-6 text-center pt-2 sm:pt-4">
          <h1 className="text-white text-[28px] sm:text-4xl md:text-5xl lg:text-[72px] font-bold tracking-tight leading-[1.1] font-poppings max-w-[280px] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[800px] mx-auto">
            Get Access to Hundreds Courses Available
          </h1>

          <p className="mt-3 sm:mt-3.5 text-blue-100/90 text-xs sm:text-sm md:text-[18px] max-w-[240px] sm:max-w-[520px] md:max-w-[700px] lg:max-w-[900px] mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Pill Search Bar */}
          <div className="mt-4 sm:mt-6 lg:mt-7">
            <HeroSearchForm />
          </div>
        </div>

        {/* Hero Visual */}
        <HeroVisual />
      </section>
    </>
  );
}
