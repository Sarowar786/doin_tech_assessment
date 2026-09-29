import React from "react";
import Image from "next/image";
import { Star, Layout } from "lucide-react";
import {
  LimeSpring3D,
  WhiteSquiggle3D,
  WhiteTorus3D,
  LimeCylinder3D,
  WhitePyramid3D,
  WhiteSpring3D,
} from "./Geometric3DShapes";

const happyStudentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-end justify-center overflow-visible mt-10 sm:mt-14 md:mt-16 pb-0">
      {/* 3D Decorative Floating Shapes - Left Side */}
      <div className="absolute top-[8%] left-[2%] sm:left-[5%] md:left-[8%] lg:left-[10%] w-16 sm:w-24 md:w-28 lg:w-32 z-10 animate-float-slow pointer-events-none select-none">
        <LimeSpring3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="absolute top-[40%] left-[1%] sm:left-[3%] md:left-[5%] lg:left-[7%] w-12 sm:w-16 md:w-20 lg:w-24 z-10 animate-float-reverse pointer-events-none select-none">
        <WhiteSquiggle3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="absolute bottom-0 left-[0%] sm:left-[2%] md:left-[4%] lg:left-[6%] w-20 sm:w-28 md:w-36 lg:w-44 z-20 animate-float-slow pointer-events-none select-none">
        <WhiteTorus3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* 3D Decorative Floating Shapes - Right Side */}
      <div className="absolute top-[6%] right-[2%] sm:right-[5%] md:right-[8%] lg:right-[10%] w-20 sm:w-28 md:w-32 lg:w-36 z-10 animate-float-reverse pointer-events-none select-none">
        <LimeCylinder3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="absolute top-[38%] right-[1%] sm:right-[3%] md:right-[5%] lg:right-[7%] w-14 sm:w-20 md:w-24 lg:w-28 z-10 animate-float-slow pointer-events-none select-none">
        <WhitePyramid3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      <div className="absolute bottom-0 right-[0%] sm:right-[2%] md:right-[4%] lg:right-[6%] w-16 sm:w-24 md:w-28 lg:w-36 z-20 animate-float-reverse pointer-events-none select-none">
        <WhiteSpring3D className="w-full h-auto drop-shadow-2xl" />
      </div>

      {/* Central Visual Stage */}
      <div className="relative flex items-end justify-center w-full">
        {/* Giant Lime Semicircular Dome Backdrop:
            Positioned with bottom-[-45%] so only the upper semicircle is visible,
            while the bottom half is submerged and clipped at the hero border! */}
        <div className="absolute bottom-[-46%] left-1/2 -translate-x-1/2 w-[580px] h-[580px] sm:w-[800px] sm:h-[800px] md:w-[960px] md:h-[960px] lg:w-[1080px] lg:h-[1080px] rounded-full bg-brand-lime shadow-2xl transition-all pointer-events-none" />

        {/* Student Cutout Image - Significantly enlarged to fill the lime dome */}
        <div className="relative z-10 flex justify-center items-end leading-none">
          <Image
            src="/heroImage.png"
            alt="Student with laptop and headphones"
            width={720}
            height={800}
            priority
            className="w-[330px] sm:w-[480px] md:w-[620px] lg:w-[700px] xl:w-[750px] h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-2xl translate-y-1 block"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (Top-Left of student) */}
        <div className="absolute top-[18%] sm:top-[20%] left-[8%] sm:left-[16%] md:left-[22%] lg:left-[25%] z-20 animate-float-slow">
          <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-2xl border border-gray-100 flex items-center gap-3 backdrop-blur-xs transition-transform hover:scale-105">
            <div className="size-9 sm:size-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
              <Layout className="size-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                UI/UX Design
              </p>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>
        </div>

        {/* Floating Card 2: Learning Progress (Top-Right of student) */}
        <div className="absolute top-[22%] sm:top-[24%] right-[8%] sm:right-[15%] md:right-[20%] lg:right-[24%] z-20 animate-float-reverse">
          <div className="bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-gray-100 min-w-[150px] sm:min-w-[185px] backdrop-blur-xs transition-transform hover:scale-105">
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
          </div>
        </div>

        {/* Floating Card 3: Happy Students (Bottom-Left of student) */}
        <div className="absolute bottom-[10%] sm:bottom-[12%] left-[6%] sm:left-[12%] md:left-[16%] lg:left-[20%] z-20 animate-float-slow">
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-2xl border border-gray-100 backdrop-blur-xs transition-transform hover:scale-105">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-xs sm:text-sm font-bold text-slate-900 whitespace-nowrap">
                Happy Students
              </p>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-slate-600">
                <span>4.5</span>
                <span className="text-slate-400 font-normal">(240)</span>
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
              </div>
            </div>

            {/* Overlapping Avatar Stack */}
            <div className="flex items-center -space-x-2 overflow-hidden">
              {happyStudentAvatars.map((src, idx) => (
                <div
                  key={idx}
                  className="relative size-7 sm:size-8 rounded-full border-2 border-white ring-1 ring-slate-100 overflow-hidden shrink-0"
                >
                  <Image
                    src={src}
                    alt="Student avatar"
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
              ))}
              <div className="size-7 sm:size-8 rounded-full bg-brand-lime text-slate-950 font-bold text-[10px] sm:text-xs flex items-center justify-center border-2 border-white shrink-0 shadow-xs">
                +2K
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
