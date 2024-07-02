import Image from "../ui/Image"
import Description from "../ui/Description"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import propTypes from "prop-types"
function ServiceCard({ img, title, desc, list, index, isThereDesc }) {
    return (
        <div
            className={` bg-midnightBlack  flex justify-around rounded-2xl items-center  ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
            w-11/12  m-2   p-3 lg:p-6
            flex-col-reverse
            gap-2 lg:gap-8
            
            `}
        >
            <div className=" flex flex-col justify-between
            
            ">
                <h1 className="font-medium  text-white
                text-sm sm:text-lg md:text-2xl
                ">
                    {title}
                </h1>
                <Description
                    text={desc}
                    className={`
                        text-white
                       text-xs sm:text-sm md:text-lg
                       
                        `}
                />
                <ul className="list-image">

                    {list.map(serv => (
                        <li key={serv} className="text-white items-center py-2
                         text-xs sm:text-sm md:text-lg
                         ">
                            {serv}
                        </li>
                    ))}
                </ul>
                {isThereDesc ? (
                    <Description
                        text={isThereDesc}
                        className={"text-xs sm:text-sm md:text-lg   text-white"}
                    />
                ) : (
                    <Link to={"services/id"}>
                        <Button
                            className=" font-medium  text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg py-2 my-3 
                                text-xs sm:text-sm md:text-lg 
                            " >
                            explore more
                        </Button>
                    </Link>
                )
                }


            </div>

            <Image src={img} className={`
                object-cover rounded-md w-full  sm:h-96 md:h-96  lg:mdin-h-full lg:w-1/2
                `}
            />


        </div>
    )
}

ServiceCard.propTypes = {
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    list: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
    isThereDesc: propTypes.boolean
}
export default ServiceCard