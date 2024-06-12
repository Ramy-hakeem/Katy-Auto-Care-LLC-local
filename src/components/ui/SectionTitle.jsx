import Image from "./Image"
import arrow from "../../assets/left-arrow.png"
import "./ui.css"
function SectionTitle({ maintext, spantext }) {
    return (
        <div className="section-title-wrapper">
            <Image src={arrow} alt="pointer" className="title-icon" />
            <h1 className="section-title">
                {maintext} <span className="section-title-span">{spantext}</span>
            </h1>
        </div>
    )
}

export default SectionTitle