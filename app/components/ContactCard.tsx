export function ContactCard() {
  return (
    <div className="grid gap-2 rounded-[24px] border border-[#FFF200]/30 bg-[#FFF200]/5 p-2 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[12px] bg-[#0B2E12] p-6 text-[#FFF200] sm:p-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
          Fastest — WhatsApp
        </p>
        <h2 className="mt-1 text-[26px] font-black leading-tight tracking-tight">
          Ping us. We hold the jeep.
        </h2>
        <p className="mt-2 text-[14px] opacity-75">
          7 AM – 9 PM, replies within ~2 hours. Share your date, range and guest
          count — we reply with jeep number and reporting point.
        </p>
        <a
          href="/booking"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FFF200] px-5 py-2.5 text-[14px] font-black text-[#0B2E12] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
        >
          WhatsApp booking →
        </a>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">
          Number slot — add real number here later
        </p>
      </div>
      <div className="grid content-start gap-3 rounded-[12px] border border-[#FFF200]/20 p-6 sm:p-8">
        <div className="grid gap-1.5 text-[13px] font-bold">
          <span>Kohora reporting point</span>
          <p className="rounded-xl border border-[#FFF200]/30 px-3.5 py-2.5 text-[14px] font-medium">
            Central Range Gate, Kohora — report 30 min early with ID + permit.
          </p>
        </div>
        <div className="grid gap-1.5 text-[13px] font-bold">
          <span>Season</span>
          <p className="rounded-xl border border-[#FFF200]/30 px-3.5 py-2.5 text-[14px] font-medium">
            November – April. Closed in monsoon when the grasslands flood.
          </p>
        </div>
        <a
          href="/booking"
          className="mt-1 rounded-full border border-[#FFF200]/40 py-3 text-center text-[14px] font-black transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#FFF200]/10 active:scale-[0.96]"
        >
          Go to booking form →
        </a>
      </div>
    </div>
  );
}
