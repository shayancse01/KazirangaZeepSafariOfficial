export function Footer() {
  return (
    <footer className="border-t border-[#FFF200]/25">
      <div className="mx-auto w-full max-w-[1000px] px-5 py-8 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] font-bold">
            Kaziranga Jeep Safari{" "}
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
              • Kohora, Assam
            </span>
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] opacity-70">
            Rhino first • Plastic free • 2026
          </p>
          <a
            href="#top"
            className="rounded-full border border-[#FFF200]/40 px-4 py-1.5 text-[13px] font-bold transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:bg-[#FFF200]/10 active:scale-[0.96]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
