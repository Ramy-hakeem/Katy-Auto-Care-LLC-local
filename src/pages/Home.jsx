import AboutUsSection from "../components/sections/AboutUsSection"
import Herosection from "../components/sections/HeroSection"
import MobileAppSection from "../components/sections/MobileAppSection"
import OffersSection from "../components/sections/OffersSection"
import RatingSection from "../components/sections/RatingSection"
import ScheduleAppointmentSection from "../components/sections/ScheduleAppointmentSection"
import ServicesSection from "../components/sections/ServicesSection"
import ValueSection from "../components/sections/ValueSection"


function Home() {
    return (
        <>
            <Herosection />
            <ValueSection />
            <OffersSection />
            <ScheduleAppointmentSection />
            <ServicesSection />
            <MobileAppSection />
            <RatingSection />
            <AboutUsSection />
        </>
    )
}

export default Home