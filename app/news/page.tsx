import SimplePage from "../components/SimplePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités - AutoCar'z",
  description: "Suivez nos dernières actualités et nouveautés",
};

export default function NewsPage() {
  return (
    <SimplePage
      title="Actualités"
      description="Suivez nos dernières actualités et nouveautés"
      icon="📰"
    />
  );
}
