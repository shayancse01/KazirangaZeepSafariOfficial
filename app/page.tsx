import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Story } from "./components/Story";
import { Ranges } from "./components/Ranges";
import { Experiences } from "./components/Experiences";
import { Gallery } from "./components/Gallery";
import { Reach } from "./components/Reach";
import { Timings } from "./components/Timings";
import { Steps } from "./components/Steps";
import { Faq } from "./components/Faq";
import { Booking } from "./components/Booking";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <Hero />
      <Marquee />
      <Story />
      <Ranges />
      <Experiences />
      <Gallery />
      <Reach />
      <Timings />
      <Steps />
      <Faq />
      <Booking />
    </main>
  );
}
