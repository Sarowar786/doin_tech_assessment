import Image from "next/image";
import { Star, Layout } from "lucide-react";

const happyStudentAvatars = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
];

export default function HeroVisual() {
  return (
    <>
      {/* 3D Decorative Floating Shapes - Spanning the ENTIRE Hero Section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
        {/* 1. Lime Spring (Top-Left, beside H1 Title) */}
        <div className="absolute top-[120px] sm:top-[140px] lg:top-[160px] left-[0%] sm:left-[0%] lg:left-[%] animate-float-slow select-none">
          <Image
            src="/Frame.png"
            alt="Lime 3D Spring"
            width={267}
            height={387}
            priority
            className="w-20 sm:w-28 md:w-36 lg:w-[255px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 2. White Zigzag Squiggle (Middle-Left, beside Search Bar) */}
        <div className="absolute top-[400px] sm:top-[440px] lg:top-[480px] left-[6%] sm:left-[8%] lg:left-[10%] animate-float-reverse select-none">
          <Image
            src="/Mask Group (1).png"
            alt="White 3D Zigzag"
            width={276}
            height={176}
            className="w-12 sm:w-28 md:w-36 lg:w-[195px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 3. White Torus (Bottom-Left Corner) */}
        <div className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] left-[1%] sm:left-[2%] lg:left-[17%] animate-float-slow select-none z-100">
          <Image
            src="/Cone (1).png"
            alt="White 3D Torus"
            width={346}
            height={343}
            className="w-28 sm:w-40 md:w-52 lg:w-[270px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 4. Lime Cylinder (Top-Right, beside H1/Subtitle) */}
        <div className="absolute top-[190px] sm:top-[220px] lg:top-[240px] right-[0%] sm:right-[1%] lg:right-[0%] animate-float-reverse select-none">
          <Image
            src="/Cone.png"
            alt="Lime 3D Cylinder"
            width={213}
            height={372}
            priority
            className="w-20 sm:w-28 md:w-36 lg:w-[250px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 5. White Pyramid (Middle-Right, beside Search Bar) */}
        <div className="absolute top-[390px] sm:top-[430px] lg:top-[460px] right-[8%] sm:right-[10%] lg:right-[12%] animate-float-slow select-none">
          <Image
            src="/Cone (2).png"
            alt="White 3D Pyramid"
            width={190}
            height={189}
            className="w-14 sm:w-20 md:w-24 lg:w-[190px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 6. White Coil (Bottom-Right Corner) */}
        <div className="absolute bottom-[20px] sm:bottom-[30px] lg:bottom-[40px] right-[1%] sm:right-[2%] lg:right-[16%] animate-float-reverse select-none">
          <Image
            src="/Frame (1).png"
            alt="White 3D Coil"
            width={317}
            height={332}
            className="w-24 sm:w-36 md:w-15 lg:w-[260px] hidden md:block h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Central Visual Stage at the Bottom of Hero Section */}
      <div className="relative w-full max-w-6xl mx-auto flex items-end justify-center overflow-visible mt-auto z-20 pb-0">
        {/* Giant Lime Semicircular Dome Backdrop:
            Positioned with bottom-0 translate-y-1/2 so the equator is right on the bottom line.
            The UPPER HALF of the circle is 100% FULLY VISIBLE as a perfect semicircular dome! */}
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] sm:w-[760px] sm:h-[760px] md:w-[880px] md:h-[880px] lg:w-[980px] lg:h-[980px] rounded-full bg-brand-lime shadow-2xl transition-all pointer-events-none" />

        {/* Student Cutout Image - lowered down with bottom partially hidden beneath the bottom line */}
        <div className="relative z-10 flex justify-center items-end leading-none">
          <Image
            src="/heroImage.png"
            alt="Student with laptop and headphones"
            width={720}
            height={600}
            priority
            className="w-[320px] sm:w-[440px] md:w-[540px] lg:w-[620px] xl:w-[670px] h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-2xl translate-y-7 sm:translate-y-9 md:translate-y-11 lg:translate-y-13 block"
          />
        </div>

        {/* Floating Card 1: UI/UX Design (Left of student's shoulder/chin) */}
        <div className="absolute top-[20%] sm:top-[24%] md:top-[27%] lg:top-[30%] left-[4%] sm:left-[8%] md:left-[13%] lg:left-[17%] z-20 animate-float-slow">
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

        {/* Floating Card 2: Learning Progress (Right of student's shoulder) */}
        <div className="absolute top-[24%] sm:top-[28%] md:top-[31%] lg:top-[34%] right-[4%] sm:right-[8%] md:right-[13%] lg:right-[17%] z-20 animate-float-reverse">
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
        <div className="absolute bottom-[10%] sm:bottom-[12%] md:bottom-[14%] left-[5%] sm:left-[9%] md:left-[14%] lg:left-[18%] z-20 animate-float-slow">
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
    </>
  );
}
