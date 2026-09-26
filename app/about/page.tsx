import { PageHero } from "../components/PageHero";
import { Story } from "../components/Story";
import { Gallery } from "../components/Gallery";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="About"
        title="About Kaziranga Jeep Safari."
        intro="Your gateway to an unforgettable wildlife adventure in the heart of Assam — open jeeps, local drivers and guides, and the breathtaking grasslands of a UNESCO World Heritage Site."
      />
      <Story />
      <Gallery />
      <div className="pb-16">
        <a
          href="/booking"
          className="inline-flex items-center gap-2 rounded-full bg-[#0B2E12] px-6 py-3 text-[14px] font-bold text-[#FFF200] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
        >
          Book your safari →
        </a>
      </div>
    </main>
  );
}
