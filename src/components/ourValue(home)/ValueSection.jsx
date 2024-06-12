import "./value-section.css"
import { ValueCard } from "../cards/ValueCard"
import SectionTitle from "../ui/SectionTitle"
import Description from "../ui/Description"
import car from "../../assets/car-icon.png"
import shild from "../../assets/shild.png"
import group from "../../assets/group.png"
function ValueSection() {
    return (
        <section className="ourvalue-wrapper">

            <div className="value-data">
                <SectionTitle maintext={" Your One-Stop"} spantext={"Auto Care Solution"} />
                <Description text="Katy Auto Care LLC provides exceptional service and quality care to keep your vehicle running smoothly and safely."
                    fontsize={"26"}
                    className={"value-description"}
                />
            </div>
            <div className="value-cards-wrapper">
                <ValueCard
                    imgSrc={car}
                    color={"blue"}
                    title={"More Than Just a Repair Shop"}
                    desc={"We support local causes and foster community unity through active engagement in initiatives."}
                />
                <ValueCard
                    imgSrc={shild}
                    title={"Protection Plan Options"}
                    desc={"This ensures that you have peace of mind knowing that your investment in your vehicle's repair is protected."}
                />
                <ValueCard
                    imgSrc={group}
                    color={"blue"}
                    title={"Happy Customers Guaranteed"}
                    desc={"Positive feedback and smiles show our dedication to exceptional car rentals."}
                />

            </div>
        </section>
    )
}

export default ValueSection