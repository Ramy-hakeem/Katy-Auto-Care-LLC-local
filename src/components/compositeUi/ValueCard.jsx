import Image from "../ui/Image";
import Description from "../ui/Description";
import propTypes from "prop-types";

export function ValueCard({ imgSrc, title, desc, color, className }) {
    const colorClasses = {
        pumpkin: 'bg-pumpkin',
        navyBlue: 'bg-navyBlue',
    };

    return (
        <section className="relative shadow-xl w-[350px] h-[400px]">
            <div className={`w-16 h-16 rounded-full flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colorClasses[color]}`}>
                <Image src={imgSrc} className={`w-8 ${className}`} />
            </div>
            <div className="w-80 h-90 gap-4 rounded-2xl  flex flex-col justify-center items-center p-4">
                <h1 className="text-2xl font-medium leading-10 text-center text-midnightBlue uppercase mt-16">
                    {title}
                </h1>
                <Description text={desc} className="text-lg font-normal leading-[2.5]  text-center" />
            </div>
        </section>
    );
}

ValueCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    color: propTypes.string.isRequired,
    className: propTypes.string,
};
