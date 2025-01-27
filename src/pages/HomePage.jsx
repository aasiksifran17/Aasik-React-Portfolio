import "react-tooltip/dist/react-tooltip.css";
import HeroDetail from "../components/HeroSection/HeroDetail";
import AboutDetail from "../components/AboutDetailsSection/AboutDetail";
import TechStacks from "../components/TechStacks";
import ServicesInfo from "../components/ServicesDetail";
import TheFooterSection from "../components/Footer";
import TheFootNote from "../components/TheFootNote";
import TheProjectSection from "../components/TheProjectSection";
import TheHeaderProgressBar from "../components/HeaderProgressBar/TheHeaderProgressBar";

const HomePage = () => {
  return (
    <div>
      {/* Form Frame-Motion Library */}
      <TheHeaderProgressBar />

      <HeroDetail />

      <AboutDetail />

      <TechStacks />

      <ServicesInfo />

      <TheProjectSection />

      <TheFooterSection />

      <TheFootNote />
    </div>
  );
};

export default HomePage;
