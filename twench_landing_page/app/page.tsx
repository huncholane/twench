import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import MotivationSection from "@/components/MotivationSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div>
      <Header />
      <LandingSection />
      <Banner />
      <MotivationSection />
      <AboutSection />
      {/* <VideoSection /> */}
    </div>
  );
}
