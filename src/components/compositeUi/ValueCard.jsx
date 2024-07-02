import propTypes from "prop-types";
import Image from "../ui/Image";
import Description from "../ui/Description";

export function ValueCard({ imgSrc, title, desc, color, className }) {
    const colorClasses = {
        pumpkin: 'bg-pumpkin',
        navyBlue: 'bg-navyBlue',
    };

    return (
        <div className="">
            <section className="relative shadow-xl  
                w-[285px] sm:w-[300px] md:w-[300px] lg:w-[280px] xl:w-[350px]
                h-[350px] sm:h-[400px] md:h-[400px] lg:h-[350px]  xl:h-[400px]
                mt-8
            ">
                <div className="rounded-2xl w-full h-full flex flex-col justify-start items-center 
                    pt-12 md:pt-16
                    gap-10
                    ">
                    <h1 className="font-medium text-center text-midnightBlue uppercase
                        w-11/12
                        text-lg sm:text-xl xl:text-xl
                    ">
                        {title}
                    </h1>
                    <Description
                        text={desc}
                        className="text-center font-normal
                        w-11/12
                        text-sm sm:text-xl
                    "
                    />
                </div>

                <div className={`rounded-full flex justify-center items-center absolute top-0 left-1/2 transform 
                    -translate-x-1/2 -translate-y-1/2 ${colorClasses[color]} 
                    size-16 md:size-20 lg:size-16 xl:size-20
                   
                    `}
                >
                    <Image src={imgSrc} className={`h-auto    ${className}`} />
                </div>
            </section>
        </div>
    );
}

ValueCard.propTypes = {
    imgSrc: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    color: propTypes.oneOf(['pumpkin', 'navyBlue']).isRequired,
    className: propTypes.string,
};


