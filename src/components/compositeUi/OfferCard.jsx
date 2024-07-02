import { Button } from "@material-tailwind/react";
import offer1 from "../../assets/offer1.png";
import Image from "../ui/Image";
import StarIcon from "../../assets/StarIcon";
import { Link } from "react-router-dom";

function OfferCard() {
    return (
        <div className="shadow-xl rounded-lg relative
            w-[280px] sm:w-[358px] md:w-[358px] 
            h-[400px] sm:h-[470px] md:h-[500px]  ">
            <Image src={offer1} alt="offer 50% Off on your booking" className="w-full h-[50%]" />
            <div className="w-full h-[50%] p-3 rounded-b-lg bg-midnightBlack flex flex-col justify-around">
                <div className=" flex flex-col gap-3">
                    <h1 className="font-medium text-white
                        text-lg sm:text-xl md:text-2xl  
                        mt-2
                        pl-0 sm:pl-[15px] md:pl-[16px]  ">
                        50% Off on your booking
                    </h1>
                    <p className="font-medium text-white
                        text-sm sm:text-lg md:text-xl  
                        
                        pl-0 md:pl-[16px] sm:pl-[15px] xs:pl-0">
                        Body Work & Paint + Tire Services & Auto Glass Replace
                    </p>
                </div>
                <Link className="flex flex-col" to={"offers/id"}>
                    <Button className="self-end flex items-center justify-center border border-s-4 border-pumpkin normal-case
                       
                        text-sm sm:text-lg md:text-xl
                        
                        mr-[20px] md:mr-[27px] sm:mr-[27px] xs:mr-0">
                        More Details
                    </Button>
                </Link>
                <div className="flex items-start absolute left-2/5 top-1/2 transform -translate-y-1/2">
                    <StarIcon />
                </div>
                <p className="flex items-start text-white absolute left-2/5 top-1/2 transform translate-x-[10px] -translate-y-1/2 xs:text-sm">
                    20%
                </p>
            </div>
        </div>
    );
}

export default OfferCard;
