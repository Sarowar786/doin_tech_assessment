import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

interface AuthVisualShowcaseProps {
  title: string;
  description: string;
}

const studentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop&q=80",
];

export default function AuthVisualShowcase({
  title,
  description,
}: AuthVisualShowcaseProps) {
  return (
    <div className="flex flex-col justify-between h-full max-w-lg mx-auto lg:mx-0 py-2 sm:py-6">
      {/* Top Header text */}
      <div className="space-y-3 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed max-w-md font-normal">
          {description}
        </p>
      </div>

      {/* Visual Cards & 3D Shapes Showcase */}
      <div className="relative w-full max-w-[420px] sm:max-w-[460px] pb-10 sm:pb-14 pt-4 select-none">
        {/* 3D Shapes */}
        {/* Top-Left Torus */}
        <div className="absolute -top-6 -left-6 sm:-left-8 z-30 w-16 sm:w-20 animate-float-slow pointer-events-none">
          <Image
            src="/Cone (1).png"
            alt="3D Torus"
            width={346}
            height={343}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* Bottom-Left Pyramid */}
        <div className="absolute -bottom-6 -left-6 sm:-left-8 z-30 w-16 sm:w-20 animate-float-reverse pointer-events-none">
          <Image
            src="/Cone (2).png"
            alt="3D Pyramid"
            width={190}
            height={189}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* Right White Squiggle */}
        <div className="absolute top-[40%] -right-4 sm:-right-8 z-30 w-14 sm:w-16 animate-float-slow pointer-events-none">
          <Image
            src="/Mask Group (1).png"
            alt="3D Squiggle"
            width={176}
            height={176}
            className="w-full h-auto drop-shadow-xl"
          />
        </div>

        {/* Back Course Card: Build Digital... */}
        <div className="absolute -left-6 sm:-left-8 top-10 sm:top-12 w-[240px] sm:w-[280px] bg-white rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gray-100/90 opacity-90 scale-95 pointer-events-none">
          <div className="relative w-full h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-100 mb-3">
            <Image
              src="/Service_Image_2.jpg"
              alt="Course preview"
              fill
              className="object-cover"
            />
            <span className="absolute bottom-2 left-2 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
              17 Lessons
            </span>
          </div>

          <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
            Build Digit...
          </h4>
          <p className="text-[10px] text-slate-500 mt-0.5">by purepearl studio</p>

          <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-gray-100">
            <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <BarChart2 className="size-2.5" /> Beginner
            </span>
            <div className="flex items-center -space-x-1.5">
              {studentAvatars.slice(0, 3).map((src, i) => (
                <div
                  key={i}
                  className="relative size-5 rounded-full border border-white overflow-hidden"
                >
                  <Image src={src} alt="avatar" fill className="object-cover" />
                </div>
              ))}
              <div className="size-5 rounded-full bg-slate-900 text-white text-[9px] font-bold flex items-center justify-center border border-white">
                26+
              </div>
            </div>
          </div>
          <div className="mt-2 text-xs font-bold text-brand-blue">
            $25<span className="text-[10px] font-normal text-slate-500">/lifetime</span>
          </div>
        </div>

        {/* Front Course Card: the Power of Big Data */}
        <div className="relative z-10 ml-8 sm:ml-12 w-[270px] sm:w-[320px] bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-gray-100">
          {/* Card Thumbnail Image with overlay badges */}
          <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden bg-slate-950 mb-3 shadow-inner">
            <Image
              src="/Service_Image_3.jpg"
              alt="the Power of Big Data"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay pills */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 overflow-x-hidden">
              <span className="bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                17 Lessons
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                2 hours 16 mins
              </span>
              <span className="bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                59 Comments
              </span>
            </div>
          </div>

          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
              the Power of Big Data
            </h3>
            <div className="flex items-center gap-1 text-xs font-bold text-slate-800 shrink-0">
              <span>4.5</span>
              <Star className="size-3.5 fill-amber-400 text-amber-400" />
            </div>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
            by purepearl studio
          </p>

          {/* Tags & Avatars */}
          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-100">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              <BarChart2 className="size-3" /> Beginner
            </span>

            <div className="flex items-center -space-x-2">
              {studentAvatars.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className="relative size-6 sm:size-7 rounded-full border-2 border-white ring-1 ring-slate-100 overflow-hidden"
                >
                  <Image src={src} alt="avatar" fill className="object-cover" />
                </div>
              ))}
              <div className="size-6 sm:size-7 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                26+
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mt-3 font-bold text-base text-brand-blue">
            $25<span className="text-xs font-normal text-slate-500">/lifetime</span>
          </div>
        </div>

        {/* Bottom Overlapping Lime Card: Happy Students */}
        <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:-right-4 z-20 w-[190px] sm:w-[220px] bg-brand-lime rounded-2xl p-3 sm:p-3.5 shadow-xl border border-brand-lime-hover/40 animate-float-slow">
          <div className="flex items-center justify-between gap-1 mb-2">
            <p className="font-extrabold text-xs sm:text-sm text-slate-950">
              Happy Students
            </p>
            <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-slate-900">
              <span>4.5</span>
              <span className="text-slate-700 font-normal">(240)</span>
              <Star className="size-3 fill-slate-950 text-slate-950" />
            </div>
          </div>

          {/* Overlapping Avatar Stack */}
          <div className="flex items-center -space-x-1.5">
            {studentAvatars.map((src, idx) => (
              <div
                key={idx}
                className="relative size-6 sm:size-7 rounded-full border-2 border-brand-lime overflow-hidden"
              >
                <Image src={src} alt="Student avatar" fill className="object-cover" />
              </div>
            ))}
            <div className="size-6 sm:size-7 rounded-full bg-slate-950 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center border-2 border-brand-lime">
              2K+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
