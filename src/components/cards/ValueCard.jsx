import "./card.css"
import Image from "../ui/Image"
import Description from "../ui/Description"
import propTypes from "prop-types"
export function ValueCard({ imgSrc, title, desc, color, className }) {
    return (
        <section className="wrapper">
            <div className={`${color} icon-wrapper`}>
                <Image src={imgSrc} className={`card-icon ${className}`} />
            </div>
            <div className="card-wrapper">
                <h1 className="card-title">
                    {title}
                </h1>
                <Description
                    text={desc}
                    className={"card-description"}
                />
            </div>
        </section>
    )
}

ValueCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    className: propTypes.string,
    color: propTypes.string
}
