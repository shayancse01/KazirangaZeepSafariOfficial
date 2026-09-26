export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="animate-fade-up pt-10 opacity-0 sm:pt-14">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
        <a
          href="/"
          className="underline underline-offset-4 transition-transform duration-150 ease-out hover:opacity-100"
        >
          Home
        </a>{" "}
        → {kicker}
      </p>
      <h1 className="mt-2 max-w-[18ch] text-balance text-[34px] font-black leading-[1.0] tracking-tight sm:text-[48px]">
        {title}
      </h1>
      <p className="mt-3 max-w-[60ch] text-[15px] font-medium leading-relaxed opacity-80">
        {intro}
      </p>
    </div>
  );
}
