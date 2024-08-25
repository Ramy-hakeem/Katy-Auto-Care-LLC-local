import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,

} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import Image from "../ui/Image";
import phone from "../../assets/phone.png";
import loc from "../../assets/location.png";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ProfileMenu from "../compositeUi/ProfileMenu";


export function StickyNavbar() {
    const [openNav, setOpenNav] = useState(false);
    const location = useLocation();
    const { state } = useAuth();
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = [
        { route: "/", title: "Home" },
        { route: "/offers", title: "Offers" },
        { route: "/services", title: "Services" },
        // { route: "/vehicles", title: "Vehicles Inventory" },
        { route: "/about-us", title: "About Us" },
        { route: "/add-car", title: "Add Car" },
    ]

    return (
        <nav className="sticky top-0 z-10">
            <nav className="bg-midnightBlack flex w-full items-center h-auto flex-wrap text-white font-normal justify-center sm:justify-around gap-2 px-1 text-[7px] sm:text-xs md:text-sm lg:text-lg xl:text-lg">
                <span>Katy Auto Care LLC &nbsp;</span>

                <a
                    target="_blank"
                    className="flex justify-center items-center"
                    href="https://www.google.com/maps/place/Katy+Auto+Care+LLC/@29.864924,-95.703583,15z/data=!4m6!3m5!1s0x8640d7996194365d:0x57ade83228758c7!8m2!3d29.8649242!4d-95.7035831!16s%2Fg%2F11rs9ls6sg?hl=en&entry=ttu"
                >
                    <span className="hidden md:flex justify-center items-center">
                        <img src={loc} alt="location" className="w-5 h-auto md:w-4" />
                        &nbsp;
                    </span>
                    19150 W little York Rd Katy TX 77449
                </a>
                <div className="flex justify-center items-center">
                    <span className="hidden md:flex justify-center items-center">
                        <img src={phone} alt="phone icon" className="w-6 h-auto md:w-5" />
                        &nbsp;
                    </span>
                    <span
                        className="cursor-pointer"
                        onClick={() => navigator.clipboard.writeText("832-543-3334")}
                    >
                        832-543-3334
                    </span>
                    &nbsp; &nbsp;
                    <span
                        className="cursor-pointer"
                        onClick={() => navigator.clipboard.writeText("832-543-3334")}
                    >
                        281-815-3037
                    </span>
                </div>
            </nav>


            <Navbar className=" z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 max-h-[768px] ">
                <div className="flex items-center justify-between text-blue-gray-900 ">
                    <Typography
                        as="div"
                        className="mr-4 cursor-pointer py-1.5 font-medium "
                    >
                        <Link to={"/"} className="flex justify-center items-center">
                            <Image
                                src={logo}
                                alt="logo"
                                className=" h-auto w-10 sm:w-16 md:w-16"
                            />
                            <h1
                                className="font-poppins font-bold uppercase text-charcoal whitespace-nowrap 
                        text-xs sm:text-md md:text-xl xl:text-lg"
                            >
                                katy <span className="text-pumpkin">auto care LLC</span>
                            </h1>
                        </Link>
                    </Typography>
                    <div className="mr-4 hidden xl:block">
                        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {navList.map((item) => (
                                <Typography
                                    key={item.title}
                                    as="li"
                                    variant="small"
                                    color="blue-gray"
                                    className={`p-1 font-normal uppercase ${location.pathname === item.route ? "border-b-2 border-pumpkin text-pumpkin" : "text-midnightBlack"} hover:border-b-2 hover:border-pumpkin hover:text-pumpkin`}
                                >
                                    <Link to={item.route} className="flex items-center">
                                        {item.title}
                                    </Link>
                                </Typography>

                            ))
                            }
                        </ul>
                    </div>
                    {

                        !state && (
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-x-4">
                                    <Link to="login">
                                        <Button
                                            variant="text"
                                            size="sm"
                                            className="hidden xl:inline-block text-midnightBlack hover:bg-navyBlue hover:text-white border border-navyBlue"
                                        >
                                            <span>Log In</span>
                                        </Button>
                                    </Link>
                                    <Link to="register">
                                        <Button
                                            variant="text"
                                            size="sm"
                                            className="hidden xl:inline-block text-white bg-navyBlue border hover:bg-navyBlue  border-white "
                                        >
                                            <span>Register</span>
                                        </Button>
                                    </Link>

                                </div>

                            </div>
                        )

                    }
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent xl:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                    {state && (
                        <ProfileMenu />
                    )}



                </div>
                <Collapse open={openNav} >
                    <div className="h-screen flex flex-col gap-5">
                        <ul className="   mt-2 mb-4 flex flex-col justify-center  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {navList.map((item) => (
                                <Typography
                                    key={item.title}
                                    as="li"
                                    variant="small"
                                    color="blue-gray"
                                    className={`p-1 font-normal   uppercase ${location.pathname === item.route ? " text-pumpkin" : "text-midnightBlack"}   hover:text-pumpkin`}
                                    onClick={() => setOpenNav(false)}
                                >
                                    <Link to={item.route} className="flex items-center justify-center">
                                        {item.title}
                                    </Link>
                                </Typography>

                            ))
                            }
                        </ul>
                        {!state && (
                            <div className="flex items-center justify-center gap-x-6">

                                <Link to="login">
                                    <Button
                                        variant="text"
                                        size="sm"
                                        className="  text-midnightBlack hover:bg-navyBlue hover:text-white border border-navyBlue"
                                    >
                                        <span>Log In</span>
                                    </Button>
                                </Link>
                                <Link to="register">
                                    <Button
                                        variant="text"
                                        size="sm"
                                        className="  text-white bg-navyBlue border hover:bg-navyBlue  border-white "
                                    >
                                        <span>Register</span>
                                    </Button>
                                </Link>

                            </div>
                        )}

                    </div>

                </Collapse>
            </Navbar>


        </nav>

    );
}