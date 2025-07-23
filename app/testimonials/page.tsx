import SimplePage from "../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages - AutoCar'z",
  description: "Découvrez les avis et témoignages de nos clients satisfaits",
};

export default function TestimonialsPage() {
  return (
    <SimplePage 
      title="Témoignages Clients" 
      description="Découvrez les avis et témoignages de nos clients satisfaits"
      icon="⭐"
    />
  );
}
