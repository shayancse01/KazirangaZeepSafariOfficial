import { PageHero } from "../components/PageHero";
import { Experiences } from "../components/Experiences";

export default function ExperiencesPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Things to Do"
        title="Things to do in Kaziranga."
        intro="Jeep and elephant safaris, birdwatching, orchids, tea, waterfalls, villages and river dolphins — eight ways into the wild."
      />
      <div className="pt-8">
        <Experiences />
      </div>
    </main>
  );
}
