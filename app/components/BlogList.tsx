import { posts } from "./data";
import { ArrowIcon, PlusIcon } from "./icons";

export function BlogList() {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {posts.map((p, i) => (
        <article
          key={p.title}
          style={{ animationDelay: `${i * 100}ms` }}
          className="group flex animate-fade-up cursor-pointer flex-col rounded-[20px] border border-[#FFF200]/30 bg-[#FFF200]/5 p-2 opacity-0 transition-transform duration-150 ease-out hover:-translate-y-1 hover:-rotate-1 active:scale-[0.98]"
        >
          <div className="grid aspect-[16/9] place-items-center rounded-[12px] border border-dashed border-[#FFF200]/40 bg-white/10">
            <span className="flex flex-col items-center gap-1 opacity-60">
              <PlusIcon className="size-5 transition-transform duration-200 ease-out group-hover:rotate-90" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                Cover • 16:9
              </span>
            </span>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
              {p.tag}
            </p>
            <h2 className="mt-1 text-[18px] font-black leading-snug tracking-tight transition-transform duration-150 ease-out group-hover:translate-x-0.5">
              {p.title}
            </h2>
            <p className="mt-1.5 flex-1 text-[13.5px] font-medium leading-relaxed opacity-80">
              {p.body}
            </p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold">
              Read story
              <ArrowIcon className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
