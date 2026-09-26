import { PageHero } from "../components/PageHero";
import { Reach } from "../components/Reach";

export default function ReachPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Reach"
        title="How to reach Kaziranga."
        intro="By road, train and air — head for Kohora in the Central Range, then continue by taxi, rental car or bus."
      />
      <div className="pt-8">
        <Reach />
      </div>
    </main>
  );
}
