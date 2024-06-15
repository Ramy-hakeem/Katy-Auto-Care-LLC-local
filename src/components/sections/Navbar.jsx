import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@material-tailwind/react";
import Image from "../ui/Image";

function Navbar() {
    const navLinks = [
        { route: "/", title: "Home" },
        { route: "/offers", title: "Offers" },
        { route: "/services", title: "Services" },
        { route: "/vehicles", title: "Vehicles Inventory" },
        { route: "/about", title: "About Us" }
    ];

    const location = useLocation();

    return (
        <nav className="w-full h-[91px] bg-white shadow-md flex justify-around items-center">
            <div className="flex items-center">
                <Image src={logo} alt="logo" className="w-[93px] h-[63px]" />
                <h1 className="font-poppins text-[28px] font-bold leading-[42px] uppercase text-charcoal whitespace-nowrap">
                    katy <span className="text-pumpkin">auto care</span>
                </h1>
            </div>
            <ul className="flex items-center gap-3">
                {navLinks.map(link => (
                    <li
                        key={link.route}
                        className={`text-[20px] font-medium leading-[30px] uppercase mx-2 whitespace-nowrap ${location.pathname === link.route ? "border-b-2 border-pumpkin text-pumpkin" : "text-midnightBlack"} hover:border-b-2 hover:border-pumpkin hover:text-pumpkin`}
                    >
                        <Link to={link.route}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex gap-7">
                <Button className="text-[20px] font-medium leading-[30px] bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg py-2.5 px-3.5 " >
                    Login
                </Button>
                <Button className="text-[20px] font-medium leading-[30px] bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg py-2.5 px-3.5 " >
                    Register
                </Button>
            </div>
        </nav >
    );
}

export default Navbar;
