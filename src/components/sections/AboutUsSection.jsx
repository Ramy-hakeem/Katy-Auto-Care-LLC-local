import SectionTitle from '../ui/SectionTitle'
import ServiceCard from '../compositeUi/ServiceCard'
import service1 from "../../assets/service1.png"

function AboutUsSection() {
    const aboutData = [
        {
            "img": service1,
            "title": "Excellence in Automotive Services",
            "desc": "At Katy Auto Care LLC, we are dedicated to providing exceptional automotive services.",
            "list": [
                "Our skilled technicians bring years of expertise.",
                "We offer a full range of services, from maintenance to repairs.",
                "We ensure transparent pricing and personalized care.",
                "Our facility is equipped with the latest technology.",
                "We have a strong reputation for integrity and quality service."
            ],
            isThereDesc: "Experience the difference at Katy Auto Care LLC, where your vehicle’s well-being is our top priority."
        }
    ]
    return (
        <div className='my-20 py-10 bg-midnightBlack flex flex-col justify-around items-center  '>
            <SectionTitle maintext='About us' />
            {aboutData.map((service, index) => <ServiceCard key={service.title} img={service.img} title={service.title} desc={service.desc} list={service.list} isThereDesc={service.isThereDesc} index={index} />)}
        </div>
    )
}

export default AboutUsSection