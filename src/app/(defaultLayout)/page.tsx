
import BrandPartners from "@/components/home/BrandPartners";
import HeroSection from "@/components/home/HeroSection";
import CoursesShowcase from "@/components/home/CoursesShowcase";
import LearningPaths from "@/components/home/LearningPaths";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BrandPartners />
      <CoursesShowcase />
      <LearningPaths />
    </main>
  );
}
