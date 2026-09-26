import { PageHero } from "../components/PageHero";
import { Booking } from "../components/Booking";
import { Steps } from "../components/Steps";

export default function BookingPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Booking"
        title="Jeep safari booking."
        intro="Pick a range and slot, send a request — we confirm on WhatsApp with jeep number and reporting point. Pay after confirmation."
      />
      <div className="pt-8">
        <Booking />
        <Steps />
      </div>
    </main>
  );
}
