import { PageHero } from "../components/PageHero";
import { BlogList } from "../components/BlogList";

export default function BlogPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Blog"
        title="Field notes."
        intro="Range guides, photo stories and slow itineraries from the grassland — new notes through the season."
      />
      <div className="py-8">
        <BlogList />
      </div>
    </main>
  );
}
