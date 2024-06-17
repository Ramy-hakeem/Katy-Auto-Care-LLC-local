import { ValueCard } from "../compositeUi/ValueCard";
import SectionTitle from "../ui/SectionTitle";
import Description from "../ui/Description";

import car from "../../assets/car-icon.png";
import shild from "../../assets/shild.png";
import group from "../../assets/group.png";

function ValueSection() {
    return (
        <section className="flex flex-col items-center justify-center gap-28 mx-auto w-11/12 
        my-[150px] sl:my-[200px] t:my-[84px]
        h-[799px] sl:h-[631px] t:h-[478px]
        ">
            <div className="flex flex-col items-center justify-center w-[837px] gap-3 ">
                <SectionTitle maintext="Your One-Stop" spantext="Auto Care Solution" />
                <Description
                    text="Katy Auto Care LLC provides exceptional service and quality care to keep your vehicle running smoothly and safely."

                    className={`text-center 
                        mb-3
                        w-[837px]  sl:w-[679px] t:w-[532px]
                        size-[26px]  sl:size-[20px] t:size-[16px]
                        leading-[47px] sl:leading-[36px] t:leading-[29px]
                        `}
                />
            </div>
            <div className="flex justify-between items-center w-full">
                <ValueCard
                    imgSrc={car}
                    className="w-[50px] sl:w-[45px] t:w-[34px]"
                    color="pumpkin"
                    title="More Than Just a Repair Shop"
                    desc="We support local causes and foster community unity through active engagement in initiatives."
                />
                <ValueCard
                    color="navyBlue"
                    className={"w-[50px] sl:w-[45px] t:w-[34px]"}
                    imgSrc={shild}
                    title="Protection Plan Options"
                    desc="This ensures that you have peace of mind knowing that your investment in your vehicle's repair is protected."
                />
                <ValueCard
                    imgSrc={group}
                    className="w-[50px] sl:w-[45px] t:w-[34px] "
                    color="pumpkin"
                    title="Happy Customers Guaranteed"
                    desc="Positive feedback and smiles show our dedication to exceptional car rentals."
                />
            </div>
        </section>
    );
}

export default ValueSection;
