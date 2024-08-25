import React from 'react'
import { Typography } from '@material-tailwind/react'
import heroImage from "../../assets/hero.png"

function AboutUs() {
    return (
        <figure className="relative h-screen w-full">
            <img
                className="h-full w-full rounded-xl object-cover object-center"
                src={heroImage}
                alt="nature image"
            />
            <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Sara Lamalo
                    </Typography>
                    <Typography color="gray" className="mt-2 font-normal">
                        20 July 2022
                    </Typography>
                </div>
                <Typography variant="h5" color="blue-gray">
                    Growth
                </Typography>
            </figcaption>
        </figure>

    )
}

export default AboutUs