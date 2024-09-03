import { Button } from "@material-tailwind/react";
import Carousel from "../compositeUi/Carousel";
import SectionTitle from "../ui/SectionTitle";
import { Link } from "react-router-dom";
import OfferCard from "../compositeUi/OfferCard";

function OffersSection() {
  return (
    <div className="px-5 flex flex-col items-center justify-center gap-10 my-20 w-full  ">
      <SectionTitle maintext="Our Latest Offers" />
      <Carousel>
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </Carousel>
      <Link to="offers">
        <Button
          className="bg-pumpkin normal-case flex justify-center items-center
                 
                    text-sm  sm:text-lg md:text-xl  lg:text-2xl
                "
        >
          View More Offers
        </Button>
      </Link>
    </div>
  );
}

export default OffersSection;
