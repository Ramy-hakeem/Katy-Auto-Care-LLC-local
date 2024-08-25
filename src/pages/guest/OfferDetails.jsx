import { CheckCircleIcon, EllipsisHorizontalIcon } from "@heroicons/react/16/solid";
import { MinusIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
    Button,
    Chip,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Rating } from "@mui/material";
import { useState } from "react";



export default function OfferDetails() {
    return (
        <div className="flex flex-col">
            <div className="w-11/12 mx-auto py-10 flex justify-start gap-5 ">
                <OfferDetailsGallary />
                <ServiceDescribtion />
            </div >
            <Details />
        </div>

    )
}



function OfferDetailsGallary() {
    const data = [
        {
            imgelink:
                "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_660e49311f6a9d479e15f091_660e50ce0008eb6648c67ed8/scale_1200"
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://www.cheryinternational.com/data/tms/website/html/images/newtiggo7pro_banner.jpg",
        },
        {
            imgelink:
                "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Small/Engines/bd404ec6b3ff4d419b99c9d9bfdda683_6180bc55-a5b3-48e6-9a01-c165e4e261a3.jpeg"
        }
    ];

    const [active, setActive] = useState(
        "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_660e49311f6a9d479e15f091_660e50ce0008eb6648c67ed8/scale_1200");

    return (
        <div className="flex gap-4 w-1/2 items-center ">
            <div className=" gap-4 flex flex-col justify-around">
                {data.map(({ imgelink }, index) => (
                    <div key={index} >
                        <img
                            onClick={() => setActive(imgelink)}
                            src={imgelink}
                            className="h-28 w-52 max-w-full cursor-pointer rounded-lg object-cover object-center"
                            alt="gallery-image"
                        />
                    </div>
                ))}
            </div>
            <div className="w-3/4">
                <img
                    className="h-auto  max-w-full rounded-lg object-cover object-center md:h-[480px]"
                    src={active}
                    alt=""
                />
            </div>

        </div>
    );
}

function ServiceDescribtion() {
    const [count, setCount] = useState(1)
    return (
        <div className={`w-1/2 flex flex-col gap-7`}>
            <Typography
                variant="h2"
            >
                WHEEL ALIGNMENT
            </Typography>
            {/* <div className="flex">

                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly color="red"
                    sx={{
                        ".MuiRating-icon": {
                            color: "#F55F1D"
                        },
                        ".MuiRating-iconEmpty": {
                            color: "transparent"
                        }
                    }}
                />
                <Typography>
                    4.5 / 5
                </Typography>
            </div> */}
            <div className="flex items-center gap-3">
                <Typography
                    variant="h3"
                >
                    $260
                </Typography>
                <Typography
                    variant="h3"
                    className="text-[#0000004D]  line-through
                    "
                >
                    $460
                </Typography>
                <Chip variant="ghost" className="text-[#FF3333] bg-[#FF33331A] h-7 px-4" value="-40%" />
            </div>

            <Typography
                variant="p"
                className="text-[#00000099]"
            >
                At AutoCare Store, we understand that a car's appearance is not just about aesthetics
                but also about maintaining its value and protecting its exterior from environmental damage.
                Our complete car painting service offers a comprehensive solution to restore or change your vehicle's color,
                giving it a fresh and flawless finish. From surface preparation to applying premium-quality paint and finishing with protective coatings,
                we ensure that your car looks as good as new, with a durable and glossy finish that lasts. Whether you're looking to repair minor scratches,
                cover up wear and tear, or simply want a new look, our expert team is dedicated to delivering exceptional results that exceed your expectations.
            </Typography>
            <hr className="py-3" />
            <div className="flex justify-around gap-4">
                {/* <Button className="flex justify-between shrink-0 items-center w-1/4 bg-[#F0F0F0] text-black rounded-full text-2xl">
                    <PlusIcon
                        className="w-7"
                        onClick={() => setCount(prev => prev >= 1 ? prev + 1 : prev)}

                    />
                    <Typography
                        variant="span"
                        className="text-2xl"
                    >
                        {count}
                    </Typography>
                    <MinusIcon
                        className="w-7"
                        onClick={() => setCount(prev => prev == 1 ? prev : prev - 1)}
                    />

                </Button> */}
                <Button className="w-9/12 rounded-full">
                    Add to Cart
                </Button>
            </div>

        </div>
    )
}



