import ServiceCard from '../compositeUi/ServiceCard'
import SectionTitle from "../ui/SectionTitle"
import service1 from "../../assets/service1.png"
import service2 from "../../assets/service2.png"
import service3 from "../../assets/service3.png"
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function ServicesSection() {
    const services = [
        {
            "img": service1,
            "title": "General Automotive Repairs",
            "desc": "Highlight your expertise in a wide range of general automotive repairs. This can include services such as",
            "list": [
                "Our skilled technicians bring years of expertise.",
                "We ensure transparent pricing and personalized care.",
                " Our facility is equipped with the latest technology.",
                "We have a strong reputation for integrity and quality service."
            ]
        },
        {
            "img": service2,
            "title": "Routine Maintenance Services1",
            "desc": "Emphasize the importance of routine maintenance for vehicle longevity. Mention services like",
            "list": [
                "Oil changes.",
                "Tire rotations.",
                "Brake inspections.",
                "Fluid flushes."
            ]
        },
        {
            "img": service3,
            "title": "Routine Maintenance Services2",
            "desc": "Emphasize the importance of routine maintenance for vehicle longevity. Mention services like",
            "list": [
                "Wil changes.",
                "Tire rotations.",
                "Brake inspections.",
                "Fluid flushes."
            ]
        },
    ]
    return (
        <div
            className={`flex flex-col justify-around items-center gap-14 t:gap-0 `}
        >
            <SectionTitle maintext={`Our SERVICES`} />
            {services.map((service, index) => <ServiceCard key={service.title + service.title} img={service.img} title={service.title} desc={service.desc} list={service.list} index={index} />)}
            <Link to={"services"}>
                <Button className='bg-pumpkin  normal-case flex justify-center items-center
                    w-[318px] sl:w-[250px] t:w-[221px]
                    h-[71px] sl:h-[56px] t:h-[49px]
                    text-[24px] sl:text-[20px] t:text-[18px]
                    mb-[110px] sl:mb-[200px] t:mb-[85px] mt-[40px]
                    '>
                    View More Services
                </Button>

            </Link>
        </div>
    )
}

export default ServicesSection