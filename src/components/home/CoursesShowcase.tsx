"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseItem {
  id: number;
  title: string;
  image: string;
  creator: string;
  rating: number;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  price: string;
  period: string;
}

const coursesData: CourseItem[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    image: "/Service_Image_1.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: 2,
    title: "Build Digital Asset",
    image: "/Service_Image_2.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: 3,
    title: "the Power of Big Data",
    image: "/Service_Image_3.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: 4,
    title: "Balancing Productivity an...",
    image: "/Service_Image_4.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: 5,
    title: "Mastering Money Manage...",
    image: "/Service_Image_5.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
  {
    id: 6,
    title: "From Idea to Startup Succ...",
    image: "/Service_Image_6.jpg",
    creator: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    price: "$25",
    period: "/lifetime",
  },
];

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
];

const categoryRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
    "+ More",
  ],
];

export default function CoursesShowcase() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[44px] sm:text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Discover Your Passion, <br />
            Build Your Skills
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mt-4 max-w-5xl mx-auto font-normal">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills / Filter Tabs */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center gap-3">
          {categoryRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            >
              {row.map((category) => {
                const isSelected = activeCategory === category;
                const isMore = category === "+ More";

                if (isMore) {
                  return (
                    <button
                      key={category}
                      type="button"
                      className="px-4 py-2 text-xs sm:text-sm font-bold text-brand-blue hover:text-brand-blue-hover transition-colors cursor-pointer"
                    >
                      {category}
                    </button>
                  );
                }

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-brand-lime text-slate-950 font-bold shadow-xs hover:bg-brand-lime-hover"
                        : "bg-[#f3f4f6] text-slate-700 hover:bg-[#e5e7eb] hover:text-slate-900"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
          {coursesData.map((course) => (
            <Card
              key={course.id}
              className="group overflow-hidden rounded-[26px] sm:rounded-[30px] border border-gray-200 bg-white p-3.5 sm:p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-0"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/10.5] rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glassmorphism Badge Row on Thumbnail */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 pointer-events-none">
                  <div className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs whitespace-nowrap">
                    {course.lessons}
                  </div>
                  <div className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs whitespace-nowrap">
                    {course.duration}
                  </div>
                  <div className="bg-white/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium text-slate-800 shadow-xs whitespace-nowrap">
                    {course.comments}
                  </div>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="pt-4 px-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug line-clamp-1 group-hover:text-brand-blue transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-700 shrink-0 mt-0.5">
                    <span>{course.rating}</span>
                    <Star className="size-3.5 fill-gray-300 text-gray-300" />
                  </div>
                </div>

                {/* Creator */}
                <p className="text-xs text-slate-500 font-normal mt-1">
                  by <span className="text-brand-blue hover:underline cursor-pointer">{course.creator}</span>
                </p>

                {/* Level Tag & Avatar Stack */}
                <div className="flex items-center justify-between mt-2">
                  <Badge
                    variant="secondary"
                    className="bg-[#f3f4f6] hover:bg-[#e5e7eb] text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full border-0 gap-1.5"
                  >
                    <BarChart2 className="size-3 text-slate-600" />
                    <span>{course.level}</span>
                  </Badge>

                  {/* Overlapping Avatar Stack */}
                  <div className="flex items-center -space-x-1.5 overflow-hidden">
                    {studentAvatars.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative size-6 sm:size-7 rounded-full ring-1 ring-slate-100 overflow-hidden shrink-0"
                      >
                        <Image
                          src={src}
                          alt="Student avatar"
                          fill
                          sizes="28px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="pl-1.5 size-6 sm:size-7 rounded-full bg-brand-lime text-slate-950 font-bold text-[10px] sm:text-xs flex items-center justify-center shrink-0 shadow-xs">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-xl font-extrabold text-brand-blue tracking-tight">
                    {course.price}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">
                    {course.period}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
