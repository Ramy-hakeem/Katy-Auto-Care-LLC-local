
import { Button } from "@material-tailwind/react";
import heroImage from "../../assets/hero.png"
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section
            style={{ backgroundImage: `url(${heroImage})` }}
            className="relative w-full bg-cover bg-center 
         h-[1020px] sl-h-[838px] t:h-[736px]
        "
        >
            <aside className="bg-black bg-opacity-50 h-full  
            w-[819px] sl:w-[681px]  t:w-[562px] 
            ">

                <div className="box-content  
                pt-[250px] sl:pt-[207.95px]  t:pt-[ 182px] 
                pr-[52px] sl:pr-[43.25px]  t:pr-[38px] 
                pb-[96px] sl:pb-[79.85px]  t:pb-[70px] 
                pl-[115px] sl:pl-[95.66px]  t:pl-[50px] 
                
                 
                ">

                    <h1 className="  text-white uppercase font-bold mb-12
                    w-[640px] sl:w-[505px] t:w-[438px]
                    text-[38px] sl:text-[30] t:text-[26px] 
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
                        <Button className=" text-white  bg-pumpkin rounded-lg p-3  font-medium  normal-case
                        text-[24px] sl:text-[20px] 
                        leading-[36px] sl:leading-[30px]
                        w-[373px]
                         h-[71px]
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