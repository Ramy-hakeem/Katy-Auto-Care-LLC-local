import { ValueCard } from "../compositeUi/ValueCard";
import SectionTitle from "../ui/SectionTitle";
import Description from "../ui/Description";
import car from "../../assets/car-icon.png";
import shild from "../../assets/shild.png";
import group from "../../assets/group.png";


function ValueSection() {
    return (
        <section
            className="flex flex-col items-center justify-center gap-10 my-12 w-full        
        ">
            <div className="flex flex-col justify-center items-center gap-5" >
                <SectionTitle maintext="Your One-Stop " spantext="&nbsp;Auto Care Solution" />
                <Description text="Katy Auto Care LLC provides exceptional service and quality care to keep your vehicle running smoothly and safely."

                    className={`text-center 
                        text-black mx-auto
                        mb-3
                        w-11/12
                        text-sm sm:text-lg lg:text-xl xl:text-xl 
                    `}
                />
            </div>
            <div className="flex  justify-around items-center w-11/12 flex-col lg:flex-row gap-10 lg:gap-0  ">
                <ValueCard
                    imgSrc={car}
                    className="w-10 md:w-12 lg:w-8 xl:w-11"
                    color="pumpkin"
                    title="More Than Just a Repair Shop"
                    desc="We support local causes and foster community unity through active engagement in initiatives."
                />
                <ValueCard
                    color="navyBlue"
                    className={"w-10 md:w-12 lg:w-8 xl:w-11"}
                    imgSrc={shild}
                    title="Protection Plan Options"
                    desc="This ensures that you have peace of mind knowing that your investment in your vehicle's repair is protected."
                />
                <ValueCard
                    imgSrc={group}
                    className="w-10 md:w-12 lg:w-8 xl:w-11 "
                    color="pumpkin"
                    title="Happy Customers Guaranteed"
                    desc="Positive feedback and smiles show our dedication to exceptional car rentals."
                />
            </div>
        </section>
    );
}

export default ValueSection;
