import { experiences } from "./data";

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-20 pb-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="max-w-[16ch] text-[28px] font-black leading-tight tracking-tight sm:text-[36px]">
          Things to do, beyond the jeep.
        </h2>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
          Experiences — 8 ways in
        </p>
      </div>
      <p className="mt-2 max-w-[58ch] text-[14px] font-medium opacity-75">
        One park, many doors. Pair a morning safari with an afternoon of birds,
        tea, waterfalls or village craft — every day tells a different story.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {experiences.map((e, i) => (
          <article
            key={e.title}
            style={{ animationDelay: `${(i % 4) * 100}ms` }}
            className="group animate-fade-up rounded-[20px] border border-[#FFF200]/30 bg-[#FFF200]/5 p-5 opacity-0 transition-transform duration-150 ease-out hover:-translate-y-1 hover:-rotate-1 active:scale-[0.98]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[12px] font-bold tracking-[0.16em] opacity-60 transition-transform duration-150 ease-out group-hover:animate-wiggle">
                {e.n}
              </p>
              <span className="size-2 rounded-full bg-[#FFF200]/50 transition-transform duration-150 ease-out group-hover:scale-150" />
            </div>
            <h3 className="mt-2 text-[18px] font-black tracking-tight">{e.title}</h3>
            <p className="mt-1.5 text-[13.5px] font-medium leading-relaxed opacity-80">
              {e.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
