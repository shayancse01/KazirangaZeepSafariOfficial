import { packages } from "./data";
import { ArrowIcon, PlusIcon } from "./icons";

export function Packages() {
  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-3">
        {packages.map((p, i) => (
          <article
            key={p.name}
            style={{ animationDelay: `${i * 100}ms` }}
            className="group flex animate-fade-up flex-col rounded-[20px] bg-[#0B2E12] p-2 opacity-0 shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_4px_12px_0px_oklch(0_0_0/0.08)] transition-transform duration-200 ease-out hover:-translate-y-1 hover:-rotate-1"
          >
            <div className="grid aspect-[16/9] place-items-center rounded-[12px] border border-dashed border-[#FFF200]/30 bg-white/5 transition-transform duration-150 ease-out group-hover:scale-[1.01]">
              <span className="flex flex-col items-center gap-1 opacity-60">
                <PlusIcon className="size-5 transition-transform duration-200 ease-out group-hover:rotate-90" />
                <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                  {p.name} • 16:9
                </span>
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
                {p.span}
              </p>
              <h2 className="mt-1 text-[20px] font-black tracking-tight">{p.name}</h2>
              <p className="mt-2 flex-1 text-[13.5px] font-medium leading-relaxed opacity-80">
                {p.body}
              </p>
              <ul className="mt-3 space-y-1 border-t border-[#FFF200]/15 pt-3 text-[13px] font-semibold">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#FFF200]" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href="/booking"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#FFF200] py-2.5 text-[13px] font-black text-[#0B2E12] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-[0.96]"
              >
                Check availability
                <ArrowIcon className="size-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-4 max-w-[62ch] text-[13px] font-medium opacity-70">
        Packages are templates, not fixed prices — final cost depends on range,
        vehicle, visitors and entry fees. We confirm the exact total on WhatsApp
        before you pay anything.
      </p>
    </div>
  );
}
