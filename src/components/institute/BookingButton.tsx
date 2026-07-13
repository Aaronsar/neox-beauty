"use client";

import { useBooking } from "@/components/institute/BookingProvider";
import type { Institute } from "@/data/site";

interface BookingButtonProps {
  institute: Institute;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "text";
}

export default function BookingButton({
  institute,
  children,
  className = "",
  variant = "primary",
}: BookingButtonProps) {
  const { openBooking } = useBooking();

  if (variant === "text") {
    return (
      <button
        type="button"
        onClick={openBooking}
        className={`inline-flex cursor-pointer items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all hover:gap-3 ${className}`}
        style={{ color: institute.accent }}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openBooking}
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl ${className}`}
      style={{
        backgroundColor: institute.accent,
        boxShadow: `0 8px 28px ${institute.accent}44`,
      }}
    >
      {children}
    </button>
  );
}
