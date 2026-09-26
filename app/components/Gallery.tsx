import { gallerySlots } from "./data";
import { PlusIcon } from "./icons";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 pb-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-[28px] font-black tracking-tight sm:text-[36px]">
          Field notes in photos.
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
          02 — Empty grid
        </p>
      </div>
      <p className="mt-2 max-w-[52ch] text-[14px] font-medium opacity-75">
        Six slots, ready for your best frames later. Hover to feel the grid —
        click does a little press bounce.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {gallerySlots.map((label, i) => (
          <div
            key={label}
            className={`group grid place-items-center rounded-2xl border border-dashed border-[#FFF200]/45 bg-white/10 outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-150 ease-out hover:rotate-1 hover:scale-[1.03] active:scale-[0.96] ${
              i % 3 === 0 ? "aspect-[4/3]" : "aspect-square"
            }`}
          >
            <span className="flex flex-col items-center gap-1.5 opacity-70">
              <PlusIcon className="size-6 transition-transform duration-200 ease-out group-hover:rotate-90 group-hover:scale-110" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                {label}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
