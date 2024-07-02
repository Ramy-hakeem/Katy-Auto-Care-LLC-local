import QR from "../../assets/QR.png"
import { useState } from "react"
const [qrCode, setQrCode] = useState(false)
{/* <section
                className={` ${qrCode ? "flex" : "hidden"} flex-col justify-around items-center
        h-auto 
        w-72
            fixed
            py-14
            top-[55%] md:top-[75%]
            left-[50%]
            transform
            -translate-x-1/2
            -translate-y-1/2
            bg-white`}>
                <h1 className=" text-pumpkin font-bold text-center
                text-lg
               
                ">
                    Scan to Download
                </h1>
                <p className=" text-center font-normal
                text-2xl sl:text-xl md:text-lg
                
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
            </section> */}