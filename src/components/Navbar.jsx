import { Link, useLocation } from "react-router-dom"
import logo from "../assets/logo.png"
import Button from "./ui/Button";
import Image from "./ui/Image";
function Navbar() {
    const navLinks = [
        { route: "/", title: "Home" },
        { route: "/offers", title: "Offers" },
        { route: "/services", title: "Services" },
        { route: "/vehicles", title: "Vehicles Inventory" },
        { route: "/about", title: "About Us" }
    ];
    const location = useLocation()
    return (
        <nav className='navbar-wrapper'>
            <div className="logo">
                <Image src={logo} alt={"logo"} />
                <p>katy <span>auto care</span></p>
            </div>
            <ul className="sections">
                {navLinks.map(link => <li className={location.pathname === link.route ? "selected" : ""} key={link.route}><Link to={link.route}>{link.title}</Link></li>)}
            </ul>
            <div className="auth">
                <Button className="login" title="Login" />
                <Button className="register" title="Register" />
            </div>
        </nav>
    )
}

export default Navbar