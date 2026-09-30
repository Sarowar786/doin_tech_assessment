"use client";

import Image from "next/image";
import Link from "next/link";

export default function CreatorSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1234FF] py-16 sm:py-20 lg:py-24">
      {/* ── Decorative shapes ── */}

      {/* Top-left: white spiral swirl */}
      <div className="pointer-events-none absolute -top-4 w-[90px] sm:w-[110px] lg:w-[330px] select-none">
        <Image
          src="/Mask Group.png"
          alt=""
          width={230}
          height={330}
          className="object-contain opacity-90"
          priority
        />
      </div>

      {/* Top-left-inner*/}
      <div className="pointer-events-none absolute top-6 left-28 sm:left-36 lg:left-44 w-[70px] sm:w-[85px] lg:w-[200px] select-none">
        <Image
          src="/Mask Group (1).png"
          alt=""
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Left-bottom: yellow-green squiggle / wavy */}
      <div className="pointer-events-none absolute -bottom-2 -left-4 sm:left-30 w-[100px] sm:w-[120px] lg:w-[300px] select-none">
        <Image
          src="/Cone (4).png"
          alt=""
          width={270}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Right-top: green triangle cone */}
      <div className="pointer-events-none absolute top-4 right-4 sm:right-8 lg:right-35 w-[70px] sm:w-[85px] lg:w-[190px] select-none">
        <Image
          src="/Cone (5).png"
          alt=""
          width={190}
          height={190}
          className="object-contain"
        />
      </div>

      {/* Right-mid: white cone / trapezoid */}
      <div className="pointer-events-none absolute top-10 right-0 sm:right-0 w-[80px] sm:w-[95px] lg:w-[190px] select-none">
        <Image
          src="/Cone (3).png"
          alt=""
          width={215}
          height={160}
          className="object-contain"
        />
      </div>

      {/* Right-bottom: yellow-green zigzag */}
      <div className="pointer-events-none absolute -bottom-2 right-4 sm:right-4 lg:right-6 w-[85px] sm:w-[105px] lg:w-[300px] select-none">
        <Image
          src="/Cone(8).png"
          alt=""
          width={325}
          height={325}
          className="object-contain"
        />
      </div>

      {/* Extra: white mini cone scattered left-mid area */}
      <div className="pointer-events-none absolute top-2/3 -translate-y-1/2 left-0 sm:left-16 lg:left-0 w-[150px] sm:w-[160px] lg:w-[150px] select-none hidden sm:block">
        <Image
          src="/Cone(6).png"
          alt=""
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-tight tracking-tight text-white">
          Unlock Your Potential as a{" "}
          <span className="whitespace-nowrap">Creator with ByteSpace</span>
        </h2>

        <p className="mt-5 text-sm sm:text-[15px] text-white/80">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/become-creator"
          className="mt-8 inline-block rounded-full border-2 border-[#d2f822] bg-[#d2f822] px-8 py-2 text-sm font-semibold text-[#1234FF] transition-all duration-300 shadow-[0_0_24px_rgba(210,248,34,0.45)] active:scale-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
