interface DecorativeShapesProps {
  accent?: string;
}

export default function DecorativeShapes({
  accent = "#d4145a",
}: DecorativeShapesProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="blob-1 absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ backgroundColor: accent }}
      />
      <div
        className="blob-2 absolute top-1/3 -right-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: accent }}
      />
      <div
        className="blob-3 absolute -bottom-20 left-1/4 h-48 w-48 rounded-full opacity-25 blur-2xl"
        style={{ backgroundColor: "#fce4ec" }}
      />
      <div
        className="animate-spin-slow absolute top-20 right-1/4 h-24 w-24 rounded-full border border-dashed opacity-20"
        style={{ borderColor: accent }}
      />
      <div
        className="absolute bottom-32 left-12 h-16 w-16 rounded-2xl opacity-15"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
}
