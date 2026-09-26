import { PageHero } from "../components/PageHero";
import { Steps } from "../components/Steps";
import { Faq } from "../components/Faq";

export default function HowToBookPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="How to Book"
        title="How to book."
        intro="Three steps: choose a range, pick a slot, show up. We ping your jeep number on WhatsApp — no advance needed."
      />
      <div className="pt-8">
        <Steps />
        <Faq />
        <div className="pb-16">
          <a
            href="/booking"
            className="inline-flex items-center gap-2 rounded-full bg-[#FFF200] px-6 py-3 text-[14px] font-black text-[#0B2E12] transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:rotate-1 active:scale-[0.96]"
          >
            Start a booking request →
          </a>
        </div>
      </div>
    </main>
  );
}
