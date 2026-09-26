const roads = [
  ["From Guwahati", "220–240 km", "4–5 hrs by car"],
  ["From Jorhat", "90–100 km", "1.5–2.5 hrs"],
  ["From Tezpur", "≈ 90 km", "≈ 2 hrs"],
];

const airports = [
  ["Guwahati airport", "220–240 km", "4–5 hrs by car"],
  ["Jorhat airport", "90–100 km", "1.5–2.5 hrs"],
  ["Tezpur airport", "≈ 90 km", "≈ 2 hrs"],
];

export function Reach() {
  return (
    <section id="reach" className="scroll-mt-20 pb-14">
      <div className="rounded-[24px] bg-[#0B2E12] p-2 text-[#FFF200] shadow-[0px_0px_0px_1px_oklch(0_0_0/0.08),0px_1px_2px_-1px_oklch(0_0_0/0.12),0px_4px_12px_0px_oklch(0_0_0/0.08)]">
        <div className="rounded-[16px] p-6 sm:p-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="max-w-[18ch] text-[26px] font-black leading-tight tracking-tight sm:text-[34px]">
              How to reach Kaziranga.
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
              Base — Kohora, Central Range
            </p>
          </div>
          <p className="mt-2 max-w-[60ch] text-[14px] font-medium opacity-80">
            The park is reachable by road, train and air. Head for Kohora — the
            main tourist area — then continue by private taxi, rental car or bus.
          </p>

          <div className="mt-6 grid gap-2 lg:grid-cols-3">
            <div className="rounded-[12px] border border-[#FFF200]/15 p-5 transition-transform duration-150 ease-out hover:-translate-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
                By road
              </p>
              <ul className="mt-3 divide-y divide-[#FFF200]/15">
                {roads.map(([from, dist, time]) => (
                  <li key={from} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-[14px] font-bold">{from}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">
                      {dist} • {time}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] border border-[#FFF200]/15 p-5 transition-transform duration-150 ease-out hover:-translate-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
                By air — nearest airports
              </p>
              <ul className="mt-3 divide-y divide-[#FFF200]/15">
                {airports.map(([from, dist, time]) => (
                  <li key={from} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-[14px] font-bold">{from}</p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-70">
                      {dist} • {time}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[12px] bg-[#FFF200] p-5 text-[#0B2E12] transition-transform duration-150 ease-out hover:-translate-y-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-70">
                By train
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-relaxed">
                Kaziranga has no station of its own. Arrive at Furkating
                Junction (75–80 km) or Guwahati Railway Station — a major
                railhead — then take a taxi or road transport to Kohora.
              </p>
              <p className="mt-3 rounded-full bg-[#0B2E12]/10 px-3 py-1.5 text-center font-mono text-[9px] font-bold uppercase tracking-[0.12em]">
                Kohora is the Central Range gate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
