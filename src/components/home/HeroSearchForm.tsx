"use client";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSearchFormProps {
  className?: string;
}

export default function HeroSearchForm({
  className = "",
}: HeroSearchFormProps) {
  return (
    <form
      className={`flex items-center justify-center gap-3 sm:gap-4 w-full max-w-xl mx-auto px-4 ${className}`}
      role="search"
    >
      {/* White Input Pill */}
      <div className="flex-1 max-w-[420px] relative flex items-center bg-white rounded-full h-11 sm:h-[48px] px-4 sm:px-5 shadow-lg transition-all focus-within:ring-2 focus-within:ring-white/40">
        <Search className="size-4 sm:size-4.5 text-gray-400 shrink-0 mr-2.5 sm:mr-3" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 text-xs sm:text-sm md:text-[14px] outline-none font-normal"
          aria-label="Search courses, topics, or creators"
        />
      </div>

      {/* Separate Lime Search Button Pill */}
      <Button
        type="submit"
        variant="lime"
        className="rounded-full px-6 sm:px-8 h-11 sm:h-[48px] text-xs sm:text-sm md:text-[14px] font-semibold text-slate-950 shrink-0 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        Search
      </Button>
    </form>
  );
}
