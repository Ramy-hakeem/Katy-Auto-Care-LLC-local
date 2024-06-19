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
        <div className=' py-10 bg-midnightBlack flex flex-col justify-around items-center  '>
            <div className={`flex items-center justify-center gap-2 mb-4 `}>
                <Image src={arrow} alt="pointer"

                    className="
            w-[30] sl:w-[25px] t:w-[20px]
            -[34px] sl:h-[28px] t:h-[22px]
             "/>
                <h1 className=" font-bold leading-17 text-white flex justify-center items-center
            text-[38px] sl:text-[30px] t:text-[24px] uppercase  
            ">
                    about us
                </h1>
            </div>
            {aboutData.map((service, index) => <ServiceCard key={service.title} img={service.img} title={service.title} desc={service.desc} list={service.list} isThereDesc={service.isThereDesc} index={index} />)}
        </div>
    )
}

export default AboutUsSection