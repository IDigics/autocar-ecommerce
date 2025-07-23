import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reprise de Véhicule - AutoCar'z",
  description: "Évaluez et échangez votre véhicule actuel",
};

export default function TradeInPage() {
  return (
    <SimplePage
      title="Reprise de Véhicule"
      description="Évaluez et échangez votre véhicule actuel"
      icon="🔄"
    />
  );
}