function Details() {
    const [activeTab, setActiveTab] = useState("Service Details");
    const data = [
        {
            label: "Service Details",
            value: "Service Details",
            component: <ServiceDetails />,
        },
        // {
        //     label: "Rating & Reviews",
        //     value: "Rating & Reviews",
        //     component: <ReviewDetials />,
        // },
        {
            label: "FAQs",
            value: "FAQs",
            component: <FAQSDetails />,
        }
    ];
    return (
        <Tabs value={activeTab} className={`w-11/12 mx-auto`}>
            <TabsHeader
                className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                indicatorProps={{ className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none", }}
            >
                {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
            <TabsBody>
                {data.map(({ value, component }) => (
                    <TabPanel key={value} value={value}>
                        {component}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}


function ServiceDetails() {

    const serviceData = [
        {
            title: " WHEEL ALIGNMENT CHECK",
            des: `Maybe you have a crooked steering wheel, your vehicle pulls to one side or another,
                        or a gut feeling that something’s not right in your car after you hit a pothole.
                        A simple wheel alignment check can give you peace of mind that your car is on the straight and narrow—or
                        keep you one step ahead of costly repairs if it isn't.`
        },
        {
            title: " WHEEL ALIGNMENT CHECK",
            des: `Maybe you have a crooked steering wheel, your vehicle pulls to one side or another,
                        or a gut feeling that something’s not right in your car after you hit a pothole.
                        A simple wheel alignment check can give you peace of mind that your car is on the straight and narrow—or
                        keep you one step ahead of costly repairs if it isn't.`
        },
        {
            title: " WHEEL ALIGNMENT CHECK",
            des: `Maybe you have a crooked steering wheel, your vehicle pulls to one side or another,
                        or a gut feeling that something’s not right in your car after you hit a pothole.
                        A simple wheel alignment check can give you peace of mind that your car is on the straight and narrow—or
                        keep you one step ahead of costly repairs if it isn't.`
        },
        {
            title: " WHEEL ALIGNMENT CHECK",
            des: `Maybe you have a crooked steering wheel, your vehicle pulls to one side or another,
                        or a gut feeling that something’s not right in your car after you hit a pothole.
                        A simple wheel alignment check can give you peace of mind that your car is on the straight and narrow—or
                        keep you one step ahead of costly repairs if it isn't.`
        },
        {
            title: " WHEEL ALIGNMENT CHECK",
            des: `Maybe you have a crooked steering wheel, your vehicle pulls to one side or another,
                        or a gut feeling that something’s not right in your car after you hit a pothole.
                        A simple wheel alignment check can give you peace of mind that your car is on the straight and narrow—or
                        keep you one step ahead of costly repairs if it isn't.`
        },
    ]
    return (
        <div >
            <Typography variant="h3" className="text-black">
                Services Details
            </Typography>
            <div className="flex  flex-wrap justify-between">
                {serviceData.map(
                    ({ title, des }, index) => (

                        <Card key={index} className="mt-6 w-[48%]">
                            <CardBody>
                                <div className="flex justify-between items-center">
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-[#F55F1D] flex items-center  gap-2">
                                        <CheckCircleIcon className="w-5 text-[#01AB31]" />
                                        {title}
                                    </Typography>
                                    <EllipsisHorizontalIcon className="w-5" />
                                </div>
                                <Typography className="w-11/12" >
                                    {des}
                                </Typography>
                            </CardBody>
                        </Card>

                    )
                )}
            </div>


        </div>
    )
}


function ReviewDetials() {
    const ratingDate = [
        {
            title: "Samantha D.",
            des: `"AutoCare Store transformed my car! The paint job was flawless, and it looks brand new again."`,
            date: "Posted on August 14, 2024"

        },
        {
            title: "Samantha D.",
            des: `"AutoCare Store transformed my car! The paint job was flawless, and it looks brand new again."`,
            date: "Posted on August 14, 2024"
        },
        {
            title: "Samantha D.",
            des: `"AutoCare Store transformed my car! The paint job was flawless, and it looks brand new again."`,
            date: "Posted on August 14, 2024"

        },
        {
            title: "Samantha D.",
            des: `"AutoCare Store transformed my car! The paint job was flawless, and it looks brand new again."`,
            date: "Posted on August 14, 2024"

        },
        {
            title: "Samantha D.",
            des: `"AutoCare Store transformed my car! The paint job was flawless, and it looks brand new again."`,
            date: "Posted on August 14, 2024"

        },
    ]
    return (
        <div >
            <Typography variant="h3" className="text-black flex items-center">
                All Reviews
                <Typography variant="h6" className="text-[#00000099]">&nbsp; (451)</Typography>
            </Typography>
            <div className="flex  flex-wrap justify-between">
                {ratingDate.map(
                    ({ title, des, date }, index) => (

                        <Card key={index} className="mt-6 w-[48%]">
                            <CardBody>
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly color="red"
                                    sx={{
                                        ".MuiRating-icon": {
                                            color: "#F55F1D"
                                        },
                                        ".MuiRating-iconEmpty": {
                                            color: "transparent"
                                        }
                                    }}
                                />
                                <div className="flex justify-between items-center">
                                    <Typography variant="h5" color="blue-gray" className="mb-2 flex items-center  gap-2">
                                        {title}
                                        <CheckCircleIcon className="w-5 text-[#01AB31]" />
                                    </Typography>
                                    <EllipsisHorizontalIcon className="w-5" />
                                </div>
                                <Typography className="w-11/12" >
                                    {des}
                                </Typography>
                                <Typography className="w-11/12 py-3" >
                                    {date}
                                </Typography>
                            </CardBody>
                        </Card>

                    )
                )}
            </div>


        </div>
    )
}


function FAQSDetails() {
    const FAQData = [
        {
            title: " Why We Recommend This?",
            des: `It's best to have your alignment checked every 6,000 miles or twice a year. Even one misaligned wheel can wreak havoc on your fuel efficiency, and over time can lead to premature wear and tear on your vehicle. Keeping everything properly aligned ensures a smoother ride for you and a longer life for your tires.`
        },
        {
            title: " Why We Recommend This?",
            des: `It's best to have your alignment checked every 6,000 miles or twice a year. Even one misaligned wheel can wreak havoc on your fuel efficiency, and over time can lead to premature wear and tear on your vehicle. Keeping everything properly aligned ensures a smoother ride for you and a longer life for your tires.`
        },
        {
            title: " Why We Recommend This?",
            des: `It's best to have your alignment checked every 6,000 miles or twice a year. Even one misaligned wheel can wreak havoc on your fuel efficiency, and over time can lead to premature wear and tear on your vehicle. Keeping everything properly aligned ensures a smoother ride for you and a longer life for your tires.`
        },
        {
            title: " Why We Recommend This?",
            des: `It's best to have your alignment checked every 6,000 miles or twice a year. Even one misaligned wheel can wreak havoc on your fuel efficiency, and over time can lead to premature wear and tear on your vehicle. Keeping everything properly aligned ensures a smoother ride for you and a longer life for your tires.`
        },
        {
            title: " Why We Recommend This?",
            des: `It's best to have your alignment checked every 6,000 miles or twice a year. Even one misaligned wheel can wreak havoc on your fuel efficiency, and over time can lead to premature wear and tear on your vehicle. Keeping everything properly aligned ensures a smoother ride for you and a longer life for your tires.`
        },
    ]
    return (
        <div >
            <Typography variant="h3" className="text-black">
                Services Details
            </Typography>
            <div className="flex  flex-wrap justify-between">
                {FAQData.map(
                    ({ title, des }, index) => (

                        <Card key={index} className="mt-6 w-[48%]">
                            <CardBody>
                                <div className="flex justify-between items-center">
                                    <Typography variant="h5" color="blue-gray" className="mb-2 text-[#F55F1D] flex items-center  gap-2">
                                        <CheckCircleIcon className="w-5 text-[#01AB31]" />
                                        {title}
                                    </Typography>
                                    <EllipsisHorizontalIcon className="w-5" />
                                </div>
                                <Typography className="w-11/12" >
                                    {des}
                                </Typography>
                            </CardBody>
                        </Card>

                    )
                )}
            </div>


        </div>
    )
}


