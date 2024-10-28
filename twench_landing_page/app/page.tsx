import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import MotivationSection from "@/components/MotivationSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <LandingSection />
      <Banner />
      <MotivationSection />
    </div>
  );
}
