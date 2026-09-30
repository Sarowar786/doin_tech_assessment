
import BrandPartners from "@/components/home/BrandPartners";
import HeroSection from "@/components/home/HeroSection";
import CoursesShowcase from "@/components/home/CoursesShowcase";
import LearningPaths from "@/components/home/LearningPaths";
import GrowthPathSection from "@/components/home/GrowthPathSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CreatorSection from "@/components/home/CreatorSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandPartners />
      <CoursesShowcase />
      <LearningPaths />
      <GrowthPathSection />
      <CreatorSection />
      <TestimonialsSection />
    </main>
  );
}
