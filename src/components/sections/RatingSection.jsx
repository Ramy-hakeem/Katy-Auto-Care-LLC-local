import ReviewCard from '../compositeUi/ReviewCard'
import Image from '../ui/Image'
import googleRate from "../../assets/googleRate.png"
import SectionTitle from '../ui/SectionTitle'
import Description from '../ui/Description'
function RatingSection() {
    return (
        <div className='flex flex-col gap-5 justify-around items-center'>
            <SectionTitle maintext='What Our Clients Say' />
            <Description className={"w-1/3 text-center"} text='Read testimonials from satisfied customers who trust Katy Auto Care LLC for their vehicle maintenance and repair needs.' />
            <Image src={googleRate} alt='google rate' className='w-80' />
            <div className='flex justify-around items-center gap-10'>
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </div>

        </div>
    )
}

export default RatingSection