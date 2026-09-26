import { landscapes, wildlife } from "./data";
import { PlusIcon } from "./icons";

export function Story() {
  return (
    <section id="story" className="scroll-mt-20 py-14">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
            Our story — a UNESCO World Heritage Site
          </p>
          <h2 className="mt-2 text-balance text-[30px] font-black leading-[1.02] tracking-tight sm:text-[42px]">
            Discover the wild beauty of Kaziranga.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] font-medium leading-relaxed opacity-85">
            Welcome to Kaziranga Jeep Safari — your gateway to an unforgettable
            wildlife adventure in the heart of Assam, India. Experience the
            breathtaking beauty of Kaziranga National Park, famous for its
            iconic one-horned rhinoceros, majestic elephants, wild water
            buffaloes, and rich, diverse wildlife.
          </p>
          <p className="mt-3 max-w-[52ch] text-[15px] font-medium leading-relaxed opacity-85">
            Our open-vehicle safaris cross beautiful grasslands, lush forests,
            wetlands and scenic landscapes with experienced local drivers and
            guides. Wildlife enthusiast, nature lover, photographer, or a family
            on an exciting holiday — this is a memorable journey into the wild.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[...wildlife, ...landscapes].map((w) => (
              <span
                key={w}
                className="rounded-full bg-[#0B2E12] px-3.5 py-1.5 text-[12px] font-bold text-[#FFF200] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:-rotate-1 active:scale-[0.96]"
              >
                {w}
              </span>
            ))}
          </div>
        </div>

        {/* Story image placeholders — empty grid for later */}
        <div className="rounded-[24px] bg-[#0B2E12]/10 p-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="group grid aspect-[3/4] place-items-center rounded-[16px] border border-dashed border-[#FFF200]/45 bg-white/10 transition-transform duration-150 ease-out hover:rotate-1 hover:scale-[1.02] active:scale-[0.96]">
              <span className="flex flex-col items-center gap-1 opacity-70">
                <PlusIcon className="size-6 transition-transform duration-200 ease-out group-hover:rotate-90" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  Rhino • 3:4
                </span>
              </span>
            </div>
            <div className="grid grid-rows-2 gap-2">
              <div className="group grid place-items-center rounded-[16px] border border-dashed border-[#FFF200]/45 bg-white/10 transition-transform duration-150 ease-out hover:-rotate-1 hover:scale-[1.02] active:scale-[0.96]">
                <span className="flex flex-col items-center gap-1 opacity-70">
                  <PlusIcon className="size-5 transition-transform duration-200 ease-out group-hover:rotate-90" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                    Wetland • 1:1
                  </span>
                </span>
              </div>
              <div className="grid place-items-center rounded-[16px] bg-[#0B2E12] p-5 text-center text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12)]">
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                    UNESCO
                  </span>
                  <span className="mt-1 block text-[15px] font-black leading-snug">
                    World Heritage Site since 1985
                  </span>
                  <span className="mt-1 block text-[12px] font-medium opacity-75">
                    Home to two-thirds of the world&apos;s one-horned rhinos.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
