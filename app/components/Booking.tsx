import { Dropdown } from "./Dropdown";
import { guestOptions, rangeOptions, slotOptions } from "./data";

const inputCls =
  "rounded-xl border border-[#FFF200]/30 bg-transparent px-3.5 py-2.5 font-medium outline-none placeholder:text-[#FFF200]/40 focus:border-[#FFF200] focus:bg-[#FFF200]/10";

export function Booking() {
  return (
    <section id="book" className="scroll-mt-20 pb-16">
      <div className="rounded-[24px] border border-[#FFF200]/30 bg-[#FFF200]/5 p-2">
        <div className="grid gap-2 rounded-[16px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[12px] bg-[#0B2E12] p-6 text-[#FFF200] sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
              04 — Request seats
            </p>
            <h2 className="mt-1 text-[28px] font-black leading-tight tracking-tight">
              Tell us when. We hold the jeep.
            </h2>
            <p className="mt-2 text-[14px] opacity-75">
              No advance needed. Confirmation on WhatsApp within 2 hours, 7 AM –
              9 PM.
            </p>
            <ul className="mt-5 space-y-2 font-mono text-[12px] uppercase tracking-[0.12em] opacity-80">
              <li>→ Kohora gate • 6:45 AM report</li>
              <li>→ Carry ID for every guest</li>
              <li>→ Kids under 5 ride free</li>
            </ul>
          </div>
          <form action="#book" className="grid content-start gap-3 rounded-[12px] border border-[#FFF200]/20 p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[13px] font-bold">
                Name
                <input required placeholder="Aarav Sharma" className={inputCls} />
              </label>
              <label className="grid gap-1.5 text-[13px] font-bold">
                Phone / WhatsApp
                <input required type="tel" placeholder="+91 …" className={inputCls} />
              </label>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-1.5 text-[13px] font-bold">
                Date
                <input
                  required
                  type="date"
                  className={`${inputCls} [color-scheme:dark]`}
                />
              </label>
              <div className="grid gap-1.5 text-[13px] font-bold">
                <span>Range</span>
                <Dropdown
                  name="range"
                  ariaLabel="Safari range"
                  options={rangeOptions}
                  defaultValue="Kohora (Central)"
                />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-1.5 text-[13px] font-bold">
                <span>Slot</span>
                <Dropdown
                  name="slot"
                  ariaLabel="Safari slot"
                  options={slotOptions}
                  defaultValue="Morning 7:30 AM"
                />
              </div>
              <div className="grid gap-1.5 text-[13px] font-bold">
                <span>Guests</span>
                <Dropdown
                  name="guests"
                  ariaLabel="Number of guests"
                  options={guestOptions}
                  defaultValue="2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-1 rounded-full bg-[#FFF200] py-3 text-[14px] font-black text-[#0B2E12] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12)] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
            >
              Request booking →
            </button>
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
              Placeholder form — wire to backend later
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
