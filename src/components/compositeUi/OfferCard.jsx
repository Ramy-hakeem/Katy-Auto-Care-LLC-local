import { Button } from "@material-tailwind/react"
import offer1 from "../../assets/offer1.png"
import Image from "../ui/Image"
import StarIcon from "../../assets/StarIcon"

function OfferCard() {
    return (
        <div
            className="w-[350px] h-[450px]  shadow-xl rounded-lg  relative"
        >
            <Image src={offer1} alt="offer 50% Off on your booking" className="w-full h-[50%]" />
            <div className="w-full h-[50%] p-3 rounded-b-lg bg-midnightBlack flex flex-col  justify-around">
                <div>
                    <h1 className="font-medium pl-3 text-lg leading-10 text-white">
                        50% Off on your booking
                    </h1>
                    <p className="font-medium text-[12px] pl-3 leading-6 text-white">
                        Body Work & Paint + Tire Services & Auto Glass Replace
                    </p>
                </div>
                <Button className="w-36 self-end border mr-4 border-s-4 py-[6px] border-pumpkin">
                    More Details
                </Button>
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