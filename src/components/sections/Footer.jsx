import Icon from "../../assets/Icon"
import Image from "../ui/Image"
import appStore from "../../assets/appStore.png"
import googlePlay from "../../assets/googlePlay.png"

function Footer() {
    return (
        <footer className='mt-20 w-full  overflow-hidden  bg-midnightBlack '>
            <section className='py-6 mx-5   w-full flex justify-around items-center  '>
                <div >
                    <h1 className='font-semibold mb-4   text-2xl text-white'>
                        Opening Hours
                    </h1>
                    <table className='text-[#F5F7FA]   font-light text-lg'>
                        <tbody>
                            <tr>
                                <td className='pr-8'> Monday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Tuesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Wednesday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Thursday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Friday</td>
                                <td>8.00 AM – 6.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Saturday</td>
                                <td>8.00 AM – 2.00 PM</td>
                            </tr>
                            <tr>
                                <td className='pr-8'> Sunday</td>
                                <td>closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='w-1/3 pl-8  '>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.8885029759367!2d-95.70290631016641!3d29.866969684639763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d7996194365d%3A0x57ade83228758c7!2sKaty%20Auto%20Care%20LLC!5e0!3m2!1sen!2seg!4v1707829477365!5m2!1sen!2seg"
                        className='w-full h-72'
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >
                    </iframe>
                </div>

                <div className="mt-8">

                    <h1 className='font-semibold w-fit  mb-2 text-2xl text-white'>
                        Address
                    </h1>
                    <p className=' text-[#F5F7FA] text-wrap mb-5  font-light text-lg w-96'>
                        19150 W Little York Rd UNIT 201, Katy, TX 77449, United States
                    </p>
                    <h1 className='font-semibold w-fit   text-2xl mb-2 text-white'>
                        Call Us
                    </h1>
                    <p className=' text-[#F5F7FA] mb-2 font-light text-lg w-2/3 flex  items-center gap-2' >

                        <Icon name={"phone"} />  18325433334
                    </p>

                    <p className=' text-[#F5F7FA] mb-2 font-light text-lg w-2/3 flex  items-center gap-2'>
                        <Icon name={"tel"} /> 281-815-3037
                    </p>
                    <div className="flex justify-start gap-3 w-fit  items-center my-4">
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center">
                            <Icon name={"insta"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center">
                            <Icon name={"ball"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center">
                            <Icon name={"twitter"} />
                        </div>
                        <div className=" w-11 h-11 m-0 p-0 rounded-full bg-[#323436] flex justify-center items-center">
                            <Icon name={"youtube"} />
                        </div>
                    </div>

                </div>
            </section>
            <hr className="w-full mb-4 border-gray-800  max-h-0.5" />
            <section className="flex my-6 flex-col justify-center items-center">
                <h1 className="text-white font-bold text-4xl ">
                    Keep Your Car in Top Shape
                </h1>
                <p className=' text-[#F5F7FA] text-wrap mb-8  font-normal  text-lg w-2/3 my-4 text-center'>
                    Tap the button to get the QR code and enjoy exclusive offers on Android or iOS with Katy Auto Care LLC mobile app.
                </p>
                <div className='flex justify-center items-center gap-10 w-4/6'>
                    <Image src={googlePlay} className='w-auto h-12' />
                    <Image src={appStore} className='w-auto h-12' />
                </div>
            </section>
            <hr className="w-2/3  border-gray-800  max-h-0.5 mx-auto" />

            <section className="my-6 flex justify-center text-center">
                <p className=' text-[#F5F7FA] text-wrap text-center  font-light text-lg w-96'>
                    <small>Copyright &copy; {new Date().getFullYear()} Katy Auto Care LLC <br /> All rights reserved</small>
                </p>
            </section>
        </footer>
    )
}

export default Footer