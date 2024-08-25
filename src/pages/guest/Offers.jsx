import { Link } from "react-router-dom"
import SectionTitle from "../../components/ui/SectionTitle"
import { Button, Card, CardBody, CardFooter, Typography } from "@material-tailwind/react"
import Carousel from "../../components/compositeUi/Carousel"
import CardHeader from "../../components/compositeUi/CardHeader"
import offer1 from "../../assets/offer1.png";
import noOffers from "../../assets/noOffers.png";
import car from "../../assets/car.gif";
function Offers() {
    // const OffersData = []
    const OffersData = [
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20",
            img: "link "
        },
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20"
        },
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20"
        },
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20"
        },
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20"
        },
        {
            title: "50% Off on your booking",
            des: "Body Work & Paint + Tire Services & Auto Glass Replace",
            dis: "20"
        },
    ]
    return (
        <div className=" w-11/12 mx-auto  my-10">

            <SectionTitle maintext="Our Latest" spantext={"Offers"} className={"!justify-start"} />
            {OffersData?.length > 0 ? (
                <>
                    <div className="flex items-center justify-center flex-wrap gap-12 my-10">
                        {
                            OffersData.map((offer, index) => (
                                <Card key={index} className="w-full max-w-[22rem] shadow-lg">
                                    <Link to={`offer-details/1`}>
                                        <CardHeader discount={offer.dis} discountClassName="text-white">
                                            <img src={offer1} alt="offer 50% Off on your booking" className="w-full h-[50%]" />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography>
                                                <Typography variant="h5" className="font-medium text-[#024AA8]">
                                                    {offer.title}
                                                </Typography>
                                                <Typography color="gray">
                                                    {offer.des}
                                                </Typography>
                                            </Typography>
                                        </CardBody>
                                    </Link>
                                    <CardFooter>
                                        <Button size="lg" fullWidth={true} className="bg-[#024AA8] text-white border">
                                            GET OFFER
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                    </div>
                    <div className=" flex justify-center items-center">
                        <Link to="offers">
                            <Button className=" normal-case text-[#024AA8]
                    text-sm  sm:text-lg md:text-xl  lg:text-2xl !bg-white border border-[#024AA8]
                ">
                                View More Offers
                            </Button>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="flex flex-col justify-center items-center py-10 ">
                    <img src={noOffers} className={`h-72 w-auto ml-10`} />
                    <Typography
                        variant="h3"
                    >
                        There are no packages now!
                    </Typography>
                    <Typography
                        variant="text"
                    >
                        Look like there are no offers at the moment. Kindly check our offers latter.
                    </Typography>
                </div>

            )}



            <SectionTitle maintext="Pick your perfect" spantext={" package"} className={"!justify-start my-10  "} />
            {
                OffersData?.length > 0 ? (
                    <div className="py-10">
                        <Carousel>
                            {
                                OffersData.map((offer, index) => (
                                    <Card key={index} className="w-full max-w-[22rem] shadow-lg">
                                        <CardHeader discount={offer.dis} StarIconColor={"#024AA8"} discountClassName="text-white">
                                            <img src={offer1} alt="offer 50% Off on your booking" className="w-full h-[50%]" />
                                        </CardHeader>
                                        <CardBody>
                                            <Typography>
                                                <Typography variant="h5" className="font-medium text-[#024AA8]">
                                                    {offer.title}
                                                </Typography>
                                                <Typography color="gray">
                                                    {offer.des}
                                                </Typography>
                                            </Typography>
                                        </CardBody>
                                        <CardFooter>
                                            <Button size="lg" fullWidth={true} className="bg-[#F55F1D] text-white border border-red-300">
                                                Schedule an Appointment
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))
                            }
                        </Carousel>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center py-10 ">
                        <img src={noOffers} className={`h-72 w-auto ml-10`} />
                        <Typography
                            variant="h3"
                        >
                            There are no offers now!
                        </Typography>
                        <Typography
                            variant="text"
                        >
                            Look like there are no packages at the moment. Kindly check our packages latter.
                        </Typography>
                    </div>
                )
            }



            <figure className="relative h-[400px] w-full my-10 overflow-hidden">
                <img
                    className=" w-full rounded-xl object-cover object-center h-[490px]"
                    src={car}
                    alt="nature image"
                />
                <figcaption className="absolute bottom-0 left-2/4 flex w-full h-[40%] -translate-x-2/4  rounded-xl border border-white bg-[#1B1E2099] py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm justify-around flex-col">

                    <Typography variant="h3" color="white" className="self-center">
                        Looking for a place you can trust to keep your vehicles rolling.
                    </Typography>
                    <Link to="offers" className="self-end">
                        <Button className=" normal-case text-white text-sm  sm:text-lg md:text-xl  lg:text-2xl !bg-[#F55F1D] h-12 w-64 flex justify-center items-center ">
                            Book a service
                        </Button>
                    </Link>
                </figcaption>
            </figure>


        </div>
    )
}

export default Offers