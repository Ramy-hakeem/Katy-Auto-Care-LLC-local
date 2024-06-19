import { Button } from "@material-tailwind/react"
import offer1 from "../../assets/offer1.png"
import Image from "../ui/Image"
import StarIcon from "../../assets/StarIcon"
import { Link } from "react-router-dom"

function OfferCard() {
    return (
        <div
            className=" shadow-xl rounded-lg  relative
            w-[460px] sl:w-[358px] t:w-[358px]
            h-[618px] sl:h-[500px] t:h-[470px]
            "
        >
            <Image src={offer1} alt="offer 50% Off on your booking" className="w-full h-[50%]" />
            <div className="w-full h-[50%] p-3 rounded-b-lg bg-midnightBlack flex flex-col  justify-around">
                <div>
                    <h1 className="font-medium text-white
                     text-[30px] sl:text-[24px] t:text-[22px]
                    leading-[45px] sl:leading-[36px] t:leading-[33px]
                    pl-[19px] sl:pl-[16px] t:pl-[15px]
                    ">
                        50% Off on your booking
                    </h1>
                    <p className="font-medium  text-white
                    text-[24px] sl:text-[20px] t:text-[18px]
                    leading-[43px] sl:leading-[36px] t:leading-[33px]
                     pl-[19px] sl:pl-[16px] t:pl-[15px]
                    ">
                        Body Work & Paint + Tire Services & Auto Glass Replace
                    </p>
                </div>
                <Link className="flex flex-col" to={"offers/id"}>
                    <Button className=" self-end flex items-center justify-center border border-s-4  border-pumpkin normal-case
                    w-[183px] sl:w-[151px] t:w-[151px]
                    h-[45px] sl:h-[36px] t:h-[36.41px]
                    text-[20px] sl:text-[16px] t:text-[16px]
                    leading-[20px] sl:leading-[16px] t:leading-[16px]
                    mr-[33px] sl:mr-[27px] t:mr-[27px]
                    ">
                        More Details
                    </Button>
                </Link>
                <div className=" flex items-start absolute left-2/5 top-1/2   transform -translate-y-1/2 ">
                    <StarIcon />
                </div>
                <p
                    className=" flex items-start text-white absolute  left-2/5  top-1/2   transform translate-x-[10px]  -translate-y-1/2 "
                >
                    20%
                </p>
            </div>
        </div>
    )
}

export default OfferCard