"use client";

import Image from "next/image";
import { Star, BarChart2, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const happyStudentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
];

const checkFeatures = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function GrowthPathSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbfdff] via-[#f6f9fe] to-[#edf3fe] py-20 sm:py-24 lg:py-28">
      {/* Ambient Glows - Deep, Colorful & Distinct */}
      <div className="absolute -top-90 left-60 w-[620px] h-[620px] bg-[#d2f822]/60 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-[2%] -right-16 w-[250px] h-[250px] bg-[#3b82f6]/40 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 -left-16 w-[320px] h-[320px] bg-[#d2f822]/55 blur-[95px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1 right-2 w-[380px] h-[380px] bg-[#1d4ed8]/35 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28 lg:space-y-32">
        {/* ========================================================= */}
        {/* BLOCK 1: Your Path to Professional Growth Starts Here!   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Metrics */}
            <div className="flex items-center gap-8 sm:gap-12 pt-4">
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-blue tracking-tight">
                  12K
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Students
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-blue tracking-tight">
                  70+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Courses
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brand-blue tracking-tight">
                  16
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Creators
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Stage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] select-none">
            {/* 1. Behind Left: Learn Figma Course Card */}
            <div className="absolute -left-2 sm:left-2 lg:-left-4 top-4 sm:top-6 z-10 w-[210px] sm:w-[240px] md:w-[260px] animate-float-slow">
              <Card className="rounded-2xl border border-gray-100 bg-white p-2.5 sm:p-3 shadow-xl backdrop-blur-xs transition-transform hover:scale-105">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 mb-2.5">
                  <Image
                    src="/Service_Image_1.jpg"
                    alt="Learn Figma Preview"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between gap-1 text-[9px] font-medium text-slate-800 pointer-events-none">
                    <span className="bg-white/70 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-white/70 backdrop-blur-md px-1.5 py-0.5 rounded-full">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-1">
                  Learn Figma from Basic
                </h4>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  by <span className="text-brand-blue">purepearl studio</span>
                </p>

                <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 bg-[#f3f4f6] text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                    <BarChart2 className="size-2.5" /> Beginner
                  </span>
                  <div className="text-xs font-bold text-brand-blue">
                    $25 <span className="text-[9px] text-slate-400 font-normal">/lifetime</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* 2. Behind Right: Lime Scribble (Mask Group (2).png) */}
            <div className="absolute right-4 sm:right-10 top-2 sm:top-6 z-10 w-24 sm:w-32 animate-float-reverse pointer-events-none">
              <Image
                src="/Mask Group (2).png"
                alt="Lime Scribble"
                width={180}
                height={180}
                className="w-full h-auto drop-shadow-md "
              />
            </div>

            {/* 3. Foreground Center: Student Cutout */}
            <div className="relative z-20 flex justify-center items-end">
              <Image
                src="/heroImage.png"
                alt="Student with laptop"
                width={500}
                height={450}
                priority
                className="w-[260px] sm:w-[320px] md:w-[370px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* 4. Overlapping Right: Learning Progress 55% Card */}
            <div className="absolute right-0 sm:right-2 bottom-12 sm:bottom-16 z-30 animate-float-slow">
              <Card className="rounded-2xl border border-gray-100 bg-white p-3.5 sm:p-4 shadow-xl min-w-[150px] sm:min-w-[170px] backdrop-blur-xs transition-transform hover:scale-105">
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
                  Learning Progress
                </p>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5 tracking-tight leading-none">
                  55%
                </p>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2.5">
                  <div
                    className="bg-brand-lime h-full rounded-full transition-all duration-1000"
                    style={{ width: "55%" }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BLOCK 2: Create & Manage Courses Easily.                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Visual Stage (Instructor & Revenue Cards) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px] select-none order-2 lg:order-1">
            {/* 1. Behind Top-Left: Total Revenue Card */}
            <div className="absolute left-2 sm:left-6 top-2 sm:top-6 z-10 animate-float-slow">
              <div className="bg-[#0e3cf6] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl min-w-[140px] sm:min-w-[160px] border border-blue-400/20">
                <p className="text-[11px] font-medium text-blue-100">
                  Total Revenue
                </p>
                <p className="text-[9px] text-blue-300 font-normal">
                  July 1-28
                </p>
                <p className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight leading-none">
                  $120.29
                </p>
                <div className="w-full bg-blue-700/60 h-1.5 rounded-full overflow-hidden mt-2.5">
                  <div className="bg-brand-lime h-full rounded-full w-2/3" />
                </div>
              </div>
            </div>

            {/* 2. Behind Mid-Left: Year to Date Card */}
            <div className="absolute left-0 sm:left-4 top-28 sm:top-32 z-10 animate-float-reverse">
              <div className="bg-[#0e3cf6] text-white rounded-2xl p-3.5 sm:p-4 shadow-xl min-w-[140px] sm:min-w-[160px] border border-blue-400/20">
                <p className="text-[11px] font-medium text-blue-100">
                  Year to Date
                </p>
                <p className="text-[9px] text-blue-300 font-normal">
                  2023
                </p>
                <p className="text-xl sm:text-2xl font-black text-white mt-1 tracking-tight leading-none">
                  $1,200.38
                </p>
                <div className="mt-2.5">
                  <span className="inline-block bg-brand-lime text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-xs">
                    + 12%
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Behind Right: Lime Scribble (Mask Group (2).png) */}
            <div className="absolute right-4 sm:right-10 top-20 sm:top-24 z-10 w-24 sm:w-32 animate-float-slow pointer-events-none">
              <Image
                src="/Mask Group (2).png"
                alt="Lime Scribble"
                width={180}
                height={180}
                className="w-full h-auto drop-shadow-md"
              />
            </div>

            {/* 4. Foreground Center: Instructor Cutout (0d6596fb1df66aaf843ee85722f439fada233946.png) */}
            <div className="relative z-20 flex justify-center items-end">
              <Image
                src="/heroImage_2.png"
                alt="Instructor with tablet"
                width={500}
                height={500}
                priority
                className="w-[260px] sm:w-[320px] md:w-[380px] h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* 5. Overlapping Bottom-Right: Happy Students Card */}
            <div className="absolute right-0 sm:right-4 bottom-4 sm:bottom-6 z-30 animate-float-reverse">
              <Card className="rounded-2xl border border-gray-100 bg-white p-3 sm:p-3.5 shadow-xl backdrop-blur-xs min-w-[170px] sm:min-w-[195px] transition-transform hover:scale-105">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
                    Happy Students
                  </p>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600">
                    <span>4.5</span>
                    <span className="text-slate-400 font-normal">(240)</span>
                    <Star className="size-3 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <div className="flex items-center -space-x-1.5 overflow-hidden">
                  {happyStudentAvatars.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative size-6 sm:size-7 rounded-full border-2 border-white ring-1 ring-slate-100 overflow-hidden shrink-0"
                    >
                      <Image
                        src={src}
                        alt="avatar"
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div className="size-6 sm:size-7 rounded-full bg-brand-lime text-slate-950 font-bold text-[10px] flex items-center justify-center border-2 border-white shrink-0 shadow-xs">
                    2K+
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Text & Checklist */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-[1.12]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              <strong className="font-semibold text-slate-800">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {checkFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-5 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0 shadow-xs">
                    <Check className="size-3 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
