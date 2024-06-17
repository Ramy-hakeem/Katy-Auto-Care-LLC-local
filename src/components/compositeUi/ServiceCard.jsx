import Image from "../ui/Image"
import Description from "../ui/Description"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
function ServiceCard({ img, title, desc, list, index, isThereDesc }) {
    return (
        <div
            className={`h-96 w-10/12 p-8 bg-midnightBlack  flex gap-16 justify-between items-center  ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}
        >
            <div className="w-6/12 h-full flex flex-col justify-between">
                <h1 className="font-medium text-3xl text-white">
                    {title}
                </h1>
                <Description
                    text={desc}
                    className={"text-lg w-10/12"}
                />
                <ul className="list-image">

                    {list.map(serv => (
                        <li key={serv} className="text-white ml-4 items-center ">
                            {serv}
                        </li>
                    ))}


                </ul>
                {isThereDesc ? (
                    <Description
                        text={isThereDesc}
                        className={"text-lg"}
                    />
                ) : (
                    <Link to={"services/id"}>
                        <Button
                            className="text-sm w-48 font-medium  text-white hover:text-white hover:bg-pumpkin !border border-s-[0.1px] border-pumpkin rounded-lg py-2 my-3  " >
                            explore more
                        </Button>
                    </Link>
                )
                }


            </div>
            <Image src={img} className="w-6/12 h-full" />

        </div>
    )
}

export default ServiceCard