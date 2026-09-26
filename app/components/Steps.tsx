import { steps } from "./data";

export function Steps() {
  return (
    <section className="pb-14">
      <div className="grid gap-3 sm:grid-cols-3">
        {steps.map(([n, t, d], i) => (
          <div
            key={n}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group animate-fade-up rounded-2xl border border-[#FFF200]/30 bg-[#FFF200]/5 p-5 opacity-0 transition-transform duration-150 ease-out hover:-translate-y-1 hover:-rotate-1 active:scale-[0.96]"
          >
            <p className="font-mono text-[12px] font-bold tracking-[0.16em] opacity-60 transition-transform duration-150 ease-out group-hover:animate-wiggle">
              {n}
            </p>
            <p className="mt-1 text-[16px] font-black">{t}</p>
            <p className="mt-1 text-[13px] font-medium opacity-75">{d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
