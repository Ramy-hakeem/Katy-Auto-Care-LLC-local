import ReviewCard from '../compositeUi/ReviewCard'
import Image from '../ui/Image'
import googleRate from "../../assets/googleRate.png"
import SectionTitle from '../ui/SectionTitle'
import Description from '../ui/Description'
import Carousel from '../compositeUi/Carousel'
function RatingSection() {
    return (
        <div className='flex flex-col  justify-around items-center gap-5 my-20  w-full '>
            <div className='flex flex-col items-center justify-center gap-5
            '>

                <SectionTitle maintext="What Our Clients Say" />
                <Description text="Read testimonials from satisfied customers who trust Katy Auto Care LLC for their vehicle maintenance and repair needs."
                    className={`text-center 
                        text-black mx-auto
                        mb-3
                        w-11/12
                        text-sm sm:text-lg lg:text-xl xl:text-xl 
                    `}
                />
            </div>

            <a target="_blank" href='https://www.google.com/maps/place/Katy+Auto+Care+LLC/@29.864924,-95.703583,15z/data=!4m8!3m7!1s0x8640d7996194365d:0x57ade83228758c7!8m2!3d29.8649242!4d-95.7035831!9m1!1b1!16s%2Fg%2F11rs9ls6sg?hl=en&entry=ttu'>
                <Image src={googleRate} alt='google rate' className='h-auto w-52 sm:w-64 md:w-72 lg:w-80' />
            </a>
            <Carousel cards={<ReviewCard />} arrowIsUnder={true} />


        </div>
    )
}

export default RatingSection