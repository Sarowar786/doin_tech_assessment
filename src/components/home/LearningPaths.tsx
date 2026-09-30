"use client";

import Link from "next/link";
import {
  PencilRuler,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface LearningPathItem {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
}

const learningPaths: LearningPathItem[] = [
  {
    id: "design",
    name: "Design",
    href: "/courses?category=design",
    icon: <PencilRuler className="size-6 sm:size-7" strokeWidth={2} />,
  },
  {
    id: "development",
    name: "Development",
    href: "/courses?category=development",
    icon: (
      <svg
        className="size-6 sm:size-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="m9 10-2 2 2 2" />
        <path d="m15 10 2 2-2 2" />
      </svg>
    ),
  },
  {
    id: "it-software",
    name: "IT & Software",
    href: "/courses?category=it-software",
    icon: <Laptop className="size-6 sm:size-7" strokeWidth={2} />,
  },
  {
    id: "business",
    name: "Business",
    href: "/courses?category=business",
    icon: <Building2 className="size-6 sm:size-7" strokeWidth={2} />,
  },
  {
    id: "marketing",
    name: "Marketing",
    href: "/courses?category=marketing",
    icon: <Megaphone className="size-6 sm:size-7" strokeWidth={2} />,
  },
  {
    id: "photography",
    name: "Photography",
    href: "/courses?category=photography",
    icon: <Camera className="size-6 sm:size-7" strokeWidth={2} />,
  },
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-3.5 max-w5xl mx-auto font-normal">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 mt-12 sm:mt-14">
          {learningPaths.map((item) => (
            <Link key={item.id} href={item.href} className="focus:outline-none">
              <Card className="rounded-3xl border border-gray-200/80 bg-white p-5 sm:p-6 flex flex-col items-center justify-center text-center gap-4 aspect-square shadow-2xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group">
                {/* Lime Circle Icon Container */}
                <div className="size-14 sm:size-16 rounded-full bg-brand-lime flex items-center justify-center text-slate-950 group-hover:scale-110 transition-transform duration-300 shadow-xs shrink-0">
                  {item.icon}
                </div>

                {/* Category Name */}
                <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-brand-blue transition-colors">
                  {item.name}
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
