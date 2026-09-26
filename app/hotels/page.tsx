import { PageHero } from "../components/PageHero";
import { Hotels } from "../components/Hotels";

export default function HotelsPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Stay"
        title="Hotels & resorts information."
        intro="Kohora lodges for early gates, green resorts for families, village homestays for culture — an honest guide, not a listings dump."
      />
      <div className="py-8">
        <Hotels />
      </div>
    </main>
  );
}
