import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "@material-tailwind/react";
import Image from "../ui/Image";
import menu from "../../assets/menu.png";
import backArrow from "../../assets/backArrow.png";
import phone from "../../assets/phone.png";
import loc from "../../assets/location.png";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    { route: "/", title: "Home" },
    { route: "/offers", title: "Offers" },
    { route: "/services", title: "Services" },
    { route: "/vehicles", title: "Vehicles Inventory" },
    { route: "/about", title: "About Us" },
  ];

  const location = useLocation();

  return (
    <nav className="fixed top-0 z-10 w-full">
      <section className="bg-midnightBlack flex w-full items-center h-auto flex-wrap text-white font-normal justify-center sm:justify-around gap-2 px-1 text-[7px] sm:text-xs md:text-sm lg:text-lg xl:text-xl">
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
      </section>
      <section
        className="w-full  bg-white shadow-nav z-20 flex  items-center
                justify-around md:justify-between  
                py-1 sm:py-4 
                md:px-7 sm:px-5 "
      >
        <Link to="/">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="logo"
              className=" h-auto w-10 sm:w-16 md:w-20"
            />
            <h1
              className="font-poppins font-bold uppercase text-charcoal whitespace-nowrap 
                        text-xs sm:text-lg md:text-2xl xl:text-xl"
            >
              katy <span className="text-pumpkin">auto care LLC</span>
            </h1>
          </div>
        </Link>
        <ul className="hidden xl:flex items-center gap-3">
          {navLinks.map((link) => (
            <li
              key={link.route}
              className={`text-[20px] lg:text-[16px] font-medium leading-[30px] uppercase mx-2 whitespace-nowrap ${
                location.pathname === link.route
                  ? "border-b-2 border-pumpkin text-pumpkin"
                  : "text-midnightBlack"
              } hover:border-b-2 hover:border-pumpkin hover:text-pumpkin`}
            >
              <Link to={link.route}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden xl:flex gap-7">
          <Link to="login">
            <Button className="text-[20px] lg:text-[16px] w-[106px] lg:w-[88px] font-medium bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg py-2.5 px-3.5 normal-case">
              Login
            </Button>
          </Link>
          <Link to="register">
            <Button className="text-[20px] lg:text-[16px] font-medium text-white bg-navyBlue border border-white rounded-lg py-2.5 px-3.5 normal-case">
              Register
            </Button>
          </Link>
        </div>

        <img
          src={menu}
          alt="menu"
          className="h-auto w-5 sm:w-8 xl:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </section>

      <section
        className={`bg-white mt-[2.5px] px-5 py-10 ${
          showMenu ? "block" : "hidden"
        } xl:hidden`}
      >
        <img
          src={backArrow}
          alt="back arrow"
          onClick={() => setShowMenu((prev) => !prev)}
          className="cursor-pointer h-auto w-4 sm:w-7 md:w-8"
        />
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li
              key={link.route}
              className={` font-medium  uppercase mx-2 whitespace-nowrap ${
                location.pathname === link.route
                  ? "border-pumpkin text-pumpkin"
                  : "text-midnightBlack"
              } hover:border-pumpkin hover:text-pumpkin
                            text-sm sm:text-lg md:text-xl
                            `}
            >
              <Link
                onClick={() => setShowMenu((prev) => !prev)}
                to={link.route}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <div className="flex gap-2">
            <Link to="login">
              <Button
                onClick={() => setShowMenu((prev) => !prev)}
                className="w-[135px]  font-medium bg-white text-midnightBlack hover:text-white hover:bg-navyBlue border border-navyBlue rounded-lg  p-3.5 normal-case
                                text:sm sm:text-lg md:text-xl
                                "
              >
                Login
              </Button>
            </Link>
            <Link to="register">
              <Button
                onClick={() => setShowMenu((prev) => !prev)}
                className=" w-[135px] font-medium text-white bg-navyBlue border border-white rounded-lg p-3.5  normal-case
                                text:sm sm:text-lg md:text-xl
                                "
              >
                Register
              </Button>
            </Link>
          </div>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
