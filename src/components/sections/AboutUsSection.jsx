import ServiceCard from '../compositeUi/ServiceCard'
import service1 from "../../assets/service1.png"
import Image from '../ui/Image'
import arrow from '../../assets/left-arrow.png';


function AboutUsSection() {
    const aboutData = [
        {
            "img": service1,
            "title": "Excellence in Automotive Services",
            "desc": "At Katy Auto Care LLC, we are dedicated to providing exceptional automotive services.",
            "list": [
                "Our skilled technicians bring years of expertise.",
                "We ensure transparent pricing and personalized care.",
                "Our facility is equipped with the latest technology.",
                "We have a strong reputation for integrity and quality service."
            ],
            isThereDesc: "Experience the difference at Katy Auto Care LLC, where your vehicle’s well-being is our top priority."
        }
    ]
    return (
        <div className=' py-10 bg-midnightBlack flex flex-col justify-around items-center my-20  w-full lg:w-screen '>
            <div className={`flex items-center justify-center gap-2  `}>
                <Image src={arrow} alt="pointer"

                    className={`h-auto w-3 sm:w-5`}
                />
                <h1 className={`font-bold  text-white flex justify-center items-center
                text-sm sm:text-2xl lg:text-3xl  uppercase `}>
                    About Us
                </h1>
            </div>
            {aboutData.map((service, index) => <ServiceCard key={service.title} img={service.img} title={service.title} desc={service.desc} list={service.list} isThereDesc={service.isThereDesc} index={index} />)}
        </div>
    )
}

export default AboutUsSection