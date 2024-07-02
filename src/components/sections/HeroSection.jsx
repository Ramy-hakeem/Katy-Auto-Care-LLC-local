
import { Button } from "@material-tailwind/react";
import heroImage from "../../assets/hero.png"
import { Link } from "react-router-dom";

function HeroSection() {
    return (

        <section
            style={{ backgroundImage: `url(${heroImage})` }}
            className="relative w-full bg-cover bg-center 
            h-screen
        "
        >
            <aside className="bg-black bg-opacity-50 h-full pl-8
                w-full lg:w-1/2
                flex justify-center items-start flex-col  gap-12
            ">


                <h1 className="  text-white uppercase font-bold 
                 text-sm sm:text-xl md:text-3xl lg:text-2xl
                 w-11/12 sm:w-8/12  md:w-9/12   lg:w-11/12            
                ">
                    Affordable Car Services with Quality Assurance
                </h1>


                <p className="  text-white font-bold  
                    text-xs sm:text-lg md:text-2xl lg:text-xl
                    w-10/12
                    ">
                    We offer high-quality car repairs with transparent pricing and excellent service, making us the ideal choice for budget-conscious customers.
                </p>


                <Link to={"schedule-an-appointment"}>
                    <Button className=" text-white  bg-pumpkin rounded-lg p-3  font-medium  normal-case flex justify-center items-center 
                        text-xs sm:text-xl md:text-2xl lg:text-xl
                        ">
                        Schedule an Appointment
                    </Button>
                </Link>


            </aside>
        </section>
    )
}

export default HeroSection