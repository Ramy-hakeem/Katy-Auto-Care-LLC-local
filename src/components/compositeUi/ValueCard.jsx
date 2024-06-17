import Image from "../ui/Image";
import Description from "../ui/Description";
import propTypes from "prop-types";

export function ValueCard({ imgSrc, title, desc, color, className }) {
    const colorClasses = {
        pumpkin: 'bg-pumpkin',
        navyBlue: 'bg-navyBlue',
    };

    return (
        <section className="relative shadow-xl
         w-[450px] sl:w-[365px] t:w-[285px]
        h-[470px] sl:h-[381px] t:h-[280px]
         
         ">


            <div className="  rounded-2xl w-full h-full flex flex-col justify-center items-center gap-3 ">
                <h1 className=" font-medium  text-center text-midnightBlue uppercase
                 w-[343px]  sl:w-[278px] t:w-[217px]
                text-[30px] sl:text-[24px] t:text-[18px]
                leading-[45px] sl:leading-[36px] t:leading-[27px]
                ">
                    {title}
                </h1>
                <Description text={desc} className=" text-center font-normal
                 w-[341px] sl:w-[276px] t:w-[217px]
                text-[24px] sl:text-[20px] t:text-[16px]
                leading-[43px] sl:leading-[36px] t:leading-[29px]
                    " />
            </div>

            <div className={`rounded-full flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${colorClasses[color]}
            w-[100px]  sl:w-[80px] t:w-[60px]
            h-[100px] sl:h-[80px] t:h-[60px]
            `}>
                <Image src={imgSrc} className={`h-auto ${className}`} />
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
