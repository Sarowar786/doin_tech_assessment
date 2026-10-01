"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreatorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1234FF] py-14 sm:py-20 lg:py-24">
      {/* ── Decorative shapes ── */}

      {/* Top-left: white spiral swirl */}
      <div className="pointer-events-none absolute -top-4 left-0 w-[70px] sm:w-[110px] md:w-[180px] lg:w-[280px] select-none">
        <Image
          src="/Mask Group.png"
          alt=""
          width={230}
          height={330}
          className="object-contain opacity-90"
          priority
        />
      </div>

      {/* Top-left-inner — visible from sm+ */}
      <div className="pointer-events-none absolute top-4 sm:top-6 left-[60px] sm:left-[90px] md:left-[140px] lg:left-[230px] w-[50px] sm:w-[75px] md:w-[120px] lg:w-[180px] select-none hidden sm:block">
        <Image
          src="/Mask Group (1).png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Left-bottom: yellow-green squiggle — hidden on mobile, visible from md */}
      <div className="pointer-events-none absolute -bottom-2 -left-2 sm:left-0 w-[70px] sm:w-[100px] md:w-[180px] lg:w-[260px] select-none">
        <Image
          src="/Cone (4).png"
          alt=""
          width={270}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Right-top: green triangle cone */}
      <div className="pointer-events-none absolute top-2 sm:top-4 right-2 sm:right-6 md:right-10 lg:right-[120px] w-[50px] sm:w-[75px] md:w-[120px] lg:w-[170px] select-none">
        <Image
          src="/Cone (5).png"
          alt=""
          width={190}
          height={190}
          className="object-contain"
        />
      </div>

      {/* Right-mid: white cone / trapezoid */}
      <div className="pointer-events-none absolute top-6 sm:top-10 right-0 w-[55px] sm:w-[80px] md:w-[120px] lg:w-[170px] select-none">
        <Image
          src="/Cone (3).png"
          alt=""
          width={215}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Right-bottom: yellow-green zigzag */}
      <div className="pointer-events-none absolute -bottom-2 right-0 sm:right-2 md:right-4 w-[60px] sm:w-[90px] md:w-[160px] lg:w-[260px] select-none">
        <Image
          src="/Cone(8).png"
          alt=""
          width={325}
          height={325}
          className="object-contain"
        />
      </div>

      {/* Extra: white mini cone — left-mid, visible from md */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 left-0 w-[90px] md:w-[130px] lg:w-[150px] select-none hidden md:block">
        <Image
          src="/Cone(6).png"
          alt=""
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-6 sm:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight tracking-tight text-white">
          Unlock Your Potential as a{" "}
          <span className="whitespace-nowrap">Creator with ByteSpace</span>
        </h2>

        <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[15px] text-white/80 max-w-[260px] sm:max-w-xl md:max-w-2xl mx-auto">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/become-creator"
          className="mt-7 sm:mt-8 inline-block rounded-full border-2 border-[#d2f822] bg-[#d2f822] px-6 sm:px-8 py-2 text-xs sm:text-sm font-semibold text-[#1234FF] transition-all duration-300 shadow-[0_0_24px_rgba(210,248,34,0.45)] hover:scale-105 active:scale-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
