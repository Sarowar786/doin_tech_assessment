"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import AuthVisualShowcase from "@/components/auth/AuthVisualShowcase";

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const router = useRouter();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const onSubmit = async (data: LoginFormValues) => {
    // Pure frontend simulation: store mock session and navigate
    dispatch(setUser({ token: "demo-frontend-token" }));
    toast.success("Welcome back! Logged in successfully 🎉");
    router.push(callbackUrl);
  };

  return (
    <div className="min-h-screen w-full bg-brand-blue bg-hero-grid relative flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-10 sm:py-16 overflow-x-hidden">
      {/* Top Left Logo */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-10 z-30">
        <Link href="/" className="inline-block group focus:outline-none" aria-label="ByteSpace Home">
          <div className="relative h-8 w-32 sm:w-36 transition-transform group-hover:scale-105">
            <Image
              src="/Header_Logo.png"
              alt="ByteSpace"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>
      </div>

      {/* Main Two-Column Centered Layout */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-10 sm:pt-6">
        {/* Left Column: Visual & Course Showcase */}
        <div className="w-full flex justify-center lg:justify-start">
          <AuthVisualShowcase
            title="Sign in with ease"
            description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
          />
        </div>

        {/* Right Column: Clean White Rounded Card */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-white/20 transition-all">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-brand-blue mb-1">
                Sign In
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Welcome Back
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="designer@example.com"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 outline-none transition focus:ring-1 focus:ring-brand-blue ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-brand-blue"
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="********"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 outline-none transition focus:ring-1 focus:ring-brand-blue ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-brand-blue"
                  }`}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Sign In Submit Button (aligned right like design) */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="lime"
                  disabled={isSubmitting}
                  className="rounded-full px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] h-auto"
                >
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </Button>
              </div>

              {/* Divider: or */}
              <div className="relative my-7 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <span className="relative bg-white px-3 text-xs text-gray-400 font-normal">
                  or
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className="flex items-center justify-center gap-4">
                {/* Facebook */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="size-12 rounded-full border border-gray-200 flex items-center justify-center text-slate-900 hover:bg-gray-50 transition-colors shadow-xs focus:outline-none"
                >
                  <svg className="size-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                {/* Google */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="size-12 rounded-full border border-gray-200 flex items-center justify-center text-slate-900 hover:bg-gray-50 transition-colors shadow-xs focus:outline-none"
                >
                  <svg className="size-5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-2 .4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16C3.7 19.7 7.5 23 12 23z"
                    />
                  </svg>
                </button>
              </div>

              {/* Bottom Footer Link */}
              <p className="text-center text-sm text-slate-500 pt-3">
                New user?{" "}
                <Link
                  href="/register"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
