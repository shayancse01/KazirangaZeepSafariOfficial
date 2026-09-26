import { faqs } from "./data";
import { PlusIcon } from "./icons";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 pb-14">
      <h2 className="text-[28px] font-black tracking-tight sm:text-[36px]">
        Quick answers.
      </h2>
      <div className="mt-5 divide-y divide-[#FFF200]/25 border-y border-[#FFF200]/25">
        {faqs.map((f) => (
          <details key={f.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[15px] font-bold transition-transform duration-150 ease-out hover:translate-x-1 [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#FFF200]/35 transition-transform duration-200 ease-out group-open:rotate-45">
                <PlusIcon className="size-4" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-5 text-[14px] font-medium leading-relaxed opacity-80">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
