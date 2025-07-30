import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages - AutoCar'z",
  description: "Découvrez les témoignages de nos clients satisfaits",
};

export default function TestimonialsPage() {
  return (
    <SimplePage
      title="Témoignages"
      description="Découvrez les témoignages de nos clients satisfaits et leurs expériences avec AutoCar'z"
      icon="⭐"
    />
  );
}
