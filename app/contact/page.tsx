import SimplePage from "../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - AutoCar'z",
  description: "Contactez-nous pour toute question ou prise de rendez-vous",
};

export default function ContactPage() {
  return (
    <SimplePage
      title="Contactez-nous"
      description="Contactez-nous pour toute question ou prise de rendez-vous"
      icon="📞"
    />
  );
}
