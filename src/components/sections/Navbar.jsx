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


    return (
        <nav className="fixed z-10 w-full ">
            <section className=" bg-midnightBlack flex justify-center items-center text-white font-normal 
            text-[22px] sl:text-[16px] t:text-[16px] 
             h-[3vh]
             ">
                <span>Katy Auto Care LLC&nbsp;-&nbsp; </span>
                <a target="_blank" href="https://www.google.com/maps/place/Katy+Auto+Care+LLC/@29.864924,-95.703583,15z/data=!4m6!3m5!1s0x8640d7996194365d:0x57ade83228758c7!8m2!3d29.8649242!4d-95.7035831!16s%2Fg%2F11rs9ls6sg?hl=en&entry=ttu"> 19150 W little York Rd Katy TX 77449</a>
                &nbsp;-&nbsp;
                <span
                    className="cursor-pointer"
                    onClick={() => navigator.clipboard.writeText("832-543-3334")}
                >
                    832-543-3334
                </span>
                &nbsp;/&nbsp;
                <span
                    className="cursor-pointer"
                    onClick={() => navigator.clipboard.writeText("832-543-3334")}
                >281-815-3037
                </span>
            </section>
            <section
                className="w-full bg-white shadow-md flex justify-around t:justify-between items-center
             h-[91px] sl:h-[76px] t:h-[70px] t:px-9
            ">
                <Link to={"/"}>
                    <div className="flex items-center">
                        <Image src={logo} alt="logo"
                            className="w-[93px] sl:w-[75px] t:w-[72px]
                             h-[63px] sl:h-[50px] t:h-[49px]" />
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
                        <Button className="text-[20px] sl:text-[16px] font-medium  text-whit text-white bg-navyBlue border border-white   rounded-lg py-2.5 px-3.5 normal-case  " >
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
