import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Véhicules d'Occasion - AutoCar'z",
  description: "Notre sélection de véhicules d'occasion certifiés et garantis",
};

export default function UsedVehiclesPage() {
  return (
    <SimplePage
      title="Véhicules d'Occasion"
      description="Notre sélection de véhicules d'occasion certifiés et garantis"
      icon="🛞"
    />
  );
}
