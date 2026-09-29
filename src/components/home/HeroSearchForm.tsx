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
      className={`w-full max-w-xl mx-auto ${className}`}
      role="search"
    >
      <div className="relative flex items-center bg-white rounded-full p-1.5 pl-5 sm:pl-6 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-white/30 border border-white/20">
        <Search className="size-5 text-gray-400 shrink-0 mr-3" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 text-sm sm:text-base outline-none pr-2 font-normal"
          aria-label="Search courses, topics, or creators"
        />
        <Button
          type="submit"
          variant="lime"
          className="rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 h-auto shrink-0 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
