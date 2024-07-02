import Image from '../ui/Image'
import mobileApp from "../../assets/mobilApp.png"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
import { Link } from 'react-router-dom'

//  h-[505px] sl:h-[423.38px] t:h-[299.41px] 
function MobileAppSection() {
    return (
        <div className=' my-20 pt-20 lg:pt-10 bg-midnightBlack flex flex-col  justify-around items-center
            px-5 xl:px-10
            w-full
            lg:flex-row
             
            '>
            <div
                className=' flex justify-around items-start flex-col gap-10  w-9/12 
            '>
                <h1 className='gradient  font-bold  lg:w-10/12 
                        text-xl sm:text-3xl  md:text-4xl
                     '>
                    Download Our App Don’t Miss Out!
                </h1>
                <p className='text-white font-medium lg:w-10/12 
                    text-lg sm:text-xl md:text-2xl
                     '>
                    Enjoy exclusive offers, updates, and
                    easy scheduling right from your phone.
                </p>
                <div className='flex 
                    gap-[15px] 
                     '>
                    <a target="_blank" href={"https://play.google.com/store/apps/details?id=com.katyautocar.katyautocar"}>
                        <Image
                            src={googlePlay}
                            className='
                               w-auto h-8 sm:h-11 md:h-14
                            '
                        />
                    </a>
                    <Link>
                        <Image
                            src={appStore}
                            className='
                                w-auto h-8 sm:h-11 md:h-14
                            '
                        />
                    </Link>
                </div>
            </div>
            <Image src={mobileApp}
                className='
                    mt-10  h-auto
                    w-5/12
                   
                '
            />

        </div>

    )
}

export default MobileAppSection