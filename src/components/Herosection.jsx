import Image from "./ui/Image"
import hero from "../assets/hero.png"
import Button from "./ui/Button"

function Herosection() {
    return (
        <section className="hero-wrapper">
            <Image src={hero} alt="hero image" className="hero" />
            <aside >
                <div>
                    <h1>Affordable Car Services with Quality Assurance</h1>
                    <p>
                        We offer high-quality car repairs with transparent pricing and excellent service, making us the ideal choice for budget-conscious customers.
                    </p>
                    <Button title="Schedule an Appointment" className="hero-btn" />
                </div>
            </aside>
        </section>
    )
}

export default Herosection