import { siteNav } from "./data";
import { JeepIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#FFF200]/25 bg-[#4CD964]/85 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="/" className="group flex items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#0B2E12] text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12)] transition-transform duration-150 ease-out group-hover:-rotate-6 group-active:scale-[0.96]">
              <JeepIcon className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-bold tracking-tight">
                Kaziranga Jeep Safari
              </span>
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                Official • Assam
              </span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <details className="group relative lg:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#FFF200]/40 px-4 py-2 text-[13px] font-bold transition-transform duration-150 ease-out hover:bg-[#FFF200]/10 active:scale-[0.96] [&::-webkit-details-marker]:hidden">
                Menu
              </summary>
              <nav className="absolute right-0 top-[calc(100%+8px)] z-30 w-56 animate-fade-up rounded-2xl bg-[#0B2E12] p-1.5 text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_8px_20px_0px_oklch(0_0_0/0.16)]">
                {siteNav.map(([l, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-[10px] px-3 py-2 text-[13px] font-bold transition-transform duration-150 ease-out hover:translate-x-0.5 hover:bg-[#FFF200]/10"
                  >
                    {l}
                  </a>
                ))}
              </nav>
            </details>
            <a
              href="/booking"
              className="rounded-full bg-[#FFF200] px-4 py-2 text-[13px] font-bold text-[#0B2E12] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12)] transition-transform duration-150 ease-out hover:-rotate-2 hover:scale-[1.04] active:scale-[0.96]"
            >
              Book seat
            </a>
          </div>
        </div>
        <nav
          aria-label="Site"
          className="hidden items-center justify-center gap-5 overflow-x-auto pb-3 text-[13px] font-semibold lg:flex"
        >
          {siteNav.map(([l, href]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 opacity-80 transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:opacity-100 hover:underline hover:underline-offset-4"
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
