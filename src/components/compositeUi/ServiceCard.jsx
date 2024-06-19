import Image from "../ui/Image"
import Description from "../ui/Description"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import propTypes from "prop-types"
function ServiceCard({ img, title, desc, list, index, isThereDesc }) {
    return (
        <div
            className={` bg-midnightBlack  flex justify-around rounded-2xl items-center  ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}
            w-(1516px] sl:w-[1264px] t:w-[897px]
            h-[547px] sl:h-[458px] t:h-[325px]
            my-[10px] sl:my-[15px] t:my-[15px]
            px-[50px] sl:px-[41px] t:px-[30px]
            py-[35px] sl:py-[30px] t:py-[20px]
            gap-[30px] sl:gap-[60px] t:gap-[40px]
            `}
        >
            <div className=" flex flex-col justify-between
             w-[690px] sl:w-[575px] t:w-[410px]
             h-[453px] sl:h-[377px] t:h-[269px]
            ">
                <h1 className="font-medium  text-white
                text-[32px] sl:text-[26px] t:text-lg
                leading-[39px] sl:leading-[32px] t:leading-[24px]
                ">
                    {title}
                </h1>
                <Description
                    text={desc}
                    className={`
                        text-white
                        text-xl sl:text-lg t:text-xs
                        leading-[29px] sl:leading-[24px] t:leading-[18px]
                        `}
                />
                <ul className="list-image">

                    {list.map(serv => (
                        <li key={serv} className="text-white items-center py-2
                         text-[24px] sl:text-[20px] t:text-sm
                        leading-[29px] sl:leading-[24px] t:leading-[18px]
                         ">
                            {serv}
                        </li>
                    ))}
                </ul>
                {isThereDesc ? (
                    <Description
                        text={isThereDesc}
                        className={"text-lg t:text-xs text-white"}
                    />
                ) : (
                    <Link to={"services/id"}>
                        <Button
                            className="text-sm font-medium  text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg py-2 my-3 
                            w-[347px] sl:w-[289px] t:w-[205px]
                            h-[74px] sl:h-[62px] t:h-[44px]
                            text-[24px] sl:text-[20px] t:text-[14px]
                            leading-[15px] sl:leading-[13px] t:leading-[8.9px]
                            " >
                            explore more
                        </Button>
                    </Link>
                )
                }


            </div>
            <Image src={img} className={`
                w-[656px] sl:w-[545px] t:w-[388px]
                h-[477px] sl:h-[400px] t:h-[285px]
                `} />

        </div>
    )
}

ServiceCard.propTypes = {
    img: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    list: propTypes.string.isRequired,
    index: propTypes.number.isRequired,
    isThereDesc: propTypes.bool
}
export default ServiceCard