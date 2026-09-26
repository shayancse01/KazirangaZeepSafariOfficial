import { PageHero } from "../components/PageHero";
import { ContactCard } from "../components/ContactCard";

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1000px] flex-1 px-5 sm:px-8">
      <PageHero
        kicker="Contact"
        title="Contact / WhatsApp booking."
        intro="Fastest way in: message us your date, range and guest count. Confirmation within ~2 hours, 7 AM – 9 PM."
      />
      <div className="py-8">
        <ContactCard />
      </div>
    </main>
  );
}
