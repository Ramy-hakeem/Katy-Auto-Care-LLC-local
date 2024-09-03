import AboutUsSection from "../../components/sections/AboutUsSection";
import Herosection from "../../components/sections/HeroSection";
import MobileAppSection from "../../components/sections/MobileAppSection";
import OffersSection from "../../components/sections/OffersSection";
import RatingSection from "../../components/sections/RatingSection";
import ScheduleAppointmentSection from "../../components/sections/ScheduleAppointmentSection";
import Services from "../../components/sections/Services";
import ValueSection from "../../components/sections/ValueSection";

function Home() {
  return (
    <>
      <Herosection />
      <ValueSection />
      <OffersSection />
      <ScheduleAppointmentSection />
      <Services />
      <MobileAppSection />
      <RatingSection />
      <AboutUsSection />
    </>
  );
}

export default Home;
