"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import AuthVisualShowcase from "@/components/auth/AuthVisualShowcase";

const registerSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Full name is required"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    // Pure frontend simulation
    toast.success("Account created successfully! Please sign in 🎉");
    router.push("/login");
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
            title="Sign up and come in"
            description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
          />
        </div>

        {/* Right Column: Clean White Rounded Card */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-white/20 transition-all">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-brand-blue mb-1">
                Create an Account
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Welcome to ByteSpace
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5" noValidate>
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jamie Davis"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-slate-900 placeholder:text-gray-400 outline-none transition focus:ring-1 focus:ring-brand-blue ${
                    errors.full_name
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-200 focus:border-brand-blue"
                  }`}
                  {...register("full_name")}
                />
                {errors.full_name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

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

              {/* Continue Submit Button (aligned right like design) */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="lime"
                  disabled={isSubmitting}
                  className="rounded-full px-8 py-3 text-sm font-semibold text-slate-950 shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] h-auto"
                >
                  {isSubmitting ? "Submitting..." : "Continue"}
                </Button>
              </div>

              {/* Bottom Footer Link */}
              <p className="text-center text-sm text-slate-500 pt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
