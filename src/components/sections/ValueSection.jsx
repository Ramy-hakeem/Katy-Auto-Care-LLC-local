import { ValueCard } from "../compositeUi/ValueCard";
import SectionTitle from "../ui/SectionTitle";
import Description from "../ui/Description";

import car from "../../assets/car-icon.png";
import shild from "../../assets/shild.png";
import group from "../../assets/group.png";

function ValueSection() {
    return (
        <section className="flex flex-col items-center justify-center my-20 h-screen gap-28 mx-auto w-11/12 ">
            <div className="flex flex-col items-center justify-center w-[837px] ">
                <SectionTitle maintext="Your One-Stop" spantext="Auto Care Solution" />
                <Description
                    text="Katy Auto Care LLC provides exceptional service and quality care to keep your vehicle running smoothly and safely."
                    fontsize="26"
                    className={`text-center w-3/5 size-[26px] leading-loose`}
                />
            </div>
            <div className="flex justify-between items-center w-full">
                <ValueCard
                    imgSrc={car}
                    className="w-9"
                    color="pumpkin"
                    title="More Than Just a Repair Shop"
                    desc="We support local causes and foster community unity through active engagement in initiatives."
                />
                <ValueCard
                    color="navyBlue"
                    imgSrc={shild}
                    title="Protection Plan Options"
                    desc="This ensures that you have peace of mind knowing that your investment in your vehicle's repair is protected."
                />
                <ValueCard
                    imgSrc={group}
                    className="w-9"
                    color="pumpkin"
                    title="Happy Customers Guaranteed"
                    desc="Positive feedback and smiles show our dedication to exceptional car rentals."
                />
            </div>
        </section>
    );
}

export default ValueSection;
