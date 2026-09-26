import { PageHero } from "../components/PageHero";
import { Ranges } from "../components/Ranges";

export default function ZonesPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Zones"
        title="Safari zones."
        intro="Central (Kohora), Western (Bagori), Eastern (Agoratoli) and Burapahar — each range tells a different story. Allotment is subject to availability on your date."
      />
      <Ranges />
    </main>
  );
}
