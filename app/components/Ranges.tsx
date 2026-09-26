import { ranges } from "./data";
import { ArrowIcon } from "./icons";

export function Ranges() {
  return (
    <section id="ranges" className="scroll-mt-20 py-14">
      <div
        className="flex animate-fade-up flex-wrap items-end justify-between gap-3 opacity-0"
        style={{ animationDelay: "150ms" }}
      >
        <h2 className="text-[28px] font-black tracking-tight sm:text-[36px]">
          Pick your range.
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
          01 — Safari zones
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {ranges.map((r, i) => (
          <article
            key={r.name}
            style={{ animationDelay: `${200 + i * 100}ms` }}
            className="group animate-fade-up rounded-[20px] bg-[#0B2E12] p-2 opacity-0 shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_4px_12px_0px_oklch(0_0_0/0.08)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:-rotate-1 hover:shadow-[0px_0px_0px_1px_oklch(0_0_0/0.12),0px_2px_4px_-1px_oklch(0_0_0/0.14),0px_8px_20px_0px_oklch(0_0_0/0.12)]"
          >
            <div className="rounded-[12px] p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[20px] font-black tracking-tight transition-transform duration-150 ease-out group-hover:translate-x-0.5">
                    {r.name}
                  </h3>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                    {r.tag}
                  </p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#FFF200]/30 transition-transform duration-200 ease-out group-hover:rotate-12 group-hover:scale-110">
                  <ArrowIcon className="size-4" />
                </span>
              </div>
              <p className="mt-3 text-[14px] font-medium opacity-85">{r.note}</p>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-[#FFF200]/20 pt-4 font-mono text-[11px] uppercase tracking-[0.12em]">
                <span className="rounded-full bg-[#FFF200]/10 px-2.5 py-1">{r.time}</span>
                <span className="rounded-full bg-[#FFF200]/10 px-2.5 py-1">{r.seats}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 max-w-[62ch] text-[13px] font-medium opacity-70">
        Explore the Central (Kohora), Western (Bagori), Eastern (Agoratoli) and
        Burapahar ranges — allotment is subject to availability on your date.
      </p>
    </section>
  );
}
