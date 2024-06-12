import { Link, useLocation } from "react-router-dom"
import logo from "../../assets/logo.png"
import Button from "../ui/Button";
import Image from "../ui/Image";
import "./navbar.css"
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
            <div className="logo-wrapper">
                <Image src={logo} alt={"logo"} className="logo-img" />
                <h1 className="logo-text">katy <span className="logo-span-text">auto care</span></h1>
            </div>
            <ul className="links-wrapper">
                {navLinks.map(link => <li className={`links-list ${location.pathname === link.route ? "selected-route" : ""}`} key={link.route}><Link className="links" to={link.route}>{link.title}</Link></li>)}
            </ul>
            <div className="auth">
                <Button className="login" title="Login" />
                <Button className="register" title="Register" />
            </div>
        </nav>
    )
}

export default Navbar