import Icon from "../../assets/Icon"
import Image from "../ui/Image"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
import QR from "../../assets/QR.png"
import close from "../../assets/close.png"
import { useState } from "react"


function Footer() {
    const [qrCode, setQrCode] = useState(false)
    return (
        <footer className=' bg-midnightBlack  '>
            <section className='py-6 mx-5 flex flex-col lg:flex-row justify-around    
           
            '>
                <div >
                    <h1 className='font-semibold mb-4 text-white
                    
                    text-sm sm:text-xl md:text-2xl lg:text-xl
                    '>
                        Opening Hours
                    </h1>
                    <table className='text-[#F5F7FA]   font-light 
                   text-xs sm:text-sm md:text-lg lg:text-sm
                    '>
                        <tbody>
                            <tr className="md:h-5">
                                <td className='pr-8 '> Monday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Tuesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Wednesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Thursday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Friday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Saturday</td>
                                <td>8.00 AM – 2.00 PM</td>
                            </tr>
                            <tr className="md:h-5">
                                <td className='pr-8'> Sunday</td>
                                <td>closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.8885029759367!2d-95.70290631016641!3d29.866969684639763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d7996194365d%3A0x57ade83228758c7!2sKaty%20Auto%20Care%20LLC!5e0!3m2!1sen!2seg!4v1707829477365!5m2!1sen!2seg"
                    className=' py-5 lg:my-0 lg:ml-5
                    h-96 lg:h-auto
                    w-full lg:w-1/3 
                    content-center

                    '
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>


                <div className="mt-8 lg:mt-0  lg:ml-5 ">

                    <h1
                        className='font-semibold w-fit  mb-2  text-white 
                        text-sm sm:text-xl md:text-2xl lg:text-xl
                    '>
                        Address
                    </h1>
                    <p className=' text-[#F5F7FA] text-wrap mb-5  font-light 
                        text-xs sm:text-sm md:text-lg lg:text-sm
                        mr-3
                        max-w-52 sm:max-w-80 
                    '>
                        19150 W Little York Rd UNIT 201, Katy, TX 77449, United States
                    </p>
                    <h1 className='font-semibold w-fit    mb-2 text-white
                        text-sm sm:text-xl md:text-2xl lg:text-xl
                    '>
                        Call Us
                    </h1>
                    <div
                        className=' text-[#F5F7FA] mb-2 font-light flex  items-center gap-2
                            text-xs sm:text-sm md:text-lg lg:text-sm
                    ' >
                        <div className="flex lg:hidden justify-center items-center">
                            <Icon name={"phone"} height={"20"} width={"20"} />&nbsp;18325433334
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <Icon name={"phone"} />&nbsp;18325433334
                        </div>

                    </div>

                    <div className=' text-[#F5F7FA] mb-2 font-light flex  items-center gap-2
                   text-xs sm:text-sm md:text-lg lg:text-sm
                    '>
                        <div className="flex lg:hidden">
                            <Icon name={"tel"} height={"20"} width={"20"} />&nbsp;281-815-3037
                        </div>
                        <div className="hidden lg:flex  ">
                            <Icon name={"tel"} /> &nbsp;281-815-3037
                        </div>

                    </div>
                    <div className="flex justify-start gap-3 w-fit  items-center my-4">
                        <div className=" w-7 h-7 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                       
                        ">
                            <Icon name={"insta"} />
                        </div>
                        <div className=" w-7 h-7 m-0 p-0 rounded-full flex justify-center items-center
                        
                        ">
                            <Icon name={"ball"} />
                        </div>
                        <div className=" w-7 h-7 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                        
                        ">
                            <Icon name={"twitter"} />
                        </div>
                        <div className=" w-7 h-7 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                        
                        ">
                            <Icon name={"youtube"} />
                        </div>
                    </div>

                </div>
            </section>
            <hr className="w-full  mb-4 border-gray-800  max-h-0.5" />
            <section className="flex my-6 flex-col justify-center items-center">
                <h1 className="text-white font-bold
                    text-sm sm:text-xl md:text-2xl lg:text-xl
                
                ">
                    Keep Your Car in Top Shape
                </h1>
                <p className=' text-[#F5F7FA] text-wrap mb-8  font-normal  text-center
                    text-xs sm:text-sm md:text-lg lg:text-sm
                    px-5 md:px-10 
                '>
                    Tap the button to get the QR code and enjoy exclusive offers on Android or iOS with Katy Auto Care LLC mobile app.
                </p>
                <div className='flex justify-center items-center w-4/6
                gap-3
                '>

                    <Image
                        func={() => setQrCode(prev => !prev)}
                        src={googlePlay}
                        className='
                               w-auto h-8 sm:h-11 md:h-14
                            '
                    />
                    <Image
                        func={() => setQrCode(prev => !prev)}
                        src={appStore}
                        className='
                                w-auto h-8 sm:h-11 md:h-14
                            '
                    />
                </div>
            </section>
            <hr className="w-2/3  border-gray-800  max-h-0.5 mx-auto" />


            <p className=' text-[#F5F7FA]  text-center  font-light flex flex-col justify-center items-center  gap-2 py-2'>
                <small >Copyright &copy; {new Date().getFullYear()} Katy Auto Care LLC </small>
                <small className="">All rights reserved</small>
            </p>


            <section
                className={` ${qrCode ? "flex" : "hidden"} flex-col justify-around items-center gap-4
             h-96 
             w-full sm:w-2/3  md:size-2/3
            
            fixed
            py-14
            top-[50%] 
            left-[50%]
            transform
            -translate-x-1/2
            -translate-y-1/2
            bg-white`}>
                <h1 className="
                font-bold 
                text-center
                text-sm sm:text-lg md:text-2xl lg:2xl
                text-pumpkin
                ">
                    Scan to Download
                </h1>
                <p className=" 
                
                text-center
                font-normal
               text-xs sm:text-sm md:text-lg 
              w-3/4
                "
                >
                    Scan the QR code to download the Katy Auto Care LLC mobile app for exclusive offers and updates
                </p>
                <Image src={QR} className="h-auto w-28 sm:w-52" />
                <div
                    onClick={
                        () => setQrCode(prev => !prev)
                    }
                    className="absolute h-auto top-5 right-5 w-5 ">

                    <img src={close} alt="" />

                </div>
            </section>

        </footer>
    )
}

export default Footer