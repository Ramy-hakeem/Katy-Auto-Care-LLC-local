import Image from "../ui/Image"
import hero from "../../assets/hero.png"
import Button from "../ui/Button"
import "./hero-section.css"

function Herosection() {
    return (
        <section className="hero-wrapper">
            {/* <Image src={hero} alt="hero image" className="hero-img" /> */}
            <aside >
                <div className="data-wrapper">
                    <h1 className="title">Affordable Car Services with Quality Assurance</h1>
                    <p className="hero-description">
                        We offer high-quality car repairs with transparent pricing and excellent service, making us the ideal choice for budget-conscious customers.
                    </p>
                    <Button title="Schedule an Appointment" className="hero-btn" />
                </div>
            </aside>
        </section>
    )
}

export default Herosection