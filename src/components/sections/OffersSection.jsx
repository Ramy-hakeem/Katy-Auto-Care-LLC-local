import { Button } from '@material-tailwind/react'
import Carousel from '../compositeUi/Carousel'
import SectionTitle from '../ui/SectionTitle'
import { Link } from 'react-router-dom'
import OfferCard from '../compositeUi/OfferCard'

function OffersSection() {
    return (

        <div className='px-5 items-center flex flex-col justify-between 
        h-[776px] sl:h-[612px] 
        '>
            <SectionTitle
                maintext={"Our Latest Offers"}
                className={"mb-[30px]"}

            />
            <Carousel cards={<OfferCard />} />
            <div className='flex justify-center items-center'>
                <Link to={"offers"}>
                    <Button className='bg-pumpkin  normal-case flex justify-center items-center
                    w-[318px] sl:w-[250px] t:w-[221px]
                    h-[71px] sl:h-[56px] t:h-[49px]
                    text-[24px] sl:text-[20px] t:text-[18px]
                    mt-[30px] sl:mt-[45px] t:mt-[50px]
                    '>
                        View More Offers
                    </Button>
                </Link>
            </div>
        </div>


    )
}

export default OffersSection