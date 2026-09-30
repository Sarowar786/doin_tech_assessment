"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navColumns = [
  {
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it-software" },
      { label: "Design", href: "/courses?category=design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "/creators" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="w-full bg-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Newsletter + Right 3 Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-5">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 group focus:outline-none"
              aria-label="ByteSpace Home"
            >
              <div className="relative size-7 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/ByteSpace_Icon.png"
                  alt="ByteSpace Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-brand-blue transition-colors font-sans">
                ByteSpace
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-slate-600 text-xs sm:text-sm font-normal max-w-sm leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-3 pt-1">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full max-w-[260px] sm:max-w-[280px] rounded-full border border-gray-300 px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400 transition-all font-normal"
              />
              <Button
                type="submit"
                variant="lime"
                className="rounded-full px-7 sm:px-8 py-2.5 sm:py-3 h-auto text-xs sm:text-sm font-semibold text-slate-950 shrink-0 shadow-xs hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                Search
              </Button>
            </form>

            {/* Disclaimer */}
            <p className="text-[11px] text-slate-500 max-w-sm leading-relaxed font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: 3 Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2 lg:pt-3">
            {navColumns.map((col, idx) => (
              <ul key={idx} className="space-y-3.5 sm:space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-700 hover:text-slate-950 font-normal transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Bar Divider & Links */}
        <div className="border-t border-gray-200 mt-14 sm:mt-16 pt-6 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-600">
          <p className="text-center sm:text-left font-normal text-slate-600">
            &copy; 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 font-normal">
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-600 hover:text-slate-950 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
