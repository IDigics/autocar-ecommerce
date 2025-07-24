import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Véhicules - AutoCar'z",
  description: "Découvrez notre collection de véhicules de luxe exceptionnels",
};

export default function VehiclesPage() {
  return (
    <SimplePage
      title="Véhicules"
      description="Découvrez notre collection de véhicules de luxe exceptionnels"
      icon="🚗"
    />
  );
}
