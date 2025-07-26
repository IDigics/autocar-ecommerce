import SimplePage from "../../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Véhicules Neufs - AutoCar'z",
  description:
    "Découvrez notre gamme complète de véhicules neufs haut de gamme",
};

export default function NewVehiclesPage() {
  return (
    <SimplePage
      title="Véhicules Neufs"
      description="Découvrez notre gamme complète de véhicules neufs haut de gamme des plus grandes marques"
      icon="🚗"
    />
  );
}
