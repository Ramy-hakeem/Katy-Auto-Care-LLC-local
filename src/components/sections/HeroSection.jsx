
import { Button } from "@material-tailwind/react";
import heroImage from "../../assets/hero.png"
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section
            style={{ backgroundImage: `url(${heroImage})` }}
            className="relative w-full bg-cover bg-center 
         h-screen sl-h-[838px] t:h-[736px] 
        "
        >
            <aside className="bg-black bg-opacity-50 h-full  
            w-[819px] sl:w-[681px]  t:w-[562px] 
            ">

                <div className="box-content  pt-80 t:pt-48
                flex justify-around items-start flex-col 
                pr-[52px] sl:pr-[43.25px]  t:pr-[38px] 
                pl-[115px] sl:pl-[95.66px]  t:pl-[50px]  
                ">

                    <h1 className="  text-white uppercase font-bold mb-12
                    w-[640px] sl:w-[505px] t:w-[438px]
                    text-[38px] sl:text-3xl t:text-[26px] 
                    leading-[57px] sl:leading-[45px]  t:leading-[39px]
                    ">
                        Affordable Car Services with Quality Assurance
                    </h1>


                    <p className="  text-white font-bold mb-12
                    w-[704px] sl:w-[585.58px] t:w-[514.01px]
                    text-[34px] sl:text-[24px]  t:text-[20px]
                    leading-[51px] sl:leading-[36px] t:leading-[30px]
                    ">
                        We offer high-quality car repairs with transparent pricing and excellent service, making us the ideal choice for budget-conscious customers.
                    </p>


                    <Link to={"schedule-an-appointment"}>
                        <Button className=" text-white  bg-pumpkin rounded-lg p-3  font-medium  normal-case flex justify-center items-center
                        text-[24px] sl:text-2xl t:text-xl
                        leading-[36px] sl:leading-[30px]
                        w-[373px] t:w-[300px]
                         h-[71px] t:h-[50px]
                        ">
                            Schedule an Appointment
                        </Button>
                    </Link>

                </div>
            </aside>
        </section>
    )
}

export default HeroSection