"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar:
      "/testimonials_image_1.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar:
      "/testimonials_image_2.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar:
      "/testimonials_image_3.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbfdff] via-[#f7faff] to-[#edf3fe] py-20 sm:py-24 lg:py-28">
      {/* Ambient Glows */}
      <div className="absolute top-[2%] left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-[#d2f822] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-[200px] w-[400px] h-[400px] bg-[#d2f822]/40 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-10 w-[400px] h-[400px] bg-[#3b82f6]/20 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.14]">
              Discover What Our <br />
              Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-1">
            <p className="text-slate-500 text-xs sm:text-sm md:text-[14px] leading-relaxed font-normal max-w-lg">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-16">
          {testimonials.map((item) => (
            <Card
              key={item.id}
              className="gap-[2px] rounded-[28px] border-none bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-start"
            >
              {/* Avatar */}
              <div className="relative size-14 rounded-full overflow-hidden shrink-0 mb-4 bg-slate-100 ring-2 ring-white shadow-xs">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              {/* Author & Role */}
              <h3 className="font-bold text-base text-slate-900 leading-snug">
                {item.name}
              </h3>
              <p className="text-xs font-semibold text-brand-blue">
                {item.role}
              </p>

              {/* Quote */}
              <p className="text-xs sm:text-[18px] text-slate-600 leading-relaxed font-normal pt-5">
                {item.quote}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
