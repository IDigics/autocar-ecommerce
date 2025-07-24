import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financement - AutoCar'z",
  description: "Solutions de financement flexibles pour votre véhicule",
};

export default function FinancingPage() {
  return (
    <SimplePage
      title="Solutions de Financement"
      description="Des options de financement flexibles adaptées à vos besoins pour acquérir le véhicule de vos rêves"
      icon="💳"
    />
  );
}
