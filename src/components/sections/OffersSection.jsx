import { Button } from '@material-tailwind/react'
import Carousel from '../compositeUi/Carousel'
import SectionTitle from '../ui/SectionTitle'
import { Link } from 'react-router-dom'
import OfferCard from '../compositeUi/OfferCard'

function OffersSection() {
    return (
        <div className='h-screen p-5 items-center flex flex-col gap-3 justify-around  my-20   '>
            <SectionTitle maintext={"Our Latest Offers"} />
            <Carousel cards={<OfferCard />} />
            <Link to={"offers"}>
                <Button className='bg-pumpkin w-60'>
                    View More Offers
                </Button>
            </Link>
        </div>
    )
}

export default OffersSection