import Image from '../ui/Image'
import mobileApp from "../../assets/mobilApp.png"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
import { Link } from 'react-router-dom'
function MobileAppSection() {
    return (
        <div className=' overflow-hidden bg-midnightBlack flex  justify-around items-center
            h-[864px] sl:h-[724.35px] t:h-[512.26px]
            px-[108px] sl:px-[90px] t:px-[62px]
            pt-[115px] sl:pt-[95px] t:pt-[68px]
            
            '>
            <div className='flex justify-around flex-col  
                 w-[673px] sl:w-[557px] t:w-[396px]
                 h-[505px] sl:h-[423.38px] t:h-[299.41px]
                '>

                <h1 className='gradient  font-bold  
                        text-[70px] sl:text-[58px] t:text-[40px]
                        leading-[105px] sl:leading-[87px] t:leading-[60px]
                     '>
                    Download Our App Don’t Miss Out!
                </h1>
                <p className='text-white font-medium
                    w-[672px] sl:w-[554px] t:w-[396px]
                    text-[34px] sl:text-[28px] t:text-[20px]
                    leading-[51px] sl:leading-[42px] t:leading-[30px]
                     '>
                    Enjoy exclusive offers, updates, and
                    easy scheduling right from your phone.
                </p>
                <div className='flex 
                    gap-[15px] t:gap-[10px]
                     '>
                    <a target="_blank" href={"https://play.google.com/store/apps/details?id=com.katyautocar.katyautocar"}>
                        <Image src={googlePlay} className='
                                w-[247px] sl:w-[206.55px] t:w-[129.84px]
                                h-[73px] sl:h-[61.2px] t:h-[43.28px]
                            ' />
                    </a>
                    <Link>
                        <Image
                            src={appStore}
                            className='
                                 w-[247px] sl:w-[206.55px] t:w-[129.84px]
                                h-[73px] sl:h-[61.2px] t:h-[43.28px]
                            ' />
                    </Link>
                </div>
            </div>
            <Image src={mobileApp}
                className='
                    w-[740px] sl:w-[620px] t:w-[440px]
                    h-[835px] sl:h-[700px] t:h-[495px]
                ' />

        </div>

    )
}

export default MobileAppSection