"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ShoppingBag, User, LogOut, ChevronDown, Handbag } from "lucide-react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem("accessToken")));
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("accessToken");
    localStorage.removeItem("accessToken");
    setIsProfileMenuOpen(false);
    setIsOpen(false);
    router.push("/");
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[120px] flex items-center ${
        scrolled
          ? "bg-brand-blue/90 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="ByteSpace Home"
          >
            <div className="relative h-8 w-32 sm:w-36 transition-transform group-hover:scale-105">
              <Image
                src="/Header_Logo.png"
                alt="ByteSpace Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm lg:text-base font-base transition-colors relative py-1 ${
                    active
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {isLoggedIn ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all"
                >
                  <User className="size-4 text-brand-lime" />
                  <span>Account</span>
                  <ChevronDown className="size-3.5 opacity-70" />
                </button>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 text-gray-800 animate-in fade-in zoom-in-95 duration-150">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/my-courses"
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                    >
                      My Courses
                    </Link>
                    <div className="my-1 border-t border-gray-100" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left transition-colors"
                    >
                      <LogOut className="size-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm lg:text-base font-base text-white hover:text-white transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  href="/register"
                  className="text-sm lg:text-base font-base text-white hover:bg-white/20 transition-all"
                >
                  Join Us
                </Link>
              </>
            )}

            {/* Shopping Bag Button */}
            <Link
              href="/cart"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all focus:outline-none"
              aria-label="Shopping Cart"
            >
              <Handbag className="size-4" />
            </Link>
          </div>

          {/* Mobile Menu & Bag Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/cart"
              className="p-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="size-4" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-blue border-b border-white/15 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    active
                      ? "bg-white/15 text-white font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="border-t border-white/15 pt-4 mt-2 flex flex-col gap-3">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium text-white/90 py-2 px-3 hover:bg-white/10 rounded-lg"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-base font-medium text-red-300 py-2 px-3 hover:bg-white/10 rounded-lg"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button
                    asChild
                    variant="glass"
                    className="w-full rounded-full border-white/30 text-white"
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="lime"
                    className="w-full rounded-full"
                  >
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Join Us
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
