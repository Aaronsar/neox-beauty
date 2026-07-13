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
        className={`inline-flex cursor-pointer items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors ${className}`}
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
      className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-transform hover:scale-105 sm:px-8 sm:py-3.5 sm:text-sm sm:normal-case sm:tracking-wide ${className}`}
      style={{
        backgroundColor: institute.accent,
        boxShadow: `0 8px 24px ${institute.accent}33`,
      }}
    >
      {children}
    </button>
  );
}
