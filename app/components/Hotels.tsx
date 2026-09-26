import { hotelGroups } from "./data";
import { PlusIcon } from "./icons";

export function Hotels() {
  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-3">
        {hotelGroups.map((h, i) => (
          <article
            key={h.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group animate-fade-up rounded-[20px] border border-[#FFF200]/30 bg-[#FFF200]/5 p-2 opacity-0 transition-transform duration-150 ease-out hover:-translate-y-1 hover:-rotate-1 active:scale-[0.98]"
          >
            <div className="grid aspect-[16/10] place-items-center rounded-[12px] border border-dashed border-[#FFF200]/40 bg-white/10">
              <span className="flex flex-col items-center gap-1 opacity-60">
                <PlusIcon className="size-5 transition-transform duration-200 ease-out group-hover:rotate-90" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {h.name} • photo
                </span>
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-[18px] font-black tracking-tight">{h.name}</h2>
              <p className="mt-1.5 text-[13.5px] font-medium leading-relaxed opacity-80">
                {h.body}
              </p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-3 rounded-[20px] bg-[#0B2E12] p-5 text-[#FFF200] sm:p-6">
        <p className="text-[14px] font-bold">
          Tell us your dates — we&apos;ll match a stay to your safari gate.
        </p>
        <p className="mt-1 max-w-[60ch] text-[13px] font-medium opacity-75">
          We don&apos;t take hotel commissions to show here yet — this page is an
          information guide. Share your budget on WhatsApp and we&apos;ll point
          you at 2–3 honest options near Kohora.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#FFF200] px-5 py-2.5 text-[13px] font-black text-[#0B2E12] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
        >
          Ask about stays →
        </a>
      </div>
    </div>
  );
}
