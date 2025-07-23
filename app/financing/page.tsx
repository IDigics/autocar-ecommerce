import SimplePage from "../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financement - AutoCar'z",
  description: "Solutions de financement flexibles pour votre véhicule",
};

export default function FinancingPage() {
  return (
    <SimplePage
      title="Financement"
      description="Solutions de financement flexibles pour votre véhicule"
      icon="💳"
    />
  );
}
