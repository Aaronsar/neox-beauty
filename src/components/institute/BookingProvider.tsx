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
          className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
            onClick={close}
            aria-label="Fermer"
          />

          <div className="relative z-10 flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[85dvh] sm:max-w-2xl sm:rounded-3xl">
            {/* Header */}
            <div
              className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4"
              style={{ borderBottomColor: `${institute.accent}22` }}
            >
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.3em] uppercase"
                  style={{ color: institute.accent }}
                >
                  Réservation
                </p>
                <h2
                  id="booking-title"
                  className="font-display text-xl font-bold text-charcoal"
                >
                  {institute.shortName}
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-charcoal transition-colors hover:bg-soft"
                aria-label="Fermer la fenêtre"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Contenu Planity */}
            <div className="flex-1 overflow-y-auto p-6">
              <div
                className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center"
                style={{ borderColor: `${institute.accent}33` }}
              >
                <div
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
                  style={{ backgroundColor: `${institute.accent}12` }}
                >
                  📅
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal">
                  Widget Planity — {institute.shortName}
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted">
                  Le code Planity de cet institut sera intégré ici. Vous pourrez
                  choisir votre prestation et réserver directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
}
