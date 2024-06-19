import Icon from "../../assets/Icon"
import Image from "../ui/Image"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"
import QR from "../../assets/QR.png"
import { useState } from "react"


function Footer() {
    const [qrCode, setQrCode] = useState(false)
    return (
        <footer className='mt-20 w-full  overflow-hidden  bg-midnightBlack '>
            <section className='py-6 mx-5   w-full flex justify-around items-center 
            t:pt-[54px]
            '>
                <div >
                    <h1 className='font-semibold mb-4   text-2xl text-white
                    t:text-[14px]
                    t:leading-[14.23px]
                    '>
                        Opening Hours
                    </h1>
                    <table className='text-[#F5F7FA]   font-light 
                    text-lg
                    t:text-[12px]
                    t:leading-[10.67px]
                    '>
                        <tbody>
                            <tr className="t:h-5">
                                <td className='pr-8 '> Monday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Tuesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Wednesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Thursday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Friday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Saturday</td>
                                <td>8.00 AM – 2.00 PM</td>
                            </tr>
                            <tr className="t:h-5">
                                <td className='pr-8'> Sunday</td>
                                <td>closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-1/3 pl-8 t:pl-0 t:-ml-5
                t:w-[338.54px]
                t:h-[201.14px]
                '>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.8885029759367!2d-95.70290631016641!3d29.866969684639763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d7996194365d%3A0x57ade83228758c7!2sKaty%20Auto%20Care%20LLC!5e0!3m2!1sen!2seg!4v1707829477365!5m2!1sen!2seg"
                        className='w-full h-72  t:w-[338.54px] t:h-[201.14px] '
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

                <div className="mt-8">

                    <h1 className='font-semibold w-fit  mb-2 text-2xl text-white
                    t:text-[14px]
                    t:leading-[19.92px]
                    '>
                        Address
                    </h1>
                    <p className=' text-[#F5F7FA] text-wrap mb-5  font-light 
                    text-lg t:text-[12px]
                    t:leading-[14.23px]
                     w-96 t:w-[212px]
                    '>
                        19150 W Little York Rd UNIT 201, Katy, TX 77449, United States
                    </p>
                    <h1 className='font-semibold w-fit   text-2xl mb-2 text-white
                    t:text-[14px]
                    t:leading-[19.92px]
                    '>
                        Call Us
                    </h1>
                    <p className=' text-[#F5F7FA] mb-2 font-light flex  items-center gap-2
                    text-lg t:text-[12px]
                    t:leading-[14.23px]
                    w-2/3 t:w-[212px]
                    ' >
                        <div className="flex t:hidden justify-center items-center">
                            <Icon name={"phone"} height={20} width={20} />&nbsp;18325433334
                        </div>
                        <div className="hidden t:flex justify-center items-center">
                            <Icon name={"phone"} />&nbsp;18325433334
                        </div>

                    </p>

                    <p className=' text-[#F5F7FA] mb-2 font-light flex  items-center gap-2
                    text-lg t:text-[12px]
                    t:leading-[14.23px]
                     w-2/3w-96 t:w-[212px]
                    '>
                        <div className="flex t:hidden">
                            <Icon name={"tel"} height={20} width={20} />&nbsp;281-815-3037
                        </div>
                        <div className="hidden t:flex  ">
                            <Icon name={"tel"} /> &nbsp;281-815-3037
                        </div>

                    </p>
                    <div className="flex justify-start gap-3 w-fit  items-center my-4">
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                        t:w-[22px]
                        t:h-[22px]
                        ">
                            <Icon name={"insta"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                         t:w-[22px]
                        t:h-[22px]
                        ">
                            <Icon name={"ball"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                         t:w-[22px]
                        t:h-[22px]
                        ">
                            <Icon name={"twitter"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center
                         t:w-[22px]
                         t:h-[22px]
                        ">
                            <Icon name={"youtube"} />
                        </div>
                    </div>

                </div>
            </section>
            <hr className="w-full mb-4 border-gray-800  max-h-0.5" />
            <section className="flex my-6 flex-col justify-center items-center">
                <h1 className="text-white font-bold text-4xl 
                t:text-[24px]
                t:leading-[33.2px]
                t:pl-[0px]
                ">
                    Keep Your Car in Top Shape
                </h1>
                <p className=' text-[#F5F7FA] text-wrap mb-8  font-normal  text-lg w-1/3 sl:w-2/5 t:w-3/5 my-4 text-center
              
                t:text-[15px]
                t:leading-[17.79px]
                t:pl-[20px]
                '>
                    Tap the button to get the QR code and enjoy exclusive offers on Android or iOS with Katy Auto Care LLC mobile app.
                </p>
                <div className='flex justify-center items-center gap-10 w-4/6'>

                    <Image
                        func={() => setQrCode(prev => !prev)}
                        src={googlePlay}
                        className='
                                w-[247px] sl:w-[206.55px] t:w-[129.84px]
                                h-[73px] sl:h-[61.2px] t:h-[43.28px]
                            ' />
                    <Image
                        func={() => setQrCode(prev => !prev)}
                        src={appStore}
                        className='
                                 w-[247px] sl:w-[206.55px] t:w-[129.84px]
                                h-[73px] sl:h-[61.2px] t:h-[43.28px]
                            ' />
                </div>
            </section>
            <hr className="w-2/3  border-gray-800  max-h-0.5 mx-auto" />

            <section className="my-6 t:py-0 t:my-0 flex justify-center text-center">
                <p className=' text-[#F5F7FA]  text-center  font-light text-lg t:text-[10px] flex flex-col justify-center items-center'>
                    <small className=" t:h-3">Copyright &copy; {new Date().getFullYear()} Katy Auto Care LLC </small>
                    <small className="">All rights reserved</small>
                </p>
            </section>

            <section
                className={` ${qrCode ? "flex" : "hidden"} flex-col justify-around items-center
            w-[800px] sl:w-[700px] t:w-[600px]
            h-[800px] sl:h-[700px] t:h-[600px]
            fixed
            py-14
            top-[55%] t:top-[75%]
            left-[50%]
            transform
            -translate-x-1/2
            -translate-y-1/2
            bg-white`}>
                <h1 className="
                font-bold 
                text-center
                text-[44px] t:text-[35px]
                leading-[28px]
                text-pumpkin
                ">
                    Scan to Download
                </h1>
                <p className=" 
                w-[650px] sl:w-[550px] 
                text-center
                font-normal
                text-2xl sl:text-xl t:text-lg
                leading-[28px]
                "
                >
                    Scan the QR code to download the Katy Auto Care LLC mobile app for exclusive offers and updates
                </p>
                <Image src={QR} className="w-[379px] h-[376px]" />
                <div
                    onClick={
                        () => setQrCode(prev => !prev)
                    }
                    className="absolute top-10 right-10">
                    <Icon name="close" />
                </div>
            </section>

        </footer>
    )
}

export default Footer