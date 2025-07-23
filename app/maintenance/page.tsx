import SimplePage from "../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maintenance et Réparation - AutoCar'z",
  description:
    "Services d'entretien et de réparation par nos experts certifiés",
};

export default function MaintenancePage() {
  return (
    <SimplePage
      title="Maintenance et Réparation"
      description="Services d'entretien et de réparation par nos experts certifiés"
      icon="🔧"
    />
  );
}
