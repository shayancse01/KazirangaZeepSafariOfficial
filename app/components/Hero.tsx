import { ArrowIcon, JeepIcon, PlusIcon } from "./icons";

export function Hero() {
  return (
    <section className="grid gap-8 pb-10 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
      <div className="animate-fade-up opacity-0">
        <p className="inline-flex animate-float items-center gap-2 rounded-full border border-[#FFF200]/35 bg-[#0B2E12]/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em]">
          <span className="size-1.5 animate-pulse rounded-full bg-[#FFF200]" />
          Nov – Apr • 4 ranges open
        </p>
        <h1 className="mt-4 max-w-[14ch] text-balance text-[44px] font-black leading-[0.95] tracking-tight sm:text-[64px]">
          Discover the wild beauty of Kaziranga.
        </h1>
        <p className="mt-4 max-w-[42ch] text-[15px] font-medium leading-relaxed opacity-80">
          Your gateway to an unforgettable wildlife adventure in the heart of
          Assam — one-horned rhinos, elephants and wild buffaloes, from an open
          jeep with local drivers and guides.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0B2E12] py-2.5 pe-4 ps-5 text-[14px] font-bold text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_4px_12px_0px_oklch(0_0_0/0.08)] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
          >
            Check slots
            <ArrowIcon className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
          </a>
          <a
            href="#ranges"
            className="rounded-full border border-[#FFF200]/45 px-5 py-2.5 text-[14px] font-bold transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#FFF200]/10 active:scale-[0.96]"
          >
            Explore ranges
          </a>
        </div>
        <dl className="mt-8 grid max-w-md grid-cols-3 divide-x divide-[#FFF200]/25 border-y border-[#FFF200]/25">
          {[
            ["2,613", "rhinos"],
            ["430 km²", "park"],
            ["2 slots", "/ day"],
          ].map(([n, l]) => (
            <div key={l} className="px-4 py-3 first:pl-0">
              <dt className="sr-only">{l}</dt>
              <dd className="text-[20px] font-black tabular-nums">{n}</dd>
              <dd className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                {l}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Hero image placeholders — empty grid for later */}
      <div className="animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
        <div className="rounded-[24px] bg-[#0B2E12]/10 p-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="group grid aspect-[4/5] place-items-center rounded-[16px] border border-dashed border-[#FFF200]/45 bg-white/10 transition-transform duration-150 ease-out hover:rotate-1 hover:scale-[1.02] active:scale-[0.96]">
              <span className="flex flex-col items-center gap-1 opacity-70">
                <PlusIcon className="size-6 transition-transform duration-200 ease-out group-hover:rotate-90" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  Hero • 4:5
                </span>
              </span>
            </div>
            <div className="grid grid-rows-2 gap-2">
              <div className="group grid place-items-center rounded-[16px] border border-dashed border-[#FFF200]/45 bg-white/10 transition-transform duration-150 ease-out hover:-rotate-1 hover:scale-[1.02] active:scale-[0.96]">
                <span className="flex flex-col items-center gap-1 opacity-70">
                  <PlusIcon className="size-5 transition-transform duration-200 ease-out group-hover:rotate-90" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                    Jeep • 1:1
                  </span>
                </span>
              </div>
              <div className="group grid place-items-center rounded-[16px] bg-[#0B2E12] text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12)] transition-transform duration-150 ease-out hover:rotate-1 hover:scale-[1.02] active:scale-[0.96]">
                <span className="px-4 text-center">
                  <JeepIcon className="mx-auto size-7 transition-transform duration-150 ease-out group-hover:translate-x-1.5" />
                  <span className="mt-1 block text-[13px] font-bold">6 seats / jeep</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                    open gypsy
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">
          Empty image grid — drop photos here later
        </p>
      </div>
    </section>
  );
}
