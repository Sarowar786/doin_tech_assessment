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
      {/* 3D Decorative Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">

        {/* 1. Lime Spring — Top-Left */}
        <div className="absolute top-[80px] sm:top-[120px] lg:top-[160px] left-0 animate-float-slow select-none">
          <Image
            src="/Frame.png"
            alt="Lime 3D Spring"
            width={267}
            height={387}
            priority
            className="w-[72px] sm:w-[110px] md:w-[160px] lg:w-[240px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 2. White Zigzag — Middle-Left (hidden on xs, show from sm) */}
        <div className="hidden sm:block absolute top-[340px] sm:top-[400px] md:top-[440px] lg:top-[480px] left-[4%] sm:left-[6%] lg:left-[10%] animate-float-reverse select-none">
          <Image
            src="/Mask Group (1).png"
            alt="White 3D Zigzag"
            width={276}
            height={176}
            className="w-[80px] sm:w-[110px] md:w-[150px] lg:w-[195px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 3. White Torus — Bottom-Left */}
        <div className="absolute bottom-0 sm:bottom-[20px] lg:bottom-[40px] left-0 sm:left-[1%] lg:left-[17%] animate-float-slow select-none">
          <Image
            src="/Cone (1).png"
            alt="White 3D Torus"
            width={346}
            height={343}
            className="w-[90px] sm:w-[140px] md:w-[200px] lg:w-[270px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 4. Lime Cylinder — Top-Right */}
        <div className="absolute top-[90px] sm:top-[150px] md:top-[200px] lg:top-[240px] right-0 animate-float-reverse select-none">
          <Image
            src="/Cone.png"
            alt="Lime 3D Cylinder"
            width={213}
            height={372}
            priority
            className="w-[60px] sm:w-[100px] md:w-[150px] lg:w-[230px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 5. White Pyramid — Middle-Right (hidden on xs) */}
        <div className="hidden sm:block absolute top-[340px] sm:top-[390px] md:top-[430px] lg:top-[460px] right-[5%] sm:right-[7%] md:right-[9%] lg:right-[12%] animate-float-slow select-none">
          <Image
            src="/Cone (2).png"
            alt="White 3D Pyramid"
            width={190}
            height={189}
            className="w-[70px] sm:w-[90px] md:w-[130px] lg:w-[190px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* 6. White Coil — Bottom-Right (md and above) */}
        <div className="hidden md:block absolute bottom-0 sm:bottom-[20px] lg:bottom-[40px] right-0 sm:right-[1%] lg:right-[16%] animate-float-reverse select-none">
          <Image
            src="/Frame (1).png"
            alt="White 3D Coil"
            width={317}
            height={332}
            className="w-[130px] md:w-[190px] lg:w-[260px] h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Central Visual Stage at the Bottom */}
      <div className="relative w-full max-w-6xl mx-auto flex items-end justify-center overflow-visible mt-auto z-20 pb-0">

        {/* Lime Semicircular Dome Backdrop */}
        <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2
          w-[420px] h-[420px]
          sm:w-[620px] sm:h-[620px]
          md:w-[800px] md:h-[800px]
          lg:w-[980px] lg:h-[980px]
          rounded-full bg-brand-lime shadow-2xl transition-all pointer-events-none" />

        {/* Student Cutout Image */}
        <div className="relative z-10 flex justify-center items-end leading-none">
          <Image
            src="/heroImage.png"
            alt="Student with laptop and headphones"
            width={720}
            height={600}
            priority
            className="
              w-[240px]
              sm:w-[380px]
              md:w-[500px]
              lg:w-[620px]
              xl:w-[670px]
              h-auto object-contain object-bottom select-none pointer-events-none drop-shadow-2xl
              translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-13 block"
          />
        </div>

        {/* Floating Card 1: UI/UX Design — Left */}
        <div className="absolute
          top-[18%] left-[1%]
          sm:top-[22%] sm:left-[4%]
          md:top-[25%] md:left-[10%]
          lg:top-[30%] lg:left-[17%]
          z-20 animate-float-slow">
          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-2xl border border-gray-100 flex items-center gap-2 sm:gap-3 backdrop-blur-xs transition-transform hover:scale-105">
            <div className="size-8 sm:size-9 md:size-10 rounded-lg sm:rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
              <Layout className="size-4 sm:size-5" />
            </div>
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-900 leading-tight">
                UI/UX Design
              </p>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>
        </div>

        {/* Floating Card 2: Learning Progress — Right */}
        <div className="absolute
          top-[22%] right-[1%]
          sm:top-[26%] sm:right-[4%]
          md:top-[29%] md:right-[10%]
          lg:top-[34%] lg:right-[17%]
          z-20 animate-float-reverse">
          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-2xl border border-gray-100 min-w-[110px] sm:min-w-[150px] md:min-w-[185px] backdrop-blur-xs transition-transform hover:scale-105">
            <p className="text-[9px] sm:text-[11px] md:text-xs font-semibold text-slate-500">
              Learning Progress
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mt-0.5 tracking-tight leading-none">
              55%
            </p>
            <div className="w-full bg-gray-100 h-1.5 sm:h-2 rounded-full overflow-hidden mt-2">
              <div
                className="bg-brand-lime h-full rounded-full transition-all duration-1000"
                style={{ width: "55%" }}
              />
            </div>
          </div>
        </div>

        {/* Floating Card 3: Happy Students — Bottom-Left (hidden on mobile) */}
        <div className="hidden sm:block absolute
          sm:bottom-[8%] sm:left-[4%]
          md:bottom-[12%] md:left-[10%]
          lg:bottom-[14%] lg:left-[18%]
          z-20 animate-float-slow">
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
