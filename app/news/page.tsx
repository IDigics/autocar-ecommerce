import SimplePage from "../../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités - AutoCar'z",
  description: "Découvrez les dernières actualités du monde automobile de luxe",
};

export default function NewsPage() {
  return (
    <SimplePage
      title="Actualités"
      description="Découvrez les dernières actualités du monde automobile de luxe"
      icon="📰"
    />
  );
}
