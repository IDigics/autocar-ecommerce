import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos - AutoCar'z",
  description: "Découvrez l'histoire et les valeurs d'AutoCar'z",
};

export default function AboutPage() {
  return (
    <SimplePage
      title="À Propos d'AutoCar'z"
      description="Découvrez l'histoire et les valeurs d'AutoCar'z"
      icon="🏢"
    />
  );
}
