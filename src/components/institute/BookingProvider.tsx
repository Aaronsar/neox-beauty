"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Institute } from "@/data/site";

interface BookingContextValue {
  openBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within BookingProvider");
  }
  return ctx;
}

interface BookingProviderProps {
  institute: Institute;
  children: React.ReactNode;
}

export function BookingProvider({ institute, children }: BookingProviderProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);
  const openBooking = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            className="backdrop-enter absolute inset-0 bg-charcoal/50 backdrop-blur-md"
            onClick={close}
            aria-label="Fermer"
          />

          <div className="modal-enter relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
            <div
              className="relative shrink-0 px-8 pt-8 pb-6"
              style={{ backgroundColor: `${institute.accent}08` }}
            >
              <button
                type="button"
                onClick={close}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-charcoal shadow-sm transition-transform hover:scale-105"
                aria-label="Fermer"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.3em] uppercase"
                style={{ backgroundColor: `${institute.accent}15`, color: institute.accent }}
              >
                Réservation
              </span>
              <h2
                id="booking-title"
                className="mt-3 font-display text-2xl font-bold text-charcoal"
              >
                {institute.shortName}
              </h2>
              <p className="mt-1 text-sm text-muted">Réservez via Planity</p>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div
                className="flex min-h-[360px] flex-col items-center justify-center rounded-[2rem] border-2 border-dashed p-8 text-center"
                style={{ borderColor: `${institute.accent}33` }}
              >
                <div
                  className="mb-4 flex h-20 w-20 items-center justify-center rounded-[1.5rem] text-3xl"
                  style={{ backgroundColor: `${institute.accent}12` }}
                >
                  📅
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal">
                  Widget Planity
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  Le code Planity de cet institut sera intégré ici.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
