
import { Button } from "@material-tailwind/react";
import heroImage from "../../assets/hero.png"

function HeroSection() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center mb-20"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <aside className="bg-black bg-opacity-50 h-full w-[47%] absolute top-0 left-0">
                <div className="absolute w-[80%] h-[529px] right-2.5 top-1/2 transform -translate-y-1/2 mb-5">
                    <h1 className="text-white uppercase text-[28px] font-bold leading-[57px] mb-12">
                        Affordable Car Services with Quality Assurance
                    </h1>
                    <p className="text-white text-[28px] font-bold leading-[51px] mb-12">
                        We offer high-quality car repairs with transparent pricing and excellent service, making us the ideal choice for budget-conscious customers.
                    </p>
                    <Button className="text-white w-[373px] h-[71px] bg-pumpkin rounded-lg p-3 text-[24px] font-medium leading-[36px] normal-case">
                        Schedule an Appointment
                    </Button>

                </div>
            </aside>
        </section>
    )
}

export default HeroSection