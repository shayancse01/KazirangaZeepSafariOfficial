import { PageHero } from "../components/PageHero";
import { Packages } from "../components/Packages";

export default function PackagesPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Packages"
        title="Kaziranga safari packages."
        intro="From a single sunrise slot to a slow two-day story with culture and tea — pick a template and we tailor it to your dates."
      />
      <div className="py-8">
        <Packages />
      </div>
    </main>
  );
}
