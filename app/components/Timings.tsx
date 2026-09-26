import { prices, slots } from "./data";
import { ArrowIcon } from "./icons";

export function Timings() {
  return (
    <section id="timings" className="scroll-mt-20 pb-14">
      <div className="rounded-[24px] bg-[#0B2E12] p-2 shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_4px_12px_0px_oklch(0_0_0/0.08)]">
        <div className="grid gap-2 rounded-[16px] lg:grid-cols-2">
          <div className="rounded-[12px] border border-[#FFF200]/15 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
              03 — Daily slots
            </p>
            <h2 className="mt-1 text-[24px] font-black tracking-tight">
              Two slots, every day.
            </h2>
            <ul className="mt-5 space-y-0 divide-y divide-[#FFF200]/15">
              {slots.map((s) => (
                <li
                  key={s.slot}
                  className="group flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <p className="text-[15px] font-bold">{s.slot}</p>
                    <p className="text-[13px] opacity-70">{s.note}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#FFF200] px-3 py-1 font-mono text-[12px] font-bold tabular-nums text-[#0B2E12] transition-transform duration-150 ease-out group-hover:-rotate-3 group-hover:scale-105">
                    {s.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[12px] opacity-60">
              Two shifts daily; timings vary by season, weather and forest
              department instructions. Previously published schedule — confirm
              the current timings before booking. Report 30 min early with ID +
              permit.
            </p>
          </div>
          <div className="rounded-[12px] bg-[#FFF200] p-6 text-[#0B2E12]">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
              Per jeep • up to 6
            </p>
            <h2 className="mt-1 text-[24px] font-black tracking-tight">
              Simple pricing.
            </h2>
            <ul className="mt-4 space-y-3 text-[14px] font-semibold">
              {prices.map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-center justify-between gap-3 border-b border-[#0B2E12]/15 pb-3 last:border-0"
                >
                  <span>{k}</span>
                  <span className="tabular-nums">{v}</span>
                </li>
              ))}
            </ul>
            <a
              href="#book"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#0B2E12] py-3 text-[14px] font-bold text-[#FFF200] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]"
            >
              Reserve this jeep
              <ArrowIcon className="size-4" />
            </a>
            <p className="mt-2 text-center text-[12px] opacity-70">
              Safari prices depend on range, vehicle, visitors and applicable
              entry fees — we confirm the exact total on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
