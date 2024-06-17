import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@material-tailwind/react";
import Image from "../ui/Image";
import menu from "../../assets/menu.png"
function Navbar() {
    const navLinks = [
        { route: "/", title: "Home" },
        { route: "/offers", title: "Offers" },
        { route: "/services", title: "Services" },
        { route: "/vehicles", title: "Vehicles Inventory" },
        { route: "/about", title: "About Us" }
    ];

    const location = useLocation();
    // sm 540 
    // md 720 
    // lg 960
    // xl 1140
    // 2xl 1320


    return (
        <nav>
            <section className=" bg-midnightBlack flex justify-center items-center text-white font-normal 
            text-[22px] sl:text-[16px] t:text-[12px] 
             h-[52px]  sl:h-[43.33px] t:h-[44px]
             ">
                Katy Auto Care LLC _ Complete Auto Repair & Body Shop _ 19150 W Little York Rd UNIT 201, Katy, TX 77449, United States _ 832-543-3334 / 281-815-3037
            </section>
            <section
                className="w-full bg-white shadow-md flex justify-around t:justify-between t:px-6 items-center
             h-[91px] sl:h-[76px] t:h-[70px]
            ">
                <Link to={"/"}>
                    <div className="flex items-center">
                        <Image src={logo} alt="logo"
                            className="w-[93px] sl:w-[75px] t:w-[72px]
                             h-[63px] sl:h-[50px] t:w-[49px]" />
                        <h1 className="font-poppins font-bold leading-[42px] uppercase text-charcoal whitespace-nowrap
                        text-[28px] sl:text-[22px] t:text-[24px]
                        ">
                            katy <span className="text-pumpkin">auto care</span>
                        </h1>
                    </div>
                </Link>
                <ul className="flex items-center gap-3 t:hidden">
                    {navLinks.map(link => (
                        <li
                            key={link.route}
                            className={`text-[20px] sl:text-[16px]  font-medium leading-[30px] uppercase mx-2 whitespace-nowrap ${location.pathname === link.route ? "border-b-2 border-pumpkin text-pumpkin" : "text-midnightBlack"} hover:border-b-2 hover:border-pumpkin hover:text-pumpkin`}
                        >
                            <Link to={link.route}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-7 t:hidden">
                    <Link to={"login"}>
                        <Button className="text-[20px] sl:text-[16px] w-[106px] sl:w-[88px]  font-medium l bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg py-2.5 px-3.5 normal-case" >
                            Login
                        </Button>
                    </Link>
                    <Link to={"register"}>
                        <Button className="text-[20px] sl:text-[16px] font-medium  bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg py-2.5 px-3.5 normal-case  " >
                            Register
                        </Button>
                    </Link>
                </div>


                <Image src={menu} alt="menu" className="w-[35px] h-[35px] hidden t:flex" />

            </section >
        </nav>
    );
}

export default Navbar;
