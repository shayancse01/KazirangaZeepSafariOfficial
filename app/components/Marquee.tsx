const items = [
  "Kohora",
  "Bagori",
  "Agoratoli",
  "Burapahar",
  "Rhino • Buffalo • Elephant",
  "Morning 7:30 • Afternoon 1:30",
];

export function Marquee() {
  return (
    <div
      className="overflow-hidden rounded-full border border-[#FFF200]/30 py-2"
      aria-hidden
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.2em]">
        {[0, 1].map((n) => (
          <span key={n} className="flex gap-8">
            {items.map((t) => (
              <span key={t + n} className="flex items-center gap-8">
                {t} <span className="opacity-50">✳</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
