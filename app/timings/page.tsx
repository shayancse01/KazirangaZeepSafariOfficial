import { PageHero } from "../components/PageHero";
import { Timings } from "../components/Timings";

export default function TimingsPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Timings & Rates"
        title="Safari timings & rates."
        intro="Two shifts daily — morning 7:30–10:00 AM, afternoon 1:30–3:00 PM. Timings vary by season and forest department instructions; confirm the current schedule before booking."
      />
      <div className="pt-8">
        <Timings />
      </div>
    </main>
  );
}
