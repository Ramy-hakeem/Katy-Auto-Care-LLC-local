import Image from '../ui/Image'
import mobileApp from "../../assets/mobilApp.png"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
function MobileAppSection() {
    return (
        <div>
            <div className='h-[500px] my-20 pr-28 bg-midnightBlack flex  justify-around items-center  '>
                <div className='flex justify-center flex-col gap-4 items-center'>
                    <h1 className='gradient text-5xl font-bold w-4/6 '>
                        Download Our App Don’t Miss Out!
                    </h1>
                    <p className='text-white my-8 font-medium text-2xl w-4/6'>
                        Enjoy exclusive offers, updates, and
                        easy scheduling right from your phone.
                    </p>
                    <div className='flex gap-10 w-4/6'>
                        <Image src={googlePlay} className='w-auto h-12' />
                        <Image src={appStore} className='w-auto h-12' />
                    </div>
                </div>
                <Image src={mobileApp} className='w-auto h-full' />

            </div>
        </div>
    )
}

export default MobileAppSection