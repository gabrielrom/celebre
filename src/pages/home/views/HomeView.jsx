import { useLoaderData } from "react-router-dom";
import BannerCarousel from "../../../components/BannerCarousel/BannerCarousel";
import AboutSection from "../components/AboutSection/AboutSection";
import RealStateSection from "../components/RealStateSection/RealStateSection";

export function HomeView() {
  const { banners, mostImportantRealStates } = useLoaderData();

  return (
    <>
      <BannerCarousel banners={banners} />
      <AboutSection />
      <RealStateSection realStates={mostImportantRealStates} />
    </>
  );
}
